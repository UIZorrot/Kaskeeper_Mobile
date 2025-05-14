"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[7579],{

/***/ 9344:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  V: () => (/* binding */ TabBar)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/ui/theme/colors.ts
var colors = __webpack_require__(5005);
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(98505);
// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(51942);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(20577);
;// ./src/ui/components/TabBar/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/ui/components/TabBar/index.tsx
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable indent */







function TabBar(props) {
  const {
    items,
    defaultActiveKey,
    activeKey,
    onTabClick,
    progressEnabled,
    preset
  } = props;
  const [tabKey, setTabKey] = (0,react.useState)(defaultActiveKey);
  const [progress, setProgress] = (0,react.useState)(0);
  (0,react.useEffect)(() => {
    const curIndex = items.findIndex(v => v.key === tabKey);
    setProgress(curIndex);
    onTabClick(tabKey);
  }, [tabKey]);
  (0,react.useEffect)(() => {
    if (activeKey !== tabKey) {
      setTabKey(activeKey);
      const curIndex = items.findIndex(v => v.key === activeKey);
      setProgress(curIndex);
    }
  }, [activeKey]);
  if (preset == 'number-page') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
      children: items.map((v, index) => {
        const isSelected = v.key === tabKey;
        const reach = isSelected; //index <= (tabKey as number);
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          style: Object.assign({
            width: 20,
            height: 20
          }, reach ? {
            backgroundColor: colors/* colors */.T.gold
          } : {
            backgroundColor: colors/* colors */.T.bg2
          }),
          justifyCenter: true,
          itemsCenter: true,
          onClick: () => {
            setTabKey(v.key);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: v.label,
            color: 'white'
          })
        }, v.key);
      })
    });
  }
  if (preset == 'style1') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
      gap: 'lg',
      children: items.map((v, index) => {
        const isSelected = v.key === tabKey;
        if (progressEnabled && index > progress) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
              text: v.label,
              color: 'textDim'
            })
          }, v.key);
        } else {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
            style: {
              padding: '8px'
            },
            classname: isSelected ? 'selected-tab' : '',
            onClick: () => {
              setTabKey(v.key);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
              text: v.label,
              size: 'md',
              preset: isSelected ? 'bold' : 'regular',
              color: isSelected ? 'gold' : 'white'
            })
          }, v.key);
        }
      })
    });
  }

  // tabbar
  if (preset == 'style2') {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
      children: items.map((v, index) => {
        if (v.hidden) return null;
        const isSelected = v.key === tabKey;
        if (progressEnabled && index > progress) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
              text: v.label,
              color: 'textDim'
            })
          }, v.key);
        } else {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
            style: {
              borderWidth: 1,
              borderRadius: 20,
              backgroundColor: '#322D1F'
            },
            color: isSelected ? 'gold' : 'white_muted',
            onClick: () => {
              setTabKey(v.key);
            },
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
              text: v.label,
              size: "xs",
              color: isSelected ? 'gold' : 'white_muted',
              mx: "md",
              my: "sm"
            })
          }, v.key);
        }
      })
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
    children: items.map((v, index) => {
      const isSelected = v.key === tabKey;
      if (progressEnabled && index > progress) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: v.label,
            color: 'textDim'
          })
        }, v.key);
      } else {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          classname: isSelected ? 'selected-tab' : '',
          onClick: () => {
            setTabKey(v.key);
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: v.label,
            color: isSelected ? 'gold' : 'white'
          })
        }, v.key);
      }
    })
  });
}

/***/ }),

/***/ 11846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ TXTypes)
/* harmony export */ });
let TXTypes = /*#__PURE__*/function (TXTypes) {
  TXTypes["Mint"] = "Mint";
  TXTypes["Deploy"] = "Deploy";
  TXTypes["TransferKrc20"] = "TransferKrc20";
  TXTypes["TransferNative"] = "TransferNative";
  return TXTypes;
}({});

/***/ }),

/***/ 11944:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   k: () => (/* binding */ WarningPopover)
/* harmony export */ });
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5005);
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6167);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39053);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(98505);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(76302);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(51942);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20577);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */








const riskColor = {
  high: 'danger',
  low: 'orange'
};
const WarningPopover = _ref => {
  let {
    risks,
    onClose
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Popover__WEBPACK_IMPORTED_MODULE_4__/* .Popover */ .A, {
    onClose: onClose,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .V, {
      justifyCenter: true,
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .EY, {
        text: 'WARNING',
        textCenter: true,
        preset: "title-bold",
        color: "orange"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Column__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .V, {
        mt: "lg",
        children: risks.map((risk, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .V, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .f, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_2__/* .Card */ .Z, {
              preset: "style2",
              bg: risk.color || riskColor[risk.level],
              style: {
                width: 60,
                height: 60
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .EY, {
                text: risk.level,
                size: "lg"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .EY, {
              text: risk.desc
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .f, {
            style: {
              borderTopWidth: 1,
              borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_0__/* .colors */ .T.border
            },
            my: "md"
          })]
        }, 'risk_' + index))
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_5__/* .Row */ .f, {
        full: true,
        mt: "lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$, {
          text: "OK",
          full: true,
          preset: "primary",
          onClick: e => {
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

/***/ 22220:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SignPsbtL2)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11703);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(55517);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84861);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64219);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(8963);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17032);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(88438);
/* harmony import */ var _background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3146);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59577);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87525);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43168);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(93567);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(72635);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96540);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77093);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(95642);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(99770);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(28454);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */








// 引入 Ant Design 组件








// 自定义样式

