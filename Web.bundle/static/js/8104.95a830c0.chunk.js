"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8104],{

/***/ 70752:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24468);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46476);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(42418);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */







const AccountSelect = () => {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__/* .useNavigate */ .i)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useCurrentAccount */ ._A)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .W, {
    justifyBetween: true,
    itemsCenter: true,
    px: "md",
    py: "md",
    rounded: true,
    onClick: e => {
      navigate('SwitchAccountScreen');
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .a, {
      text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .shortAddress */ .SO)(currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.alianName, 8)
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountSelect);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 99340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69508);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36224);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(49476);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46476);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96651);
/* harmony import */ var _ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96447);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(48818);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(37656);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(90768);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77980);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__]);
_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const MainWebSiteBar = () => {
  // const activeTab = await getCurrentTab();
  const [curTab, setCurTab] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .useWallet */ .e6)();
  const [activeTab, setActiveTab] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(null);
  // 是否浏览器中打开
  const [isInTab, setIsInTab] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .i)();
  const getActiveTab = async () => {
    const isInTab = await (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .extensionIsInTab */ .mG)();
    if (isInTab) return;
    setIsInTab(false);
    const sites = await wallet.getConnectedSites();
    if (!sites.length) return;
    const activeTab = await (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .getCurrentTab */ .YP)();
    setActiveTab(activeTab);
    const tab = sites.find(site => activeTab.url.includes(site.origin));
    setCurTab(tab);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    getActiveTab();
  }, []);
  return !isInTab ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
    className: "p-4 rounded-lg flex flex-col items-center space-y-6 cursor-pointer",
    sx: {
      boxShadow: '3px 3px 12px rgba(0,0,0,0.1)'
    },
    onClick: () => {
      if (curTab) navigate('ConnectedSitesScreen');
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .M, {
      preset: "style2",
      selfItemsCenter: true,
      full: true,
      style: {
        padding: '0 0'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .W, {
        itemsCenter: true,
        justifyBetween: true,
        full: true,
        relative: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .a, {
          text: (curTab === null || curTab === void 0 ? void 0 : curTab.origin) || 'Site not connected',
          classname: "flex-1",
          style: {
            wordBreak: 'break-all'
          }
        }), curTab !== null && curTab !== void 0 && curTab.icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ .W, {
          src: curTab === null || curTab === void 0 ? void 0 : curTab.icon,
          size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__/* .fontSizes */ .Q.title,
          style: {
            borderRadius: '50%'
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
          style: {
            fontSize: '22px'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
          className: "".concat(curTab ? 'bg-green-700' : 'bg-gray-400', " block absolute -right-[6px] -bottom-[6px] w-1 h-1 rounded-[50%] border-[#fff] border-4 p-[5px]")
        })]
      })
    })
  }) : null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainWebSiteBar);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 20036:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   U: () => (/* binding */ NavTabBar)
/* harmony export */ });
/* unused harmony export TabButton */
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24468);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98104);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(46860);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67196);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(37372);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5288);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(26048);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45800);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20012);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(41552);
/* harmony import */ var _ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96447);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









// 是否浏览器中打开


