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

/***/ 28454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Db: () => (/* binding */ fetch_krc20_list),
/* harmony export */   Gm: () => (/* binding */ fetch_krc20),
/* harmony export */   c5: () => (/* binding */ fetch_tx),
/* harmony export */   v5: () => (/* binding */ fetch_Activity)
/* harmony export */ });
/* unused harmony export fetch_UTXO */
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71083);


// [
//   {
//   address: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//   outpoint: {
//   transactionId: "61122b023061a8256de6d81ea6c73b82fe6d266eed990a3b083284978d86f609",
//   index: 0
//   },
//   utxoEntry: {
//   amount: "10488418979",
//   scriptPublicKey: {
//   scriptPublicKey: "20e08da324934af0d9eaecf051435a52752d66a8b686d8d7cc3f225887d0e957f3ac"
//   },
//   blockDaaScore: "82234251",
//   isCoinbase: true
//   }
//   }
// ]

async function fetch_UTXO(network, address) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url(network)}addresses/${address}/utxos`);
  try {
    const res = await axios.get(`${rest_api_url(network)}addresses/${address}/utxos`, {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}

// {
//   message: "successful",
//   prev: "825858630000",
//   next: "819459140000",
//   result: [
//     {
//       p: "KRC-20",
//       op: "mint",
//       tick: "MMSSDD",
//       amt: "100000000000",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825858630000",
//       hashRev: "31cf7059a9ef661781ae789f965cb85ce861a9b02bf9984fd310fde41613e681",
//       feeRev: "100001624",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "a983842832ec8accc7f10e49a3edfbaf3c5b96da9d312463f17be77faee61f8e",
//       mtsAdd: "1735151689594",
//       mtsMod: "1735151689594",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "MMSSDQ",
//       max: "10000000000000000",
//       lim: "10000000000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825850900000",
//       hashRev: "5352d61078f5e5419030edbc38ccfb1dce4e04652c33430d6df8783850ad2f0a",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "5ae77e4a0f37f7ff301e5485f549b3f0c62497dad56f34dcf723d4256404c9ba",
//       mtsAdd: "1735150949519",
//       mtsMod: "1735150949519",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "JIENEQ",
//       max: "1000000000000",
//       lim: "100000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825274750000",
//       hashRev: "81b972210810758ae112d0dc68fca3baa1b6d4cf77bb85a07f0a2fadabee35b9",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "-1",
//       opError: "tick existed",
//       checkpoint: "",
//       mtsAdd: "1735093622162",
//       mtsMod: "1735093622162",
//     }, {
//       p: "KRC-20",
//       op: "deploy",
//       tick: "MMSSDG",
//       max: "10000000000000000",
//       lim: "10000000000",
//       pre: "0",
//       dec: "8",
//       from: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       to: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//       opScore: "825259970000",
//       hashRev: "c92540c073421e474a5ed8e012e3a1382f04ab41183e80608fbc2de6d92ca70d",
//       feeRev: "100000003324",
//       txAccept: "1",
//       opAccept: "1",
//       opError: "",
//       checkpoint: "0de7aaa7cd29a5508e7ccfe108d7baae9fe5687eec3c56b9385f55ce279284a6",
//       mtsAdd: "1735092150303",
//       mtsMod: "1735092150303",
//     }
// }

async function fetch_krc20_list(network, address) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url_krc20(network)}krc20/address/${address}/tokenlist`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url_krc20(network)}krc20/address/${address}/tokenlist`, {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data.result; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_krc20(network, address, tick) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}&tick=${tick}`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}&tick=${tick}`, {
      headers
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return res.data.result; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}

// export async function fetch_krc20_oplist(network: string, address: string, tick: string) {
//   const headers = {
//     // 'X-Client': 'KasWare Wallet',
//     // 'X-Version': VERSION,
//     // 'x-address': this.clientAddress,
//     // 'x-flag': this.addressFlag + '',
//     // 'x-channel': CHANNEL,
//     // 'x-udid': this.store.deviceId,
//   };
//   console.log(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}`)
//   try {
//     const res = await axios.get(`${rest_api_url_krc20(network)}krc20/oplist?address=${address}`, {
//       headers,
//       withCredentials: true, // 如果需要处理跨域请求
//     });
//     return res.data; // 返回实际数据
//   } catch (e: any) {
//     throw new Error('Network error: ' + e.message);
//   }
// }

