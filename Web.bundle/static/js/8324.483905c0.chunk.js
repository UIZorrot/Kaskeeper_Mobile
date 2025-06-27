"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8324],{

/***/ 58324:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mint)
/* harmony export */ });
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60172);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23848);
/* harmony import */ var _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23932);
/* harmony import */ var _ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(20084);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60440);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17534);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96900);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(95215);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(83603);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37656);
/* harmony import */ var _mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(32612);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(75776);
/* harmony import */ var _mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(18656);
/* harmony import */ var _mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(89600);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87136);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92792);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(70884);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(32496);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5320);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(21704);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(96651);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(33220);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















 // 引入进度条组件










// 自定义按钮样式



const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .cp)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q)(_ref => {
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
  } = (0,_ui_context_AccountContext__WEBPACK_IMPORTED_MODULE_3__/* .useAccountContext */ .wB)();
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_18__/* .useLocation */ .IT)();
  const activeToken = (_location$state = location.state) === null || _location$state === void 0 ? void 0 : _location$state.activeToken;
  console.log('activeToken', activeToken);
  const [ticker, setTicker] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(activeToken === null || activeToken === void 0 ? void 0 : activeToken.tick);
  const [mintCount, setMintCount] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(1);
  const network = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_9__/* .useNetworkType */ .qS)();
  const account = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCurrentKeyring */ .Ib)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useUserPrivateKey */ .yK)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useAppDispatch */ .A)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountAddress */ .mA)();
  const [fetchedTicker, setFetchedTicker] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [completedMints, setCompletedMints] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0);
  const [errorOccurred, setErrorOccurred] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [isMinting, setIsMinting] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
  const [isParallelMinting, setIsParallelMinting] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(true); // 默认为并行mint

  // 新增：mint阶段状态
  const [mintPhase, setMintPhase] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)('idle');
  const [phaseProgress, setPhaseProgress] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0); // 当前阶段的进度

  // 新增：进程控制状态
  const [currentMintProcess, setCurrentMintProcess] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(null);
  const [isTerminating, setIsTerminating] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);

  // 新增：网络状态监听
  const [isOnline, setIsOnline] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(navigator.onLine);
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .i)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .w)();
  const [fee, setFee] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(0.3); // 默认为并行模式的手续费
  const [progressText, setprogressText] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)("");
  const balance = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAccountBalance */ .Id)();
  const {
    rpcConnectStatus
  } = (0,_ui_context_RPCStatus__WEBPACK_IMPORTED_MODULE_4__/* .useRPCStatusContext */ .U)();

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
        result = await fetch("https://api.kasplex.org/v1/krc20/token/".concat(ticker));
      } else {
        result = await fetch("https://tn10api.kasplex.org/v1/krc20/token/".concat(ticker));
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
      const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_mint_back */ .Wy)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, fee);
      if (!result.status) {
        setSendback(false);
        setprogressText("");
        tools.toastError('An error occurred during refund process.');
        return;
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

  // 重置所有loading状态的通用函数
  const resetLoadingStates = () => {
    setSending(false);
    setIsMinting(false);
    setprogressText("");
    setMintPhase('idle');
    setPhaseProgress(0);
    setCurrentMintProcess(null);
    setIsTerminating(false);
  };

  // 网络状态监听
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    const handleOnline = () => {
      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log('Network offline detected');
      setIsOnline(false);
      // 如果正在mint且网络断开，立即触发terminate
      if ((isMinting || sending) && !isTerminating) {
        console.log('Network disconnected during mint, auto-terminating...');
        tools.toastError('Network disconnected! Auto-terminating mint process...');
        // 立即执行terminate，不等待
        setTimeout(() => terminateMintProcess('network'), 0);
      }
    };
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, [isMinting, sending, isTerminating]); // 依赖这些状态

  // 新增：终止当前mint进程
  const terminateMintProcess = async function () {
    let reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'manual';
    // 如果没有正在进行的进程，或者已经在终止中，直接返回
    if (!currentMintProcess && !isMinting && !sending || isTerminating) return;
    setIsTerminating(true);
    const isNetworkIssue = reason === 'network';
    const terminateMessage = isNetworkIssue ? "Network disconnected, terminating mint process..." : "Terminating mint process...";
    setprogressText(terminateMessage);
    try {
      // 清理所有定时器和间隔器
      if (currentMintProcess !== null && currentMintProcess !== void 0 && currentMintProcess.interval) {
        clearInterval(currentMintProcess.interval);
      }
      if (currentMintProcess !== null && currentMintProcess !== void 0 && currentMintProcess.timeout) {
        clearTimeout(currentMintProcess.timeout);
      }
      // 清理阶段模拟的所有timeout
      if (currentMintProcess !== null && currentMintProcess !== void 0 && currentMintProcess.phaseTimeouts) {
        currentMintProcess.phaseTimeouts.forEach(timeout => {
          clearTimeout(timeout);
        });
      }

      // 重置UI状态
      setActiveToken(null);
      setMintPhase('refund');
      setprogressText(isNetworkIssue ? "Network issue detected, processing refund..." : "Process terminated, processing refund...");
      setPhaseProgress(0);

      // 执行refund
      setTimeout(async () => {
        setPhaseProgress(50);
        await handleMintBack();
        refetchList();
        setMintPhase('completed');
        setPhaseProgress(100);
        resetLoadingStates();
        const successMessage = isNetworkIssue ? 'Mint process terminated due to network issue and refunded successfully.' : 'Mint process terminated and refunded successfully.';
        tools.toastSuccess(successMessage);
      }, 1000);
    } catch (error) {
      const errorMessage = isNetworkIssue ? 'Network error during termination, but refund will still be processed.' : 'Error terminating process, but refund will still be processed.';
      tools.toastError(errorMessage);
      resetLoadingStates();
    }
  };

  // 组件卸载时重置状态
  (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(() => {
    return () => {
      resetLoadingStates();
    };
  }, []);

  // 并行mint函数
  const handleParallelMint = async () => {
    // 检查网络状态
    if (!isOnline) {
      return tools.toastError('Network is disconnected. Please check your connection and try again.');
    }
    if (!mintCount || mintCount < 1) {
      tools.toastError('Please enter a valid number of mints.');
      return;
    }
    if (!ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed") {
      tools.toastError('Please enter a valid ticker.');
      return;
    }
    const minFee = isParallelMinting ? 0.3 : 0.01;
    if (!fee || fee < minFee) {
      return tools.toastError("Please enter a valid fee. Minimum ".concat(minFee, " KAS required for ").concat(isParallelMinting ? 'parallel' : 'serial', " mode."));
    }

    // 如果手续费大于余额，则提示错误
    if (totalFee > Number(balance.amount)) {
      return tools.toastError('Insufficient balance for fee.');
    }
    setprogressText("Initializing parallel mint...");
    setSending(true);
    setCompletedMints(() => 0); // 重置完成次数
    setErrorOccurred(false); // 重置错误状态
    setIsMinting(false); // 初始阶段不显示进度条
    setMintPhase('commission'); // 开始commission阶段
    setPhaseProgress(0);
    console.log('fee', fee);
    try {
      const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? 'testnet-10' : '';

      // 模拟阶段进度
      const simulatePhaseProgress = () => {
        // Commission阶段 (0-2秒)
        const timeout1 = setTimeout(() => {
          if (!navigator.onLine) {
            console.log('Network disconnected during commission phase');
            setIsOnline(false);
            return;
          }
          setprogressText("Paying commission fees...");
          setPhaseProgress(50);
        }, 500);
        const timeout2 = setTimeout(() => {
          if (!navigator.onLine) {
            console.log('Network disconnected during commit phase');
            setIsOnline(false);
            return;
          }
          setMintPhase('commit');
          setprogressText("Creating commit transaction...");
          setPhaseProgress(0);
        }, 2000);

        // Commit阶段 (2-4秒)
        const timeout3 = setTimeout(() => {
          if (!navigator.onLine) {
            console.log('Network disconnected during commit phase');
            setIsOnline(false);
            return;
          }
          setPhaseProgress(50);
        }, 3000);
        const timeout4 = setTimeout(() => {
          if (!navigator.onLine) {
            console.log('Network disconnected before reveal phase');
            setIsOnline(false);
            return;
          }
          console.log('Entering reveal phase');
          setMintPhase('reveal');
          setprogressText("Executing reveal transactions...");
          setPhaseProgress(0);
          setIsMinting(true); // 只在reveal阶段显示mint进度条
          setCompletedMints(0); // 重置进度计数
        }, 4000);

        // 保存所有timeout以便清理
        setCurrentMintProcess(prev => ({
          ...prev,
          phaseTimeouts: [timeout1, timeout2, timeout3, timeout4]
        }));
      };
      simulatePhaseProgress();

      // 创建进度监听机制
      let progressCheckInterval = null;
      let startProgressMonitoring = null;

      // 在reveal阶段开始后，模拟进度更新
      startProgressMonitoring = setTimeout(() => {
        // 再次检查网络状态
        if (!navigator.onLine) {
          console.log('Network disconnected before starting progress monitoring');
          setIsOnline(false);
          return;
        }
        let currentProgress = 0;
        console.log('Starting progress monitoring for parallel mint');
        progressCheckInterval = setInterval(() => {
          console.log("Progress check: currentProgress=".concat(currentProgress, ", mintCount=").concat(mintCount, ", isOnline=").concat(navigator.onLine));

          // 检查网络状态，如果断网立即停止进度更新并触发terminate
          if (!navigator.onLine) {
            console.log('Network disconnected during progress simulation, stopping...');
            if (progressCheckInterval) {
              clearInterval(progressCheckInterval);
              progressCheckInterval = null;
            }
            // 触发网络断开的terminate
            setIsOnline(false);
            return;
          }
          if (currentProgress < mintCount) {
            // 模拟进度增长（每1秒增加一个）
            currentProgress++;
            console.log("Updating progress to: ".concat(currentProgress));
            setCompletedMints(currentProgress);
          } else {
            // 达到最大值时清理定时器
            if (progressCheckInterval) {
              clearInterval(progressCheckInterval);
              progressCheckInterval = null;
            }
          }
        }, 1000); // 每秒更新一次

        // 设置进程引用以便终止
        setCurrentMintProcess(prev => ({
          ...prev,
          interval: progressCheckInterval,
          timeout: startProgressMonitoring
        }));
      }, 4000); // 4秒后开始（reveal阶段开始时）

      // 使用新的并行mint函数
      const result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_mint_parallel */ .ig)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, fee, mintCount);

      // 清理进度监听
      if (progressCheckInterval) {
        clearInterval(progressCheckInterval);
      }
      if (startProgressMonitoring) {
        clearTimeout(startProgressMonitoring);
      }
      console.log('Parallel mint result:', result);

      // 立即设置最终的mint进度
      if (result && result.successCount !== undefined) {
        console.log("Setting final progress: ".concat(result.successCount, "/").concat(mintCount));
        setCompletedMints(result.successCount);
      }
      if (result.status && result.successCount > 0) {
        // 为每个成功的mint添加交易记录
        const successfulResults = result.results.filter(r => r.success);
        for (let i = 0; i < successfulResults.length; i++) {
          var _mintResult$result;
          const mintResult = successfulResults[i];
          const hash = mintResult && 'result' in mintResult && ((_mintResult$result = mintResult.result) === null || _mintResult$result === void 0 ? void 0 : _mintResult$result.hash) || "parallel-mint-".concat(i);
          dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__/* .transactionsActions */ .C4.updateNativeTxs({
            from: address,
            info: {
              ...fetchedTicker,
              type: _ui_types__WEBPACK_IMPORTED_MODULE_11__/* .TXTypes */ .S.Mint,
              amount: fetchedTicker.lim,
              from: address,
              to: '',
              hash: hash,
              time: dayjs__WEBPACK_IMPORTED_MODULE_13___default()().valueOf(),
              status: 'success'
            }
          }));
        }
        setCompletedMints(result.successCount);
      }
      console.log("Parallel mint completed: ".concat(result.successCount, " success, ").concat(result.failureCount, " failed"));
      resetLoadingStates();

      // 无论成功还是失败，都执行refund
      setActiveToken(null);
      setMintPhase('refund');
      setprogressText("Processing refund...");
      setPhaseProgress(0);

      // 等待1秒后自动触发refund
      setTimeout(async () => {
        setPhaseProgress(50);
        await handleMintBack();
        refetchList();
        setMintPhase('completed');
        setPhaseProgress(100);
        if (result.successCount === mintCount) {
          // 全部成功
          const rawtxinfo = {
            "to": address,
            "amountSompi": parseInt(fetchedTicker.lim) * mintCount / new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c(10).pow(8 - fetchedTicker.dec).toNumber(),
            "tick": ticker
          };
          console.log(rawtxinfo);
          navigate('TxSuccessScreen', {
            txid: "Multi-Transaction",
            rawtx: rawtxinfo,
            type: "Mint"
          });
        } else if (result.successCount > 0) {
          // 部分成功
          const rawtxinfo = {
            "to": address,
            "amountSompi": parseInt(fetchedTicker.lim) * result.successCount / new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c(10).pow(8 - fetchedTicker.dec).toNumber(),
            "tick": ticker
          };
          console.log(rawtxinfo);
          navigate('TxSuccessScreen', {
            txid: "Multi-Transaction",
            rawtx: rawtxinfo,
            type: "Mint"
          });
        }
      }, 1000);
      if (result.successCount === mintCount) {
        tools.toastSuccess('All mints completed successfully! Auto-refunding in a while ...');
      } else if (result.successCount > 0) {
        setMintCount(() => result.failureCount); // 更新 mintCount 为剩余未完成的数量
        tools.toastSuccess("".concat(result.successCount, " mints completed successfully, ").concat(result.failureCount, " failed. Auto-refunding in a while ..."));
      } else {
        tools.toastError("All mints failed. Auto-refunding in a while ...");
      }
    } catch (error) {
      // 即使发生错误也要执行refund
      setActiveToken(null);
      setMintPhase('refund');
      setprogressText("Error occurred, processing refund...");
      setPhaseProgress(0);
      setTimeout(async () => {
        setPhaseProgress(50);
        await handleMintBack();
        refetchList();
        setMintPhase('completed');
        setPhaseProgress(100);
        resetLoadingStates();
      }, 1000);
      tools.toastError('An error occurred during parallel minting. Auto-refunding in a while ...');
    }
  };
  const handleMint = async () => {
    // 检查网络状态
    if (!isOnline) {
      return tools.toastError('Network is disconnected. Please check your connection and try again.');
    }
    if (!mintCount || mintCount < 1) {
      tools.toastError('Please enter a valid number of mints.');
      return;
    }
    if (!ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed") {
      tools.toastError('Please enter a valid ticker.');
      return;
    }
    const minFee = isParallelMinting ? 0.3 : 0.01;
    if (!fee || fee < minFee) {
      return tools.toastError("Please enter a valid fee. Minimum ".concat(minFee, " KAS required for ").concat(isParallelMinting ? 'parallel' : 'serial', " mode."));
    }

    // 如果手续费大于余额，则提示错误
    if (totalFee > Number(balance.amount)) {
      return tools.toastError('Insufficient balance for fee.');
    }
    setprogressText("Initializing serial mint...");
    setSending(true);
    setCompletedMints(() => 0); // 重置完成次数
    setErrorOccurred(false); // 重置错误状态
    setIsMinting(false); // 初始阶段不显示进度条
    setMintPhase('commission'); // 开始commission阶段
    setPhaseProgress(0);
    console.log('fee', fee);
    try {
      let MintsNum = 0;
      for (let i = 0; i < mintCount; i++) {
        const networkName = network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Mainnet ? 'mainnet' : network === kaspa_wasm__WEBPACK_IMPORTED_MODULE_19__.NetworkType.Testnet ? 'testnet-10' : '';
        let retryCount = 0;
        const maxRetries = 5;
        let result;

        // 模拟串行mint的阶段进度
        const simulateSerialPhaseProgress = () => {
          // Commission阶段 (0-1秒)
          setTimeout(() => {
            setprogressText("Paying commission fees...");
            setPhaseProgress(100);
          }, 500);
          setTimeout(() => {
            setMintPhase('reveal');
            setprogressText("Processing mint transactions...");
            setPhaseProgress(0);
            setIsMinting(true); // 开始显示mint进度条
          }, 1000);
        };
        simulateSerialPhaseProgress();

        // 重试循环
        while (retryCount < maxRetries && completedMints < mintCount) {
          result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_mint_once */ .yo)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, ticker, fee, mintCount - MintsNum);
          if (result.status) {
            var _result;
            // 成功时的处理逻辑
            dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__/* .transactionsActions */ .C4.updateNativeTxs({
              from: address,
              info: {
                ...fetchedTicker,
                type: _ui_types__WEBPACK_IMPORTED_MODULE_11__/* .TXTypes */ .S.Mint,
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
            console.log("Minting failed, retrying... (".concat(i + 1, ": ").concat(retryCount, "/").concat(maxRetries, ")"));
            if (retryCount === maxRetries) {
              var _result2;
              // 达到最大重试次数后的失败处理
              setErrorOccurred(true);
              // 重置loading状态，允许用户重新尝试
              resetLoadingStates();

              // 即使失败也要执行refund
              setActiveToken(null);
              setMintPhase('refund');
              setprogressText("Error occurred, processing refund...");
              setPhaseProgress(0);
              setTimeout(async () => {
                setPhaseProgress(50);
                await handleMintBack();
                refetchList();
                setMintPhase('completed');
                setPhaseProgress(100);
              }, 1000);

              // mint第几个token失败
              tools.toastError("Failed after ".concat(maxRetries, " retries. Auto-refunding in a while ..."));
              dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_10__/* .transactionsActions */ .C4.updateNativeTxs({
                from: address,
                info: {
                  ...fetchedTicker,
                  type: _ui_types__WEBPACK_IMPORTED_MODULE_11__/* .TXTypes */ .S.Mint,
                  amount: fetchedTicker.lim,
                  from: address,
                  to: '',
                  hash: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.hash,
                  time: dayjs__WEBPACK_IMPORTED_MODULE_13___default()().valueOf(),
                  status: 'Failed'
                }
              }));
              return; // 直接返回，不继续执行后续mint
            }
            // 可选：添加重试之间的延迟
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1秒延迟
          }
        }
      }
      // 如果没有错误并且所有 mint 完成，跳转到成功页面
      // 结束进度条显示
      resetLoadingStates();
      // 无论成功还是失败，都执行refund
      setActiveToken(null);
      setMintPhase('refund');
      setprogressText("Processing refund...");
      setPhaseProgress(0);
      setTimeout(() => setPhaseProgress(50), 500);
      await handleMintBack();
      refetchList();
      setMintPhase('completed');
      setPhaseProgress(100);
      if (MintsNum === mintCount) {
        // 全部成功
        const rawtxinfo = {
          "to": address,
          "amountSompi": parseInt(fetchedTicker.lim) * mintCount / new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c(10).pow(8 - fetchedTicker.dec).toNumber(),
          "tick": ticker
        };
        console.log(rawtxinfo);
        navigate('TxSuccessScreen', {
          txid: "Multi-Transaction",
          rawtx: rawtxinfo,
          type: "Mint"
        });
      } else if (MintsNum > 0) {
        // 部分成功
        const errorNum = mintCount - MintsNum;
        setMintCount(() => errorNum); // 更新 mintCount 为剩余未完成的数量
        const rawtxinfo = {
          "to": address,
          "amountSompi": parseInt(fetchedTicker.lim) * MintsNum / new bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .c(10).pow(8 - fetchedTicker.dec).toNumber(),
          "tick": ticker
        };
        console.log(rawtxinfo);
        navigate('TxSuccessScreen', {
          txid: "Multi-Transaction",
          rawtx: rawtxinfo,
          type: "Mint"
        });
        tools.toastSuccess("".concat(MintsNum, " mints completed successfully, ").concat(errorNum, " failed. Refunded successfully."));
      } else {
        // 全部失败
        const errorNum = mintCount - MintsNum;
        setMintCount(() => errorNum);
        tools.toastError("All mints failed. Refunded successfully.");
      }
    } catch (error) {
      // 即使发生错误也要执行refund
      setActiveToken(null);
      setMintPhase('refund');
      setprogressText("Error occurred, processing refund...");
      setPhaseProgress(0);
      setTimeout(async () => {
        setPhaseProgress(50);
        await handleMintBack();
        refetchList();
        setMintPhase('completed');
        setPhaseProgress(100);
        resetLoadingStates();
      }, 1000);
      tools.toastError('An error occurred during minting. Auto-refunding in a while ...');
    }
  };
  const [btnText, disabled] = (0,react__WEBPACK_IMPORTED_MODULE_15__.useMemo)(() => {
    if (!isOnline) {
      return ['Network Disconnected', true];
    } else if (!ticker) {
      return [isParallelMinting ? 'Parallel Mint ALL' : 'Mint', true];
    } else if ((0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || (fetchedTicker === null || fetchedTicker === void 0 ? void 0 : fetchedTicker.mod) !== 'mint') {
      return [isParallelMinting ? 'Parallel Mint ALL' : 'Mint', true];
    } else if (sending) {
      return [isParallelMinting ? 'Parallel Minting...' : 'Minting...', true];
    } else {
      return [isParallelMinting ? 'Parallel Mint ALL' : 'Mint', false];
    }
  }, [ticker, fetchedTicker, sending, isParallelMinting, isOnline]);
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
      feeValue = isParallelMinting ? 0.3 : 0.01; // 根据模式设置默认值
    }
    setFee(feeValue); // 更新手续费状态
    // saveStateToLocalStorage();  // 保存fee状态
  };

  // 处理并行模式切换
  const handleParallelModeChange = event => {
    const isParallel = event.target.checked;
    setIsParallelMinting(isParallel);

    // 自动调整手续费到推荐值
    if (isParallel && fee < 0.3) {
      setFee(0.3);
    } else if (!isParallel && fee >= 0.3) {
      setFee(0.01);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      title: "Mint ".concat((activeToken === null || activeToken === void 0 ? void 0 : activeToken.tick) || ''),
      onBack: () => navigate('ToolScreen', null, true),
      parentName: "ToolScreen",
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .NodeStatus */ .s9, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      classname: "!px-4 !pb-0",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
        className: "space-y-4",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          variant: "body2",
          color: "textSecondary",
          children: ["Commission fees (1 KAS total) will be paid upfront before minting to reduce transaction complexity and improve success rates.", isParallelMinting ? " Parallel mode: Each mint takes 1.3 KAS (1 KAS base + 0.3 KAS priority fee) for faster confirmation and reduced orphan blocks." : " Serial mode: Each mint takes 1.01 KAS (1 KAS base + priority fee) with sequential processing.", " If the mint process is interrupted, you can restart the minting process."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          variant: "body2",
          color: "textSecondary",
          children: "Beware, if you have UTXO compound recently, you have to wait the compound success, otherwise the minting may failed."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Ticker"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "text",
            value: ticker,
            name: "ticker",
            placeholder: "ticker",
            fullWidth: true,
            autoComplete: "off",
            size: "small",
            endAdornment: !(0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) && fetchedTicker.state === "deployed" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c, {
              color: "primary"
            }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
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
            error: !rpcConnectStatus || !ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed"
          }), rpcConnectStatus ? !ticker || ticker.length < 4 || (0,lodash__WEBPACK_IMPORTED_MODULE_14__.isEmpty)(fetchedTicker) || fetchedTicker.state !== "deployed" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error",
            children: "Invalid ticker"
          }) : null : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error",
            children: "RPC Disconnected"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Mint Count"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "number",
            size: "small",
            value: mintCount,
            onChange: handleMintCountChange,
            fullWidth: true,
            placeholder: "Enter number of mints"
          }), !mintCount || mintCount < 1 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error",
            children: "Invalid Count"
          }) : '']
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Priority Fee (KAS)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "number",
            value: fee,
            name: "fee",
            size: "small",
            placeholder: "Fee",
            fullWidth: true,
            autoComplete: "off",
            onChange: handleFeeChange
          }), (() => {
            const minFee = isParallelMinting ? 0.3 : 0.01;
            if (!fee || fee < minFee) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
                color: "error",
                children: ["Invalid Fee (Minimum ", minFee, " KAS required for ", isParallelMinting ? 'parallel' : 'serial', " mode)"]
              });
            }
            if (isParallelMinting && fee < 0.3) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
                sx: {
                  color: 'orange'
                },
                children: "For parallel minting, minimum 0.3 KAS is recommended to reduce orphan block rate"
              });
            }
            if (!isParallelMinting && fee >= 0.3) {
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
                sx: {
                  color: 'orange'
                },
                children: "High fee detected. For serial mode, 0.01 KAS is usually sufficient"
              });
            }
            return '';
          })()]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          className: "!mt-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            className: "text-xs text-gray-400",
            children: isParallelMinting ? "Parallel mode: Minimum 0.3 KAS required for faster confirmation, may failed when network condition is not ideal" : "Serial mode: Minimum 0.01 KAS required. If mint fails, increase the Priority Fee and try again"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-2 !mt-4",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_FormControlLabel__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .c, {
            control: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Checkbox__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .c, {
              checked: isParallelMinting,
              onChange: handleParallelModeChange,
              color: "primary"
            }),
            label: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
                variant: "body2",
                fontWeight: 600,
                children: "Parallel Minting"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
                variant: "caption",
                color: "textSecondary",
                display: "block",
                children: "Send total funds to staging address, then execute all mints in parallel from staging address. Maximum speed and efficiency. Auto-refund will trigger after completion."
              })]
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          className: "!mt-2",
          textAlign: 'center',
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)("span", {
            className: "text-xs text-gray-400",
            children: ["Total Fee: ", totalFee, " KAS"]
          })
        }), (isMinting || sending || !isOnline) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          sx: {
            marginTop: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 1
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
            sx: {
              width: 8,
              height: 8,
              borderRadius: '50%',
              backgroundColor: isOnline ? 'green' : 'red'
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            variant: "caption",
            sx: {
              color: isOnline ? 'green' : 'red'
            },
            children: isOnline ? 'Network Connected' : 'Network Disconnected - Mint Disabled'
          })]
        }), mintPhase !== 'idle' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          sx: {
            marginTop: 2
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            variant: "body2",
            sx: {
              marginBottom: 1
            },
            children: ["Phase: ", mintPhase.charAt(0).toUpperCase() + mintPhase.slice(1), mintPhase !== 'reveal' && " (".concat(phaseProgress, "%)")]
          }), mintPhase !== 'reveal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
            variant: "determinate",
            value: phaseProgress,
            sx: {
              marginBottom: 1
            }
          })]
        }), isMinting && mintPhase === 'reveal' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            variant: "body2",
            sx: {
              marginTop: 1
            },
            children: [completedMints, " / ", mintCount, " Minted"]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_LinearProgress__WEBPACK_IMPORTED_MODULE_27__/* ["default"] */ .c, {
            variant: "determinate",
            value: completedMints / mintCount * 100,
            sx: {
              marginTop: 2
            }
          })]
        }), !!progressText && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          variant: "body2",
          sx: {
            marginTop: 1
          },
          children: progressText
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
      className: "m-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
        fullWidth: true,
        size: "medium",
        variant: "outlined",
        onClick: handleMintBack,
        disabled: !rpcConnectStatus || isMinting
        // sx={{ mb: 1 }}
        ,
        children: sendback ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
          children: ["Return Fund", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
            size: 16,
            sx: {
              ml: 1
            }
          })]
        }) : "Return Fund"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
        sx: {
          display: 'flex',
          gap: 1
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
          fullWidth: true,
          size: "medium",
          variant: "contained",
          onClick: isParallelMinting ? handleParallelMint : handleMint,
          disabled: !rpcConnectStatus || isMinting || disabled || isTerminating || !isOnline,
          children: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.Fragment, {
            children: [btnText, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
              size: 16,
              sx: {
                ml: 1
              }
            })]
          }) : btnText
        }), (isMinting || sending) && !isTerminating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
          size: "medium",
          variant: "outlined",
          color: "error",
          onClick: () => terminateMintProcess('manual'),
          sx: {
            minWidth: '100px'
          },
          children: "Terminate"
        }), isTerminating && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
          size: "medium",
          variant: "outlined",
          disabled: true,
          sx: {
            minWidth: '100px'
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
            size: 16
          })
        })]
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 95215:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ TXTypes)
/* harmony export */ });
let TXTypes = /*#__PURE__*/function (TXTypes) {
  TXTypes["Mint"] = "Mint";
  TXTypes["Deploy"] = "Deploy";
  TXTypes["TransferKrc20"] = "TransferKrc20";
  TXTypes["TransferNative"] = "TransferNative";
  return TXTypes;
}({});

/***/ })

}]);