"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[8168],{

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

/***/ 18168:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83120);
/* harmony import */ var _ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43872);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2488);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_ui_components__WEBPACK_IMPORTED_MODULE_0__]);
_ui_components__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function TestScreen() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TestAddressTypeCard, {});
}
function TestAddressTypeCard() {
  const items = [{
    address: 'kaspa:1234567890',
    path: 'm/84\'/0\'/0\'/0/0',
    sompi: 100
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ ._W, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .kP, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .ou, {
        my: "md",
        mt: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_1__/* .AddressTypeCard2 */ .S, {
          label: "Modern",
          items: items,
          checked: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_1__/* .AddressTypeCard2 */ .S, {
          label: "Legacy",
          items: items,
          checked: false
        })]
      })
    })
  });
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

}]);