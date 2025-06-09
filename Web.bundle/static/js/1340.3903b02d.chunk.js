"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[1340],{

/***/ 23744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  c: () => (/* binding */ icons_ExportOutlined)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.23.9/node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(96392);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/index.js
var react = __webpack_require__(96651);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons-svg@4.4.2/node_modules/@ant-design/icons-svg/es/asn/ExportOutlined.js
// This icon file is generated automatically.
var ExportOutlined = { "icon": { "tag": "svg", "attrs": { "fill-rule": "evenodd", "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 912H144c-17.7 0-32-14.3-32-32V144c0-17.7 14.3-32 32-32h360c4.4 0 8 3.6 8 8v56c0 4.4-3.6 8-8 8H184v656h656V520c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v360c0 17.7-14.3 32-32 32zM770.87 199.13l-52.2-52.2a8.01 8.01 0 014.7-13.6l179.4-21c5.1-.6 9.5 3.7 8.9 8.9l-21 179.4c-.8 6.6-8.9 9.4-13.6 4.7l-52.4-52.4-256.2 256.2a8.03 8.03 0 01-11.3 0l-42.4-42.4a8.03 8.03 0 010-11.3l256.1-256.3z" } }] }, "name": "export", "theme": "outlined" };
/* harmony default export */ const asn_ExportOutlined = (ExportOutlined);

// EXTERNAL MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(9300);
;// CONCATENATED MODULE: ./node_modules/.pnpm/@ant-design+icons@4.8.1_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/@ant-design/icons/es/icons/ExportOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ExportOutlined_ExportOutlined = function ExportOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.c, (0,objectSpread2/* default */.c)((0,objectSpread2/* default */.c)({}, props), {}, {
    ref: ref,
    icon: asn_ExportOutlined
  }));
};
ExportOutlined_ExportOutlined.displayName = 'ExportOutlined';
/* harmony default export */ const icons_ExportOutlined = (/*#__PURE__*/react.forwardRef(ExportOutlined_ExportOutlined));

/***/ }),

/***/ 1340:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TxSuccessScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17534);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98104);
/* harmony import */ var _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67148);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48818);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(61942);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23744);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(21704);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96651);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80864);
/* harmony import */ var _ui_images_common_success_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80052);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46956);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(69508);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(23848);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













// import { useNavigate } from 'react-router-dom';





function TxSuccessScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_12__/* .useTranslation */ .G)();
  const {
    txid,
    rawtx,
    type
  } = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .useLocationState */ .l1)();
  // {
  //   txid: '89295e837009f6dd8931eabbd1bc3b4a1424739c4c4b64cf89242e5e48a05d8e',
  //   rawtx: {
  //     to: 'asss',
  //     amountSompi: 2 * 10 ** 8,
  //     tick: 'ASWE',
  //     "mode" : "issue"
  //   },
  //   type: "Deploy"
  // };
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_1__/* .useNavigate */ .i)();
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useBlockstreamUrl */ .Aq)();
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useNetworkType */ .qS)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_2__/* .useLayerType */ .wl)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_10__/* .useTools */ .w)();
  const toAddrss = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    console.log('toAddrss', rawtx);
    return rawtx.to || '';
  }, []);
  const tick = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    console.log('tick', rawtx);
    if (!rawtx.tick) {
      return "".concat(currentLayer === 'L2' ? 'e' : '', "KAS");
    } else {
      return rawtx.tick;
    }
  }, []);
  const inputAmount = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(() => {
    console.log('amountSompi', rawtx);
    return rawtx.amountSompi ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .sompiToAmount */ .ei)(rawtx.amountSompi, rawtx.dec) : '';
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .kP, {
      style: {
        gap: _ui_theme_spacing__WEBPACK_IMPORTED_MODULE_4__/* .spacing */ .k5.small
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
        justifyCenter: true,
        mt: "xxl",
        gap: "xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
          justifyCenter: true,
          mt: "xxl",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("img", {
            src: _ui_images_common_success_svg__WEBPACK_IMPORTED_MODULE_7__,
            width: 70,
            height: 70,
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          preset: "title",
          text: t("".concat(type || "Sent")),
          textCenter: true,
          size: "xxxl"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
        justifyCenter: true,
        mt: "md",
        gap: "xl",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          style: {
            fontSize: "16px",
            color: '#0A2463'
          },
          text: "".concat(inputAmount, " ").concat(tick, " ").concat(t("was successfully ".concat(type || "sent", " to"))),
          textCenter: true,
          color: "white"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(toAddrss),
          size: "lg",
          textCenter: true,
          color: "text_minor"
        })]
      })]
    }), rawtx && rawtx.mode === 'issue' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
      itemsCenter: true,
      color: "green",
      style: {
        fontSize: "14px",
        width: 140,
        margin: '0 auto'
      },
      onClick: e => {
        (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .copyToClipboard */ .ye)(txid).then(() => {
          tools.toastSuccess(t('Copied Success'));
        });
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .c, {
        color: "green",
        size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_9__/* .fontSizes */ .Q.xs
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
        preset: "regular-bold",
        text: t('Copy ca'),
        color: "green",
        size: "sm"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Footer */ .Go, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
        style: {
          width: 140,
          margin: '0 auto',
          marginBottom: "20px"
        },
        onClick: () => {
          if (rawtx && rawtx.relayer === 'L2') {
            const baseUrlL2 = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_14__.NetworkType.Mainnet ? "".concat(_shared_constant__WEBPACK_IMPORTED_MODULE_8__/* .OPENAPI_URL_MAINNET_L2 */ .Qy, "/tx/").concat(txid) : "".concat(_shared_constant__WEBPACK_IMPORTED_MODULE_8__/* .OPENAPI_URL_TESTNET_L2 */ .E$, "/tx/").concat(txid);
            (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)(baseUrlL2, '_blank');
          } else {
            if (network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_14__.NetworkType.Mainnet) {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)("".concat(blockstreamUrl, "/transaction/").concat(txid));
            } else {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .openUrlLink */ .lc)("https://explorer-tn10.kaspa.org/txs/".concat(txid));
            }
          }
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .c, {
          style: {
            color: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_3__/* .colors */ .I.aqua,
            fontSize: 14
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          preset: "regular-bold",
          text: t('View transaction'),
          color: "green",
          size: "sm"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .q, {
        className: "w-full !rounded-lg",
        text: t('Done'),
        onClick: () => {
          navigate('MainScreen', {
            refreshToken: true
          }, true);
          // navigate('/main', {
          //   replace: true,
          //   state: {
          //     refreshToken: true
          //   }
          // });
        }
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 80052:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/success.b7301647.svg";

/***/ })

}]);