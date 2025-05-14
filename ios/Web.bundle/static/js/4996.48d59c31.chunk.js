"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[4996],{

/***/ 24996:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UTXOTab)
/* harmony export */ });
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77093);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59577);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80590);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36904);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(16039);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(93567);
/* harmony import */ var _mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(46952);
/* harmony import */ var _mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(92659);
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16317);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(87164);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(37636);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(86990);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















// 定义输出数据的类型

// 数据转换函数
function transformData(inputArray) {
  return inputArray.map(item => ({
    amount: item.address,
    // 顶层的 amount 使用 address
    blockDaaScore: item.utxoEntry.blockDaaScore,
    entry: {
      address: item.address,
      amount: item.utxoEntry.amount[0],
      // 取 amount 数组的第一个值
      blockDaaScore: item.utxoEntry.blockDaaScore,
      isCoinbase: item.utxoEntry.isCoinbase,
      outpoint: {
        index: item.outpoint.index,
        transactionId: item.outpoint.transactionId
      },
      scriptPublicKey: {
        script: item.utxoEntry.scriptPublicKey.scriptPublicKey,
        version: 0 // 原始数据中没有 version，设为默认值 0
      }
    },
    isCoinbase: item.utxoEntry.isCoinbase
  }));
}

// 自定义空状态组件
const EmptyState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
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
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    sx: {
      fontSize: 48,
      color: '#888',
      mb: 2
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "h6",
    color: "text.primary",
    sx: {
      fontWeight: 500,
      mb: 1
    },
    children: "No UTXOs Found"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 2,
      maxWidth: '300px'
    },
    children: "It looks like you don\u2019t have any UTXOs. This could be due to a network issue or because your wallet is empty."
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
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

// 自定义加载状态组件
const LoadingState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 4,
    height: '50vh'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
      style: {
        fontSize: 36,
        color: '#666'
      }
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mt: 2
    },
    children: "Loading UTXOs..."
  })]
});

// 自定义卡片样式
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A)(_ref => {
  let {
    theme
  } = _ref;
  return {
    transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
    '&:hover': {
      transform: 'translateY(-4px)',
      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)'
    },
    borderRadius: '8px',
    background: '#ffffff',
    cursor: 'pointer',
    border: '1px solid rgb(236, 236, 236)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
    // padding: '0 !important'
  };
});

