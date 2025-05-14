"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5585],{

/***/ 75585:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UtxoDetailScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43168);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2628);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13108);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45989);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13907);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(47767);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








function UtxoDetailScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_5__/* .useTranslation */ .B)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__/* .useLocation */ .zy)();
  const {
    utxoDetail
  } = state;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('History')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
        children: utxoDetail && Object.entries(utxoDetail).map(_ref => {
          let [key, value] = _ref;
          if (key == 'address') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                text: "Address",
                classname: "text-[#0a2563c5]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                text: value,
                classname: "text-[#0A2463]",
                style: {
                  wordWrap: 'break-word'
                }
              })]
            }, "address");
          }
          if (key == 'outpoint') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Outpoint, {
              outpoint: value
            }, key);
          }
          // if (key == 'utxoEntry') {
          //   return <UtxoEntry key={key} utxoEntry={value} />;
          // }
          if (key == 'amount') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
              mt: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                  text: "Amount",
                  classname: "text-[#0a2563c5]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                    text: `${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .sompiToAmount */ ._m)(Number(value))} kas`,
                    classname: "text-[#0A2463]"
                  })
                })]
              })
            }, key);
          }
          if (key == 'scriptPublicKey') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
              mt: "md",
              gap: "zero",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                text: "script Public Key",
                classname: "text-[#0a2563c5]"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                text: value.script,
                style: {
                  wordWrap: 'break-word'
                },
                classname: "text-[#0A2463]"
              })]
            }, key);
          }
          if (key == 'blockDaaScore') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
              mt: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                  text: "Block DAA Score",
                  classname: "text-[#0a2563c5]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                    text: `${value}`,
                    classname: "text-[#0A2463]"
                  })
                })]
              })
            }, key);
          }
          if (key == 'isCoinbase') {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
              mt: "md",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
                justifyBetween: true,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                  text: "is Coinbase",
                  classname: "text-[#0a2563c5]"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
                    text: `${value}`,
                    classname: "text-[#0A2463]"
                  })
                })]
              })
            }, key);
          }
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
              text: key,
              classname: "text-[#0a2563c5]"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
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
  const blockstreamUrl = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useBlockstreamUrl */ .oM)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
    gap: "zero",
    classname: "mt-2",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
      text: "Transaction ID",
      classname: "text-[#0a2563c5]"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
        itemsCenter: true,
        onClick: () => {
          let url = "";
          const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useNetworkType */ .iP)();
          if (networkType === kaspa_wasm__WEBPACK_IMPORTED_MODULE_7__.NetworkType.Mainnet) {
            url = 'https://kas.fyi/transaction';
          } else {
            url = 'https://explorer-tn10.kaspa.org/txs';
          }
          (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .openUrlLink */ .aj)(`${url}/${outpoint.transactionId}`);
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
          text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .shortAddress */ .Dc)(outpoint.transactionId, 15),
          classname: "text-[#0A2463]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
          icon: "link",
          size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_2__/* .fontSizes */ .G.xs
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);