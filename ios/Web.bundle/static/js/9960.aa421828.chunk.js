"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[9960],{

/***/ 62656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   c: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(27828);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24808);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50535);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2488);





const TabPaper = _ref => {
  let {
    tabs,
    activeKey,
    onChange,
    className = '',
    style = {}
  } = _ref;
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .c)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .c, {
    className: "p-1 grid grid-cols-".concat(tabs.length, " cursor-pointer gap-4 ").concat(className),
    style: style,
    children: tabs.map(tab => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .c, {
      className: "text-center p-2",
      onClick: () => onChange(tab.key),
      sx: {
        background: activeKey === tab.key ? theme.palette.background.default : 'transparent',
        boxShadow: 'unset',
        color: activeKey === tab.key ? '#0A2463' : 'rgba(10,36,99,0.65)'
      },
      children: tab.label
    }, tab.key))
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabPaper);

/***/ }),

/***/ 92172:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ReceiveScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34344);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(67472);
/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80004);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83120);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24468);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67148);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(80864);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(464);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96651);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(63704);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(37656);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(50535);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17534);
/* harmony import */ var _ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(62656);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















const LoadingNode = () => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
    className: "loading text-center py-20 px-0",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .c, {
      size: "large"
    })
  });
};
function ReceiveScreen() {
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentAccount */ ._A)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAccountAddress */ .mA)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAccountAddressL2 */ .gt)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_11__/* .useTranslation */ .G)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useLayerType */ .wl)();
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c)();
  const [activeKey, setActiveKey] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(currentLayer);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const [qrCode, setQrCode] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)('');
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setLoading(false);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    setLoading(true);
    setTimeout(() => {
      setQrCode(activeKey === 'L1' ? address : addressL2);
      setLoading(false);
    }, 500);
  }, [activeKey, addressL2]);
  const handleChangeType = type => {
    setActiveKey(type);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      parentName: "MainScreen",
      title: t('Address')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      className: "m-[16px]",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
        className: "space-y-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .c, {
          tabs: [{
            key: 'L1',
            label: 'L1'
          }, {
            key: 'L2',
            label: 'L2'
          }],
          activeKey: activeKey,
          onChange: handleChangeType,
          className: "my-custom-class"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .kP, {
        classname: "!p-[0px]",
        children: loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LoadingNode, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .ou, {
            gap: "xl",
            style: {
              margin: '40px 0 0 0'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
              className: "flex flex-col",
              style: {
                justifyContent: 'center'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Column */ .ou, {
                justifyCenter: true,
                rounded: true,
                style: {
                  backgroundColor: 'white',
                  alignSelf: 'center',
                  alignItems: 'center'
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(qrcode_react__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .cp, {
                  value: qrCode || '',
                  renderAs: "svg",
                  size: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_4__/* .sizes */ .KK.qrcode
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .WA, {
                justifyCenter: true,
                style: {
                  margin: '25px 0 13px 0'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .c, {
                  style: {
                    fontSize: 14,
                    marginRight: '8px',
                    color: 'rgba(10,36,99,0.65)'
                  }
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .a, {
                  preset: "regular-bold",
                  color: "text",
                  text: currentAccount === null || currentAccount === void 0 ? void 0 : currentAccount.alianName
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .AddressBar */ .uE, {
                props: {
                  contentStyle: {
                    padding: '8px 16px'
                  },
                  textStyle: {
                    color: 'rgba(10, 36, 99, 0.65)'
                  },
                  iconStyle: {
                    color: 'rgba(10, 36, 99, 0.65)',
                    fontSize: 14
                  },
                  activeKey: {
                    activeKey
                  }
                }
              })]
            })
          })
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 464:
/***/ (() => {

// extracted by mini-css-extract-plugin


/***/ })

}]);