// 自定义按钮样式
const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay)(_mui_material_Button__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A)(_ref2 => {
  let {
    theme
  } = _ref2;
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
function UTXOTab() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .Z)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .Y9, {
      onBack: () => navigate('ToolScreen'),
      title: "UTXOs"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .UC, {
      classname: "!p-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_UTXOTab, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Footer */ .wi, {
      px: "zero",
      py: "zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_4__/* .NavTabBar */ .w, {
        tab: "mint"
      })
    })]
  });
}
function _UTXOTab() {
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useCurrentAccount */ .YL)();
  const fetchUtxos = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useFetchUtxosCallback */ .II)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .Z)();
  const keyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentKeyring */ .KZ)();
  const reloadAccounts = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useReloadAccounts */ .Fg)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_3__/* .useTools */ .D)();

  // 引入两个加载状态：fetchLoading（加载 UTXO 数据）和 compoundLoading（Compound 操作）
  const [fetchLoading, setFetchLoading] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(true); // 新增：UTXO 数据加载状态
  const [compoundLoading, setCompoundLoading] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(false); // 重命名：Compound 操作加载状态
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useNetworkType */ .iP)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountAddress */ .PJ)();
  // const utxos = useUtxos();

  const utxos = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useUtxos */ .di)();
  const [UTXO, setUTXO] = (0,react__WEBPACK_IMPORTED_MODULE_11__.useState)(utxos);

  // amount: string;
  // blockDaaScore: string;
  // entry: {
  //   address?: string;
  //   amount: string;
  //   blockDaaScore: string;
  //   isCoinbase: boolean;
  //   outpoint: { index: number; transactionId: string };
  //   scriptPublicKey: {
  //     script: string;
  //     version: number;
  //   };
  // };
  // isCoinbase: boolean;

  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    const fetchU = async () => {
      if (utxos.length !== 0) {
        setUTXO(utxos);
      } else {
        try {
          const temp_url = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_1__/* .NetworkType */ .z1.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_MAINNET */ ._7 + "/addresses/" + address + "/utxos" : _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .OPENAPI_URL_TESTNET */ .lu + "/addresses/" + address + "/utxos";
          const response = await fetch(temp_url);
          const data = await response.json();
          const _data = transformData(data);
          console.log("Fetched UTXO:", _data);
          setUTXO(_data);
        } catch (error) {
          console.error("Error fetching UTXO:", error);
        }
      }
    };
    fetchU();
  }, [utxos, currentAccount, fetchUtxos, UTXO]); // 依赖

  // 加载 UTXO 数据
  (0,react__WEBPACK_IMPORTED_MODULE_11__.useEffect)(() => {
    setFetchLoading(true);
    fetchUtxos().finally(() => {
      setFetchLoading(false);
    });
  }, [currentAccount, fetchUtxos]);
  const compound = async () => {
    setCompoundLoading(true);
    const result = await wallet.compoundUtxos(keyring.accounts);
    setCompoundLoading(false);
    if (result == null || result == undefined) {
      tools.toastError('Compound failed, please check the network and try again');
    } else {
      await reloadAccounts();
      tools.toastSuccess('Success');
    }
  };

  // 加载中状态
  if (fetchLoading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      sx: {
        padding: 3
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StyledButton, {
        onClick: () => compound(),
        fullWidth: true,
        variant: "contained",
        size: "large",
        startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
          sx: {
            color: '#000'
          }
        }),
        disabled: compoundLoading,
        sx: {
          mb: 3
        },
        children: compoundLoading ? 'Compounding...' : 'Compound UTXO'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(LoadingState, {})]
    });
  }

  // 数据加载完成，且有 UTXO
  if (UTXO && UTXO.length > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StyledButton, {
        onClick: () => compound(),
        fullWidth: true,
        variant: "contained",
        size: "large",
        startIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_icons_material_AccountBalance__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
          sx: {
            color: '#000'
          }
        }),
        disabled: compoundLoading,
        sx: {
          mb: 3
        },
        children: compoundLoading ? 'Compounding...' : 'Compound UTXO'
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
        variant: "body2",
        color: "text.secondary",
        sx: {
          mb: 2
        },
        children: "It should takes about 1-2 minutes before the UTXO merge complete."
      }), compoundLoading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .fI, {
        style: {
          margin: '20px 0',
          textAlign: 'center'
        },
        justifyCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .In, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            style: {
              fontSize: 24,
              color: '#888'
            }
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
        variant: "subtitle1",
        color: "text.primary",
        sx: {
          fontWeight: 500,
          mb: 1,
          color: '#444'
        },
        children: ["Your UTXOs (", utxos.length, ")"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay, {
        container: true,
        spacing: 2.5,
        children: utxos.map((e, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StyledCard, {
            className: "!p-3",
            onClick: () => navigate('UtxoDetailScreen', {
              utxoDetail: e.entry
            }),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
              className: "!p-0",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Row */ .fI, {
                full: true,
                justifyBetween: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                  display: "flex",
                  alignItems: "center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_icons_material_Description__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
                    sx: {
                      fontSize: 20,
                      mr: 1.5,
                      color: '#666'
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .EY, {
                      text: `${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .sompiToAmount */ ._m)(Number(e.amount))} KAS`,
                      preset: "regular",
                      style: {
                        fontSize: '0.9rem',
                        fontWeight: 500,
                        color: '#222'
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .EY, {
                      text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .shortAddress */ .Dc)(e.entry.address || 'N/A'),
                      preset: "sub",
                      classname: "mt-2",
                      style: {
                        fontSize: '0.85rem',
                        color: '#888'
                      }
                    })]
                  })]
                })
              })
            })
          })
        }, index))
      })]
    });
  }

  // 数据加载完成，但无 UTXO
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    sx: {
      padding: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(EmptyState, {})
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 92659:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8zm2 16H8v-2h8zm0-4H8v-2h8zm-3-5V3.5L18.5 9z"
}), 'Description'));

/***/ })

}]);