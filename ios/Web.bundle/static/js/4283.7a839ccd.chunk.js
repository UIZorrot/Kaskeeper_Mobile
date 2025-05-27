"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4283],{

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

/***/ 34283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivitiesScrren)
/* harmony export */ });
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28454);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24965);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43168);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37636);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87164);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45989);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(96540);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52751);
/* harmony import */ var _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98818);
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(16317);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(93567);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13108);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















// 自定义按钮样式（保持不变）

const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n)(_ref => {
  let {
    theme
  } = _ref;
  return {
    borderRadius: '12px',
    textTransform: 'none',
    fontWeight: 600,
    padding: theme.spacing(1.5, 3),
    backgroundColor: '#2ecc71',
    color: '#fff',
    '&:hover': {
      backgroundColor: '#27ae60'
    },
    '&:disabled': {
      backgroundColor: '#95d5b2'
    }
  };
});

// 自定义卡片样式（保持不变）
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(_ref2 => {
  let {
    theme
  } = _ref2;
  return {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
    },
    borderRadius: '16px',
    background: '#ffffff',
    cursor: 'pointer',
    border: '1px solid rgb(236, 236, 236)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };
});

// LoadingState 和 EmptyState 保持不变
const LoadingState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 4,
    height: '50vh'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      style: {
        fontSize: 36,
        color: '#666'
      }
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mt: 2
    },
    children: "Loading Activities..."
  })]
});
const EmptyState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 4,
    borderRadius: '16px',
    border: '1px solid #e0e0e0',
    maxWidth: '400px',
    mx: 'auto',
    mt: 0
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    sx: {
      fontSize: 48,
      color: '#888',
      mb: 2
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "h6",
    color: "text.primary",
    sx: {
      fontWeight: 500,
      mb: 1
    },
    children: "No Activity Found"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 2,
      maxWidth: '300px'
    },
    children: "It looks like you don\u2019t have any transaction activity yet. Start by making a transaction!"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
    variant: "outlined",
    color: "primary",
    size: "small",
    onClick: () => window.location.reload(),
    sx: {
      textTransform: 'none',
      borderRadius: '8px'
    },
    children: "Retry"
  })]
});
function ActivitiesScrren() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .Z)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddress */ .PJ)();
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useNetworkType */ .iP)();
  const [fetchListData, setFetchListData] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(true);
  const fetchList = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(async () => {
    if (!address) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__.NetworkType.Testnet ? 'testnet-10' : '';
      if (!networkName) {
        console.error('Unknown network type');
        setFetchListData([]);
        return;
      }
      const data = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_0__/* .fetch_Activity */ .v5)(networkName, address, 7, 0);
      const enrichedData = await Promise.all(data.map(async item => {
        let totalAmount = 0;
        let dectotalAmount = 0;
        await Promise.all(item.inputs.map(async input => {
          if (input.signature_script && input.signature_script.length > 200) {
            console.log("Skipping special input:", input);
            return;
          }
          const txDetails = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_0__/* .fetch_tx */ .c5)(networkName, input.previous_outpoint_hash);
          let flag = 0;
          txDetails.outputs.forEach(output => {
            if (output.script_public_key_address === address && input.previous_outpoint_index == flag) {
              dectotalAmount += parseInt(output.amount);
            }
            flag = flag + 1;
          });
        }));
        item.outputs.forEach(output => {
          const outputAmount = parseInt(output.amount);
          if (output.script_public_key_address === address) {
            totalAmount += outputAmount;
          }
        });
        const amount = totalAmount - dectotalAmount;
        return {
          txdetail: item,
          type: 'TransferNative',
          txid: item.transaction_id || '',
          amount: amount,
          dec: 8,
          tick: 'KAS',
          time: item.block_time,
          status: item.is_accepted ? 'success' : 'pending'
        };
      }));
      setFetchListData(enrichedData);
    } catch (error) {
      console.error('Error fetching activities:', error);
      setFetchListData([]);
    } finally {
      setLoading(false);
    }
  }, [address, network]);
  (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(() => {
    if (!address) {
      setLoading(false);
      return;
    }
    fetchList();
  }, [address, network, fetchList]);
  const handleClick = () => {
    if (!address) return;
    const baseUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__.NetworkType.Mainnet ? `https://kas.fyi/addresses/${address}?page=1` : `https://explorer-tn10.kaspa.org/addresses/${address}?page=1`;
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_8__/* .openUrlLink */ .aj)(baseUrl, '_blank');
  };

  // 新增：处理卡片点击跳转到交易详情
  const handleCardClick = txid => {
    if (!txid) return;
    const txUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_16__.NetworkType.Mainnet ? `https://kas.fyi/transaction/${txid}` : `https://explorer-tn10.kaspa.org/txs/${txid}`;
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_8__/* .openUrlLink */ .aj)(txUrl, '_blank');
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
        onBack: () => navigate('MainScreen'),
        title: "Activities"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          sx: {
            padding: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StyledButton, {
            onClick: handleClick,
            fullWidth: true,
            variant: "contained",
            size: "medium",
            endIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              sx: {
                color: '#222'
              }
            }),
            sx: {
              mb: 3
            },
            children: "More"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(LoadingState, {})]
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => navigate('MainScreen'),
      title: "Activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
        sx: {
          padding: 1
        },
        children: !(0,lodash__WEBPACK_IMPORTED_MODULE_6__.isEmpty)(fetchListData) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
            variant: "subtitle1",
            color: "text.primary",
            sx: {
              fontWeight: 500,
              mb: 2,
              color: '#222'
            },
            children: ["Activity Log (", fetchListData.length, ")"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StyledButton, {
            onClick: handleClick,
            fullWidth: true,
            variant: "contained",
            size: "medium",
            endIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              sx: {
                color: '#222'
              }
            }),
            sx: {
              mb: 3
            },
            children: "More"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay, {
            container: true,
            spacing: 2.5,
            children: fetchListData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(StyledCard, {
                onClick: () => handleCardClick(item.txid),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
                  sx: {
                    padding: 2,
                    paddingBottom: 0
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                      display: "flex",
                      alignItems: "center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        sx: {
                          fontSize: 24,
                          mr: 1.5,
                          color: '#666'
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                          variant: "body1",
                          sx: {
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: '#222'
                          },
                          children: item.amount >= 0 ? `Received ${item.amount / Math.pow(10, item.dec)} ${item.tick}` : `Sent ${Math.abs(item.amount) / Math.pow(10, item.dec)} ${item.tick}`
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                          variant: "body2",
                          sx: {
                            fontSize: '0.85rem',
                            color: '#888',
                            mt: 0.5
                          },
                          children: new Date(item.time).toLocaleString()
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
                      textAlign: "right",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.9rem',
                          color: item.status === 'success' ? '#2ecc71' : '#ff9800'
                        },
                        children: item.status === 'success' ? 'Confirmed' : 'Pending'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.8rem',
                          color: '#999',
                          mt: 0.5
                        },
                        children: [item.txid.slice(0, 8), "..."]
                      })]
                    })]
                  })
                })
              })
            }, index))
          })]
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(EmptyState, {})
        })
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 52751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"
}), 'Send'));

/***/ }),

/***/ 98818:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3z"
}), 'OpenInNew'));

/***/ })

}]);