const paperStyle = {
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa'
};
const initTxInfo = {
  balance: 0,
  txError: ''
};
function SignPsbtL2(_ref) {
  let {
    params: {
      data: {
        toAddress,
        sompi,
        feeRate,
        type,
        unsignedTx,
        tokenContractAddress
      },
      session
    },
    header,
    handleCancel,
    handleConfirm
  } = _ref;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .useApproval */ .V9)();
  const [txInfo, setTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(initTxInfo);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(true);
  const [confirmLoading, setConfirmLoading] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_6__/* .useTools */ .D)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountAddress */ .PJ)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentAccount */ .YL)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useUserPrivateKey */ .N2)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useNetworkType */ .iP)();
  const [isOk, setIsOk] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(false);
  const [fee, setFee] = (0,react__WEBPACK_IMPORTED_MODULE_12__.useState)(feeRate);
  const accuracy = 10 ** 18;
  const isScammerFlag = (0,react__WEBPACK_IMPORTED_MODULE_12__.useRef)(false);
  const getFee = async () => {
    const {
      balance
    } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountEthBalance */ .kw)(currentAccount.addressL2, networkType);
    const gasPrice = await getGasPrice(Number(balance));
    setFee(gasPrice + '');
  };
  const getGasPrice = async amount => {
    const _inputAmount = Number(amount || sompi);
    if (_inputAmount > 0) {
      try {
        const rpc = {
          [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .z1.Mainnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_RPC_MAINNET_L2 */ .jy,
          [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .z1.Testnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_RPC_TESTNET_L2 */ .Gj,
          [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .z1.Devnet]: _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_RPC_DEVNET_L2 */ .nX
        }[networkType] || '';
        const provider = new ethers__WEBPACK_IMPORTED_MODULE_16__/* .JsonRpcProvider */ .FR(rpc);
        const valueInWei = ethers__WEBPACK_IMPORTED_MODULE_17__/* .parseEther */ .g5(_inputAmount.toString());
        const gasLimit = await provider.estimateGas({
          to: currentAccount.addressL2,
          value: valueInWei
        });
        const garFee = (await provider.getFeeData()).gasPrice;
        const calculatedGasPrice = Number(gasLimit) * Number(garFee) / 10 ** 18;
        return calculatedGasPrice;
      } catch (error) {
        console.error('err', error);
        return 0;
      }
    }
    return 0;
  };
  const init = async () => {
    const {
      isScammer
    } = await wallet.checkWebsite((session === null || session === void 0 ? void 0 : session.origin) || '');
    if (!sompi) {
      await getFee();
    }
    isScammerFlag.current = isScammer;
    let bool = true;
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2KASPA) {
      const dustAmountL2 = 0.02;
      const {
        balance
      } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountEthBalance */ .kw)(currentAccount.addressL2, networkType);
      const isOkKrcBalance = sompi / accuracy <= Number(balance);
      const isOkErcMinAmount = sompi / accuracy >= dustAmountL2;
      const isOkKrcAmount = !Number.isFinite(sompi) || sompi <= 0;
      if (isOkKrcAmount) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: `Please enter the correct amount`
        }));
      } else if (!isOkKrcBalance) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: `Insufficient balance. Balance(${balance}) is lower than ${sompi / accuracy}`
        }));
      } else if (!isOkErcMinAmount) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: `Amount must be at least ${dustAmountL2} eKAS`
        }));
      } else if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEthereumAddress */ .IR)(toAddress || '')) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: `Invalid address`
        }));
      } else {
        setTxInfo(Object.assign({}, txInfo, {
          balance
        }));
      }
      if (!sompi || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEthereumAddress */ .IR)(toAddress || '') || !isOkKrcBalance || !isOkErcMinAmount || isOkKrcAmount) {
        bool = false;
      }
      setIsOk(bool);
    } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2ERC20) {
      const isEmptyObject = !unsignedTx || typeof unsignedTx !== 'object' || Object.keys(unsignedTx).length === 0;
      if (isEmptyObject) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: `Invalid unsignedTx`
        }));
        bool = false;
      }
      setIsOk(bool);
    } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2SPECAILTX) {
      if (!sompi || !Number.isFinite(sompi) || sompi <= 0 || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .isValidEthereumAddress */ .IR)(toAddress || '') || !tokenContractAddress) {
        setTxInfo(Object.assign({}, txInfo, {
          txError: `Incorrect format`
        }));
        bool = false;
      } else {
        const res = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_14__/* .get_erc20_list_by_address */ .GX)(networkType, currentAccount.addressL2);
        for (let i = 0; i < res.data.items.length; i++) {
          const {
            value,
            token
          } = res.data.items[i];
          if (token.address === tokenContractAddress && sompi / accuracy >= Number(value / accuracy)) {
            setTxInfo(Object.assign({}, txInfo, {
              txError: `Insufficient balance. Balance(${Number(value / accuracy)}) is lower than ${sompi / accuracy}`
            }));
            bool = false;
            break;
          }
        }
      }
      setIsOk(bool);
    }
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_12__.useEffect)(() => {
    init();
  }, []);
  if (!handleCancel) {
    handleCancel = () => {
      rejectApproval();
    };
  }
  if (!handleConfirm) {
    let networkId = '';
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .z1.Mainnet) {
      networkId = 'mainnet';
    } else if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .NetworkType */ .z1.Testnet) {
      networkId = 'testnet-10';
    } else {
      networkId = 'devnet';
    }
    handleConfirm = async () => {
      setConfirmLoading(true);
      setTxInfo(Object.assign({}, txInfo, {
        txError: ''
      }));
      if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2KASPA) {
        (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__/* .send_eth_transaction */ .IF)(toAddress, sompi / accuracy + '', `0x${privateKey.hex}`).then(res => {
          return resolveApproval({
            txid: res.transactionHash
          });
        }).catch(error => {
          const message = (error === null || error === void 0 ? void 0 : error.message) || 'Transaction failed';
          setTxInfo(Object.assign({}, txInfo, {
            txError: message
          }));
        }).finally(() => {
          setConfirmLoading(false);
        });
      } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2ERC20) {
        (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__/* .send_kaspa_with_dapp_evm_payload */ .$I)(unsignedTx, networkId, `0x${privateKey.hex}`, address, fee).then(res => {
          const {
            hash
          } = res;
          resolveApproval({
            txid: hash
          });
        }).catch(error => {
          const message = (error === null || error === void 0 ? void 0 : error.message) || 'Transaction failed';
          setTxInfo(Object.assign({}, txInfo, {
            txError: message
          }));
        }).finally(() => {
          setConfirmLoading(false);
        });
      } else if (type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2SPECAILTX) {
        (0,_background_krc20_l2__WEBPACK_IMPORTED_MODULE_4__/* .send_erc20_with_evm_payload */ .Nt)(networkId, `0x${privateKey.hex}`, address, fee, toAddress, sompi / accuracy + '', tokenContractAddress).then(res => {
          const {
            hash
          } = res;
          resolveApproval({
            txid: hash
          });
        }).catch(error => {
          const message = (error === null || error === void 0 ? void 0 : error.message) || 'Transaction failed';
          setTxInfo(Object.assign({}, txInfo, {
            txError: message
          }));
        }).finally(() => {
          setConfirmLoading(false);
        });
      }
    };
  }
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
        style: {
          fontSize: '48px',
          color: '#48e3c5'
        }
      })
    });
  }
  if (!header && session) {
    header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
      session: session
    });
  }
  if (isScammerFlag.current) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      style: paperStyle,
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: "Phishing Detection"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px',
            marginTop: '10px'
          },
          children: "Malicious behavior and suspicious activity have been detected."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          },
          children: "Your access to this page has been restricted by KasKeeper as it might be unsafe."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
        gutter: 8,
        style: {
          marginTop: '20px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: handleCancel,
            children: "Reject (blocked by KasKeeper)"
          })
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          marginTop: '20px'
        },
        children: [sompi && sompi > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "Spend Amount:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            style: {
              color: '#666'
            },
            children: sompi / accuracy
          })]
        }), feeRate && Number(feeRate) > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "feeRate:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("span", {
            style: {
              color: '#666'
            },
            children: [" ", `${fee} (${(0,i18next__WEBPACK_IMPORTED_MODULE_11__.t)('priority fee')})`]
          })]
        }), currentAccount && currentAccount.addressL2 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "address:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            style: {
              color: '#666'
            },
            children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .shortAddress */ .Dc)(currentAccount.addressL2, 10)
          })]
        }), toAddress && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
          style: {
            fontSize: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {
            style: {
              margin: '4px'
            },
            children: "toAddress:"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("span", {
            style: {
              color: '#666'
            },
            children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .shortAddress */ .Dc)(toAddress, 10)
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
        style: {
          backgroundColor: [_shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2ERC20, _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2SPECAILTX].includes(type) || txInfo !== null && txInfo !== void 0 && txInfo.txError ? '#f5f5f5' : 'transparent',
          padding: '10px',
          overflow: 'auto',
          fontSize: '12px',
          fontFamily: 'monospace',
          marginTop: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("pre", {
          style: {
            margin: '0'
          },
          children: [type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2ERC20 && !(txInfo !== null && txInfo !== void 0 && txInfo.txError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("code", {
            children: JSON.stringify(unsignedTx, null, 1)
          }), type === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .TxType */ .zd.SEND_L2SPECAILTX && !(txInfo !== null && txInfo !== void 0 && txInfo.txError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("code", {
            children: JSON.stringify(tokenContractAddress, null, 1)
          })]
        }), (txInfo === null || txInfo === void 0 ? void 0 : txInfo.txError) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
          style: {
            backgroundColor: '#f5f5f5',
            overflow: 'auto',
            fontSize: '12px',
            fontFamily: 'monospace',
            color: 'red'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("pre", {
            style: {
              margin: '0',
              whiteSpace: 'pre-wrap',
              wordWrap: 'break-word',
              overflowWrap: 'break-word'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("code", {
              children: txInfo === null || txInfo === void 0 ? void 0 : txInfo.txError
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
        span: isOk ? 12 : 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), isOk && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_22__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          loading: confirmLoading,
          onClick: () => {
            handleConfirm();
          },
          children: 'Sign & Pay'
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 27183:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ Connect)
/* harmony export */ });
/* unused harmony export MyItem */
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(8963);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10971);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(29281);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11703);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(55517);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17032);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(88438);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84861);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64219);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87708);
/* harmony import */ var antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_checkbox_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(26138);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59577);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87525);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43182);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(36904);
/* harmony import */ var _ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(89872);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(93567);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__]);
_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];












