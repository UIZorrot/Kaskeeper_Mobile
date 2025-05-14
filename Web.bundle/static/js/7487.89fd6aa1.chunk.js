"use strict";
(self["webpackChunkKaspaWallet"] = self["webpackChunkKaspaWallet"] || []).push([[7487],{

/***/ 22310:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r: () => (/* binding */ AddressTypeCard),
  b: () => (/* binding */ AddressTypeCard2)
});

// EXTERNAL MODULE: ./src/ui/theme/font.ts
var font = __webpack_require__(2628);
// EXTERNAL MODULE: ./src/ui/utils/index.ts + 2 modules
var utils = __webpack_require__(13108);
// EXTERNAL MODULE: ./src/ui/components/Card/index.tsx
var Card = __webpack_require__(39053);
// EXTERNAL MODULE: ./src/ui/components/Column/index.tsx
var Column = __webpack_require__(98505);
// EXTERNAL MODULE: ./src/ui/components/ActionComponent/index.tsx + 6 modules
var ActionComponent = __webpack_require__(17508);
// EXTERNAL MODULE: ./src/ui/components/Icon/index.tsx
var Icon = __webpack_require__(43264);
// EXTERNAL MODULE: ./src/ui/components/Row/index.tsx + 1 modules
var Row = __webpack_require__(51942);
// EXTERNAL MODULE: ./src/ui/components/Text/index.tsx + 1 modules
var Text = __webpack_require__(20577);
// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/useTranslation.js + 1 modules
var useTranslation = __webpack_require__(13907);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
;// ./src/ui/components/CopyableAddress/index.tsx
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */







function CopyableAddress(_ref) {
  let {
    address
  } = _ref;
  const {
    t
  } = (0,useTranslation/* useTranslation */.B)();
  const tools = (0,ActionComponent/* useTools */.D)();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
    itemsCenter: true,
    gap: "sm",
    onClick: e => {
      (0,utils/* copyToClipboard */.lW)(address).then(() => {
        tools.toastSuccess(t('Copied'));
      });
    },
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
      icon: "copy",
      color: "textDim"
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
      text: (0,utils/* shortAddress */.Dc)(address),
      color: "textDim"
    })]
  });
}
;// ./src/ui/components/AddressTypeCard/index.tsx









function AddressTypeCard(props) {
  const {
    onClick,
    label,
    address,
    checked,
    assets
  } = props;
  const hasVault = Boolean(assets.sompi && assets.sompi > 0);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Z, {
    px: "zero",
    py: "zero",
    gap: "zero",
    rounded: true,
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.V, {
      full: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
        justifyBetween: true,
        px: "md",
        pt: "md",
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          justifyCenter: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: label,
            size: "xs",
            disableTranslate: true
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
        justifyBetween: true,
        px: "md",
        pb: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CopyableAddress, {
          address: address
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          justifyCenter: true,
          children: checked && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
            icon: "check"
          })
        })]
      }), hasVault && /*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
        justifyBetween: true,
        bg: "bg3",
        roundedBottom: true,
        px: "md",
        py: "md",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
          justifyCenter: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
            icon: "kas",
            size: font/* fontSizes */.G.iconMiddle
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: `${assets.total_kas} KAS`,
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
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Card/* Card */.Z, {
    px: "zero",
    py: "zero",
    gap: "zero",
    rounded: true,
    onClick: onClick,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Column/* Column */.V, {
      full: true,
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
        justifyBetween: true,
        px: "md",
        pt: "md",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          justifyCenter: true,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: label,
            size: "xs",
            disableTranslate: true
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Column/* Column */.V, {
          justifyCenter: true,
          children: checked && /*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
            icon: "check"
          })
        })]
      }), items.map(v => /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
        px: "md",
        pb: "sm",
        itemsCenter: true,
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Row/* Row */.f, {
          style: {
            width: '120px'
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(CopyableAddress, {
            address: v.address
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
          text: `(${v.path})`,
          size: "xs",
          color: "textDim",
          disableTranslate: true
        }), v.sompi > 0 && /*#__PURE__*/(0,jsx_runtime.jsxs)(Row/* Row */.f, {
          justifyCenter: true,
          gap: "zero",
          itemsCenter: true,
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Icon/* Icon */.I, {
            icon: "kas",
            size: font/* fontSizes */.G.iconMiddle
          }), /*#__PURE__*/(0,jsx_runtime.jsx)(Text/* Text */.EY, {
            text: `${(0,utils/* sompiToKAS */.jF)(v.sompi)} KAS`,
            color: "yellow",
            size: "xxxs"
          })]
        })]
      }, v.address))]
    })
  });
}

/***/ }),

/***/ 57487:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TestScreen)
/* harmony export */ });
/* harmony import */ var _ui_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72260);
/* harmony import */ var _ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22310);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74848);
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Layout */ .PE, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Content */ .UC, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_ui_components__WEBPACK_IMPORTED_MODULE_0__/* .Column */ .VP, {
        my: "md",
        mt: "md",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_1__/* .AddressTypeCard2 */ .b, {
          label: "Modern",
          items: items,
          checked: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_ui_components_AddressTypeCard__WEBPACK_IMPORTED_MODULE_1__/* .AddressTypeCard2 */ .b, {
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