let isInTab = false;
const isWindowOpenTab = async () => {
  isInTab = await (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .extensionIsInTab */ .mG)();
};
isWindowOpenTab();
function NavTabBar(_ref) {
  let {
    tab
  } = _ref;
  // TODO: 预留给Marketplace, columns={4}
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .y, {
    columns: !isInTab ? 5 : 4,
    style: {
      width: '100%',
      height: '60px',
      backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.bg2,
      borderTop: '1px solid #f4f4f4',
      boxShadow: '0 -1px 6px 1px hsla(0, 0%, 42.4%, .1)'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "home",
      icon: "wallet",
      isActive: tab === 'home'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "mint",
      icon: "grid",
      isActive: tab === 'mint'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "settings",
      icon: "settings",
      isActive: tab === 'settings'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "website",
      icon: "settings",
      isActive: tab === 'website'
    }), !isInTab && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(TabButton, {
      tabName: "expand",
      isActive: tab === 'expand'
    })]
  });
}
function TabButton(_ref2) {
  let {
    tabName,
    icon,
    isActive
  } = _ref2;
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__/* .useNavigate */ .i)();
  const unreadApp = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useUnreadAppSummary */ .En)();
  const readTab = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useReadTab */ .Uh)();
  const isInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .useExtensionIsInTab */ .M7)();

  // Hooks
  const openExtensionInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .useOpenExtensionInTab */ .qt)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .o, {
    justifyCenter: true,
    itemsCenter: true,
    gap: 'zero',
    onClick: e => {
      if (tabName === 'home') {
        navigate('MainScreen');
      } else if (tabName === 'mint') {
        navigate('ToolScreen');
      } else if (tabName === 'app') {
        navigate('DiscoverTabScreen');
        readTab('app');
      } else if (tabName === 'settings') {
        navigate('SettingsTabScreen');
      } else if (tabName === 'website') {
        navigate('WebsiteTabScreen');
      } else if (tabName === 'expand') {
        openExtensionInTab();
      }
    },
    children: [tabName === 'home' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'mint' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'settings' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'website' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'expand' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .q, {
      style: {
        position: 'relative'
      },
      children: tabName === 'app' && unreadApp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .q, {
        style: {
          position: 'absolute',
          bottom: 20,
          left: 5,
          width: 5,
          height: 5,
          backgroundColor: 'red',
          borderRadius: '50%'
        }
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27216:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ NoticePopover)
/* harmony export */ });
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1536);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(91136);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96651);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(98104);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(65044);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67196);
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67172);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43336);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);


/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










const NoticePopover = _ref => {
  let {
    onClose
  } = _ref;
  const [checked1, setChecked1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [checked2, setChecked2] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [enable, setEnable] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [coolDown, setCoolDown] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(3);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (coolDown > 0) {
      setTimeout(() => {
        setCoolDown(coolDown - 1);
      }, 1000);
    } else {
      setEnable(true);
    }
  }, [coolDown]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_6__/* .Popover */ ._, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .o, {
      justifyCenter: true,
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
        text: "Compatibility Tips",
        preset: "title-bold"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Icon__WEBPACK_IMPORTED_MODULE_5__/* .Icon */ .G, {
        icon: 'info',
        color: 'icon_yellow',
        size: 57
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .o, {
        gap: "zero",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
          text: 'Please be aware that:',
          preset: 'bold'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            marginTop: 8
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
            checked: checked1,
            onChange: e => {
              setChecked1(e.target.checked);
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .W, {
          style: {
            borderTopWidth: 1,
            borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .I.border
          },
          my: "md"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .W, {
        full: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .q, {
          text: coolDown > 0 ? "OK (".concat(coolDown, "s)") : 'OK',
          preset: "primary",
          disabled: !checked1 || !checked2,
          full: true,
          onClick: e => {
            if (!enable) return;
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

/***/ 17884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   q: () => (/* binding */ UpgradePopover)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17534);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48818);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(65044);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67196);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43336);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13976);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46476);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */











const UpgradePopover = _ref => {
  let {
    onClose
  } = _ref;
  const versionInfo = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useVersionInfo */ .sb)();
  const [versionDetail, setVersionDetail] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    version: '',
    changelogs: [],
    title: ''
  });
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .e6)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (!versionInfo.newVersion) return;
    wallet.getVersionDetail(versionInfo.newVersion).then(res => {
      setVersionDetail(res);
    }).catch(e => {
      console.log(e);
    });
  }, [versionInfo.newVersion]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_6__/* .Popover */ ._, {
    onClose: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .o, {
      justifyCenter: true,
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .o, {
        mt: "lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .a, {
          preset: "bold",
          text: versionDetail.title,
          textCenter: true
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
        style: {
          marginTop: 8
        },
        children: versionDetail.changelogs.map((str, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            fontSize: _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.sm
          },
          children: str
        }, index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_7__/* .Row */ .W, {
        full: true,
        mt: "lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .q, {
          text: "Skip",
          full: true,
          onClick: e => {
            if (onClose) {
              onClose();
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .q, {
          text: "Go to update",
          full: true,
          preset: "primary",
          onClick: e => {
            (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .openUrlLink */ .lc)('https://kaspa.org');
          }
        })]
      })]
    })
  });
};