// [
// {
//   subnetwork_id: "0000000000000000000000000000000000000000",
//   transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//   hash: "9cb87d328116073b65c6bde9695b0c8515a1a41740c8e3245cf01473198fb8bb",
//   mass: "98890",
//   block_hash: [
//   "13d2c1c701f8c9f026f8e3effc233af1b11ec0701b330a097cc2107a26f7fe99"
//   ],
//   block_time: 1735193690277,
//   is_accepted: true,
//   accepting_block_hash: "755bf8b4d99b4db724e2ca991481f80ef71a3e499cff0b76e8949d34a9a2dd24",
//   accepting_block_blue_score: 81532868,
//   inputs: [
//     {
//       transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//       index: 0,
//       previous_outpoint_hash: "949aa138192e3dbed7aac4be2e587e58e9d24d7008425ee3db277b6c5b80ce32",
//       previous_outpoint_index: "0",
//       previous_outpoint_resolved: null,
//       previous_outpoint_address: null,
//       previous_outpoint_amount: null,
//       signature_script: "415dc645e77cd726412371717aa4c39807a8d7401e7ace0dcdb020dd25e864a747731f8d7842a08bd95ca32d50762d4aa4fe7f0d8792322f92a2620a43a08d9bf801",
//       sig_op_count: "1"
//       }
//   ],
//   outputs: [
//   {
//   transaction_id: "f0fe3807cdbc3df2b00137875b5461e6b748ecaa2d792345dbda77d088ca2016",
//   index: 0,
//   amount: 922530241358,
//   script_public_key: "20e08da324934af0d9eaecf051435a52752d66a8b686d8d7cc3f225887d0e957f3ac",
//   script_public_key_address: "kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr",
//   script_public_key_type: "pubkey",
//   accepting_block_hash: null
//   }
//   ]
//   }
// ]

async function fetch_Activity(network, address, limit, offest) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url(network)}addresses/${address}/full-transactions?limit=${limit}&offset=${offest}`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url(network)}addresses/${address}/full-transactions?limit=${limit}&offset=${offest}`, {
      // headers,
      // withCredentials: true, // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
async function fetch_tx(network, tx) {
  const headers = {
    // 'X-Client': 'KasWare Wallet',
    // 'X-Version': VERSION,
    // 'x-address': this.clientAddress,
    // 'x-flag': this.addressFlag + '',
    // 'x-channel': CHANNEL,
    // 'x-udid': this.store.deviceId,
  };
  console.log(`${rest_api_url(network)}transactions/${tx}`);
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.get(`${rest_api_url(network)}transactions/${tx}`, {
      headers,
      withCredentials: true // 如果需要处理跨域请求
    });
    return res.data; // 返回实际数据
  } catch (e) {
    throw new Error('Network error: ' + e.message);
  }
}
function rest_api_url(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://api-tn10.kaspa.org/';
  }
  return 'https://api.kaspa.org/';
}
function rest_api_url_krc20(network) {
  if (network == 'testnet' || network == 'testnet-10' || network == 'tn10' || network == 'tn-10') {
    return 'https://tn10api.kasplex.org/v1/';
  }
  return 'https://api.kasplex.org/v1/';
}

// const a = await fetch_Activity('testnet-10', 'kaspatest:qrsgmgeyjd90pk02anc9zs662f6j6e4gk6rd347v8u393p7sa9tlxczkc4kcr', 10, 0);
// console.log(a);

/***/ }),

/***/ 34283:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActivitiesScrren)
/* harmony export */ });
/* harmony import */ var _background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(28454);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24965);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43168);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11848);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14977);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(14073);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(8239);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(37636);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(87164);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(45989);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(96540);
/* harmony import */ var _mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(52751);
/* harmony import */ var _mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(98818);
/* harmony import */ var _mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(16317);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(93567);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13108);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















// 自定义按钮样式（保持不变）