/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */










// 引入 Ant Design 组件


// 自定义样式

const paperStyle = {
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  maxWidth: 400,
  margin: 'auto',
  padding: '15px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '36px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
function MyItem(_ref, ref) {
  let {
    account,
    selected,
    onClick
  } = _ref;
  if (!account) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
    onClick: onClick,
    style: {
      margin: '10px auto',
      maxWidth: '100%',
      borderRadius: '8px',
      cursor: 'pointer',
      border: `1px solid ${selected ? '#48e3c5' : '#d9d9d9'}`,
      backgroundColor: selected ? '#e6f7ff' : '#fff',
      // 修复语法错误
      boxShadow: selected ? '0 2px 8px rgba(72, 227, 197, 0.2)' : 'none',
      padding: '1px'
    }
    // 移除 hoverable，避免干扰
    ,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      align: "middle",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
        span: 2,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_checkbox__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
          checked: selected,
          onClick: e => e.stopPropagation() // 阻止 Checkbox 事件冒泡
          ,
          style: {
            '--ant-check-color': '#48e3c5',
            '--ant-checkbox-size': '16px',
            '--ant-checkbox-border-radius': '50%'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
        span: 20,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Text, {
          strong: true,
          style: {
            fontSize: '14px'
          },
          children: account.alianName
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Text, {
          type: "secondary",
          style: {
            display: 'block',
            fontSize: '12px'
          },
          children: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_14__/* .shortAddress */ .Dc)(account.address)
        })]
      })]
    })
  });
}
function Connect(_ref2) {
  let {
    params: {
      session
    }
  } = _ref2;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_14__/* .useApproval */ .V9)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .D)();
  const handleCancel = () => {
    rejectApproval('User rejected the request.');
  };
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useKeyrings */ .C3)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_14__/* .useWallet */ .vT)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useCurrentKeyring */ .KZ)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useCurrentAccount */ .YL)();
  const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const [selectedKeyring, setSelectedKeyring] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useAppDispatch */ .j)();
  const [checkState, setCheckState] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(_shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .H6.CHECKING);
  const [warning, setWarning] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const handleConnect = async () => {
    if (!selectedAccount || !selectedKeyring) return;
    setLoading(true);
    try {
      // const accountIndex = selectedAccount.index || 0;
      // await wallet.changeKeyring(selectedKeyring, accountIndex);
      // dispatch(keyringsActions.setCurrent(selectedKeyring));
      // const _currentAccount = await wallet.getCurrentAccount();
      // dispatch(accountActions.setCurrent(_currentAccount));
      resolveApproval();
    } catch (error) {
      console.log('error', error);
      tools.toastError(error.message);
    } finally {
      setLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    wallet.checkWebsite(session.origin).then(v => {
      if (v.isScammer) {
        setCheckState(_shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .H6.SCAMMER);
      } else {
        setCheckState(_shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .H6.SAFE);
      }
      if (v.warning) {
        setWarning(v.warning);
      }
    });
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    setSelectedAccount(currentAccount);
    setSelectedKeyring(currentKeyring);
  }, [currentAccount, currentKeyring]);
  if (checkState === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .H6.CHECKING) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
        style: {
          fontSize: '48px',
          color: '#48e3c5'
        }
      })
    });
  }
  if (checkState === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .WebsiteState */ .H6.SCAMMER) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      style: paperStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '10px',
          fontSize: '18px'
        },
        children: "Phishing Detection"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Paragraph, {
        style: {
          textAlign: 'center',
          fontSize: '14px'
        },
        children: "Malicious behavior and suspicious activity have been detected."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Paragraph, {
        style: {
          textAlign: 'center',
          fontSize: '14px'
        },
        children: "Your access to this page has been restricted by KasKeeper as it might be unsafe."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
        gutter: 8,
        style: {
          marginTop: '10px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: handleCancel,
            children: "Reject (blocked by KasKeeper)"
          })
        })
      })]
    });
  }
  if (warning) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      style: paperStyle,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '10px',
          fontSize: '18px'
        },
        children: "Warning"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Paragraph, {
        style: {
          textAlign: 'center',
          fontSize: '14px'
        },
        children: warning
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
        gutter: 8,
        style: {
          marginTop: '10px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: () => setWarning(''),
            children: "I am aware of the risks"
          })
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A, {
      session: session
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Title, {
      level: 4,
      style: {
        textAlign: 'center',
        marginTop: '10px',
        fontSize: '18px'
      },
      children: "Connect with KasKeeper"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Paragraph, {
      style: {
        textAlign: 'center',
        color: '#666',
        fontSize: '14px',
        marginBottom: '5px'
      },
      children: "Select the account to use on this site"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Paragraph, {
      style: {
        textAlign: 'center',
        color: '#666',
        fontSize: '12px',
        marginBottom: '10px'
      },
      children: "Only connect with sites you trust."
    }), keyrings.map(keyring => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("div", {
      style: {
        marginTop: '10px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A.Text, {
        strong: true,
        style: {
          fontSize: '14px'
        },
        children: keyring.alianName
      }), keyring.accounts.map(account => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(MyItem, {
        account: account,
        selected: (selectedKeyring === null || selectedKeyring === void 0 ? void 0 : selectedKeyring.key) === keyring.key && (selectedAccount === null || selectedAccount === void 0 ? void 0 : selectedAccount.address) === account.address,
        onClick: async () => {
          console.log('click', currentKeyring.key, keyring.key);
          setSelectedAccount(account);
          setSelectedKeyring(keyring);
          const accountIndex = account.index || 0;
          await wallet.changeKeyring(keyring, accountIndex);
          console.log('changeKeyring');
          dispatch(_ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_13__/* .keyringsActions */ .kk.setCurrent(keyring));
          const _currentAccount = await wallet.getCurrentAccount();
          console.log('_currentAccount');
          dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_10__/* .accountActions */ .$G.setCurrent(_currentAccount));
        }
      }, account.key))]
    }, keyring.key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_23__["default"], {
          loading: loading,
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConnect,
          children: "Connect"
        })
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 29536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* binding */ AddressText)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(13108);
// EXTERNAL MODULE: ./src/ui/state/settings/hooks.ts + 1 modules
var hooks = __webpack_require__(43168);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(13907);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(17508);
// EXTERNAL MODULE: ./src/ui/components/Card/index.tsx
var Card = __webpack_require__(39053);
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(98505);
// EXTERNAL MODULE: ./src/ui/components/Icon/index.tsx
var Icon = __webpack_require__(43264);
// EXTERNAL MODULE: ./src/ui/components/Popover/index.tsx
var Popover = __webpack_require__(76302);
// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(51942);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(20577);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/ui/components/AddressDetailPopover/index.tsx
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */











