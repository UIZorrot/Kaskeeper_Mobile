"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[9612],{

/***/ 43872:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  G: () => (/* binding */ AddressTypeCard),
  S: () => (/* binding */ AddressTypeCard2)
});

// EXTERNAL MODULE: ./src/ui/theme/font.ts
var font = __webpack_require__(69508);
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(48818);
// EXTERNAL MODULE: ./src/ui/components/Card/index.tsx
var Card = __webpack_require__(36224);
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(67196);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(23848);
// EXTERNAL MODULE: ./src/ui/components/Icon/index.tsx
var Icon = __webpack_require__(67172);
// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(13976);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(46476);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-i18next@11.18.6_i18next@21.10.0_react-dom@18.2.0_react@18.2.0__react@18.2.0/node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(80864);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.2.0/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(2488);
;// CONCATENATED MODULE: ./src/ui/components/CopyableAddress/index.tsx
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */








function CopyableAddress(_ref) {
  let {
    address
  } = _ref;
  const {
    t
  } = (0,useTranslation/* useTranslation */.G)();
  const tools = (0,ActionComponent/* useTools */.w)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
    itemsCenter: true,
    gap: "sm",
    onClick: e => {
      (0,utils/* copyToClipboard */.ye)(address).then(() => {
        tools.toastSuccess(t('Copied'));
      });
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
      icon: "copy",
      color: "textDim"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
      text: (0,utils/* shortAddress */.SO)(address),
      color: "textDim"
    })]
  });
}
;// CONCATENATED MODULE: ./src/ui/components/AddressTypeCard/index.tsx










function AddressTypeCard(props) {
  const {
    onClick,
    label,
    address,
    checked,
    assets
  } = props;
  const hasVault = Boolean(assets.sompi && assets.sompi > 0);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.M, {
    px: "zero",
    py: "zero",
    gap: "zero",
    rounded: true,
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.o, {
      full: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
        justifyBetween: true,
        px: "md",
        pt: "md",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          justifyCenter: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: label,
            size: "xs",
            disableTranslate: true
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
        justifyBetween: true,
        px: "md",
        pb: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CopyableAddress, {
          address: address
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          justifyCenter: true,
          children: checked && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
            icon: "check"
          })
        })]
      }), hasVault && /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
        justifyBetween: true,
        bg: "bg3",
        roundedBottom: true,
        px: "md",
        py: "md",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
          justifyCenter: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
            icon: "kas",
            size: font/* fontSizes */.Q.iconMiddle
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: "".concat(assets.total_kas, " KAS"),
            color: "yellow"
          })]
        })
      })]
    })
  });
}
function AddressTypeCard2(props) {
  const {
    onClick,
    label,
    items,
    checked
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.M, {
    px: "zero",
    py: "zero",
    gap: "zero",
    rounded: true,
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.o, {
      full: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
        justifyBetween: true,
        px: "md",
        pt: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          justifyCenter: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: label,
            size: "xs",
            disableTranslate: true
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.o, {
          justifyCenter: true,
          children: checked && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
            icon: "check"
          })
        })]
      }), items.map(v => /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
        px: "md",
        pb: "sm",
        itemsCenter: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.W, {
          style: {
            width: '120px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CopyableAddress, {
            address: v.address
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
          text: "(".concat(v.path, ")"),
          size: "xs",
          color: "textDim",
          disableTranslate: true
        }), v.sompi > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.W, {
          justifyCenter: true,
          gap: "zero",
          itemsCenter: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.G, {
            icon: "kas",
            size: font/* fontSizes */.Q.iconMiddle
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.a, {
            text: "".concat((0,utils/* sompiToKAS */.KK)(v.sompi), " KAS"),
            color: "yellow",
            size: "xxxs"
          })]
        })]
      }, v.address))]
    })
  });
}

/***/ }),

/***/ 49612:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateSimpleWalletScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46956);
/* harmony import */ var _shared_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40256);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23848);
/* harmony import */ var _ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43872);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(48818);
/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11960);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(80864);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(77980);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_8__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_3__, _MainRoute__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */












