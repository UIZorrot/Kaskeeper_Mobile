"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2296],{

/***/ 62296:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Deploy)
/* harmony export */ });
/* harmony import */ var _background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60172);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23848);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(77980);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(24468);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3204);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(60440);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17534);
/* harmony import */ var _ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(96900);
/* harmony import */ var _ui_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(95215);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(48818);
/* harmony import */ var _mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(83603);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(48344);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(37656);
/* harmony import */ var _mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(75776);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(87136);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(92792);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(70884);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(32496);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5320);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(96522);
/* harmony import */ var kaspa_wasm__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(21704);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(92469);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(96651);
/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(55043);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__]);
([_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__, _ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



























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
function Deploy() {
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .w)();
  const currentNetworkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useNetworkType */ .qS)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useCurrentKeyring */ .Ib)();
  const {
    privateKey
  } = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useUserPrivateKey */ .yK)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_3__/* .useNavigate */ .i)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_5__/* .useAppDispatch */ .A)();
  const address = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountAddress */ .mA)();
  const [isIssue, setIsIssue] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const handleDeploy = async () => {
    var _result;
    setSending(true);
    const refactorSupply = new bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c(values.maxSupply).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c(10).pow(values.decimals)).toString();
    const refactorPerMint = new bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c(values.perMint).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c(10).pow(values.decimals)).toString();
    const refactorPremine = new bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c(values.preMintAmount).times(new bignumber_js__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .c(10).pow(values.decimals)).toString();
    // privateKey network, ticker , priorityFeeValue, max, lim

    const networkName = currentNetworkType === kaspa_wasm__WEBPACK_IMPORTED_MODULE_18__.NetworkType.Mainnet ? 'mainnet' : currentNetworkType === kaspa_wasm__WEBPACK_IMPORTED_MODULE_18__.NetworkType.Testnet ? 'testnet-10' : 'devnet';
    let result;
    if (isIssue) {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_deploy_issue */ ._g)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, values.ticker, values.fee, refactorSupply, refactorPerMint, values.decimals, Number(refactorPremine));
    } else {
      result = await (0,_background_krc20_krc20action__WEBPACK_IMPORTED_MODULE_0__/* .krc20_deploy */ .ov)(privateKey === null || privateKey === void 0 ? void 0 : privateKey.hex, networkName, values.ticker, values.fee, refactorSupply, refactorPerMint, values.decimals, Number(refactorPremine));
    }
    if ((_result = result) !== null && _result !== void 0 && _result.status) {
      var _result2, _result3;
      setSending(false);
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_8__/* .transactionsActions */ .C4.updateNativeTxs({
        from: address,
        info: {
          type: _ui_types__WEBPACK_IMPORTED_MODULE_9__/* .TXTypes */ .S.Deploy,
          amount: '',
          max: refactorSupply,
          lim: refactorPerMint,
          pre: refactorPremine,
          dec: values.decimals,
          tick: values.ticker,
          from: address,
          to: '',
          hash: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_12___default()().valueOf(),
          status: 'success'
        }
      }));
      const rawtxinfo = {
        "to": address,
        "amountSompi": refactorSupply || parseInt((0,_ui_utils__WEBPACK_IMPORTED_MODULE_10__/* .parseUnits */ ._s)(refactorSupply, values.decimals)),
        "tick": values.ticker,
        "mode": isIssue ? "issue" : ''
      };
      navigate('TxSuccessScreen', {
        txid: (_result3 = result) === null || _result3 === void 0 ? void 0 : _result3.hash,
        rawtx: rawtxinfo,
        type: "Deploy"
      });
    } else {
      var _result4;
      setSending(false);
      tools.toastError("Failed to deploy KRC20");
      dispatch(_ui_state_transactions_reducer__WEBPACK_IMPORTED_MODULE_8__/* .transactionsActions */ .C4.updateNativeTxs({
        from: address,
        info: {
          type: _ui_types__WEBPACK_IMPORTED_MODULE_9__/* .TXTypes */ .S.Deploy,
          amount: '',
          max: refactorSupply,
          lim: refactorPerMint,
          pre: refactorPremine,
          dec: values.decimals,
          tick: values.ticker,
          from: address,
          to: '',
          hash: (_result4 = result) === null || _result4 === void 0 ? void 0 : _result4.hash,
          time: dayjs__WEBPACK_IMPORTED_MODULE_12___default()().valueOf(),
          status: 'Failed'
        }
      }));
    }
  };
  const {
    values,
    handleChange,
    handleBlur,
    errors,
    handleSubmit
  } = (0,formik__WEBPACK_IMPORTED_MODULE_19__/* .useFormik */ .KO)({
    initialValues: {
      ticker: '',
      maxSupply: 100000000,
      decimals: 8,
      perMint: 100,
      preMintAmount: 0,
      fee: 0.01
    },
    validationSchema,
    onSubmit: () => {
      console.log('values');
      if (!tickerValid) return;
      handleDeploy();
    }
  });
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [sending, setSending] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const [tickerValid, setTickerValid] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useState)(false);
  const checkTickerValid = (0,react__WEBPACK_IMPORTED_MODULE_14__.useCallback)(async () => {
    var _jsonData$result, _jsonData$result$;
    if (!values.ticker || errors !== null && errors !== void 0 && errors.ticker || values.ticker.length < 4 || values.ticker.length > 6) {
      return;
    }
    setLoading(true);
    let result;
    if (currentNetworkType == kaspa_wasm__WEBPACK_IMPORTED_MODULE_18__.NetworkType.Mainnet) {
      result = await fetch("https://api.kasplex.org/v1/krc20/token/".concat(values.ticker));
    } else {
      result = await fetch("https://tn10api.kasplex.org/v1/krc20/token/".concat(values.ticker));
    }
    const jsonData = await result.json();
    setTickerValid((jsonData === null || jsonData === void 0 ? void 0 : (_jsonData$result = jsonData.result) === null || _jsonData$result === void 0 ? void 0 : (_jsonData$result$ = _jsonData$result[0]) === null || _jsonData$result$ === void 0 ? void 0 : _jsonData$result$.state) === 'unused');
    setLoading(false);
  }, [values.ticker, errors]);
  (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {
    if (!values.ticker || errors !== null && errors !== void 0 && errors.ticker || values.ticker.length < 4 || values.ticker.length > 6) {
      return;
    }
    checkTickerValid();
  }, [values.ticker, errors]);
  const [btnText, disabled] = (0,react__WEBPACK_IMPORTED_MODULE_14__.useMemo)(() => {
    const checkValues = Object.entries(values).filter(item => !['fee', 'preMintAmount'].includes(item[0])).some(item => !item[1]);
    if ((0,lodash__WEBPACK_IMPORTED_MODULE_13__.isEmpty)(errors) && !checkValues) {
      return ['Deploy', false];
    } else if (sending) {
      return ['Deploy', true];
    } else if (!values.ticker && !tickerValid) {
      return ['Deploy', true];
    } else {
      return ['Deploy', false];
    }
  }, [values, errors, sending, tickerValid]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      title: "Deploy Krc20",
      onBack: () => navigate('ToolScreen', null, true),
      parentName: "ToolScreen",
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .NodeStatus */ .s9, {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      classname: "!px-0 !pb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
        className: "space-y-4 !px-4 flex-1 !overflow-y-auto",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          variant: "body2",
          color: "textSecondary",
          children: "It takes 1 KAS as commission and 1000 KAS as gasfee to deploy."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: isIssue ? 'Name' : 'Ticker'
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "text",
            name: "ticker",
            placeholder: isIssue ? 'Name' : 'Ticker',
            fullWidth: true,
            value: values.ticker,
            onChange: handleChange,
            onBlur: handleBlur,
            endAdornment: tickerValid ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_icons_material_CheckCircleOutline__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .c, {
              color: "primary"
            }) : loading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
              color: "primary",
              size: 20
            }) : 'Deployed',
            error: Boolean(values.ticker && !tickerValid || errors.ticker)
          }), errors.ticker ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error.main",
            className: "pl-4",
            children: errors.ticker
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Max Supply: 100M"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "text",
            name: "maxSupply",
            placeholder: "maxSupply",
            fullWidth: true,
            value: values.maxSupply,
            onChange: handleChange,
            onBlur: handleBlur,
            endAdornment: values.decimals ? '' : '',
            error: Boolean(values.maxSupply && errors.maxSupply)
          }), errors.maxSupply ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error.main",
            className: "pl-4",
            children: errors.maxSupply
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Decimals"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "text",
            name: "decimals",
            placeholder: "decimals",
            fullWidth: true,
            value: values.decimals,
            onChange: handleChange,
            onBlur: handleBlur,
            error: Boolean(values.decimals && errors.decimals)
          }), errors.decimals ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error.main",
            className: "pl-4",
            children: errors.decimals
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Amount per mint: 1K"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "text",
            name: "perMint",
            placeholder: "perMint",
            fullWidth: true,
            value: values.perMint,
            onChange: handleChange,
            onBlur: handleBlur,
            error: Boolean(values.perMint && errors.perMint)
          }), errors.perMint ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error.main",
            className: "pl-4",
            children: errors.perMint
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Pre-allocation amount  (Optional): "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "text",
            name: "preMintAmount",
            placeholder: "preMintAmount",
            fullWidth: true,
            value: values.preMintAmount,
            onChange: handleChange,
            onBlur: handleBlur
            //endAdornment="optional"
            ,
            error: Boolean(values.preMintAmount && errors.preMintAmount)
          }), errors.preMintAmount ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error.main",
            className: "pl-4",
            children: errors.preMintAmount
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-1 flex items-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Issue Mode: "
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .c, {
            value: isIssue,
            onChange: e => setIsIssue(e.target.checked)
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .c, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            children: "Priority Fee (KAS)"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .c, {
            type: "number",
            value: values.fee,
            name: "fee",
            size: "small",
            placeholder: "Fee",
            fullWidth: true,
            autoComplete: "off",
            onChange: handleChange,
            error: Boolean(values.fee && errors.fee)
          }), errors.fee ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
            color: "error.main",
            className: "pl-4",
            children: errors.fee
          }) : null]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .c, {
          className: "!mt-1",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("span", {
            className: "text-xs text-gray-400",
            children: "If deploy fails, increase the Priority Fee and try again"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)("p", {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(StyledButton, {
        variant: "contained",
        color: "primary",
        size: "medium",
        className: "!mx-4",
        disabled: disabled || sending,
        onClick: () => handleSubmit(),
        endIcon: sending ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__.jsx)(_mui_material_CircularProgress__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .c, {
          size: 20,
          color: "inherit"
        }) : null,
        children: btnText
      })]
    })]
  });
}
const validationSchema = yup__WEBPACK_IMPORTED_MODULE_15__/* .object */ .kt({
  ticker: yup__WEBPACK_IMPORTED_MODULE_15__/* .string */ .Qb().min(4, 'min 4').max(6, 'max 6').required('Need Ticker name'),
  maxSupply: yup__WEBPACK_IMPORTED_MODULE_15__/* .number */ .CQ().required('Need max supply').positive('Issue amount must be greater than zero').min(1),
  decimals: yup__WEBPACK_IMPORTED_MODULE_15__/* .number */ .CQ().required('Need decimals').positive('Issue amount must be greater than zero').min(1),
  perMint: yup__WEBPACK_IMPORTED_MODULE_15__/* .number */ .CQ().required('Need Per mint amount').positive('Issue amount must be greater than zero').min(1),
  preMintAmount: yup__WEBPACK_IMPORTED_MODULE_15__/* .number */ .CQ().min(0),
  fee: yup__WEBPACK_IMPORTED_MODULE_15__/* .number */ .CQ().required('Need fee').positive('Issue amount must be greater than zero').min(0.01)
});
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