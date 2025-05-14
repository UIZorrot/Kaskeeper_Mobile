"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[2685],{

/***/ 12685:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChangePasswordScreen)
/* harmony export */ });
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(54431);
/* harmony import */ var antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7669);
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17508);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13108);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(86990);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(96540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88658);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_5__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_1__, _MainRoute__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */



// import Visibility from '@mui/icons-material/Visibility';
// import VisibilityOff from '@mui/icons-material/VisibilityOff';





function ChangePasswordScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_7__/* .useTranslation */ .B)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_5__/* .useNavigate */ .Z)();
  const [originPassword, setOriginPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [newPassword, setNewPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [confirmPassword, setConfirmPassword] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)('');
  const [disabled, setDisabled] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true);
  // const [showOriginPassword, setShowOriginPassword] = useState(false);
  // const [showNewPassword, setShowNewPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .vT)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_2__/* .useTools */ .D)();
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (originPassword.length > 0 && newPassword.length >= 5 && newPassword === confirmPassword && originPassword !== newPassword && !/\s/.test(newPassword)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [originPassword, newPassword, confirmPassword]);
  const verify = async () => {
    try {
      await wallet.changePassword(originPassword, newPassword);
      tools.toastSuccess(t('Success'));
      navigate('MainScreen');
    } catch (err) {
      console.log(err);
      tools.toastError(err.message);
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Layout */ .PE, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Header */ .Y9, {
      onBack: () => {
        window.history.go(-1);
      },
      title: t('Change Password')
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Content */ .UC, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_1__/* .Column */ .VP, {
        gap: "lg",
        style: {
          marginTop: '16px'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Password, {
          placeholder: "Current Password",
          value: originPassword,
          autoFocus: true,
          onChange: e => {
            const {
              target
            } = e;
            const regex = /[\u4e00-\u9fa5]/g;
            setOriginPassword(target.value.replace(regex, ''));
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Password, {
          placeholder: "New Password",
          value: newPassword,
          onChange: e => {
            const {
              target
            } = e;
            const regex = /[\u4e00-\u9fa5]/g;
            setNewPassword(target.value.replace(regex, ''));
          },
          onBlur: e => {
            if (newPassword.length < 5) {
              return tools.toastWarning(t('at least five characters'));
            }
            if (newPassword.length > 0 && confirmPassword.length > 0 && newPassword !== confirmPassword) {
              return tools.toastWarning(t('Entered passwords differ'));
            }
            if (newPassword === originPassword) {
              return tools.toastWarning(t('New password cannot be the same as the old password'));
            }
            if (/\s/.test(newPassword)) {
              return tools.toastWarning(t('Password cannot contain spaces'));
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(antd_lib_input__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .A.Password, {
          placeholder: "Confirm New Password",
          value: confirmPassword,
          onChange: e => setConfirmPassword(e.target.value),
          onBlur: e => {
            if (newPassword.length > 0 && confirmPassword.length > 0 && newPassword !== confirmPassword) {
              tools.toastWarning('Entered passwords differ');
            }
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A, {
          className: `button-com ${disabled && "button-com-disabled"}`,
          disabled: disabled,
          variant: "contained",
          color: "primary",
          onClick: verify,
          fullWidth: true,
          children: t('Change Password')
        })]
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);