function Step1(_ref) {
  let {
    contextData,
    updateContextData
  } = _ref;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .G)();
  const [wif, setWif] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .e6)();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setDisabled(true);
    if (!wif) {
      return;
    }
    setDisabled(false);
  }, [wif]);
  const onChange = e => {
    const val = e.target.value;
    setWif(val);
    updateContextData({
      step1Completed: val
    });
  };
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__/* .useTools */ .w)();
  const btnClick = async () => {
    try {
      const _res = await wallet.createTmpKeyringWithPrivateKey(wif, _shared_types__WEBPACK_IMPORTED_MODULE_2__/* .AddressType */ .im.KASPA_44_111111);
      if (_res.accounts.length == 0) {
        throw new Error(t('Invalid PrivateKey'));
      }
    } catch (e) {
      console.log(e);
      if (e == null || e == undefined || Object.keys(e).length == 0) {
        tools.toastError(t('Invalid PrivateKey'));
      } else {
        // tools.toastError(e);
        tools.toastError(t('Invalid PrivateKey'));
      }
      return;
    }
    updateContextData({
      wif,
      tabType: TabType.STEP2
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .ou, {
    gap: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
      text: t('Private Key'),
      textCenter: true,
      preset: "bold"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Input */ .EF, {
      placeholder: t('HEX Private Key'),
      onKeyUp: e => {
        if ('Enter' == e.key) {
          btnClick();
        }
      },
      onChange: onChange,
      autoFocus: true
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .q, {
      disabled: disabled,
      text: t('Continue'),
      preset: "primary",
      sx: {
        "&.Mui-disabled": {
          background: "#eaeaea",
          color: "#c0c0c0"
        },
        marginTop: "15px"
      },
      className: "!rounded-lg !h-[50px]",
      onClick: btnClick
    })]
  });
}
function Step2(_ref2) {
  let {
    contextData,
    updateContextData
  } = _ref2;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .e6)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_4__/* .useTools */ .w)();
  const hdPathOptions = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return _shared_constant__WEBPACK_IMPORTED_MODULE_1__/* .ADDRESS_TYPES */ .Pt.filter(v => {
      if (v.displayIndex < 0) {
        return false;
      }
      if (v.isKaswareLegacy) {
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
  const [previewAddresses, setPreviewAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(hdPathOptions.map(v => ''));
  const [addressAssets, setAddressAssets] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});
  const selfRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
    maxSompi: 0,
    recommended: 0,
    count: 0,
    addressBalances: {}
  });
  const self = selfRef.current;
  const run = async () => {
    const addresses = [];
    // for (let i = 0; i < hdPathOptions.length; i++) {
    for (let i = 0; i < 1; i++) {
      const options = hdPathOptions[i];
      const keyring = await wallet.createTmpKeyringWithPrivateKey(contextData.wif, options.addressType);
      const address = keyring.accounts[0].address;
      addresses.push(address);
    }
    const balances = await wallet.getMultiAddressAssets(addresses.join(','));
    for (let i = 0; i < addresses.length; i++) {
      const address = addresses[i];
      const balance = balances[i];
      const sompi = balance.totalSompi;
      self.addressBalances[address] = {
        total_kas: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .sompiToAmount */ .ei)(balance.totalSompi),
        sompi
      };
      if (sompi > self.maxSompi) {
        self.maxSompi = sompi;
        self.recommended = i;
      }
      updateContextData({
        addressType: hdPathOptions[self.recommended].addressType
      });
      setAddressAssets(self.addressBalances);
    }
    setPreviewAddresses(addresses);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    run();
  }, [contextData.wif]);
  const pathIndex = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {
    return hdPathOptions.findIndex(v => v.addressType === contextData.addressType);
  }, [hdPathOptions, contextData.addressType]);
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_8__/* .useNavigate */ .i)();
  const onNext = async () => {
    try {
      await wallet.createKeyringWithPrivateKey(contextData.wif, contextData.addressType);
      navigate('MainScreen');
    } catch (error) {
      console.log(error);
      const {
        message = ''
      } = error || {};
      tools.toastError(message);
      // tools.toastError(error && Object.keys(error).length ? (message || JSON.stringify(error)) : 'Error');
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Column */ .ou, {
    gap: "lg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .a, {
      text: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('Address Type'),
      preset: "bold"
    }), hdPathOptions.map((item, index) => {
      const address = previewAddresses[index];
      const assets = addressAssets[address] || {
        total_kas: '--',
        sompi: 0
      };
      const hasVault = assets.sompi > 0;
      if (item.isKaswareLegacy && !hasVault) {
        return null;
      }
      // only show the first address type
      return index == 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_5__/* .AddressTypeCard */ .G, {
        label: "".concat(item.label),
        address: address,
        assets: assets,
        checked: index == pathIndex,
        onClick: () => {
          updateContextData({
            addressType: item.addressType
          });
        }
      }, index) : null;
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .q, {
      className: "!rounded-lg !h-[50px]",
      sx: {
        marginTop: 'auto',
        width: '100%'
      },
      text: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('Coninue'),
      preset: "primary",
      onClick: onNext
    })]
  });
}
var TabType = /*#__PURE__*/function (TabType) {
  TabType["STEP1"] = "STEP1";
  TabType["STEP2"] = "STEP2";
  TabType["STEP3"] = "STEP3";
  return TabType;
}(TabType || {});
function CreateSimpleWalletScreen() {
  var _items$find;
  const [contextData, setContextData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({
    wif: '',
    addressType: _shared_types__WEBPACK_IMPORTED_MODULE_2__/* .AddressType */ .im.KASPA_44_111111,
    step1Completed: false,
    tabType: TabType.STEP1
  });
  const updateContextData = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(params => {
    setContextData(Object.assign({}, contextData, params));
  }, [contextData, setContextData]);
  const items = [{
    key: TabType.STEP1,
    label: 'Step 1',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Step1, {
      contextData: contextData,
      updateContextData: updateContextData
    })
  }, {
    key: TabType.STEP2,
    label: 'Step 2',
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Step2, {
      contextData: contextData,
      updateContextData: updateContextData
    })
  }];
  const renderChildren = (_items$find = items.find(v => v.key == contextData.tabType)) === null || _items$find === void 0 ? void 0 : _items$find.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: (0,i18next__WEBPACK_IMPORTED_MODULE_7__.t)('Create Single Wallet')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Content */ .kP, {
      classname: "!px-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_3__/* .Row */ .WA, {
        justifyCenter: true
      }), renderChildren]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);