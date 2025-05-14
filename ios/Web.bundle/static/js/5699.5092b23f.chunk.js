"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5699],{

/***/ 9431:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   X: () => (/* binding */ RemoveWalletPopover)
/* harmony export */ });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16725);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8963);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96540);
/* harmony import */ var _ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(88658);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(43182);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89872);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(13108);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(66188);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(20982);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39053);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(98505);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(76302);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(20577);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__]);
_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Using Ant Design Button













const RemoveWalletPopover = _ref => {
  let {
    keyring,
    onClose
  } = _ref;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .useWallet */ .vT)();
  const navigate = (0,_ui_pages_MainRoute__WEBPACK_IMPORTED_MODULE_2__/* .useNavigate */ .Z)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .j)();
  const displayAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!keyring.accounts[0]) {
      return 'Invalid';
    }
    const address = keyring.accounts[0].address;
    return (0,_ui_utils__WEBPACK_IMPORTED_MODULE_6__/* .shortAddress */ .Dc)(address);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Popover__WEBPACK_IMPORTED_MODULE_10__/* .Popover */ .A, {
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .V, {
      justifyCenter: true,
      itemsCenter: true,
      gap: "xl" // Increased gap for better spacing
      ,
      style: {
        padding: '20px',
        width: '300px'
      } // Added padding and fixed width for consistency
      ,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
        style: {
          width: 40,
          height: 40,
          borderRadius: '2rem',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#FF4444',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(255, 68, 68, 0.3)'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__/* .FontAwesomeIcon */ .g, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_13__/* .faTrashCan */ .sjs,
          style: {
            height: '1.25rem',
            color: '#fff'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_8__/* .Card */ .Z, {
        preset: "style2",
        style: {
          width: '100%',
          // Full width to match the popover
          padding: '16px',
          // Increased padding for better spacing
          border: '1px solid #e0e0e0',
          borderRadius: '8px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .V, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .EY, {
            text: keyring.alianName,
            textCenter: true,
            preset: "bold"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .EY, {
            text: displayAddress,
            preset: "sub",
            textCenter: true,
            color: "textDim"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .EY, {
        text: "Please ensure you have backed up your mnemonic/private key to prevent asset loss.",
        textCenter: true,
        style: {
          fontSize: '14px',
          lineHeight: '1.5',
          maxWidth: '100%'
        } // Full width for text
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_11__/* .Text */ .EY, {
        text: "This action is not reversible.",
        color: "danger",
        preset: "bold",
        textCenter: true,
        style: {
          fontSize: '14px',
          textDecoration: 'underline'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_9__/* .Column */ .V, {
        gap: "md",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
          size: "middle",
          block: true,
          onClick: e => {
            if (onClose) {
              onClose();
            }
          },
          style: {
            backgroundColor: '#f0f0f0',
            color: '#333',
            border: '1px solid #d0d0d0',
            borderRadius: '6px',
            height: '40px',
            // Fixed height for better alignment
            display: 'flex',
            // Ensure text is centered
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_14__["default"], {
          type: "primary",
          danger: true,
          size: "middle",
          block: true,
          onClick: async () => {
            const nextKeyring = await wallet.removeKeyring(keyring);
            const keyrings = await wallet.getKeyrings();
            dispatch(_ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__/* .keyringsActions */ .kk.setKeyrings(keyrings));
            if (nextKeyring) {
              dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_3__/* .accountActions */ .$G.setCurrent(nextKeyring.accounts[0]));
              return;
            }
            if (keyrings[0]) {
              dispatch(_ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_5__/* .keyringsActions */ .kk.setCurrent(keyrings[0]));
              return;
            }
            navigate('WelcomeScreen');
          },
          style: {
            borderRadius: '6px',
            height: '40px',
            // Fixed height for consistency
            display: 'flex',
            // Ensure text is centered
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: "Remove"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_12__.jsx)("div", {
      style: {
        position: 'fixed',
        top: 0,
        left: 0,
        backgroundColor: '#00000033',
        zIndex: -1,
        width: '100%',
        height: '100%'
      }
    })]
  });
};
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

/***/ 35699:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyItem: () => (/* binding */ MyItem),
/* harmony export */   "default": () => (/* binding */ SwitchKeyringScreen)
/* harmony export */ });
/* harmony import */ var _shared_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77093);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_RemoveWalletPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9431);
/* harmony import */ var _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(43658);
/* harmony import */ var _ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(43182);
/* harmony import */ var _ui_state_hooks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75049);
/* harmony import */ var _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(36904);
/* harmony import */ var _ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89872);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13108);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(78602);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(40261);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(25714);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(93598);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(93567);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(87164);
/* harmony import */ var _mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(64155);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(96540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(88658);
/* harmony import */ var bignumber_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(60346);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(43168);
/* harmony import */ var _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(82084);
/* harmony import */ var _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(34375);
/* harmony import */ var _ui_images_common_plusCircleOutlined_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(58118);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_RemoveWalletPopover__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__, _MainRoute__WEBPACK_IMPORTED_MODULE_11__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _ui_components_RemoveWalletPopover__WEBPACK_IMPORTED_MODULE_3__, _ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__, _ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__, _MainRoute__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */






















const MyItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_10__.forwardRef)(function MyItem(_ref, ref) {
  let {
    keyring,
    autoNav,
    totalItems,
    index
  } = _ref;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_11__/* .useNavigate */ .Z)();
  const currentKeyring = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useCurrentKeyring */ .KZ)();
  const selected = currentKeyring.index === (keyring === null || keyring === void 0 ? void 0 : keyring.index);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .useWallet */ .vT)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useKeyrings */ .C3)();
  const dispatch = (0,_ui_state_hooks__WEBPACK_IMPORTED_MODULE_6__/* .useAppDispatch */ .j)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useLayerType */ .pI)();
  const networkType = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_13__/* .useNetworkType */ .iP)();
  const [keyringWithInfo, setKeyringWithInfo] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)({
    ...keyring,
    balanceKasL2: 0
  });
  const displayAddress = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => {
    if (!keyringWithInfo.accounts[0]) return 'Invalid';
    return (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .shortAddress */ .Dc)(keyringWithInfo.accounts[0].address, 9);
  }, []);
  const displayAddressL2 = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => {
    if (!keyringWithInfo.accounts[0]) return 'Invalid';
    return (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .shortAddress */ .Dc)(keyringWithInfo.accounts[0].addressL2, 6);
  }, []);
  const [optionsVisible, setOptionsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const [removeVisible, setRemoveVisible] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    const fetchBalanceL2 = async () => {
      try {
        let totalBalance = 0;
        for (const account of keyringWithInfo.accounts) {
          if (account.addressL2) {
            const {
              balance
            } = await (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useAccountEthBalance */ .kw)(account.addressL2, networkType);
            totalBalance += Number(balance);
          }
        }
        setKeyringWithInfo({
          ...keyring,
          balanceKasL2: Number(totalBalance)
        });
        // console.log(`地址 ${keyringWithInfo.accounts[0].addressL2} 的余额为: ${balance} ETH`);
      } catch (error) {
        setKeyringWithInfo({
          ...keyring,
          balanceKasL2: 0
        });
        console.error(error);
      }
    };
    if (currentLayer === 'L2' && keyringWithInfo.accounts[0].addressL2) {
      fetchBalanceL2();
    } else {
      setKeyringWithInfo({
        ...keyring,
        balanceKasL2: 0
      });
    }
  }, [keyring, currentLayer]);
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Paper__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .A, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      p: 1.5,
      // 与SwitchAccountScreen一致
      mt: '12px',
      // 与SwitchAccountScreen一致
      borderRadius: 3,
      // 与SwitchAccountScreen一致（12px / 4 = 3）
      backgroundColor: selected ? '#E6FCF6' : 'rgba(10, 36, 99, 0.03)',
      border: selected ? '1px solid #04DFA6' : '1px solid transparent',
      transition: 'all 0.3s',
      '&:hover': {
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
      onClick: async () => {
        if (!keyringWithInfo.accounts[0]) {
          tools.toastError('Invalid wallet, please remove it and add new one');
          return;
        }
        if (currentKeyring.key !== keyringWithInfo.key) {
          await wallet.changeKeyring(keyring);
          dispatch(_ui_state_keyrings_reducer__WEBPACK_IMPORTED_MODULE_8__/* .keyringsActions */ .kk.setCurrent(keyring));
          const _currentAccount = await wallet.getCurrentAccount();
          dispatch(_ui_state_accounts_reducer__WEBPACK_IMPORTED_MODULE_5__/* .accountActions */ .$G.setCurrent(_currentAccount));
        }
        if (autoNav) navigate('MainScreen');
      },
      sx: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        cursor: 'pointer'
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        style: {
          width: 24,
          marginRight: 10
        },
        selfItemsCenter: true,
        children: [" ", selected ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          color: "green",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _ui_images_common_checkCircleFilledSelected_svg__WEBPACK_IMPORTED_MODULE_15__,
            width: 18,
            height: 18,
            alt: ""
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
            src: _ui_images_common_checkCircleFilled_svg__WEBPACK_IMPORTED_MODULE_14__,
            width: 18,
            height: 18,
            alt: ""
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        full: true,
        style: {
          padding: '8px 0'
        },
        children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
          justifyBetween: true,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
            text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_9__/* .shortAddress */ .Dc)(keyringWithInfo.alianName, 6),
            size: "xs",
            style: {
              fontSize: '14px',
              color: '#0A2463'
            }
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: displayAddress,
          preset: "sub",
          size: "xs",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          }
        }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: `L2:${displayAddressL2}`,
          preset: "sub",
          size: "xs",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          }
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
      relative: true,
      style: {
        marginLeft: 8
      },
      selfItemsCenter: true,
      children: [" ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
        style: {
          padding: '0 0 0 6px',
          // 与SwitchAccountScreen一致
          borderRadius: 6,
          // background: 'rgba(0, 0, 0, 0.05)',
          cursor: 'pointer',
          justifyContent: 'end'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .A, {
          onClick: e => {
            e.stopPropagation();
            setOptionsVisible(true);
          },
          style: {
            fontSize: 16,
            color: '#666'
          }
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        style: {
          fontSize: '12px',
          color: '#0A2463',
          justifyContent: 'right'
        },
        children: (keyringWithInfo === null || keyringWithInfo === void 0 ? void 0 : keyringWithInfo.balanceKas) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: (0,bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(keyringWithInfo.balanceKas).toFixed(4),
          size: "xs",
          style: {
            color: '#0BE4AB'
          }
        })
      }), currentLayer === 'L2' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        style: {
          fontSize: '12px',
          color: '#0A2463',
          justifyContent: 'right'
        },
        children: (keyringWithInfo === null || keyringWithInfo === void 0 ? void 0 : keyringWithInfo.balanceKasL2) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
          text: (0,bignumber_js__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .A)(keyringWithInfo.balanceKasL2).toFixed(4),
          size: "xs",
          style: {
            color: '#0BE4AB'
          }
        })
      }), optionsVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.Fragment, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
          style: {
            backgroundColor: '#FFFFFF',
            // 与SwitchAccountScreen一致
            width: 180,
            // 与SwitchAccountScreen一致
            position: 'absolute',
            right: 0,
            top: 20,
            // top: (totalItems - 1) === index && index >= 3 ? -160 : 60, // 与SwitchAccountScreen一致
            borderRadius: 8,
            padding: '12px 6px',
            zIndex: 11,
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            border: '1px solid rgba(0, 0, 0, 0.1)'
          },
          classname: "customg-setting-popover",
          children: [{
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .A, {}),
            text: t('Edit Name'),
            onClick: () => {
              navigate('EditWalletNameScreen', {
                keyring
              });
              setOptionsVisible(false);
            }
          }, {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .A, {}),
            text: keyringWithInfo.type === _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .KEYRING_TYPE */ .rK.HdKeyring ? t('Show Seed Phrase') : t('Export Private Key'),
            onClick: () => {
              keyringWithInfo.type === _shared_constant__WEBPACK_IMPORTED_MODULE_0__/* .KEYRING_TYPE */ .rK.HdKeyring ? navigate('ExportMnemonicsScreen', {
                keyring
              }) : navigate('ExportPrivateKeyScreen', {
                account: keyringWithInfo.accounts[0]
              });
              setOptionsVisible(false);
            }
          }, {
            icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .A, {}),
            text: t('Remove Wallet'),
            color: 'danger',
            onClick: () => {
              if (keyrings.length === 1) {
                tools.toastError('Removing the last wallet is not allowed');
                return;
              }
              setRemoveVisible(true);
              setOptionsVisible(false);
            }
          }].map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
            onClick: e => {
              e.stopPropagation();
              item.onClick();
            },
            style: {
              padding: '4px 6px',
              cursor: 'pointer',
              borderRadius: 4,
              marginBottom: 2,
              // 与SwitchAccountScreen一致
              ':hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)'
              }
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
              color: item.color || 'grey',
              children: item.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Text */ .EY, {
              text: item.text,
              size: "sm" // 与SwitchAccountScreen一致
              ,
              color: item.color || 'text'
            })]
          }, index))
        })
      })]
    }), removeVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components_RemoveWalletPopover__WEBPACK_IMPORTED_MODULE_3__/* .RemoveWalletPopover */ .X, {
      keyring: keyring,
      onClose: () => setRemoveVisible(false)
    })]
  });
});
function SwitchKeyringScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_18__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_11__/* .useNavigate */ .Z)();
  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
  const fetchKeyringsBalances = (0,_ui_state_accounts_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useFetchKeyringsBalancesCallback */ .S2)();
  const keyrings = (0,_ui_state_keyrings_hooks__WEBPACK_IMPORTED_MODULE_7__/* .useKeyrings */ .C3)();
  const items = (0,react__WEBPACK_IMPORTED_MODULE_10__.useMemo)(() => {
    return keyrings.map(v => ({
      key: v.key,
      keyring: v
    }));
  }, [keyrings]);
  const loadBalance = () => {
    setLoading(true);
    fetchKeyringsBalances().finally(() => setLoading(false));
  };
  (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(() => {
    loadBalance();
  }, [fetchKeyringsBalances, keyrings]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .A, {
    sx: {
      backgroundColor: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => window.history.go(-1),
      title: t('Switch Wallet'),
      style: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        backgroundColor: '#FFFFFF',
        height: 56
      },
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
        onClick: () => navigate('AddKeyringScreen'),
        style: {
          padding: 6,
          // 与SwitchAccountScreen一致
          borderRadius: 6,
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("img", {
          src: _ui_images_common_plusCircleOutlined_svg__WEBPACK_IMPORTED_MODULE_16__,
          width: 18,
          height: 18,
          alt: ""
        }), " "]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("div", {
      className: "text-justify text-[#F33B79] text-[12px] px-[16px] leading-normal",
      children: "Warning: Wallet cannot be recovered after deletion! Please ensure you have backed up your mnemonic phrase or private keys, otherwise your assets will be permanently lost."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      style: {
        padding: '16px',
        overflowY: 'auto',
        flex: 1,
        gap: 'inherit'
      },
      children: [" ", items.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(MyItem, {
        keyring: item.keyring,
        autoNav: true,
        totalItems: items.length,
        index: index
      }, item.key)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {}), loading && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .fI, {
        justifyCenter: true,
        mt: "lg",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Icon */ .In, {
          color: "grey",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .A, {})
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_17__.jsx)("p", {})]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 44675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useTheme)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40973);
/* harmony import */ var _defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(22765);
/* harmony import */ var _identifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(58312);
'use client';





function useTheme() {
  const theme = (0,_mui_system__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(_defaultTheme_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
  if (false) {}
  return theme[_identifier_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A] || theme;
}

/***/ }),

/***/ 58118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/plusCircleOutlined.7d92d27f.svg";

/***/ }),

