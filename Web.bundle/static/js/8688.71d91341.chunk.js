"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8688],{

/***/ 508:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Y: () => (/* binding */ RemoveContactPopover)
/* harmony export */ });
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67536);
/* harmony import */ var antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6248);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96651);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48818);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(46670);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28416);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36224);
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(67196);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(43336);
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(46476);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(92792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2488);


/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */

// Using Ant Design Button









// 自定义按钮样式


const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .cp)(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__["default"])(_ref => {
  let {
    theme
  } = _ref;
  return {
    marginTop: theme.spacing(1),
    borderRadius: theme.spacing(1),
    textTransform: 'none'
    // fontWeight: 600,
  };
});
const RemoveContactPopover = _ref2 => {
  let {
    keyring,
    onClose
  } = _ref2;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .useWallet */ .e6)();
  const displayAddress = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (!keyring.address) {
      return 'Invalid';
    }
    const address = keyring.address;
    return (0,_ui_utils__WEBPACK_IMPORTED_MODULE_2__/* .shortAddress */ .SO)(address);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Popover__WEBPACK_IMPORTED_MODULE_6__/* .Popover */ ._, {
    onClose: onClose,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .o, {
      justifyCenter: true,
      itemsCenter: true,
      gap: "xl" // Consistent spacing with RemoveWalletPopover
      ,
      style: {
        padding: '20px',
        width: '300px'
      } // Matching width and padding
      ,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
        style: {
          width: 40,
          // Larger icon for better visibility
          height: 40,
          borderRadius: '2rem',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: '#FF4444',
          // Consistent red color
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(255, 68, 68, 0.3)' // Matching shadow
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__/* .FontAwesomeIcon */ .u, {
          icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__/* .faTrashCan */ .sHK,
          style: {
            height: '1.25rem',
            color: '#fff'
          }
        }), " "]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Card__WEBPACK_IMPORTED_MODULE_4__/* .Card */ .M, {
        preset: "style2",
        style: {
          width: '100%',
          // Full width
          padding: '16px',
          // Consistent padding
          border: '1px solid #e0e0e0',
          borderRadius: '8px'
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .o, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .a, {
            text: keyring.name,
            textCenter: true,
            preset: "bold"
          }), " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .a, {
            text: displayAddress,
            preset: "sub",
            textCenter: true,
            color: "textDim"
          }), " "]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .a, {
        text: "This action will permanently remove the contact from your address book.",
        textCenter: true,
        style: {
          fontSize: '14px',
          lineHeight: '1.5',
          maxWidth: '100%'
        } // Consistent text styling
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Text__WEBPACK_IMPORTED_MODULE_7__/* .Text */ .a, {
        text: "This action is not reversible.",
        color: "danger",
        preset: "bold",
        textCenter: true,
        style: {
          fontSize: '14px',
          textDecoration: 'underline'
        } // Consistent warning style
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Column__WEBPACK_IMPORTED_MODULE_5__/* .Column */ .o, {
        gap: "md",
        style: {
          width: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
          size: "middle",
          block: true,
          onClick: e => {
            if (onClose) {
              onClose();
            }
          },
          style: {
            backgroundColor: '#f0f0f0',
            // Neutral gray
            color: '#333',
            border: '1px solid #d0d0d0',
            borderRadius: '6px',
            height: '40px',
            // Fixed height for alignment
            display: 'flex',
            // Center text
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: "Cancel"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd_lib_button__WEBPACK_IMPORTED_MODULE_10__["default"], {
          type: "primary",
          danger: true,
          size: "middle",
          block: true,
          onClick: async () => {
            await wallet.removeContact(keyring.address);
            window.history.go(-1);
          },
          style: {
            borderRadius: '6px',
            height: '40px',
            // Fixed height for consistency
            display: 'flex',
            // Center text
            alignItems: 'center',
            justifyContent: 'center'
          },
          children: "Remove"
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
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

/***/ }),

/***/ 98688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ EditContactNameScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58256);
/* harmony import */ var antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_message_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_message__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(31036);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96651);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80864);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(33220);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_RemoveContactPopover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(48818);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(23848);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(92792);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_2__]);
_ui_components__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









