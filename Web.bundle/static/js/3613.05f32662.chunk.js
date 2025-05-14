"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[3613],{

/***/ 73238:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivitiesScrren)
/* harmony export */ });
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55809);
/* harmony import */ var antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_spin_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_spin__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(96383);
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28454);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(24965);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(43168);
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(16317);
/* harmony import */ var _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(98818);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(37636);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(8239);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(87164);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(45989);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96540);
/* harmony import */ var _ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53830);
/* harmony import */ var _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(79427);
/* harmony import */ var _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2468);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60346);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(77093);
/* harmony import */ var _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(40675);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__, _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_14__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_2__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__, _ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// import SendIcon from '@mui/icons-material/Send';












// 自定义按钮样式

const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n)(_ref => {
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

// 自定义卡片样式
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A)(_ref2 => {
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
    // 恢复为可点击光标
    border: '1px solid rgb(236, 236, 236)',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
  };
});

// LoadingState 和 EmptyState 保持不变
const LoadingState = () => /*#__PURE__*/_jsxs(Box, {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 4,
    height: '50vh'
  },
  children: [/*#__PURE__*/_jsx(Icon, {
    children: /*#__PURE__*/_jsx(LoadingOutlined, {
      style: {
        fontSize: 36,
        color: '#666'
      }
    })
  }), /*#__PURE__*/_jsx(Typography, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mt: 2
    },
    children: "Loading Activities..."
  })]
});
const EmptyState = _ref3 => {
  let {
    refresh
  } = _ref3;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: 4,
      borderRadius: '16px',
      border: '1px solid rgba(10,36,99,0.15)',
      maxWidth: '400px',
      mx: 'auto',
      mt: 0
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
      sx: {
        fontSize: 48,
        color: '#C0C7D8',
        mb: 2
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      sx: {
        fontWeight: 500,
        mb: 2,
        color: '#0A2463',
        fontSize: '20px'
      },
      children: "No Activity Found"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      sx: {
        mb: 2,
        maxWidth: '300px',
        color: 'rgba(10,36,99,0.65)',
        fontSize: '14px'
      },
      children: "It looks like you don\u2019t have any transaction activity yet. Start by making a transaction!"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .$n, {
      variant: "outlined",
      color: "primary",
      size: "small",
      onClick: () => refresh(),
      sx: {
        textTransform: 'none',
        borderRadius: '8px'
      },
      children: "Retry"
    })]
  });
};
function ActivitiesScrren() {
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .Z)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountAddress */ .PJ)();
  const addressL2 = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountAddressL2 */ .N1)();
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useNetworkType */ .iP)();
  const [fetchListData, setFetchListData] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  const [krc20List, setKrc20List] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
  const [krc20Loading, setKrc20Loading] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(true);
  const [activeKey, setActiveKey] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)('native');
  const {
    krc20Tokens,
    erc20Tokens
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__/* .useAccountContext */ .Um)();
  const [l2NativeActivites, setL2NativeActivites] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useLayerType */ .pI)();
  // const {krc20Tokens, krc20Loading, setActiveToken} = useAccountContext()
  const [erc20List, setErc20List] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
  const tabsItemOrigin = [{
    key: 'native',
    label: 'Native'
  }, {
    key: 'krc20',
    label: 'KRC20'
  }, {
    key: 'l2Token',
    label: 'L2TOKEN'
  }];
  const [tabsItem, setTabsItem] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(tabsItemOrigin);
  const fetchList = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(async () => {
    if (!address) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Testnet ? 'testnet-10' : '';
      if (!networkName) {
        console.error('Unknown network type');
        setFetchListData([]);
        return;
      }
      const data = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__/* .fetch_Activity */ .v5)(networkName, address, 7, 0);
      const enrichedData = await Promise.all(data.map(async item => {
        let type = 'Received';
        const inputAddress = item.inputs[0].previous_outpoint_address;
        if (inputAddress === address) {
          type = 'Sent';
        }
        // let inputTotal = 0
        const inputTotal = item.inputs.reduce((acc, curr) => {
          console.log('inputTotal', curr);
          return acc + curr.previous_outpoint_amount;
        }, 0);
        const outputTotal = item.outputs.reduce((acc, curr) => {
          let amount = 0;
          if (inputAddress === curr.script_public_key_address) {
            amount = curr.amount;
          }
          return acc + amount;
        }, 0);
        console.log('total', inputTotal, outputTotal);
        const amount = inputTotal - outputTotal - item.mass;

        // let totalAmount = 0;
        // let dectotalAmount = 0;
        // await Promise.all(
        //   item.inputs.map(async (input) => {
        //     if (input?.signature_script?.length > 200) {
        //       console.log('Skipping special input:', input);
        //       return;
        //     }

        //     try {
        //       const txDetails = await fetch_tx(networkName, input.previous_outpoint_hash);
        //       let flag = 0;
        //       txDetails.outputs.forEach((output) => {
        //         if (output.script_public_key_address === address && input.previous_outpoint_index == flag) {
        //           dectotalAmount += parseInt(output.amount);
        //         }
        //         flag = flag + 1;
        //       });
        //     } catch (error) {
        //       // error
        //     }
        //   })
        // );

        // item.outputs.forEach((output) => {
        //   const outputAmount = parseInt(output.amount);
        //   if (output.script_public_key_address === address) {
        //     totalAmount += outputAmount;
        //   }
        // });
        // const amount = totalAmount - dectotalAmount;

        return {
          // txdetail: item,
          type,
          // : 'TransferNative',
          txid: item.transaction_id || '',
          amount: amount,
          dec: 8,
          tick: 'KAS',
          time: item.block_time,
          status: item.is_accepted ? 'success' : 'pending'
        };
      }));
      console.log('enrichedData', enrichedData);
      setFetchListData(enrichedData);
    } catch (error) {
      console.error('Error fetching activities:', error);
      setFetchListData([]);
    } finally {
      setLoading(false);
    }
  }, [address, network]);
  const getKrc20List = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(async () => {
    // if (krc20Loading) return
    setKrc20Loading(true);
    try {
      if (!krc20Tokens.length) return;
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Testnet ? 'testnet-10' : '';
      const krc20List = [];
      for (const index in krc20Tokens) {
        _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__/* .fetch_krc20_list */ .Db;
        const list = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__/* .fetch_krc20_oplist */ .ip)(networkName, address, krc20Tokens[index].ca || krc20Tokens[index].tick);
        // console.log('list', list);
        krc20List.push(...list.filter(item => item.opAccept !== '-1')); // opAccept -1 hidden
      }
      setKrc20List(krc20List.map(item => {
        let type = 'Recieved';
        if (item.op === 'burn') {
          type = 'Sent';
        }
        if (item.op === 'transfer') {
          type = item.to === address ? 'Recieved' : 'Sent';
        }
        return {
          ...item,
          type: type // item.op === 'transfer' ? (item.to === address ? 'Recieved' : 'Sent') : 'Recieved'
        };
      }));
      console.log('krc20List', krc20List);
    } catch (error) {
      console.log('getKrc20List error', error);
    } finally {
      setKrc20Loading(false);
    }
  }, [address, network, krc20Tokens]);
  const getL2TokenList = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(async () => {
    setLoading(true);
    try {
      if (!addressL2) return;
      const baseUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_MAINNET_L2 */ .Zm : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Testnet ? _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_TESTNET_L2 */ .YL : _shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_DEVNET_L2 */ .B9;
      const response = await fetch(`${baseUrl}/api/v2/addresses/${addressL2}/transactions`);
      const data = await response.json();
      setL2NativeActivites((data === null || data === void 0 ? void 0 : data.items) || []);
    } catch (error) {
      console.log('getL2List rror');
    } finally {
      setLoading(false);
    }
  }, [address, network, addressL2, currentLayer]);
  const getErc20List = (0,react__WEBPACK_IMPORTED_MODULE_8__.useCallback)(async () => {
    console.log('getErc20List', erc20Tokens);
    const erc20List = [];
    for (const index in erc20Tokens) {
      var _res$data;
      const res = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_1__/* .fetch_erc20 */ .kk)(network, addressL2, erc20Tokens[index].contractAddress);
      res === null || res === void 0 ? void 0 : (_res$data = res.data) === null || _res$data === void 0 ? void 0 : _res$data.items.forEach(item => {
        erc20List.push({
          ...item,
          symbol: erc20Tokens[index].symbol,
          dec: erc20Tokens[index].decimals
        });
      });
    }
    setErc20List(erc20List);
  }, [address, network, addressL2]);
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    if (!address) return;
    if (currentLayer !== 'L2') {
      fetchList();
      // 获取krc20List
      getKrc20List();
      setTabsItem(tabsItemOrigin.filter(item => item.key !== 'l2Token'));
    } else {
      getL2TokenList();
      getErc20List();
      setTabsItem(tabsItemOrigin.filter(item => item.key !== 'krc20'));
    }
  }, [address, network, fetchList, krc20Tokens, addressL2, currentLayer, erc20Tokens]);
  const handleClick = () => {
    if (!address || !addressL2) return;
    const baseUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? `https://kas.fyi/addresses/${address}?page=1` : `https://explorer-tn10.kaspa.org/addresses/${address}?page=1`;
    const baseUrlL2 = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? `${_shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_MAINNET_L2 */ .Zm}/address/${addressL2}` : `${_shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_TESTNET_L2 */ .YL}/address/${addressL2}`;
    const url = activeKey === 'l2Token' ? baseUrlL2 : baseUrl;
    window.open(url, '_blank');
  };

  // 处理卡片点击，跳转到交易详情
  const handleCardClick = (type, txid) => {
    if (!txid) return;
    let url = '';
    if (type === 'l1') {
      url = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? `https://kas.fyi/transaction/${txid}` : `https://explorer-tn10.kaspa.org/txs/${txid}`;
    } else {
      url = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_21__.NetworkType.Mainnet ? `${_shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_MAINNET_L2 */ .Zm}/tx/${txid}` : `${_shared_constant__WEBPACK_IMPORTED_MODULE_13__/* .OPENAPI_URL_TESTNET_L2 */ .YL}/tx/${txid}`;
    }
    window.open(url, '_blank');
  };

  // if (loading) {
  //   return (
  //     <Layout>
  //       <Header onBack={() => navigate('ToolScreen')} title="Activities" />
  //       <Content>
  //         <Box sx={{ padding: 1 }}>
  //           <StyledButton
  //             onClick={handleClick}
  //             fullWidth
  //             variant="contained"
  //             size="medium"
  //             endIcon={<OpenInNewIcon sx={{ color: '#222' }} />}
  //             sx={{ mb: 3 }}
  //           >
  //             More
  //           </StyledButton>
  //           <LoadingState />
  //         </Box>
  //       </Content>
  //     </Layout>
  //   );
  // }

  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    console.log('activeKey', activeKey);
  }, [activeKey]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .Y9, {
      onBack: () => navigate('MainScreen'),
      title: "Activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_TabPaper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
      tabs: tabsItem,
      activeKey: activeKey,
      onChange: key => setActiveKey(key),
      style: {
        margin: '0 16px'
      },
      className: "my-custom-activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A, {
      className: "flex-1 overflow-y-auto !py-0 !mt-4",
      children: [currentLayer === 'L1' && activeKey === 'native' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
        spinning: loading,
        children: fetchListData.length ? fetchListData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StyledCard, {
          className: "mt-3 first:!mt-0",
          onClick: () => handleCardClick('l1', item.txid),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            sx: {
              padding: 2,
              paddingBottom: 0,
              paddingLeft: '10px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                display: "flex",
                alignItems: "center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("img", {
                  src: item.type === 'Received' ? _ui_images_index_Receive_svg__WEBPACK_IMPORTED_MODULE_11__ : _ui_images_index_Send_svg__WEBPACK_IMPORTED_MODULE_10__,
                  width: 18,
                  height: 18,
                  alt: ""
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                  style: {
                    marginLeft: '12px'
                  },
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                    sx: {
                      fontSize: '14px',
                      fontWeight: 500,
                      color: '#0A2463'
                    },
                    children: [item.type, " ", item.type === 'Sent' ? '-' : '+', (0,bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(item.amount / Math.pow(10, item.dec)).toFixed(4), " ", item.tick]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                    sx: {
                      fontSize: '12px',
                      color: 'rgba(10, 36, 99, 0.65)',
                      mt: 0.5
                    },
                    children: new Date(item.time).toLocaleString()
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
                textAlign: "right",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                  variant: "body2",
                  sx: {
                    fontSize: '0.9rem',
                    color: item.status === 'success' ? '#0BE4AB' : '#ff9800'
                  },
                  children: item.status === 'success' ? 'Confirmed' : 'Pending'
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                  variant: "body2",
                  sx: {
                    fontSize: '0.8rem',
                    color: 'rgba(10, 36, 99, 0.65)',
                    mt: 0.5
                  },
                  children: [item.txid.slice(0, 8), "..."]
                })]
              })]
            })
          })
        }, index)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          },
          style: {
            opacity: loading ? 0 : ''
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(EmptyState, {
            refresh: fetchList
          })
        })
      }), currentLayer === 'L2' && activeKey === 'native' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
        spinning: loading,
        children: l2NativeActivites.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay, {
          container: true,
          spacing: 2.5,
          children: l2NativeActivites.map((item, index) => {
            var _item$from, _item$from2;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay, {
              item: true,
              xs: 12,
              style: {
                paddingTop: '12px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StyledCard, {
                onClick: () => handleCardClick('l2', item.hash),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
                  sx: {
                    padding: 2,
                    paddingBottom: 0
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        variant: "body1",
                        sx: {
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: '#0A2463'
                        },
                        children: (item === null || item === void 0 ? void 0 : (_item$from = item.from) === null || _item$from === void 0 ? void 0 : _item$from.hash) === addressL2 ? `Sent -${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(Number(item.value) / 10 ** 18).toFixed(4)} eKas` : `Received +${(0,bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(Number(item.value) / 10 ** 18).toFixed(4)} eKas`
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.85rem',
                          color: 'rgba(10, 36, 99, 0.65)',
                          mt: 0.5
                        },
                        children: new Date(item === null || item === void 0 ? void 0 : item.timestamp).toLocaleString()
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.9rem',
                          color: item.result === 'success' ? '#0BE4AB' : '#ff9800'
                        },
                        children: item.result
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        sx: {
                          fontSize: '0.8rem',
                          color: 'rgba(10, 36, 99, 0.65)',
                          mt: 0.5
                        },
                        children: [item === null || item === void 0 ? void 0 : (_item$from2 = item.from) === null || _item$from2 === void 0 ? void 0 : _item$from2.hash.slice(0, 8), "..."]
                      })]
                    })]
                  })
                })
              })
            }, index);
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          },
          style: {
            opacity: loading ? 0 : ''
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(EmptyState, {
            refresh: getL2TokenList
          })
        })
      }), currentLayer === 'L1' && activeKey === 'krc20' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
        spinning: krc20Loading,
        children: krc20List.length ? krc20List.map((item, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_ui_components_Styled_Krc20Item__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
            item: item
          }, index);
        })
        // <Grid container spacing={2.5}>
        //   {krc20List.map((item, index) => (
        //     <Grid item xs={12} key={index} style={{ paddingTop: '12px' }}>
        //       <StyledCard onClick={() => {
        //         // 格式化 txDetail，确保符合 TxDetailScreen 需要的结构
        //         const formattedTxDetail = {
        //           transaction_id: item.hashRev,  // 交易ID
        //           hash: item.hashRev,            // 哈希
        //           is_accepted: item.txAccept === '1',  // 是否接受
        //           mass: item.opScore,            // 操作分数（或其他数据）
        //           block_time: new Date(parseInt(item.mtsAdd)).toLocaleString(), // 时间戳，转换为日期格式
        //           subnetwork_id: item.txId,      // 子网络ID（根据需求调整）
        //           accepting_block_blue_score: item.feeRev,  // 其他相关字段
        //           accepting_block_hash: item.hashRev,  // 区块哈希（可根据需求调整）
        //           inputs: [{
        //             previous_outpoint_hash: item.from,           // 输入地址
        //             previous_outpoint_amount: item.amt,         // 输入金额
        //             tick: item.tick,
        //           }],
        //           outputs: [{
        //             script_public_key_address: item.to,             // 输出地址
        //             amount: item.amt,             // 输出金额
        //             tick: item.tick,
        //             type: item.op === 'transfer' ? (item.to === address ? 'Recieved' : 'Sent') : 'Recieved'
        //           }]
        //         };
        //         // 传递格式化后的 txDetail 和 txId
        //         navigate("TxDetailScreen", { txDetail: formattedTxDetail, txId: item.hashRev });
        //       }}>
        //         <CardContent sx={{ padding: 2, paddingBottom: 0 }}>
        //           <div className="flex justify-between items-center">
        //             <div>
        //               <Typography sx={{ fontSize: '0.9rem', fontWeight: 500, color: '#0A2463' }}>
        //                 {item.op}
        //               </Typography>
        //               <Typography sx={{ fontSize: '0.85rem', color: 'rgba(10, 36, 99, 0.65)', mt: 0.5 }}>
        //                 {item.tick}
        //               </Typography>
        //             </div>
        //             <div>
        //               <Typography
        //                 variant="body2"
        //                 sx={{
        //                   fontSize: '0.9rem',
        //                   color: item.opAccept === '1' ? '#0BE4AB' : '#ff9800'
        //                 }}>
        //                 {item.opAccept === '1' ? 'Confirmed' : 'No Confirmed'}
        //               </Typography>
        //             </div>
        //           </div>
        //         </CardContent>
        //       </StyledCard>
        //     </Grid>
        //   ))}
        // </Grid>
        : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          },
          style: {
            opacity: krc20Loading ? 0 : ''
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(EmptyState, {
            refresh: getKrc20List
          })
        })
      }), currentLayer === 'L2' && activeKey === 'l2Token' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(antd_lib_spin__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
        spinning: loading,
        children: erc20List.length ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay, {
          container: true,
          spacing: 2.5,
          children: erc20List.map((item, index) => {
            var _item$from3, _item$from4;
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Ay, {
              item: true,
              xs: 12,
              style: {
                paddingTop: '12px'
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StyledCard, {
                onClick: () => {
                  const op = item.type === 'token_transfer' ? 'transfer' : 'mint';
                  const formattedTxDetail = {
                    transaction_id: item.transaction_hash,
                    // 交易ID
                    hash: item.transaction_hash,
                    // 哈希
                    is_accepted: item.txAccept === '1',
                    // 是否接受
                    mass: item.opScore,
                    // 操作分数（或其他数据）
                    block_time: new Date(item.timestamp).toLocaleString(),
                    // 时间戳，转换为日期格式
                    subnetwork_id: item.txId,
                    // 子网络ID（根据需求调整）
                    accepting_block_blue_score: item.feeRev,
                    // 其他相关字段
                    accepting_block_hash: item.block_hash,
                    // 区块哈希（可根据需求调整）
                    inputs: [{
                      previous_outpoint_hash: item.from.hash,
                      // 输入地址
                      previous_outpoint_amount: item.total.value,
                      // 输入金额
                      tick: item.symbol,
                      dec: item.dec
                    }],
                    outputs: [{
                      script_public_key_address: item.to.hash,
                      // 输出地址
                      amount: item.total.value,
                      // 输出金额
                      tick: item.symbol,
                      type: op,
                      dec: item.dec
                    }]
                  };

                  // 传递格式化后的 txDetail 和 txId
                  navigate("TxDetailScreen", {
                    txDetail: formattedTxDetail,
                    txId: item.hashRev
                  });
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
                  sx: {
                    padding: 2,
                    paddingBottom: 0
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                    className: "flex justify-between items-center",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        variant: "body1",
                        sx: {
                          fontSize: '0.9rem',
                          fontWeight: 500,
                          color: '#0A2463'
                        },
                        children: [((_item$from3 = item.from) === null || _item$from3 === void 0 ? void 0 : _item$from3.hash) === addressL2 ? `Sent -` : `Received +`, (0,bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(Number(item.total.value) / 10 ** item.total.decimals).toFixed(4), ' ' + item.symbol]
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.85rem',
                          color: 'rgba(10, 36, 99, 0.65)',
                          mt: 0.5
                        },
                        children: new Date(item === null || item === void 0 ? void 0 : item.timestamp).toLocaleString()
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)("div", {
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.9rem',
                          color: !item.result || item.result === 'success' ? '#0BE4AB' : '#ff9800'
                        },
                        children: item.result || 'success'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        sx: {
                          fontSize: '0.8rem',
                          color: 'rgba(10, 36, 99, 0.65)',
                          mt: 0.5
                        },
                        children: [item === null || item === void 0 ? void 0 : (_item$from4 = item.from) === null || _item$from4 === void 0 ? void 0 : _item$from4.hash.slice(0, 8), "..."]
                      })]
                    })]
                  })
                })
              })
            }, index);
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          },
          style: {
            opacity: loading ? 0 : ''
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(EmptyState, {
            refresh: getErc20List
          })
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)("div", {
      className: "mx-4",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(StyledButton, {
        onClick: handleClick,
        fullWidth: true,
        variant: "contained",
        size: "medium",
        endIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_15__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
          sx: {
            color: '#222'
          }
        }),
        sx: {
          my: 2
        },
        children: "More"
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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