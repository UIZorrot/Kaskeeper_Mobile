"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[247],{

/***/ 17778:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   S: () => (/* binding */ Empty)
/* harmony export */ });
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95662);
/* harmony import */ var antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_empty_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45396);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13907);
/* harmony import */ var _Row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51942);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);





function Empty(props) {
  const {
    text,
    className
  } = props;
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_3__/* .useTranslation */ .B)();
  const content = text || t('No Data Found');
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: className,
    style: {
      alignSelf: 'center'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Row__WEBPACK_IMPORTED_MODULE_1__/* .Row */ .f, {
      justifyCenter: true,
      style: {
        flex: 1,
        alignItems: 'center',
        height: '30vh'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        description: content,
        image: antd_lib_empty__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A.PRESENTED_IMAGE_SIMPLE
      })
    })
  });
}

/***/ }),

/***/ 58118:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/plusCircleOutlined.7d92d27f.svg";

/***/ }),

/***/ 90747:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "static/media/ellipsisOutlined.fa084e77.svg";

/***/ }),

/***/ 95267:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyItem: () => (/* binding */ MyItem),
/* harmony export */   "default": () => (/* binding */ ContackBookScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17508);
/* harmony import */ var _ui_components_Empty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17778);
/* harmony import */ var _ui_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13108);
/* harmony import */ var rc_virtual_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60551);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(96540);
/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(13907);
/* harmony import */ var _MainRoute__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(88658);
/* harmony import */ var _ui_images_common_ellipsisOutlined_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(90747);
/* harmony import */ var _ui_images_common_plusCircleOutlined_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(58118);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(74848);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__]);
([_ui_components__WEBPACK_IMPORTED_MODULE_0__, _MainRoute__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */












const MyItem = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_5__.forwardRef)(function MyItem(_ref, ref) {
  let {
    account,
    autoNav
  } = _ref;
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .Z)();
  const tools = (0,_ui_components_ActionComponent__WEBPACK_IMPORTED_MODULE_1__/* .useTools */ .D)();
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .B)();
  if (!(account !== null && account !== void 0 && account.address)) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {});
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Card */ .Zp, {
    style: {
      backgroundColor: '#FFFFFF',
      borderRadius: 12,
      border: '1px solid rgba(10,36,99,0.15)',
      padding: 12,
      marginTop: 12,
      transition: 'all 0.3s'
    },
    classname: "hover",
    justifyBetween: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Row */ .fI, {
      full: true,
      justifyBetween: true,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
        full: true,
        onClick: async () => {
          (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .copyToClipboard */ .lW)(account.address);
          tools.toastSuccess(t('Copied address'));
        },
        style: {
          cursor: 'pointer'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
          text: account.name,
          size: "md",
          style: {
            color: '#0A2463',
            fontWeight: 500,
            fontSize: 14,
            wordBreak: 'break-all'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Text */ .EY, {
          text: (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .shortAddress */ .Dc)(account.address, 13),
          preset: "sub",
          size: "xs",
          style: {
            fontSize: '12px',
            color: 'rgba(10, 36, 99, 0.65)'
          }
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
        selfItemsCenter: true,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
          onClick: e => {
            e.stopPropagation();
            navigate('EditContactNameScreen', {
              account
            });
          },
          style: {
            // padding: 6,
            // borderRadius: 6,
            // background: 'rgba(0, 0, 0, 0.05)',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
            ':hover': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)'
            }
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
            src: _ui_images_common_ellipsisOutlined_svg__WEBPACK_IMPORTED_MODULE_7__,
            width: 18,
            height: 18,
            alt: ""
          })
        })
      })]
    })
  });
});
function ContackBookScreen() {
  const {
    t
  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_10__/* .useTranslation */ .B)();
  const wallet = (0,_ui_utils__WEBPACK_IMPORTED_MODULE_3__/* .useWallet */ .vT)();
  const navigate = (0,_MainRoute__WEBPACK_IMPORTED_MODULE_6__/* .useNavigate */ .Z)();
  const [items, setItems] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
  const getList = async () => {
    const list = await wallet.listContact();
    setItems(list);
  };
  (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {
    getList();
  }, [wallet]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    style: {
      backgroundColor: '#FFFFFF',
      minHeight: '100vh'
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Header */ .Y9, {
      onBack: () => window.history.go(-1),
      parentName: "SettingsTabScreen",
      title: t('My Contacts'),
      style: {
        backgroundColor: '#FFFFFF',
        height: 56,
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
      },
      RightComponent: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Icon */ .In, {
        onClick: () => navigate('CreateContactScreen'),
        style: {
          padding: 6,
          borderRadius: 6,
          cursor: 'pointer',
          transition: 'background-color 0.3s',
          ':hover': {
            backgroundColor: 'rgba(0, 0, 0, 0.1)'
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("img", {
          src: _ui_images_common_plusCircleOutlined_svg__WEBPACK_IMPORTED_MODULE_8__,
          width: 18,
          height: 18,
          alt: ""
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      style: {
        padding: '16px',
        overflowY: 'auto'
      },
      children: items && items.length > 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(rc_virtual_list__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
        data: items,
        "data-id": "list",
        itemHeight: 64 // 调整高度以匹配卡片样式
        ,
        itemKey: item => item.address,
        children: (item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(MyItem, {
          account: item,
          autoNav: true
        })
      }) :
      /*#__PURE__*/
      // <Row justifyCenter style={{ flex: 1, alignItems: 'center', height: '50vh' }}>
      //   <Text text={t('No contacts')} size="md" style={{ color: 'rgba(0, 0, 0, 0.45)', fontSize: 12 }} />
      // </Row>
      (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_ui_components_Empty__WEBPACK_IMPORTED_MODULE_2__/* .Empty */ .S, {
        text: t('No contacts')
      })
    })]
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);