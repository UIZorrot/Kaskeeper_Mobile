"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[9320],{

/***/ 89320:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UtxoDetailScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17534);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48818);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(21704);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(80864);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(33220);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23848);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];










function UtxoDetailScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_6__/* .useTranslation */ .G)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__/* .useLocation */ .IT)();
  const {
    utxoDetail
  } = state;
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__/* .useTools */ .w)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('History')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .kP, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
        children: utxoDetail && Object.entries(utxoDetail).map(_ref => {
          let [key, value] = _ref;
          if (key == 'address') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
              className: "flex justify-between items-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                text: "Address",
                classname: "text-[#0a2563c5]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .shortAddress */ .SO)(value, 10),
                classname: "text-[#0A2463]",
                style: {
                  wordWrap: 'break-word'
                }
              })]
            }, "address");
          }
          if (key == 'outpoint') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Outpoint, {
              outpoint: value
            }, key);
          }
          // if (key == 'utxoEntry') {
          //   return <UtxoEntry key={key} utxoEntry={value} />;
          // }
          if (key == 'amount') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
              mt: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                  text: "Amount",
                  classname: "text-[#0a2563c5]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                    text: "".concat((0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .sompiToAmount */ .ei)(Number(value)), " kas"),
                    classname: "text-[#0A2463]"
                  })
                })]
              })
            }, key);
          }
          if (key == 'scriptPublicKey') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
              mt: "md",
              style: {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                text: "script Public Key",
                classname: "text-[#0a2563c5]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                style: {
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                  text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .shortAddress */ .SO)(value.script, 10),
                  style: {
                    wordWrap: 'break-word'
                  },
                  classname: "text-[#0A2463]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
                  icon: "copy",
                  size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.xs,
                  color: "white",
                  onClick: e => {
                    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .copyToClipboard */ .ye)(value.script).then(() => {
                      tools.toastSuccess(t('Copied Success'));
                    });
                  }
                })]
              })]
            }, key);
          }
          if (key == 'blockDaaScore') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
              mt: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                  text: "Block DAA Score",
                  classname: "text-[#0a2563c5]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                    text: "".concat(value),
                    classname: "text-[#0A2463]"
                  })
                })]
              })
            }, key);
          }
          if (key == 'isCoinbase') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
              mt: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                  text: "is Coinbase",
                  classname: "text-[#0a2563c5]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
                    text: "".concat(value),
                    classname: "text-[#0A2463]"
                  })
                })]
              })
            }, key);
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
              text: key,
              classname: "text-[#0a2563c5]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
              text: value,
              classname: "text-[#0A2463]"
            })]
          }, key);
        })
      }), ' ']
    })]
  });
}
function Outpoint(_ref2) {
  let {
    outpoint
  } = _ref2;
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useBlockstreamUrl */ .Aq)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkType */ .qS)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
    gap: "zero",
    classname: "mt-2",
    style: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
      text: "Transaction ID",
      classname: "text-[#0a2563c5]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .WA, {
        itemsCenter: true,
        onClick: () => {
          let url = "";
          if (networkType === kaspa_wasm__WEBPACK_IMPORTED_MODULE_8__.NetworkType.Mainnet) {
            url = 'https://kas.fyi/transaction';
          } else {
            url = 'https://explorer-tn10.kaspa.org/txs';
          }
          (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .openUrlLink */ .lc)("".concat(url, "/").concat(outpoint.transactionId));
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .a, {
          text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .shortAddress */ .SO)(outpoint.transactionId, 10),
          classname: "text-[#0A2463]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .GW, {
          icon: "link",
          size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .Q.xs,
          color: "white"
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);