/***/ 64155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Paper_Paper)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(34164);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(75659);
// EXTERNAL MODULE: ./node_modules/@mui/system/esm/colorManipulator/colorManipulator.js + 1 modules
var colorManipulator = __webpack_require__(33139);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(11848);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/useTheme.js
var useTheme = __webpack_require__(44675);
// EXTERNAL MODULE: ./node_modules/@mui/material/utils/memoTheme.js + 1 modules
var memoTheme = __webpack_require__(29077);
// EXTERNAL MODULE: ./node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(25669);
// EXTERNAL MODULE: ./node_modules/@mui/material/styles/getOverlayAlpha.js
var getOverlayAlpha = __webpack_require__(98783);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(38413);
// EXTERNAL MODULE: ./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js
var generateUtilityClass = __webpack_require__(31609);
;// ./node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./node_modules/@mui/material/Paper/Paper.js
'use client';














const useUtilityClasses = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})((0,memoTheme/* default */.A)(({
  theme
}) => ({
  backgroundColor: (theme.vars || theme).palette.background.paper,
  color: (theme.vars || theme).palette.text.primary,
  transition: theme.transitions.create('box-shadow'),
  variants: [{
    props: ({
      ownerState
    }) => !ownerState.square,
    style: {
      borderRadius: theme.shape.borderRadius
    }
  }, {
    props: {
      variant: 'outlined'
    },
    style: {
      border: `1px solid ${(theme.vars || theme).palette.divider}`
    }
  }, {
    props: {
      variant: 'elevation'
    },
    style: {
      boxShadow: 'var(--Paper-shadow)',
      backgroundImage: 'var(--Paper-overlay)'
    }
  }]
})));
const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPaper'
  });
  const theme = (0,useTheme/* default */.A)();
  const {
    className,
    component = 'div',
    elevation = 1,
    square = false,
    variant = 'elevation',
    ...other
  } = props;
  const ownerState = {
    ...props,
    component,
    elevation,
    square,
    variant
  };
  const classes = useUtilityClasses(ownerState);
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperRoot, {
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    ...other,
    style: {
      ...(variant === 'elevation' && {
        '--Paper-shadow': (theme.vars || theme).shadows[elevation],
        ...(theme.vars && {
          '--Paper-overlay': theme.vars.overlays?.[elevation]
        }),
        ...(!theme.vars && theme.palette.mode === 'dark' && {
          '--Paper-overlay': `linear-gradient(${(0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation))}, ${(0,colorManipulator/* alpha */.X4)('#fff', (0,getOverlayAlpha/* default */.A)(elevation))})`
        })
      }),
      ...other.style
    }
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);

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