// 自定义按钮样式


const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .cp)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .q)(_ref => {
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
function EditContactNameScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_8__/* .useTranslation */ .G)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_5__/* .useTools */ .w)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__/* .useLocation */ .IT)();
  const {
    account
  } = state;
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .useWallet */ .e6)();
  const [alianName, setAlianName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(account.name || '');
  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const [removeVisible, setRemoveVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
  const validateName = async name => {
    // 去除首尾空格
    const trimmedName = name.trim();

    // 检查是否为空
    if (!trimmedName) {
      return t('Name cannot be empty');
    }

    // 检查长度 (例如限制在32个字符)
    if (trimmedName.length > 32) {
      return t('Name cannot exceed 32 characters');
    }

    // 检查特殊字符 (只允许字母、数字、空格和基本标点)
    if (!/^[a-zA-Z0-9\s.,_-]+$/.test(trimmedName)) {
      return t('Name contains invalid characters');
    }
    return '';
  };
  const handleOnChange = async e => {
    const newName = e.target.value;
    setAlianName(newName);
    const validationError = await validateName(newName);
    setError(validationError);
  };
  const [nameError, setNameError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  // 验证名称
  const isValidName = name => {
    const trimmedName = name.trim();
    return trimmedName.length > 0 && !/\s/.test(trimmedName) && trimmedName.length <= 32;
  };
  // 实时验证输入
  const validateInputs = alianName => {
    const nameToCheck = alianName;

    // 验证名称
    if (!nameToCheck) {
      setNameError(t('Name cannot be empty'));
    } else if (!isValidName(nameToCheck)) {
      setNameError(t('Invalid name: No spaces, 1-32 characters'));
    } else {
      setNameError('');
    }
  };
  const handleOnClick = async () => {
    const validationError = await validateName(alianName);
    if (validationError) {
      setError(validationError);
      return;
    }
    if (!alianName || nameError) return;
    if (!alianName) return antd_lib_message__WEBPACK_IMPORTED_MODULE_10__["default"].warning(t('Please enter a name'));
    const existingContacts = await wallet.listContact();
    if (existingContacts.some(contact => contact.name === alianName && account.address !== contact.address)) {
      return tools.toastError(t('This name already exists in contacts'));
    }
    const newContact = {
      ...account,
      name: alianName.trim()
    };
    await wallet.updateContact(newContact);
    window.history.go(-1);
  };
  const handleOnKeyUp = e => {
    if ('Enter' === e.key) {
      handleOnClick();
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    console.log('account', account.name);
    setAlianName(() => account.name);
  }, [account.name]);
  const validName = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(() => {
    if (alianName.length == 0) {
      return false;
    }
    return true;
  }, [alianName]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Header */ .ek, {
      onBack: () => {
        window.history.go(-1);
      },
      title: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_4__/* .shortAddress */ .SO)(account.address, 10)
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Content */ .kP, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Input */ .EF, {
        placeholder: account.name,
        onChange: e => {
          setAlianName(e.target.value);
          validateInputs(e.target.value);
        },
        onKeyUp: e => handleOnKeyUp(e),
        autoFocus: true
      }), error && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_2__/* .Text */ .a, {
        text: error,
        preset: "regular",
        color: "red",
        style: {
          marginTop: 8,
          marginBottom: 8
        }
      }), nameError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        style: {
          color: 'red',
          fontSize: '12px',
          marginTop: '4px'
        },
        children: nameError
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledButton, {
        disabled: !alianName || !validName || !!nameError,
        text: t('Change Contact Name'),
        preset: "primary",
        className: "!h-[42px]",
        variant: "contained",
        onClick: handleOnClick
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(StyledButton, {
        text: t('Remove Contact'),
        preset: "danger",
        className: "!h-[42px]",
        variant: "outlined",
        onClick: () => {
          setRemoveVisible(true);
        }
      })]
    }), removeVisible && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components_RemoveContactPopover__WEBPACK_IMPORTED_MODULE_3__/* .RemoveContactPopover */ .Y, {
      keyring: account,
      onClose: () => {
        setRemoveVisible(false);
      }
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);