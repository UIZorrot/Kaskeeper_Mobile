"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2149],{

/***/ 2149:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyItem: () => (/* binding */ MyItem),
/* harmony export */   "default": () => (/* binding */ SwitchAccountScreen)
/* harmony export */ });
/* harmony import */ var _shared_eventBus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28652);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43182);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36904);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(78602);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(40261);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(57046);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(25714);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(39822);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(42877);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(93567);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43168);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(60346);
/* harmony import */ var _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(82084);
/* harmony import */ var _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34375);
/* harmony import */ var _ui_images_common_ellipsisOutlined_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(90747);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_9__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */


















// Item组件

const MyItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(function MyItem(_ref, ref) {
  let {
    account,
    autoNav
  } = _ref;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .Z)();
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useCurrentAccount */ .YL)();
  const selected = currentAccount.pubkey === (account === null || account === void 0 ? void 0 : account.pubkey);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .useWallet */ .vT)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .j)();
  const keyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useCurrentKeyring */ .KZ)();
  const accountBalance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAccountBalance */ .pc)(account === null || account === void 0 ? void 0 : account.address);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useLayerType */ .pI)();
  const [accountBalanceL2, setAccountBalanceL2] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(0);
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkType */ .iP)();
  if (!account) return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {});
  const [optionsVisible, setOptionsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const path = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .generateHdPath */ .nR)(keyring.hdPath, account.deriveType.toString(), account.index.toString().slice(2));
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const fetchBalanceL2 = async () => {
      try {
        const {
          balance
        } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAccountEthBalance */ .kw)(account.addressL2, networkType);
        setAccountBalanceL2(Number(balance));
        // console.log(`地址 ${account.addressL2} 的余额为: ${balance} ETH`);
      } catch (error) {
        setAccountBalanceL2(0);
        console.error(error);
      }
    };
    if (currentLayer === 'L2' && account.addressL2) {
      fetchBalanceL2();
    }
  }, [account.addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const handleClickOutside = event => {
      const customgSettingPopover = document.querySelector('.customg-setting-popover');
      if (customgSettingPopover && !customgSettingPopover.contains(event.target)) {
        setOptionsVisible(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Card */ .Zp, {
    style: {
      backgroundColor: selected ? '#E6FCF6' : 'rgba(10, 36, 99, 0.03)',
      borderRadius: 12,
      marginTop: 12,
      transition: 'all 0.3s',
      border: selected ? '1px solid #04DFA6' : '1px solid transparent',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
      minHeight: 'auto'
    },
    classname: "hover",
    justifyBetween: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
      full: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        style: {
          width: 24
        },
        selfItemsCenter: true,
        children: selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          color: "green",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
            src: _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_13__,
            width: 18,
            height: 18,
            alt: ""
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
            src: _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_12__,
            width: 18,
            height: 18,
            alt: ""
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        full: true,
        onClick: async () => {
          if (currentAccount.pubkey !== account.pubkey) {
            await wallet.changeKeyring(keyring, account.index);
            const _currentAccount = await wallet.getCurrentAccount();
            dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_4__/* .accountActions */ .$G.setCurrent(_currentAccount));
          }
          if (autoNav) navigate('MainScreen');
        },
        style: {
          padding: '8px 0'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
          justifyBetween: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            text: account.alianName,
            size: "xs",
            style: {
              fontSize: '14px',
              color: '#0A2463'
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: `${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .shortAddress */ .Dc)(account.address)} (${path})`,
          preset: "sub",
          size: "xs",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          }
        }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: `L2:${(0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .shortAddress */ .Dc)(account.addressL2)} (${path})`,
          preset: "sub",
          size: "xs",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        relative: true,
        style: {
          marginLeft: 8
        },
        selfItemsCenter: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          onClick: e => {
            e.stopPropagation();
            setOptionsVisible(true);
          },
          style: {
            padding: '0 6px',
            borderRadius: 6,
            cursor: 'pointer',
            justifyContent: 'end'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            style: {
              fontSize: 16,
              color: '#666'
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: (0,bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(accountBalance.amount).toFixed(4),
          size: "xs",
          style: {
            color: '#0BE4AB',
            textAlign: 'right'
          }
        }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: (0,bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A)(accountBalanceL2).toFixed(4),
          size: "xs",
          style: {
            color: '#0BE4AB',
            textAlign: 'right'
          }
        }), optionsVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
            style: {
              backgroundColor: '#FFFFFF',
              width: 180,
              position: 'absolute',
              right: 0,
              top: 20,
              borderRadius: 8,
              padding: '12px 6px',
              zIndex: 11,
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
              border: '1px solid rgba(0, 0, 0, 0.1)'
            },
            classname: "customg-setting-popover",
            children: [{
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {}),
              text: t('Edit Name'),
              onClick: () => navigate('EditAccountNameScreen', {
                account
              })
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {}),
              text: t('Copy address'),
              onClick: () => {
                (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .copyToClipboard */ .lW)(currentLayer === 'L2' ? account.addressL2 : account.address);
                tools.toastSuccess(t('Copied'));
                setOptionsVisible(false);
              }
            }, {
              icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {}),
              text: t('Export Private Key'),
              onClick: () => navigate('ExportPrivateKeyScreen', {
                account
              })
            }].map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
              onClick: e => {
                e.stopPropagation();
                item.onClick();
              },
              style: {
                padding: '4px 6px',
                cursor: 'pointer',
                borderRadius: 4,
                marginBottom: 2,
                alignItems: 'center',
                ':hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.05)'
                }
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
                color: item.color || 'grey',
                style: {
                  height: 12
                },
                children: item.icon
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                text: item.text,
                size: "sm",
                color: "text"
              })]
            }, index))
          })
        })]
      })]
    })
  });
});

