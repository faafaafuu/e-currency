webpackHotUpdate("main",{

/***/ "./src/components/ExchangePage/components/change_asset/change_asset.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/change_asset/change_asset.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultilineTextFields; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _coin_logo_coins_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../coin_logo/coins_data */ "./src/components/ExchangePage/components/coin_logo/coins_data.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);



var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/change_asset/change_asset.js",
    _s = __webpack_require__.$Refresh$.signature();







const currencies = _coin_logo_coins_data__WEBPACK_IMPORTED_MODULE_6__["default"];
const useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch'
    }
  }
}));
function MultilineTextFields() {
  _s();

  const classes = useStyles();
  const [currency, setCurrency] = react__WEBPACK_IMPORTED_MODULE_1___default.a.useState('EUR');

  const handleChange = event => {
    setCurrency(event.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
    className: classes.root,
    noValidate: true,
    autoComplete: "off",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_3__["default"], {
        id: "outlined-select-currency-native",
        select: true,
        value: currency,
        onChange: handleChange,
        SelectProps: {
          native: true
        },
        variant: "outlined",
        children: currencies.map(option => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("option", {
          value: option.name,
          children: [console.log(option), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            component: option.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this), option.name]
        }, option.name, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

_s(MultilineTextFields, "eziT3You38bUM06W87zhX51DxG8=", false, function () {
  return [useStyles];
});

_c = MultilineTextFields;

var _c;

__webpack_require__.$Refresh$.register(_c, "MultilineTextFields");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/coins_data.js":
/*!************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/coins_data.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var _svg_Advcashuah__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./svg/Advcashuah */ "./src/components/ExchangePage/components/coin_logo/svg/Advcashuah.js");
/* harmony import */ var _svg_Alfabank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg/Alfabank */ "./src/components/ExchangePage/components/coin_logo/svg/Alfabank.js");
/* harmony import */ var _svg_Bitcoin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/Bitcoin */ "./src/components/ExchangePage/components/coin_logo/svg/Bitcoin.js");
/* harmony import */ var _svg_BitcoinCash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/BitcoinCash */ "./src/components/ExchangePage/components/coin_logo/svg/BitcoinCash.js");
/* harmony import */ var _svg_Bnb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/Bnb */ "./src/components/ExchangePage/components/coin_logo/svg/Bnb.js");
/* harmony import */ var _svg_Cardano__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/Cardano */ "./src/components/ExchangePage/components/coin_logo/svg/Cardano.js");
/* harmony import */ var _svg_Dogecoin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./svg/Dogecoin */ "./src/components/ExchangePage/components/coin_logo/svg/Dogecoin.js");
/* harmony import */ var _svg_Eos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./svg/Eos */ "./src/components/ExchangePage/components/coin_logo/svg/Eos.js");
/* harmony import */ var _svg_Ethereum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./svg/Ethereum */ "./src/components/ExchangePage/components/coin_logo/svg/Ethereum.js");
/* harmony import */ var _svg_EthereumClassic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./svg/EthereumClassic */ "./src/components/ExchangePage/components/coin_logo/svg/EthereumClassic.js");
/* harmony import */ var _svg_Kukuruza__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./svg/Kukuruza */ "./src/components/ExchangePage/components/coin_logo/svg/Kukuruza.js");
/* harmony import */ var _svg_Litecoin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./svg/Litecoin */ "./src/components/ExchangePage/components/coin_logo/svg/Litecoin.js");
/* harmony import */ var _svg_LivecoinRUB__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./svg/LivecoinRUB */ "./src/components/ExchangePage/components/coin_logo/svg/LivecoinRUB.js");
/* harmony import */ var _svg_Monero__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./svg/Monero */ "./src/components/ExchangePage/components/coin_logo/svg/Monero.js");
/* harmony import */ var _svg_Mono__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./svg/Mono */ "./src/components/ExchangePage/components/coin_logo/svg/Mono.js");
/* harmony import */ var _svg_Neo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./svg/Neo */ "./src/components/ExchangePage/components/coin_logo/svg/Neo.js");
/* harmony import */ var _svg_Oshad__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./svg/Oshad */ "./src/components/ExchangePage/components/coin_logo/svg/Oshad.js");
/* harmony import */ var _svg_PerfectMoneyUSD__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./svg/PerfectMoneyUSD */ "./src/components/ExchangePage/components/coin_logo/svg/PerfectMoneyUSD.js");
/* harmony import */ var _svg_PMeVoucher__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./svg/PMeVoucher */ "./src/components/ExchangePage/components/coin_logo/svg/PMeVoucher.js");
/* harmony import */ var _svg_Privat24UAH__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./svg/Privat24UAH */ "./src/components/ExchangePage/components/coin_logo/svg/Privat24UAH.js");
/* harmony import */ var _svg_Pumb__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./svg/Pumb */ "./src/components/ExchangePage/components/coin_logo/svg/Pumb.js");
/* harmony import */ var _svg_QIWI__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./svg/QIWI */ "./src/components/ExchangePage/components/coin_logo/svg/QIWI.js");
/* harmony import */ var _svg_Ripple__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./svg/Ripple */ "./src/components/ExchangePage/components/coin_logo/svg/Ripple.js");
/* harmony import */ var _svg_Sber__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./svg/Sber */ "./src/components/ExchangePage/components/coin_logo/svg/Sber.js");
/* harmony import */ var _svg_Stellar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./svg/Stellar */ "./src/components/ExchangePage/components/coin_logo/svg/Stellar.js");
/* harmony import */ var _svg_TetherERC20__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./svg/TetherERC20 */ "./src/components/ExchangePage/components/coin_logo/svg/TetherERC20.js");
/* harmony import */ var _svg_Tinkoff__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./svg/Tinkoff */ "./src/components/ExchangePage/components/coin_logo/svg/Tinkoff.js");
/* harmony import */ var _svg_Tron__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./svg/Tron */ "./src/components/ExchangePage/components/coin_logo/svg/Tron.js");
/* harmony import */ var _svg_VisaMasterCardRUB__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./svg/VisaMasterCardRUB */ "./src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardRUB.js");
/* harmony import */ var _svg_VisaMasterCardUAH__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./svg/VisaMasterCardUAH */ "./src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardUAH.js");
/* harmony import */ var _svg_Vtb__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./svg/Vtb */ "./src/components/ExchangePage/components/coin_logo/svg/Vtb.js");
/* harmony import */ var _svg_Webmoneyrub__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./svg/Webmoneyrub */ "./src/components/ExchangePage/components/coin_logo/svg/Webmoneyrub.js");
/* harmony import */ var _svg_WhitebitUSD__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./svg/WhitebitUSD */ "./src/components/ExchangePage/components/coin_logo/svg/WhitebitUSD.js");
/* harmony import */ var _svg_Zcash__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./svg/Zcash */ "./src/components/ExchangePage/components/coin_logo/svg/Zcash.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);











 // import ExmoBTC from './svg/ExmoBTC';



 // import Mir from './svg/Mir';


















 // import Waves from './svg/Waves';




