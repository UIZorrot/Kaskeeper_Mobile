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
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



















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
        color: "text.secondary",
        sx: {
          mb: 2,
          fontSize: '14px',
          color: 'rgba(10,36,99,0.65)'
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
        sx: {
          fontWeight: 500,
          fontSize: '15px',
          color: '#0A2463',
          marginBottom: '20px'
        },
        children: ["Your UTXOs (", utxos.length, ")"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay, {
        container: true,
        spacing: 2.5,
        children: utxos.map((e, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Ay, {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(StyledCard, {
            className: "!p-2",
            style: {
              background: 'rgba(10,36,99,0.03)',
              border: 'none'
            },
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
                      color: '#0A2463'
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .EY, {
                      text: `${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .sompiToAmount */ ._m)(Number(e.amount))} KAS`,
                      preset: "regular",
                      style: {
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#0A2463'
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .EY, {
                      text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .shortAddress */ .Dc)(e.entry.address || 'N/A'),
                      preset: "sub",
                      classname: "mt-1",
                      style: {
                        fontSize: '13px',
                        color: 'rgba(10,36,99,0.65)'
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

/***/ 33652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_ToolOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/ToolOutlined.js
// This icon file is generated automatically.
var ToolOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M876.6 239.5c-.5-.9-1.2-1.8-2-2.5-5-5-13.1-5-18.1 0L684.2 409.3l-67.9-67.9L788.7 169c.8-.8 1.4-1.6 2-2.5 3.6-6.1 1.6-13.9-4.5-17.5-98.2-58-226.8-44.7-311.3 39.7-67 67-89.2 162-66.5 247.4l-293 293c-3 3-2.8 7.9.3 11l169.7 169.7c3.1 3.1 8.1 3.3 11 .3l292.9-292.9c85.5 22.8 180.5.7 247.6-66.4 84.4-84.5 97.7-213.1 39.7-311.3zM786 499.8c-58.1 58.1-145.3 69.3-214.6 33.6l-8.8 8.8-.1-.1-274 274.1-79.2-79.2 230.1-230.1s0 .1.1.1l52.8-52.8c-35.7-69.3-24.5-156.5 33.6-214.6a184.2 184.2 0 01144-53.5L537 318.9a32.05 32.05 0 000 45.3l124.5 124.5a32.05 32.05 0 0045.3 0l132.8-132.8c3.7 51.8-14.4 104.8-53.6 143.9z" } }] }, "name": "tool", "theme": "outlined" };
/* harmony default export */ const asn_ToolOutlined = (ToolOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/ToolOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ToolOutlined_ToolOutlined = function ToolOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_ToolOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(ToolOutlined_ToolOutlined);
if (false) {}
/* harmony default export */ const icons_ToolOutlined = (RefIcon);

/***/ }),

/***/ 46952:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75003);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74848);
"use client";



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_utils_createSvgIcon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
  d: "M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"
}), 'AccountBalance'));

/***/ }),

/***/ 49349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_WalletOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/WalletOutlined.js
// This icon file is generated automatically.
var WalletOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 464H528V448h312v128zm0 264H184V184h656v200H496c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h344v200zM580 512a40 40 0 1080 0 40 40 0 10-80 0z" } }] }, "name": "wallet", "theme": "outlined" };
/* harmony default export */ const asn_WalletOutlined = (WalletOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/WalletOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var WalletOutlined_WalletOutlined = function WalletOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_WalletOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(WalletOutlined_WalletOutlined);
if (false) {}
/* harmony default export */ const icons_WalletOutlined = (RefIcon);

/***/ }),

/***/ 57287:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_FundProjectionScreenOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/FundProjectionScreenOutlined.js
// This icon file is generated automatically.
var FundProjectionScreenOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "defs", "attrs": {}, "children": [{ "tag": "style", "attrs": {} }] }, { "tag": "path", "attrs": { "d": "M312.1 591.5c3.1 3.1 8.2 3.1 11.3 0l101.8-101.8 86.1 86.2c3.1 3.1 8.2 3.1 11.3 0l226.3-226.5c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L517 485.3l-86.1-86.2a8.03 8.03 0 00-11.3 0L275.3 543.4a8.03 8.03 0 000 11.3l36.8 36.8z" } }, { "tag": "path", "attrs": { "d": "M904 160H548V96c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H120c-17.7 0-32 14.3-32 32v520c0 17.7 14.3 32 32 32h356.4v32L311.6 884.1a7.92 7.92 0 00-2.3 11l30.3 47.2v.1c2.4 3.7 7.4 4.7 11.1 2.3L512 838.9l161.3 105.8c3.7 2.4 8.7 1.4 11.1-2.3v-.1l30.3-47.2a8 8 0 00-2.3-11L548 776.3V744h356c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 512H160V232h704v440z" } }] }, "name": "fund-projection-screen", "theme": "outlined" };
/* harmony default export */ const asn_FundProjectionScreenOutlined = (FundProjectionScreenOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/FundProjectionScreenOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var FundProjectionScreenOutlined_FundProjectionScreenOutlined = function FundProjectionScreenOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_FundProjectionScreenOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(FundProjectionScreenOutlined_FundProjectionScreenOutlined);
if (false) {}
/* harmony default export */ const icons_FundProjectionScreenOutlined = (RefIcon);

/***/ }),