// 主组件
function SwitchAccountScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_16__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_9__/* .useNavigate */ .Z)();
  const keyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useCurrentKeyring */ .KZ)();
  const reloadAccounts = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useReloadAccounts */ .Fg)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const fetchBalances = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useFetchBalancesCallback */ .qT)();
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const data = keyring.accounts.map(v => ({
      key: v.address,
      account: v
    }));
    setItems(data);
  }, []);

  // const items = useMemo(() => {
  //   console.log('log', keyring.accounts[0])
  //   return keyring.accounts.map((v) => ({
  //     key: v.address,
  //     account: v
  //   }));
  // }, [keyring.accounts]);

  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const [optionsVisible, setOptionsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
  const discoverAddress = async () => {
    setLoading(true);
    try {
      const result = await wallet.discoverAddressesWithBalance(keyring);
      if (!result) {
        tools.toastWarning('no more address with balance');
      } else {
        reloadAccounts();
        tools.toastSuccess(`found ${result.address_arr.length} addresses`);
      }
    } catch (error) {
      const {
        message = ''
      } = error || {};
      tools.toastError(error && Object.keys(error).length ? message || JSON.stringify(error) : 'Error');
    } finally {
      setLoading(false);
    }
  };
  const compound = async () => {
    setLoading(true);
    const result = await wallet.compoundUtxos(keyring.accounts);
    setLoading(false);
    if (!result) {
      tools.toastError('failed, please try again');
    } else {
      await reloadAccounts();
      tools.toastSuccess('success');
    }
  };
  const loadBalance = () => {
    setLoading(true);
    fetchBalances().finally(() => setLoading(false));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    loadBalance();
    _shared_eventBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.addEventListener('utxosChangedNotification', loadBalance);
    discoverAddress;
    return () => {
      _shared_eventBus__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.removeEventListener('utxosChangedNotification', loadBalance);
    };
  }, [fetchBalances]);
  const settingOriginItems = [{
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {}),
    text: t('New Account'),
    onClick: () => navigate('CreateAccountScreen')
  }, {
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {}),
    text: t('Recovery'),
    onClick: discoverAddress
  }
  // { icon: <MergeCellsOutlined />, text: 'Compound', onClick: compound }
  ];
  const [settingItems, setSettingItems] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(settingOriginItems);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (keyring.type === 'Simple Key Pair') {
      setSettingItems([]);
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    style: {
      backgroundColor: '#FFFFFF',
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => window.history.go(-1),
      title: t('Switch Account'),
      style: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFFFFF',
        height: 56
      },
      RightComponent: settingItems.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          relative: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
            onClick: () => setOptionsVisible(true),
            style: {
              padding: 6,
              borderRadius: 6,
              cursor: 'pointer'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
              src: _ui_images_common_ellipsisOutlined_svg__WEBPACK_IMPORTED_MODULE_14__,
              width: 18,
              height: 18,
              alt: ""
            })
          }), optionsVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
              style: {
                position: 'fixed',
                zIndex: 10,
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                background: 'transparent'
              },
              onClick: () => setOptionsVisible(false)
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
              style: {
                backgroundColor: '#FFFFFF',
                width: 180,
                position: 'absolute',
                right: 0,
                top: 30,
                borderRadius: 8,
                padding: '12px 6px',
                zIndex: 11,
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: '1px solid rgba(0, 0, 0, 0.1)'
              },
              children: settingItems.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
                onClick: () => {
                  setOptionsVisible(false);
                  item.onClick();
                },
                style: {
                  padding: '4px 6px',
                  cursor: 'pointer',
                  borderRadius: 4,
                  marginBottom: 2,
                  alignItems: 'center',
                  ':hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                  }
                },
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
                  color: "grey",
                  children: item.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
                  text: item.text,
                  size: "sm",
                  color: "text"
                })]
              }, index))
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      style: {
        padding: '16px',
        overflowY: 'auto',
        flex: 1,
        gap: 'inherit'
      },
      children: [items.map(item => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(MyItem, {
        account: item.account,
        autoNav: true
      }, item.key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {}), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        justifyCenter: true,
        mt: "lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          color: "grey",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("p", {})]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 25714:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_KeyOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/KeyOutlined.js
// This icon file is generated automatically.
var KeyOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M608 112c-167.9 0-304 136.1-304 304 0 70.3 23.9 135 63.9 186.5l-41.1 41.1-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-44.9 44.9-62.3-62.3a8.15 8.15 0 00-11.4 0l-39.8 39.8a8.15 8.15 0 000 11.4l62.3 62.3-65.3 65.3a8.03 8.03 0 000 11.3l42.3 42.3c3.1 3.1 8.2 3.1 11.3 0l253.6-253.6A304.06 304.06 0 00608 720c167.9 0 304-136.1 304-304S775.9 112 608 112zm161.2 465.2C726.2 620.3 668.9 644 608 644c-60.9 0-118.2-23.7-161.2-66.8-43.1-43-66.8-100.3-66.8-161.2 0-60.9 23.7-118.2 66.8-161.2 43-43.1 100.3-66.8 161.2-66.8 60.9 0 118.2 23.7 161.2 66.8 43.1 43 66.8 100.3 66.8 161.2 0 60.9-23.7 118.2-66.8 161.2z" } }] }, "name": "key", "theme": "outlined" };
/* harmony default export */ const asn_KeyOutlined = (KeyOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/KeyOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var KeyOutlined_KeyOutlined = function KeyOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_KeyOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(KeyOutlined_KeyOutlined);
if (false) {}
/* harmony default export */ const icons_KeyOutlined = (RefIcon);

/***/ }),

/***/ 34375:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/checkCircleFilledSelected.eab4ff10.svg";

/***/ }),

