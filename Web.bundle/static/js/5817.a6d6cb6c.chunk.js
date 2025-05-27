"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[5817],{

/***/ 35817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CreatePasswordScreen)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96540);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47767);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13108);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(88658);
/* harmony import */ var _ui_images_wallet_support_pwd_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(56427);
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(14073);
/* harmony import */ var _mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6757);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(87164);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_4__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












// import Content from '@/ui/components/Styled/Content';

// type Status = '' | 'error' | 'warning' | undefined;

function CreatePasswordScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_4__/* .useNavigate */ .Z)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .vT)();
  const {
    state
  } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_8__/* .useLocation */ .zy)();
  const {
    isNewAccount
  } = state;
  const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [password2, setPassword2] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [run, loading] = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWalletRequest */ .QK)(wallet.boot, {
    onSuccess() {
      console.log('boot success');
      if (isNewAccount) {
        navigate('CreateHDWalletScreen', {
          isImport: false,
          fromUnlock: true
        });
      } else {
        navigate('CreateHDWalletScreen', {
          isImport: true,
          fromUnlock: true
        });
      }
    },
    onError(err) {
      console.log('boot onError', err.message);
      tools.toastError(err.message);
    }
  });
  const btnClick = () => {
    console.log('boot success', disabled);
    if (disabled) {
      passwordEmptyVerify();
    } else {
      run(password.trim());
    }
  };
  const verify = pwd2 => {
    if (pwd2 && pwd2 !== password) {
      tools.toastWarning(t('Entered passwords differ'));
    }
  };

  // 空校验
  const passwordEmptyVerify = () => {
    if (!password) {
      tools.toastWarning(t('Password shall not space'));
    } else if (!password2) {
      tools.toastWarning(t('Confirm Password shall not space'));
    } else {
      passwordVerify();
    }
  };
  const passwordVerify = () => {
    setDisabled(true);
    if (password) {
      if (password.length < 5) {
        tools.toastWarning(t('Password must contain at least 5 characters'));
        return;
      }
      if (password.includes(" ")) {
        tools.toastWarning(t('Password shall not contain space'));
        return;
      }
      if (password2) {
        if (/[\u4e00-\u9fa5]/.test(password) || /[\u4e00-\u9fa5]/.test(password2)) {
          tools.toastWarning(t('Chinese characters are not allowed'));
          return;
        }
        if (password === password2) {
          setDisabled(false);
          return;
        }
      }
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    passwordVerify();
  }, [password, password2]);
  const handleOnKeyUp = e => {
    if (!disabled && 'Enter' == e.key) {
      btnClick();
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      classname: "!px-0 !pb-4",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
        className: "px-4 flex-1 overflow-y-auto flex-grow space-y-5",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
          fontWeight: 700,
          variant: "h3",
          children: t('Set up a password')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .A, {
          variant: "body1",
          color: "text.secondary",
          children: t('Passwords are used to unlock your wallet')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
          className: "flex justify-center py-6",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
            src: _ui_images_wallet_support_pwd_svg__WEBPACK_IMPORTED_MODULE_5__,
            alt: ""
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          placeholder: "Password",
          type: "password",
          fullWidth: true,
          color: "info",
          onBlur: e => {
            setPassword(e.target.value);
          },
          autoFocus: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material_OutlinedInput__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .A, {
          placeholder: t('Confirm Password'),
          type: "password",
          fullWidth: true,
          color: "info",
          onChange: e => {
            setPassword2(e.target.value);
          },
          onBlur: e => {
            verify(e.target.value);
          },
          onKeyUp: e => handleOnKeyUp(e)
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .$n, {
        className: "!mx-4 !rounded-lg !h-[42px]",
        size: "large",
        variant: "contained",
        onClick: btnClick,
        children: t('Next')
      })]
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 56427:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/support-pwd.920cc39f.svg";

/***/ })

}]);