const AddressDetailPopover = _ref => {
  let {
    address,
    onClose
  } = _ref;
  const {
    t
  } = (0,useTranslation/* useTranslation */.B)();
  const tools = (0,ActionComponent/* useTools */.D)();
  const blockstreamUrl = (0,hooks/* useBlockstreamUrl */.oM)();
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popover/* Popover */.A, {
    onClose: onClose,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.V, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
        text: (0,utils/* shortAddress */.Dc)(address),
        textCenter: true
      }), /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Z, {
        preset: "style2",
        onClick: e => {
          (0,utils/* copyToClipboard */.lW)(address).then(() => {
            tools.toastSuccess(t('Copied'));
          });
        },
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
          itemsCenter: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: address,
            style: {
              overflowWrap: 'anywhere'
            }
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
            icon: "copy"
          })]
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
        justifyCenter: true,
        onClick: () => {
          (0,utils/* openUrlLink */.aj)(`${blockstreamUrl}/address/${address}`);
        },
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
          icon: "eye",
          color: "textDim"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
          preset: "regular-bold",
          text: t('View on Block Explorer'),
          color: "textDim"
        })]
      })]
    })
  });
};
;// ./src/ui/components/AddressText/index.tsx






const AddressText = props => {
  const [popoverVisible, setPopoverVisible] = (0,react.useState)(false);
  const address = (0,react.useMemo)(() => {
    if (props.address) {
      return props.address;
    }
    if (props.addressInfo) {
      return props.addressInfo.address;
    }
    return '';
  }, []);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.V, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
      onClick: () => {
        setPopoverVisible(true);
      },
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
        text: (0,utils/* shortAddress */.Dc)(address),
        color: props.color || 'white'
      })
    }), popoverVisible && /*#__PURE__*/(0,jsx_runtime.jsx)(AddressDetailPopover, {
      address: address,
      onClose: () => {
        setPopoverVisible(false);
      }
    })]
  });
};

/***/ }),

/***/ 35566:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SignPsbt)
/* harmony export */ });
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84861);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(64219);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(8963);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11703);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(55517);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10971);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(29281);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17032);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(88438);
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(71288);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59577);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_AddressText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(29536);
/* harmony import */ var _ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11944);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(87525);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16039);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(51195);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11846);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(93567);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(72635);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_14__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__, _ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */














// 引入 Ant Design 组件




// 自定义样式

