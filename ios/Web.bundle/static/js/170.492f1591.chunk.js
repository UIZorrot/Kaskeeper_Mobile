(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[170],{

/***/ 22946:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 47140:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/warning.59d3ff38.svg";

/***/ }),

/***/ 83215:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/copy.b2ed6bac.svg";

/***/ }),

/***/ 84841:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StoreTypes: () => (/* binding */ StoreTypes),
/* harmony export */   "default": () => (/* binding */ CreateHDWalletScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54431);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(7669);
/* harmony import */ var bip39__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90749);
/* harmony import */ var bitcore_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70221);
/* harmony import */ var bitcore_lib__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bitcore_lib__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(47767);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(77093);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(59577);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(17508);
/* harmony import */ var _ui_state_global_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45825);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13108);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(6757);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(3507);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_Card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(14977);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(64155);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(44675);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(14073);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(36904);
/* harmony import */ var _ui_images_common_copy_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(83215);
/* harmony import */ var _ui_images_common_warning_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(47140);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_6__, _MainRoute__WEBPACK_IMPORTED_MODULE_10__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_6__, _MainRoute__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */












// import Button from '@mui/material/Button';











const newhere = false;
function Step0(_ref) {
  let {
    contextData,
    updateContextData
  } = _ref;
  return /*#__PURE__*/_jsxs(Column, {
    gap: "lg",
    children: [/*#__PURE__*/_jsx(Text, {
      text: "Choose a wallet",
      preset: "title-bold",
      textCenter: true,
      mt: "xl"
    }), RESTORE_WALLETS.map((item, index) => {
      if (item.value == RestoreWalletType.TANGEM) return null;
      return /*#__PURE__*/_jsx(Button
      // disabled={item.value == RestoreWalletType.CORE_GOLANG_CLI}
      , {
        size: "large",
        variant: "outlined",
        color: "inherit",
        onClick: () => {
          updateContextData({
            tabType: TabType.STEP2,
            restoreWalletType: item.value
          });
        },
        children: /*#__PURE__*/_jsx(Text, {
          text: item.name
        })
      }, index);
    })]
  });
}
function Step1_Create(_ref2) {
  let {
    contextData,
    updateContextData
  } = _ref2;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_15__/* .useTranslation */ .B)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .D)();
  const [words, setWords] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [wordCount, setWordCount] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(12);
  const init = async () => {
    const _mnemonics = await wallet.generatePreMnemonic(wordCount);
    const numbers = new Set([Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)]);
    const randomNumbers = Array.from(numbers).sort((a, b) => a - b);
    console.log('random value', randomNumbers);
    updateContextData({
      mnemonics: _mnemonics,
      randomKeys: randomNumbers
    });
    setWords(_mnemonics.split(' '));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    init();
  }, [wordCount]);
  function copy(str) {
    (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .copyToClipboard */ .lW)(str).then(() => {
      tools.toastSuccess(t('Copied'));
    });
  }
  const btnClick = () => {
    updateContextData({
      step1Completed: true
    });
    updateContextData({
      tabType: TabType.STEP2
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      className: "flex-1 overflow-y-auto space-y-6 !px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        className: "space-y-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          variant: "h3",
          className: "!text-[#0A2463]",
          children: "Create Wallet"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          color: "text.secondary",
          style: {
            color: 'rgba(10,36,99,0.65)'
          },
          children: "Please copy the following mnemonics in order"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        onClick: e => {
          copy(contextData.mnemonics);
        },
        className: "flex items-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
          src: _ui_images_common_copy_svg__WEBPACK_IMPORTED_MODULE_12__,
          width: 20,
          height: 20,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .EY, {
          text: "Copy to clipboard",
          color: "white",
          style: {
            marginLeft: '8px'
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        className: "grid grid-cols-3 gap-2",
        children: words.length > 0 && words.map((v, index) => {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
            className: "py-3 px-2 flex items-center justify-between rounded-lg",
            style: {
              boxShadow: 'none',
              border: '1px solid rgba(10, 36, 99, 0.15)',
              borderRadius: '8px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              color: "text.secondary",
              className: "inline",
              children: `${index + 1}`
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .EY, {
              text: v,
              selectText: true,
              disableTranslate: true
            })]
          }, index);
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        className: "flex items-start space-x-2",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("img", {
          src: _ui_images_common_warning_svg__WEBPACK_IMPORTED_MODULE_13__,
          width: 20,
          height: 20,
          alt: ""
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
          className: "space-y-1",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            style: {
              color: '#0A2463'
            },
            children: "Warning"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            style: {
              color: 'rgba(10,36,99,0.65)'
            },
            children: "Please accurately record and securely store the following mnemonics."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            style: {
              color: 'rgba(10,36,99,0.65)'
            },
            children: "Disclosure of your mnemonics will result in your account being compromised and lose all of your funds."
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n, {
      variant: "contained",
      color: "primary",
      className: "!rounded-lg !h-[42px] !mx-4",
      onClick: btnClick,
      children: "Continue"
    })]
  });
}
let StoreTypes = /*#__PURE__*/function (StoreTypes) {
  StoreTypes["Mnemonic"] = "Mnemonic";
  StoreTypes["PrivateKey"] = "Private Key";
  return StoreTypes;
}({});
function Step1_Import(_ref3) {
  let {
    contextData,
    updateContextData
  } = _ref3;
  const {
    TextArea
  } = antd_lib_input__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A;
  const [curInputIndex, setCurInputIndex] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(0);
  const [hover, setHover] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(999);
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
  const [storeType, setStoreType] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(StoreTypes.Mnemonic);
  const [privateKey, setPrivateKey] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [isKaspanetWeb, setIsKaspanetWeb] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(contextData.restoreWalletType === _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASPANET_WEB);
  const [is_12, setIs_12] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);

  // 根据 is_12 动态设置助记词数量
  const mnemonicCount = is_12 ? 12 : 24;
  const [inputSeeds, setInputSeeds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Array(mnemonicCount).fill(''));
  const [keys, setKeys] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(new Array(mnemonicCount).fill(''));
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .vT)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_11__/* .useKeyrings */ .C3)();
  const hdPathOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const restoreWallet = _shared_constant__WEBPACK_IMPORTED_MODULE_4__/* .RESTORE_WALLETS */ .GG[contextData.restoreWalletType];
    return _shared_constant__WEBPACK_IMPORTED_MODULE_4__/* .ADDRESS_TYPES */ .Ld.filter(v => restoreWallet.addressTypes.includes(v.value)).sort((a, b) => a.displayIndex - b.displayIndex).map(v => ({
      label: v.name,
      hdPath: v.hdPath,
      addressType: v.value
    }));
  }, [contextData.restoreWalletType]);
  const [previewAddresses, setPreviewAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(hdPathOptions.map(() => ''));
  const generateAddress = async () => {
    if (storeType !== StoreTypes.Mnemonic) return;
    const mnemonic = inputSeeds.join(' ').trim();
    if (!bip39__WEBPACK_IMPORTED_MODULE_1__/* .validateMnemonic */ .JB(mnemonic)) return;
    const addresses = [];
    for (const option of hdPathOptions) {
      try {
        const startIndex = isKaspanetWeb ? 1 : 0;
        const keyring = await wallet.createTmpKeyringWithMnemonics(mnemonic, option.hdPath, contextData.passphrase || '', option.addressType, 1, startIndex);
        addresses.push(keyring.accounts[0].address);
      } catch (e) {
        tools.toastError(e.message);
        return;
      }
    }
    setPreviewAddresses(addresses);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    // 333
    generateAddress();
  }, [inputSeeds, isKaspanetWeb, contextData.passphrase]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    updateContextData({
      restoreWalletType: isKaspanetWeb ? _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASPANET_WEB : _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASWARE
    });
  }, [isKaspanetWeb, updateContextData]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    updateContextData({
      restoreWalletType: is_12 ? _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASWARE : _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASPIUM
    });
  }, [is_12, updateContextData]);

  // 当 is_12 变化时，调整 keys 和 inputSeeds 的大小
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const newCount = is_12 ? 12 : 24;
    setKeys(prev => {
      const newKeys = new Array(newCount).fill('');
      return newKeys.map((_, i) => prev[i] || '');
    });
    setInputSeeds(prev => {
      const newSeeds = new Array(newCount).fill('');
      return newSeeds.map((_, i) => prev[i] || '');
    });
  }, [is_12]);
  const [wordsItems, setWordsItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([WORDS_12_ITEM, WORDS_24_ITEM]);
  const handleEventPaste = (event, index) => {
    const copyText = event.clipboardData.getData('text/plain');
    const textArr = copyText.trim().split(/\s+/);
    const newKeys = [...keys];
    const newSeeds = [...inputSeeds];
    if (textArr.length >= mnemonicCount) {
      for (let i = 0; i < Math.min(mnemonicCount, textArr.length); i++) {
        newKeys[i] = textArr[i];
        newSeeds[i] = textArr[i];
      }
      setKeys(newKeys.slice(0, mnemonicCount));
      setInputSeeds(newSeeds.slice(0, mnemonicCount));
      const mnemonic = newSeeds.join(' ');
      if (!bip39__WEBPACK_IMPORTED_MODULE_1__/* .validateMnemonic */ .JB(mnemonic) || contextData.addressTypeIndex === undefined) {
        tools.toastError('Invalid mnemonic');
      }
    } else {
      for (let i = 0; i < keys.length - index && i < textArr.length; i++) {
        newKeys[index + i] = textArr[i];
        newSeeds[index + i] = textArr[i];
      }
      setKeys(newKeys);
      setInputSeeds(newSeeds);
    }
    event.preventDefault();
  };
  const handleInputSeed = (e, index) => {
    const splitValue = e.target.value.split(/\s+/);
    setInputSeeds(state => {
      const newState = [...state.slice(0, index), ...splitValue, ...state.slice(index + splitValue.length)];
      // if (!bip39.validateMnemonic(newState) || contextData.addressTypeIndex === undefined) {
      //   tools.toastError('Invalid mnemonic');
      // }
      return newState.slice(0, mnemonicCount);
    });
    setKeys(state => {
      const newKeys = [...state];
      newKeys[index] = e.target.value;
      return newKeys;
    });
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    setDisabled(true);
    const hasEmpty = keys.filter(key => key === '').length > 0;
    if (hasEmpty) return;
    const mnemonic = keys.join(' ');
    if (!bip39__WEBPACK_IMPORTED_MODULE_1__/* .validateMnemonic */ .JB(mnemonic)) return;
    setDisabled(false);
  }, [keys]);
  const createAccount = (0,_ui_state_global_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCreateAccountCallback */ .Yb)();
  const createAccountByPrivateKey = (0,_ui_state_global_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCreateAccountByPrivateKeyCallback */ .vI)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_10__/* .useNavigate */ .Z)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .D)();
  const operationDisabled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (storeType === StoreTypes.Mnemonic) {
      const mnemonic = inputSeeds.slice(0, mnemonicCount).join(' ');
      return !bip39__WEBPACK_IMPORTED_MODULE_1__/* .validateMnemonic */ .JB(mnemonic) || contextData.addressTypeIndex === undefined;
    } else {
      return !privateKey;
    }
  }, [inputSeeds, storeType, privateKey, contextData.addressTypeIndex, mnemonicCount]);
  const onNext = async () => {
    try {
      if (storeType === StoreTypes.Mnemonic) {
        const addressSet = new Set(previewAddresses || []);
        const result = keyrings.some(item => item.accounts.some(account => addressSet.has(account.address)));
        if (result) {
          return tools.toastError("The wallet already exists");
        }
        const mnemonic = inputSeeds.join(' ').trim();
        const option = hdPathOptions[contextData.addressTypeIndex || 0];
        const startIndex = isKaspanetWeb ? 1 : 0;
        await createAccount(mnemonic, option.hdPath, contextData.passphrase || '', option.addressType, 1, startIndex);
      } else {
        await createAccountByPrivateKey(privateKey, contextData.addressType);
      }
      navigate('MainScreen');
    } catch (error) {
      console.log('error', error.message);
      const {
        message = ''
      } = error || {};
      tools.toastError(error.message || (storeType === StoreTypes.Mnemonic ? 'Invalid mnemonic' : 'Invalid private key'));
      // tools.toastError(error && Object.keys(error).length ? (message || JSON.stringify(error)) : 'Error');
    }
  };
  const handleChangeType = type => {
    setStoreType(type);
  };
  const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      className: "px-4 space-y-6 flex-1 overflow-y-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        className: "space-y-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          className: "p-1 grid grid-cols-2 cursor-pointer gap-4 !bg-[rgba(10,36,99,0.06)] text-[15px] !rounded-md",
          children:
          // 遍历StoreTypes
          Object.values(StoreTypes).map((type, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Card__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .A, {
            className: "text-center p-1 !rounded-md",
            onClick: () => handleChangeType(type),
            sx: {
              background: storeType === type ? theme.palette.background.default : 'transparent',
              boxShadow: 'unset',
              fontWeight: storeType === type ? 600 : 400
            },
            children: type
          }, index))
        })
      }), storeType === StoreTypes.PrivateKey ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        className: "space-y-3",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(TextArea, {
          className: "ant-input-affix-wrapper !text-[16px] !rounded-lg",
          rows: 5,
          value: privateKey,
          placeholder: "Please Enter Private Key",
          onChange: e => setPrivateKey(e.target.value)
        })
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
          className: "grid grid-cols-3 gap-2 gap-y-3",
          children: keys.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Row */ .fI, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {
              style: {
                width: '100%',
                height: 'auto',
                position: 'relative',
                paddingLeft: 25
              },
              value: inputSeeds[index] || '',
              onChange: e => handleInputSeed(e, index),
              onPaste: e => handleEventPaste(e, index),
              startAdornment: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
                color: "text.secondary",
                style: {
                  position: 'absolute',
                  left: 10,
                  top: '50%',
                  transform: 'translateY(-50%)'
                },
                children: `${index + 1}`
              }),
              sx: {
                height: 40,
                'input': {
                  textAlign: 'center'
                }
              }
            })
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            variant: "h6",
            className: "!text-[#0A2463]",
            children: "Select Wallet Type"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
            className: "space-y-2",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n, {
              variant: !isKaspanetWeb && is_12 ? 'contained' : 'outlined',
              color: "primary",
              size: "small",
              className: "!rounded-lg !h-[32px]",
              onClick: () => {
                setIsKaspanetWeb(false);
                setIs_12(true);
              },
              fullWidth: true,
              children: "Default 12 Words"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n, {
              variant: !is_12 ? 'contained' : 'outlined',
              color: "primary",
              size: "small",
              className: "!rounded-lg !h-[32px]",
              onClick: () => {
                setIsKaspanetWeb(false);
                setIs_12(false);
              },
              fullWidth: true,
              children: "Default 24 Words"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)("p", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n, {
              variant: isKaspanetWeb ? 'contained' : 'outlined',
              color: "primary",
              size: "small",
              className: "!rounded-lg !h-[32px]",
              onClick: () => {
                setIsKaspanetWeb(true);
                setIs_12(true);
              },
              fullWidth: true,
              children: "Kaspanet Web"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            variant: "h6",
            className: "!text-[#0A2463]",
            children: "Selected Address"
          }), hdPathOptions.map((option, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
            onClick: () => updateContextData({
              addressTypeIndex: index,
              addressType: option.addressType
            }),
            sx: {
              p: 2,
              border: contextData.addressTypeIndex === index ? '2px solid #29FAC4' : '1px solid gray',
              borderRadius: 2,
              cursor: 'pointer'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              children: option.label
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              variant: "body2",
              color: "text.secondary",
              sx: {
                wordBreak: 'break-all',
                maxWidth: '100%'
              },
              children: previewAddresses[index] || 'Generating...'
            })]
          }, index))]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      className: "px-4 space-y-2",
      sx: {
        width: '100%'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n, {
        disabled: operationDisabled,
        color: "primary",
        variant: "contained",
        sx: {
          marginBottom: "20px"
        },
        className: "!rounded-lg !h-[42px]",
        onClick: onNext,
        fullWidth: true,
        children: "Continue"
      })
    })]
  });
}
function Step2(_ref4) {
  let {
    contextData,
    updateContextData
  } = _ref4;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_7__/* .useTools */ .D)();
  const [inputErrors, setInputErrors] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([false, false, false]);
  const hdPathOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const restoreWallet = _shared_constant__WEBPACK_IMPORTED_MODULE_4__/* .RESTORE_WALLETS */ .GG[contextData.restoreWalletType];
    return _shared_constant__WEBPACK_IMPORTED_MODULE_4__/* .ADDRESS_TYPES */ .Ld.filter(v => {
      if (v.displayIndex < 0) {
        return false;
      }
      if (!restoreWallet.addressTypes.includes(v.value)) {
        return false;
      }
      if (!contextData.isRestore && v.isKaswareLegacy) {
        return false;
      }
      if (contextData.customHdPath && v.isKaswareLegacy) {
        return false;
      }
      return true;
    }).sort((a, b) => a.displayIndex - b.displayIndex).map(v => {
      return {
        label: v.name,
        hdPath: v.hdPath,
        addressType: v.value,
        isKaswareLegacy: v.isKaswareLegacy
      };
    });
  }, [contextData]);

  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const allHdPathOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return _shared_constant__WEBPACK_IMPORTED_MODULE_4__/* .ADDRESS_TYPES */ .Ld.map(v => v).sort((a, b) => a.displayIndex - b.displayIndex).map(v => {
      return {
        label: v.name,
        hdPath: v.hdPath,
        addressType: v.value,
        isKaswareLegacy: v.isKaswareLegacy
      };
    });
  }, []);
  const [previewAddresses, setPreviewAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(hdPathOptions.map(v => ''));
  const [scannedGroups, setScannedGroups] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
  const [addressAssets, setAddressAssets] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [pathError, setPathError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)('');
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const [discoverLoading, setDiscoverLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  const createAccount = (0,_ui_state_global_hooks__WEBPACK_IMPORTED_MODULE_8__/* .useCreateAccountCallback */ .Yb)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_10__/* .useNavigate */ .Z)();
  const [pathText, setPathText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(contextData.customHdPath);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (scannedGroups.length > 0) {
      const itemIndex = scannedGroups.findIndex(v => v.address_arr.length > 0);
      const item = scannedGroups[itemIndex];
      updateContextData({
        addressType: item.type,
        addressTypeIndex: itemIndex
      });
    } else {
      const option = hdPathOptions[contextData.addressTypeIndex];
      updateContextData({
        addressType: option.addressType
      });
    }
  }, [contextData.addressTypeIndex, scannedGroups]);
  const generateAddress = async () => {
    const addresses = [];
    for (let i = 0; i < hdPathOptions.length; i++) {
      const options = hdPathOptions[i];
      try {
        let startIndex = 0;
        // kaspanet wallet address starts from 1; others start from 0.
        if (contextData.restoreWalletType == _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASPANET_WEB) {
          startIndex = 1;
        }
        const keyring = await wallet.createTmpKeyringWithMnemonics(contextData.mnemonics, contextData.customHdPath || options.hdPath, contextData.passphrase, options.addressType, 1, startIndex);
        // const address = keyring.accounts[0].address;
        // addresses.push(address);
        keyring.accounts.forEach(v => {
          addresses.push(v.address);
        });
      } catch (e) {
        console.log(e);
        setError(e.message);
        return;
      }
    }
    setPreviewAddresses(addresses);
  };
  const [scanned, setScanned] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    generateAddress();
    setScanned(false);
  }, [contextData.passphrase, contextData.customHdPath]);
  const fetchAddressesBalance = async () => {
    if (!contextData.isRestore) {
      return;
    }
    const addresses = previewAddresses;
    if (!addresses[0]) return;
    setLoading(true);
    const balances = await wallet.getMultiAddressAssets(addresses.join(','));
    setLoading(false);
    const addressAssets = {};
    let maxSompi = 0;
    let recommended = 0;
    for (let i = 0; i < addresses.length; i++) {
      const address = addresses[i];
      const balance = balances[i];
      const sompi = balance.totalSompi;
      addressAssets[address] = {
        total_kas: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .sompiToAmount */ ._m)(balance.totalSompi),
        sompi
      };
      if (sompi > maxSompi) {
        maxSompi = sompi;
        recommended = i;
      }
    }
    if (maxSompi > 0) {
      updateContextData({
        addressTypeIndex: recommended
      });
    }
    setAddressAssets(addressAssets);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    fetchAddressesBalance();
  }, [previewAddresses]);
  const submitCustomHdPath = text => {
    setPathError('');
    setPathText(text);
    if (text !== '') {
      const isValid = bitcore_lib__WEBPACK_IMPORTED_MODULE_2___default().HDPrivateKey.isValidPath(text);
      if (!isValid) {
        setPathError('Invalid derivation path.');
        return;
      }
      updateContextData({
        customHdPath: text
      });
    } else {
      updateContextData({
        customHdPath: ''
      });
    }
  };
  const disabled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (!error && !pathError) {
      return false;
    } else {
      return true;
    }
  }, [error, pathError]);
  const onNext = async () => {
    try {
      if (scannedGroups.length > 0) {
        // const option = allHdPathOptions[contextData.addressTypeIndex];
        const option = hdPathOptions[contextData.addressTypeIndex];
        const hdPath = contextData.customHdPath || option.hdPath;
        const selected = scannedGroups[contextData.addressTypeIndex];
        const startIndex = 0;
        // kaspanet wallet address starts from 1; others start from 0.
        // if (contextData.restoreWalletType == RestoreWalletType.KASPANET_WEB) {
        //   startIndex = 1;
        // }
        await createAccount(contextData.mnemonics, hdPath, contextData.passphrase, contextData.addressType, selected.address_arr.length, startIndex, selected);
      } else {
        const option = hdPathOptions[contextData.addressTypeIndex];
        const hdPath = contextData.customHdPath || option.hdPath;
        let startIndex = 0;
        // kaspanet wallet address starts from 1; others start from 0.
        if (contextData.restoreWalletType == _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASPANET_WEB) {
          startIndex = 1;
        }
        await createAccount(contextData.mnemonics, hdPath, contextData.passphrase, contextData.addressType, 1, startIndex);
      }
      navigate('MainScreen');
    } catch (e) {
      console.log(e);
      tools.toastError(e);
    }
  };
  const scanVaultAddress = async () => {
    setScanned(true);
    // tools.showLoading(true);
    setDiscoverLoading(true);
    try {
      let groups = [];
      // for (let i = 0; i < allHdPathOptions.length; i++) {
      for (let i = 0; i < hdPathOptions.length; i++) {
        // const options = allHdPathOptions[i];
        const options = hdPathOptions[i];
        try {
          const sgroup = await wallet.createTmpKeyringWithMnemonicsWithAddressDiscovery(contextData.mnemonics, contextData.customHdPath || options.hdPath, contextData.passphrase, options.addressType, 20);
          if (sgroup !== null) {
            groups.push(sgroup);
          }
        } catch (e) {
          console.log(e);
          setError(e.message);
          return;
        }
      }
      try {
        // groups = await wallet.findGroupAssets(groups);
      } catch (e) {
        tools.showTip(e.message);
        groups = [];
      }
      if (groups.length == 0) {
        // tools.showTip('Unable to find any addresses with assets');
        tools.toastWarning('Unable to find any addresses with balance');
      } else if (groups.length > 0) {
        // first time to scan vault address
        if (scannedGroups.length == 0) {
          tools.toastSuccess(`Found ${groups[0].address_arr.length} addresses with balance`);
          // scan valult address again.
        } else {
          const scannedGroup = scannedGroups[0];
          const scannedAddresses = scannedGroup.address_arr;
          const group = groups[0];
          const groupAddresses = group.address_arr;
          let newAddrNum = 0;
          for (let i = 0; i < groupAddresses.length; i++) {
            if (!scannedAddresses.find(v => v == groupAddresses[i])) {
              newAddrNum++;
            }
          }
          if (newAddrNum > 0) {
            tools.toastSuccess(`Found ${newAddrNum} more addresses with balance`);
          } else {
            tools.toastWarning('No new addresses with balance found');
          }
        }
      }
      setScannedGroups(groups);
    } catch (e) {
      setError(e.message);
    } finally {
      // tools.showLoading(false);
      setDiscoverLoading(false);
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    if (contextData.isRestore) {
      scanVaultAddress();
    }
  }, []);
  const {
    randomKeys,
    mnemonics
  } = contextData;
  const seeds = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return randomKeys.map(item => mnemonics.split(' ')[item - 1]);
  }, [randomKeys]);
  const [inputSeeds, setInputSeeds] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(['', '', '']);
  const handleInputSeeds = (e, index) => {
    const newValue = e.target.value;
    setInputSeeds(state => {
      return [...state.slice(0, index), newValue, ...state.slice(index + 1)];
    });

    // 检查输入是否正确并更新错误状态
    setInputErrors(state => {
      const newErrors = [...state];
      newErrors[index] = newValue !== seeds[index];
      return newErrors;
    });
  };
  const operationDisabled = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    return inputSeeds.some((item, index) => item !== seeds[index]);
  }, [inputSeeds, seeds]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
      className: "!px-4 space-y-6 flex-1 overflow-y-auto",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
        className: "space-y-1",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          variant: "h3",
          className: "!text-[#0A2463]",
          children: "Create Wallet"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
          color: "text.secondary",
          children: "Please verify the mnemonic"
        })]
      }), randomKeys.slice(0, 3).map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .A, {
          className: "space-y-2",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
            color: "text.secondary",
            children: ["Mnemonic", ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .A, {
              className: "inline",
              color: "text.primary",
              fontWeight: 700,
              children: ["#", item]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {
            value: inputSeeds[index],
            size: "small",
            onChange: e => handleInputSeeds(e, index),
            error: inputErrors[index] && inputSeeds[index],
            helperText: inputErrors[index] && inputSeeds[index] ? 'Incorrect mnemonic word' : '',
            variant: "outlined"
          })]
        }, item);
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Button */ .$n, {
      color: "primary",
      variant: "contained",
      onClick: onNext,
      disabled: operationDisabled,
      className: "!rounded-lg !h-[42px] !mx-4",
      sx: {
        "&.Mui-disabled": {
          background: "#eaeaea",
          color: "#c0c0c0"
        }
      },
      children: "Done"
    })]
  });
}
var TabType = /*#__PURE__*/function (TabType) {
  TabType["STEP1"] = "STEP1";
  TabType["STEP2"] = "STEP2";
  TabType["STEP3"] = "STEP3";
  return TabType;
}(TabType || {});
var WordsType = /*#__PURE__*/function (WordsType) {
  WordsType[WordsType["WORDS_12"] = 0] = "WORDS_12";
  WordsType[WordsType["WORDS_24"] = 1] = "WORDS_24";
  return WordsType;
}(WordsType || {});
const WORDS_12_ITEM = {
  key: WordsType.WORDS_12,
  label: '12 words',
  count: 12
};
const WORDS_24_ITEM = {
  key: WordsType.WORDS_24,
  label: '24 words',
  count: 24
};
function CreateHDWalletScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_15__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_10__/* .useNavigate */ .Z)();

  // const { state } = useLocation();
  // const { isImport, fromUnlock } = state as {
  //   isImport: boolean;
  //   fromUnlock: boolean;
  // };

  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_24__/* .useLocation */ .zy)();
  const {
    isImport = false,
    fromUnlock = false
  } = state || {};
  const [contextData, setContextData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
    mnemonics: '',
    hdPath: '',
    passphrase: '',
    addressType: _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .AddressType */ .RX.KASPA_44_111111,
    step1Completed: isImport ? true : false,
    tabType: isImport ? TabType.STEP2 : TabType.STEP1,
    restoreWalletType: _shared_types__WEBPACK_IMPORTED_MODULE_5__/* .RestoreWalletType */ .E3.KASWARE,
    isRestore: isImport,
    isCustom: false,
    customHdPath: '',
    addressTypeIndex: 0,
    wordsType: WordsType.WORDS_12,
    randomKeys: []
  });
  const updateContextData = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(params => {
    setContextData(Object.assign({}, contextData, params));
  }, [contextData, setContextData]);
  const items = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    if (contextData.isRestore) {
      return [{
        key: TabType.STEP2,
        label: 'Step 2',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Step1_Import, {
          contextData: contextData,
          updateContextData: updateContextData
        })
      }];
      if (contextData.restoreWalletType === RestoreWalletType.OW) {
        return [{
          key: TabType.STEP1,
          label: 'Step 1',
          children: /*#__PURE__*/_jsx(Step0, {
            contextData: contextData,
            updateContextData: updateContextData
          })
        }, {
          key: TabType.STEP2,
          label: 'Step 2',
          children: /*#__PURE__*/_jsx(Step1_Import, {
            contextData: contextData,
            updateContextData: updateContextData
          })
        }];
      } else {
        return [{
          key: TabType.STEP1,
          label: 'Step 1',
          children: /*#__PURE__*/_jsx(Step0, {
            contextData: contextData,
            updateContextData: updateContextData
          })
        }, {
          key: TabType.STEP2,
          label: 'Step 2',
          children: /*#__PURE__*/_jsx(Step1_Import, {
            contextData: contextData,
            updateContextData: updateContextData
          })
        }, {
          key: TabType.STEP3,
          label: 'Step 3',
          children: /*#__PURE__*/_jsx(Step2, {
            contextData: contextData,
            updateContextData: updateContextData
          })
        }];
      }
    } else {
      return [{
        key: TabType.STEP1,
        label: 'Step 1',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Step1_Create, {
          contextData: contextData,
          updateContextData: updateContextData
        })
      }, {
        key: TabType.STEP2,
        label: 'Step 2',
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Step2, {
          contextData: contextData,
          updateContextData: updateContextData
        })
      }];
    }
  }, [contextData, updateContextData]);
  const currentChildren = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const item = items.find(v => v.key === contextData.tabType);
    return item === null || item === void 0 ? void 0 : item.children;
  }, [items, contextData.tabType]);
  const activeTabIndex = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => {
    const index = items.findIndex(v => v.key === contextData.tabType);
    if (index === -1) {
      return 0;
    } else {
      return index;
    }
  }, [items, contextData.tabType]);
  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {
    const numbers = new Set([Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12), Math.ceil(Math.random() * 12)]);
    setContextData(state => {
      return {
        ...state,
        randomKeys: Array.from(numbers)
      };
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Header */ .Y9, {
      onBack: () => {
        if (activeTabIndex === 0) {
          if (fromUnlock) {
            navigate('WelcomeScreen');
          } else {
            window.history.go(-1);
          }
        } else {
          updateContextData({
            tabType: TabType.STEP1
          });
        }
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_6__/* .Content */ .UC, {
      classname: "!px-0 !pb-4",
      children: currentChildren
    })]
  });
}
function checkWords() {
  let seed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'english';
  const words = seed.split(' ');
  const wordlist = bip39.wordlists[language];
  let word;
  while ((word = words.pop()) != null) {
    // eslint-disable-next-line no-loop-func
    const idx = wordlist.findIndex(w => w === word);
    if (idx === -1) {
      return false;
    }
  }
  return true;
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);