/***/ }),

/***/ 4776:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WalletTabScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33752);
/* harmony import */ var antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tooltip_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(72660);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96651);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40256);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_AccountSelect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(70752);
/* harmony import */ var _ui_components_AddressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(85292);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(64540);
/* harmony import */ var _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20036);
/* harmony import */ var _ui_components_NoticePopover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27216);
/* harmony import */ var _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(81944);
/* harmony import */ var _ui_components_UpgradePopover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17884);
/* harmony import */ var _ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86256);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(23932);
/* harmony import */ var _ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(96447);
/* harmony import */ var _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(47460);
/* harmony import */ var _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51932);
/* harmony import */ var _ui_images_index_Tools_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(58500);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(4600);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(60440);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(17534);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(69508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(75776);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(37656);
/* harmony import */ var _mui_material_Chip__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(43440);
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(25350);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(70884);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(32496);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(80864);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(77980);
/* harmony import */ var _ui_components_MainWebSiteBar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(99340);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(23848);
/* harmony import */ var _ui_images_common_refresh_svg__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(75200);
/* harmony import */ var _ui_images_common_logo_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(65712);
/* harmony import */ var _ui_images_common_rightFilled_svg__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(35528);
/* harmony import */ var _ui_images_common_scan_svg__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(18196);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(33220);
/* harmony import */ var _ui_components_KnsDomain__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(30160);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(47528);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_3__, _ui_components_AccountSelect__WEBPACK_IMPORTED_MODULE_4__, _ui_components_AddressBar__WEBPACK_IMPORTED_MODULE_5__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_7__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_9__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_12__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__, _MainRoute__WEBPACK_IMPORTED_MODULE_25__, _ui_components_MainWebSiteBar__WEBPACK_IMPORTED_MODULE_26__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_3__, _ui_components_AccountSelect__WEBPACK_IMPORTED_MODULE_4__, _ui_components_AddressBar__WEBPACK_IMPORTED_MODULE_5__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_7__, _ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_9__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_12__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__, _MainRoute__WEBPACK_IMPORTED_MODULE_25__, _ui_components_MainWebSiteBar__WEBPACK_IMPORTED_MODULE_26__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */























// import { RightOutlined } from '@ant-design/icons';








/* import Tabs from '@/ui/components/Styled/StyledTabs';
import Tab from '@mui/material/Tab'; */

// import { AccountBalanceWallet } from '@mui/icons-material';













const $noBreakStyle = {
  whiteSpace: 'nowrap',
  wordBreak: 'keep-all'
};
function WalletTabScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_34__/* .useTranslation */ .G)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_25__/* .useNavigate */ .i)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountAddress */ .mA)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountAddressL2 */ .gt)();
  const accountBalance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountBalance */ .Id)(address);
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useNetworkType */ .qS)();
  const isTestNetwork = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_2__/* .NetworkType */ .U5.Testnet;
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_20__/* .useCurrentKeyring */ .Ib)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_23__/* .useWallet */ .e6)();
  const [balanceValue, setBalanceValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('--');
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useLayerType */ .wl)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_27__/* .useTools */ .w)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    let timer;
    const fetchBalance = async () => {
      try {
        const accountBalance = await wallet.getBalanceByAddress(address);
        setBalanceValue(accountBalance.amount);
      } catch (error) {
        console.log('fetchBalance error', error);
        timer = setTimeout(() => {
          fetchBalance();
        }, 2000);
      }
      // if (accountBalance.amount !== '0') {
      //   return setBalanceValue(accountBalance.amount);
      // }
      // else {
      //   try {
      //     const temp_url =
      //       networkType === NetworkType.Mainnet
      //         ? OPENAPI_URL_MAINNET + '/addresses/' + address + '/balance'
      //         : OPENAPI_URL_TESTNET + '/addresses/' + address + '/balance';

      //     const response = await fetch(temp_url);
      //     const data = await response.json();
      //     const balance = (Number(data.balance) / 10 / 10 / 10 / 10 / 10 / 10 / 10 / 10).toString();
      //     console.log('Fetched balance:', balance);
      //     setBalanceValue(balance);
      //   } catch (error) {
      //     console.error('Error fetching balance:', error);
      //     setBalanceValue('--');
      //   }
      // };
    };
    const fetchBalanceL2 = async () => {
      try {
        const {
          balance
        } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_17__/* .useAccountEthBalance */ .YB)(addressL2, networkType);
        setBalanceValue(balance);
        // console.log(`地址 ${addressL2} 的余额为: ${balance} ETH, ${balanceWei}, ${address}`);
      } catch (error) {
        setBalanceValue('--');
        console.error('获取余额失败:', error);
      }
    };
    if (currentLayer === 'L2' && addressL2) {
      fetchBalanceL2();
    } else if (currentLayer === 'L1') {
      fetchBalance();
    }
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, [address, networkType, currentLayer, addressL2, accountBalance.amount]);
  const pendingValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    return accountBalance.pending_kas_amount;
  }, [accountBalance === null || accountBalance === void 0 ? void 0 : accountBalance.pending_kas_amount]);
  const outgoingValue = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    // console.log('accountBalance', accountBalance)
    return accountBalance.outgoing;
  }, [accountBalance === null || accountBalance === void 0 ? void 0 : accountBalance.outgoing]);
  const [connected, setConnected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const [usdValue, setUSDValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('0');
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_19__/* .useAppDispatch */ .A)();
  // const currentNetworkType = useNetworkType();
  const skipVersion = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useSkipVersionCallback */ .cb)();
  const walletConfig = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useWalletConfig */ .SG)();
  const versionInfo = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useVersionInfo */ .sb)();
  const [showSafeNotice, setShowSafeNotice] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    wallet.handleRpcConnect().finally(() => {});
  }, []);

  // 如果当前是L2且是主网，则跳转到L1
  const changeLayerType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_21__/* .useChangeLayerTypeCallback */ .kz)();
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (currentLayer === _shared_types__WEBPACK_IMPORTED_MODULE_2__/* .LayerType */ .Y1.L2 && networkType === _shared_types__WEBPACK_IMPORTED_MODULE_2__/* .NetworkType */ .U5.Mainnet) {
      changeLayerType(_shared_types__WEBPACK_IMPORTED_MODULE_2__/* .LayerType */ .Y1.L1);
    }
  }, [currentLayer, networkType]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    try {
      const run = async () => {
        const show = await wallet.getShowSafeNotice();
        setShowSafeNotice(show);
        const activeTab = await (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_13__/* .getCurrentTab */ .YP)();
        if (!activeTab) return;
        const site = await wallet.getCurrentConnectedSite(activeTab.id);
        if (site) {
          setConnected(site.isConnected);
        }
      };
      run();
    } catch (error) {
      console.log('error', error);
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const fetchKasPrice = async () => {
      fetch('https://api.kaspa.org/info/price').then(response => response.json()).then(data => {
        const price = Number(data.price);
        if (price && price > 0) dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_18__/* .accountActions */ .M7.setKasPrice(price));
        if (currentLayer === 'L2') {
          const value = Number(balanceValue) * price;
          setUSDValue(value || '0');
        } else {
          if (accountBalance.amount === '0') {
            setUSDValue('0');
          } else {
            const value = Number(accountBalance.amount) * price;
            setUSDValue(value || '0');
          }
        }
      });
    };
    fetchKasPrice();
  }, [accountBalance.amount, networkType, balanceValue]);
  const tabItems = [{
    key: 'krc20',
    label: t('KRC20'),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(Krc20Tab, {
      currentLayer: currentLayer
    })
  }];
  const quickOperations = [{
    label: 'Send',
    value: 'send',
    icon: _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_15__,
    handleClickLink: 'TxCreateScreen'
  }, {
    label: 'Recieve',
    value: 'revieve',
    icon: _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_14__,
    handleClickLink: 'ReceiveScreen'
  },
  // {
  //   label: 'Activity',
  //   value: 'activity',
  //   icon: activityIcon,
  //   handleClickLink: 'ActivitiesScrren'
  // },
  {
    label: 'Tools',
    value: 'tools',
    icon: _ui_images_index_Tools_svg__WEBPACK_IMPORTED_MODULE_16__,
    handleClickLink: 'ToolScreen'
  }, {
    label: 'Scan',
    value: 'scan',
    icon: _ui_images_common_scan_svg__WEBPACK_IMPORTED_MODULE_31__
    // handleClickLink: 'ToolScreen'
  }];
  const imageErr = (e, img) => {
    e.target.src = img;
    e.target.onerror = null;
  };
  const handleLayerSwapOut = () => {
    console.log('切换网络');
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
      sx: {
        position: 'sticky',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: '#ffffff',
        boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
        padding: '12px 16px',
        // borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '72px'
        // ml: '24px',
        // mr: '28px',
        // marginBottom: '16px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("img", {
          src: _ui_images_common_logo_png__WEBPACK_IMPORTED_MODULE_29__,
          width: 33,
          height: 33,
          className: "shine-box",
          onClick: () => navigate('SwitchKeyringScreen')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("img", {
          src: _ui_images_common_rightFilled_svg__WEBPACK_IMPORTED_MODULE_30__,
          width: 18,
          height: 18,
          style: {
            margin: '0 0 0 4px'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_AccountSelect__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: networkType !== 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_LayerSwapOut__WEBPACK_IMPORTED_MODULE_11__/* .LayerSwapOut */ .U, {
          callback: handleLayerSwapOut
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .kP, {
      style: {
        paddingTop: '20px',
        paddingLeft: '16px',
        paddingRight: '16px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
        className: "space-y-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_MainWebSiteBar__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .c, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
          className: "p-4 rounded-lg flex flex-col items-center space-y-6",
          sx: {
            boxShadow: '3px 3px 12px rgba(0,0,0,0.1)',
            paddingLeft: '14px',
            paddingRight: '14px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Chip__WEBPACK_IMPORTED_MODULE_36__/* ["default"] */ .c, {
            style: {
              width: '100%',
              backgroundColor: 'rgba(10,36,99,0.06)'
            },
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_AddressBar__WEBPACK_IMPORTED_MODULE_5__/* .AddressBar */ .u, {
              props: {
                contentStyle: {
                  backgroundColor: 'rgba(10,36,99,0.06);'
                },
                textStyle: {
                  color: '#0A2463'
                },
                iconStyle: {
                  color: 'rgba(10,36,99,0.65)'
                },
                activeKey: {
                  'activeKey': currentLayer === 'L2' ? 'L2' : 'L1'
                }
              }
            })
          }), currentLayer === 'L1' && !!address && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_KnsDomain__WEBPACK_IMPORTED_MODULE_32__/* ["default"] */ .c, {
            networkType: networkType,
            address: address
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
            className: "space-y-2 w-full",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(antd_lib_tooltip__WEBPACK_IMPORTED_MODULE_37__["default"], {
              placement: 'bottom',
              title: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.Fragment, {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .WA, {
                  justifyBetween: true,
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("span", {
                    style: $noBreakStyle,
                    children: 'Balance'
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("span", {
                    style: $noBreakStyle,
                    children: "$".concat(networkType === 1 ? 0 : usdValue)
                  })]
                })
              }),
              overlayStyle: {
                fontSize: _ui_theme_font__WEBPACK_IMPORTED_MODULE_22__/* .fontSizes */ .Q.xs
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .WA, {
                  justifyCenter: true,
                  style: {
                    alignItems: 'baseline'
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                    text: isNaN(Number(balanceValue)) ? '--' : (0,bignumber_js__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c)(balanceValue).toFixed(4),
                    preset: "title-bold",
                    textCenter: true,
                    classname: "text-[#0A2463] !text-[26px]"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                    text: "".concat(currentLayer === 'L2' ? 'e' : '').concat(networkType === 1 ? 'T' : '', "KAS")
                    // preset="title-bold"
                    ,
                    textCenter: true,
                    classname: "text-[#0A2463]",
                    size: "md"
                  })]
                }), usdValue && Number(usdValue) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                  text: '$' + (networkType === 1 ? 0 : usdValue > 0 ? usdValue.toLocaleString(undefined, {
                    minimumFractionDigits: 4
                  }) : 0),
                  preset: "title",
                  textCenter: true,
                  size: "lg",
                  color: "textDim"
                }), outgoingValue && Number(outgoingValue) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                  text: outgoingValue + "  ".concat(currentLayer === 'L2' ? 'e' : '').concat(networkType === 1 ? 'T' : '', "KAS"),
                  preset: "title-bold",
                  textCenter: true,
                  size: "xxxl"
                }), pendingValue && Number(pendingValue) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                  text: pendingValue + "  ".concat(currentLayer === 'L2' ? 'e' : '').concat(networkType === 1 ? 'T' : '', "KAS"),
                  preset: "title-bold",
                  textCenter: true,
                  size: "xxxl"
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
              className: "",
              children: [isTestNetwork && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                text: "Kaspa Testnet",
                style: {
                  opacity: 0.7
                },
                textCenter: true
              }), walletConfig.statusMessage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                text: walletConfig.statusMessage,
                color: "danger",
                textCenter: true
              })]
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
          className: "w-full grid grid-cols-4 gap-4",
          children: quickOperations.map(item => {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
              className: "text-center space-y-3",
              onClick: () => {
                if (item.value === 'scan') {
                  var _window, _window$NativeCallbac;
                  const scanParams = {
                    action: 'openScan',
                    payload: null,
                    success: data => {
                      console.log('success', data.result);
                      navigate('TxCreateScreen', {
                        address: data.result
                      });
                    },
                    fail: data => {
                      console.log('fail', data.result);
                      tools.toastError('scan code error');
                    }
                  };
                  return (_window = window) === null || _window === void 0 ? void 0 : (_window$NativeCallbac = _window.NativeCallbacks) === null || _window$NativeCallbac === void 0 ? void 0 : _window$NativeCallbac.register(scanParams);
                }
                navigate(item === null || item === void 0 ? void 0 : item.handleClickLink);
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_38__/* ["default"] */ .c, {
                sx: {
                  boxShadow: '3px 3px 12px rgba(0,0,0,0.2)'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("img", {
                  src: item.icon,
                  alt: "",
                  onError: event => imageErr(event, item.icon)
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_39__/* ["default"] */ .c, {
                align: "center",
                color: "#0A2463",
                children: item.label
              })]
            }, item.value);
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
          className: "p-4 rounded-lg flex flex-col items-center space-y-6",
          sx: {
            boxShadow: '3px 3px 12px rgba(0,0,0,0.1)',
            paddingLeft: '14px',
            paddingRight: '14px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .NodeStatus */ .s9, {
            isShowNodeUrl: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(Krc20Tab, {
          currentLayer: currentLayer
        })]
      }), showSafeNotice && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_NoticePopover__WEBPACK_IMPORTED_MODULE_8__/* .NoticePopover */ .S, {
        onClose: () => {
          wallet.setShowSafeNotice(false);
          setShowSafeNotice(false);
        }
      }), !versionInfo.skipped && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_UpgradePopover__WEBPACK_IMPORTED_MODULE_10__/* .UpgradePopover */ .q, {
        onClose: () => {
          skipVersion(versionInfo.newVersion);
        }
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .Go, {
      px: "zero",
      py: "zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_7__/* .NavTabBar */ .U, {
        tab: "home"
      })
    })]
  });
}
function Krc20Tab(_ref) {
  let {
    currentLayer
  } = _ref;
  const {
    krc20Tokens,
    krc20Loading,
    setActiveToken,
    refetchList,
    erc20Tokens,
    refreshErc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_12__/* .useAccountContext */ .wB)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_25__/* .useNavigate */ .i)();
  const [rotationDegree, setRotationDegree] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const [isRefreshing, setIsRefreshing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_40__/* .useLocation */ .IT)();
  const handleToToken = token => {
    setActiveToken(token);
    navigate('TokenScreen');
  };
  const handleRefresh = async () => {
    setIsRefreshing(true);
    setRotationDegree(prev => prev + 360);
    try {
      if (currentLayer === 'L1') {
        await refetchList();
      }
      if (currentLayer === 'L2') {
        await refreshErc20Tokens();
      }
    } finally {
      setTimeout(() => {
        setIsRefreshing(false);
      }, 1000);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // 获取传递的 state 参数
    const {
      refreshToken
    } = location.state || {};
    if (refreshToken) {
      handleRefresh();
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
    className: "space-y-4",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
      className: "flex items-center justify-between",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("p", {
        className: "mb-[0] text-[#0A2463] text-[15px]",
        children: currentLayer === 'L2' ? 'ERC20' : 'KRC20'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsxs)("div", {
        className: "flex items-center gap-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)("img", {
          src: _ui_images_common_refresh_svg__WEBPACK_IMPORTED_MODULE_28__,
          width: 16,
          height: 16,
          style: {
            transition: 'transform 0.8s ease',
            transform: "rotate(".concat(rotationDegree, "deg)")
          },
          onClick: handleRefresh
        }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_41__/* ["default"] */ .c, {
          style: {
            color: '#0a246365'
          },
          onClick: () => {
            navigate('ImportERC20');
          }
        })]
      })]
    }), currentLayer === 'L1' && (krc20Tokens !== null && krc20Tokens !== void 0 && krc20Tokens.length && !isRefreshing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.Fragment, {
      children: krc20Tokens === null || krc20Tokens === void 0 ? void 0 : krc20Tokens.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
          token: item,
          styleType: "basics",
          onClick: handleToToken
        }, index);
      })
    }) : krc20Loading || isRefreshing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
      className: "text-center py-7",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .c, {
        size: 30
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_6__/* .Empty */ .c, {})), currentLayer === 'L2' && (erc20Tokens !== null && erc20Tokens !== void 0 && erc20Tokens.length && !isRefreshing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.Fragment, {
      children: erc20Tokens === null || erc20Tokens === void 0 ? void 0 : erc20Tokens.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_Styled_TokenItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .c, {
          token: item,
          styleType: "basics",
          onClick: handleToToken
        }, index);
      })
    }) : krc20Loading || isRefreshing ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_35__/* ["default"] */ .c, {
      className: "text-center py-7",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_42__/* ["default"] */ .c, {
        size: 30
      })
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_33__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_6__/* .Empty */ .c, {}))]
  });
}
function TxConfirmState(_ref2) {
  let {
    isAccepted,
    acceptingBlockBlueScore
  } = _ref2;
  const blueScore = useBlueScore();
  if (isAccepted == false) {
    return /*#__PURE__*/_jsx(Row, {
      children: /*#__PURE__*/_jsx(Text, {
        text: isAccepted ? 'Accepted' : 'Not Accepted',
        preset: "sub"
      })
    });
  }
  if (!blueScore || blueScore <= 0) {
    return /*#__PURE__*/_jsx(Row, {
      children: /*#__PURE__*/_jsx(Text, {
        text: isAccepted ? 'Accepted' : 'Not Accepted',
        preset: "sub"
      })
    });
  }
  if (blueScore - acceptingBlockBlueScore < 100) {
    return /*#__PURE__*/_jsxs(Row, {
      children: [/*#__PURE__*/_jsx(Text, {
        text: isAccepted ? 'Accepted' : 'Not Accepted',
        preset: "sub"
      }), /*#__PURE__*/_jsx(Text, {
        text: "".concat(blueScore - acceptingBlockBlueScore, " Confirmed"),
        preset: "sub"
      })]
    });
  }
  return /*#__PURE__*/_jsx(Row, {
    children: /*#__PURE__*/_jsx(Text, {
      text: 'Confirmed',
      preset: "sub"
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 42418:
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ }),

/***/ 65712:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/logo.e06d5fc3.png";

/***/ }),

/***/ 75200:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/refresh.af32c3d0.svg";

/***/ }),

/***/ 15728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/right.db8fa8d4.svg";

/***/ }),

/***/ 35528:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/rightFilled.d4882d33.svg";

/***/ }),

/***/ 18196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/scan.756de743.svg";

/***/ }),

/***/ 47460:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Receive.57bc0722.svg";

/***/ }),

/***/ 51932:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Send.f8d9c1b2.svg";

/***/ }),

/***/ 58500:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/Tools.95c61f89.svg";

/***/ })

}]);