const StyledButton = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .$n)(_ref => {
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
const StyledCard = (0,_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Ay)(_mui_material__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A)(_ref2 => {
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
const LoadingState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
  sx: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: 4,
    height: '50vh'
  },
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A, {
      style: {
        fontSize: 36,
        color: '#666'
      }
    })
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "body1",
    color: "text.secondary",
    sx: {
      mt: 2
    },
    children: "Loading Activities..."
  })]
});
const EmptyState = () => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
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
  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_icons_material_ErrorOutline__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .A, {
    sx: {
      fontSize: 48,
      color: '#888',
      mb: 2
    }
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "h6",
    color: "text.primary",
    sx: {
      fontWeight: 500,
      mb: 1
    },
    children: "No Activity Found"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
    variant: "body2",
    color: "text.secondary",
    sx: {
      mb: 2,
      maxWidth: '300px'
    },
    children: "It looks like you don\u2019t have any transaction activity yet. Start by making a transaction!"
  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .$n, {
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
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .Z)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_3__/* .useAccountAddress */ .PJ)();
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useNetworkType */ .iP)();
  const [fetchListData, setFetchListData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)([]);
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(true);
  const fetchList = (0,react__WEBPACK_IMPORTED_MODULE_6__.useCallback)(async () => {
    if (!address) {
      setLoading(false);
      return;
    }
    setLoading(true);
    try {
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__.NetworkType.Testnet ? 'testnet-10' : '';
      if (!networkName) {
        console.error('Unknown network type');
        setFetchListData([]);
        return;
      }
      const data = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__/* .fetch_Activity */ .v5)(networkName, address, 7, 0);
      const enrichedData = await Promise.all(data.map(async item => {
        let totalAmount = 0;
        let dectotalAmount = 0;
        await Promise.all(item.inputs.map(async input => {
          if (input.signature_script && input.signature_script.length > 200) {
            console.log("Skipping special input:", input);
            return;
          }
          const txDetails = await (0,_background_krc20_ActiveUTXO__WEBPACK_IMPORTED_MODULE_16__/* .fetch_tx */ .c5)(networkName, input.previous_outpoint_hash);
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
  (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(() => {
    if (!address) {
      setLoading(false);
      return;
    }
    fetchList();
  }, [address, network, fetchList]);
  const handleClick = () => {
    if (!address) return;
    const baseUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__.NetworkType.Mainnet ? `https://kas.fyi/addresses/${address}?page=1` : `https://explorer-tn10.kaspa.org/addresses/${address}?page=1`;
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .openUrlLink */ .aj)(baseUrl, '_blank');
  };

  // 新增：处理卡片点击跳转到交易详情
  const handleCardClick = txid => {
    if (!txid) return;
    const txUrl = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_15__.NetworkType.Mainnet ? `https://kas.fyi/transaction/${txid}` : `https://explorer-tn10.kaspa.org/txs/${txid}`;
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_7__/* .openUrlLink */ .aj)(txUrl, '_blank');
  };
  if (loading) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
        onBack: () => navigate('MainScreen'),
        title: "Activities"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          sx: {
            padding: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StyledButton, {
            onClick: handleClick,
            fullWidth: true,
            variant: "contained",
            size: "medium",
            endIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              sx: {
                color: '#222'
              }
            }),
            sx: {
              mb: 3
            },
            children: "More"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(LoadingState, {})]
        })
      })]
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => navigate('MainScreen'),
      title: "Activities"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ui_components_Styled_Content__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
        sx: {
          padding: 1
        },
        children: !(0,lodash__WEBPACK_IMPORTED_MODULE_5__.isEmpty)(fetchListData) ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
            variant: "subtitle1",
            color: "text.primary",
            sx: {
              fontWeight: 500,
              mb: 2,
              color: '#222'
            },
            children: ["Activity Log (", fetchListData.length, ")"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StyledButton, {
            onClick: handleClick,
            fullWidth: true,
            variant: "contained",
            size: "medium",
            endIcon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_icons_material_OpenInNew__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              sx: {
                color: '#222'
              }
            }),
            sx: {
              mb: 3
            },
            children: "More"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay, {
            container: true,
            spacing: 2.5,
            children: fetchListData.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Ay, {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(StyledCard, {
                onClick: () => handleCardClick(item.txid),
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
                  sx: {
                    padding: 2,
                    paddingBottom: 0
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                      display: "flex",
                      alignItems: "center",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_icons_material_Send__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
                        sx: {
                          fontSize: 24,
                          mr: 1.5,
                          color: '#666'
                        }
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                          variant: "body1",
                          sx: {
                            fontSize: '0.9rem',
                            fontWeight: 500,
                            color: '#222'
                          },
                          children: item.amount >= 0 ? `Received ${item.amount / Math.pow(10, item.dec)} ${item.tick}` : `Sent ${Math.abs(item.amount) / Math.pow(10, item.dec)} ${item.tick}`
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                          variant: "body2",
                          sx: {
                            fontSize: '0.85rem',
                            color: '#888',
                            mt: 0.5
                          },
                          children: new Date(item.time).toLocaleString()
                        })]
                      })]
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
                      textAlign: "right",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
                        variant: "body2",
                        sx: {
                          fontSize: '0.9rem',
                          color: item.status === 'success' ? '#2ecc71' : '#ff9800'
                        },
                        children: item.status === 'success' ? 'Confirmed' : 'Pending'
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .A, {
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
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          sx: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(EmptyState, {})
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