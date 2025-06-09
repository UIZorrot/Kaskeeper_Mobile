"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8948],{

/***/ 8948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreateContactScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96651);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23848);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48818);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80864);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(92792);
/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(63116);
/* harmony import */ var _ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(17534);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__]);
_ui_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */









// 自定义按钮样式


const StyledButton = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .cp)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .q)(_ref => {
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
function CreateContactScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .G)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .e6)();
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const [alianName, setAlianName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [defaultName, setDefaultName] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [nameError, setNameError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [addressError, setAddressError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .w)();
  const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const currentLayer = (0,_ui_state_settings_hooks__WEBPACK_IMPORTED_MODULE_4__/* .useLayerType */ .wl)();

  // 验证 Kaspa 地址
  const isValidKaspaAddress = address => {
    const trimmedAddress = address.trim();
    const kaspaAddressPattern = /^(kaspa|kaspatest):[a-z0-9]{32,}$/i;
    const addressL2 = trimmedAddress.startsWith('0x') && ethers__WEBPACK_IMPORTED_MODULE_8__/* .isAddress */ .C2(trimmedAddress);
    return trimmedAddress.length > 0 && currentLayer === 'L2' ? addressL2 : !/\s/.test(trimmedAddress) && kaspaAddressPattern.test(trimmedAddress);
  };

  // 验证名称
  const isValidName = name => {
    const trimmedName = name.trim();
    return trimmedName.length > 0 && !/\s/.test(trimmedName) && trimmedName.length <= 50;
  };

  // 实时验证输入
  const validateInputs = _ref2 => {
    let {
      name,
      address
    } = _ref2;
    const nameToCheck = name;
    const trimmedAddress = address.trim();

    // 验证名称
    if (!nameToCheck) {
      setNameError(t('Name cannot be empty'));
    } else if (!isValidName(nameToCheck)) {
      setNameError(t('Invalid name: No spaces, 1-50 characters'));
    } else {
      setNameError('');
    }

    // 验证地址
    console.log('trimmedAddress', address, trimmedAddress);
    if (!trimmedAddress) {
      setAddressError(t('Address cannot be empty'));
    } else if (!isValidKaspaAddress(trimmedAddress)) {
      setAddressError(t("Invalid ".concat(currentLayer === 'L2' ? 'eKas' : 'Kaspa', " address format")));
    } else {
      setAddressError('');
    }

    // 更新按钮状态
    setDisabled(!isValidName(nameToCheck) || !isValidKaspaAddress(trimmedAddress));
  };
  const handleOnClick = async () => {
    const trimmedName = alianName.trim() || defaultName;
    const trimmedAddress = address.trim();
    if (!isValidName(trimmedName) || !isValidKaspaAddress(trimmedAddress)) {
      validateInputs({
        name: trimmedName,
        address: trimmedAddress
      });
      return;
    }
    const existingContacts = await wallet.listContact();
    if (existingContacts.some(contact => contact.address === trimmedAddress)) {
      return tools.toastError(t('This address already exists in contacts'));
    } else if (existingContacts.some(contact => contact.name === alianName)) {
      return tools.toastError(t('This name already exists in contacts'));
    }
    try {
      const newContact = {
        name: trimmedName,
        address: trimmedAddress,
        isAlias: true,
        isContact: true
      };
      await wallet.addContact(newContact);
      tools.toastSuccess(t('Contact added successfully'));
      window.history.go(-1);
    } catch (error) {
      tools.toastError(t('Failed to add contact'));
      console.error('Error adding contact:', error);
    }
  };
  const handleOnKeyUp = e => {
    if (e.key === 'Enter' && !disabled) {
      handleOnClick();
    }
  };
  const init = async () => {
    try {
      const items = await wallet.listContact();
      const name = items && items.length > 0 ? "Contact_".concat(items.length + 1) : 'Contact_1';
      setDefaultName(name);
      setAlianName(name);
    } catch (error) {
      console.error('Error initializing contact:', error);
      tools.toastError(t('Failed to initialize contact list'));
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    init();
  }, []);

  // useEffect(() => {
  //   validateInputs();
  // }, [alianName, address]);

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ ._W, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .ek, {
      onBack: () => window.history.go(-1),
      title: t('New contact'),
      parentName: "ContackBookScreen"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
        gap: "lg",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .EF, {
            placeholder: defaultName,
            value: alianName,
            onChange: e => {
              console.log('input change');
              setAlianName(e.target.value);
              validateInputs({
                name: e.target.value,
                address: address
              });
              ;
            },
            onKeyUp: handleOnKeyUp,
            autoFocus: true
          }), nameError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              color: 'red',
              fontSize: '12px',
              marginTop: '4px'
            },
            children: nameError
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .ou, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Input */ .EF, {
            preset: "address",
            value: address
            // addressInputData={address}
            ,
            onChange: e => {
              console.log('input change', e.target.value);
              setAddress(() => e.target.value);
              validateInputs({
                address: e.target.value,
                name: alianName || defaultName
              });
            },
            onKeyUp: handleOnKeyUp
          }), addressError && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            style: {
              color: 'red',
              fontSize: '12px',
              marginTop: '4px'
            },
            children: addressError
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(StyledButton, {
          fullWidth: true,
          variant: "contained",
          disabled: disabled,
          className: "flex-1",
          sx: {
            marginTop: "15px"
          },
          onClick: handleOnClick,
          children: "Confirm"
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);