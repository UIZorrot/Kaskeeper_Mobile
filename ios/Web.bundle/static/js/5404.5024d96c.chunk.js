"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5404],{

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

/***/ 85404:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AddressInput: () => (/* binding */ AddressInput),
/* harmony export */   SelectAddressDrawer: () => (/* binding */ SelectAddressDrawer),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1088);
/* harmony import */ var antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_drawer_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_drawer__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(83080);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40712);
/* harmony import */ var antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(87812);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(15516);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(53236);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23848);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(48818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37656);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(80864);
/* harmony import */ var _ui_images_setting_myContacts_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(82044);
/* harmony import */ var _ui_images_common_scan_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(18196);
/* harmony import */ var _ui_images_common_paste_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47264);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(96651);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(17534);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(64540);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(60440);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40256);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23932);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(57360);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(46956);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(75776);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(63116);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(77980);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(33220);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__, _MainRoute__WEBPACK_IMPORTED_MODULE_18__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__, _MainRoute__WEBPACK_IMPORTED_MODULE_18__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);































const EnterRecipientAddress = () => {
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_20__/* .useLocation */ .IT)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__/* .useTranslation */ .G)();
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)((state === null || state === void 0 ? void 0 : state.recipientAddress) || '');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)('');
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useLayerType */ .wl)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkType */ .qS)();
  const [isInit, setIsInit] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_18__/* .useNavigate */ .i)();
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    setIsInit(true);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    if (!isInit) return;
    const kaspaAddressPattern = /^(kaspa|kaspatest|kaspadev):[a-z0-9]{32,}$/i;
    const isTestnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_22__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isMainnetAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_22__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    const isDevAddress = currentLayer === 'L2' && address.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_22__/* .isAddress */ .C2(address) || currentLayer === 'L1' && kaspaAddressPattern.test(address);
    // 检查地址格式是否完全无效
    if (!isTestnetAddress && !isMainnetAddress && !isDevAddress) {
      return setError(t('Wrong address format'));
    }
    // 检查网络匹配
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_14__/* .NetworkType */ .U5.Testnet && !isTestnetAddress) {
      return setError(t('Wrong address format') + ' - ' + t('Testnet requires kaspatest: prefix'));
    }
    if (networkType === _shared_types__WEBPACK_IMPORTED_MODULE_14__/* .NetworkType */ .U5.Mainnet && !isMainnetAddress) {
      return setError(t('Wrong address format') + ' - ' + t('Mainnet requires kaspa: prefix'));
    }

    // 验证地址有效性
    if (!(0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .isValidAddress */ .Up)(address)) {
      return setError(t('Invalid address'));
    }
  }, [address, currentLayer, networkType, t]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .ek, {
      onBack: () => window.history.back(),
      title: 'Enter Recipient Address'
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .kP, {
      classname: "!px-4 !gap-0",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c, {
        className: "space-y-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(AddressInput, {
          value: address,
          onChange: address => setAddress(address),
          error: !!error
        })
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
        classname: "!text-xs",
        text: error,
        color: "error"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c, {
        className: "space-y-4 mt-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .q, {
          disabled: !!error || !address,
          style: !address ? {
            opacity: 0.5,
            cursor: 'not-allowed',
            backgroundColor: '#a0aec0'
          } : {},
          className: "!rounded-lg w-full !h-[42px]",
          onClick: () => {
            navigate('TxCreateScreen', {
              address: address
            });
          },
          children: "Confirm"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EnterRecipientAddress);
const AddressInput = _ref => {
  let {
    value,
    error,
    placeholder,
    onChange,
    onBlur,
    name
  } = _ref;
  const [focus, setFocus] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__/* .useTools */ .w)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__/* .useTranslation */ .G)();
  const [drawerVisible, setDrawerVisible] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_18__/* .useNavigate */ .i)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
      className: "rounded-lg border border-solid overflow-hidden",
      style: {
        borderWidth: focus ? '2px' : '1px',
        borderColor: error ? '#f33b79' : focus ? '#59c297' : '#d0cccc',
        padding: focus ? '7px 13px' : '8px 14px'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(antd_lib_input__WEBPACK_IMPORTED_MODULE_24__["default"].TextArea, {
        autoSize: {
          minRows: 3,
          maxRows: 6
        },
        placeholder: placeholder || t('Please enter recipient address'),
        spellCheck: false,
        name: name,
        className: "!rounded-none !border-none !p-0 focus:!border-none focus:!shadow-none !text-sm placeholder:!text-[#0a24636b] font-[400] font-['Inter-Regular']",
        value: value,
        onChange: e => {
          console.log('onChange', e);
          onChange && onChange(e);
        },
        rows: 3,
        onBlur: e => {
          setFocus(false);
          onBlur && onBlur(e);
        },
        onFocus: () => setFocus(true)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        className: "flex items-center justify-end right-2 mt-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(IconView, {
          iconUrl: _ui_images_common_paste_svg__WEBPACK_IMPORTED_MODULE_8__,
          size: 20,
          className: "mr-[14px] cursor-pointer mt-[1px]",
          onClick: () => {
            (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .readClipboard */ .ec)().then(text => {
              onChange && onChange({
                target: {
                  value: text
                },
                currentTarget: {
                  value: text
                }
              });
              tools.toastSuccess(t('Pasted Success'));
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(IconView, {
          iconUrl: _ui_images_common_scan_svg__WEBPACK_IMPORTED_MODULE_7__,
          size: 23,
          className: "mr-3 cursor-pointer",
          onClick: () => {
            var _window, _window$NativeCallbac;
            const scanParams = {
              action: 'openScan',
              payload: null,
              success: data => {
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
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(IconView, {
          iconUrl: _ui_images_setting_myContacts_svg__WEBPACK_IMPORTED_MODULE_6__,
          size: 24,
          onClick: () => {
            setDrawerVisible(true);
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(SelectAddressDrawer, {
      drawerVisible: drawerVisible,
      onClose: () => setDrawerVisible(false),
      handleAddrInput: address => {
        onChange && onChange({
          target: {
            value: address
          },
          currentTarget: {
            value: address
          }
        });
        console.log('onChange', {
          target: {
            value: address
          },
          currentTarget: {
            value: address
          }
        });
        setDrawerVisible(false);
      }
    })]
  });
};
const SelectAddressDrawer = _ref2 => {
  let {
    drawerVisible,
    onClose,
    handleAddrInput
  } = _ref2;
  const tabItems = [{
    key: 'recent',
    label: 'Recent',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(RecentTab, {
      handleAddrInput: handleAddrInput
    })
  }, {
    key: 'contacts',
    label: 'Contacts',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(ContactsTab, {
      handleAddrInput: handleAddrInput
    })
    // disabled: true,
  }, {
    key: 'my_account',
    label: 'My account',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(MyAccountTab, {
      handleAddrInput: handleAddrInput
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(antd_lib_drawer__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .c, {
    placement: 'bottom',
    closable: false,
    onClose: onClose,
    open: drawerVisible,
    bodyStyle: {
      padding: '0px 10px 16px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_26__["default"], {
      size: 'small',
      defaultActiveKey: "0",
      items: tabItems,
      onTabClick: key => {
        // console.log(key);
      },
      tabBarStyle: {
        zIndex: 1,
        position: 'sticky',
        top: '0px',
        background: '#fff',
        height: '50px',
        padding: '0',
        fontSize: '14px'
      }
    })
  }, 'bottom');
};
function RecentTab(_ref3) {
  let {
    handleAddrInput
  } = _ref3;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useCurrentAccount */ ._A)();
  const currentNetworkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useNetworkType */ .qS)();
  const address = currentAccount.address;
  const [transactionInfos, setTransactionInfos] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)(false);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useLayerType */ .wl)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useAccountAddressL2 */ .gt)();
  const {
    activeToken
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_15__/* .useAccountContext */ .wB)();
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    const fetchTransactions = async () => {
      setLoading(true);
      try {
        let list = [];
        if (currentLayer === 'L1') {
          if (activeToken) {
            const networkName = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_14__/* .NetworkType */ .U5.Mainnet ? 'mainnet' : currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_14__/* .NetworkType */ .U5.Testnet ? 'testnet-10' : '';
            const data = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__/* .fetch_krc20_oplist */ .mq)(networkName, address, activeToken.tick);
            list = data.map(item => {
              const isSelfAddress = (item === null || item === void 0 ? void 0 : item.from) === address;
              return {
                block_time: Number(item.mtsAdd),
                mode: isSelfAddress ? 'Sent' : 'Receive',
                relatedAddresses: [isSelfAddress ? item === null || item === void 0 ? void 0 : item.to : item === null || item === void 0 ? void 0 : item.from],
                transaction_id: item.hashRev
              };
            });
          } else {
            const baseUrl = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_14__/* .NetworkType */ .U5.Mainnet ? 'https://api.kaspa.org' : 'https://api-tn10.kaspa.org';
            const response = await fetch("".concat(baseUrl, "/addresses/").concat(address, "/full-transactions?limit=10&resolve_previous_outpoints=light"));
            const data = await response.json();
            const datas = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .handleTransactionsAddresses */ .Mv)(data, address);
            if (datas && datas.length) {
              list = datas.filter(item => {
                return item === null || item === void 0 ? void 0 : item.relatedAddresses.length;
              });
            }
          }
        }
        if (currentLayer === 'L2') {
          const baseUrl = currentNetworkType === _shared_types__WEBPACK_IMPORTED_MODULE_14__/* .NetworkType */ .U5.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_17__/* .OPENAPI_URL_MAINNET_L2 */ .Qy : _shared_constant__WEBPACK_IMPORTED_MODULE_17__/* .OPENAPI_URL_TESTNET_L2 */ .E$;
          if (activeToken) {
            const res = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__/* .fetch_erc20 */ .UF)(currentNetworkType, addressL2, activeToken.contractAddress);
            res.data.items.forEach(item => {
              var _item$from, _item$to, _item$from2;
              const isSelfAddress = (item === null || item === void 0 ? void 0 : (_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from.hash) === addressL2;
              list.push({
                block_time: new Date(item.timestamp).getTime(),
                mode: isSelfAddress ? 'Sent' : 'Receive',
                relatedAddresses: [isSelfAddress ? item === null || item === void 0 ? void 0 : (_item$to = item.to) === null || _item$to === void 0 ? void 0 : _item$to.hash : item === null || item === void 0 ? void 0 : (_item$from2 = item.from) === null || _item$from2 === void 0 ? void 0 : _item$from2.hash],
                transaction_id: item.transaction_hash
              });
            });
          } else {
            const response = await fetch("".concat(baseUrl, "/api/v2/addresses/").concat(addressL2, "/transactions"));
            const data = await response.json();
            if (data && data.items.length) {
              data.items.filter(item => item.to).forEach(item => {
                var _item$from3, _item$from4;
                const isSelfAddress = (item === null || item === void 0 ? void 0 : (_item$from3 = item.from) === null || _item$from3 === void 0 ? void 0 : _item$from3.hash) === addressL2;
                list.push({
                  block_time: new Date(item.timestamp).getTime(),
                  mode: isSelfAddress ? 'Sent' : 'Receive',
                  relatedAddresses: [isSelfAddress ? item.to.hash : item === null || item === void 0 ? void 0 : (_item$from4 = item.from) === null || _item$from4 === void 0 ? void 0 : _item$from4.hash],
                  transaction_id: item.hash
                });
              });
            } else {
              list = [];
            }
          }
        }
        setTransactionInfos(list);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      } finally {
        setLoading(false);
      }
    };
    if (!address || !addressL2) {
      return;
    }
    fetchTransactions();
  }, [currentNetworkType, address, addressL2, currentLayer]);
  if (transactionInfos && transactionInfos.length > 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
      children: transactionInfos.map(e => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .M1, {
        mt: "md",
        style: {
          backgroundColor: '#FFFFFF',
          borderRadius: 12,
          border: '1px solid rgba(10,36,99,0.15)',
          padding: '24px',
          marginTop: 12,
          transition: 'all 0.3s'
        },
        classname: "hover",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .WA, {
          full: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .ou, {
            full: true,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
              text: "".concat(e.mode, " on ").concat(new Date(e.block_time).toLocaleString()),
              style: {
                fontSize: '14px',
                color: '#0A2463'
              }
            }), e.relatedAddresses.length > 0 && e.relatedAddresses.map((e, index) => {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .ou, {
                classname: "recent-account-select",
                onClick: async () => {
                  handleAddrInput(e);
                  (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .copyToClipboard */ .ye)(e).then(() => {
                    // tools.toastSuccess('Copied');
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
                  text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(e, 15),
                  preset: "sub",
                  style: {
                    fontSize: '12px',
                    color: 'rgba(10, 36, 99, 0.65)'
                  }
                })
              }, index);
            })]
          })
        })
      }, e.transaction_id))
    });
  } else {
    if (loading) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c, {
          className: "text-center py-7",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
            size: 20,
            color: "inherit"
          })
        })
      });
    } else {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__/* .Empty */ .c, {});
    }
  }
}
function ContactsTab(_ref4) {
  let {
    handleAddrInput
  } = _ref4;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .useWallet */ .e6)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useLayerType */ .wl)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_21__/* .useTranslation */ .G)();
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_9__.useState)([]);
  (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(() => {
    const fetchContacts = async () => {
      const contacts = await wallet.listContact();
      const filteredContacts = currentLayer === 'L2' ? contacts.filter(contact => contact.address.startsWith('0x')) : contacts.filter(contact => contact.address.startsWith('kaspa'));
      setItems(filteredContacts);
    };
    fetchContacts();
  }, [wallet, currentLayer]);
  if (items.length == 0) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_11__/* .Empty */ .c, {
      text: t('No contacts')
    });
  } else {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
      children: items.map(account => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(AddressTypeCard, {
          name: account.name,
          address: account.address,
          handleAddrInput: handleAddrInput
        }, account.address);
      })
    });
  }
}
function MyAccountTab(_ref5) {
  let {
    handleAddrInput
  } = _ref5;
  const currentAccount = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_12__/* .useCurrentAccount */ ._A)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_10__/* .useLayerType */ .wl)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useKeyrings */ .C)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
    children: keyrings.map(keyring => {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)("div", {
        style: {
          marginBottom: '20px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
          text: keyring.alianName,
          mt: "md",
          style: {
            fontSize: '16px',
            color: '#0A2463'
          }
        }), keyring.accounts.map(account => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(AddressTypeCard, {
            name: currentAccount.address == account.address ? account.alianName + ' (Self)' : account.alianName,
            address: currentLayer === 'L2' ? account.addressL2 : account.address,
            handleAddrInput: handleAddrInput
          }, account.pubkey);
        })]
      }, keyring.key);
    })
  });
}
function AddressTypeCard(_ref6) {
  let {
    address,
    name,
    handleAddrInput
  } = _ref6;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Card */ .M1, {
    classname: "hover",
    justifyBetween: true,
    mt: "md",
    onClick: async () => {
      handleAddrInput(address);
      (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .copyToClipboard */ .ye)(address).then(() => {
        // tools.toastSuccess('Copied');
      });
    },
    style: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      border: '1px solid rgba(10,36,99,0.15)',
      padding: '24px',
      marginTop: 12,
      transition: 'all 0.3s'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .ou, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
        text: name,
        style: {
          fontSize: '14px',
          color: '#0A2463'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
        text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_5__/* .shortAddress */ .SO)(address, 15),
        preset: "sub",
        style: {
          fontSize: '12px',
          color: 'rgba(10, 36, 99, 0.65)'
        }
      })]
    })
  });
}
function IconView(_ref7) {
  let {
    iconUrl,
    color,
    size = 24,
    onClick,
    className
  } = _ref7;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)("div", {
    style: {
      maskImage: "url(".concat(iconUrl, ")"),
      maskSize: 'cover',
      maskRepeat: 'no-repeat',
      maskPosition: 'center center',
      backgroundColor: color || '#0a246394',
      width: size,
      height: size
    },
    className: className,
    onClick: () => onClick && onClick()
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 47264:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/paste.8ad1d900.svg";

/***/ }),

/***/ 18196:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/scan.756de743.svg";

/***/ }),

/***/ 82044:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/myContacts.6d79f0e1.svg";

/***/ })

}]);