/***/ 78602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_SettingOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/SettingOutlined.js
// This icon file is generated automatically.
var SettingOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 009.3-35.2l-.9-2.6a443.74 443.74 0 00-79.7-137.9l-1.8-2.1a32.12 32.12 0 00-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 00-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 00-25.8 25.7l-15.8 85.4a351.86 351.86 0 00-99 57.4l-81.9-29.1a32 32 0 00-35.1 9.5l-1.8 2.1a446.02 446.02 0 00-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 00-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0035.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0025.8 25.7l2.7.5a449.4 449.4 0 00159 0l2.7-.5a32.05 32.05 0 0025.8-25.7l15.7-85a350 350 0 0099.7-57.6l81.3 28.9a32 32 0 0035.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 01-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 01-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 01512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 01400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 01624 502c0 29.9-11.7 58-32.8 79.2z" } }] }, "name": "setting", "theme": "outlined" };
/* harmony default export */ const asn_SettingOutlined = (SettingOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/SettingOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SettingOutlined_SettingOutlined = function SettingOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_SettingOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(SettingOutlined_SettingOutlined);
if (false) {}
/* harmony default export */ const icons_SettingOutlined = (RefIcon);

/***/ }),

/***/ 80212:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_ExpandAltOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/ExpandAltOutlined.js
// This icon file is generated automatically.
var ExpandAltOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M855 160.1l-189.2 23.5c-6.6.8-9.3 8.8-4.7 13.5l54.7 54.7-153.5 153.5a8.03 8.03 0 000 11.3l45.1 45.1c3.1 3.1 8.2 3.1 11.3 0l153.6-153.6 54.7 54.7a7.94 7.94 0 0013.5-4.7L863.9 169a7.9 7.9 0 00-8.9-8.9zM416.6 562.3a8.03 8.03 0 00-11.3 0L251.8 715.9l-54.7-54.7a7.94 7.94 0 00-13.5 4.7L160.1 855c-.6 5.2 3.7 9.5 8.9 8.9l189.2-23.5c6.6-.8 9.3-8.8 4.7-13.5l-54.7-54.7 153.6-153.6c3.1-3.1 3.1-8.2 0-11.3l-45.2-45z" } }] }, "name": "expand-alt", "theme": "outlined" };
/* harmony default export */ const asn_ExpandAltOutlined = (ExpandAltOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/ExpandAltOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var ExpandAltOutlined_ExpandAltOutlined = function ExpandAltOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_ExpandAltOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(ExpandAltOutlined_ExpandAltOutlined);
if (false) {}
/* harmony default export */ const icons_ExpandAltOutlined = (RefIcon);

/***/ }),

/***/ 80590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ NavTabBar)
/* harmony export */ });
/* unused harmony export TabButton */
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43658);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5005);
/* harmony import */ var _BaseView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(66916);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98505);
/* harmony import */ var _Grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(40083);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(49349);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33652);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(78602);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(57287);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(80212);
/* harmony import */ var _ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5579);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__]);
([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









// 是否浏览器中打开

let isInTab = false;
const isWindowOpenTab = async () => {
  isInTab = await (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .extensionIsInTab */ .kn)();
};
isWindowOpenTab();
function NavTabBar(_ref) {
  let {
    tab
  } = _ref;
  // TODO: 预留给Marketplace, columns={4}
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Grid__WEBPACK_IMPORTED_MODULE_5__/* .Grid */ .x, {
    columns: !isInTab ? 5 : 4,
    style: {
      width: '100%',
      height: '60px',
      backgroundColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.bg2,
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
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_0__/* .useNavigate */ .Z)();
  const unreadApp = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useUnreadAppSummary */ .kg)();
  const readTab = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_1__/* .useReadTab */ .lx)();
  const isInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .useExtensionIsInTab */ .VI)();

  // Hooks
  const openExtensionInTab = (0,_ui_features_browser_tabs__WEBPACK_IMPORTED_MODULE_6__/* .useOpenExtensionInTab */ .pI)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_4__/* .Column */ .V, {
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
    children: [tabName === 'home' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'mint' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'settings' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'website' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), tabName === 'expand' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      style: {
        color: isActive ? _ui_theme_colors__WEBPACK_IMPORTED_MODULE_2__/* .colors */ .T.aqua : 'white_muted',
        fontSize: "22px"
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .P, {
      style: {
        position: 'relative'
      },
      children: tabName === 'app' && unreadApp && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_BaseView__WEBPACK_IMPORTED_MODULE_3__/* .BaseView */ .P, {
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