const paperStyle = {
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa'
};
const initTxInfo = {
  changedBalance: 0,
  rawtx: '',
  psbtHex: '',
  toSignInputs: [],
  txError: '',
  isScammer: false,
  decodedPsbt: {
    inputInfos: [],
    outputInfos: [],
    fee: 0,
    feeRate: 0,
    risks: [],
    features: {
      rbf: false
    }
  }
};
function SignTxDetails(_ref) {
  let {
    txInfo,
    type,
    rawTxInfo,
    sompi,
    isOk
  } = _ref;
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useAccountAddress */ .PJ)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .D)();
  const isCurrentToPayFee = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SIGN_TX) {
      return false;
    } else {
      return true;
    }
  }, [type]);
  const spendSompi = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    if (txInfo.decodedPsbt.outputInfos.length > 0) {
      const amountSompi = txInfo.decodedPsbt.outputInfos[0].value;
      return amountSompi;
    } else {
      return 0;
    }
  }, [txInfo.decodedPsbt]);
  const sendingSompi = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    const inValue = txInfo.decodedPsbt.inputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    return inValue;
  }, [txInfo.decodedPsbt]);
  const receivingSompi = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    const outValue = txInfo.decodedPsbt.outputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    return outValue;
  }, [txInfo.decodedPsbt]);
  const spendAmount = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .sompiToAmount */ ._m)(spendSompi), [spendSompi]);
  const balanceChangedAmount = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .sompiToAmount */ ._m)(receivingSompi - sendingSompi), [sendingSompi, receivingSompi]);
  const feeAmount = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .sompiToAmount */ ._m)(txInfo.decodedPsbt.fee), [txInfo.decodedPsbt]);
  const priorityFeeAmount = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    const priorityFee = Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .sompiToAmount */ ._m)(txInfo.decodedPsbt.feeRate * Number((0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .amountToSompi */ .UC)(feeAmount))));
    return priorityFee;
  }, [txInfo.decodedPsbt]);
  if (type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SIGN_TX) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          fontSize: '20px'
        },
        children: (0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('Sign Transaction')
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
        style: {
          ...cardStyle,
          maxWidth: '100%'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          style: {
            textAlign: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              fontSize: '24px',
              fontWeight: 'bold',
              color: receivingSompi > sendingSompi ? '#48e3c5' : '#333'
            },
            children: (receivingSompi > sendingSompi ? '+' : '') + balanceChangedAmount
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              marginLeft: '8px',
              color: '#666',
              fontSize: '14px'
            },
            children: "KAS"
          })]
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    style: {
      marginTop: '20px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Title, {
      level: 4,
      style: {
        textAlign: 'center',
        fontSize: '20px'
      },
      children: (0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('Sign Transaction')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      style: {
        ...cardStyle,
        maxWidth: '100%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        style: {
          textAlign: 'center'
        },
        children: [rawTxInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          style: {
            marginBottom: '10px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              color: '#666',
              fontSize: '14px'
            },
            children: (0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('Send to')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
            style: {
              marginTop: '5px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_components_AddressText__WEBPACK_IMPORTED_MODULE_8__/* .AddressText */ .u, {
              addressInfo: rawTxInfo.toAddressInfo
            })
          })]
        }), rawTxInfo && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
          style: {
            borderTop: '1px solid #d9d9d9',
            margin: '10px 0'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              color: '#666',
              fontSize: '14px'
            },
            children: (0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('Spend Amount')
          }), type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA && spendAmount !== '0' && isOk || type !== _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA && isOk ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
            style: {
              marginTop: '5px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
              style: {
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#333'
              },
              children: type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KRC20 ? sompi : spendAmount
            }), type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA && isCurrentToPayFee && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
              style: {
                display: 'block',
                color: '#666',
                fontSize: '12px',
                marginTop: '5px'
              },
              children: `${feeAmount} (${(0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('network fee')})`
            }), type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA && isCurrentToPayFee && priorityFeeAmount > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
              style: {
                display: 'block',
                color: '#666',
                fontSize: '12px',
                marginTop: '5px'
              },
              children: `${priorityFeeAmount} (${(0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('priority fee')})`
            }), type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KRC20 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
              style: {
                display: 'block',
                color: '#666',
                fontSize: '12px',
                marginTop: '5px'
              },
              children: `0.01 (${(0,i18next__WEBPACK_IMPORTED_MODULE_19__.t)('network fee')})`
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
            style: {
              marginTop: '5px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
              style: {
                color: '#ff4d4f',
                fontSize: '14px'
              },
              children: "Invalid Input"
            })
          })]
        })]
      })
    })]
  });
}
function Section(_ref2) {
  let {
    title,
    children
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    style: {
      marginTop: '10px'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
      strong: true,
      style: {
        fontSize: '14px'
      },
      children: title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
      style: cardStyle,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
        justify: "space-between",
        align: "middle",
        children: children
      })
    })]
  });
}
function SignPsbt(_ref3) {
  let {
    params: {
      data: {
        psbtHex,
        options,
        type,
        toAddress,
        sompi,
        feeRate,
        rawTxInfo,
        krc20Details
      },
      session
    },
    header,
    handleCancel,
    handleConfirm
  } = _ref3;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .useApproval */ .V9)();
  const [txInfo, setTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(initTxInfo);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(true);
  const [isWarningVisible, setIsWarningVisible] = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false);
  const [confirmLoading, setConfirmLoading] = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(false);
  const prepareSendKAS = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_14__/* .usePrepareSendKASCallback */ .NC)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .D)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useAccountAddress */ .PJ)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useCurrentAccount */ .YL)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useUserPrivateKey */ .N2)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useNetworkType */ .iP)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAppDispatch */ .j)();
  const pushKaspaTx = (0,_ui_state_transactions_hooks__WEBPACK_IMPORTED_MODULE_14__/* .usePushKaspaTxCallback */ .NK)();
  const [isOk, setIsOk] = (0,react__WEBPACK_IMPORTED_MODULE_20__.useState)(true);
  const init = async () => {
    let txError = '';
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA) {
      if (!psbtHex && toAddress && sompi) {
        try {
          const rawTxInfo = await prepareSendKAS({
            toAddressInfo: {
              address: toAddress,
              domain: ''
            },
            toAmount: sompi,
            feeRate,
            enableRBF: false
          });
          psbtHex = rawTxInfo.psbtHex;
        } catch (error) {
          console.log('error', error);
          txError = error.message;
          tools.toastError(txError);
        }
      }
    }
    if (!psbtHex) {
      setLoading(false);
      setTxInfo(Object.assign({}, initTxInfo, {
        txError
      }));
      return;
    }
    const {
      isScammer
    } = await wallet.checkWebsite((session === null || session === void 0 ? void 0 : session.origin) || '');
    const decodedPsbt = await wallet.decodePsbt(psbtHex);
    if (decodedPsbt.risks.length > 0) {
      setIsWarningVisible(true);
    }
    let toSignInputs = [];
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA) {
      toSignInputs = decodedPsbt.inputInfos.map((v, index) => ({
        index,
        publicKey: currentAccount.pubkey
      }));
    } else {
      try {
        toSignInputs = await wallet.formatOptionsToSignInputs(psbtHex, options);
      } catch (error) {
        console.log('error', error);
        txError = error.message;
        tools.toastError(txError);
      }
    }
    setTxInfo({
      decodedPsbt,
      changedBalance: 0,
      psbtHex,
      rawtx: '',
      toSignInputs,
      txError,
      isScammer
    });
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_20__.useEffect)(() => {
    console.log('data', {
      psbtHex,
      options,
      type,
      toAddress,
      sompi,
      feeRate,
      rawTxInfo,
      krc20Details
    }, type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KRC20 && !krc20Details.tick);
    let bool = true;
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KRC20) {
      const isOkKrcBalance = (sompi || 0) * 10 ** krc20Details.dec <= krc20Details.balance;
      if (krc20Details.tick && !isOkKrcBalance) {
        tools.toastError(`Insufficient balance. Balance(${krc20Details.balance / 10 ** krc20Details.dec} ${krc20Details.tick}) is lower than ${sompi} ${krc20Details.tick}`);
      }
      if (!sompi || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .isValidWalletAddress */ .M$)(toAddress || '') || !krc20Details.tick || !isOkKrcBalance) {
        bool = false;
        console.log('error');
      }
    }
    if (type === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA) {
      if (!sompi || !(0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .isValidWalletAddress */ .M$)(toAddress || '')) {
        bool = false;
        console.log('error');
      }
    }
    setIsOk(bool);
    setLoading(false);
    init();
  }, []);
  if (!handleCancel) {
    handleCancel = () => {
      rejectApproval();
    };
  }
  if (!handleConfirm) {
    handleConfirm = async () => {
      setConfirmLoading(true);
      if (krc20Details) {
        const networkName = networkType === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .NetworkType */ .z1.Mainnet ? 'mainnet' : networkType === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .NetworkType */ .z1.Testnet ? 'testnet-10' : 'devnet';
        try {
          var _result, _result2;
          console.log('krc20_trans', (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseUnits */ .XS)((sompi || 0) + '', krc20Details === null || krc20Details === void 0 ? void 0 : krc20Details.dec), feeRate || 0.01);
          let result;
          if (krc20Details.mod === 'issue') {
            result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans_issue */ .cc)(privateKey.hex, networkName, krc20Details.ca, feeRate || 0.01, toAddress, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseUnits */ .XS)((sompi || 0) + '', krc20Details === null || krc20Details === void 0 ? void 0 : krc20Details.dec));
          } else {
            result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_5__/* .krc20_trans */ .ok)(privateKey.hex, networkName, krc20Details.tick, feeRate || 0.01, toAddress, (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseUnits */ .XS)((sompi || 0) + '', krc20Details === null || krc20Details === void 0 ? void 0 : krc20Details.dec));
          }
          console.log('result.hash', result.hash);
          dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_15__/* .transactionsActions */ .$A.updateNativeTxs({
            from: address,
            info: {
              ...krc20Details,
              type: _ui_types__WEBPACK_IMPORTED_MODULE_16__/* .TXTypes */ .Y.TransferKrc20,
              amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseUnits */ .XS)(sompi || 0, krc20Details.dec),
              from: address,
              to: toAddress,
              hash: (_result = result) === null || _result === void 0 ? void 0 : _result.hash,
              time: dayjs__WEBPACK_IMPORTED_MODULE_18___default()().valueOf(),
              status: (_result2 = result) !== null && _result2 !== void 0 && _result2.status ? 'success' : 'Failed'
            }
          }));
          return resolveApproval({
            psbtHex: result.hash,
            isKrc20: true
          });
        } catch (error) {
          console.log('error', error);
        } finally {
          setConfirmLoading(false);
        }
      } else {
        try {
          pushKaspaTx(txInfo.psbtHex).then(_ref4 => {
            let {
              success,
              txid,
              error
            } = _ref4;
            dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_15__/* .transactionsActions */ .$A.updateNativeTxs({
              from: address,
              info: {
                tick: 'KAS',
                dec: 8,
                type: _ui_types__WEBPACK_IMPORTED_MODULE_16__/* .TXTypes */ .Y.TransferNative,
                amount: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .parseUnits */ .XS)(sompi || 0, 8),
                from: address,
                to: toAddress,
                hash: txid,
                time: dayjs__WEBPACK_IMPORTED_MODULE_18___default()().valueOf(),
                status: success ? 'success' : 'Failed'
              }
            }));
            resolveApproval({
              txid: txid
            });
            setConfirmLoading(false);
          });
        } catch (error) {
          console.log('error', error);
        }
      }
    };
  }
  const networkFee = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_17__/* .sompiToAmount */ ._m)(txInfo.decodedPsbt.fee), [txInfo.decodedPsbt]);
  const detailsComponent = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(SignTxDetails, {
      txInfo: txInfo,
      rawTxInfo: rawTxInfo,
      type: type,
      sompi: sompi,
      isOk: isOk
    });
  }, [txInfo]);
  const isValid = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    return true;
  }, [txInfo.decodedPsbt, txInfo.toSignInputs]);
  const canChanged = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    let val = true;
    txInfo.decodedPsbt.inputInfos.forEach(v => {
      if (v.address == address && (!v.sighashType || v.sighashType === 1)) {
        val = false;
      }
    });
    return val;
  }, [txInfo.decodedPsbt]);
  const hasHighRisk = (0,react__WEBPACK_IMPORTED_MODULE_20__.useMemo)(() => {
    if (txInfo && txInfo.decodedPsbt) {
      return txInfo.decodedPsbt.risks.find(v => v.level === 'high') ? true : false;
    } else {
      return false;
    }
  }, [txInfo]);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)("div", {
      style: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
        style: {
          fontSize: '48px',
          color: '#48e3c5'
        }
      })
    });
  }
  if (!header && session) {
    header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      session: session
    });
  }
  if (txInfo.isScammer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      style: paperStyle,
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: "Phishing Detection"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px',
            marginTop: '10px'
          },
          children: "Malicious behavior and suspicious activity have been detected."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Paragraph, {
          style: {
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          },
          children: "Your access to this page has been restricted by KasKeeper as it might be unsafe."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_row__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
        gutter: 8,
        style: {
          marginTop: '20px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
          span: 24,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_27__["default"], {
            danger: true,
            block: true,
            style: defaultButtonStyle,
            onClick: handleCancel,
            children: "Reject (blocked by KasKeeper)"
          })
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
      children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)("div", {
        style: {
          marginTop: '20px'
        },
        children: [detailsComponent, canChanged == false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Section, {
          title: "Network Fee:",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              fontSize: '14px'
            },
            children: networkFee
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              fontSize: '14px',
              color: '#666'
            },
            children: "KAS"
          })]
        }), canChanged == false && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(Section, {
          title: "Network Fee Rate:",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              fontSize: '14px'
            },
            children: txInfo.decodedPsbt.feeRate.toString()
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A.Text, {
            style: {
              fontSize: '14px',
              color: '#666'
            },
            children: "sat/vB"
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
        span: txInfo.decodedPsbt && !!txInfo.decodedPsbt.outputInfos.length && hasHighRisk == false || isOk ? 12 : 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_27__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), (type == _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SEND_KASPA && txInfo.decodedPsbt && !!txInfo.decodedPsbt.outputInfos.length && hasHighRisk == false || isOk) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_27__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          loading: confirmLoading,
          onClick: () => {
            // setLoading(true);
            handleConfirm();
          },
          disabled: isValid == false,
          children: type == _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .TxType */ .zd.SIGN_TX ? 'Sign' : 'Sign & Pay'
        })
      })]
    }), isWarningVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_21__.jsx)(_ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_9__/* .WarningPopover */ .k, {
      risks: txInfo.decodedPsbt.risks,
      onClose: () => {
        setIsWarningVisible(false);
      }
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 64247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SwitchNetwork)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11703);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(55517);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84861);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(64219);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8963);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10971);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(29281);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17032);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88438);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77093);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(87525);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43168);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(75163);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74848);