const coin_data = [{
  name: 'Advcashuah',
  tic: 'UAH',
  logo: _svg_Advcashuah__WEBPACK_IMPORTED_MODULE_0__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Alfabank',
  tic: 'RUB',
  logo: _svg_Alfabank__WEBPACK_IMPORTED_MODULE_1__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Bitcoin',
  tic: 'BTC',
  logo: _svg_Bitcoin__WEBPACK_IMPORTED_MODULE_2__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'BitcoinCash',
  tic: 'BCH',
  logo: _svg_BitcoinCash__WEBPACK_IMPORTED_MODULE_3__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'BNB',
  tic: 'BNB',
  logo: _svg_Bnb__WEBPACK_IMPORTED_MODULE_4__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Cardano',
  tic: 'ADA',
  logo: _svg_Cardano__WEBPACK_IMPORTED_MODULE_5__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Dash',
  tic: 'DASH',
  logo: _svg_Bnb__WEBPACK_IMPORTED_MODULE_4__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Dogecoin',
  tic: 'DOGE',
  logo: _svg_Dogecoin__WEBPACK_IMPORTED_MODULE_6__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Eos',
  tic: 'EOS',
  logo: _svg_Eos__WEBPACK_IMPORTED_MODULE_7__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Ethereum',
  tic: 'ETH',
  logo: _svg_Ethereum__WEBPACK_IMPORTED_MODULE_8__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'EthereumClassic',
  tic: 'ETC',
  logo: _svg_EthereumClassic__WEBPACK_IMPORTED_MODULE_9__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Kukuruza',
  tic: 'RUB',
  logo: _svg_Kukuruza__WEBPACK_IMPORTED_MODULE_10__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Litecoin',
  tic: 'LTC',
  logo: _svg_Litecoin__WEBPACK_IMPORTED_MODULE_11__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'LivecoinRUB',
  tic: 'RUB',
  logo: _svg_LivecoinRUB__WEBPACK_IMPORTED_MODULE_12__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Monero',
  tic: 'XMR',
  logo: _svg_Monero__WEBPACK_IMPORTED_MODULE_13__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Mono',
  tic: 'UAH',
  logo: _svg_Mono__WEBPACK_IMPORTED_MODULE_14__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Neo',
  tic: 'NEO',
  logo: _svg_Neo__WEBPACK_IMPORTED_MODULE_15__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Oshad',
  tic: 'UAH',
  logo: _svg_Oshad__WEBPACK_IMPORTED_MODULE_16__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'PerfectMoneyUSD',
  tic: 'USD',
  logo: _svg_PerfectMoneyUSD__WEBPACK_IMPORTED_MODULE_17__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'PMeVoucher',
  tic: 'USD',
  logo: _svg_PMeVoucher__WEBPACK_IMPORTED_MODULE_18__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Privat24UAH',
  tic: 'UAH',
  logo: _svg_Privat24UAH__WEBPACK_IMPORTED_MODULE_19__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Pumb',
  tic: 'UAH',
  logo: _svg_Pumb__WEBPACK_IMPORTED_MODULE_20__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'QIWI',
  tic: 'RUB',
  logo: _svg_QIWI__WEBPACK_IMPORTED_MODULE_21__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Ripple',
  tic: 'XRP',
  logo: _svg_Ripple__WEBPACK_IMPORTED_MODULE_22__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Sber',
  tic: 'RUB',
  logo: _svg_Sber__WEBPACK_IMPORTED_MODULE_23__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Stellar',
  tic: 'XLM',
  logo: _svg_Stellar__WEBPACK_IMPORTED_MODULE_24__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'TetherERC20',
  tic: 'USDT',
  logo: _svg_TetherERC20__WEBPACK_IMPORTED_MODULE_25__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Tinkoff',
  tic: 'RUB',
  logo: _svg_Tinkoff__WEBPACK_IMPORTED_MODULE_26__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Tron',
  tic: 'TRX',
  logo: _svg_Tron__WEBPACK_IMPORTED_MODULE_27__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'VisaMasterCardRUB',
  tic: 'RUB',
  logo: _svg_VisaMasterCardRUB__WEBPACK_IMPORTED_MODULE_28__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'VisaMasterCardUAH',
  tic: 'UAH',
  logo: _svg_VisaMasterCardUAH__WEBPACK_IMPORTED_MODULE_29__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Webmoneyrub',
  tic: 'RUB',
  logo: _svg_Webmoneyrub__WEBPACK_IMPORTED_MODULE_31__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'WhitebitUSD',
  tic: 'USD',
  logo: _svg_WhitebitUSD__WEBPACK_IMPORTED_MODULE_32__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Zcash',
  tic: 'ZEC',
  logo: _svg_Zcash__WEBPACK_IMPORTED_MODULE_33__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}, {
  name: 'Vtb',
  tic: 'RUB',
  logo: _svg_Vtb__WEBPACK_IMPORTED_MODULE_30__["default"],
  currPrice: null,
  price: null,
  fields: NaN
}];
/* harmony default export */ __webpack_exports__["default"] = (coin_data);

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Advcashuah.js":
/*!****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Advcashuah.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Advcashuah.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0",
      fill: "#3baf6e"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M57.602 195.266h29.695v-2.114l49.918-119.297-11.328-24.703-68.285 144zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M40.32 102.273h168.77v3.84l-11.524 15.742H53.375L40.32 105.023zm0 0M64 134.016h123.137v3.84l-11.52 14.335-99.457 1.664L64 137.473zm0 0",
      fill: "#0a364f"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M192.258 196.098v-5.313L125.887 49.152l-1.086 55.871 37.12 91.075zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Alfabank.js":
/*!**************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Alfabank.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Alfabank.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M128.215 0c17.52 0 23.078 12.395 27.351 24.79 2.137 5.128 47.012 129.065 48.723 132.913.426.856 0 2.563-1.285 3.418-1.707.43-25.215 9.832-26.496 10.258-1.281.426-2.567-.426-3.418-1.711-.43-1.281-10.258-28.207-11.54-31.195h-67.1c-.852 2.988-11.11 29.914-11.54 31.195-.426 1.285-1.707 2.137-3.418 1.71-1.281-.425-24.789-9.827-26.496-10.257-1.285-.426-2.137-2.137-1.71-3.418C52.995 153 97.44 31.2 100.007 24.79 104.707 12.395 110.69 0 128.215 0M48.293 221.809c-1.281 0-2.563 1.285-2.563 2.566v29.063c0 1.28 1.282 2.562 2.563 2.562h159.414c1.281 0 2.563-1.281 2.563-2.563v-29.062c0-1.281-1.282-2.566-2.563-2.566H48.293m79.492-181.637l-22.648 67.953h45.726l-23.078-67.953c.43 0 0 0 0 0zm0 0",
      fill: "#ee2a23"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Bitcoin.js":
/*!*************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Bitcoin.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Bitcoin.js";


function SvgComponent(...props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256.254 127.746c0 70.695-57.309 128-128 128-70.695 0-128-57.305-128-128 0-70.691 57.305-128 128-128 70.691 0 128 57.309 128 128zm0 0",
      fill: "#f7931a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M184.52 109.602c2.402-17.204-10.399-26-28-32.403L162.12 54l-14-3.2-5.601 22.4c-3.598-.802-7.598-1.598-11.2-2.802l5.602-22.796-14-3.602-5.602 23.2c-3.199-.802-6-1.2-8.8-2l-19.2-4.802-3.601 15.204L96.12 78c5.598 1.602 6.8 5.2 6.399 8l-6.399 26.398c.399 0 .8.403 1.598.403-.399 0-.797-.403-1.598-.403l-9.2 36.801c-.8 1.602-2.401 4.403-6.401 3.2C80.52 152.8 70.12 150 70.12 150l-6.8 16 18.398 4.398c3.601.801 6.8 1.602 10 2.403l-6 23.199 14 3.602 5.601-23.204c4 1.204 7.602 2 11.2 2.801L110.922 202l14 3.602 6-23.204c24 4.403 42 2.801 49.598-18.796 6-17.602-.399-27.602-12.801-34 8-1.204 14.8-7.204 16.8-20zm-32 45.199c-4.399 17.597-33.598 8-43.2 5.597l7.602-30.796c9.598 2.398 40 7.199 35.598 25.199zm4.402-45.2c-4 16-28.402 8-36.402 6l6.8-28c8 1.598 33.602 5.2 29.602 22zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/BitcoinCash.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/BitcoinCash.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/BitcoinCash.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M126.25.168c-33.438 0-65.488 13.406-89.219 37.32C13.45 61.398.133 93.878.133 127.734c0 33.856 13.324 66.348 36.91 90.246 23.586 23.903 55.781 37.32 89.215 37.32 33.437 0 65.488-13.405 89.219-37.32 23.582-23.91 36.91-56.39 36.91-90.246 0-33.855-13.328-66.343-36.91-90.246A125.415 125.415 0 00126.25.168zm0 0",
      fill: "#f7931a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M169.719 89.375c-5.688-16.172-21.227-18.102-39.403-15.203L124.63 51.23l-13.879 3.45 5.555 22.39c-3.606.973-7.348 1.93-10.957 2.903l-5.555-22.524-13.879 3.45 5.691 22.94c-2.914.829-5.968 1.665-8.746 2.349v-.133l-19.144 4.84 3.75 14.93s10.129-2.77 9.996-2.493c5.543-1.379 8.187 1.379 9.437 4.145l6.52 26.261c.555-.133.973-.277 1.527-.277l-1.527.422 9.02 36.765c.132 1.797-.133 4.973-4.016 5.942.273.133-10.129 2.492-10.129 2.492l1.383 17.406 18.043-4.562c3.328-.828 6.66-1.653 9.847-2.348l5.692 23.219 13.875-3.453-5.688-23.086c3.887-.824 7.493-1.797 11.102-2.621l5.687 22.941 13.88-3.453-5.688-23.215c22.898-7.191 37.738-17.277 34.265-39.945-2.777-18.242-13.039-24.043-27.062-23.91 7.055-6.23 10.242-14.797 6.09-26.68zm-7.07 54.582c4.304 17.422-25.669 22.813-34.965 25.16l-7.637-30.824c9.43-2.207 38.152-12.293 42.601 5.664zm-17.067-41.738c3.883 15.754-21.098 20.176-28.867 22.117l-6.938-27.914c7.77-2.074 31.633-10.785 35.805 5.797zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Bnb.js":
/*!*********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Bnb.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Bnb.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "#F3BA2F",
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M28.37 156.03l28.368-28.369-28.369-28.37L0 127.662zM226.953 156.03l28.369-28.369-28.37-28.37-28.368 28.37zM127.661 156.03l28.37-28.369-28.37-28.37-28.37 28.37z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M141.846 14.185L127.66 0 49.646 78.015l28.37 28.37 49.645-49.647 49.646 49.646 28.37-28.369-63.831-63.83zM113.476 241.137l14.185 14.185 78.015-78.015-28.369-28.37-49.646 49.647-49.646-49.646-28.369 28.369 63.83 63.83z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Cardano.js":
/*!*************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Cardano.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Cardano.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 236",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M124.86.7c5.578-2.907 12.39 3.827 9.425 9.39-1.722 4.535-8.25 5.738-11.586 2.285-3.531-3.316-2.379-9.875 2.16-11.676M64.848 7.152c3.386-1.394 7.68 1.707 7.332 5.391.36 4-4.543 6.945-7.996 5.043-4.579-1.766-4.055-9.18.664-10.434M187.758 17.7c-5.297-.637-6.133-8.945-1.035-10.62 3.957-1.923 7.586 1.687 8.164 5.425-.828 3.195-3.512 6.121-7.13 5.195M78.5 32.637c5.668-3.578 13.754 1.746 12.883 8.316-.297 6.629-9.121 10.469-14.102 5.988-4.816-3.523-4.086-11.597 1.219-14.304m86.504 3.793c2.527-6.5 12.773-6.696 15.648-.371 2.848 4.925-.652 11.023-5.718 12.699-6.715 1.25-13.09-5.992-9.93-12.328m-47.371 11.957c-.055-5.586 5.047-9.75 10.367-10.13 3.531.708 7.379 2.208 8.89 5.759 2.825 4.906.317 11.656-4.78 13.906-2.333 1.305-5.09.812-7.63.66-3.882-1.898-7.152-5.629-6.847-10.195m-89.25 8.14c5.176-3.172 12.16 2.621 10.203 8.23-1.082 4.852-7.617 6.829-11.356 3.731-3.992-2.902-3.359-9.883 1.153-11.96m191.648-.008c4.39-3.403 11.64.5 11.117 6.03.293 5.048-5.972 8.848-10.332 6.25-4.8-2.152-5.293-9.519-.785-12.28m-77.3 10.042c7.246-2.597 15.855.512 19.984 6.958 5.45 7.882 2.55 19.882-5.906 24.406-8.762 5.347-21.555.812-24.79-8.95-3.675-8.738 1.68-19.675 10.711-22.413m-42.523.859c8.035-3.781 18.844-.61 22.723 7.59 4.566 7.976 1.035 19.09-7.125 23.207-8.176 4.633-19.703 1.12-23.66-7.446-4.434-8.285-.497-19.535 8.062-23.351M57.633 81.945c.61-5.164 5.492-8.523 10.418-8.87 5.304.64 9.547 4.75 10.12 10.109-.347 5.304-4.456 10.488-10.089 10.457-6.2.535-11.633-5.621-10.45-11.696m125.759-7.75c6.363-3.695 15.199 1.688 14.918 8.98.437 7.731-9.344 13.177-15.684 8.641-6.582-3.773-6.066-14.406.766-17.62M82.906 101.437c7.442-2.043 15.953 1.457 19.602 8.28 4 6.872 2.363 16.419-3.844 21.458-7.969 7.39-22.656 4.422-26.898-5.664-4.871-9.25 1.046-21.64 11.14-24.075m80.649-.039c7.238-2.066 15.738.72 19.629 7.293 5.14 7.524 2.687 18.743-4.97 23.59-8.023 5.633-20.444 2.676-24.859-6.129-5.351-9.105.036-21.976 10.2-24.754M35.03 109.98c6.43-2.425 13.555 4.653 10.953 11.012-1.593 5.793-9.777 7.938-14.004 3.664-4.949-4.011-3.117-12.937 3.051-14.676m174.274 9.23c-.188-5.315 3.71-10.022 9.172-10.315 4.406.695 8.687 4.238 8.34 9.02.402 6.315-7.227 10.612-12.622 7.644-2.527-1.282-3.824-3.871-4.89-6.348M3.418 113.1c3.867-1.687 8.652 1.66 7.77 5.946-.208 4.851-7.387 6.719-10.028 2.664-2.328-2.816-.933-7.16 2.258-8.61zm243.894-.097c2.723-1.938 7.094-.547 8.172 2.629 1.832 3.469-1.523 8.219-5.437 7.633-5.488.5-7.266-7.852-2.734-10.262m-143.399 23.293c10.18-2.64 21.121 5.828 21.184 16.285.664 10.566-10.114 19.934-20.532 17.496-8.054-1.293-14.37-9.035-14.113-17.156-.02-7.766 5.856-14.98 13.461-16.625m40.309-.02c10.332-2.882 21.601 5.739 21.437 16.438.543 10.367-9.894 19.422-20.097 17.367-9.602-1.238-16.684-11.762-14.004-21.059 1.355-6.191 6.539-11.23 12.664-12.746m-77.72 6.434c7.15-1.215 13.852 6.742 10.954 13.516-2.117 7.214-12.644 9.171-17.297 3.277-5.46-5.66-1.383-16.012 6.344-16.793m118.215.32c6.375-2.664 14.199 2.836 13.707 9.739.258 7.597-9.403 12.84-15.637 8.402-7.059-3.98-5.773-15.7 1.93-18.14m33.043 33.066c-2.496-4.645 2.035-10.797 7.203-9.938 2.57-.043 4.367 1.977 6.015 3.676.336 2.75.907 6.031-1.382 8.152-3.11 3.922-10.149 2.805-11.836-1.89m-189.399-8.645c4.828-3.207 11.774 1.574 10.692 7.207-.578 4.98-6.867 7.828-11.012 5-4.445-2.562-4.281-9.867.32-12.207m95.383 10.426c6.324-2.781 14.375 2.707 13.777 9.652.47 7.676-9.492 12.992-15.671 8.383-6.868-3.957-5.723-15.601 1.894-18.035M79.57 188.16c5.383-2.824 12.606 2.055 12.118 8.067.164 4.937-4.665 9.144-9.547 8.414-4.043-.086-6.68-3.703-7.977-7.145.066-3.746 1.613-7.922 5.406-9.336m89.489.09c5.535-3.414 13.402 1.488 12.879 7.918.144 6.715-8.75 11.02-13.903 6.605-4.992-3.457-4.383-11.773 1.024-14.523m15.562 38.383c-2.465-3.719.438-8.196 4.434-9.043 3.215.652 6.617 3.062 5.941 6.781-.469 5.035-7.848 6.578-10.375 2.262m-123.535-3.227c.98-2.949 3.355-5.875 6.832-5.11 5.07.36 6.574 7.977 2.137 10.329-3.989 2.684-8.614-.992-8.97-5.219m59.599 3.38c.972-4.36 6.625-6.481 10.355-4.165 2.461 1.055 3.18 3.805 3.813 6.14-.336 1.22-.641 2.438-.938 3.653-1.523 1.805-3.484 3.61-6.027 3.547-4.719.55-8.977-4.774-7.203-9.176",
      fill: "#3cc8c8"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Dogecoin.js":
/*!**************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Dogecoin.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Dogecoin.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0",
      fill: "#988430"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M135.363 198.434c44.14 0 77.086-25.555 77.086-70.54 0-44.984-32.945-70.328-77.297-70.328H57.496v35.34h14.719v69.184H57.496l.29 36.422zm-.21-37.172h-20.274V94.738h20.484c22.809 0 33.79 14.149 33.79 33.157 0 17.738-12.673 33.367-34 33.367zm0 0",
      fill: "#fefefe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Eos.js":
/*!*********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Eos.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Eos.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M87.09 92.879l40.906 128.46-60.7-38.034L87.09 92.879l40.906-55.887v39.196l-60.7 107.117h121.462l-60.7-107.117V36.992l40.907 55.887 19.793 90.426-60.7 38.035 40.907-128.461",
      fill: "none",
      strokeWidth: 10.24,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      stroke: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Ethereum.js":
/*!**************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Ethereum.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Ethereum.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M127.98 102.5l-60.093 27.316 60.093 35.524 60.098-35.524zm0 0",
      fill: "#010101",
      fillOpacity: 0.6
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M67.887 129.816l60.093 35.524V30.102zm0 0",
      fill: "#010101",
      fillOpacity: 0.451
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M127.98 30.102V165.34l60.098-35.524zm0 0",
      fill: "#010101",
      fillOpacity: 0.8
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M67.887 141.21l60.093 84.685v-49.18zm0 0",
      fill: "#010101",
      fillOpacity: 0.451
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M127.98 176.715v49.18l60.133-84.684zm0 0",
      fill: "#010101",
      fillOpacity: 0.8
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M128.004 0C198.688 0 256 57.309 256 128.004 256 198.688 198.687 256 128.004 256 57.309 256 0 198.687 0 128.004 0 57.309 57.309 0 128.004 0zm0 18.242c60.61 0 109.75 49.14 109.75 109.762 0 60.61-49.14 109.75-109.75 109.75-60.621 0-109.762-49.14-109.762-109.75 0-60.621 49.14-109.762 109.762-109.762zm0 0",
      fillRule: "evenodd",
      fill: "#ebecec"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/EthereumClassic.js":
/*!*********************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/EthereumClassic.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/EthereumClassic.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M.008 127.637l79.426-42.278 78.398 41.97L79.5 169.64zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M.008 127.637l79.426-42.278 78.398 41.97L79.5 169.64zm0 0",
      fill: "#01c853"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.434 85.36l78.398 41.968L79.5 169.641zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.434 134.117l78.398-6.789L79.5 169.641zm0 0",
      fill: "#007831"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.434 134.117l-79.426-6.48 79.355 42.004zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M0 138.879c27.82 14.719 56.809 30.144 79.254 42.074l78.61-42.062C129.401 181.074 105.69 216.16 79.253 255 52.78 216.242 23.53 173.465 0 138.879zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M0 138.879c27.82 14.719 56.809 30.144 79.254 42.074l78.61-42.062C129.401 181.074 105.69 216.16 79.253 255 52.78 216.242 23.53 173.465 0 138.879zm0 0",
      fill: "#01c853"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.254 180.953l78.61-42.062C129.401 181.074 79.253 255 79.253 255zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.254 180.953l78.61-42.062C129.401 181.074 105.69 216.16 79.253 255zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.238 73.602L.008 115.215 78.895 0l78.937 115.469zm0 0",
      fill: "#01c853"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M79.238 73.602L78.895 0l78.937 115.469zm0 0",
      fill: "#009f42"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Kukuruza.js":
/*!**************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Kukuruza.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Kukuruza.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M0 128C0 57.309 57.309 0 128 0s128 57.309 128 128-57.309 128-128 128S0 198.691 0 128zm0 0",
      fill: "#76b628"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M94.129 192.59a23.943 23.943 0 01-18.117-14.965l-.985-2.559-.117-44.507c-.117-47.262-.078-48.637 1.73-53.13 4.848-12.05 19.774-17.761 31.864-12.206 8.508 3.898 13.55 11.773 13.59 21.148v3.11l8.27-7.876c11.027-10.554 13.784-12.09 21.66-12.09 6.695.04 11.699 2.126 16.187 6.774 5.004 5.2 7.05 11.184 6.262 18.313-.746 6.656-2.797 9.847-12.207 18.906l-7.207 6.969 7.207 11.933c3.976 6.578 9.41 15.559 12.09 19.969 3.03 5.043 5.16 8.98 5.671 10.633 4.41 14.101-5.16 28.238-19.968 29.422-6.457.511-12.25-1.696-17.094-6.54-2.52-2.519-3.899-4.488-9.02-12.996-3.304-5.515-7.324-12.128-8.86-14.691l-2.796-4.644-.234 10.16c-.278 11.343-.555 13.074-2.996 17.445-4.606 8.312-15.121 13.117-24.93 11.422zm10.082-12.996c3.113-1.614 4.965-3.938 5.633-7.09.277-1.18.433-7.129.472-14.691v-12.68l2.047-1.617c1.145-.864 3.035-2.282 4.215-3.11 1.184-.828 3.387-2.597 4.844-3.898 1.578-1.34 2.836-2.168 3.035-1.969.195.195 3.387 5.395 7.129 11.578 3.738 6.184 8.543 14.14 10.71 17.723 2.165 3.586 4.845 7.957 5.907 9.765 2.324 3.82 4.254 5.633 7.012 6.5 3.976 1.301 7.363.551 10.555-2.324 3.19-2.875 4.37-7.285 2.992-11.144-.313-.907-3.426-6.38-6.93-12.172-3.508-5.79-9.61-15.832-13.55-22.328-3.938-6.5-7.403-12.211-7.68-12.684-.512-.828-.235-1.18 6.5-7.68 3.898-3.78 8.507-8.23 10.28-9.886 4.25-4.055 5.434-6.262 5.434-9.965-.039-3.426-1.14-5.867-3.625-8.07-3.226-2.797-8.074-3.47-11.734-1.618-.867.434-7.328 6.34-14.336 13.079-7.012 6.734-15.047 14.414-17.805 17.011l-5.039 4.727V100.59c0-9.653-.156-17.094-.394-17.883-1.14-4.016-5.672-7.402-10.399-7.758a12.262 12.262 0 00-11.773 6.34l-.867 1.617-.117 44.465c-.122 50.137-.317 46.906 2.875 50.098 2.875 2.836 5.117 3.699 9.332 3.582 2.09-.078 3.113-.356 5.277-1.457zm0 0",
      fill: "#fefefe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Litecoin.js":
/*!**************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Litecoin.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Litecoin.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 128c0 70.691-57.305 128-128 128C57.309 256 0 198.691 0 128S57.309 0 128 0s128 57.309 128 128",
      fill: "#bebebe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M228.824 128c0 55.68-45.14 100.824-100.824 100.824-55.68 0-100.824-45.144-100.824-100.824C27.176 72.316 72.32 27.176 128 27.176c55.684 0 100.824 45.14 100.824 100.824",
      fill: "#bebebe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M120.52 162.191l8.316-31.304 19.684-7.192 4.894-18.398-.168-.453-19.375 7.078 13.961-52.567h-39.594l-18.254 68.598-15.246 5.57-5.035 18.965 15.23-5.562-10.757 40.43h105.367l6.754-25.165H120.52",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/LivecoinRUB.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/LivecoinRUB.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/LivecoinRUB.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "#8cd8f8",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M89.047 125.402v41.555h16.691V113.16zm0 0M144.695 84.59v82.367h16.696v-94.61zm0 0M116.871 104.996v61.961h16.695V92.754zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M128 0C57.309 0 0 57.309 0 128s57.309 128 128 128 128-57.309 128-128S198.691 0 128 0zm0 233.738c-58.398 0-105.738-47.34-105.738-105.738 0-58.398 47.34-105.738 105.738-105.738 58.398 0 105.738 47.34 105.738 105.738 0 58.398-47.34 105.738-105.738 105.738zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Monero.js":
/*!************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Monero.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Monero.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M127.996 0c-70.68 0-128 57.316-128 127.996 0 14.129 2.29 27.719 6.52 40.434h38.28V60.734l83.2 83.2 83.2-83.2V168.43h38.28c4.231-12.715 6.52-26.305 6.52-40.434C255.996 57.316 198.68 0 127.996 0zm0 0",
        fill: "#f60"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M108.863 163.063L72.555 126.75v67.766H18.62c22.469 36.863 63.05 61.48 109.371 61.48 46.324 0 86.91-24.617 109.375-61.48h-53.933V126.75l-36.309 36.313-19.133 19.128-19.125-19.129zm0 0",
        fill: "#4c4c4c"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Mono.js":
/*!**********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Mono.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Mono.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "prefix__a",
        gradientUnits: "userSpaceOnUse",
        x1: 184.5,
        y1: 0.5,
        x2: 184.5,
        y2: 368.5,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0,
          stopColor: "#515467"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 1,
          stopColor: "#343643"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "prefix__b",
        gradientUnits: "userSpaceOnUse",
        x1: 0,
        y1: 184.5,
        x2: 369,
        y2: 184.5,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0,
          stopColor: "#999"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 1
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M20 .501h329C359.772.501 368.5 9.228 368.5 20v329c0 10.772-8.727 19.499-19.499 19.499H20C9.228 368.499.5 359.772.5 349V20C.501 9.228 9.228.5 20 .5zm0 0",
      transform: "scale(.69377)",
      fill: "url(#prefix__a)",
      stroke: "url(#prefix__b)",
      strokeMiterlimit: 10
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M16.234 110.379c.278-.766 1.04-.695 1.594-.902h9.02c1.945 1.25.07 3.468 1.25 4.925 9.09-8.324 19.285-7.699 26.156 1.528 7.074-9.297 24.074-11.102 27.266 2.078l.207 2.082c.07 10.406.07 20.812.07 31.222-.14.899-.14 1.735-1.527 1.665-2.778-.07-5.551-.07-8.325.07-2.777.137-1.734-1.25-1.804-2.57 0-5.063-.07-10.13-.141-15.192a3.023 3.023 0 000-2.219 27.898 27.898 0 000-6.8c.14-4.996-1.594-7.286-5.758-7.563-4.16-.277-9.226 3.121-9.363 6.938v24.214c-.07.97-.07 1.872-.14 2.844a.483.483 0 00-.348.485h.07c-3.055-.07-6.106-.348-9.156.14l-2.082-.558-.211-1.387v-.691a5.899 5.899 0 000-3.47c.347-7.425.347-14.777 0-22.202-.414-4.649-1.871-6.036-6.52-6.106l-1.25.14c-4.855 1.11-7.144 3.263-7.285 6.66-.277 7.77-.414 15.61 0 23.45a4.702 4.702 0 000 2.914l-.344.903-1.457.414h-9.02c-1.179-1.18-.695-2.637-.695-3.953-.136-10.06-.136-20.051-.207-30.11zm0 0M100.527 111.766c6.383-3.262 13.114-4.164 20.118-2.153 11.449 3.332 18.316 16.028 14.71 27.477-.835 2.637-.695 5.824-3.125 7.906-8.183 9.715-18.382 11.031-29.761 6.871-3.676-2.012-6.52-5.066-9.227-8.187-.207-.696-.347-1.387-.555-2.012-4.789-11.934-2.218-21.922 7.84-29.902zm1.735 19.566c0 9.227 7.215 14.844 14.984 11.793 4.371-1.664 7.078-6.105 7.078-11.727 0-5.617-2.636-10.265-7.148-12-7.77-2.984-14.985 2.774-14.914 11.934zm0 0M202.578 149.785c-7.351-6.383-10.058-14.43-8.047-23.937 2.012-9.504 7.285-14.43 15.887-16.442 8.605-2.011 17.207-.484 23.797 6.524l2.012 2.36c3.68 6.866 4.578 14.01 2.289 21.573-.555 1.735-2.149 2.637-2.29 4.442l-2.773 3.468-1.32 1.247a31.41 31.41 0 01-11.723 4.996c-6.383.418-12.418-.625-17.832-4.23zm3.192-18.453c0 7.422 4.44 12.484 10.964 12.555 6.52.07 11.239-5.203 11.239-12.625 0-7.426-4.649-12.489-11.032-12.559-6.382-.07-11.171 5.067-11.171 12.629zm0 0M185.375 151.313c-.14.898-.348 1.734-1.598 1.664-3.328-.141-6.59.414-9.918-.278v-25.324c-.07-5.063-1.457-7.352-5.136-8.324-3.676-.973-10.407.972-12.348 4.3-.555 1.04-.348 2.012-.348 3.055-.07 7.836-.136 15.676 0 23.516.07 2.289-.347 3.191-2.914 3.191-8.531-.066-8.531 0-8.531-8.324 0-10.754.07-21.508-.07-32.191 0-2.496.625-3.262 3.05-3.051 2.313.113 4.63.09 6.938-.07 2.984.832.559 3.398 1.875 5.132 4.508-4.093 9.781-6.382 16.027-6.035 6.243.348 10.961 3.61 12.696 10.13l.277 31.151zm0 0",
      fill: "#fafafa"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Neo.js":
/*!*********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Neo.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Neo.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "prefix__a",
        gradientUnits: "userSpaceOnUse",
        x1: 191.59,
        y1: 1712.04,
        x2: 1419.34,
        y2: 662.26,
        gradientTransform: "scale(.128)",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0,
          stopColor: "#beea2e"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 1,
          stopColor: "#52ba00"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M19.691 48.652l85.72 40.543V256l-85.72-40.543zM149.43 0L23.809 44.664l84.949 40.8 125.234-44.921zm-2.317 76.324v102.067l89.192 34.75V44.273zm0 0",
      fill: "url(#prefix__a)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Oshad.js":
/*!***********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Oshad.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Oshad.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M255.758 63.29v2.405c-.184.094-.184.184-.278.371a21.922 21.922 0 01-8.335 14.618c-.836.554-.93 1.02-.465 1.945 2.039 3.887 1.39 7.492-1.762 10.547a14.583 14.583 0 01-4.445 3.054 1.659 1.659 0 00-1.203 1.848c.058 37.567.09 75.195.09 112.887a25.979 25.979 0 01-3.15 12.676c-5.097 9.254-12.972 14.25-23.44 15.175H26.645c-12.098-.882-22.317-9.308-25.477-21.004-.371-1.296-.277-2.683-.926-3.98V25.074c.371-.183.278-.46.278-.738a27.919 27.919 0 011.667-6.2C6.91 7.22 15.158 1.204 27.017.095h185.941c11.898.824 22.008 8.996 25.293 20.449 1.11 3.883 1.11 7.77 1.11 11.656-.09 7.496 0 15.082-.09 22.578 0 .926.09 1.293 1.109.832a16.079 16.079 0 014.539-1.386c5.836-1.297 8.8.648 10.285 6.289.031.949.219 1.89.555 2.777zm-129.61 150.726l-.187-.278-1.203-1.015a38.354 38.354 0 01-8.895-10.828c-5.281-9.899-6.39-20.446-4.539-31.274 2.871-16.84 11.766-29.976 25.942-39.324 8.43-5.457 17.695-8.418 27.886-7.125 6.668.832 12.414 3.516 16.766 8.883 8.34 9.992 10.473 21.468 7.875 33.957-2.594 12.492-9.078 23.226-18.434 32.11a89.738 89.738 0 01-17.047 12.491c-.648.461-1.207.739-.742 1.758.465 1.016 1.203.645 1.852.461a58.097 58.097 0 006.855-3.238c7.875-4.442 15.567-9.254 21.957-15.73 12.88-13.048 21.032-28.684 23.348-47.005a49.344 49.344 0 00-2.129-23.222c-4.172-11.754-12.137-19.34-24.55-21.93-7.97-1.668-15.75-.555-23.348 2.035-11.489 3.977-20.938 10.824-29.09 19.617-6.3 6.754-10.934 14.524-14.824 22.852-5.098 10.918-8.618 22.3-8.246 34.516a38.742 38.742 0 008.152 23.316l2.133 2.59h-14.27a1.76 1.76 0 01-1.762-1.11 56.22 56.22 0 01-4.539-36.828c2.133-10.363 6.489-19.8 11.954-28.683 4.355-7.125 9.726-13.414 15.007-19.801a73.96 73.96 0 0118.25-16.098c10.38-6.476 21.403-10.55 33.817-10.363a34.308 34.308 0 0117.324 4.719l5.93 3.515a21.98 21.98 0 0018.902 2.22 6.194 6.194 0 004.723-6.106 9.458 9.458 0 00-.278-3.61c-.183-.738.094-.832.742-.925 2.778-.09 5.56-.184 8.247-.461 3.07-.07 6.097-.762 8.894-2.036 4.54-2.222 5.649-6.386 2.777-10.457-.464-.738-.37-1.015.278-1.574a26.84 26.84 0 008.617-11.379 10.261 10.261 0 00.094-7.957 3.249 3.249 0 00-3.242-2.129 10.78 10.78 0 00-3.801.832 71.994 71.994 0 00-8.895 4.258c-2.222 1.11-2.222 1.11-3.52-.832-1.296-1.945-2.78-3.426-5.187-3.426a12.447 12.447 0 00-4.726 1.02 71.212 71.212 0 00-9.45 5.09 8.12 8.12 0 01-2.87 1.293c.093-.371.093-.555.183-.832a4.903 4.903 0 00-4.168-6.477 13.791 13.791 0 00-2.781-.094 31.03 31.03 0 00-11.395 3.61c-7.226 3.793-13.156 9.066-16.953 16.379-.742 1.293-.648 1.386.832 1.293 5.45-.168 10.899.078 16.309.742 4.898.8 9.859 1.14 14.82 1.015a62.055 62.055 0 0021.219-4.718 54.332 54.332 0 008.058-4.809c.743-.559 1.852-1.297 2.594-.281.742 1.02-.094 1.758-.648 2.406a21.599 21.599 0 01-4.817 3.887c-10.469 6.941-22.05 8.699-34.281 7.59-7.5-.883-15.05-1.254-22.606-1.114-9.449.371-18.71 1.946-27.328 6.11-.187.09-.277.183-.464 0l2.503-3.516a223.84 223.84 0 0020.75-39.234 134.826 134.826 0 007.043-20.356c.371-1.48.371-1.48-1.207-1.48h-67.074a2.43 2.43 0 00-1.39.183c.277.555.742.743 1.113 1.114a41.523 41.523 0 0110.191 12.859 47.622 47.622 0 014.168 28.59c-2.594 16.656-11.023 29.797-25.105 39.14-8.617 5.739-18.067 8.977-28.63 7.774a26.142 26.142 0 01-16.675-8.234c-6.484-6.848-8.988-15.36-9.078-24.614a48.22 48.22 0 013.242-16.933c4.633-12.676 13.063-22.39 23.625-30.535a111.147 111.147 0 019.82-6.383c.555-.371.926-.555.649-1.297-.278-.738-.742-1.203-1.762-.832a56.219 56.219 0 00-8.246 3.98c-7.41 4.254-14.637 8.79-20.66 14.895a83.455 83.455 0 00-23.16 44.23 50.08 50.08 0 002.039 26.649c2.965 8.511 8.336 15.082 16.582 18.875 8.246 3.793 16.215 4.07 24.644 2.218 16.028-3.515 28.63-12.582 38.727-25.167a98.994 98.994 0 0013.156-22.114c4.074-9.16 7.04-18.597 7.317-28.773.277-10.18-3.055-21.563-10.84-30.074-.184-.184-.555-.372-.367-.739h11.3a2.036 2.036 0 012.04 1.203c7.874 14.063 9.449 28.961 5.28 44.504-4.538 17.028-13.992 31.274-25.663 44.23-4.633 5.087-9.45 9.993-13.805 15.36-18.438 22.668-32.426 47.742-40.95 75.781-.37 1.293-.37 1.293 1.02 1.293h68.281zM8.672 119.453v86.422c0 8.605 3.707 15.36 10.746 20.262 4.45 3.148 9.45 4.351 14.918 4.351h168.43c2.582.078 5.14-.531 7.41-1.758 5.652-3.148 11.117-6.57 15.566-11.289a18.51 18.51 0 005.281-13.14c-.187-34.606-.093-69.211-.093-103.817v-.925c.093-.645-.094-.832-.743-.832l-2.406.187c-1.207-.094-1.39.367-1.39 1.48v105.204a19.878 19.878 0 01-5.864 14.472 19.916 19.916 0 01-14.52 5.79H33.13c-10.965-.051-19.824-8.942-19.824-19.891V32.848a19.608 19.608 0 015.718-14.024 19.645 19.645 0 0114.016-5.777h172.875a20.314 20.314 0 0114.535 5.933 20.266 20.266 0 015.942 14.516V53.11c0 1.48 0 1.48 1.574 1.762.668.063 1.32.219 1.945.461.926.371 1.02 0 1.02-.832V32.2a25.882 25.882 0 00-.649-5.368c-2.41-9.992-11.582-18.41-24.367-18.41H34.148a25.921 25.921 0 00-4.632.277C17.406 10.582 8.527 21.07 8.672 33.31zm0 0",
      fill: "#3a7c4a"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M212.77 238.816c10.468-.925 18.343-5.921 23.44-15.175a25.979 25.979 0 003.15-12.676c0-37.692-.032-75.32-.09-112.887a1.659 1.659 0 011.203-1.848 14.583 14.583 0 004.445-3.054c3.152-3.055 3.8-6.66 1.762-10.547-.465-.926-.371-1.39.465-1.945a21.922 21.922 0 008.335-14.618c.094-.187.094-.277.278-.37V237.89c0 .832-.184 1.015-1.02 1.015H212.77zm0 0M255.758 63.29a8.767 8.767 0 01-.555-2.685c-1.484-5.644-4.45-7.585-10.285-6.292a16.087 16.087 0 00-4.54 1.39c-1.019.461-1.108.09-1.108-.832.09-7.496 0-15.086.09-22.578 0-3.887 0-7.773-1.11-11.66-3.285-11.45-13.395-19.625-25.293-20.45h41.875c.742 0 .926.094.926.837zm0 0M27.016.094C15.156 1.204 6.91 7.219 2.188 18.137A27.919 27.919 0 00.52 24.336c0 .277.093.555-.278.738V.738C.242.094.332 0 1.074 0h25.942zm0 0M.242 213.832c.649 1.297.555 2.684.926 3.98 3.191 11.66 13.402 20.043 25.477 20.91H1.075c-.65 0-.833-.093-.833-.831zm0 0",
      fill: "#fdfefd"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M126.148 214.016h-68.28c-1.391 0-1.391 0-1.02-1.293 8.523-28.036 22.511-53.114 40.949-75.782 4.355-5.367 9.172-10.27 13.805-15.359 11.671-12.953 21.125-27.203 25.664-44.23 4.168-15.543 2.593-30.442-5.282-44.504a2.041 2.041 0 00-2.039-1.203h-11.3c-.188.37.183.554.367.742 7.785 8.511 11.21 18.687 10.84 30.07-.372 11.379-3.243 19.617-7.317 28.777a99.17 99.17 0 01-13.156 22.114C99.28 125.93 86.679 135 70.652 138.516c-8.43 1.847-16.675 1.48-24.644-2.223-7.969-3.7-13.617-10.27-16.582-18.781a50.08 50.08 0 01-2.04-26.649 83.455 83.455 0 0123.16-44.23c6.024-6.106 13.25-10.64 20.661-14.895a56.219 56.219 0 018.246-3.98c1.02-.371 1.484-.184 1.762.832.277 1.02-.094.926-.649 1.297a111.147 111.147 0 00-9.82 6.383c-10.562 8.144-18.992 17.859-23.625 30.535a48.22 48.22 0 00-3.242 16.933c.09 9.254 2.594 17.766 9.078 24.614a26.142 26.142 0 0016.676 8.234c10.562 1.203 20.012-2.035 28.629-7.773 14.082-9.344 22.511-22.485 25.105-39.141a47.622 47.622 0 00-4.168-28.59 41.523 41.523 0 00-10.191-12.86c-.371-.37-.836-.558-1.113-1.113a2.43 2.43 0 011.39-.183h67.074c1.578 0 1.578 0 1.207 1.48a134.584 134.584 0 01-7.043 20.262 223.7 223.7 0 01-20.75 39.234l-2.503 3.516c.187.184.277.094.464 0 8.618-4.164 17.88-5.738 27.328-6.106 7.555-.14 15.106.231 22.606 1.11 12.23 1.11 23.812-.649 34.281-7.59a21.582 21.582 0 004.817-3.883c.554-.648 1.39-1.574.648-2.406-.742-.832-1.851-.277-2.594.277a54.692 54.692 0 01-8.058 4.813 62.055 62.055 0 01-21.219 4.719 79.451 79.451 0 01-14.82-1.02c-5.41-.66-10.86-.91-16.309-.738-1.48.09-1.574 0-.832-1.297 3.797-7.309 9.727-12.586 16.953-16.379a30.978 30.978 0 0111.395-3.516c.93-.062 1.86-.03 2.78.094a4.903 4.903 0 014.169 6.477c-.09.277-.09.46-.184.832a8.12 8.12 0 002.871-1.293 71.212 71.212 0 019.45-5.09 12.447 12.447 0 014.726-1.02c2.406 0 3.89 1.575 5.188 3.426 1.297 1.848 1.297 1.942 3.52.832a71.994 71.994 0 018.894-4.258 10.78 10.78 0 013.8-.832 3.249 3.249 0 013.243 2.13 10.261 10.261 0 01-.094 7.956 26.84 26.84 0 01-8.617 11.38c-.649.558-.742.835-.278 1.573 2.872 4.07 1.762 8.235-2.777 10.457a22.724 22.724 0 01-8.894 2.036c-2.688.277-5.47.37-8.247.46-.648.094-.925.188-.742.926a9.458 9.458 0 01.278 3.61 6.194 6.194 0 01-4.723 6.105 21.98 21.98 0 01-18.902-2.219l-5.93-3.515a34.308 34.308 0 00-17.324-4.719c-12.414-.188-23.438 3.887-33.817 10.363a73.96 73.96 0 00-18.25 16.098c-5.28 6.387-10.652 12.676-15.007 19.8-5.465 8.884-9.82 18.321-11.954 28.684a56.22 56.22 0 004.54 36.828 1.76 1.76 0 001.761 1.11h14.27l-2.133-2.59a38.742 38.742 0 01-8.152-23.316c-.372-12.215 3.148-23.598 8.246-34.516 3.89-8.328 8.523-16.098 14.824-22.852 8.152-8.793 17.601-15.64 29.09-19.617 7.597-2.59 15.379-3.703 23.347-2.035 12.414 2.59 20.38 10.176 24.551 21.93a49.344 49.344 0 012.129 23.222c-2.316 18.32-10.469 33.957-23.348 47.004-6.39 6.477-14.082 11.29-21.957 15.73a58.097 58.097 0 01-6.855 3.239c-.649.184-1.297.648-1.852-.46-.554-1.114.094-1.298.743-1.759a89.738 89.738 0 0017.046-12.492c9.356-8.883 15.84-19.43 18.434-32.11 2.598-12.675.465-23.964-7.875-33.956-4.352-5.368-10.098-8.051-16.766-8.883-10.191-1.293-19.457 1.668-27.886 7.125-14.176 9.348-23.07 22.484-25.942 39.324-1.851 10.828-.742 21.375 4.54 31.274a38.354 38.354 0 008.894 10.828l1.203 1.015zm0 0",
      fill: "#dabf46"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M8.672 119.453V33.31c-.145-12.239 8.734-22.727 20.844-24.61a25.921 25.921 0 014.632-.277h171.766c12.785 0 21.957 8.418 24.367 18.41.403 1.762.621 3.563.649 5.367V54.5c0 .832-.094 1.203-1.02.832a7.246 7.246 0 00-1.945-.46c-1.574-.282-1.574-.282-1.574-1.763V33.496a20.266 20.266 0 00-5.942-14.516 20.314 20.314 0 00-14.535-5.933H33.04a19.645 19.645 0 00-14.016 5.777 19.608 19.608 0 00-5.718 14.024v173.12c0 10.95 8.86 19.84 19.824 19.891h172.879a19.916 19.916 0 0014.52-5.789 19.878 19.878 0 005.863-14.472V100.395c0-1.114.183-1.575 1.39-1.48l2.406-.188c.649 0 .836.187.743.832v.925c0 34.606-.094 69.211.093 103.817a18.51 18.51 0 01-5.28 13.14c-4.45 4.72-9.915 8.141-15.567 11.29a14.662 14.662 0 01-7.41 1.757H34.336c-5.469 0-10.469-1.203-14.918-4.351-7.04-4.903-10.746-11.657-10.746-20.262zm0 0",
      fill: "#fdfefd"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/PMeVoucher.js":
/*!****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/PMeVoucher.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/PMeVoucher.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0",
      fill: "#848484"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M36.316 169.676c4.762-.598 8.336-1.192 9.528-2.977 1.187-1.789 1.785-4.765 1.785-10.719V98.828c0-4.762-.598-7.738-2.383-8.93-1.191-1.191-4.762-2.382-8.93-2.976v-2.383h35.125c11.313 0 19.649 2.383 25.602 6.55 5.953 4.165 8.93 10.122 8.93 17.263 0 8.933-3.575 15.48-10.121 19.648-6.551 4.168-14.883 5.953-25.004 5.953H60.727v23.813c0 4.765.593 8.336 2.378 9.527 1.79 1.191 4.766 2.383 10.122 2.383v2.379h-36.91zM80.97 92.277c-3.574-1.785-8.336-2.379-14.29-2.379-2.976 0-4.167 0-4.761.594-.598.598-1.191 1.785-1.191 3.574v34.528c2.378 0 4.168.597 4.761.597h2.383c5.953 0 10.715-.597 14.285-2.382 6.551-2.977 9.528-8.93 9.528-17.86 0-8.336-3.57-13.695-10.715-16.672zm28.574 77.399c5.36-.598 8.93-1.79 10.719-3.574 1.785-1.786 2.379-6.547 2.379-13.098V99.422c0-4.762-.594-7.738-2.38-9.524-1.788-1.191-4.765-2.382-10.12-2.382v-2.38h26.195l30.363 66.083 29.766-66.082h26.195v2.379c-4.762.597-8.336 1.191-9.523 2.382-1.192 1.192-2.383 4.762-2.383 8.93v58.938c0 4.765.594 7.742 2.383 9.527 1.785 1.785 4.761 2.383 9.523 2.383v2.379h-36.91v-2.38c5.355-.597 8.93-1.19 10.121-2.976 1.188-1.789 1.785-4.765 1.785-10.719V96.445l-33.933 75.016h-1.79L128 100.02v52.984c0 7.144 1.191 11.906 2.977 14.289 1.191 1.191 4.168 2.383 9.527 2.977v2.382h-30.961zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/PerfectMoneyUSD.js":
/*!*********************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/PerfectMoneyUSD.js ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/PerfectMoneyUSD.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 128c0 70.691-57.309 128-128 128S0 198.691 0 128 57.309 0 128 0s128 57.309 128 128zm0 0",
      fill: "#f10000"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M36.316 169.676c4.762-.598 8.336-1.192 9.528-2.977 1.187-1.789 1.785-4.765 1.785-10.719V98.828c0-4.762-.598-7.738-2.383-8.93-1.191-1.191-4.762-2.382-8.93-2.976v-2.383h35.125c11.313 0 19.649 2.383 25.602 6.55 5.953 4.165 8.93 10.122 8.93 17.263 0 8.933-3.575 15.48-10.121 19.648-6.551 4.168-14.883 5.953-25.004 5.953H60.727v23.813c0 4.765.593 8.336 2.378 9.527 1.79 1.191 4.766 2.383 10.122 2.383v2.379h-36.91zM80.97 92.277c-3.574-1.785-8.336-2.379-14.29-2.379-2.976 0-4.167 0-4.761.594-.598.598-1.191 1.785-1.191 3.574v34.528c2.378 0 4.168.597 4.761.597h2.383c5.953 0 10.715-.597 14.285-2.382 6.551-2.977 9.528-8.93 9.528-17.86 0-8.336-3.57-13.695-10.715-16.672zm28.574 77.399c5.36-.598 8.93-1.79 10.719-3.574 1.785-1.786 2.379-6.547 2.379-13.098V99.422c0-4.762-.594-7.738-2.38-9.524-1.788-1.191-4.765-2.382-10.12-2.382v-2.38h26.195l30.363 66.083 29.766-66.082h26.195v2.379c-4.762.597-8.336 1.191-9.523 2.382-1.192 1.192-2.383 4.762-2.383 8.93v58.938c0 4.765.594 7.742 2.383 9.527 1.785 1.785 4.761 2.383 9.523 2.383v2.379h-36.91v-2.38c5.355-.597 8.93-1.19 10.121-2.976 1.188-1.789 1.785-4.765 1.785-10.719V96.445l-33.933 75.016h-1.79L128 100.02v52.984c0 7.144 1.191 11.906 2.977 14.289 1.191 1.191 4.168 2.383 9.527 2.977v2.382h-30.961zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Privat24UAH.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Privat24UAH.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Privat24UAH.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M50.246 153.945c15.637 0 31.274.07 46.91-.07 2.414 0 3.125.566 3.125 3.047-.094 30.976-.094 61.902 0 92.785 0 2.336-.566 3.188-3.125 3.188-31.367-.094-62.734-.047-94.101.14-2.63 0-2.985-.847-2.985-3.187.047-30.926.024-61.856-.07-92.786 0-2.761.852-3.187 3.34-3.187 15.637.14 31.273.07 46.906.07zm0 0"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M256 4.07c0-3.258-.926-4.035-4.121-4.035-41.223.14-82.445.07-123.664.07H4.977C.355.105.355.105.355 4.641a28157.87 28157.87 0 00-.07 109.004c0 9.421.07 9.347 9.664 9.421 15.707.07 31.485-.496 47.051 2.477 16.703 3.328 32.266 9.207 45.2 20.754 18.976 16.93 26.085 39.238 28.573 63.535 1.348 12.816.711 25.711.782 38.527.07 4.536 0 4.536 4.691 4.536 38.73 0 77.465-.07 116.2.07 2.773 0 3.554-.707 3.554-3.543-.047-81.734-.047-163.52 0-245.352zm-53.09 192.868c0 2.976-.926 3.757-3.765 3.613-4.551-.211-9.028-.14-13.504.07-2.633.074-3.27-1.133-3.555-3.258a153.93 153.93 0 00-15.707-52.129c-14.856-28.828-37.598-49.086-67.52-61.34A156.741 156.741 0 0057.141 73.06c-2.7-.282-4.192-1.204-3.98-4.391.308-4.242.331-8.504.073-12.75-.144-2.832.852-3.469 3.621-3.469H199c3.055-.07 3.98.707 3.98 3.895-.14 46.84-.164 93.707-.07 140.594zm0 0",
      fill: "#5db02e"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Pumb.js":
/*!**********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Pumb.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Pumb.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M128.266.266C198.52.266 256 57.746 256 128c0 70.785-57.48 127.734-127.734 127.734C57.746 255.734 0 198.52 0 128 0 57.746 57.746.266 128.266.266",
      fill: "#d13239"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M225.398 83.293h1.329c-.532 3.727-2.13 6.387-4.524 7.984-2.926 1.598-6.121 2.66-11.176 2.66h-4.523c-16.5-1.062-19.961 16.5-18.098 29.274 1.332 7.98 4.258 16.496 9.051 22.352 4.258 4.523 10.645 7.453 15.965 2.93 4.523-3.727 5.855-12.243 5.855-17.302 0-8.78-3.195-22.351-14.105-22.351-3.192 0-6.121 1.332-8.516 4.523-1.863 2.395-2.66 6.918-2.66 11.446h-2.129c-1.332-10.645 3.727-19.43 14.903-19.696 13.304 0 21.289 10.645 21.289 23.95 0 13.308-8.25 25.816-21.82 25.816-7.188 0-12.774-2.664-17.032-7.984-4.258-5.06-6.121-13.305-6.121-23.95 0-13.308 2.129-21.023 6.121-27.41 4.258-6.12 9.844-9.047 17.828-9.047h6.653c4.257.532 7.187 0 8.78-.27 1.333-.796 2.665-1.593 2.93-2.925M131.992 105.648l16.23 35.922 14.903-32.996 1.332-2.926h12.242v1.594h-1.066c-1.594 0-3.457 1.863-3.457 3.727v38.32c0 2.129 1.863 3.727 3.457 3.727h1.066v1.328h-17.031v-1.328h1.328c1.598 0 3.461-1.598 3.461-3.727v-35.394l-18.094 40.449h-1.066l-17.828-41.246v35.925c0 2.13 1.594 3.727 3.191 3.727h1.332v1.328h-12.508v-1.328h1.332c1.864 0 3.457-1.598 3.457-3.727V110.97c0-1.864-1.062-3.727-3.722-3.727-2.13 0-4.528 2.13-5.856 5.059l-17.03 37.785c-1.599 3.195-3.728 4.258-6.653 4.258H87.02l-.801-5.055c1.863 1.332 3.195 2.129 3.726 2.395 2.13 1.066 3.727-.266 4.258-1.864l2.129-4.789-15.434-31.933c-1.863-3.461-3.195-5.055-5.59-5.59v-1.594h15.438v1.594h-1.332c-1.332 0-1.863 1.863-.797 3.726l11.707 25.016 10.91-24.215c1.332-2.398.266-4.258-1.597-4.527v-1.86zm0 0M61.207 138.379v-29.274H39.383v40.184c0 2.129 1.597 3.727 3.195 3.727h1.332v1.328H26.88v-1.328h1.328c1.863 0 3.461-1.598 3.461-3.727v-38.32c0-2.13-1.598-3.727-3.461-3.727h-1.328v-1.594H73.98v1.594h-1.332c-1.863 0-3.46 1.863-3.46 3.727v38.32c0 2.129 1.597 3.727 3.46 3.727h1.332v1.328H56.95v-1.328h1.327c1.598 0 3.196-1.598 3.196-3.727v-10.91zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/QIWI.js":
/*!**********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/QIWI.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/QIWI.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M171.887 179.898c-2.29 0-4.203.797-5.375 2.247-3.016 3.71-1.66 10.238 2.953 14.265 2.012 1.754 4.91 2.805 7.758 2.805 2.898 0 5.316-1.086 6.808-3.055 2.684-3.594 1.14-8.683-3.93-12.969-2.511-2.12-5.43-3.293-8.214-3.293zm25.281-18.636c-2.242-.657-3.922-.168-4.746 1.343-1.254 2.286-.328 6.81 2.2 10.747 2.558 3.992 4.73 6.015 6.46 6.015.598 0 1.129-.25 1.547-.719.96-1.105 1.277-3.414.875-6.34-.406-2.984-2.242-9.128-6.336-11.046zm50.074 90.535c2.32 2.871-1.203 5.781-3.832 3.453-26.242-23.219-48.316-29.797-70.144-30.71-11.586-.481-23.102.628-35.141 1.69-2.406.211-4.828.422-7.281.618-1.07.086-2.149.164-3.227.246-4.246.457-8.547.699-12.91.699-20.539 0-39.922-5.027-57.613-14.95-17.758-9.952-31.867-23.847-41.942-41.308C5.098 154.113 0 134.86 0 114.313c0-20.528 5.09-39.864 15.133-57.465 10.058-17.63 24.012-31.664 41.465-41.711C74.05 5.094 93.086 0 113.184 0c20.988 0 40.605 5.031 58.308 14.953 17.754 9.953 31.906 23.89 42.074 41.438 10.149 17.527 15.293 36.828 15.293 57.37 0 7.93-.77 15.677-2.28 23.208a55.945 55.945 0 01-.872 3.96c-.297 1.235-.61 2.466-.945 3.692l-.094-.055c-2.035 6.504-5.82 15.707-12.863 27.524-.762 1.246-1.18.297-1.278-.399-2.468-17.382-10.093-30.578-23.53-39.105-.224-.14-.45-.274-.673-.41a59.31 59.31 0 00-7.066-3.692c-3.203-1.41-6.656-2.625-10.371-3.625-2.282-.613-7.36-.347-5.516-2.175.758-.75 11.762-.926 24.41-.125l.742.046c.235-2.648.356-5.363.356-8.152 0-21.683-7.188-39.371-21.973-54.055-14.797-14.695-32.094-21.84-52.89-21.84-21.293 0-38.559 7.153-52.782 21.872-14.3 14.789-21.25 32.324-21.25 53.605 0 21.235 7.145 38.695 21.848 53.38 14.7 14.683 31.77 21.823 52.184 21.823.98 0 1.945-.027 2.914-.058-.024-.246-.04-.496-.059-.739-1.176-14.972-1.422-27.41 1.656-22.39a150.865 150.865 0 003.25 5.062c4.024 6.012 8.008 10.957 11.977 15.063l.598.605c14.511 14.715 28.796 18.336 43.98 22.059.324.078.648.16.973.238 2.484.61 4.992 1.23 7.535 1.91 18.05 4.813 37.594 12.567 60.402 40.809zm0 0",
      fill: "#ff8c00"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Ripple.js":
/*!************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Ripple.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Ripple.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "prefix__a",
        gradientUnits: "userSpaceOnUse",
        x1: 55.34,
        y1: 32.66,
        x2: 202.83,
        y2: 180.15,
        gradientTransform: "matrix(1.30472 0 0 1.30377 0 .273)",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0,
          stopColor: "#1db4ff"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 1,
          stopColor: "#0f72e5"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M227.023 169.594c-9.824-5.66-20.878-7.301-31.835-7.692-9.133-.316-22.887-6.207-22.887-22.91 0-12.437 10.086-22.449 22.898-22.894 10.946-.391 22-2.032 31.824-7.692 24.372-14.062 35.118-43.582 25.489-70.011-9.625-26.426-36.852-42.13-64.57-37.243-27.715 4.883-47.919 28.95-47.919 57.075 0 11.222 4.004 21.55 9.133 31.144 4.293 8.059 6.524 23.012-8.246 31.5-10.933 6.309-24.594 2.32-31.418-8.594-5.754-9.215-12.722-17.847-22.453-23.465-24.375-14.054-55.328-8.597-73.418 12.946-18.086 21.543-18.086 52.953 0 74.496 18.09 21.543 49.043 27.004 73.418 12.95 9.73-5.622 16.688-14.25 22.453-23.47 4.723-7.562 16.531-17.199 31.418-8.605 10.922 6.309 14.352 20.129 8.246 31.512-5.101 9.582-9.133 19.91-9.133 31.132 0 28.125 20.204 52.192 47.918 57.075 27.72 4.886 54.946-10.817 64.57-37.243 9.63-26.43-1.116-55.949-25.488-70.011zm0 0",
      fill: "url(#prefix__a)"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Sber.js":
/*!**********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Sber.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Sber.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("defs", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("linearGradient", {
        id: "prefix__a",
        gradientUnits: "userSpaceOnUse",
        x1: 0.582,
        y1: 0,
        x2: 0.052,
        y2: 0.714,
        gradientTransform: "scale(255.98828 256)",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0,
          stopColor: "#0187c8"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0.313,
          stopColor: "#08a652"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 0.724,
          stopColor: "#08a652"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("stop", {
          offset: 1,
          stopColor: "#faef23"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fillRule: "evenodd",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M128 0c30.758 0 58.98 10.84 81.05 28.93l-22.042 17.625c-16.574-12.032-36.965-19.125-59.02-19.125-55.554 0-100.57 45.03-100.57 100.57 0 55.55 45.031 100.57 100.57 100.57 55.551 0 100.57-45.03 100.57-100.57 0-1.281-.027-2.559-.066-3.84l25.563-18.457A127.932 127.932 0 01255.988 128c0 70.695-57.308 128-128 128C57.293 256 0 198.695 0 128S57.305 0 128 0zm0 0",
        fill: "url(#prefix__a)"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M79.848 96.805L128 128l103.91-76.16 15.438 25.074L128 164.133l-48.152-30.055zm0 0",
        fill: "#229e39"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Stellar.js":
/*!*************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Stellar.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Stellar.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M89.176 188.926c11.379 8.07 32.238-1.996 47.023-22.473.211-.27.434-.523.63-.808 8.136-11.625 5.331-27.696-6.247-35.91-11.578-8.22-27.559-5.458-35.68 6.163-.199.29-.363.586-.55.875-14.168 20.922-16.551 44.086-5.176 52.153",
      fill: "#ed8117"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M100.813 173.441c7.917 5.48 22.539-1.496 32.953-15.586.152-.187.308-.363.449-.558a17.457 17.457 0 003.058-13.18 17.468 17.468 0 00-7.28-11.402c-8.067-5.59-19.247-3.633-24.973 4.363-.145.2-.254.402-.383.598-9.989 14.39-11.746 30.277-3.825 35.765",
      fill: "#eebb18"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M51.648 106.906c-1.195 1.54-1.78 3.852 1.461 2.844 9.258-2.879 30.243-6.242 54.598 10.656 32.895 22.813 30.223-36.32 30.223-36.32-7.813-5.414-47.118-27.387-86.282 22.82m125.055 89.149c.137 3.343 2.11 2.03 3.145.414 33.859-52.918.148-82.07-7.536-87.512 0 0-56.207 17.11-23.851 40.035 23.953 16.973 27.836 37.535 28.242 47.063",
      fill: "#5b6a72"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M142.531 157.96c6.422 4.75 10.309 5.524 14.977-.241 4.668-5.766 29.219-34.563 53.746-66.305 24.527-31.746 9.562-86.371 6.621-88.547l-.04.047.024-.059C214.918.68 160.82 4.301 140.58 39.207c-20.243 34.91-37.833 68.844-41.438 75.395-3.602 6.546-1.598 10.132 4.82 14.878 2.93 2.157 11.168 8.243 19.285 14.239s16.36 12.086 19.285 14.242",
      fill: "#dcf2f9"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M149.77 164.977h-.266c-2.934-.082-5.988-1.391-10.223-4.387-2.972-2.106-11.261-7.969-19.527-13.824l-.484-.344-13.004-9.2-7.02-4.964c-4.223-2.992-6.484-5.438-7.539-8.184-1.656-4.289.125-8.222 1.61-10.812.773-1.352 2.195-3.914 4.163-7.457 7.23-13.032 22.274-40.145 38.899-67.606 5.984-9.883 15.129-18.176 27.191-24.66 6.375-3.426 17.024-8.14 31.528-11.156 5.73-1.192 11.609-2 16.547-2.278 7.566-.425 8.91.528 9.554.989l.059.043c.664.472 1.996 1.55 4.097 8.695 1.407 4.79 2.63 10.645 3.442 16.492 2.226 16.04 3.394 46.13-13.817 67.457-20.14 24.973-40.484 48.34-50.261 59.559-2.664 3.058-4.59 5.265-5.594 6.46-1.469 1.735-2.91 2.99-4.406 3.84a9.92 9.92 0 01-4.95 1.337M215.235 6.383c-5.297 0-16.879 1.094-29.937 5.09-14.156 4.332-33.188 13.062-43.453 30.03-16.57 27.36-31.574 54.4-38.785 67.395-1.98 3.57-3.41 6.145-4.211 7.54-1.723 3.003-1.535 4.433-1.192 5.34.559 1.445 2.23 3.117 5.274 5.273l7.02 4.965 13.003 9.199.488.344c8.266 5.851 16.551 11.714 19.528 13.824 6.273 4.437 8.133 4.023 11.281.3 1.04-1.226 2.977-3.456 5.656-6.527 9.75-11.195 30.043-34.496 50.106-59.37 12.453-15.438 14.226-36.391 13.52-51.25-.77-16.095-4.598-28.9-6.13-32.063a21.183 21.183 0 00-2.168-.094",
      fill: "#5b6a72"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M162.336 79.676c10.25 7.222 24.41 4.765 31.617-5.485 7.203-10.25 4.758-24.41-5.488-31.636-10.25-7.223-24.406-4.774-31.617 5.484-7.211 10.254-4.758 24.41 5.488 31.637",
      fill: "#fefefe"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M175.355 87.027a25.914 25.914 0 01-22.945-14.011 25.921 25.921 0 011.824-26.82 25.896 25.896 0 0116.743-10.61 25.9 25.9 0 0119.34 4.352c11.675 8.234 14.484 24.425 6.257 36.097a25.687 25.687 0 01-16.738 10.602c-1.48.258-2.98.39-4.48.39m.078-45.422c-1.13 0-2.258.098-3.371.29a19.352 19.352 0 00-12.594 7.984c-6.184 8.789-4.07 20.984 4.715 27.18 8.796 6.203 20.96 4.093 27.156-4.711 6.195-8.79 4.078-20.98-4.715-27.176a19.335 19.335 0 00-11.191-3.567",
      fill: "#5b6a72"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M25.96 254.14l35.954-50.59 2.61 1.852-35.954 50.594zm20.614-6.449l21.031-29.734 2.625 1.856L49.2 249.55zm0 0",
      fill: "#979797"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/TetherERC20.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/TetherERC20.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/TetherERC20.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    id: "prefix__\\u0421\\u043B\\u043E\\u0439_1",
    xmlns: "http://www.w3.org/2000/svg",
    x: 0,
    y: 0,
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    xmlSpace: "preserve",
    ...props,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("style", {
      children: ".prefix__st0{fill:#48430a}.prefix__st1{fill:#6c650f}.prefix__st2{fill:#908613}.prefix__st3{fill:#fceb22}.prefix__st4{fill:#fff}"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      id: "prefix__surface1",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M122.2 244c-11.8-.6-24.9-3.4-36.3-8-3.2-1.3-11.1-5.1-14.4-7-10.7-6.2-21-14.5-29.3-23.9-23.1-26.1-33-60.8-27.4-95.4 5-30.7 22.7-58.6 48.4-76.3C82.8 19.9 105.2 13 129 13c24.9 0 48.3 7.7 68.4 22.3 4.8 3.5 9.5 7.7 14.4 12.6 8.7 8.9 15.2 18 20.8 29.3 14 28.1 15.9 61 5.1 90.8-1.7 4.8-5.3 12.6-7.5 16.5-.3.5-.9 1.5-1.3 2.3-1.3 2.3-5.3 8.4-7.5 11.2-6.6 8.8-14.2 16.4-23.1 23.1-2.9 2.2-8.9 6.2-11.2 7.5-.8.4-1.9 1-2.3 1.3-1.8 1.1-8.1 4.1-10.7 5.2-7 3-14.7 5.4-22.3 6.9-6.4 1.3-10.9 1.8-17.1 2.1-5.4.2-6.7.2-12.5-.1z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "prefix__st0",
        d: "M120 256.3c-3.2-.2-5.4-.4-10.2-1.1-3.3-.4-6-1-10.3-2-9.4-2.2-18.1-5.3-27.2-9.8-18-8.9-33.6-21.8-45.7-37.9-23.5-31.1-31.4-71.1-21.7-109C12 69 28.5 44.2 51.3 26.8 78.5 6 112.9-3 146.8 1.8c18.8 2.6 36.6 9.3 52.2 19.7 19.5 12.9 34.6 30 44.8 50.7 7.2 14.7 11.2 28.9 12.7 45.4.4 4.7.5 16.4.1 20.7-1.2 13.8-3.8 25.1-8.5 37.2-1.7 4.4-5.1 11.6-7.2 15.3-.7 1.3-1.5 2.7-1.7 3.1-3.2 5.6-9.4 14.1-15 20.4-1.4 1.6-8.1 8.3-9.7 9.7-6.3 5.6-14.8 11.8-20.4 15-.4.2-1.8 1-3.1 1.7-3.5 2-10.8 5.4-14.7 7-12.9 5.1-25.9 8-39.2 8.8-4.6.1-12.4.1-17.1-.2zm17.7-.9c19.4-1.4 37.5-6.9 54.2-16.4 3.8-2.1 11.3-7.2 14.6-9.8 6.6-5.2 14.6-12.9 19.8-19.1 24.8-29.7 34.6-68.4 27.1-106.5-4.6-23.3-16.4-45.9-32.7-62.6-5.9-6.1-9.8-9.5-15.5-13.9C189.3 15.2 171.4 7.3 152 3.6c-7.7-1.4-14.4-2-23.1-2-12.7 0-23.3 1.5-35.6 5C84.6 9 73.6 13.8 65 18.8c-4.4 2.5-11.5 7.4-14.4 9.8-.3.2-1.9 1.5-3.6 2.9-4 3.2-12 11.3-15.2 15.2-1.4 1.7-2.7 3.3-2.9 3.6-2.4 2.9-7.4 10.2-9.8 14.4C7.7 84.5 2 105.6 2 128.4 2 141 3.5 152 6.8 163.5c8.4 29.2 26.7 54.1 52.2 71.2 15.7 10.5 34.8 17.6 53.8 20 7.1.8 18 1.1 24.9.7z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "prefix__st0",
        d: "M128.4 210.9v-.4c0-.1-.1-.2-.2-.1-.1 0-3.9-4.1-8.4-9.2S104.5 184 96 174.4l-15.7-17.6 22.6-.1c12.5-.1 34.1-.2 48-.2h25.3l-.6.6c-.3.3-.9 1-1.3 1.5s-5.5 6.4-11.3 13.2c-5.8 6.7-15.3 17.7-21.1 24.4-9.9 11.5-13.1 15-13.3 15-.1-.1-.2-.2-.2-.3zM79 94.5c0-.1.3-.4.6-.8s10-11.6 21.5-25 21.6-25.2 22.4-26.2l1.6-1.8 1.5 1.5c.8.9 6.1 6.3 11.6 12.1s12 12.6 14.4 15.1c2.4 2.5 8.7 9.2 14.1 14.8l9.8 10.3h-48.7c-26.9.2-48.8.1-48.8 0z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "prefix__st1",
        d: "M128.4 210.9v-.4c0-.1-.1-.2-.2-.1-.1 0-5.2-5.6-11.4-12.5-26.7-30.1-35.8-40.3-36-40.7-.3-.4-.2-.4.7.1 3.5 1.8 35.4 17.9 35.5 17.9.1 0 2.6-4 5.4-8.8 2.9-4.8 5.4-9 5.6-9.3l.4-.6h22.3c12.3 0 22.9.1 23.6.2l1.3.2-5.5 2.8c-8.1 4.1-30.5 15.5-31 15.8-.3.2-10.3 34.3-10.3 35.3.2.2-.3.5-.4.1zM79.5 94.3c.2-.2.8-.6 1.5-.9.6-.3 8.1-4.3 16.6-8.9 8.5-4.6 15.5-8.3 15.7-8.3.5 0 .4.3 3.7-10.1 1.2-3.9 2.3-7.3 2.5-7.6.3-.9 4.6-14.4 5.1-15.9.2-.7.4-1.4.5-1.6.1-.4 1 .4 13.3 13.4 5.5 5.8 12 12.6 14.4 15.1 2.4 2.5 7.7 8.1 11.8 12.4 4.1 4.3 8.4 8.9 9.6 10.1 1.2 1.3 2.2 2.3 2.2 2.4 0 .1-.2.1-.4.1s-.4-.1-.4-.2-3.4-1.9-7.6-4c-11.8-6.1-19.2-9.8-24.2-12.4l-4.6-2.4-12.7 19.1h-23.6c-20.4.1-23.7 0-23.4-.3z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "prefix__st2",
        d: "M128.5 210.7c0-.2-.1-.9-.3-1.5-.2-.6-1.4-4.2-2.6-8.1-1.2-3.9-2.3-7.3-2.5-7.6-.1-.3-1.2-3.8-2.5-7.6-1.2-3.9-2.5-7.8-2.9-8.8l-.6-1.8 5.3-9c2.9-5 5.5-9.2 5.7-9.4.3-.4 1.7-.4 22.7-.4 12.3 0 22.9.1 23.6.2l1.3.2-5.5 2.8c-8.1 4.1-30.5 15.5-31 15.8-.2.1-2.3 7-5.4 17.8-2.8 9.7-5.1 17.7-5.2 17.8-.1 0-.1-.1-.1-.4zM79.5 94.3c.2-.2.8-.6 1.5-.9.6-.3 8.1-4.3 16.6-8.9 8.5-4.6 15.5-8.3 15.7-8.3.5 0 .4.3 3.7-10.1 1.2-3.9 2.3-7.3 2.5-7.6.1-.3 1.2-3.8 2.5-7.6 1.3-3.9 2.4-7.5 2.6-8.1.2-.6.4-1.2.4-1.4.1-.7.4-.5.8.7.3.7 3.4 8.6 6.9 17.4l6.4 16.1-6.3 9.5-6.3 9.5h-23.6c-20.4.1-23.7 0-23.4-.3z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "prefix__st3",
        d: "M128.5 210.7c0-.2-.1-.9-.3-1.5-.2-.6-1.4-4.2-2.6-8.1-1.2-3.9-2.3-7.3-2.5-7.6-.1-.3-1.2-3.8-2.5-7.6-1.2-3.9-2.5-7.8-2.9-8.8l-.6-1.8 5.3-9c3-5 5.5-9.2 5.7-9.4.3-.3.4-.3.5 0 .2.6 1.3 2.6 5.8 10.6 2.4 4.3 4.4 7.9 4.4 8.1 0 .6-9.9 35.1-10.1 35.3-.2.2-.2.1-.2-.2zM126.1 94.5c-.2-.1-.3-.2-.3-.4 0-.1-2.7-4.3-5.9-9.2-3.2-4.9-5.9-9.1-5.9-9.3 0-.2.1-.9.3-1.4.2-.6 1.4-4.2 2.6-8.1 1.2-3.9 2.3-7.3 2.5-7.6.1-.3 1.2-3.8 2.5-7.6 1.3-3.9 2.4-7.5 2.6-8.1.2-.6.4-1.2.4-1.4.1-.7.4-.5.8.7.3.7 3.4 8.6 6.9 17.4l6.4 16.1-6.3 9.5c-3.8 5.7-6.5 9.5-6.6 9.4z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        className: "prefix__st4",
        d: "M43.6 142.9c-1.7-.3-2.5-.7-3.6-1.9-1.6-1.9-1.7-2.5-1.6-16 .1-11.9.1-11.9.6-13.2.7-1.5 1.4-2.2 2.6-2.9 1-.5 1.2-.5 14.3-.6l13.3-.1-.2 1c-.6 2.6-2.4 5.2-4.5 6.4l-1.3.7H45v5.2h22l-.2.9c-.3 1.5-1.5 3.9-2.7 5-2 2-1.9 2-11 2.1l-8.1.1v5.1h12.1c10.4 0 12.1 0 12.1.4 0 .6-1 3.1-1.6 4.1-.7 1.2-2.1 2.5-3 3-1.4.7-3.6.9-11.6.9-4.5 0-8.7-.1-9.4-.2zM75.1 133.3v-9.8H98l.4-.9c.3-.6.4-1.5.3-3.1-.1-3.4.7-3.1-10.1-3.2-8.8-.1-9.2-.1-10.1-.6-2-1-3-2.8-3.2-5.7l-.2-1.8h11.7c13.5 0 13.2 0 15.4 2.1 4.8 4.7 4.6 15.1-.3 19.5-.7.6-1.7 1.3-2.3 1.5l-1 .4 4.2 5.5c2.3 3.1 4.2 5.6 4.2 5.7 0 .1-2 .2-4.5.2h-4.6l-4.3-5.8-4.3-5.8H82v5.7l-.1 5.7-3.4.1-3.4.1v-9.8zM148.1 140.8c-.1-1.3 0-3.6.1-5 .6-7.3 3.4-11.5 9-13.4 1.8-.6 2.3-.7 7.4-.8 6.5-.1 6.3-.1 6.3-2.6 0-2.7.6-2.5-9.5-2.6l-8.6-.1-1.3-.7c-2-1.1-2.9-2.7-3.2-5.6l-.2-1.7h11.3c12.9 0 12.8 0 14.9 1.9 4.4 3.9 4.6 12.7.5 17.2-1.9 2.1-2.5 2.2-9.2 2.4-6.4.2-7 .3-8.3 1.7-.4.4-.9 1.3-1.2 2l-.4 1.3 11.8.1h11.8l-.1 1.9c-.3 3.6-2 5.7-5 6.2-.8.1-6.9.2-13.7.2h-12.2l-.2-2.4zM119.5 142.6c-3.3-1.2-5.5-3.8-6.5-7.5-.5-2.1-.5-17.1 0-19.1.8-3.1 2.9-5.8 5.5-7.1 1.2-.6 1.2-.6 12.5-.6l11.4-.1-.4 1.3c-.6 1.9-1.5 3.6-2.9 4.9-1.9 1.9-2.3 1.9-10.9 1.9-5.4 0-7.5.1-7.8.3-.9.7-1 1.2-1 9v7.7l1.4 1.4h21.5l-.2.8c-.3 1.3-1.5 3.7-2.5 4.8-.5.6-1.4 1.3-2 1.7l-1.2.7h-8.1c-6 .2-8 .1-8.8-.1zM192.9 142.5c-3.1-1.1-5.4-3.8-6.3-7.3-.5-1.8-.5-17.4 0-19.2.8-3.1 2.9-5.8 5.5-7 1.4-.7 1.5-.7 7.7-.7 5.2-.1 6.5 0 7.8.3 2.6.7 5.1 3.1 6.3 6 .5 1.3.6 1.7.6 10.2 0 5.9 0 9.3-.2 10.1-.6 3.1-3 6.1-5.6 7.3-1.1.5-1.6.5-7.9.6-5.7.1-6.9 0-7.9-.3zm13.8-8.1c.4-.2.8-.7.9-1.1.1-.4.2-3.9.2-7.9 0-7.8-.1-8.3-1.3-8.8-.4-.2-2.6-.3-6.2-.3-5.3 0-5.7 0-6.2.5-.4.3-.8.9-.9 1.4-.1.5-.2 3.7-.2 7.3 0 3.6.1 6.8.2 7.3s.5 1.1.9 1.4c.6.5 1 .5 6.3.5 4.5.1 5.7 0 6.3-.3z"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Tinkoff.js":
/*!*************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Tinkoff.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Tinkoff.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M87.414 141.813v-38.504c0-3.399-1.133-7.364-2.27-10.758h30.083c2.84 3.96 7.949 6.226 13.625 6.226 5.675 0 10.785-2.265 13.62-6.226h30.087c-1.137 3.394-2.27 6.793-2.27 10.758v38.504zm41.438 52.66c-3.973-3.965-7.38-4.532-18.73-4.532-13.626 0-22.708-7.925-22.708-20.382v-25.48h82.305v25.48c0 12.457-9.082 20.382-22.703 20.382-11.352 0-14.192.567-18.164 4.532",
      fill: "#ffe500"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M91.957 199.57v7.926l-6.812 2.832c5.675 2.832 12.488 5.094 21 6.793l3.976-12.457c-7.95-1.7-13.625-3.398-18.164-5.094m36.895 10.192c-7.946 0-14.758-.567-17.028-1.7l-3.976 13.024c6.246 1.7 13.625 2.832 21.004 2.832 7.378 0 14.757-1.133 21.003-2.832l-3.976-12.457c-2.836.566-9.082 1.133-17.027 1.133m36.328-10.192c-4.543 1.696-10.22 3.395-18.164 5.094l3.972 12.457c8.516-1.7 15.328-4.527 21.004-6.793l-6.812-2.832zM78.332 74.996c10.219-5.664 36.328-18.121 18.73-31.71-2.269-1.7-5.105-3.4-7.378-5.661-2.836 2.262 1.136 7.36 1.703 9.059 0 0-5.676.566-7.38.566-9.081 0-18.163-5.098-13.62-15.29-3.407.567-3.973 3.966-5.11 6.798-2.27-1.7-6.242-5.098-9.082-4.531 2.27 7.925 13.055 15.289 21.004 16.421-7.949 4.528-23.273 7.926-31.222-1.699C40.3 59.707 48.25 64.24 55.629 69.9c-28.95 13.023-24.977 28.312-44.277 40.203 3.406 1.699 14.191-.567 15.328-.567-3.973 5.664-6.246 7.93-7.38 10.195-1.136 2.262-1.702 5.094-2.84 11.325-1.136 4.527-2.269 9.625-8.515 12.457 2.274 3.96 7.38 1.133 9.082.566 0 .567-1.132 5.094-2.836 7.926 9.649-.566 5.11-21.516 15.325-16.422 2.84 1.133 3.972 4.531 2.273 6.797-6.246 13.023 7.945 24.914 7.379 36.805 3.402 0 7.379 0 9.648-5.098 1.137 2.266 3.407 5.664 3.973 9.062l2.84-5.097c1.703 8.496 9.648 15.855 19.867 16.422-5.11-7.926 1.133-18.688-11.355-30.012 1.703-1.133 5.109-3.399 6.246-5.094-14.758 1.696-30.086-10.195-23.274-15.289 4.54-3.398 6.813 3.961 13.621 2.832l-2.836-2.265 3.407-3.399c-2.84-.566-6.246-2.266-6.246-2.266l1.703-2.832c-17.594 0-17.594-13.023-10.785-13.59 3.406 0 7.378 5.665 18.164 4.532-1.133-1.7-1.704-3.965-2.836-6.23 2.836 0 5.675 0 7.945-1.13-5.11-.566-6.813-2.265-10.785-5.664l5.11-1.699c-7.38-3.398-6.813-10.191-7.38-16.422 3.973 2.266 8.516 5.664 13.055 3.965 1.137-.566 1.703-1.133 1.703-2.265-5.11-2.832-9.082-13.59 7.379-22.649M65.844 76.13c-9.082 9.625-5.11 15.855-3.406 17.55-3.403-.562-8.512-5.093-7.38-9.058-1.132 1.133-2.269 2.832-3.406 3.965-2.27 2.832-4.539 6.227-6.242 9.059-2.84 8.496 2.27 16.988 10.785 20.386-9.648-1.699-14.191-10.195-14.191-15.289-4.54 8.492-6.813 16.422-6.813 23.215 0 2.266.57 4.531.57 6.797 2.27 3.96 5.676 5.66 11.919 6.226-5.676.567-9.082 0-11.352-2.265 3.973 16.988 22.137 31.71 29.516 44.168-7.38-9.625-23.274-24.348-28.38-34.54.567 3.395 1.704 13.024 6.243 19.25-6.812-6.792-7.379-16.988-6.812-23.214-1.704-4.531-2.836-9.059-2.836-14.723 0-5.097 0-9.625 1.132-13.59-4.539 6.227-10.785 8.493-13.62 18.121.566-12.457 9.648-12.457 16.46-27.18 2.84-6.23 6.242-11.89 10.785-18.687-5.675 1.7-9.648 2.832-15.894 9.625 4.543-10.757 30.086-22.082 42.004-33.972-3.406.566-18.164 1.132-23.84-2.832 10.785 2.832 35.195-.567 44.277-6.793-6.246 9.058-19.867 9.625-36.898 27.742 1.703-1.13 4.543-2.828 7.379-3.961m174.832 54.926c-1.137-6.23-1.703-8.496-2.84-11.325-1.137-2.832-3.406-5.097-7.379-10.195 1.137 0 11.918 2.266 14.758 1.133-19.3-11.89-14.758-26.613-44.274-40.203 7.946-5.66 15.325-10.192 9.649-20.95-7.945 9.626-23.274 6.227-31.219 1.7 7.945-1.7 18.73-8.496 21-16.422-2.836-.566-6.809 2.832-9.082 4.531-1.133-2.832-1.703-6.23-5.105-7.363 4.539 10.191-4.543 15.289-13.625 15.289-1.137 0-7.38-.566-7.38-.566 1.137-1.7 4.54-7.36 1.704-9.059-2.27 2.262-4.543 3.96-7.38 5.66-17.597 13.59 8.517 26.047 18.731 31.711 16.461 9.059 11.922 19.25 5.11 22.082 0 1.133.566 1.7 1.703 2.266 4.539 1.699 9.082-1.7 13.055-3.965 0 6.797 0 13.023-7.38 16.422l5.11 1.699c-4.543 3.398-5.676 5.098-10.785 5.664 2.27 1.129 5.676 1.129 7.945 1.129-.566 1.7-1.133 4.531-2.836 6.23 10.785 1.133 14.758-5.097 18.164-4.53 6.809.566 6.809 13.589-10.785 13.589l1.703 2.832s-3.406 1.7-6.246 2.266l3.406 3.398-2.835 2.266c6.808 1.129 9.082-6.23 13.62-2.832 6.813 5.66-8.515 17.55-23.273 15.289 1.137 1.699 4.543 3.96 6.246 5.094-11.922 11.324-6.246 22.085-11.355 30.011 10.219-.566 18.164-8.492 19.867-16.422l2.84 5.098c1.137-3.398 2.84-6.797 3.972-9.059 2.27 5.094 6.247 5.094 9.649 5.094-.566-11.89 13.625-23.215 7.383-36.804-1.137-2.833-.57-5.665 2.27-7.364 9.648-5.094 5.109 15.856 15.323 16.422-1.703-2.266-2.835-7.36-2.835-7.926 2.27.567 6.808 3.965 9.082-.566-2.84-1.7-4.543-6.797-5.676-11.324m-18.164-16.989c.566 3.965 1.133 8.493 1.133 13.59 0 5.664-1.133 10.192-2.836 14.723.566 6.226 0 16.422-6.813 23.215 4.54-6.227 5.676-15.856 5.11-19.25-5.676 10.191-21.004 24.914-28.383 34.539 7.379-12.457 26.109-27.18 30.086-44.168-2.274 2.832-5.68 2.832-11.356 2.265 6.246-.566 9.652-2.265 11.922-6.792.566-2.266.566-4.532.566-6.797 0-6.793-2.27-14.723-6.812-23.215 0 5.66-4.54 14.156-14.188 15.289 8.512-3.965 13.621-12.457 10.786-20.387-1.704-2.832-3.977-5.66-6.247-9.058-1.132-1.7-2.27-2.832-3.406-3.965 1.137 3.965-3.972 8.496-7.379 9.062 1.703-1.699 5.676-7.93-3.406-17.555 2.84 1.133 5.676 2.833 7.379 4.528-16.461-18.117-30.648-18.684-36.895-27.742 9.082 6.226 33.493 9.625 44.274 6.793-6.242 3.964-20.434 3.398-23.84 2.832 11.922 11.324 37.465 23.215 42.004 33.972-6.242-6.793-10.215-7.925-15.89-9.625 4.538 6.23 7.945 11.89 10.784 18.688 6.81 14.722 15.891 15.285 16.461 27.18-2.273-9.63-9.082-11.895-13.054-18.122",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M141.906 92.55c-2.836 3.962-7.945 6.227-13.62 6.227-1.138 0-2.84 0-3.977-.566.57 1.7 1.136 3.398 2.84 4.531-.567 4.528 1.136 8.492 6.242 9.625.57 2.266 1.703 3.965 4.543 5.098l-3.407 4.527c-1.136 1.7-2.836 1.7-4.539 1.7l-15.328-1.7c.567-1.699-1.133-3.394-5.676-2.828l5.676-16.422-2.836-7.93-6.812 5.665-.567 17.554-2.84-1.699c-3.972-1.7-5.109 5.094-1.136 5.094h1.703c0 .566 0 1.699.57 1.699-.57 0-1.137 1.7 0 2.266-1.137.566-1.137 1.699-.57 2.265-.567 1.133-1.133 3.965 1.703 4.531 2.27.567 3.406-1.699 3.973-2.832l23.273 7.36c3.406 1.133 5.676.566 8.516-2.266l6.242-5.094c-.566 3.399.57 6.793 3.406 7.926 0 0-.566 3.399 0 4.531h21.004V103.31c0-3.399 1.133-7.364 2.27-10.758zm-35.191 65.118l.566.566c.567.567 1.137.567 1.703 0l1.137-.566c.567-.566 5.106 1.133 5.106-2.266.57 2.832-2.836 8.493-.567 11.325l2.84 4.53h-8.516c-1.136 0-1.703.567-1.703 1.134l-2.27 4.527c-.566 1.133-.566 2.266 0 3.398l1.704 1.7s1.133-1.133 1.703-2.266l-.57-.566c-.567-.567-.567-1.133 0-1.7l1.136-2.832c.567-1.129 1.137-1.129 2.27-1.129l6.812 1.696c.567 0 1.137.566 1.704-.567.566-1.695 2.27-1.695 3.972-1.129 3.973.563 12.488 1.696 15.895-2.265 3.406 5.094 10.785 5.094 10.218 7.36l-1.703 8.495h2.27l1.133-8.496c0-1.133.57-2.265-.567-3.398-.566-.567-.566-.567-1.703-2.262-1.133-2.266-1.133-5.664-2.27-8.496 1.137-1.133 2.27-1.7 3.407-1.7 2.27.567 3.406 5.098 6.812 8.497-.57-1.7-.57-3.399-1.703-5.098 0 0 2.27 1.7 3.406 3.965.567 1.7.567 2.266 2.27 2.832.566.566 1.703 0 2.836-1.133 0 0-2.27-3.398-3.973-5.664-2.27-2.832-5.675-6.226-9.648-5.66-1.137 0-2.84.563-3.973 1.695-5.11-2.828-8.515 0-10.219 0l-9.082-.566c-1.703 0-3.406-2.262-3.406-2.262 0-7.93-6.242-10.762-8.515-10.762 0 0 0-1.132-.567-1.695l-1.703 2.262-5.11-1.7 3.977 3.4-4.543 5.097c-.566.566-.566 1.699-.566 1.699",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M101.04 168.426c-1.138 1.133-1.138 2.265-.571 3.965l.57 1.695 2.27-1.695-.567-1.133c-.57-.567-.57-1.133 0-1.7l2.836-2.265c.567-.566 1.137-.566 1.703-.566l6.246 1.132s-1.136-1.132-1.136-2.832l-5.676-.566c-.57 0-1.137 0-2.27.566zm38.597 18.12h2.27l3.972-9.062c0-.566.57-.566.57-.566-1.703-.566-2.84-1.133-3.976-1.7 1.136 1.134 1.703 1.7 1.136 2.833zm2.27-122.874l4.542-24.348-15.894 5.66v25.48zm-9.083-16.422l10.785-3.965-4.539 3.399c-2.273 1.699-6.246 3.398-6.246 3.398zm0 5.664l9.649-3.398s-1.133 1.132-3.403 2.832c-2.273 1.695-6.246 3.394-6.246 3.394zm0 6.227l8.516-3.399s0 1.133-2.27 2.832c-2.273 1.7-6.246 3.399-6.246 3.399zm0 0",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M112.957 85.188l3.973.566v.566c0 .567 0 1.133.57 1.7.566 1.699 1.703 3.398 3.406 4.53 1.703 1.696 4.54 2.829 8.512 2.829 7.95 0 11.355-5.094 11.922-9.059v-.566h3.406l.566-.567c3.407-5.097 6.813-10.19 11.352-11.324l-11.918-6.797-15.894 8.496-14.758-7.93-11.922 6.798c3.973.566 7.379 6.226 10.785 10.757",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M127.148 69.898v-25.48l-15.894-5.66 3.973 24.347zm-2.27-7.925s-3.972-1.7-6.245-3.399c-2.27-1.699-2.27-2.832-2.27-2.832l8.516 3.399zm0-14.723v2.266s-3.972-1.7-6.245-3.399l-4.54-3.398zm0 5.664v2.828s-3.972-1.699-6.245-3.394c-2.27-1.7-3.406-2.832-3.406-2.832zm3.974-24.352c-9.082 0-15.895 2.833-17.598 6.797l17.598 6.793 17.597-6.793c-1.703-3.964-8.515-6.797-17.597-6.797m0-10.19c6.812 0 13.62 2.265 18.164 4.53.566-2.265 1.703-3.965 2.84-6.23l-3.977.566-3.406-7.36-6.243 3.395-7.378-6.793-6.813 6.793-6.242-3.394-3.973 7.36-3.976-.567c1.136 2.265 1.703 3.965 2.84 6.23 4.539-2.265 11.351-4.53 18.164-4.53m115.226 55.491c2.274-.566 3.977-1.133 6.246-2.832-5.11-1.133-14.758-5.094-23.84-3.398-2.84.566-4.543 1.699-3.406 2.265 4.54 2.832 10.215 10.192 14.758 18.688 3.406-4.531 2.27-10.758 1.137-12.457 7.379 4.527 9.082 6.793 12.488 5.66-1.703-2.828-3.977-5.094-7.383-7.926M19.301 88.586c3.972-8.496 9.648-15.29 14.758-18.688 1.132-.566-.57-1.699-3.407-2.265-8.515-1.695-18.73 2.265-23.84 3.398 2.27 1.7 3.973 2.266 6.243 2.832-3.407 2.832-6.242 5.664-7.946 7.926 3.407.566 5.11-1.133 12.489-5.66-.57 1.7-1.703 7.926 1.703 12.457",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M69.816 165.594c3.407-2.832 6.246-3.965 6.246-10.192-5.109 2.832-19.3 2.266-25.542-5.664-1.704-2.265 0-3.394 1.703-1.699 3.972 4.531 11.918 2.266 14.191 1.133-.57-1.7-1.703-3.395-2.84-4.527 1.137-1.133 3.973-2.266 4.543-5.098-1.703-.567-7.383-1.7-7.383-1.7 1.137-1.132 2.274-2.265 1.703-5.66-6.242 1.696-13.62-.566-15.89-2.832-1.703-2.265 0-4.53 1.703-2.832 2.836 3.399 18.164 6.797 23.84 1.133-2.274-.566-4.543-2.265-5.11-3.398 5.11-.567 9.649-3.399 9.649-7.36-2.836 0-8.512 0-10.215-1.699 2.27-1.133 3.973-1.699 5.106-4.531-9.649-.566-10.215-7.926-10.215-9.059 6.242 3.399 17.027 2.266 14.191-6.796-5.11 0-10.219-8.493 3.973-16.418 13.054-6.797 27.812-14.723 26.676-27.18-.567-7.93-14.188-13.59-15.891-17.555-5.676 2.832-6.813 5.664-3.973 10.758 0 0-12.488 1.133-13.058-6.227-.567-3.398 1.703-6.796 4.543-9.062-1.137 0-10.786-2.266-13.625 5.098-5.106-3.399-9.649-3.399-13.055.566 5.676 3.398 9.082 14.723 18.164 18.121-6.813 3.395-17.027 2.262-23.273-9.062-5.676 8.496-9.082 17.554 3.406 26.613-22.703 10.191-22.703 30.012-42.57 39.637 2.269 5.097 6.242 5.097 11.917 4.53-8.511 11.325-1.132 22.65-14.757 27.18 1.136 4.532 3.972 7.926 9.082 6.793-1.703 2.266-2.27 2.266-4.54 4.532 7.38 4.531 16.462 1.133 18.165-13.59.566-2.832 3.972-1.133 2.836 1.7-8.512 17.554 13.054 30.577 5.109 43.034 6.813 0 11.922-.566 14.758-2.832 1.137 2.832 2.27 5.098 1.703 7.926 3.406-.566 5.11-2.828 5.11-5.66 2.269 6.793 10.784 14.722 24.976 14.722-7.95-10.195-1.137-20.953-11.356-32.843m-13.62 13.023l-2.84 5.098c-1.133-3.399-2.836-6.797-3.973-9.063-2.27 5.098-6.242 5.098-9.649 5.098.567-11.89-13.625-23.215-7.379-36.805 1.133-2.832.567-5.664-2.27-7.363-9.651-5.094-5.108 15.856-15.327 16.422 1.703-2.266 2.84-7.36 2.84-7.926-2.274.567-7.38 3.961-9.082-.566 5.675-3.399 7.379-7.93 8.511-12.457 1.137-6.23 1.703-8.496 2.84-11.325.567-2.265 2.27-4.53 6.813-10.195-1.137 0-11.922 2.266-14.758 1.133 19.297-11.89 14.758-26.613 44.273-40.203-7.379-5.66-15.324-10.192-9.648-20.95 7.945 9.626 23.27 6.227 31.219 1.7-7.95-1.7-18.73-8.496-21.004-16.422 2.84-.566 6.812 2.832 9.082 4.531 1.136-2.832 1.703-6.23 5.11-6.797-4.54 10.192 4.542 15.29 13.624 15.29 1.133 0 7.379-.567 7.379-.567-1.137-1.7-4.543-7.363-1.703-9.059 2.27 2.262 4.539 3.961 7.379 5.66 17.594 13.59-8.516 26.047-18.735 31.712-16.46 9.058-11.918 19.25-5.105 22.082 0 1.132-.57 1.699-1.703 2.265-4.543 1.7-9.082-1.7-13.055-3.965 0 6.797 0 13.024 7.38 16.422l-5.11 1.7c4.539 3.398 5.675 5.097 10.785 5.663-2.274 1.13-5.676 1.13-7.95 1.13.57 1.699 1.137 4.53 2.84 6.23-10.785 1.133-14.757-5.098-18.164-4.531-6.812.566-6.812 13.59 10.786 13.59l-1.704 2.831s3.407 1.7 6.243 2.266l-3.407 3.399 2.84 2.265c-7.379 1.13-9.082-6.23-13.62-2.832-6.813 5.66 8.51 17.55 23.269 15.29-1.133 1.695-4.54 3.96-6.243 5.093 11.918 11.324 6.243 22.086 11.352 30.012-12.488 0-20.434-7.926-22.137-15.856",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M37.465 136.715c2.27 2.832 5.676 2.832 11.351 2.265-6.246-.566-9.648-2.265-11.921-6.792-.567-2.266-.567-4.532-.567-6.797 0-6.793 2.27-14.723 6.813-23.215 0 5.66 4.539 14.156 14.191 15.289-8.516-3.965-13.625-12.457-10.785-20.387 1.703-2.832 3.973-5.66 6.242-9.058 1.137-1.7 2.27-2.832 3.406-3.965-1.136 3.965 3.973 8.496 7.38 9.062-1.704-1.699-5.677-7.93 3.405-17.555-2.84 1.133-5.675 2.833-7.378 4.528 16.46-18.117 30.652-18.684 36.894-27.742-9.082 6.226-33.488 9.625-44.273 6.793 6.242 3.964 20.433 3.398 23.84 2.832C64.14 73.297 38.597 85.188 34.059 95.945c6.242-6.793 10.214-7.925 15.894-9.625-4.543 6.23-7.95 11.89-10.785 18.688-6.813 14.722-15.895 15.285-16.461 27.18 2.836-9.63 9.648-11.895 13.621-18.122-.566 3.965-1.137 8.493-1.137 13.59 0 5.664 1.137 10.192 2.84 14.723-.566 6.226 0 16.422 6.813 23.215-4.543-6.227-5.676-15.856-5.11-19.25 5.676 10.191 21 24.914 28.383 34.539-8.515-12.457-26.68-27.18-30.652-44.168M208.887 86.32c5.675 1.7 9.648 2.832 15.894 9.625-4.543-10.757-30.086-22.082-42.004-33.972 3.407.566 18.164 1.132 23.84-2.832-10.785 2.832-35.195-.567-44.277-6.793 6.246 9.058 19.867 9.625 36.898 27.742-2.273-1.695-5.11-3.395-7.379-4.528 9.082 9.626 5.106 15.856 3.407 17.555 3.402-.566 8.511-5.097 7.379-9.062 1.132 1.132 2.27 2.832 3.402 3.965 2.273 2.832 4.543 6.226 6.246 9.058 2.836 8.496-2.27 16.988-10.785 20.387 9.648-1.7 14.191-10.195 14.191-15.29 4.54 8.493 6.813 16.423 6.813 23.216 0 2.265-.57 4.53-.57 6.796-2.27 3.961-5.676 5.66-11.919 6.793 5.676.567 9.082 0 11.352-2.265-3.973 16.988-22.137 31.71-30.086 44.168 7.379-9.625 22.707-24.348 28.383-34.54.566 3.962-.567 13.59-5.11 19.25 6.813-6.792 7.38-16.988 6.813-23.214 1.703-4.531 2.836-9.059 2.836-14.723 0-5.097 0-9.625-1.133-13.59 4.54 6.227 10.785 8.493 13.621 18.121-.566-12.457-9.648-12.457-16.46-27.18-3.407-6.23-7.38-11.89-11.352-18.687",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M238.402 114.066c5.11.567 9.653.567 11.922-4.53-19.867-9.626-19.867-28.88-42.574-39.638 12.488-9.058 9.082-18.117 3.406-26.613-6.242 10.758-17.027 12.457-23.273 9.063 9.082-3.399 12.488-14.723 18.164-18.121-3.402-3.965-7.945-3.965-13.055-.567-2.836-7.363-11.918-5.097-13.62-5.097 2.269 2.265 4.538 5.664 4.538 9.062-1.133 7.36-13.055 6.227-13.055 6.227 2.27-5.094 1.137-7.926-3.972-10.758-1.703 3.965-14.758 9.625-15.895 17.554-1.133 12.457 13.625 19.817 26.68 27.18 14.191 7.926 9.082 15.852 3.973 16.418-2.84 9.063 7.945 10.195 14.191 6.797 0 1.133-.566 8.492-10.219 9.059.57 2.832 2.27 3.964 5.11 4.53-1.703 1.134-7.38 1.7-10.22 1.7.571 3.961 4.544 6.793 9.653 7.36-.57 1.132-2.84 2.831-5.11 3.398 5.677 5.664 21 1.7 23.84-1.133 1.704-1.7 3.407.566 1.704 2.832s-9.649 5.094-15.895 2.832c-.566 3.395.57 4.527 1.703 5.66 0 0-6.242.567-7.378 1.7.566 2.832 3.406 3.964 4.542 5.097-1.136 1.133-2.273 2.832-2.84 4.527 2.84 1.133 10.22 3.399 14.192-1.132 1.703-1.696 3.406-.563 1.703 1.699-6.246 8.496-20.433 8.496-25.543 5.664 0 6.226 2.836 7.926 6.242 10.191-10.214 11.891-3.406 22.649-10.785 32.844 13.625 0 22.137-7.363 24.977-14.723 0 2.266 1.703 4.528 5.11 5.66 0-2.828.566-5.093 1.702-7.925 2.836 2.265 7.946 2.832 14.758 2.832-7.379-13.024 13.621-26.047 5.11-43.035-1.137-2.832 2.269-4.532 2.835-1.7 1.704 14.723 10.786 18.122 18.165 13.59-2.27-2.265-3.407-2.265-4.54-4.53 5.11 1.132 7.38-2.263 9.082-6.794-13.625-3.965-6.812-15.855-15.328-27.18m1.137 30.012c0 .567 1.137 5.094 2.836 7.926-9.648-.566-5.105-21.516-15.324-16.422-2.84 1.133-3.406 4.531-2.27 7.363 6.242 13.024-8.515 24.914-7.379 36.805-3.406 0-7.379 0-9.652-5.098-1.133 2.266-3.402 5.664-3.973 9.063l-2.836-5.098c-1.703 8.496-9.652 15.856-19.867 16.422 5.11-7.926-1.137-18.687 11.352-30.012-1.703-1.132-5.11-3.398-6.242-5.093 14.757 1.695 30.648-10.196 23.27-15.29-4.54-3.398-6.81 3.961-13.622 2.829l2.836-2.262-3.402-3.399c2.836-.566 6.242-2.265 6.242-2.265l-1.703-2.832c17.597 0 17.597-13.024 10.785-13.59-3.406 0-7.38 5.664-18.164 4.531 1.137-1.699 1.703-3.965 2.84-6.23-2.84 0-5.68 0-7.95-1.133 5.11-.563 6.813-2.262 10.786-5.66l-5.676-2.832c7.379-3.399 6.812-10.192 7.379-16.422-3.973 2.266-8.516 5.664-13.055 3.965-1.137-.567-1.703-1.133-1.703-2.266 6.812-2.832 11.351-13.023-5.11-22.082-10.218-5.664-36.328-18.121-18.73-31.71 2.27-1.7 5.11-3.4 7.379-5.661 2.836 2.262-1.137 7.36-1.703 9.059 0 0 5.676.566 7.379.566 9.082 0 18.164-5.098 13.62-15.29 3.407.567 3.977 3.966 5.11 7.364 2.274-1.699 6.246-5.097 9.082-4.531-2.27 7.926-13.054 15.289-21 16.422 7.946 4.527 23.274 7.926 31.219-1.7 5.676 10.758-2.27 15.29-9.648 20.95 28.949 13.023 24.972 28.312 44.273 40.203-2.27 1.133-13.625-1.133-14.758-1.133 3.973 5.664 6.242 7.93 7.38 10.195 1.136 2.262 1.702 5.094 2.835 11.325 1.137 4.527 2.84 9.625 8.516 12.457-3.973 3.96-9.082 1.133-11.352.566m-139.07 32.274l3.976-3.395-.57-1.133c-.566-1.133 0-1.133 0-1.133l2.27-1.699c.57-.566 1.136-.566 1.703 0l6.812 1.7h-6.812c-1.703 0-2.27.566-2.836 1.699l-.567 1.132-1.703 3.395c-.57 1.133-1.137 2.832.567 5.098l1.136 1.699-2.84 5.094h2.27l1.703-3.395s2.84-2.266 3.406-5.098c-.566-.566-1.136-1.132-1.136-1.699l.57-1.699c0-.566.566-.566 1.133-.566l6.812 1.699c1.137 0 2.27.566 2.84-.567 1.133-1.699 1.133-1.132 3.406-1.132l3.403.566c5.11.566 9.652-.566 11.355-2.266.567 1.7 1.703 2.832 2.836 3.965 0 .567 0 1.133-.566 1.7l-3.973 9.624h6.242l3.406-8.492c.567-.566.567-1.699 1.137-1.699l-.57 8.492h5.676l1.703-10.191c.57-2.266 0-2.832-1.133-3.965-2.27-2.262-2.27-6.227-3.406-9.059.566 0 1.136-.566 1.703-.566 1.133 0 2.27 3.398 3.973 5.664 2.84 4.527 7.378 9.059 11.921 2.266-.57-.567-1.136-1.7-1.703-2.266l-1.136-1.7c-.567-1.132-4.54-5.097-6.243-6.796-3.406-3.395-9.082-2.828-10.785-1.129-5.11-2.266-9.652 0-11.355 0l-8.512-.566c-.57 0-1.137 0-1.137-.567l1.703-.566c-1.703-6.23-5.109-10.762-11.351-11.89 0 0-.57-1.7-1.137-2.266l-1.703 2.265c-.566 0-1.133 0-1.703.563l-7.945-2.828 6.242 6.226s-3.406 4.531-3.973 5.098c-.566.566-.566 1.699 0 2.265l1.137 1.7c.566.566 1.133.566 2.27 0l1.136-.567c.567-.566 2.27.567 3.406-.566-.57 1.699-.57 3.394-1.136 4.527l-5.676-.566c-1.137 0-1.703 0-2.27.566l-4.543 3.399c-1.703 1.132-2.27 3.398-1.136 5.097zm45.41 1.132l-3.973 9.063h-2.27l3.973-9.063c.567-1.132-.566-1.699-1.136-2.832 1.136.567 2.273 1.133 3.976 1.7-.57.566-.57 1.132-.57 1.132m-35.758-19.816l-1.137.566c-.566.567-1.136.567-1.703 0l-.566-.566s-.57-1.133 0-1.7l4.539-5.097-3.973-3.398 5.11 1.699 1.703-2.262c.566.563.566 1.695.566 1.695 2.27 0 8.516 2.833 8.516 10.762 0 0 1.703 2.262 3.406 2.262l9.082.566c1.703 0 5.11-2.828 10.215 0 1.137-.566 2.84-1.132 3.976-1.695 4.54-.566 7.38 2.828 9.649 5.66 1.703 2.266 3.973 5.664 3.973 5.664-1.137 1.133-2.27 1.7-2.84 1.133-1.133-.566-1.7-1.7-2.27-2.832-.566-2.266-3.406-3.965-3.406-3.965l1.703 5.098c-3.406-3.399-4.539-7.93-6.809-8.496-1.136 0-2.273 0-3.406 1.699 1.133 2.832 1.133 6.23 2.27 8.496 1.136 1.695 1.136 1.695 1.703 2.262 1.133.566.566 2.265.566 3.398l-1.133 8.496h-2.273l1.703-8.496c.57-2.832-6.812-2.832-10.215-7.36-3.406 3.395-11.922 2.829-15.894 2.266-1.703 0-2.84 0-3.973 1.13-.57.566-1.137.566-1.703.566l-6.813-1.696c-1.136 0-1.703 0-2.269 1.13l-1.137 2.831c-.566.567-.566 1.133 0 1.7l.567.566c-.567 1.133-1.703 2.266-1.703 2.266l-1.7-1.7c-.57-1.132-.57-2.265 0-3.398l2.27-4.527c0-.567.566-1.133 1.703-1.133h8.512l-2.836-4.531c-1.703-3.399 1.133-9.059.566-11.325.567 3.399-3.972 2.266-4.539 2.266m-9.082 10.758l3.973-2.832c.566-.567 1.133-1.133 2.27-.567l5.675.567c.57 1.133 1.137 2.832 1.137 2.832l-6.246-1.133c-1.133 0-1.133 0-1.703.566l-2.836 2.266c-.567.566-.567 1.133 0 1.7l.566 1.132-2.836 1.129-.57-1.695c-1.133-1.133-1.133-2.832.57-3.965m17.594-109.852c2.273 1.7 6.246 3.399 6.246 3.399V59.14l-8.516-3.399c-.566.567-.566 1.7 2.27 2.832m6.246-2.832v-2.828l-10.219-3.398s1.137 1.132 3.406 2.832c2.84 1.695 6.813 3.394 6.813 3.394m0-6.226v-2.832l-10.785-3.965 4.539 3.398c2.273 2.266 6.246 3.399 6.246 3.399",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M154.96 85.188h10.786c-.566-1.7-2.27-3.399-5.11-3.399-3.402.566-5.105 2.266-5.675 3.398m-11.918-41.902l-10.785 3.965v2.266s3.972-1.7 6.242-3.399c2.84-1.133 4.543-2.832 4.543-2.832M141.34 56.31l-8.516 3.398v2.832s3.973-1.7 6.246-3.398c2.27-1.7 2.27-2.832 2.27-2.832m1.133-6.793l-9.649 3.398v2.828s3.973-1.699 6.246-3.394c2.27-1.7 3.403-2.832 3.403-2.832m-45.977 32.84c-3.406 0-5.11 1.699-5.11 3.398h10.786c-.567-1.7-2.27-3.399-5.676-3.399",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M150.422 36.492c0-6.23-10.219-11.89-22.137-11.89-11.355 0-22.14 5.66-22.14 11.89v1.7l4.543 26.046-21.57 12.457c-2.27 1.133-5.11 5.094-5.677 9.059h3.973c.566-3.965 3.406-7.926 9.082-7.36 5.11 0 7.95 3.395 10.785 7.36l.567 1.133 1.136 1.699H77.2c2.27 4.531 4.54 9.625 4.54 15.289v66.25c0 16.988 13.054 24.914 27.245 24.914 10.786 0 12.489-.566 18.73 5.664 6.247-6.23 7.38-5.664 18.735-5.664 14.188 0 27.246-7.926 27.246-24.914v-66.816c0-5.664 2.27-10.192 4.54-15.29h-31.786l1.133-1.699.57-1.132c2.836-4.532 5.676-7.36 10.786-7.36 5.675 0 8.511 3.961 9.082 7.36h3.972c-.57-3.965-3.406-7.36-5.676-9.06L145.88 63.673l4.543-26.047zm-39.168 2.832l15.894 5.66v25.48l-11.921-6.226zm3.973 53.227c2.273 2.828 5.68 5.094 9.652 5.66.566 1.7 1.133 3.398 2.836 4.531-.567 4.528 1.137 8.492 6.246 9.625.566 2.266 1.703 3.965 4.539 5.098l-3.973 4.527c-1.136 1.7-2.836 1.7-4.539 1.7l-15.328-1.7c.567-1.699-1.133-3.394-5.676-2.828l5.676-16.422-2.836-7.93-6.812 5.665-.567 17.554-2.84-1.699c-3.972-1.7-5.109 5.094-1.136 5.094h1.703c0 .566 0 1.699.57 1.699-.57.566-1.137 1.7 0 2.266-1.137.566-1.137 1.699-.57 2.265-.567 1.133-1.133 3.965 1.703 4.531 2.27.567 3.406-1.699 3.973-2.832l23.273 7.36c3.406 1.133 5.676.566 8.516-2.266l6.242-5.094c-.566 3.399.57 6.793 3.406 7.926 0 0-.566 3.399 0 4.531h-61.87V103.31c0-3.399-1.134-7.364-2.27-10.758zm24.976 14.719c-1.133 2.265-1.133 5.097.57 7.93l-1.136 1.132c-4.543-.566-6.246-7.363-6.246-7.363v1.699c-2.836-1.133-3.973-3.398-3.973-6.227 1.137.567 2.273 1.133 3.406 1.133l.567-1.699c-2.836-.566-5.106-2.266-5.676-4.531h-.567 1.704c1.703 0 3.406 0 5.109-.567 1.133 1.7 3.406 3.399 5.676 3.399-.567 1.133 0 2.832.566 5.094m6.813 17.554c-.567.567-.567 1.133-1.137 2.266l-2.27 1.7c.567-3.4-1.703-7.93-3.972-9.626l2.836-2.832.57.566c-1.703 2.832 0 7.36 3.973 7.926m-11.922-1.133l2.273-1.699c2.27 1.7 4.54 5.664 3.973 9.63l-2.27 2.26c-.57.567-1.136.567-1.136 1.134.566-3.961-1.137-9.059-2.84-11.325m-4.54 1.7c.567 0 1.704 0 2.27-.567 1.703 2.266 2.84 7.364 1.137 10.192-1.137 0-2.27 0-2.84-.567h-.566c1.136-2.262 1.136-6.226 0-9.058m-5.11-.567l2.84.567c.567 2.265 0 6.23-1.137 9.058l-3.406-1.129c1.703-2.265 2.27-6.23 1.703-8.496m-5.675-.566l3.406.566c.566 1.7-.567 5.664-1.703 7.93l-3.407-1.133c1.137-2.266 1.704-5.664 1.704-7.363m-14.192-1.133c-1.703.566-2.27-.566-2.27-1.7 3.407-1.132 4.54-.566 5.676 0 .567.567 1.704 2.266 2.84 2.833 0 1.133-.57 3.398-1.136 4.531-3.407-.566-3.407-3.398-2.27-5.664-.57-.566-1.703-.566-2.84 0m-2.27 6.23s1.137.567 2.27.567c0 .566-.566 1.133-1.703 1.133-.566 0-.566-1.133-.566-1.7m-2.84-9.062c-.567-.563-.567-1.695.57-1.695 1.133 0 2.27 1.132 3.406 1.695h-3.976m2.84 6.797c.566.566 2.836.566 2.836.566v.567c-.567.566-3.403 0-2.836-1.133m2.836-1.7c-1.7.567-2.836 0-2.836-1.132.566.566 2.836.566 2.836.566zm2.273-17.554l-2.84 10.195 1.137-16.988 4.539-3.965 2.273 5.098-5.68 16.422 1.704-10.762c-.567-.566-1.133-.566-1.133 0m.566 13.023h3.973c.57 0 0 1.133-.566 1.133-1.137 0-3.407-1.133-3.407-1.133m4.543 2.266l3.403.566c0 1.7 0 5.098-1.703 6.797l-3.403-1.133c1.133-1.699 1.703-3.964 1.703-6.23m56.192 46.434c0 7.925-3.973 14.156-9.649 17.554l2.27-4.531h-2.27l-2.836 5.66c-2.84 1.133-6.246 1.7-10.218 1.7-11.352 0-14.192.566-18.73 4.53-3.977-3.964-7.38-4.53-18.735-4.53-3.406 0-6.809-.567-10.215-1.7l2.836-5.66h-2.27l-2.27 5.094c-.57 0-1.136-.563-1.702-1.13l2.27-3.964h-2.27l-.567 2.832c-5.11-3.398-7.949-9.062-7.949-15.855v-25.48h82.305zm2.273-77.008c-1.137 3.394-2.273 6.793-2.273 10.758v38.504h-4.54c-2.269-1.7-3.972-8.493-3.972-8.493-1.137 2.262 0 7.36 1.133 8.493h-5.676c-1.703-1.7-2.836-9.06-2.836-9.06-1.703 1.696-.57 7.36.567 9.06h-3.973c0-2.833.566-5.665.566-5.665-2.27-.566-3.972-1.699-3.972-3.394 1.136 1.129 1.703 1.129 2.84 1.129l1.699-1.13c-5.676 0-5.676-5.663-1.133-8.495-4.543 0-7.379-2.266-5.676-6.793-2.84-1.7-3.973-6.797-1.703-9.063-1.703-1.695-1.703-5.093-1.137-7.359-2.27 0-4.539-1.133-6.242-2.266h-.57c2.84-1.132 5.11-2.832 6.812-5.097h30.086zm-16.46-18.121c-4.544.566-8.516 6.226-11.356 11.324l-.567.566h-3.406v.567c-.566 3.965-3.973 9.058-11.918 9.058-3.406 0-6.246-1.132-8.515-2.828-1.704-1.133-2.84-2.832-3.407-4.531 0-.566-.566-1.133-.566-1.7v-.566h-3.406l-.567-.566c-3.406-5.098-6.812-10.192-11.355-11.324l11.922-6.797 14.757 7.93 14.758-7.93zm-13.626-10.758l-11.918 6.226v-25.48l16.461-5.66zm-13.054-21.52l-17.598-6.793c1.703-3.398 8.516-6.797 17.598-6.797 9.082 0 15.894 2.833 17.597 6.797zm0 0",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M168.02 117.465v-1.7c-5.68 0-7.383-7.363-7.383-7.363-1.7 5.664 2.84 9.063 7.383 9.063m-7.383 11.89l-.567-1.699c-5.11 1.133-7.945-6.797-7.945-6.797-1.703 6.23 3.973 10.196 8.512 8.496m3.406-7.363c-6.242 1.133-8.512-6.226-8.512-6.226-.57 3.964 1.703 7.925 5.676 7.925-1.137 5.098 3.973 7.364 7.945 5.664l-.566-1.132c-3.973 1.132-6.813-2.266-4.543-6.23m-3.973-19.817v-1.7c-7.945-1.699-7.379-7.359-7.379-7.359-1.136 5.094 3.407 9.059 7.38 9.059m-51.087 86.066l2.84-5.66h-2.273l-2.836 5.66zm3.973 0l2.84-5.66h-1.703l-2.84 5.66zm17.598 0l2.836-5.66h-2.27l-2.836 5.66zm4.539 0l2.84-5.66h-2.27l-2.84 5.66zm-9.082 0l2.84-5.66h-1.704l-2.84 5.66zm31.222-5.66h-2.273l-2.836 5.66h2.27zm-39.734 5.66l2.836-5.66h-2.27l-2.84 5.66zm4.54 0l2.839-5.66h-2.27l-2.84 5.66zm-9.083-36.804c-.566 0-1.133 0-1.133.566s.567 1.133.567 1.133c.566 0 .566-.567.566-1.133.57-.566 0-.566 0-.566m15.895-130.801c9.082 0 15.894 2.832 19.867 6.226 0 0 1.136-6.793 5.11-13.023l-7.38.566-3.976-7.926-6.809 3.399-6.812-6.797-7.38 6.797-7.378-3.965-3.973 7.926-7.379-.567c3.973 6.23 5.106 13.024 5.106 13.024 4.543-2.828 11.922-5.66 21.004-5.66m-17.028-3.399l3.403-7.36 6.246 3.395 7.379-6.793 6.812 6.793 6.242-3.394 3.406 7.36 3.973-.567c-1.133 2.265-1.703 3.965-2.836 6.23-4.543-2.832-11.355-4.53-18.164-4.53-6.812 0-13.625 2.265-18.164 4.53-.57-2.265-1.703-3.965-2.84-6.23zm0 0",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M135.664 6.48c1.133 0 1.703-.566 2.27-1.699 0-1.133-1.137-3.965-1.137-3.965s-2.27 2.266-2.836 3.399c0 1.133 1.133 2.265 1.703 2.265m11.918 3.965c1.137.567 2.273 0 2.273-.566.567-1.133 0-3.965 0-3.965s-2.84 1.133-3.406 2.266c0 .566 0 1.699 1.133 2.265m-26.11-3.965c1.137 0 1.704-1.132 1.704-2.265 0-1.133-2.27-3.399-2.27-3.399s-1.703 2.832-1.136 3.965c-.567 1.133.566 1.7 1.703 1.7m-11.922 3.964c1.136-.566 1.136-1.699.57-2.832-.57-1.133-3.406-2.265-3.406-2.265s-.57 3.398 0 3.965c.566 1.699 1.703 1.699 2.836 1.132m140.773 64.551c2.27-1.133 4.54-3.398 5.11-5.664-6.246-1.133-23.274-7.926-36.899-2.266 5.11-5.093 9.653-5.66 10.219-12.457 2.27 1.7 5.676 2.266 7.945-1.132-1.703-3.961-5.105-.563-5.676-1.696-.566-1.699 4.543.567 5.676-5.097-3.972-1.133-5.105 1.699-6.242 1.132-.566-.566 2.836-2.265 0-6.796-4.543 2.265-2.27 5.097-2.84 5.664-1.133.566 0-2.832-5.105-2.832-.57 5.097 4.539 5.097 3.402 6.23-1.133 1.133-2.27-2.832-5.676-1.133 0 3.965 3.407 6.227 6.813 5.094-.567 7.93-7.946 6.23-13.055 15.289 11.352 5.664 16.461 15.856 23.274 22.652 2.27-1.699 6.242-9.062 6.242-9.062 7.379 5.664 12.488 0 12.488 0-1.703-2.266-1.703-4.527-5.676-7.926m-11.351 1.133c.566 1.7 2.27 7.926-1.137 12.457-3.973-8.496-9.649-15.29-14.758-18.688-1.137-.566.567-1.699 3.406-2.265 8.512-1.695 18.73 2.265 23.84 3.398-2.27 1.7-3.972 2.266-6.246 2.832 3.406 2.832 6.246 5.664 7.95 7.926-3.407 1.133-5.676-1.133-13.055-5.66M126.582 212.027h-5.11l-.566 1.7h.567s0-.567.566-.567h3.973c-1.133 2.262-4.54 5.094-4.54 6.227s1.137 1.133 1.704 1.133c1.133 0 1.133-.567 1.703-1.7.566-2.265 1.703-4.527 2.836-7.36zm3.406 3.395v-1.695h3.973v-1.7c-1.137 0-2.84.567-4.543.567l-.566 3.394c1.703 0 3.406.567 3.406 2.832 0 .567-.567 2.266-1.137 2.266h-.566c-.567-.566 0-.566 0-1.133 0-.566-.567-1.133-1.137-.566-.566 0-1.133.566-1.133 1.133 0 1.132 1.703 1.699 2.836 1.699 1.703 0 3.973-1.133 3.973-2.832-.567-3.399-3.403-3.965-5.106-3.965m9.082-3.395c-1.703 0-2.84 1.133-2.84 2.828 0 2.266 2.84 3.399 4.543 2.266 0 1.7 0 3.399-1.136 3.399-.567 0-.567-.567-.567-.567 0-.566-.57-1.133-1.136-.566-.567 0-.567.566-.567 1.133 0 1.132 1.703 1.132 2.27 1.132 2.27 0 3.406-2.265 3.406-3.964 0-3.395-1.703-5.66-3.973-5.66m1.133 4.527c-1.703 0-1.703-2.262-1.703-3.395 0-.566.57-.566.57-.566 1.133 0 1.703 3.394 1.703 3.96h-.57m-22.137-5.093s-1.136 1.7-3.406 3.394v.567s.567-.567 1.137-.567l-1.137 4.532h-1.133v.566l4.54.567v-.567h-.567s-.57 0-.57-.566zm0 0",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M166.883 205.23v-9.625c-7.38 3.399-16.461 6.227-28.383 7.36l-.566 3.398c1.136 0 2.27 0 3.972.567-4.539.566-10.215 1.132-13.054 1.132-3.407 0-9.082-.566-13.055-1.132 1.703 0 2.836 0 3.973-.567l-.567-3.398c-11.922-1.133-21.57-3.961-28.383-7.36v9.625l-10.218 3.965c7.378 3.965 15.894 6.793 25.543 9.625l-1.133 3.965c5.675 1.7 14.758 3.399 23.84 3.399 9.648 0 18.164-1.7 23.84-3.399l-1.137-3.965c9.652-2.265 18.164-5.66 25.547-9.625zm-81.172 4.532l6.812-2.832v-7.926c4.54 1.7 10.22 3.394 18.165 5.094l-3.973 12.457c-8.516-1.7-15.328-3.961-21.004-6.793m43.14 14.156c-7.378 0-14.757-1.133-21.003-2.832l3.976-13.024c2.836.567 9.082 1.7 17.028 1.7 7.945 0 14.757-.567 17.027-1.7l3.976 13.024c-6.246 1.7-13.625 2.832-21.003 2.832m22.136-7.363l-3.972-12.457c7.945-1.7 13.62-3.395 18.164-5.094v7.926l6.812 2.832c-5.676 2.832-13.054 5.093-21.004 6.793M13.055 82.922s3.972 7.363 6.246 9.062c6.808-6.796 11.918-16.988 23.27-22.652-5.106-8.492-12.485-7.36-13.055-15.289 3.406 1.133 6.812-1.129 6.812-5.094-3.406-1.699-5.11 1.7-5.676 1.133-.566-.566 3.973-1.133 3.407-6.23-4.543 0-3.973 3.398-5.11 2.832-1.137-.567 1.137-3.399-2.84-5.664-2.27 4.53 1.137 5.664 0 6.796-.566.567-1.703-2.832-6.242-1.132 1.137 5.664 6.242 3.398 5.676 5.097-.566 1.133-3.973-2.265-5.676 1.696 2.27 3.964 5.676 2.832 7.945 1.132.57 7.364 5.11 7.93 10.22 12.457-13.626-5.66-30.653 1.133-36.895 2.266 1.133 2.266 2.836 4.531 5.675 5.664C2.84 78.395 2.84 80.656 0 83.488c.566-.566 5.676 5.098 13.055-.566m-7.946-1.133c1.704-2.828 4.54-5.094 7.946-7.926-2.27-.566-3.973-1.133-6.242-2.832 5.109-1.133 14.757-5.094 23.84-3.398 2.835.566 4.538 1.699 3.406 2.265C29.516 72.73 23.839 80.09 19.3 88.586c-3.406-4.531-2.274-10.758-1.137-12.457-7.379 4.527-9.648 6.793-13.055 5.66m117.5-3.96v3.96c1.7-1.7 3.973-1.133 3.973-1.133v6.23s0 2.833-1.137 3.966h6.246c-1.136-1.133-1.136-3.965-1.136-3.965v-6.23s2.836-.567 3.972 1.132v-3.96zm0 0",
      fill: "#1d1d1b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Tron.js":
/*!**********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Tron.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Tron.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M109.121 254.273c-.96-.449-2.176-3.777-45.57-124.546C30.91 38.657 19.008 5.247 19.008 4.223c0-1.153.129-1.535.894-2.176.512-.445 1.344-.766 1.86-.766.511 0 40.511 9.535 88.894 21.184l87.938 21.183 18.812 13.184c10.371 7.23 19.008 13.504 19.203 13.887.512.96.446 4.097-.129 5.12-1.664 2.946-122.945 177.985-123.52 178.24-1.28.577-2.882.706-3.839.257zm.32-15.105c.512-3.84 11.903-112.063 11.903-112.895 0-.77-8.961-11.648-47.168-57.41-25.918-31.039-47.36-56.449-47.551-56.449-.258 0-.387.195-.387.516 0 .316 64.899 180.222 81.153 224.957.578 1.601 1.218 2.816 1.472 2.816.258 0 .512-.574.64-1.535zm60.606-80.961a47923.29 47923.29 0 0054.656-79.809c.129-.253.067-.574-.129-.703-.125-.129-22.527 11.266-49.726 25.344l-49.473 25.602-5.246 52.863c-2.883 29.055-5.375 53.633-5.442 54.594-.19 1.535-.128 1.726.32 1.597.321-.062 24.259-34.625 55.04-79.488zm-11.328-73.344c17.601-18.879 31.937-34.304 31.875-34.367-.258-.258-156.867-38.527-156.992-38.398-.067.062 10.75 13.246 24 29.246 13.308 16 33.789 40.578 45.503 54.718l21.31 25.602 1.218-1.215c.64-.707 15.55-16.64 33.086-35.52zm22.722 9.41c34.301-17.859 42.621-22.335 42.301-22.656-.894-.832-27.07-19.137-27.453-19.137-.703-.066-62.082 65.215-61.824 65.727.129.387.574.32 2.238-.64 1.09-.637 21.25-11.133 44.738-23.36zm0 0",
      fill: "navy"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardRUB.js":
/*!***********************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardRUB.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardRUB.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M113.637 87.8H96.113l11.02-67.566h17.523zm-32.34-67.566l-16.8 46.43-1.99-9.937-5.96-30.352s-.723-6.14-8.309-6.14H20.594l-.36 1.081s8.493 1.809 18.426 7.77L54.02 87.8h18.246l28.004-67.567zm138.39 67.567h16.079l-14.09-67.567h-14.094c-6.504 0-8.129 5.059-8.129 5.059l-26.195 62.508h18.246l3.613-10.117h22.403zm-19.332-24.028l9.215-25.293 5.239 25.293zm-25.835-27.28l2.53-14.454s-7.769-2.89-15.898-2.89c-8.672 0-29.449 3.796-29.449 22.402 0 17.527 24.39 17.707 24.39 26.922 0 9.21-21.859 7.586-29.085 1.804l-2.531 15.176s7.77 3.793 19.875 3.793c11.921 0 30.168-6.14 30.168-23.125 0-17.523-24.57-19.148-24.57-26.918 0-7.95 17.163-6.863 24.57-2.71zm0 0",
      fill: "#4c70b4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M62.508 56.727l-5.961-30.352s-.723-6.14-8.309-6.14H20.594l-.36 1.081s13.368 2.711 26.016 13.192c12.285 9.754 16.258 22.219 16.258 22.219zm0 0",
      fill: "#e69e4d"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M237.754 179.762c0 36.312-29.45 65.578-65.582 65.578-36.313 0-65.582-29.445-65.582-65.578 0-36.317 29.45-65.582 65.582-65.582 36.133 0 65.582 29.265 65.582 65.582zm0 0",
      fill: "#e49944"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M83.648 114.18c-35.953.18-65.222 29.629-65.222 65.582 0 36.312 29.449 65.578 65.582 65.578 16.984 0 32.52-6.504 44.082-17.16 2.347-2.168 4.7-4.52 6.683-7.047h-13.367c-1.808-2.168-3.433-4.516-4.879-6.684h23.125a43.633 43.633 0 003.793-7.047h-30.71c-1.087-2.168-1.989-4.515-2.712-6.867h36.313c2.168-6.504 3.434-13.547 3.434-20.773 0-4.88-.543-9.578-1.446-14.094h-40.289c.543-2.348 1.086-4.695 1.809-6.863h36.312c-.722-2.352-1.804-4.7-2.89-7.047h-30.711c1.082-2.348 2.347-4.7 3.793-6.867h23.125c-1.625-2.528-3.254-4.875-5.059-7.043h-13.008c1.989-2.352 4.156-4.52 6.504-6.688C116.168 120.504 100.81 114 83.648 114c.18.18 0 .18 0 .18zm0 0",
      fill: "#bf4e45"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M231.07 214.086c.36 0 .723.18 1.082.363.364.18.543.36.723.723.18.36.363.723.363 1.082 0 .363-.183.723-.363 1.086-.18.36-.36.539-.723.722-.359.18-.722.36-1.082.36-.363 0-.722-.18-1.086-.36-.359-.183-.543-.363-.722-.722-.18-.363-.36-.723-.36-1.086 0-.36.18-.723.36-1.082.18-.363.543-.543.722-.723.364-.183.723-.363 1.086-.363m0 .363c-.363 0-.543 0-.906.18-.36.18-.539.36-.723.723-.18.359-.18.543-.18.902 0 .363 0 .543.18.902.184.364.364.543.723.723.363.184.543.184.906.184.36 0 .54 0 .903-.184.359-.18.543-.36.722-.723.18-.36.18-.539.18-.902 0-.36 0-.543-.18-.902-.18-.364-.363-.543-.722-.723-.364-.18-.543-.18-.903-.18m-.906 2.89v-2.35h1.266c.18 0 .18.183.363.183 0 .18.18.18.18.36 0 .179 0 .363-.18.363-.184.18-.363.18-.543.18 0 0 .18 0 .18.179.18 0 .18.18.363.543l.36.36h-.36l-.184-.36c-.18-.363-.359-.543-.359-.543h-.543v.902l-.543.184m.363-1.266h.36c.183 0 .363 0 .363-.18l.18-.183v-.18l-.18-.18h-.723v.723",
      fill: "#ecb153"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M105.79 198.54l.901-5.962c-.539 0-1.261.18-1.804.18-2.348 0-2.711-1.266-2.532-2.168l2.352-11.926h3.613l.723-6.684h-3.434l.723-4.156h-7.227c-.18.184-4.156 22.946-4.156 25.836 0 4.156 2.348 5.961 5.602 5.961 2.527-.18 4.515-.723 5.238-1.082zm0 0M107.957 187.336c0 9.937 6.504 12.285 12.106 12.285 5.058 0 7.769-1.262 7.769-1.262l1.262-6.687s-4.336 1.808-7.766 1.808c-7.59 0-6.144-5.601-6.144-5.601h14.453s.902-4.516.902-6.324c0-4.516-2.527-10.297-10.117-10.297-7.227 0-12.465 7.406-12.465 16.078zm12.285-9.934c3.977 0 3.254 4.516 3.254 4.875h-7.77c0-.539.723-4.875 4.516-4.875zm0 0M164.504 198.54l1.266-7.59s-3.434 1.808-5.782 1.808c-4.879 0-6.863-3.793-6.863-7.77 0-8.308 4.332-12.828 9.031-12.828 3.614 0 6.504 1.988 6.504 1.988l1.082-7.406s-3.43-2.347-7.043-2.531c-10.84 0-17.164 7.59-17.164 20.777 0 8.672 4.7 14.633 13.008 14.633 2.168 0 5.96-1.082 5.96-1.082zm0 0M67.309 171.258c-4.88 0-8.493 1.625-8.493 1.625l-.902 5.965s3.07-1.266 7.586-1.266c2.531 0 4.52.36 4.52 2.348 0 1.265-.184 1.808-.184 1.808s-1.984-.183-3.07-.183c-6.864 0-12.465 2.53-12.465 10.3 0 6.141 4.156 7.586 6.683 7.586 4.88 0 6.868-3.07 7.047-3.07v2.527h6.14l2.712-19.328c0-7.949-7.047-8.312-9.574-8.312zm1.082 15.719c.183 1.265-.36 6.683-4.516 6.683-2.168 0-2.71-1.625-2.71-2.71 0-1.985 1.085-4.153 6.144-4.153 1.265 0 .902 0 1.082.18zm0 0M83.566 199.262c1.63 0 10.66.36 10.66-8.852 0-8.672-8.308-7.047-8.308-10.48 0-1.805 1.445-2.348 3.793-2.348.902 0 4.695.36 4.695.36l.906-6.141s-2.53-.543-6.503-.543c-5.243 0-10.48 1.988-10.48 9.215 0 7.949 8.671 7.226 8.671 10.476 0 2.168-2.527 2.352-4.336 2.352-3.25 0-6.14-1.086-6.14-1.086l-.907 6.144c.184.18 1.988.903 7.95.903zm0 0M222.137 165.656l-1.266 9.395s-2.71-3.613-6.684-3.613c-7.769 0-11.742 7.769-11.742 16.62 0 5.782 2.89 11.383 8.672 11.383 4.153 0 6.504-2.89 6.504-2.89l-.363 2.531h6.867l5.418-33.242zm-3.07 18.25c0 3.614-1.81 8.672-5.602 8.672-2.531 0-3.613-2.168-3.613-5.422 0-5.418 2.347-9.031 5.418-9.031 2.53 0 3.796 1.805 3.796 5.781zm0 0M29.55 198.898l4.337-25.109.539 25.11h4.879l9.035-25.11-3.977 25.11h7.227l5.422-33.243H45.629l-6.867 20.418-.18-20.234H28.105l-5.601 33.242h7.047zm0 0",
      fill: "#33365b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M137.227 199.082c1.984-11.562 2.707-20.777 8.671-18.789.903-4.52 2.891-8.313 3.793-10.3 0 0-.363-.36-2.168-.36-3.07 0-7.226 6.324-7.226 6.324l.543-3.977h-6.504L130 199.082zm0 0M179.137 171.258c-4.875 0-8.489 1.625-8.489 1.625l-1.085 5.965s3.07-1.266 7.59-1.266c2.527 0 4.515.36 4.515 2.348 0 1.265-.18 1.808-.18 1.808s-1.988-.183-3.074-.183c-6.863 0-12.465 2.53-12.465 10.3 0 6.141 4.156 7.586 6.684 7.586 4.879 0 6.867-3.07 7.047-3.07v2.527h6.144l2.707-19.328c.184-7.949-6.863-8.312-9.394-8.312zm1.086 15.719c.18 1.265-.364 6.683-4.516 6.683-2.168 0-2.71-1.625-2.71-2.71 0-1.985 1.081-4.153 6.14-4.153 1.086 0 .906 0 1.086.18zm0 0M195.758 199.082c1.086-8.492 3.254-20.418 8.672-18.789.906-4.52 0-4.52-1.805-4.52-3.07 0-3.793.184-3.793.184l.54-3.977h-6.505l-4.336 27.102zm0 0",
      fill: "#33365b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M107.676 196.563l.902-5.961c-.543 0-1.266.18-1.805.18-2.351 0-2.71-1.266-2.53-2.169l1.987-12.105h3.614l.902-6.504h-3.433l.722-4.156h-7.043c-.183.183-4.156 22.945-4.156 25.836 0 4.156 2.348 5.96 5.602 5.96 2.527-.18 4.515-.902 5.238-1.082zm0 0M109.844 185.18c0 9.937 6.504 12.285 12.105 12.285 5.059 0 7.406-1.082 7.406-1.082l1.266-6.688s-3.976 1.809-7.41 1.809c-7.586 0-6.14-5.602-6.14-5.602h14.273s.902-4.515.902-6.324c0-4.516-2.348-10.297-9.937-10.297-7.227-.18-12.465 7.406-12.465 15.899zm12.285-9.938c3.973 0 3.25 4.52 3.25 4.88h-7.766c0-.544.723-4.88 4.516-4.88zm0 0M166.39 196.563l1.266-7.59s-3.433 1.808-5.781 1.808c-4.879 0-6.867-3.793-6.867-7.77 0-8.308 4.336-12.827 9.035-12.827 3.613 0 6.504 1.988 6.504 1.988l1.082-7.406s-4.152-1.625-7.95-1.625c-8.128 0-15.898 7.043-15.898 20.05 0 8.672 4.156 14.454 12.649 14.454 2.168-.18 5.96-1.083 5.96-1.083zm0 0M69.195 169.102c-4.879 0-8.492 1.625-8.492 1.625l-1.086 5.96s3.074-1.261 7.59-1.261c2.527 0 4.516.36 4.516 2.347 0 1.266-.18 1.805-.18 1.805s-1.988-.18-3.07-.18c-5.965 0-12.47 2.532-12.47 10.297 0 6.145 4.157 7.59 6.688 7.59 4.875 0 7.043-3.254 7.227-3.254l-.184 2.711h6.145l2.71-19.332c.18-7.95-6.866-8.308-9.394-8.308zm1.446 15.718c.18 1.262-.723 6.684-4.88 6.684-2.167 0-2.71-1.625-2.71-2.711 0-1.988 1.086-4.156 6.144-4.156 1.082 0 1.262.183 1.446.183zm0 0M85.273 197.285c1.625 0 10.66.36 10.66-8.851 0-8.672-8.312-7.047-8.312-10.48 0-1.806 1.445-2.349 3.793-2.349.906 0 4.7.36 4.7.36l.902-6.14s-2.528-.544-6.504-.544c-5.239 0-10.477 1.989-10.477 9.215 0 7.95 8.672 7.227 8.672 10.477 0 2.168-2.531 2.351-4.336 2.351-3.254 0-6.144-1.086-6.144-1.086l-.903 6.145c.36 0 2.168.902 7.95.902zm0 0M224.203 163.68l-1.445 9.394s-2.711-3.613-6.684-3.613c-6.324 0-11.742 7.77-11.742 16.621 0 5.781 2.89 11.383 8.672 11.383 4.152 0 6.504-2.89 6.504-2.89l-.363 2.53h6.867l5.418-33.242zm-3.25 18.25c0 3.613-1.808 8.672-5.601 8.672-2.532 0-3.614-2.168-3.614-5.422 0-5.418 2.348-9.032 5.418-9.032 2.531 0 3.797 1.625 3.797 5.782zm0 0M31.254 196.922l4.336-25.11.543 25.11h4.879l9.031-25.11-3.973 25.11h7.227l5.418-33.242h-11.02l-6.867 20.418-.36-20.418H30.353l-5.782 33.242zm0 0M138.93 196.922c1.988-11.563 2.347-20.957 7.226-19.149.903-4.515 1.625-6.144 2.531-8.128 0 0-.363-.184-1.265-.184-3.07 0-5.422 4.336-5.422 4.336l.723-3.973h-6.504l-4.336 27.098zm0 0M182.48 169.102c-4.878 0-8.492 1.625-8.492 1.625l-1.082 5.96s3.07-1.261 7.586-1.261c2.531 0 4.52.36 4.52 2.347 0 1.266-.184 1.805-.184 1.805s-1.984-.18-3.07-.18c-5.961 0-12.465 2.532-12.465 10.297 0 6.145 4.156 7.59 6.684 7.59 4.878 0 7.046-3.254 7.226-3.254l-.18 2.711h6.141l2.711-19.332c.18-7.95-6.863-8.308-9.395-8.308zm1.446 15.718c.18 1.262-.723 6.684-4.88 6.684-2.167 0-2.706-1.625-2.706-2.711 0-1.988 1.082-4.156 6.14-4.156 1.086 0 1.266.183 1.446.183zm0 0M197.621 196.922c1.988-11.563 2.348-20.957 7.227-19.149.902-4.515 1.625-6.144 2.527-8.128 0 0-.36-.184-1.262-.184-3.074 0-5.422 4.336-5.422 4.336l.543-3.973h-6.504l-4.335 27.098zm0 0M231.07 192.77c.36 0 .723.18 1.082.359.364.18.543.363.723.723.18.363.363.722.363 1.085 0 .36-.183.723-.363 1.083-.18.363-.36.542-.723.722-.359.18-.722.363-1.082.363-.363 0-.722-.183-1.086-.363-.359-.18-.543-.36-.722-.722-.18-.36-.36-.723-.36-1.083 0-.363.18-.722.36-1.085.18-.36.543-.543.722-.723.364-.36.723-.36 1.086-.36m0 .36c-.363 0-.543 0-.906.18-.36.183-.539.363-.723.722-.18.364-.18.543-.18.906 0 .36 0 .54.18.903.184.36.364.543.723.722.363.18.543.18.906.18.36 0 .54 0 .903-.18.359-.18.543-.363.722-.722.18-.363.18-.543.18-.903 0-.363 0-.542-.18-.906-.18-.36-.363-.539-.722-.722-.364-.18-.543-.18-.903-.18m-.906 2.89v-2.347h1.266c.18 0 .18.18.363.18 0 .18.18.18.18.363 0 .18 0 .36-.18.36-.184.179-.363.179-.543.179 0 0 .18 0 .18.184.18.18.18.18.363.539l.36.363h-.36l-.184-.363c-.18-.36-.359-.54-.359-.54h-.543v.903l-.543.18m.363-1.266h.36c.183 0 .363 0 .363-.18l.18-.18v-.18l-.18-.183h-.723v.723",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardUAH.js":
/*!***********************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardUAH.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/VisaMasterCardUAH.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M113.637 87.8H96.113l11.02-67.566h17.523zm-32.34-67.566l-16.8 46.43-1.99-9.937-5.96-30.352s-.723-6.14-8.309-6.14H20.594l-.36 1.081s8.493 1.809 18.426 7.77L54.02 87.8h18.246l28.004-67.567zm138.39 67.567h16.079l-14.09-67.567h-14.094c-6.504 0-8.129 5.059-8.129 5.059l-26.195 62.508h18.246l3.613-10.117h22.403zm-19.332-24.028l9.215-25.293 5.239 25.293zm-25.835-27.28l2.53-14.454s-7.769-2.89-15.898-2.89c-8.672 0-29.449 3.796-29.449 22.402 0 17.527 24.39 17.707 24.39 26.922 0 9.21-21.859 7.586-29.085 1.804l-2.531 15.176s7.77 3.793 19.875 3.793c11.921 0 30.168-6.14 30.168-23.125 0-17.523-24.57-19.148-24.57-26.918 0-7.95 17.163-6.863 24.57-2.71zm0 0",
      fill: "#4c70b4"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M62.508 56.727l-5.961-30.352s-.723-6.14-8.309-6.14H20.594l-.36 1.081s13.368 2.711 26.016 13.192c12.285 9.754 16.258 22.219 16.258 22.219zm0 0",
      fill: "#e69e4d"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M237.754 179.762c0 36.312-29.45 65.578-65.582 65.578-36.313 0-65.582-29.445-65.582-65.578 0-36.317 29.45-65.582 65.582-65.582 36.133 0 65.582 29.265 65.582 65.582zm0 0",
      fill: "#e49944"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M83.648 114.18c-35.953.18-65.222 29.629-65.222 65.582 0 36.312 29.449 65.578 65.582 65.578 16.984 0 32.52-6.504 44.082-17.16 2.347-2.168 4.7-4.52 6.683-7.047h-13.367c-1.808-2.168-3.433-4.516-4.879-6.684h23.125a43.633 43.633 0 003.793-7.047h-30.71c-1.087-2.168-1.989-4.515-2.712-6.867h36.313c2.168-6.504 3.434-13.547 3.434-20.773 0-4.88-.543-9.578-1.446-14.094h-40.289c.543-2.348 1.086-4.695 1.809-6.863h36.312c-.722-2.352-1.804-4.7-2.89-7.047h-30.711c1.082-2.348 2.347-4.7 3.793-6.867h23.125c-1.625-2.528-3.254-4.875-5.059-7.043h-13.008c1.989-2.352 4.156-4.52 6.504-6.688C116.168 120.504 100.81 114 83.648 114c.18.18 0 .18 0 .18zm0 0",
      fill: "#bf4e45"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M231.07 214.086c.36 0 .723.18 1.082.363.364.18.543.36.723.723.18.36.363.723.363 1.082 0 .363-.183.723-.363 1.086-.18.36-.36.539-.723.722-.359.18-.722.36-1.082.36-.363 0-.722-.18-1.086-.36-.359-.183-.543-.363-.722-.722-.18-.363-.36-.723-.36-1.086 0-.36.18-.723.36-1.082.18-.363.543-.543.722-.723.364-.183.723-.363 1.086-.363m0 .363c-.363 0-.543 0-.906.18-.36.18-.539.36-.723.723-.18.359-.18.543-.18.902 0 .363 0 .543.18.902.184.364.364.543.723.723.363.184.543.184.906.184.36 0 .54 0 .903-.184.359-.18.543-.36.722-.723.18-.36.18-.539.18-.902 0-.36 0-.543-.18-.902-.18-.364-.363-.543-.722-.723-.364-.18-.543-.18-.903-.18m-.906 2.89v-2.35h1.266c.18 0 .18.183.363.183 0 .18.18.18.18.36 0 .179 0 .363-.18.363-.184.18-.363.18-.543.18 0 0 .18 0 .18.179.18 0 .18.18.363.543l.36.36h-.36l-.184-.36c-.18-.363-.359-.543-.359-.543h-.543v.902l-.543.184m.363-1.266h.36c.183 0 .363 0 .363-.18l.18-.183v-.18l-.18-.18h-.723v.723",
      fill: "#ecb153"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M105.79 198.54l.901-5.962c-.539 0-1.261.18-1.804.18-2.348 0-2.711-1.266-2.532-2.168l2.352-11.926h3.613l.723-6.684h-3.434l.723-4.156h-7.227c-.18.184-4.156 22.946-4.156 25.836 0 4.156 2.348 5.961 5.602 5.961 2.527-.18 4.515-.723 5.238-1.082zm0 0M107.957 187.336c0 9.937 6.504 12.285 12.106 12.285 5.058 0 7.769-1.262 7.769-1.262l1.262-6.687s-4.336 1.808-7.766 1.808c-7.59 0-6.144-5.601-6.144-5.601h14.453s.902-4.516.902-6.324c0-4.516-2.527-10.297-10.117-10.297-7.227 0-12.465 7.406-12.465 16.078zm12.285-9.934c3.977 0 3.254 4.516 3.254 4.875h-7.77c0-.539.723-4.875 4.516-4.875zm0 0M164.504 198.54l1.266-7.59s-3.434 1.808-5.782 1.808c-4.879 0-6.863-3.793-6.863-7.77 0-8.308 4.332-12.828 9.031-12.828 3.614 0 6.504 1.988 6.504 1.988l1.082-7.406s-3.43-2.347-7.043-2.531c-10.84 0-17.164 7.59-17.164 20.777 0 8.672 4.7 14.633 13.008 14.633 2.168 0 5.96-1.082 5.96-1.082zm0 0M67.309 171.258c-4.88 0-8.493 1.625-8.493 1.625l-.902 5.965s3.07-1.266 7.586-1.266c2.531 0 4.52.36 4.52 2.348 0 1.265-.184 1.808-.184 1.808s-1.984-.183-3.07-.183c-6.864 0-12.465 2.53-12.465 10.3 0 6.141 4.156 7.586 6.683 7.586 4.88 0 6.868-3.07 7.047-3.07v2.527h6.14l2.712-19.328c0-7.949-7.047-8.312-9.574-8.312zm1.082 15.719c.183 1.265-.36 6.683-4.516 6.683-2.168 0-2.71-1.625-2.71-2.71 0-1.985 1.085-4.153 6.144-4.153 1.265 0 .902 0 1.082.18zm0 0M83.566 199.262c1.63 0 10.66.36 10.66-8.852 0-8.672-8.308-7.047-8.308-10.48 0-1.805 1.445-2.348 3.793-2.348.902 0 4.695.36 4.695.36l.906-6.141s-2.53-.543-6.503-.543c-5.243 0-10.48 1.988-10.48 9.215 0 7.949 8.671 7.226 8.671 10.476 0 2.168-2.527 2.352-4.336 2.352-3.25 0-6.14-1.086-6.14-1.086l-.907 6.144c.184.18 1.988.903 7.95.903zm0 0M222.137 165.656l-1.266 9.395s-2.71-3.613-6.684-3.613c-7.769 0-11.742 7.769-11.742 16.62 0 5.782 2.89 11.383 8.672 11.383 4.153 0 6.504-2.89 6.504-2.89l-.363 2.531h6.867l5.418-33.242zm-3.07 18.25c0 3.614-1.81 8.672-5.602 8.672-2.531 0-3.613-2.168-3.613-5.422 0-5.418 2.347-9.031 5.418-9.031 2.53 0 3.796 1.805 3.796 5.781zm0 0M29.55 198.898l4.337-25.109.539 25.11h4.879l9.035-25.11-3.977 25.11h7.227l5.422-33.243H45.629l-6.867 20.418-.18-20.234H28.105l-5.601 33.242h7.047zm0 0",
      fill: "#33365b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M137.227 199.082c1.984-11.562 2.707-20.777 8.671-18.789.903-4.52 2.891-8.313 3.793-10.3 0 0-.363-.36-2.168-.36-3.07 0-7.226 6.324-7.226 6.324l.543-3.977h-6.504L130 199.082zm0 0M179.137 171.258c-4.875 0-8.489 1.625-8.489 1.625l-1.085 5.965s3.07-1.266 7.59-1.266c2.527 0 4.515.36 4.515 2.348 0 1.265-.18 1.808-.18 1.808s-1.988-.183-3.074-.183c-6.863 0-12.465 2.53-12.465 10.3 0 6.141 4.156 7.586 6.684 7.586 4.879 0 6.867-3.07 7.047-3.07v2.527h6.144l2.707-19.328c.184-7.949-6.863-8.312-9.394-8.312zm1.086 15.719c.18 1.265-.364 6.683-4.516 6.683-2.168 0-2.71-1.625-2.71-2.71 0-1.985 1.081-4.153 6.14-4.153 1.086 0 .906 0 1.086.18zm0 0M195.758 199.082c1.086-8.492 3.254-20.418 8.672-18.789.906-4.52 0-4.52-1.805-4.52-3.07 0-3.793.184-3.793.184l.54-3.977h-6.505l-4.336 27.102zm0 0",
      fill: "#33365b"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M107.676 196.563l.902-5.961c-.543 0-1.266.18-1.805.18-2.351 0-2.71-1.266-2.53-2.169l1.987-12.105h3.614l.902-6.504h-3.433l.722-4.156h-7.043c-.183.183-4.156 22.945-4.156 25.836 0 4.156 2.348 5.96 5.602 5.96 2.527-.18 4.515-.902 5.238-1.082zm0 0M109.844 185.18c0 9.937 6.504 12.285 12.105 12.285 5.059 0 7.406-1.082 7.406-1.082l1.266-6.688s-3.976 1.809-7.41 1.809c-7.586 0-6.14-5.602-6.14-5.602h14.273s.902-4.515.902-6.324c0-4.516-2.348-10.297-9.937-10.297-7.227-.18-12.465 7.406-12.465 15.899zm12.285-9.938c3.973 0 3.25 4.52 3.25 4.88h-7.766c0-.544.723-4.88 4.516-4.88zm0 0M166.39 196.563l1.266-7.59s-3.433 1.808-5.781 1.808c-4.879 0-6.867-3.793-6.867-7.77 0-8.308 4.336-12.827 9.035-12.827 3.613 0 6.504 1.988 6.504 1.988l1.082-7.406s-4.152-1.625-7.95-1.625c-8.128 0-15.898 7.043-15.898 20.05 0 8.672 4.156 14.454 12.649 14.454 2.168-.18 5.96-1.083 5.96-1.083zm0 0M69.195 169.102c-4.879 0-8.492 1.625-8.492 1.625l-1.086 5.96s3.074-1.261 7.59-1.261c2.527 0 4.516.36 4.516 2.347 0 1.266-.18 1.805-.18 1.805s-1.988-.18-3.07-.18c-5.965 0-12.47 2.532-12.47 10.297 0 6.145 4.157 7.59 6.688 7.59 4.875 0 7.043-3.254 7.227-3.254l-.184 2.711h6.145l2.71-19.332c.18-7.95-6.866-8.308-9.394-8.308zm1.446 15.718c.18 1.262-.723 6.684-4.88 6.684-2.167 0-2.71-1.625-2.71-2.711 0-1.988 1.086-4.156 6.144-4.156 1.082 0 1.262.183 1.446.183zm0 0M85.273 197.285c1.625 0 10.66.36 10.66-8.851 0-8.672-8.312-7.047-8.312-10.48 0-1.806 1.445-2.349 3.793-2.349.906 0 4.7.36 4.7.36l.902-6.14s-2.528-.544-6.504-.544c-5.239 0-10.477 1.989-10.477 9.215 0 7.95 8.672 7.227 8.672 10.477 0 2.168-2.531 2.351-4.336 2.351-3.254 0-6.144-1.086-6.144-1.086l-.903 6.145c.36 0 2.168.902 7.95.902zm0 0M224.203 163.68l-1.445 9.394s-2.711-3.613-6.684-3.613c-6.324 0-11.742 7.77-11.742 16.621 0 5.781 2.89 11.383 8.672 11.383 4.152 0 6.504-2.89 6.504-2.89l-.363 2.53h6.867l5.418-33.242zm-3.25 18.25c0 3.613-1.808 8.672-5.601 8.672-2.532 0-3.614-2.168-3.614-5.422 0-5.418 2.348-9.032 5.418-9.032 2.531 0 3.797 1.625 3.797 5.782zm0 0M31.254 196.922l4.336-25.11.543 25.11h4.879l9.031-25.11-3.973 25.11h7.227l5.418-33.242h-11.02l-6.867 20.418-.36-20.418H30.353l-5.782 33.242zm0 0M138.93 196.922c1.988-11.563 2.347-20.957 7.226-19.149.903-4.515 1.625-6.144 2.531-8.128 0 0-.363-.184-1.265-.184-3.07 0-5.422 4.336-5.422 4.336l.723-3.973h-6.504l-4.336 27.098zm0 0M182.48 169.102c-4.878 0-8.492 1.625-8.492 1.625l-1.082 5.96s3.07-1.261 7.586-1.261c2.531 0 4.52.36 4.52 2.347 0 1.266-.184 1.805-.184 1.805s-1.984-.18-3.07-.18c-5.961 0-12.465 2.532-12.465 10.297 0 6.145 4.156 7.59 6.684 7.59 4.878 0 7.046-3.254 7.226-3.254l-.18 2.711h6.141l2.711-19.332c.18-7.95-6.863-8.308-9.395-8.308zm1.446 15.718c.18 1.262-.723 6.684-4.88 6.684-2.167 0-2.706-1.625-2.706-2.711 0-1.988 1.082-4.156 6.14-4.156 1.086 0 1.266.183 1.446.183zm0 0M197.621 196.922c1.988-11.563 2.348-20.957 7.227-19.149.902-4.515 1.625-6.144 2.527-8.128 0 0-.36-.184-1.262-.184-3.074 0-5.422 4.336-5.422 4.336l.543-3.973h-6.504l-4.335 27.098zm0 0M231.07 192.77c.36 0 .723.18 1.082.359.364.18.543.363.723.723.18.363.363.722.363 1.085 0 .36-.183.723-.363 1.083-.18.363-.36.542-.723.722-.359.18-.722.363-1.082.363-.363 0-.722-.183-1.086-.363-.359-.18-.543-.36-.722-.722-.18-.36-.36-.723-.36-1.083 0-.363.18-.722.36-1.085.18-.36.543-.543.722-.723.364-.36.723-.36 1.086-.36m0 .36c-.363 0-.543 0-.906.18-.36.183-.539.363-.723.722-.18.364-.18.543-.18.906 0 .36 0 .54.18.903.184.36.364.543.723.722.363.18.543.18.906.18.36 0 .54 0 .903-.18.359-.18.543-.363.722-.722.18-.363.18-.543.18-.903 0-.363 0-.542-.18-.906-.18-.36-.363-.539-.722-.722-.364-.18-.543-.18-.903-.18m-.906 2.89v-2.347h1.266c.18 0 .18.18.363.18 0 .18.18.18.18.363 0 .18 0 .36-.18.36-.184.179-.363.179-.543.179 0 0 .18 0 .18.184.18.18.18.18.363.539l.36.363h-.36l-.184-.363c-.18-.36-.359-.54-.359-.54h-.543v.903l-.543.18m.363-1.266h.36c.183 0 .363 0 .363-.18l.18-.18v-.18l-.18-.183h-.723v.723",
      fill: "#fff"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Vtb.js":
/*!*********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Vtb.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Vtb.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M193.316 105.086H35.148s4.688 15.195 10.547 23.379H186.29s26.945 21.043 39.836 57.87H77.915c-25.778-21.042-44.524-49.1-54.481-80.667 1.171-4.09 2.93-7.598 4.097-11.691h165.785c12.891-8.766 25.778-23.38 25.778-23.38H39.25c2.344-4.093 4.688-7.6 7.613-11.69H228.47c4.683-5.848 14.644-23.384 14.644-23.384H66.781c4.102-4.09 8.79-8.183 13.477-11.691h168.125C253.07 12.727 256 .453 256 .453H73.227C38.078 25.003 11.715 61.828 0 104.5c11.715 42.086 38.078 78.914 73.227 104.047h182.187c.586 0-2.93-54.945-62.098-103.461zm0 0",
      fill: "#002d73"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Webmoneyrub.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Webmoneyrub.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Webmoneyrub.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    ...props,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M125.371.867c19.535 0 38.074 4.5 54.856 12.5 2.628 1.125 5.261 2.625 7.89 4l-11.398 10.13-17.281-17.755-29.56 25.88-17.41-18.505-54.355 48.13 34.817 37.878-13.524 11.75 34.317 37.875-13.528 11.754 49.098 53.875 29.055-26.375 25.3 28.25c-5.011 3.754-10.52 7.504-16.406 10.879-18.16 10.125-39.078 16-61.496 16C56.86 247.133.875 191.879.875 124 .5 56.371 56.485.867 125.371.867zM102.45 116.25l29.809-26.379 26.676 29.379-29.805 26.375zm21.168 50.879l29.559-26.629 26.926 29.379-29.809 26.375zM81.285 66.246l29.809-26.375 26.676 29.375-29.81 26.379zm54.48-14.125l22.169-19.75 20.039 21.875-22.168 20zm39.579 90.504l22.168-19.75L217.55 145l-22.168 19.754zm19.535 44.504l22.172-19.75 20.039 21.875-22.172 20zm9.144-101.633l14.778-13.125 13.402 14.625-14.902 13.129zm-19.164-43.5l14.782-13.375 13.402 14.75-14.781 13.125zM222.81 129l14.78-13.125 13.528 14.625-15.031 13.125zm-66.504-32.625l22.168-19.754L198.512 98.5l-22.168 19.75zm0 0",
      fill: "#036cb5"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/WhitebitUSD.js":
/*!*****************************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/WhitebitUSD.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/WhitebitUSD.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("g", {
      fill: "#c5b357",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M192.734 116.64l-1.742 3.4c-.215.425-.34.722-.426.976-.086.21-.086.425-.086.68 0 .593.215 1.1.637 1.527.426.468.977.68 1.617.68.637 0 1.145-.212 1.57-.637.423-.426.637-.977.637-1.57 0-.637-.214-1.192-.636-1.614-.34-.34-.723-.555-1.149-.637l1.063-2.039zm.551 5.012c0 .168-.043.34-.172.426-.21.211-.55.254-.761 0a.549.549 0 01-.172-.426c0-.172.043-.34.172-.425.082-.125.21-.168.382-.168.168 0 .297.043.38.168a.544.544 0 01.171.425zm7.77-31.379l-2.844 4.204-.043.085v1.442h2.758v1.316h1.699v-1.36h.555v-1.612h-.555v-4.075zm-.805 4.075l.676-1.016v1.016zm-36.223 55.414l2.336-4.715h-2.504v-1.656h4.672l-.043 1.02-2.972 6.116zm29.172 16.433a.804.804 0 00.211-.554c0-.211-.039-.422-.21-.551-.169-.211-.427-.254-.723-.13a.828.828 0 00-.297.259l-.086.125-1.356-.297.848-3.992h3.437v1.613h-2.12l-.13.555h.086c.637 0 1.188.21 1.614.68.425.421.636 1.019.636 1.695 0 .68-.254 1.277-.722 1.742a2.389 2.389 0 01-1.739.722 2.594 2.594 0 01-1.57-.507 2.398 2.398 0 01-.851-1.403l-.086-.297h1.742l.086.125a.756.756 0 00.297.34c.297.13.68.086.933-.125zm-.804-34.097c.421-.426.675-.977.675-1.57 0-.637-.21-1.192-.636-1.614-.34-.34-.72-.555-1.145-.637l1.063-2.039-1.489-.765-1.738 3.398c-.215.426-.383.723-.426.977-.086.21-.086.425-.086.68 0 .593.211 1.1.637 1.527.426.468.977.68 1.613.68.555 0 1.063-.212 1.532-.637zm-2.168-1.614c0-.172.043-.34.171-.425.082-.125.211-.168.38-.168.171 0 .3.043.382.168a.544.544 0 01.172.425c0 .168-.043.34-.172.426-.21.211-.55.254-.762 0a.549.549 0 01-.171-.426zm37.156 19.746v-1.316h.55v-1.617h-.55v-4.074h-1.617l-2.844 4.203-.043.086v1.441h2.762v1.317h1.742zm-2.38-2.933l.68-1.016v1.016zm-37.831-14.817a2.24 2.24 0 00.848-.808c.21-.34.296-.723.296-1.145 0-.382-.086-.722-.254-1.062a1.863 1.863 0 00-.511-.637c.129-.172.258-.34.34-.508a1.98 1.98 0 00.129-.722c0-.383-.086-.723-.297-1.02-.172-.34-.47-.594-.766-.766-.637-.34-1.57-.34-2.207 0a1.83 1.83 0 00-.766.723c-.168.297-.297.68-.297 1.02 0 .297.043.55.172.804.082.172.168.34.297.47-.215.21-.383.425-.511.636-.168.297-.254.68-.254 1.02 0 .425.086.804.297 1.187.214.34.468.594.851.808.34.168.805.254 1.316.254.551 0 .977-.086 1.317-.254zm-.977-4.46a.462.462 0 01-.64 0 .486.486 0 01-.125-.34c0-.125.043-.254.125-.336a.39.39 0 01.3-.13c.125 0 .254.044.34.13a.386.386 0 01.125.297c0 .168-.043.296-.125.379zm-.851 1.953c.172-.125.34-.211.55-.211.215 0 .383.086.555.21.125.13.211.301.211.47a.65.65 0 01-.168.468c-.258.254-.851.254-1.105 0a.677.677 0 01-.211-.469c-.043-.21 0-.34.168-.468zm16.644 37.879v-5.223h-1.527l1.02-1.656h2.207v6.836h-1.7zm-21.101-4.758c-.383.383-.555.808-.555 1.36 0 .382.086.722.258 1.019.168.297.379.507.68.68.55.296 1.273.34 1.867.085.254-.129.55-.34.89-.68l.172-.171 1.188 1.23-.172.172a5.341 5.341 0 01-1.399 1.02c-.468.168-.976.296-1.53.296-1.06 0-1.954-.34-2.59-1.02-.68-.679-1.02-1.526-1.02-2.589 0-.68.172-1.273.469-1.828a3.468 3.468 0 011.316-1.273c1.062-.594 2.336-.637 3.48-.125a4.52 4.52 0 011.36 1.02l.172.167-1.235 1.148-.168-.171c-.507-.551-1.105-.848-1.742-.848-.637-.043-1.101.125-1.441.508zm6.879 4.926c.636 0 1.144-.211 1.57-.637.426-.426.637-.977.637-1.57 0-.637-.211-1.192-.637-1.614-.34-.34-.723-.554-1.149-.637l1.063-2.039-1.484-.765-1.743 3.398c-.21.426-.34.723-.425.977-.082.21-.082.426-.082.68 0 .593.21 1.101.636 1.527.422.469.977.68 1.614.68zm-.555-2.25c0-.172.043-.34.172-.426.086-.125.21-.168.383-.168.168 0 .297.043.382.168a.554.554 0 01.168.426c0 .167-.043.34-.168.425-.214.211-.554.254-.765 0-.086-.129-.172-.257-.172-.425zm18.387 1.613l2.336-4.715h-2.504v-1.652h4.668l-.04 1.015-2.972 6.117zm-8.024-38.004c.211-.422.383-.723.422-.934.086-.21.086-.425.086-.68a2.08 2.08 0 00-.637-1.527c-.425-.468-.976-.68-1.613-.68-.594 0-1.144.212-1.57.637-.426.426-.68.977-.68 1.614 0 .636.211 1.187.637 1.613.34.34.722.55 1.144.637l-1.058 2.039 1.484.722zm-1.191-1.57a.554.554 0 01-.168.425c-.211.211-.55.211-.766 0a.554.554 0 01-.168-.425c0-.168.043-.34.168-.426a.527.527 0 01.383-.168c.129 0 .254.043.383.168a.559.559 0 01.168.426zm-8.153-5.73a.807.807 0 00.215-.556c0-.21-.043-.421-.215-.55-.167-.211-.421-.254-.722-.13a.828.828 0 00-.297.259l-.082.125-1.36-.297.848-3.993h3.442v1.614h-2.125l-.125.554h.082c.636 0 1.191.211 1.613.68.426.422.637 1.02.637 1.695a2.41 2.41 0 01-.72 1.743 2.404 2.404 0 01-1.741.722 2.572 2.572 0 01-1.57-.511 2.376 2.376 0 01-.852-1.399l-.082-.297h1.738l.086.125a.803.803 0 00.297.34c.34.129.723.086.933-.125zm37.239 15.964c0 .89.086 1.527.297 2.039.214.508.511.89.851 1.145.383.253.805.382 1.36.382.55 0 .976-.129 1.316-.382.34-.254.637-.637.848-1.145.21-.512.297-1.191.297-2.082 0-.848-.086-1.527-.297-2.04-.211-.507-.508-.89-.891-1.144-.383-.257-.852-.382-1.36-.382-.808 0-1.445.34-1.867.976-.382.508-.554 1.403-.554 2.633zm1.742 0c0-.594.043-1.02.129-1.316.082-.254.168-.47.297-.555a.6.6 0 01.383-.125c.125 0 .34.043.507.34.13.168.254.593.254 1.57 0 .766-.082 1.316-.297 1.613-.168.254-.34.297-.464.297-.13 0-.34-.043-.512-.34-.168-.125-.297-.55-.297-1.484zm-61.188-39.066l-1.738 3.398c-.215.426-.34.723-.426.977-.086.21-.086.425-.086.68 0 .593.211 1.1.637 1.527.426.468.977.68 1.613.68.637 0 1.149-.212 1.57-.637.427-.426.637-.977.637-1.57 0-.637-.21-1.192-.636-1.614-.34-.34-.719-.555-1.145-.637l1.063-2.039zm.555 5.011c0 .168-.043.34-.172.426-.21.211-.55.254-.765 0a.559.559 0 01-.168-.426c0-.172.043-.34.168-.425.086-.126.214-.168.382-.168.172 0 .297.043.383.168a.544.544 0 01.172.425zm0 18.09a.694.694 0 00.211-.469.553.553 0 00-.297-.507c-.215-.172-.512-.258-.933-.258h-.258v-1.528h.258c.34-.043.464-.086.55-.129.086-.039.168-.124.211-.167a.757.757 0 00.086-.211c0-.086-.043-.172-.086-.258-.043-.04-.125-.082-.297-.082-.125 0-.21.043-.296.082a.777.777 0 00-.211.297l-.043.172h-1.657l.043-.297c.086-.512.254-.934.594-1.274.426-.469.977-.68 1.656-.68.594 0 1.106.211 1.485.551.426.383.597.852.597 1.36 0 .34-.086.636-.257.933-.082.13-.211.254-.34.383.215.129.426.297.554.508.254.34.383.723.383 1.148 0 .637-.258 1.188-.722 1.614a2.58 2.58 0 01-1.786.68c-.68 0-1.23-.212-1.699-.637-.422-.426-.68-.977-.719-1.7v-.254h1.696l.043.211c.043.254.129.47.254.594.214.172.722.172.98-.082zm14.73-28.918c.13-.254.215-.469.215-.68a.549.549 0 00-.171-.425.618.618 0 00-.891.043c-.129.129-.211.34-.211.636v.258h-1.7v-.258c.044-.761.255-1.355.723-1.78.465-.427 1.02-.68 1.696-.68.426 0 .808.085 1.148.253.34.172.594.47.809.809.21.34.297.68.297 1.059 0 .425-.13.851-.34 1.316-.215.469-.637.977-1.235 1.613l-.296.301h1.91v1.613h-4.922v-.937l2.035-2.078c.512-.426.809-.809.934-1.063zm1.532 23.48l-1.742 3.4c-.211.425-.34.722-.426.976-.082.21-.082.425-.082.68 0 .593.21 1.1.637 1.527.421.468.976.68 1.613.68s1.144-.212 1.57-.637c.426-.426.637-.977.637-1.57 0-.637-.211-1.192-.637-1.614-.34-.34-.722-.555-1.148-.637l1.062-2.039zm.508 5.012c0 .168-.043.34-.168.426-.215.211-.555.254-.766 0a.545.545 0 01-.168-.426c0-.172.04-.34.168-.425.086-.125.211-.168.383-.168.168 0 .297.043.383.168a.554.554 0 01.168.425zm-2.461 30.274l-1.742 3.398c-.211.426-.34.723-.426.977-.082.21-.082.426-.082.68 0 .593.21 1.101.636 1.527.422.469.977.68 1.614.68.636 0 1.144-.211 1.57-.637.426-.426.637-.977.637-1.57 0-.637-.211-1.192-.637-1.614-.34-.34-.723-.554-1.148-.637l1.062-2.039zm.55 5.012c0 .167-.042.34-.167.425-.215.211-.555.254-.766 0a.549.549 0 01-.172-.425c0-.168.043-.34.172-.426.086-.125.21-.168.383-.168.168 0 .297.043.383.168.082.129.167.258.167.425zm-17.578-16.899c.211.508.508.89.848 1.145.383.254.809.382 1.36.382.55 0 .976-.129 1.359-.382.34-.254.637-.637.847-1.145.086-.215.172-.469.215-.766v.848h2.758v1.316h1.7v-1.316h.55v-1.613h-.55v-4.074h-1.614l-2.8 4.117V138c0-.848-.087-1.527-.302-2.04-.21-.507-.507-.89-.89-1.144-.383-.257-.848-.382-1.36-.382-.804 0-1.44.34-1.867.976-.383.594-.593 1.442-.593 2.676.042.805.167 1.484.34 1.953zm6.664-1.574l.68-1.016v1.016zm-5.222-.422c0-.594.043-1.02.129-1.316.086-.254.168-.47.297-.555.128-.082.21-.125.382-.125.13 0 .34.043.508.34.13.168.258.593.258 1.57 0 .766-.086 1.316-.297 1.613-.172.254-.34.297-.469.297-.129 0-.34-.043-.511-.34-.168-.125-.297-.55-.297-1.484zm15.586-12.57l-1.742 3.398c-.211.426-.34.723-.426.977-.082.21-.082.425-.082.68 0 .593.21 1.1.636 1.527.422.468.977.68 1.614.68.636 0 1.144-.212 1.57-.637.426-.426.637-.977.637-1.57 0-.637-.211-1.192-.637-1.614-.34-.34-.723-.555-1.148-.637l1.062-2.039zm.55 5.011c0 .168-.042.34-.167.426-.215.211-.555.254-.766 0a.549.549 0 01-.172-.426c0-.172.043-.34.172-.425.086-.125.21-.168.383-.168.168 0 .297.043.383.168a.664.664 0 01.167.425zm-5.433-15.328l1.738-3.441c.215-.422.383-.719.426-.934.086-.21.086-.426.086-.68 0-.593-.215-1.101-.637-1.527-.426-.469-.976-.68-1.613-.68s-1.149.211-1.574.637c-.422.426-.676.977-.676 1.57 0 .637.21 1.192.637 1.614.34.34.718.555 1.144.637l-1.062 2.039zm-.555-5.011c0-.168.043-.34.172-.426a.52.52 0 01.383-.168c.125 0 .254.043.383.168a.559.559 0 01.168.426.554.554 0 01-.168.425.542.542 0 01-.766 0 .57.57 0 01-.172-.425zm30.742 3.101a.681.681 0 00.215-.469.553.553 0 00-.297-.507c-.214-.172-.511-.258-.937-.258h-.254v-1.528h.254c.34-.043.469-.086.555-.129.085-.039.168-.125.21-.168.043-.085.086-.167.086-.21 0-.086-.043-.172-.085-.258-.043-.04-.125-.082-.297-.082a.392.392 0 00-.297.125c-.086.086-.172.172-.211.297l-.043.171h-1.656l.043-.296c.082-.512.253-.934.593-1.274.426-.469.977-.68 1.657-.68.593 0 1.101.168 1.484.551.426.383.594.848.594 1.36 0 .34-.082.636-.254.933a2.72 2.72 0 01-.34.383c.215.125.426.297.555.508.254.34.379.722.379 1.191 0 .637-.254 1.188-.72 1.614a2.598 2.598 0 01-1.784.68c-.68 0-1.23-.216-1.7-.638-.421-.425-.68-.976-.722-1.699v-.254h1.699l.043.211c.043.254.129.47.254.594.215.129.722.129.976-.168zm-37.62-9.172c0 .422.085.805.296 1.188.215.34.469.593.852.808.34.168.804.254 1.316.254.508 0 .977-.086 1.317-.254.34-.172.636-.468.847-.808.215-.34.297-.723.297-1.145 0-.383-.082-.722-.254-1.062a1.853 1.853 0 00-.508-.637c.125-.172.254-.34.34-.512.082-.21.125-.465.125-.719 0-.382-.082-.722-.254-1.019-.168-.34-.468-.598-.765-.766-.637-.34-1.57-.34-2.207 0-.34.168-.594.426-.766.723-.168.297-.297.68-.297 1.02 0 .296.043.55.172.804.086.172.168.34.297.469-.211.21-.383.422-.512.637-.254.297-.297.636-.297 1.02zm2.761-2.55a.458.458 0 01-.637 0 .47.47 0 01-.129-.337c0-.128.043-.257.13-.34a.382.382 0 01.296-.128c.13 0 .254.043.34.129a.376.376 0 01.129.297c0 .21-.043.296-.129.378zm-.297 1.785c.211 0 .383.086.55.21a.681.681 0 01.216.47c0 .167-.043.34-.172.468-.254.254-.848.254-1.106 0a.701.701 0 01-.21-.469c0-.172.085-.297.21-.425.086-.168.258-.254.512-.254zm-.043 4.5l-1.742 3.398c-.21.426-.34.723-.422.977-.086.21-.086.425-.086.68 0 .593.211 1.1.637 1.527.426.468.976.68 1.613.68s1.145-.212 1.57-.637c.426-.426.637-.977.637-1.57 0-.637-.21-1.192-.637-1.614-.34-.34-.722-.555-1.144-.637l1.059-2.039zm.508 5.011c0 .168-.04.34-.168.426-.21.211-.55.254-.766 0a.559.559 0 01-.168-.426c0-.172.043-.34.168-.425.086-.125.215-.168.383-.168.172 0 .297.043.383.168a.54.54 0 01.168.425zm4.887 24.457c.125-.254.21-.464.21-.68a.549.549 0 00-.171-.425.618.618 0 00-.89.043c-.13.129-.212.34-.212.637v.257h-1.699v-.257c.043-.762.254-1.356.723-1.782.464-.425 1.02-.68 1.699-.68.422 0 .805.087 1.144.255.34.171.594.468.809.808.21.34.297.68.297 1.059 0 .425-.129.851-.34 1.316-.215.469-.637.977-1.234 1.613l-.297.301h1.914v1.613h-4.926v-.933l2.035-2.082c.469-.426.766-.809.938-1.063zm-.426-38.3l-1.742 3.398c-.211.426-.383.723-.426.977-.082.21-.082.425-.082.68 0 .593.21 1.1.637 1.527.422.468.976.68 1.613.68s1.144-.212 1.57-.637c.426-.426.68-.977.68-1.57 0-.637-.211-1.192-.637-1.614-.34-.34-.722-.555-1.148-.637l1.062-2.039zm.508 5.011c0 .168-.043.34-.168.426-.215.211-.555.254-.766 0a.545.545 0 01-.168-.426c0-.172.04-.34.168-.425.086-.126.211-.168.383-.168.168 0 .297.043.383.168a.554.554 0 01.168.425zm-7.473 28.11l2.336-4.715h-2.504v-1.656h4.668l-.043 1.02-2.969 6.116zm4.629-11.805c0-.68.168-1.273.469-1.824a3.43 3.43 0 011.312-1.274c1.063-.597 2.336-.636 3.485-.129.507.254.976.594 1.359 1.02l.168.168-1.23 1.148-.172-.172c-.508-.55-1.102-.847-1.739-.847-.554 0-.976.168-1.359.55-.383.383-.55.81-.55 1.36 0 .383.081.723.253 1.02.168.296.383.507.68.68.55.296 1.273.296 1.867.085.254-.129.55-.34.89-.68l.172-.171 1.188 1.23-.168.172a5.352 5.352 0 01-1.402 1.02c-.47.167-.977.296-1.528.296-1.062 0-1.953-.34-2.59-1.02-.722-.679-1.105-1.57-1.105-2.632zm7.516 21.105h1.699v-1.316h.55v-1.617h-.55v-4.074h-1.613l-2.848 4.203-.04.086v1.441h2.759v1.277zm-.68-2.933l.68-1.016v1.016zm-11.082-15.242c.426.468.976.68 1.613.68s1.145-.212 1.57-.637c.426-.426.637-.977.637-1.57 0-.637-.21-1.192-.637-1.614-.34-.34-.722-.555-1.144-.637l1.059-2.039-1.485-.765-1.742 3.398c-.21.426-.34.723-.422.977-.086.21-.086.425-.086.68-.043.55.211 1.1.637 1.527zm1.062-1.57c0-.173.043-.34.168-.426.086-.125.215-.168.383-.168s.297.043.383.168a.554.554 0 01.168.425c0 .168-.043.34-.168.426-.215.211-.55.254-.766 0-.125-.086-.168-.258-.168-.426zm9.172 28.492c.34.167.805.253 1.317.253.507 0 .976-.085 1.316-.253.34-.172.637-.47.848-.81.21-.339.297-.722.297-1.144 0-.382-.086-.722-.254-1.062a1.863 1.863 0 00-.512-.637c.129-.172.258-.34.34-.512.086-.21.129-.464.129-.718 0-.383-.086-.723-.297-1.02-.172-.34-.469-.594-.766-.765-.636-.34-1.57-.34-2.207 0a1.83 1.83 0 00-.765.722c-.168.297-.297.68-.297 1.02 0 .297.043.55.172.804.082.172.168.34.296.47-.214.21-.382.425-.511.636-.168.297-.254.68-.254 1.02 0 .425.086.804.297 1.144.215.383.511.637.851.852zm1.614-4.5a.465.465 0 01-.637 0 .485.485 0 01-.13-.34c0-.13.044-.258.13-.34a.376.376 0 01.297-.13c.125 0 .254.044.34.13a.386.386 0 01.125.297c0 .21-.043.297-.125.383zm-.297 1.78c.21 0 .379.087.55.212.13.129.211.3.211.468 0 .168-.043.34-.168.47-.253.253-.851.253-1.105 0-.125-.13-.211-.259-.211-.47 0-.167.086-.296.211-.425.086-.211.297-.254.512-.254zm-6.285 11.38c.382.254.804.382 1.359.382.55 0 .976-.128 1.316-.382.34-.254.637-.637.848-1.145.21-.512.297-1.191.297-2.082 0-.848-.086-1.527-.297-2.039-.211-.508-.508-.89-.89-1.144-.383-.254-.852-.383-1.36-.383-.809 0-1.445.34-1.867.976-.383.594-.598 1.446-.598 2.676 0 .89.086 1.527.3 2.04.212.507.509.89.892 1.1zm.55-3.098c0-.594.043-1.02.13-1.316.081-.254.167-.426.296-.555a.6.6 0 01.383-.125c.125 0 .34.043.508.34.129.168.254.637.254 1.613 0 .766-.082 1.316-.297 1.613-.168.254-.34.297-.465.297-.129 0-.34-.043-.512-.34-.168-.168-.297-.593-.297-1.527zm-11.336-42.121c.211.508.508.89.848 1.144.383.254.809.383 1.36.383.55 0 .976-.129 1.359-.383.34-.253.637-.636.847-1.144.215-.512.297-1.191.297-2.082 0-.848-.082-1.527-.297-2.04-.21-.507-.507-.89-.89-1.144-.383-.257-.848-.382-1.36-.382-.804 0-1.441.34-1.867.976-.383.594-.594 1.441-.594 2.676 0 .847.125 1.527.297 1.996zm1.442-1.996c0-.594.043-1.02.129-1.317.086-.253.168-.425.297-.554.128-.082.21-.125.382-.125.13 0 .34.043.508.34.13.168.258.636.258 1.57 0 .766-.086 1.316-.297 1.613-.172.254-.34.297-.469.297-.129 0-.34-.043-.511-.34-.168-.125-.297-.55-.297-1.484zm-1.442 19.66c.211.508.508.89.848 1.145.383.253.809.382 1.36.382.55 0 .976-.129 1.359-.382.34-.254.637-.637.847-1.145.215-.512.297-1.191.297-2.082 0-.848-.082-1.527-.297-2.04-.21-.507-.507-.89-.89-1.144-.383-.257-.848-.382-1.36-.382-.804 0-1.441.34-1.867.976-.383.594-.594 1.442-.594 2.676 0 .848.125 1.484.297 1.996zm1.442-2.04c0-.593.043-1.019.129-1.315.086-.254.168-.426.297-.551.128-.086.21-.13.382-.13.13 0 .34.044.508.34.13.169.258.637.258 1.571 0 .766-.086 1.316-.297 1.613-.172.254-.34.297-.469.297-.129 0-.34-.043-.511-.34-.168-.125-.297-.507-.297-1.484zm15.629-22.843l1.738-3.441c.215-.426.383-.723.426-.934.086-.21.086-.426.086-.68 0-.593-.215-1.101-.637-1.527-.426-.469-.977-.68-1.613-.68a2.18 2.18 0 00-1.575.637c-.421.426-.68.977-.68 1.57 0 .637.216 1.188.641 1.614.34.34.72.554 1.145.636l-1.063 2.04zm-.512-5.012c0-.168.043-.34.172-.425a.519.519 0 01.379-.168.52.52 0 01.383.168.549.549 0 01.171.425.549.549 0 01-.171.426c-.211.211-.551.211-.762 0a.549.549 0 01-.172-.426zm-6.453 30.743l2.336-4.715h-2.508v-1.656h4.672l-.043 1.02-2.973 6.116zm4.754-24.036h4.672l-.043 1.02-2.973 6.117-1.484-.722 2.336-4.715h-2.508zm-5.348 50.997h-4.926v-.934l2.04-2.078c.464-.469.761-.852.89-1.106.125-.254.21-.464.21-.68a.559.559 0 00-.167-.425.623.623 0 00-.895.043c-.125.129-.21.34-.21.637v.257h-1.7v-.257c.043-.762.254-1.356.723-1.782.469-.425 1.02-.68 1.7-.68.425 0 .804.087 1.144.255.34.171.597.468.808.808.211.34.297.68.297 1.059 0 .426-.129.851-.34 1.316-.21.469-.636.977-1.23 1.613l-.297.301h1.91v1.653zm.082-14.692l-2.969 6.117-1.488-.722 2.336-4.715h-2.504v-1.656h4.668zm2.508-1.273l-1.742 3.398c-.211.426-.383.723-.426.977-.082.21-.082.426-.082.68 0 .593.21 1.101.637 1.527.422.469.976.68 1.613.68s1.144-.211 1.57-.637c.426-.426.68-.977.68-1.57 0-.637-.211-1.188-.637-1.614-.34-.34-.722-.555-1.148-.637l1.062-2.039zm.508 5.011c0 .168-.043.34-.168.426-.215.211-.555.254-.766 0a.545.545 0 01-.168-.426c0-.167.04-.34.168-.425.086-.125.211-.168.383-.168.168 0 .297.043.383.168a.559.559 0 01.168.425zm-8.024-50.828h-4.925v-.933l2.039-2.078c.464-.47.761-.852.89-1.106.13-.254.211-.469.211-.68a.559.559 0 00-.168-.425.623.623 0 00-.894.043c-.125.129-.211.34-.211.636v.258h-1.7v-.258c.043-.761.258-1.355.723-1.78.469-.427 1.02-.68 1.7-.68.425 0 .804.085 1.144.253.34.172.598.47.809.809.21.34.296.68.296 1.059 0 .425-.129.851-.34 1.316-.21.469-.636.977-1.23 1.613l-.297.301h1.91v1.652zm2.887-14.011h-2.504v-1.657h4.668l-.043 1.02-2.969 6.117-1.488-.723zm-4.969 0h-2.504v-1.657h4.672l-.043 1.02-2.972 6.117-1.489-.723zm2.887 84.117c-.422-.426-.68-.977-.719-1.7v-.253h1.696l.043.21c.042.258.128.47.253.598.258.254.766.211 1.02-.043a.681.681 0 00.215-.468.553.553 0 00-.297-.508c-.215-.172-.512-.258-.938-.258h-.253v-1.527h.253c.34-.043.47-.086.555-.125a.998.998 0 00.211-.172c.043-.086.086-.168.086-.211a.61.61 0 00-.086-.258c-.043-.04-.129-.082-.297-.082-.129 0-.21.043-.297.082-.086.086-.172.172-.21.3l-.044.169h-1.656l.043-.297c.082-.512.254-.934.594-1.274.426-.468.976-.68 1.656-.68.594 0 1.102.169 1.484.552.383.382.594.851.594 1.359 0 .34-.082.637-.254.933-.086.13-.21.254-.34.383.215.13.426.297.555.508.254.34.38.723.38 1.191 0 .637-.255 1.188-.72 1.614a2.58 2.58 0 01-1.785.68c-.722-.086-1.273-.297-1.742-.723zm-3.227.637c.637 0 1.149-.211 1.57-.637.427-.426.637-.977.637-1.57 0-.637-.21-1.192-.636-1.614-.34-.34-.719-.554-1.145-.637l1.063-2.039-1.489-.765-1.738 3.398c-.215.426-.34.723-.426.977-.086.21-.086.426-.086.68 0 .593.211 1.101.637 1.527.426.469.977.68 1.613.68zm-.55-2.25c0-.172.043-.34.168-.426.086-.125.214-.168.382-.168.172 0 .297.043.383.168a.544.544 0 01.172.426c0 .167-.043.34-.172.425-.21.211-.55.254-.765 0a.559.559 0 01-.168-.425zm-1.614 4.078h4.672l-.043 1.015-2.972 6.117-1.489-.722 2.336-4.715h-2.504zm12.059-81.23c.637 0 1.144-.212 1.57-.638.426-.425.68-.976.68-1.57 0-.637-.211-1.191-.637-1.613-.34-.34-.722-.555-1.144-.637l1.058-2.039-1.484-.766-1.742 3.399c-.211.422-.383.723-.426.976-.082.211-.082.422-.082.68 0 .594.21 1.102.637 1.528.382.468.933.68 1.57.68zm-.55-2.25c0-.173.038-.34.167-.427.086-.125.211-.168.383-.168.168 0 .297.043.383.168a.554.554 0 01.168.426c0 .168-.043.34-.168.426-.215.21-.555.254-.766 0a.545.545 0 01-.168-.426zM164.41 158.68a2.373 2.373 0 01-.847-1.403l-.086-.297h1.742l.082.125a.78.78 0 00.297.34c.257.172.64.13.894-.082a.823.823 0 00.211-.554c0-.211-.043-.422-.21-.551-.173-.211-.427-.254-.723-.13a.798.798 0 00-.297.259l-.086.125-1.36-.297.852-3.992h3.437v1.613h-2.12l-.13.598h.086c.637 0 1.188.21 1.614.68.425.421.636 1.015.636 1.695 0 .68-.254 1.273-.722 1.742a2.398 2.398 0 01-1.743.722c-.593-.085-1.101-.253-1.527-.593zm8.79-66.88c-.212-.507-.509-.89-.891-1.144-.383-.254-.848-.383-1.36-.383-.804 0-1.441.34-1.867.977-.383.594-.594 1.441-.594 2.676 0 .89.082 1.527.297 2.035.211.512.508.894.848 1.148.383.254.808.383 1.36.383.55 0 .976-.129 1.359-.383.34-.254.636-.636.847-1.148.086-.211.172-.465.215-.762v.848h2.758v1.316h1.7v-1.402h.55v-1.613h-.55v-4.075h-1.614l-2.805 4.118v-.551c.043-.848-.039-1.528-.254-2.04zm-1.4 2.083c0 .765-.085 1.316-.3 1.613-.168.254-.34.297-.465.297-.129 0-.34-.043-.512-.34-.125-.168-.253-.594-.253-1.527 0-.594.042-1.02.128-1.317.086-.254.168-.468.297-.554.13-.082.211-.125.383-.125.125 0 .34.043.508.34.043.21.215.636.215 1.613zm3.692.465l.68-1.016v1.016zm17.75 1.148l-.086-.297h1.742l.086.125a.734.734 0 00.297.34c.254.172.637.129.89-.082a.804.804 0 00.212-.555c0-.21-.043-.422-.211-.55-.168-.211-.426-.254-.723-.13a.797.797 0 00-.297.258l-.086.125-1.355-.296.848-3.993h3.437v1.657h-2.121l-.129.554h.086c.637 0 1.188.211 1.613.68.426.422.637 1.016.637 1.695 0 .68-.254 1.274-.723 1.743a2.389 2.389 0 01-1.738.722 2.584 2.584 0 01-1.574-.512 3.603 3.603 0 01-.805-1.484zm2.844-12.23h-2.504v-1.657h4.672l-.043 1.02-2.973 6.117-1.488-.723zm-5.688 2.632l-1.062 2.04 1.484.722 1.743-3.441c.21-.422.382-.719.425-.934.082-.21.082-.422.082-.68a2.08 2.08 0 00-.636-1.527c-.422-.469-.977-.68-1.614-.68-.593 0-1.144.211-1.57.637-.426.426-.68.977-.68 1.57 0 .637.215 1.192.637 1.614.383.426.766.636 1.191.68zm-.085-2.207c0-.168.042-.34.167-.425a.533.533 0 01.383-.168c.13 0 .254.043.383.168a.549.549 0 01.172.425.544.544 0 01-.172.426c-.21.211-.55.211-.766 0-.082-.129-.167-.254-.167-.426zm7.855 1.996v1.446h2.758v1.312h1.699v-1.312h.555v-1.617h-.555V81.44h-1.613l-2.844 4.204zm2.082-.171l.676-1.016v1.016zm-14.395 3.101c.637 0 1.145-.21 1.57-.637.423-.425.68-.976.68-1.57 0-.637-.214-1.191-.636-1.613-.34-.34-.723-.555-1.149-.637l1.063-2.039-1.488-.766-1.739 3.399c-.215.422-.383.723-.426.976-.085.211-.085.422-.085.68 0 .594.214 1.102.636 1.528.383.468.934.68 1.574.68zm-.597-2.25c0-.172.043-.34.172-.426.086-.125.21-.168.382-.168.168 0 .297.043.383.168a.554.554 0 01.168.426c0 .168-.043.34-.168.426-.215.21-.554.254-.765 0-.086-.129-.172-.258-.172-.426zm-5.645 1.996c.34.168.805.254 1.317.254.507 0 .976-.086 1.316-.254.34-.172.637-.468.848-.808.21-.34.297-.723.297-1.145 0-.383-.086-.722-.254-1.062a1.863 1.863 0 00-.512-.637c.129-.172.258-.34.34-.512.086-.21.129-.465.129-.719 0-.382-.086-.722-.297-1.02-.172-.339-.469-.593-.766-.765-.636-.34-1.57-.34-2.207 0a1.83 1.83 0 00-.765.723c-.168.297-.297.68-.297 1.02 0 .296.043.55.172.804.082.172.168.34.296.469-.214.21-.382.426-.511.637-.168.297-.254.68-.254 1.02 0 .425.086.804.297 1.187.215.382.511.636.851.808zm1.614-4.46a.458.458 0 01-.637 0 .472.472 0 01-.13-.34c0-.126.044-.254.13-.34a.386.386 0 01.297-.125.5.5 0 01.34.125.4.4 0 01.125.3c0 .168-.043.297-.125.38zm-.297 1.742c.21 0 .379.085.55.21.13.13.211.297.211.47 0 .167-.043.34-.168.468-.253.254-.851.254-1.105 0a.701.701 0 01-.211-.469c0-.172.086-.297.211-.426.086-.168.297-.253.512-.253zm6.879 4.628h-1.614l-2.847 4.204-.043.085v1.442h2.761v1.316h1.7v-1.36h.55v-1.612h-.55v-4.075zm-2.422 4.075l.68-1.016v1.016zm5.011.382l-1.062 2.04 1.484.722 1.743-3.441c.21-.422.382-.719.425-.934.082-.21.082-.426.082-.68a2.08 2.08 0 00-.636-1.527c-.422-.469-.977-.68-1.614-.68-.593 0-1.144.211-1.57.637-.426.426-.68.977-.68 1.613 0 .637.215 1.192.637 1.614.383.383.766.554 1.191.636zm-.085-2.207c0-.168.042-.34.167-.425a.533.533 0 01.383-.168c.13 0 .254.043.383.168a.549.549 0 01.172.425.549.549 0 01-.172.426c-.21.211-.55.211-.766 0-.082-.129-.167-.258-.167-.426zm33.5 68.704c-.38-.254-.848-.383-1.356-.383-.809 0-1.445.34-1.871.976-.383.594-.594 1.446-.594 2.676 0 .89.086 1.527.297 2.04.215.507.512.89.852 1.144.379.254.804.382 1.355.382.555 0 .977-.128 1.316-.382.34-.254.637-.637.852-1.145.211-.512.297-1.191.297-2.082 0-.848-.086-1.527-.297-2.039-.172-.55-.469-.934-.851-1.187zm-.551 3.226c0 .766-.086 1.317-.297 1.613-.168.254-.34.297-.469.297-.125 0-.336-.043-.508-.34-.129-.168-.254-.593-.254-1.527 0-.594.043-1.02.125-1.316.086-.254.172-.47.301-.551a.578.578 0 01.38-.129c.128 0 .339.043.51.34.087.21.212.637.212 1.613zm-7.219 10.617h1.91v1.614h-4.926v-.938l2.04-2.078c.468-.469.765-.852.89-1.106.129-.253.215-.464.215-.68a.535.535 0 00-.172-.421.615.615 0 00-.89.039c-.13.129-.212.34-.212.637v.258H213.2v-.258c.043-.762.254-1.356.723-1.782.465-.425 1.02-.68 1.7-.68.421 0 .804.087 1.144.255.34.172.593.468.808.808.211.34.297.68.297 1.063 0 .422-.129.847-.34 1.316-.215.465-.636.977-1.234 1.613zm1.953-8.832h1.91v1.614h-4.926v-.938l2.04-2.078c.468-.469.765-.852.89-1.106.13-.253.215-.464.215-.68a.535.535 0 00-.172-.421.615.615 0 00-.89.039c-.13.129-.211.34-.211.64v.255h-1.7v-.254c.043-.766.254-1.36.723-1.786.465-.425 1.02-.68 1.7-.68.421 0 .804.087 1.144.255.34.172.594.468.808.808.211.34.297.68.297 1.063 0 .422-.129.847-.34 1.316-.214.465-.636.977-1.234 1.613zm-11.887 6.114l1.059-2.04-1.484-.765-1.743 3.398c-.21.426-.382.723-.421.977-.086.21-.086.426-.086.68 0 .593.21 1.105.636 1.527.426.469.977.68 1.614.68.636 0 1.144-.211 1.57-.637.426-.426.637-.977.637-1.57 0-.637-.211-1.188-.637-1.614-.34-.34-.723-.55-1.145-.636zm.082 2.25c0 .168-.043.34-.168.425-.21.211-.55.254-.765 0a.559.559 0 01-.168-.425c0-.172.043-.34.168-.426.086-.125.215-.168.383-.168.172 0 .297.043.382.168.125.086.168.254.168.426zm-37.363-4.754h4.668l-.043 1.015-2.969 6.117-1.488-.765 2.336-4.715h-2.504zm36.176-76.856h-1.7v-.258c.044-.761.255-1.355.723-1.78.47-.427 1.02-.68 1.7-.68.421 0 .804.085 1.144.253.34.172.594.47.809.809.21.34.297.68.297 1.059 0 .425-.13.851-.34 1.316-.211.469-.637.977-1.23 1.613l-.298.301h1.91v1.613h-4.925v-.937l2.039-2.078c.465-.47.762-.852.89-1.106.125-.254.211-.465.211-.68a.545.545 0 00-.168-.421.62.62 0 00-.894.039c-.125.129-.211.34-.211.636zm27.004 53.543c-.34-.34-.719-.555-1.145-.637l1.063-2.039-1.488-.765-1.739 3.398c-.215.426-.383.723-.426.977-.085.21-.085.426-.085.68 0 .593.21 1.101.636 1.527.426.469.977.68 1.613.68.637 0 1.149-.211 1.57-.637.427-.426.68-.977.68-1.57-.042-.637-.253-1.188-.68-1.614zm-1.059 1.57c0 .168-.043.34-.172.426-.21.211-.55.254-.765 0a.559.559 0 01-.168-.426c0-.167.043-.34.168-.425.086-.125.215-.168.383-.168.171 0 .296.043.382.168.086.129.172.257.172.425zm-7.476 9.301h1.914v1.614h-4.926v-.938l2.035-2.078c.469-.469.766-.852.895-1.106.125-.253.21-.464.21-.68a.545.545 0 00-.167-.421.62.62 0 00-.895.039c-.125.129-.21.34-.21.64v.254h-1.7v-.253c.043-.766.254-1.36.723-1.786.468-.425 1.02-.68 1.699-.68.422 0 .804.087 1.144.255.34.172.594.468.809.808.21.34.297.68.297 1.063 0 .422-.13.847-.34 1.316-.211.465-.637.977-1.23 1.613zm5.82-5.011c-.383-.254-.852-.383-1.36-.383-.808 0-1.445.34-1.867.976-.382.594-.597 1.446-.597 2.676 0 .89.086 1.527.297 2.04.214.507.511.89.851 1.144.383.254.805.382 1.36.382.55 0 .976-.128 1.316-.382.34-.254.637-.637.848-1.145.21-.512.297-1.191.297-2.082 0-.848-.086-1.527-.297-2.039-.168-.508-.465-.934-.848-1.187zm-.555 3.226c0 .766-.082 1.316-.297 1.613-.168.254-.34.297-.464.297-.13 0-.34-.043-.512-.34-.125-.168-.254-.593-.254-1.527 0-.594.043-1.02.129-1.316.082-.254.168-.426.297-.551a.582.582 0 01.383-.129c.125 0 .34.043.507.34.043.21.211.637.211 1.613zm-16.43 17.07c.422.426.637 1.02.637 1.7 0 .68-.257 1.273-.722 1.738a2.404 2.404 0 01-1.743.723 2.577 2.577 0 01-1.57-.508 2.373 2.373 0 01-.847-1.403l-.086-.296h1.742l.082.125a.78.78 0 00.297.34c.257.171.636.128.894-.083a.823.823 0 00.211-.554.82.82 0 00-.21-.551c-.216-.211-.427-.254-.723-.129a.798.798 0 00-.297.258l-.086.125-1.36-.297.852-3.992h3.437v1.656h-2.12l-.13.555h.086c.68-.043 1.23.168 1.657.593zm-35.921-9.129l1.058-2.039-1.484-.765-1.742 3.398c-.211.426-.383.723-.426.977-.082.21-.082.426-.082.68 0 .593.21 1.101.637 1.527.422.469.976.68 1.613.68s1.144-.211 1.57-.637c.426-.426.68-.977.68-1.57 0-.637-.211-1.192-.637-1.614a2.18 2.18 0 00-1.187-.637zm.082 2.208c0 .167-.043.34-.168.425-.215.211-.555.254-.766 0a.545.545 0 01-.168-.425c0-.172.04-.34.168-.426.086-.125.211-.168.383-.168.168 0 .297.043.383.168a.554.554 0 01.168.426zm6.156 7.175c.129-.168.258-.34.34-.507a1.98 1.98 0 00.129-.723c0-.383-.086-.723-.297-1.02-.172-.34-.469-.593-.766-.765-.636-.34-1.57-.34-2.207 0a1.83 1.83 0 00-.765.722c-.168.297-.297.68-.297 1.02 0 .297.043.55.172.805.082.171.168.34.296.468-.214.211-.382.426-.511.637-.168.297-.254.68-.254 1.02 0 .425.086.804.297 1.187.215.34.468.598.851.809.34.168.805.254 1.317.254.507 0 .976-.086 1.316-.254.34-.172.637-.47.848-.809.21-.34.297-.719.297-1.144 0-.383-.086-.723-.254-1.063a1.901 1.901 0 00-.512-.637zm-1.398-.808a.458.458 0 01-.637 0 .47.47 0 01-.13-.336c0-.13.044-.258.13-.34a.376.376 0 01.297-.129c.125 0 .254.043.34.129a.386.386 0 01.125.297c0 .168-.043.297-.125.379zm-.852 1.957c.172-.13.34-.215.555-.215.21 0 .379.086.55.215.13.125.211.297.211.465a.65.65 0 01-.168.468c-.253.254-.851.254-1.105 0-.125-.129-.211-.257-.211-.468-.043-.211.043-.34.168-.465zm-3.988-1.742l1.058-2.04-1.484-.765-1.742 3.398c-.211.426-.383.723-.426.977-.082.21-.082.426-.082.68 0 .593.21 1.105.637 1.527.422.469.976.68 1.613.68s1.144-.211 1.57-.637c.426-.426.68-.977.68-1.57 0-.637-.211-1.188-.637-1.614-.383-.34-.765-.55-1.187-.636zm.082 2.25c0 .168-.043.34-.168.425-.215.211-.555.254-.766 0a.545.545 0 01-.168-.425c0-.172.04-.34.168-.426.086-.125.211-.168.383-.168.168 0 .297.043.383.168.125.086.168.254.168.426zm9.808-2.25l1.063-2.04-1.485-.765-1.742 3.398c-.21.426-.383.723-.425.977-.086.21-.086.426-.086.68 0 .593.214 1.105.636 1.527.426.469.977.68 1.617.68.637 0 1.145-.211 1.57-.637.423-.426.68-.977.68-1.57 0-.637-.214-1.188-.636-1.614a2.19 2.19 0 00-1.192-.636zm.086 2.25c0 .168-.043.34-.168.425-.215.211-.554.254-.765 0a.549.549 0 01-.172-.425c0-.172.043-.34.172-.426.086-.125.21-.168.382-.168.168 0 .297.043.383.168.125.086.168.254.168.426zm11.89-3.778l-2.972 6.113-1.488-.722 2.336-4.715h-2.504v-1.652h4.668zm4.415-1.148h-1.613l-2.844 4.203-.043.086v1.441h2.758v1.317h1.699v-1.356h.555v-1.613h-.555v-4.078zm-2.418 4.078l.676-1.02v1.02zm-9.387-4.078c-.593 0-1.144.21-1.57.637-.426.425-.68.976-.68 1.57 0 .637.211 1.191.637 1.613.34.34.723.555 1.148.637l-1.062 2.039 1.484.766 1.743-3.442c.21-.422.382-.719.425-.934.082-.21.082-.425.082-.68a2.08 2.08 0 00-.636-1.527c-.38-.468-.934-.68-1.57-.68zm.555 2.25a.544.544 0 01-.172.426c-.21.21-.55.21-.766 0a.554.554 0 01-.167-.426c0-.168.042-.34.167-.426a.533.533 0 01.383-.168c.13 0 .254.043.383.168.129.086.172.258.172.426zm29.89-41.313l-.296.297h1.91v1.613h-4.926v-.894l2.04-2.078c.468-.469.765-.852.89-1.106.129-.254.215-.465.215-.68a.535.535 0 00-.172-.421.615.615 0 00-.89.039c-.13.129-.212.34-.212.637v.257h-1.699v-.257c.043-.762.254-1.356.723-1.782.464-.425 1.015-.68 1.695-.68.426 0 .809.087 1.148.254.34.172.594.47.805.81.215.339.297.679.297 1.058 0 .425-.125.851-.34 1.316-.21.469-.594 1.02-1.187 1.617zm-5.687-12.91c-.383.594-.598 1.445-.598 2.676 0 .89.086 1.527.297 2.039.215.508.512.89.852 1.144.383.254.805.383 1.36.383.55 0 .976-.129 1.316-.382.34-.254.636-.637.847-1.145.211-.512.297-1.191.297-2.082 0-.848-.086-1.527-.297-2.04-.21-.507-.507-.89-.89-1.144-.383-.257-.852-.382-1.36-.382-.722-.043-1.36.296-1.824.933zm2.418 1.063c.129.168.254.636.254 1.57 0 .766-.082 1.316-.297 1.613-.168.254-.34.297-.465.297-.129 0-.34-.043-.511-.34-.125-.168-.254-.594-.254-1.527 0-.594.043-1.02.129-1.317.082-.253.167-.468.296-.55a.582.582 0 01.383-.13c.082 0 .297.044.465.384zm-12.398-30.149c.636 0 1.148-.21 1.57-.637.426-.425.637-.976.637-1.57 0-.637-.211-1.191-.637-1.613-.34-.34-.723-.555-1.145-.637l1.059-2.039-1.484-.766-1.743 3.399c-.21.422-.378.723-.421.976-.086.211-.086.422-.086.68 0 .594.21 1.102.636 1.528.426.468.977.68 1.614.68zm-.551-2.25c0-.172.043-.34.168-.426.086-.125.215-.168.383-.168.172 0 .297.043.382.168a.554.554 0 01.168.426c0 .168-.043.34-.168.426-.21.21-.55.254-.765 0a.559.559 0 01-.168-.426zm5.52 39.106l-1.743 3.398c-.21.426-.34.723-.426.977-.082.21-.082.425-.082.68 0 .593.211 1.1.637 1.527.422.468.977.68 1.613.68.637 0 1.145-.212 1.57-.637.426-.426.637-.977.637-1.57 0-.637-.21-1.192-.636-1.614-.34-.34-.723-.555-1.145-.637l1.059-2.039zm.55 5.011c0 .168-.043.34-.168.426-.215.211-.554.254-.765 0a.545.545 0 01-.168-.426c0-.172.039-.34.168-.425.085-.125.21-.168.382-.168.168 0 .297.043.383.168a.664.664 0 01.168.425zm9.344-22.675l-1.742 3.398c-.211.426-.383.723-.426.977-.086.21-.086.425-.086.68 0 .593.215 1.1.64 1.527.423.468.977.68 1.614.68.637 0 1.144-.212 1.57-.637.422-.426.68-.977.68-1.57 0-.637-.215-1.192-.637-1.614-.34-.34-.722-.555-1.148-.637l1.062-2.039zm.55 5.011c0 .168-.042.34-.171.426-.211.211-.551.254-.762 0a.549.549 0 01-.172-.426c0-.172.043-.34.172-.425.082-.125.211-.168.383-.168.168 0 .297.043.379.168.086.128.172.253.172.425zm-7.726 9l-.3.297h1.913v1.617h-4.925v-.937l2.035-2.078c.469-.469.765-.852.894-1.106.125-.254.211-.465.211-.68a.545.545 0 00-.168-.421.62.62 0 00-.894.039c-.125.129-.211.34-.211.636v.258h-1.7v-.257c.044-.762.255-1.356.723-1.782.465-.426 1.02-.68 1.7-.68.421 0 .804.087 1.144.254.34.172.594.47.809.81.21.339.296.679.296 1.058 0 .425-.128.851-.34 1.316-.171.512-.593 1.02-1.187 1.656zm-7.39 14.82c0 .637.21 1.188.636 1.614.34.34.723.55 1.149.637l-1.063 2.039 1.485.722 1.742-3.441c.21-.422.383-.723.425-.934.083-.21.083-.425.083-.68a2.08 2.08 0 00-.637-1.527c-.422-.468-.977-.68-1.613-.68-.594 0-1.145.212-1.57.637-.427.426-.637.977-.637 1.614zm1.699 0c0-.167.043-.34.168-.425a.533.533 0 01.382-.168c.13 0 .254.043.383.168a.549.549 0 01.172.426.544.544 0 01-.172.425c-.21.211-.55.211-.765 0a.554.554 0 01-.168-.425zm5.351 4.926a2.58 2.58 0 01-1.574-.507 2.412 2.412 0 01-.848-1.403l-.086-.297h1.743l.086.125a.734.734 0 00.296.34c.254.172.637.13.891-.082a.804.804 0 00.211-.554c0-.211-.043-.422-.21-.551-.169-.211-.427-.254-.724-.13a.798.798 0 00-.296.259l-.086.125-1.356-.297.848-3.992h3.437v1.613h-2.12l-.13.555h.086c.637 0 1.188.21 1.614.68.425.421.636 1.015.636 1.695 0 .68-.254 1.277-.722 1.742-.422.425-1.02.68-1.696.68zm3.907-33.289c-.383-.254-.852-.382-1.36-.382-.808 0-1.445.34-1.87.976-.38.594-.595 1.445-.595 2.676 0 .89.086 1.527.297 2.039.215.508.512.89.852 1.144.383.254.804.383 1.36.383.55 0 .976-.129 1.316-.383.34-.253.636-.636.847-1.144.211-.512.297-1.191.297-2.082 0-.848-.086-1.527-.297-2.04-.168-.507-.469-.933-.847-1.187zm-.555 3.227c0 .766-.082 1.316-.297 1.613-.168.254-.34.297-.465.297-.129 0-.34-.043-.512-.34-.125-.168-.254-.594-.254-1.527 0-.594.043-1.02.13-1.317.081-.253.167-.425.296-.55a.582.582 0 01.383-.13c.125 0 .336.044.508.34.086.212.21.637.21 1.614zm-4.16 38.215c.425-.426.636-.977.636-1.57 0-.637-.21-1.188-.636-1.614-.34-.34-.723-.555-1.145-.637l1.059-2.039-1.485-.765-1.742 3.398c-.21.426-.34.723-.426.977-.082.21-.082.426-.082.68 0 .593.211 1.101.637 1.527.422.469.977.68 1.613.68.594 0 1.102-.211 1.57-.637zm-2.164-1.614c0-.167.043-.34.168-.425.086-.125.21-.168.382-.168.168 0 .297.043.383.168a.559.559 0 01.168.425c0 .168-.043.34-.168.426-.215.211-.554.254-.765 0-.125-.086-.168-.215-.168-.426zm13.757-8.664l-.3.301h1.914v1.613h-4.926v-.933l2.035-2.082c.469-.469.766-.852.895-1.106.125-.254.21-.464.21-.68a.545.545 0 00-.167-.421.62.62 0 00-.895.039c-.125.129-.21.34-.21.64v.254h-1.7v-.254c.043-.765.254-1.359.723-1.785.468-.425 1.02-.68 1.699-.68.422 0 .804.087 1.144.255.34.171.594.468.809.808.21.34.297.68.297 1.063 0 .422-.13.847-.34 1.316-.211.508-.594 1.016-1.188 1.652zM210.95 99.105l-2.847 4.204-.04.086v1.44h2.758v1.317h1.7v-1.316h.55v-1.656h-.55v-4.075zm-.808 4.075l.68-1.016v1.016zm10.785 1.234a.807.807 0 00.215-.555c0-.21-.043-.421-.215-.55-.168-.211-.422-.254-.723-.13a.828.828 0 00-.297.258l-.082.126-1.36-.297.849-3.993h3.44v1.614h-2.124l-.125.554h.082c.637 0 1.191.211 1.613.68.426.422.637 1.02.637 1.695a2.41 2.41 0 01-.719 1.743 2.404 2.404 0 01-1.742.722 2.572 2.572 0 01-1.57-.511 2.376 2.376 0 01-.852-1.399l-.082-.297h1.738l.086.125a.78.78 0 00.297.34c.34.129.723.129.934-.125zm-.934 36.984v-1.316h.551v-1.617h-.55v-4.074h-1.614l-2.844 4.203-.043.086v1.441h2.758v1.316h1.742zm-2.418-2.933l.676-1.016v1.016zm-1.953 12.02l1.738-3.442c.215-.422.383-.723.426-.934.086-.21.086-.425.086-.68 0-.593-.215-1.1-.637-1.527-.425-.468-.976-.68-1.613-.68-.64 0-1.148.212-1.574.637a2.193 2.193 0 00-.637 1.57c0 .637.215 1.192.637 1.614.34.34.723.555 1.148.637l-1.062 2.039zm-.555-5.012c0-.168.043-.34.172-.426a.52.52 0 01.383-.168c.125 0 .254.043.379.168a.549.549 0 01.172.426.544.544 0 01-.172.425c-.21.211-.55.211-.762 0a.544.544 0 01-.172-.425zm-7.046-25.86c.125-.254.21-.465.21-.68a.545.545 0 00-.167-.421.62.62 0 00-.895.039c-.125.129-.211.34-.211.636v.258h-1.7v-.257c.044-.762.255-1.356.723-1.782.47-.426 1.02-.68 1.7-.68.422 0 .804.087 1.144.254.34.172.594.47.809.81.21.339.297.679.297 1.058 0 .425-.13.851-.34 1.316-.211.469-.637.977-1.23 1.617l-.298.297h1.91v1.613h-4.882v-.933l2.035-2.082c.469-.426.766-.766.895-1.063zm3.015-8.789c.125-.254.211-.469.211-.68a.549.549 0 00-.172-.425.618.618 0 00-.89.043c-.125.129-.211.34-.211.636v.258h-1.7v-.258c.043-.761.254-1.359.723-1.78.465-.427 1.02-.68 1.7-.68.421 0 .804.085 1.144.253.34.172.594.47.808.809.211.34.297.68.297 1.059 0 .425-.129.851-.34 1.316-.214.469-.636.977-1.234 1.613l-.297.301h1.914v1.613h-4.925v-.937l2.035-2.078c.468-.426.765-.809.937-1.063zm-2.847 48.45l1.742-3.442c.21-.422.382-.719.425-.934.083-.21.083-.421.083-.68a2.08 2.08 0 00-.637-1.527c-.422-.468-.977-.68-1.613-.68-.594 0-1.145.212-1.57.637a2.177 2.177 0 00-.638 1.57c0 .637.211 1.192.637 1.614.34.34.723.555 1.149.637l-1.063 2.039zm-.551-5.012c0-.168.043-.34.168-.426a.533.533 0 01.382-.168c.13 0 .254.043.383.168a.549.549 0 01.172.426.544.544 0 01-.172.425c-.21.211-.55.211-.765 0-.125-.085-.168-.253-.168-.425zm6.75-28.535h3.441v1.617h-2.125l-.125.55h.082c.637 0 1.192.211 1.613.68.426.422.637 1.02.637 1.7 0 .675-.254 1.273-.719 1.738a2.404 2.404 0 01-1.742.722 2.569 2.569 0 01-1.57-.507 2.398 2.398 0 01-.852-1.403l-.082-.297h1.739l.086.125a.78.78 0 00.296.34c.254.172.637.13.891-.082a.807.807 0 00.215-.555.804.804 0 00-.215-.55c-.168-.211-.422-.254-.719-.13a.77.77 0 00-.297.259l-.086.125-1.402-.297zm6.457-33.672h-2.508V90.44h4.672l-.043 1.02-2.973 6.117-1.484-.723zm-5.266 64.84v-.254h1.695l.043.21c.043.254.13.47.258.594.254.258.719.258 1.016-.039a.689.689 0 00.215-.469.553.553 0 00-.297-.507c-.215-.172-.512-.258-.934-.258h-.258v-1.527h.258c.336-.043.465-.086.551-.13.086-.038.168-.124.21-.167.044-.086.087-.172.087-.211 0-.086-.043-.172-.086-.258-.043-.043-.125-.082-.297-.082-.129 0-.21.039-.297.125a1.189 1.189 0 00-.21.254l-.044.172h-1.656l.043-.297c.082-.512.254-.934.594-1.274.426-.468.976-.68 1.656-.68.594 0 1.102.169 1.484.551.426.383.594.852.594 1.36 0 .34-.082.637-.254.933-.082.13-.21.254-.34.383.215.13.426.297.555.508.254.34.379.723.379 1.148 0 .637-.254 1.188-.719 1.614a2.58 2.58 0 01-1.785.68c-.68 0-1.23-.215-1.7-.637-.464-.469-.718-1.063-.76-1.742zm7.387-12.528l-2.973 6.117-1.484-.722 2.336-4.715h-2.508v-1.656h4.672zm-7.047-52.312h-2.508V90.44h4.672l-.043 1.02-2.973 6.117-1.484-.766zm8.871 9.77h-1.695v-.259c.043-.761.254-1.355.719-1.78.468-.427 1.019-.68 1.699-.68.425 0 .808.085 1.148.253.34.172.594.47.805.809.215.34.297.68.297 1.059 0 .425-.125.851-.34 1.316-.211.469-.637.977-1.23 1.613l-.297.301h1.91v1.613h-4.883v-.937l2.039-2.078c.469-.47.766-.852.89-1.106.13-.254.215-.465.215-.68a.535.535 0 00-.171-.421.615.615 0 00-.891.039c-.129.129-.215.34-.215.636zM211.035 86.75a.823.823 0 00.211-.555.82.82 0 00-.21-.55c-.216-.211-.427-.254-.724-.13a.769.769 0 00-.296.258l-.086.125-1.36-.296.848-3.993h3.441v1.614h-2.125l-.125.597h.086c.637 0 1.188.211 1.614.68.421.422.636 1.016.636 1.695a2.42 2.42 0 01-.722 1.743 2.404 2.404 0 01-1.743.722 2.58 2.58 0 01-1.57-.512 2.364 2.364 0 01-.847-1.398l-.086-.297h1.742l.082.125a.803.803 0 00.297.34c.34.129.722.086.937-.168zm.934 3.906c-.383-.254-.852-.383-1.36-.383-.808 0-1.445.34-1.867.977-.383.594-.597 1.441-.597 2.676 0 .89.085 1.527.296 2.035.215.512.512.894.852 1.148.383.254.805.383 1.36.383.55 0 .976-.129 1.316-.383.34-.254.636-.636.847-1.148.211-.508.297-1.188.297-2.078 0-.852-.086-1.528-.297-2.04-.168-.55-.464-.933-.847-1.187zm-.555 3.227c0 .765-.082 1.316-.297 1.613-.168.254-.34.297-.465.297-.129 0-.34-.043-.511-.34-.125-.168-.254-.594-.254-1.527 0-.594.043-1.02.129-1.317.082-.254.168-.468.297-.554a.6.6 0 01.382-.125c.125 0 .34.043.508.34.086.21.211.636.211 1.613zm4.121 12.398c.637 0 1.145-.21 1.57-.636.426-.426.637-.977.637-1.57 0-.638-.21-1.192-.637-1.614-.34-.34-.722-.555-1.148-.637l1.063-2.039-1.485-.765-1.742 3.398c-.211.422-.34.723-.426.977-.082.21-.082.421-.082.68 0 .593.211 1.1.637 1.527.422.425.976.68 1.613.68zm-.555-2.293c0-.172.043-.34.172-.425.086-.126.211-.168.383-.168.168 0 .297.043.383.168a.554.554 0 01.168.425c0 .168-.043.34-.168.426-.215.211-.555.254-.766 0-.129-.086-.172-.215-.172-.426zM197.7 168.02c.636 0 1.148-.211 1.573-.637.422-.426.637-.977.637-1.57 0-.637-.215-1.192-.637-1.614-.34-.34-.722-.554-1.148-.637l1.063-2.039-1.489-.765-1.738 3.398c-.215.426-.383.723-.426.977-.086.21-.086.426-.086.68 0 .593.215 1.101.637 1.527.426.469.976.68 1.613.68zm-.552-2.25c0-.172.043-.34.168-.426.086-.125.215-.168.383-.168.172 0 .297.043.383.168a.544.544 0 01.172.426c0 .167-.043.34-.172.425-.21.211-.55.254-.766 0a.559.559 0 01-.168-.425zm-.593-48.875h2.207v6.84h-1.7v-5.223h-1.527zm6.922-17.665h4.668l-.043 1.02-2.97 6.117-1.487-.722 2.335-4.715h-2.503zm12.058 53.97l-2.972 6.116-1.489-.722 2.336-4.715h-2.504v-1.656h4.672zm-15.074-36.305h4.672l-.043 1.02-2.973 6.116-1.488-.722 2.336-4.715h-2.504zm14.48 50.957h-4.925v-.938l2.035-2.078c.469-.469.765-.852.894-1.106.125-.253.211-.464.211-.68a.545.545 0 00-.168-.421.62.62 0 00-.894.039c-.125.129-.211.34-.211.64v.255h-1.7v-.254c.044-.766.255-1.36.723-1.786.465-.425 1.02-.68 1.7-.68.421 0 .804.087 1.144.255.34.172.594.468.809.808.21.34.296.68.296 1.063 0 .422-.128.847-.34 1.316-.21.465-.636.977-1.23 1.613l-.297.297h1.91v1.657zm-14.734-35.032l-1.488-.722 2.336-4.715h-2.504v-1.656h4.668l-.04 1.02zm5.688-.254h1.699v-1.316h.55v-1.617h-.55v-4.074h-1.614l-2.843 4.203-.043.086v1.441h2.758v1.277zm-.68-2.933l.68-1.016v1.016zm0 0M22.46 81.398h23.481l19.196 54.223 20.68-54.223h14.351l20.297 53.586 19.234-53.586h23.61l-34.864 95.286h-15.199l-20.383-54.309-20.976 54.309H56.898zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
        d: "M128.02 3.398c16.816 0 33.164 3.309 48.492 9.809 14.82 6.242 28.152 15.242 39.617 26.707 11.465 11.465 20.422 24.754 26.707 39.617 6.496 15.371 9.809 31.676 9.809 48.489 0 16.816-3.313 33.164-9.81 48.492-6.284 14.82-15.284 28.152-26.706 39.617-11.465 11.465-24.754 20.422-39.617 26.707-15.371 6.496-31.676 9.809-48.492 9.809-16.813 0-33.16-3.313-48.489-9.81-14.82-6.284-28.152-15.241-39.617-26.706-11.465-11.465-20.426-24.754-26.707-39.617-6.5-15.371-9.809-31.676-9.809-48.492 0-16.813 3.309-33.16 9.809-48.489 6.242-14.863 15.242-28.195 26.707-39.617C51.38 28.45 64.668 19.488 79.531 13.207c15.328-6.5 31.633-9.809 48.489-9.809m0-3.398C57.324 0 0 57.324 0 128.02c0 70.699 57.324 128.023 128.02 128.023 70.699 0 128.023-57.324 128.023-128.023C256.043 57.324 198.719 0 128.02 0zm0 0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ }),

/***/ "./src/components/ExchangePage/components/coin_logo/svg/Zcash.js":
/*!***********************************************************************!*\
  !*** ./src/components/ExchangePage/components/coin_logo/svg/Zcash.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, __react_refresh_error_overlay__) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! react-refresh/runtime */ "./node_modules/react-refresh/runtime.js");
