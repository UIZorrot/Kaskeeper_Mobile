"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[6868],{

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

/***/ 36868:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mint)
/* harmony export */ });
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71288);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(80590);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(21999);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36904);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(43168);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(51195);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11846);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(49211);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(73357);
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(87458);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6757);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(11848);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(14073);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60346);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(74353);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(45989);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2543);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(47767);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















 // 引入进度条组件










// 自定义按钮样式

const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Ay)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n)(_ref => {
  let {
    theme
  } = _ref;
  return {
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(1),
    textTransform: 'none',
    fontWeight: 600
  };
});
function Mint() {
  var _location$state;
  const {
    setActiveToken,
    refetchList
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_4__/* .useAccountContext */ .Um)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .useLocation */ .zy)();
  const activeToken = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.activeToken;
  console.log('activeToken', activeToken);
  const [ticker, setTicker] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(activeToken === null || activeToken === void 0 ? void 0 : activeToken.tick);
  const [mintCount, setMintCount] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(1);
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useNetworkType */ .iP)();
  const account = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentKeyring */ .KZ)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useUserPrivateKey */ .N2)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .j)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountAddress */ .PJ)();
  const [fetchedTicker, setFetchedTicker] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [completedMints, setCompletedMints] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0);
  const [errorOccurred, setErrorOccurred] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [isMinting, setIsMinting] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .Z)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const [fee, setFee] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0.01); // 新增：手续费
  const [progressText, setprogressText] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)("");
  const balance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountBalance */ .pc)();

  // 在组件加载时从localStorage恢复状态
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    const savedTicker = localStorage.getItem('ticker');
    const savedMintCount = parseInt(localStorage.getItem('mintCount') || '1');
    const savedCompletedMints = parseInt(localStorage.getItem('completedMints') || '0');
    if (!activeToken && savedTicker) {
      setTicker(savedTicker);
    }
    if (!isNaN(savedMintCount)) {
      setMintCount(savedMintCount);
    }
    if (!isNaN(savedCompletedMints)) {
      setCompletedMints(savedCompletedMints);
    }
    console.log('savedMintCount', balance);
  }, []);

  // 存储状态到localStorage
  const saveStateToLocalStorage = () => {
    localStorage.setItem('ticker', ticker);
    localStorage.setItem('mintCount', mintCount.toString());
    localStorage.setItem('completedMints', completedMints.toString());
  };
  const checkTickerValid = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(async () => {
    if (!ticker || ticker.length < 4 || ticker.length > 6) {
      return;
    }
    setLoading(true);
    let result;
    try {
      var _jsonData$result;
      if (network == kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet) {
        result = await fetch(`https://api.kasplex.org/v1/krc20/token/${ticker}`);
      } else {
        result = await fetch(`https://tn10api.kasplex.org/v1/krc20/token/${ticker}`);
      }
      const jsonData = await result.json();
      setFetchedTicker(jsonData === null || jsonData === void 0 ? void 0 : (_jsonData$result = jsonData.result) === null || _jsonData$result === void 0 ? void 0 : _jsonData$result[0]);
    } catch (error) {
      console.error('Error fetching ticker:', error);
    } finally {
      setLoading(false);
    }
  }, [ticker]);
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    if (!ticker || ticker.length < 4 || ticker.length > 6) {
      return;
    }
    checkTickerValid();
  }, [ticker]);
  const [sendback, setSendback] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const handleMintBack = async () => {
    setprogressText("Refund Token ..");
    setSendback(true);
    try {
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? 'testnet-10' : '';
      const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_mint_back */ .cG)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, fee);
      if (!result.status) {
        setSending(false);
        tools.toastError('An error occurred during refund process.');
      }
      setSendback(false);
      setprogressText("");
      refetchList();
      tools.toastSuccess('Successfully Receive Fund.');
    } catch (error) {
      setSendback(false);
      setprogressText("");
      tools.toastError('An error occurred during minting.');
    }
  };
  const totalFee = (mintCount || 0) * ((fee || 0) + 1) + 1;
  const handleMint = async () => {
    if (!mintCount || mintCount < 1) {
      tools.toastError('Please enter a valid number of mints.');
      return;
    }
    if (!ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed") {
      tools.toastError('Please enter a valid ticker.');
      return;
    }
    if (!fee || fee < 0.01) {
      return tools.toastError('Please enter a valid fee.');
    }

    // 如果手续费大于余额，则提示错误
    if (totalFee > Number(balance.amount)) {
      return tools.toastError('Insufficient balance for fee.');
    }
    setprogressText("Minting in progress ..");
    setSending(true);
    setCompletedMints(0); // 重置完成次数
    setErrorOccurred(false); // 重置错误状态
    setIsMinting(true); // 开始显示进度条

    console.log('fee', fee);
    try {
      let MintsNum = 0;
      for (let i = 0; i < mintCount; i++) {
        const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? 'testnet-10' : '';
        let retryCount = 0;
        const maxRetries = 5;
        let result;

        // 重试循环
        while (retryCount < maxRetries) {
          result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_mint_once */ .q4)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, fee, mintCount - MintsNum);
          if (result.status) {
            var _result;
            // 成功时的处理逻辑
            dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__/* .transactionsActions */ .$A.updateNativeTxs({
              from: address,
              info: {
                ...fetchedTicker,
                type: _ui_types__WEBPACK_IMPORTED_MODULE_11__/* .TXTypes */ .Y.Mint,
                amount: fetchedTicker.lim,
                from: address,
                to: '',
                hash: (_result = result) === null || _result === void 0 ? void 0 : _result.hash,
                time: dayjs__WEBPACK_IMPORTED_MODULE_13___default()().valueOf(),
                status: 'success'
              }
            }));
            setCompletedMints(prev => prev + 1);
            saveStateToLocalStorage();
            MintsNum = MintsNum + 1;
            break; // 成功后跳出重试循环
          } else {
            retryCount++;
            if (retryCount === maxRetries) {
              var _result2;
              // 达到最大重试次数后的失败处理
              setErrorOccurred(true);
              setSending(false);
              setIsMinting(false);
              tools.toastError(`${result.msg} (Failed after ${maxRetries} retries)`);
              dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__/* .transactionsActions */ .$A.updateNativeTxs({
                from: address,
                info: {
                  ...fetchedTicker,
                  type: _ui_types__WEBPACK_IMPORTED_MODULE_11__/* .TXTypes */ .Y.Mint,
                  amount: fetchedTicker.lim,
                  from: address,
                  to: '',
                  hash: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.hash,
                  time: dayjs__WEBPACK_IMPORTED_MODULE_13___default()().valueOf(),
                  status: 'Failed'
                }
              }));
              break; // 达到最大重试次数后跳出
            }
            // 可选：添加重试之间的延迟
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒延迟
          }
        }
      }
      // 如果没有错误并且所有 mint 完成，跳转到成功页面
      if (MintsNum === mintCount) {
        setSending(false);
        setIsMinting(false); // 结束进度条显示
        setActiveToken(null);
        setprogressText("");
        await handleMintBack();
        refetchList();
        console.log(parseInt(fetchedTicker.lim) * mintCount);
        console.log(fetchedTicker === null || fetchedTicker === void 0 ? void 0 : fetchedTicker.dec);
        const rawtxinfo = {
          "to": address,
          "amountSompi": parseInt(fetchedTicker.lim) * mintCount / new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A(10).pow(8 - fetchedTicker.dec).toNumber(),
          "tick": ticker
        };
        console.log(rawtxinfo);
        navigate('TxSuccessScreen', {
          txid: "Multi-Transaction",
          rawtx: rawtxinfo,
          type: "Mint"
        });
      }
    } catch (error) {
      setSending(false);
      setIsMinting(false); // 结束进度条显示
      setprogressText("");
      tools.toastError('An error occurred during minting.');
    }
  };
  const [btnText, disabled] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useMemo)(() => {
    if (!ticker) {
      return ['Mint', true];
    } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || (fetchedTicker === null || fetchedTicker === void 0 ? void 0 : fetchedTicker.mod) !== 'mint') {
      return ['Mint', true];
    } else if (sending) {
      return ['Mint', true];
    } else {
      return ['Mint', false];
    }
  }, [ticker, fetchedTicker, sending]);
  const handleMintCountChange = e => {
    let count = parseInt(e.target.value, 10);
    if (!isNaN(count) && count < 0) {
      count = 0;
    }
    setMintCount(count);
    // saveStateToLocalStorage();  // 保存mintCount状态
  };
  const handleFeeChange = e => {
    let feeValue = parseFloat(e.target.value);
    if (feeValue && isNaN(feeValue)) {
      feeValue = 0.01; // 默认为2
    }
    setFee(feeValue); // 更新手续费状态
    // saveStateToLocalStorage();  // 保存fee状态
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      title: `Mint ${(activeToken === null || activeToken === void 0 ? void 0 : activeToken.tick) || ''}`,
      onBack: () => navigate('ToolScreen'),
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .NodeStatus */ .zI, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      classname: "!px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          variant: "body2",
          color: "textSecondary",
          children: "It takes 1 KAS as commission each time (no matter how many KRC20 you mint), each mint takes at least 1 KAS as gasfee. If the mint process be interrupted, you can restart the minting process, and the commission will not be charged until you reach the last limit."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          variant: "body2",
          color: "textSecondary",
          children: "Beware, if you have UTXO compound recently, you have to wait the compound success, otherwise the minting may failed."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            children: "Ticker"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
            type: "text",
            value: ticker,
            name: "ticker",
            placeholder: "ticker",
            fullWidth: true,
            autoComplete: "off",
            size: "small",
            endAdornment: !(0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) && fetchedTicker.state === "deployed" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
              color: "primary"
            }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
              color: "primary",
              size: 20
            }) : 'Unused',
            onChange: e => {
              if (e.target.value.length > 6) {
                return;
              }
              // 允许非数字字符
              if (/^\D*$/.test(e.target.value)) {
                setTicker(e.target.value);
              }
              // 替换或清空数字字符
              else {
                setTicker(e.target.value.replace(/\d+/, ''));
              }
              setTicker(e.target.value);
              // saveStateToLocalStorage();  // 保存ticker状态
            },
            error: !ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed"
          }), !ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            color: "error",
            children: "Invalid ticker"
          }) : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            children: "Mint Count"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
            type: "number",
            size: "small",
            value: mintCount,
            onChange: handleMintCountChange,
            fullWidth: true,
            placeholder: "Enter number of mints"
          }), !mintCount || mintCount < 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            color: "error",
            children: "Invalid Count"
          }) : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            children: "Priority Fee (KAS)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
            type: "number",
            value: fee,
            name: "fee",
            size: "small",
            placeholder: "Fee",
            fullWidth: true,
            autoComplete: "off",
            onChange: handleFeeChange
          }), !fee || fee < 0.01 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            color: "error",
            children: "Invalid Fee(The fee must be greater than 0.01)"
          }) : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          className: "!mt-2",
          textAlign: 'center',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
            className: "text-xs text-gray-400",
            children: ["Total Fee: ", totalFee, " KAS"]
          })
        }), isMinting && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
            variant: "body2",
            sx: {
              marginTop: 1
            },
            children: [completedMints, " / ", mintCount, " Minted"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {
            variant: "determinate",
            value: completedMints / mintCount * 100,
            sx: {
              marginTop: 2
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          variant: "body2",
          sx: {
            marginTop: 1
          },
          children: progressText
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
        className: "mt-6",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
          fullWidth: true,
          size: "medium",
          variant: "outlined",
          onClick: handleMintBack,
          disabled: isMinting,
          sx: {
            marginBottom: "12px"
          },
          children: sendback ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: ["Return Fund", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
              size: 16,
              sx: {
                ml: 1
              }
            })]
          }) : "Return Fund"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
          fullWidth: true,
          size: "medium",
          variant: "contained",
          onClick: handleMint,
          disabled: isMinting,
          children: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [btnText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {
              size: 16,
              sx: {
                ml: 1
              }
            })]
          }) : btnText
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Footer */ .wi, {
      px: "zero",
      py: "zero",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components_NavTabBar__WEBPACK_IMPORTED_MODULE_3__/* .NavTabBar */ .w, {
        tab: "mint"
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ })

}]);