/***/ 39822:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_PlusCircleOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/PlusCircleOutlined.js
// This icon file is generated automatically.
var PlusCircleOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M696 480H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8z" } }, { "tag": "path", "attrs": { "d": "M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" } }] }, "name": "plus-circle", "theme": "outlined" };
/* harmony default export */ const asn_PlusCircleOutlined = (PlusCircleOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/PlusCircleOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var PlusCircleOutlined_PlusCircleOutlined = function PlusCircleOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_PlusCircleOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(PlusCircleOutlined_PlusCircleOutlined);
if (false) {}
/* harmony default export */ const icons_PlusCircleOutlined = (RefIcon);

/***/ }),

/***/ 40261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_EditOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/EditOutlined.js
// This icon file is generated automatically.
var EditOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" } }] }, "name": "edit", "theme": "outlined" };
/* harmony default export */ const asn_EditOutlined = (EditOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/EditOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var EditOutlined_EditOutlined = function EditOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_EditOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(EditOutlined_EditOutlined);
if (false) {}
/* harmony default export */ const icons_EditOutlined = (RefIcon);

/***/ }),

/***/ 42877:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_SearchOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/SearchOutlined.js
// This icon file is generated automatically.
var SearchOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z" } }] }, "name": "search", "theme": "outlined" };
/* harmony default export */ const asn_SearchOutlined = (SearchOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/SearchOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var SearchOutlined_SearchOutlined = function SearchOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_SearchOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(SearchOutlined_SearchOutlined);
if (false) {}
/* harmony default export */ const icons_SearchOutlined = (RefIcon);

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

/***/ 82084:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/checkCircleFilled.1d037b42.svg";

/***/ }),

/***/ 90747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ellipsisOutlined.fa084e77.svg";

/***/ })

}]);