/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// 引入 Ant Design 组件



 // 引入向下箭头图标

// 自定义样式

const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  // 增加外边距
  padding: '20px',
  // 增加内边距
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 确保内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  // 增加按钮高度
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '12px 16px',
  // 增加内边距
  textAlign: 'center',
  backgroundColor: '#fff',
  width: '100%' // 确保卡片占满宽度
};
function SwitchNetwork(_ref) {
  let {
    params: {
      data,
      session
    }
  } = _ref;
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useNetworkType */ .iP)();
  const from = _shared_constant__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_TYPES */ .rg[networkType];
  const to = _shared_constant__WEBPACK_IMPORTED_MODULE_5__/* .NETWORK_TYPES */ .rg[data.networkType];
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_8__/* .useApproval */ .V9)();
  const handleCancel = () => {
    rejectApproval('User rejected the request.');
  };
  const handleConnect = async () => {
    resolveApproval();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '20px'
        },
        children: "Allow this site to switch the network?"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          style: cardStyle,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.Text, {
            strong: true,
            style: {
              fontSize: '16px'
            },
            children: from.label
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
          style: {
            margin: '15px 0'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
            style: {
              fontSize: '24px',
              color: '#666'
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          style: {
            ...cardStyle,
            borderColor: '#48e3c5',
            backgroundColor: '#e6f7ff'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A.Text, {
            strong: true,
            style: {
              fontSize: '16px',
              color: '#48e3c5'
            },
            children: to.label
          })
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_15__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConnect,
          children: "Switch Network"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 79647:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SignText)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11703);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(55517);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84861);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64219);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8963);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10971);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29281);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17032);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(88438);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(87525);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13108);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(74848);










/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


// 引入 Ant Design 组件
// 自定义样式

const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '4px',
  width: '100%',
  backgroundColor: '#fafafa' // 轻微背景色，增加层次感
};
const textAreaStyle = {
  userSelect: 'text',
  maxHeight: '100px',
  // 减少最大高度，优化空间
  overflowY: 'auto',
  whiteSpace: 'pre-wrap',
  wordBreak: 'break-word',
  fontSize: '14px',
  color: '#333'
};
function SignText(_ref) {
  let {
    params: {
      data,
      session,
      method
    }
  } = _ref;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .useApproval */ .V9)();
  const handleCancel = () => {
    rejectApproval();
  };
  const handleConfirm = () => {
    resolveApproval();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A, {
        session: session
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Title, {
        level: 4,
        style: {
          textAlign: 'center',
          marginTop: '20px',
          fontSize: '20px'
        },
        children: "Signature Request"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Paragraph, {
        style: {
          textAlign: 'center',
          color: '#666',
          fontSize: '14px',
          marginTop: '10px',
          marginBottom: '10px'
        },
        children: "Only sign this message if you fully understand the content and trust the requesting site."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Text, {
        style: {
          textAlign: 'center',
          display: 'block',
          fontSize: '14px',
          margin: '20px'
        },
        children: "You are signing:"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        style: cardStyle,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          style: textAreaStyle,
          children: method === 'verifyMessage' ? data.signature && data.text ? data.text : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            style: {
              color: '#ff4d4f'
            },
            children: "No Sign Text"
          }) : data.text ? data.text : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("span", {
            style: {
              color: '#ff4d4f'
            },
            children: "No Sign Text"
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        span: (method === 'verifyMessage' ? !!data.signature : true) && !!data.text ? 12 : 24,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Reject"
        })
      }), (method === 'verifyMessage' ? !!data.signature : true) && !!data.text && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_12__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConfirm,
          children: "Sign"
        })
      })]
    })]
  });
}

/***/ }),

/***/ 87525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2628);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39053);
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39818);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(51942);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20577);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(74848);






const WebsiteBar = _ref => {
  let {
    session
  } = _ref;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Z, {
    preset: "style2",
    selfItemsCenter: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_Row__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .f, {
      itemsCenter: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Image__WEBPACK_IMPORTED_MODULE_2__/* .Image */ ._, {
        src: session.icon,
        size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_0__/* .fontSizes */ .G.logo
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_4__/* .Text */ .EY, {
        text: session.origin
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (WebsiteBar);

/***/ }),

/***/ 97253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ MultiSignPsbt)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_AddressText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(29536);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17778);
/* harmony import */ var _ui_components_TabBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9344);
/* harmony import */ var _ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11944);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87525);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43658);
/* harmony import */ var _ui_theme_colors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5005);
/* harmony import */ var _ui_theme_font__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2628);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(93567);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(13907);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */















var TabState = /*#__PURE__*/function (TabState) {
  TabState[TabState["DETAILS"] = 0] = "DETAILS";
  TabState[TabState["DATA"] = 1] = "DATA";
  TabState[TabState["HEX"] = 2] = "HEX";
  return TabState;
}(TabState || {});
function SignTxDetails(_ref) {
  let {
    decodedPsbt
  } = _ref;
  console.log('decodedPsbt', decodedPsbt);
  alert(JSON.stringify(decodedPsbt));
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useAccountAddress */ .PJ)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__/* .useTranslation */ .B)();
  const spendSompi = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    const inValue = decodedPsbt.inputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    const outValue = decodedPsbt.outputInfos.filter(v => v.address === address).reduce((pre, cur) => cur.value + pre, 0);
    const spend = inValue - outValue;
    return spend;
  }, [decodedPsbt]);
  const spendAmount = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ ._m)(spendSompi), [spendSompi]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
    gap: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
      text: t('Sign Transaction'),
      preset: "title-bold",
      textCenter: true,
      mt: "lg"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
      justifyCenter: true,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zp, {
        style: {
          backgroundColor: '#272626',
          maxWidth: 320,
          width: 320
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          gap: "lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                text: t('Spend Amount'),
                textCenter: true,
                color: "textDim"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
                justifyCenter: true,
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                  text: spendAmount,
                  color: "white",
                  preset: "bold",
                  textCenter: true,
                  size: "xxl"
                })
              })]
            })
          })
        })
      })
    })]
  });
}
function Section(_ref2) {
  let {
    title,
    children
  } = _ref2;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
      text: title,
      preset: "bold"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zp, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        full: true,
        justifyBetween: true,
        itemsCenter: true,
        children: children
      })
    })]
  });
}
const initTxInfo = {
  psbtHexs: [],
  txError: '',
  decodedPsbts: [],
  toSignInputsArray: [],
  currentIndex: 0,
  isScammer: false
};
function MultiSignPsbt(_ref3) {
  let {
    params: {
      data: {
        psbtHexs,
        options
      },
      session
    },
    header,
    handleCancel,
    handleConfirm
  } = _ref3;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .useApproval */ .V9)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_13__/* .useTranslation */ .B)();
  const [txInfo, setTxInfo] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initTxInfo);
  const [tabState, setTabState] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(TabState.DATA);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .useWallet */ .vT)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const [isWarningVisible, setIsWarningVisible] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const init = async () => {
    let txError = '';
    const {
      isScammer
    } = await wallet.checkWebsite((session === null || session === void 0 ? void 0 : session.origin) || '');
    const decodedPsbts = [];
    for (let i = 0; i < psbtHexs.length; i++) {
      const psbtHex = psbtHexs[i];
      const decodedPsbt = await wallet.decodePsbt(psbtHex);
      decodedPsbts.push(decodedPsbt);
      if (decodedPsbt.risks.length > 0) {
        setIsWarningVisible(true);
      }
    }
    const toSignInputsArray = [];
    try {
      for (let i = 0; i < psbtHexs.length; i++) {
        const toSignInputs = await wallet.formatOptionsToSignInputs(psbtHexs[i], options[i]);
        toSignInputsArray.push(toSignInputs);
      }
    } catch (e) {
      txError = e.message;
      tools.toastError(txError);
    }
    setTxInfo({
      decodedPsbts,
      psbtHexs,
      toSignInputsArray,
      txError,
      currentIndex: 0,
      isScammer
    });
    setLoading(false);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, []);
  const updateTxInfo = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(params => {
    setTxInfo(Object.assign({}, txInfo, params));
  }, [txInfo, setTxInfo]);
  if (!handleCancel) {
    handleCancel = () => {
      if (txInfo.currentIndex > 0) {
        updateTxInfo({
          currentIndex: txInfo.currentIndex - 1
        });
        return;
      }
      rejectApproval();
    };
  }
  if (!handleConfirm) {
    handleConfirm = () => {
      if (txInfo.currentIndex < txInfo.psbtHexs.length - 1) {
        updateTxInfo({
          currentIndex: txInfo.currentIndex + 1
        });
        return;
      }
      resolveApproval({
        psbtHexs: txInfo.psbtHexs
      });
    };
  }
  const decodedPsbt = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => txInfo.decodedPsbts[txInfo.currentIndex], [txInfo]);
  const psbtHex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => txInfo.psbtHexs[txInfo.currentIndex], [txInfo]);
  const toSignInputs = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => txInfo.toSignInputsArray[txInfo.currentIndex], [txInfo]);
  const networkFee = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => decodedPsbt ? (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ ._m)(decodedPsbt.fee) : 0, [decodedPsbt]);
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentAccount */ .YL)();
  const detailsComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (decodedPsbt) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(SignTxDetails, {
        decodedPsbt: decodedPsbt
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_4__/* .Empty */ .S, {});
    }
  }, [decodedPsbt]);
  const isValidData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (psbtHex === '') {
      return false;
    }
    return true;
  }, [psbtHex]);
  const isValid = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    if (decodedPsbt && decodedPsbt.inputInfos.length == 0) {
      return false;
    }
    if (!toSignInputs || toSignInputs.length == 0) {
      return false;
    }
    return true;
  }, [decodedPsbt, toSignInputs]);
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
        itemsCenter: true,
        justifyCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          size: _ui_theme_font__WEBPACK_IMPORTED_MODULE_10__/* .fontSizes */ .G.xxxl,
          color: "gold",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {})
        })
      })
    });
  }
  if (!decodedPsbt) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_4__/* .Empty */ .S, {});
  }
  if (!header && session) {
    header = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
        session: session
      })
    });
  }
  if (txInfo.isScammer) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            text: "Phishing Detection",
            preset: "title-bold",
            textCenter: true,
            mt: "xxl"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            text: "Malicious behavior and suspicious activity have been detected.",
            mt: "md"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            text: "Your access to this page has been restricted by KasKeeper as it might be unsafe.",
            mt: "md"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .wi, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
          full: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
            text: "Reject (blocked by KasKeeper)",
            preset: "danger",
            onClick: handleCancel,
            full: true
          })
        })
      })]
    });
  }
  const count = txInfo.psbtHexs.length;
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push({
      label: `${i + 1}`,
      key: i
    });
  }
  const tabItems = arr;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [header, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        children: [detailsComponent, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
          mt: "lg",
          mb: "lg",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_TabBar__WEBPACK_IMPORTED_MODULE_5__/* .TabBar */ .V, {
            defaultActiveKey: TabState.DATA,
            activeKey: TabState.DATA,
            items: [
            // { label: 'DETAILS', key: TabState.DETAILS },
            {
              label: 'DATA',
              key: TabState.DATA
            }, {
              label: 'HEX',
              key: TabState.HEX
            }],
            onTabClick: key => {
              setTabState(key);
            }
          })
        }), tabState === TabState.DATA && isValidData && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          gap: "xl",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: "INPUTS:",
              preset: "bold"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zp, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
                full: true,
                justifyCenter: true,
                children: decodedPsbt.inputInfos.map((v, index) => {
                  const isToSign = toSignInputs && toSignInputs.find(v => v.index === index) ? true : false;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                    style: index === 0 ? {} : {
                      borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .T.border,
                      borderTopWidth: 1,
                      paddingTop: 10
                    },
                    justifyBetween: true,
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_AddressText__WEBPACK_IMPORTED_MODULE_3__/* .AddressText */ .u, {
                          address: v.address,
                          color: isToSign ? 'white' : 'textDim'
                        }), isToSign && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                          style: {
                            borderWidth: 1,
                            borderColor: 'gold',
                            borderRadius: 5,
                            padding: 2
                          },
                          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                            text: "to sign",
                            color: "gold",
                            size: "xs"
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        text: `${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ ._m)(v.value)}`,
                        color: isToSign ? 'white' : 'textDim'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                        text: "KAS",
                        color: "textDim"
                      })]
                    })]
                  }, 'output_' + index);
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: "OUTPUTS:",
              preset: "bold"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zp, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
                full: true,
                justifyCenter: true,
                gap: "lg",
                children: decodedPsbt.outputInfos.map((v, index) => {
                  const isMyAddress = v.address == currentAccount.address;
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
                    style: index === 0 ? {} : {
                      borderColor: _ui_theme_colors__WEBPACK_IMPORTED_MODULE_9__/* .colors */ .T.border,
                      borderTopWidth: 1,
                      paddingTop: 10
                    },
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                        justifyBetween: true,
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_AddressText__WEBPACK_IMPORTED_MODULE_3__/* .AddressText */ .u, {
                          address: v.address,
                          color: isMyAddress ? 'white' : 'textDim'
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                            text: `${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .sompiToAmount */ ._m)(v.value)}`,
                            color: isMyAddress ? 'white' : 'textDim'
                          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                            text: "KAS",
                            color: "textDim"
                          })]
                        })]
                      })
                    })
                  }, 'output_' + index);
                })
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Section, {
            title: "NETWORK FEE:",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: networkFee
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: "KAS",
              color: "textDim"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(Section, {
            title: "NETWORK FEE RATE:",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: decodedPsbt.feeRate.toString()
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: "sat/vB",
              color: "textDim"
            })]
          })]
        }), tabState === TabState.HEX && isValidData && psbtHex && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            text: `PSBT HEX DATA: ${psbtHex.length / 2} BYTES`,
            preset: "bold"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .TextArea */ .fs, {
            text: psbtHex
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
            justifyCenter: true,
            onClick: e => {
              (0,_ui_utils__WEBPACK_IMPORTED_MODULE_11__/* .copyToClipboard */ .lW)(psbtHex).then(() => {
                tools.toastSuccess(t('Copied'));
              });
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
              icon: "copy",
              color: "textDim"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: "Copy psbt transaction data",
              color: "textDim"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .wi, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        mt: "lg",
        mb: "lg",
        justifyCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_TabBar__WEBPACK_IMPORTED_MODULE_5__/* .TabBar */ .V, {
          defaultActiveKey: txInfo.currentIndex,
          activeKey: txInfo.currentIndex,
          items: tabItems,
          preset: "number-page",
          onTabClick: key => {
            updateTxInfo({
              currentIndex: key
            });
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        full: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
          preset: "default",
          text: txInfo.currentIndex === 0 ? t('Reject All') : t('Back'),
          onClick: handleCancel,
          full: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
          preset: "primary",
          text: txInfo.currentIndex === txInfo.psbtHexs.length - 1 ? `Sign All (${txInfo.psbtHexs.length} transactions)` : 'Next',
          onClick: handleConfirm,
          disabled: isValid == false,
          full: true
        })]
      }), isWarningVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_ui_components_WarningPopover__WEBPACK_IMPORTED_MODULE_6__/* .WarningPopover */ .k, {
        risks: decodedPsbt.risks,
        onClose: () => {
          setIsWarningVisible(false);
        }
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 97579:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Connect: () => (/* reexport safe */ _Connect__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   MultiSignPsbt: () => (/* reexport safe */ _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   SignPsbt: () => (/* reexport safe */ _SignPsbt__WEBPACK_IMPORTED_MODULE_2__.A),
/* harmony export */   SignPsbtL2: () => (/* reexport safe */ _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__.A),
/* harmony export */   SignText: () => (/* reexport safe */ _SignText__WEBPACK_IMPORTED_MODULE_4__.A),
/* harmony export */   SwitchLayer: () => (/* reexport safe */ _SwitchLayer__WEBPACK_IMPORTED_MODULE_6__.A),
/* harmony export */   SwitchNetwork: () => (/* reexport safe */ _SwitchNetwork__WEBPACK_IMPORTED_MODULE_5__.A)
/* harmony export */ });
/* harmony import */ var _Connect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27183);
/* harmony import */ var _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97253);
/* harmony import */ var _SignPsbt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35566);
/* harmony import */ var _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(22220);
/* harmony import */ var _SignText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79647);
/* harmony import */ var _SwitchNetwork__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(64247);
/* harmony import */ var _SwitchLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(98174);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Connect__WEBPACK_IMPORTED_MODULE_0__, _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__, _SignPsbt__WEBPACK_IMPORTED_MODULE_2__, _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__]);
([_Connect__WEBPACK_IMPORTED_MODULE_0__, _MultiSignPsbt__WEBPACK_IMPORTED_MODULE_1__, _SignPsbt__WEBPACK_IMPORTED_MODULE_2__, _SignPsbtL2__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 98174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ SwitchLayer)
/* harmony export */ });
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11703);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(55517);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84861);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(64219);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8963);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(55809);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(96383);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10971);
/* harmony import */ var antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_card_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(29281);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17032);
/* harmony import */ var antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_typography_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var antd_lib_typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(88438);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(59577);
/* harmony import */ var _ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(87525);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(43168);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(75163);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96540);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(74848);