/***/ 93598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ icons_DeleteOutlined)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(89379);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
;// ./node_modules/@ant-design/icons-svg/es/asn/DeleteOutlined.js
// This icon file is generated automatically.
var DeleteOutlined = { "icon": { "tag": "svg", "attrs": { "viewBox": "64 64 896 896", "focusable": "false" }, "children": [{ "tag": "path", "attrs": { "d": "M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z" } }] }, "name": "delete", "theme": "outlined" };
/* harmony default export */ const asn_DeleteOutlined = (DeleteOutlined);

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/components/AntdIcon.js + 4 modules
var AntdIcon = __webpack_require__(17095);
;// ./node_modules/@ant-design/icons/es/icons/DeleteOutlined.js

// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY



var DeleteOutlined_DeleteOutlined = function DeleteOutlined(props, ref) {
  return /*#__PURE__*/react.createElement(AntdIcon/* default */.A, (0,objectSpread2/* default */.A)((0,objectSpread2/* default */.A)({}, props), {}, {
    ref: ref,
    icon: asn_DeleteOutlined
  }));
};
var RefIcon = /*#__PURE__*/react.forwardRef(DeleteOutlined_DeleteOutlined);
if (false) {}
/* harmony default export */ const icons_DeleteOutlined = (RefIcon);

/***/ })

}]);