__webpack_require__.$Refresh$.setup(module.i);


var _jsxFileName = "/Users/fafa/Desktop/exchange/e-currency/src/components/ExchangePage/components/coin_logo/svg/Zcash.js";


function SvgComponent(props) {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24pt",
    height: "24pt",
    viewBox: "0 0 256 256",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M255.996 128c0 70.691-57.305 127.996-127.996 127.996S0 198.691 0 128 57.309 0 128 0s127.996 57.309 127.996 128zm0 0",
      fillRule: "evenodd",
      fill: "#2b2a29"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M235.633 128c0 59.445-48.188 107.633-107.633 107.633-59.445 0-107.637-48.188-107.637-107.633C20.363 68.555 68.555 20.363 128 20.363S235.633 68.555 235.633 128zm0 0",
      fillRule: "evenodd",
      fill: "#fec033"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
      d: "M169.695 185.21c0 2.911-1.937 3.88-4.847 3.88h-24.243v9.695c0 1.942-.968 2.91-2.91 2.91h-19.394c-1.938 0-2.906-.968-2.906-2.91v-9.695H94.059c-2.907 0-4.848 0-5.817-1.942-.969-.968-1.941-2.906-1.941-4.847v-5.817c0-.968 0-1.941.972-3.879 0-1.94.97-2.91 1.938-3.878 5.82-12.606 12.605-25.211 20.363-37.82 7.758-13.575 14.547-26.18 21.332-37.817v-1.938c0-.972-.969-.972-1.937-.972H95.03c-2.91 0-3.879-1.938-3.879-4.848V68.848c0-1.938 0-2.91.97-3.88h23.273v-7.757c0-1.938.968-2.91 2.906-2.91h19.394c1.942 0 2.91.972 2.91 2.91v7.758h20.364c3.879 0 5.816 1.941 5.816 4.847v8.727c0 1.941 0 3.879-.969 4.852-.968 1.937-.968 2.906-1.937 4.847-2.91 4.848-5.82 11.637-9.7 17.453-2.906 5.82-6.784 12.606-10.663 18.426-2.91 6.785-6.79 12.606-10.668 18.422-2.91 6.789-6.79 12.605-9.696 18.426v1.937s0 .973.97.973h40.726c1.937 0 2.91 0 2.91.969.969 0 1.937.968 1.937 2.91zm0 0",
      fill: "#2b2a29"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

_c = SvgComponent;
/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

var _c;

__webpack_require__.$Refresh$.register(_c, "SvgComponent");

const currentExports = __react_refresh_utils__.getModuleExports(module.i);
__react_refresh_utils__.registerExportsForReactRefresh(currentExports, module.i);

if (true) {
  const isHotUpdate = !!module.hot.data;
  const prevExports = isHotUpdate ? module.hot.data.prevExports : null;

  if (__react_refresh_utils__.isReactRefreshBoundary(currentExports)) {
    module.hot.dispose(
      /**
       * A callback to performs a full refresh if React has unrecoverable errors,
       * and also caches the to-be-disposed module.
       * @param {*} data A hot module data object from Webpack HMR.
       * @returns {void}
       */
      function hotDisposeCallback(data) {
        // We have to mutate the data object to get data registered and cached
        data.prevExports = currentExports;
      }
    );
    module.hot.accept(
      /**
       * An error handler to allow self-recovering behaviours.
       * @param {Error} error An error occurred during evaluation of a module.
       * @returns {void}
       */
      function hotErrorHandler(error) {
        if (
          typeof __react_refresh_error_overlay__ !== 'undefined' &&
          __react_refresh_error_overlay__
        ) {
          __react_refresh_error_overlay__.handleRuntimeError(error);
        }

        if (typeof __react_refresh_test__ !== 'undefined' && __react_refresh_test__) {
          if (window.onHotAcceptError) {
            window.onHotAcceptError(error.message);
          }
        }

        __webpack_require__.c[module.i].hot.accept(hotErrorHandler);
      }
    );

    if (isHotUpdate) {
      if (
        __react_refresh_utils__.isReactRefreshBoundary(prevExports) &&
        __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)
      ) {
        module.hot.invalidate();
      } else {
        __react_refresh_utils__.enqueueUpdate(
          /**
           * A function to dismiss the error overlay after performing React refresh.
           * @returns {void}
           */
          function updateCallback() {
            if (
              typeof __react_refresh_error_overlay__ !== 'undefined' &&
              __react_refresh_error_overlay__
            ) {
              __react_refresh_error_overlay__.clearRuntimeErrors();
            }
          }
        );
      }
    }
  } else {
    if (isHotUpdate && __react_refresh_utils__.isReactRefreshBoundary(prevExports)) {
      module.hot.invalidate();
    }
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js"), __webpack_require__(/*! ./node_modules/react-dev-utils/refreshOverlayInterop.js */ "./node_modules/react-dev-utils/refreshOverlayInterop.js")))

/***/ })

})
//# sourceMappingURL=main.00dae0d236c89ddf137a.hot-update.js.map