/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


// 引入 Ant Design 组件



 // 引入向下箭头图标


// 自定义样式

const paperStyle = {
  maxWidth: 400,
  margin: 'auto',
  // 增加外边距
  padding: '20px',
  // 增加内边距
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#fff',
  height: '100%',
  maxHeight: '700px',
  // 增加最小高度，确保页面不过于紧凑
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  // 确保内容分布均匀
  position: 'relative',
  transform: 'translateY(-50%)',
  top: '50%'
};
const buttonStyle = {
  borderRadius: '8px',
  height: '40px',
  // 增加按钮高度
  border: '1px solid #d9d9d9',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
};
const primaryButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#48e3c5',
  borderColor: '#48e3c5'
};
const defaultButtonStyle = {
  ...buttonStyle,
  borderColor: '#d9d9d9',
  color: '#333'
};
const cardStyle = {
  border: '1px solid #d9d9d9',
  borderRadius: '8px',
  padding: '12px 16px',
  // 增加内边距
  textAlign: 'center',
  backgroundColor: '#fff',
  width: '100%' // 确保卡片占满宽度
};
function SwitchLayer(_ref) {
  let {
    params: {
      data,
      session
    }
  } = _ref;
  console.log('data', data);
  console.log('session', session);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useLayerType */ .pI)();
  const changeLayerType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useChangeLayerTypeCallback */ .AU)();
  const from = currentLayer;
  const to = data.layer;
  const [getApproval, resolveApproval, rejectApproval] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .useApproval */ .V9)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const handleCancel = () => {
    rejectApproval('User rejected the request.');
  };
  const handleConnect = async () => {
    setLoading(true);
    await changeLayerType(from === _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .LayerType */ .mb.L1 ? _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .LayerType */ .mb.L2 : _shared_types__WEBPACK_IMPORTED_MODULE_6__/* .LayerType */ .mb.L1);
    setTimeout(() => {
      setLoading(false);
      resolveApproval();
    }, 1000);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
    style: paperStyle,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      spinning: loading,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ui_components_WebsiteBar__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .A, {
          session: session
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Title, {
          level: 4,
          style: {
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '20px'
          },
          children: "Allow this site to switch the layer?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
          style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '20px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
            style: cardStyle,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Text, {
              strong: true,
              style: {
                fontSize: '16px'
              },
              children: ["layer ", from]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)("div", {
            style: {
              margin: '15px 0'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .A, {
              style: {
                fontSize: '24px',
                color: '#666'
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_card__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
            style: {
              ...cardStyle,
              borderColor: '#48e3c5',
              backgroundColor: '#e6f7ff'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd_lib_typography__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A.Text, {
              strong: true,
              style: {
                fontSize: '16px',
                color: '#48e3c5'
              },
              children: ["layer ", to]
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(antd_lib_row__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      gutter: 8,
      style: {
        marginTop: '20px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          block: true,
          style: defaultButtonStyle,
          onClick: handleCancel,
          children: "Cancel"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_col__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
        span: 12,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_18__["default"], {
          block: true,
          style: primaryButtonStyle,
          type: "primary",
          onClick: handleConnect,
          loading: loading,
          children: "Switch Layer"
        })
      })]
    })]
  });
}

/***/ })

}]);