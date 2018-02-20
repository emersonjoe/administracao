webpackJsonp([0],{

/***/ "2XII":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = register;
exports.unregister = unregister;
// In production, we register a service worker to serve assets from local cache.

// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the "N+1" visit to a page, since previously
// cached resources are updated in the background.

// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.

var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
// [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' ||
// 127.0.0.1/8 is considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));

function register() {
  if ("production" === 'production' && 'serviceWorker' in navigator) {
    // The URL constructor is available in all browsers that support SW.
    var publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      // Our service worker won't work if PUBLIC_URL is on a different origin
      // from what our page is served on. This might happen if a CDN is used to
      // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
      return;
    }

    window.addEventListener('load', function () {
      var swUrl = process.env.PUBLIC_URL + '/service-worker.js';

      if (isLocalhost) {
        // This is running on localhost. Lets check if a service worker still exists or not.
        checkValidServiceWorker(swUrl);

        // Add some additional logging to localhost, pointing developers to the
        // service worker/PWA documentation.
        navigator.serviceWorker.ready.then(function () {
          console.log('This web app is being served cache-first by a service ' + 'worker. To learn more, visit https://goo.gl/SC7cgQ');
        });
      } else {
        // Is not local host. Just register service worker
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker.register(swUrl).then(function (registration) {
    registration.onupdatefound = function () {
      var installingWorker = registration.installing;
      installingWorker.onstatechange = function () {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the old content will have been purged and
            // the fresh content will have been added to the cache.
            // It's the perfect time to display a "New content is
            // available; please refresh." message in your web app.
            console.log('New content is available; please refresh.');
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.');
          }
        }
      };
    };
  }).catch(function (error) {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl).then(function (response) {
    // Ensure service worker exists, and that we really are getting a JS file.
    if (response.status === 404 || response.headers.get('content-type').indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(function (registration) {
        registration.unregister().then(function () {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl);
    }
  }).catch(function () {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(function (registration) {
      registration.unregister();
    });
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("W2nU")))

/***/ }),

/***/ "4Rz6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var ADD_TODO = exports.ADD_TODO = 'ADD_TODO';
var TOGGLE_TODO = exports.TOGGLE_TODO = 'TOGGLE_TODO';
var SET_VISIBILITY_FILTER = exports.SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

var VisibilityFilters = exports.VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/***/ }),

/***/ "5SO7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.visibilityFilter = visibilityFilter;
exports.todos = todos;

var _constants = __webpack_require__("4Rz6");

var _redux = __webpack_require__("2KeS");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//import { handleActions } from 'redux-actions';

var SHOW_ALL = _constants.VisibilityFilters.SHOW_ALL;
function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : SHOW_ALL;
  var action = arguments[1];

  switch (action.type) {
    case _constants.SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case _constants.ADD_TODO:
      {
        console.log('reducer ADD_TODO', _constants.ADD_TODO);
        console.log('action', action);
        return [].concat(_toConsumableArray(state), [{
          text: action.text,
          completed: false
        }]);
      }

    case _constants.TOGGLE_TODO:
      return state.map(function (todo, index) {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      });
    default:
      return state;
  }
}

// const todoApp = combineReducers({
//   visibilityFilter,
//   todos
// })

// export default todoApp

/***/ }),

/***/ "AI9e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _menuBar = __webpack_require__("nKUy");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_menuBar).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ "DVLJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = undefined;
exports.toggleTodo = toggleTodo;
exports.setVisibilityFilter = setVisibilityFilter;

var _redux = __webpack_require__("2KeS");

var _constants = __webpack_require__("4Rz6");

var addTodo = exports.addTodo = function addTodo(text) {
  console.log('text', text);
  console.log('ADD_TODO', _constants.ADD_TODO);
  return { type: _constants.ADD_TODO, text: text };
};

function toggleTodo(index) {
  return { type: _constants.TOGGLE_TODO, index: index };
}

function setVisibilityFilter(filter) {
  return { type: _constants.SET_VISIBILITY_FILTER, filter: filter };
}

/***/ }),

/***/ "Gv9F":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__("2KeS");

var _reducer = __webpack_require__("5SO7");

exports.default = (0, _redux.combineReducers)({
  todos: _reducer.todos,
  visibilityFilter: _reducer.visibilityFilter
});

/***/ }),

/***/ "QfOT":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    height: 60px;\n    min-height: 60px;\n    display: flex;\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 1px solid rgb(224, 224, 224);\n    border-bottom: 1px solid rgb(224, 224, 224);\n    background:#fff!important;\n    overflow: visible!important;\n    z-index: 100;\n    .breadcrumb-part{\n        height: 60px;\n        max-height: 60px;\n        overflow:hidden;\n        position:relative;\n\n        >div{\n            position:relative;\n            top:-5px;\n        }\n\n        button{\n            &.active{\n                span{\n                    font-size:14px;\n                    color:#980000!important;\n                    font-weight:bold!important;\n                }\n            }\n            span{\n                color:#757575!important;\n            }\n        }\n    }\n\n}\n'], ['\n    height: 100%;\n    height: 60px;\n    min-height: 60px;\n    display: flex;\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    border-top: 1px solid rgb(224, 224, 224);\n    border-bottom: 1px solid rgb(224, 224, 224);\n    background:#fff!important;\n    overflow: visible!important;\n    z-index: 100;\n    .breadcrumb-part{\n        height: 60px;\n        max-height: 60px;\n        overflow:hidden;\n        position:relative;\n\n        >div{\n            position:relative;\n            top:-5px;\n        }\n\n        button{\n            &.active{\n                span{\n                    font-size:14px;\n                    color:#980000!important;\n                    font-weight:bold!important;\n                }\n            }\n            span{\n                color:#757575!important;\n            }\n        }\n    }\n\n}\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    &.active{\n        span{\n            font-size:14px;\n            color:#980000!important;\n            font-weight:bold!important;\n        }\n        svg{\n            fill:#980000!important;\n        }\n    }\n'], ['\n    &.active{\n        span{\n            font-size:14px;\n            color:#980000!important;\n            font-weight:bold!important;\n        }\n        svg{\n            fill:#980000!important;\n        }\n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    padding: 0 10px;\n'], ['\n    display: flex;\n    align-items: center;\n    padding: 0 10px;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    background: #1dc3c8!important;\n    border:1px solid #1dc3c8!important;\n    color: #ffffff!important;\n    max-width:172px!important;\n    margin: 0 10px!important;\n    padding:0 36px!important;\n    box-sizing:border-box!important;\n\n    div{\n        display:inline-block!important;\n        width:100%!important;\n        height: 100%!important;\n\n        span{\n            font-size:12px!important;\n            padding:0!important;\n        }\n    }\n'], ['\n    background: #1dc3c8!important;\n    border:1px solid #1dc3c8!important;\n    color: #ffffff!important;\n    max-width:172px!important;\n    margin: 0 10px!important;\n    padding:0 36px!important;\n    box-sizing:border-box!important;\n\n    div{\n        display:inline-block!important;\n        width:100%!important;\n        height: 100%!important;\n\n        span{\n            font-size:12px!important;\n            padding:0!important;\n        }\n    }\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    background: #fff!important;\n    border:1px solid #1dc3c8!important;\n    color: #1dc3c8!important;\n    max-width:auto!important;\n    margin: 0 10px!important;\n    padding:0 36px!important;\n\n    div{\n        display:inline-block!important;\n        width:100%!important;\n        height: 100%!important;\n\n        span{\n            font-size:12px!important;\n            padding:0!important;\n        }\n    }\n'], ['\n    background: #fff!important;\n    border:1px solid #1dc3c8!important;\n    color: #1dc3c8!important;\n    max-width:auto!important;\n    margin: 0 10px!important;\n    padding:0 36px!important;\n\n    div{\n        display:inline-block!important;\n        width:100%!important;\n        height: 100%!important;\n\n        span{\n            font-size:12px!important;\n            padding:0!important;\n        }\n    }\n']);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _createBrowserHistory = __webpack_require__("ciQf");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _Stepper = __webpack_require__("H3Px");

var _FlatButton = __webpack_require__("3oDM");

var _FlatButton2 = _interopRequireDefault(_FlatButton);

var _home = __webpack_require__("S5U3");

var _home2 = _interopRequireDefault(_home);

var _keyboardArrowRight = __webpack_require__("8Brn");

var _keyboardArrowRight2 = _interopRequireDefault(_keyboardArrowRight);

var _styledComponents = __webpack_require__("VEsJ");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
//import history from 'react-router/lib/hashHistory';


/*Components*/


/*Icons*/


/*Style*/

var BreadCrumb = _styledComponents2.default.div(_templateObject);

var StyledStepButton = (0, _styledComponents2.default)(_Stepper.StepButton)(_templateObject2);

var BreadCrumbButtonGroup = _styledComponents2.default.div(_templateObject3);

var BudgetButtonPrimary = (0, _styledComponents2.default)(_FlatButton2.default)(_templateObject4);

var BudgetButtonOutline = (0, _styledComponents2.default)(_FlatButton2.default)(_templateObject5);

var PageBreadCrumb = function (_React$Component) {
    _inherits(PageBreadCrumb, _React$Component);

    function PageBreadCrumb(props) {
        _classCallCheck(this, PageBreadCrumb);

        var _this = _possibleConstructorReturn(this, (PageBreadCrumb.__proto__ || Object.getPrototypeOf(PageBreadCrumb)).call(this, props));

        _this.state = {
            stepIndex: _this.props && _this.props.initialItem ? _this.props.initialItem : 1,
            badgeNumber: 0
        };
        return _this;
    }

    _createClass(PageBreadCrumb, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            //const { stepIndex } = this.state;

            var stepIndex = this.props && this.props.initialItem ? this.props.initialItem : 1;
            console.log('this.state', this.state);
            var steps = this.props.steps;


            return _react2.default.createElement(
                BreadCrumb,
                null,
                _react2.default.createElement(
                    'div',
                    { className: 'breadcrumb-part' },
                    _react2.default.createElement(
                        _Stepper.Stepper,
                        {
                            linear: false,
                            connector: _react2.default.createElement(_keyboardArrowRight2.default, { color: '#e00303' }),
                            activeStep: stepIndex
                        },
                        _react2.default.createElement(
                            _Stepper.Step,
                            null,
                            _react2.default.createElement(StyledStepButton, {
                                onClick: function onClick() {
                                    return _this2.setState({ stepIndex: 0 });
                                },
                                icon: _react2.default.createElement(_home2.default, {
                                    color: '#9e9e9e',
                                    hoverColor: '#b71c1c'
                                }),
                                className: this.state.stepIndex == 0 ? 'active' : ''
                            })
                        ),
                        steps.map(function (step, index) {
                            return _react2.default.createElement(
                                _Stepper.Step,
                                { key: index },
                                _react2.default.createElement(
                                    StyledStepButton,
                                    {
                                        onClick: function onClick() {
                                            return _this2.setState({
                                                stepIndex: step.index
                                            }), _createBrowserHistory2.default.push({
                                                pathname: step.pathname
                                            });
                                        },
                                        icon: null,
                                        className: _this2.state.stepIndex == step.index ? 'active' : ''
                                    },
                                    step.title
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return PageBreadCrumb;
}(_react2.default.Component);

exports.default = PageBreadCrumb;

/***/ }),

/***/ "Rva3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("RH2O");

var _reselect = __webpack_require__("bndy");

var _breadCrumbDinamic = __webpack_require__("QfOT");

var _breadCrumbDinamic2 = _interopRequireDefault(_breadCrumbDinamic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = (0, _reselect.createStructuredSelector)({});

var actions = {};

exports.default = (0, _reactRedux.connect)(mapState, actions)(_breadCrumbDinamic2.default);

/***/ }),

/***/ "U/vd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__("U9Ys");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _reactRedux = __webpack_require__("RH2O");

var _pageWrapper = __webpack_require__("xe6J");

var _pageWrapper2 = _interopRequireDefault(_pageWrapper);

var _breadCrumbDinamic = __webpack_require__("Rva3");

var _breadCrumbDinamic2 = _interopRequireDefault(_breadCrumbDinamic);

var _menuBar = __webpack_require__("AI9e");

var _menuBar2 = _interopRequireDefault(_menuBar);

var _headerBar = __webpack_require__("uMfu");

var _headerBar2 = _interopRequireDefault(_headerBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * A simple example of `AppBar` with an icon on the right.
 * By default, the left icon is a navigation-menu.
 */
var Home = function (_React$Component) {
    _inherits(Home, _React$Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            console.log('addTodo', this.props.addTodo);

            var today = new Date();
            var day = today.getDay();
            this.props.addTodo(today);
        }
    }, {
        key: 'render',
        value: function render() {
            //índice "0" é o Home
            var breadCrumbSteps = [{
                index: 1,
                title: 'Gerenciamento de Orçamentos',
                pathname: 'budget-manager/budget'
            }, {
                index: 2,
                title: 'Ações',
                pathname: 'budget-manager/actions-parts'
            }, {
                index: 3,
                title: 'Dell',
                pathname: 'budget-manager/actions-parts-details'
            }];

            console.log('props', this.props);
            var titulo = this.props.bar ? this.props.bar.toString() : 'vazio';
            console.log('titulo', titulo);
            console.log('breadCrumbSteps', breadCrumbSteps);
            //this.props.bar ? this.props.bar :
            return _react2.default.createElement(
                _pageWrapper2.default,
                null,
                _react2.default.createElement(_headerBar2.default, { profileUser: 'Camila Bueno', initialMenu: 2 }),
                _react2.default.createElement(_breadCrumbDinamic2.default, {
                    initialItem: 3,
                    lastPath: 'Ações',
                    module: 'ActionsParts',

                    steps: breadCrumbSteps
                }),
                _react2.default.createElement(_AppBar2.default, {
                    title: titulo,
                    iconClassNameRight: 'muidocs-icon-navigation-expand-more'
                })
            );
        }
    }]);

    return Home;
}(_react2.default.Component);

exports.default = Home;

/***/ }),

/***/ "Xd2d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBarState = undefined;

var _reselect = __webpack_require__("bndy");

// selector
var getBar = function getBar(state) {

  return state.todos && state.todos.length && state.todos[0].text;
};
// reselect function
var getBarState = exports.getBarState = (0, _reselect.createSelector)([getBar], function (bar) {
  return bar;
});

/***/ }),

/***/ "gXwj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
const routes = [
    {
        path: 'budget-manager',
        indexRoute: {
            onEnter(nextState, replace) {
                replace({ pathname: '/budget-manager/budget' });
            }
        },
        childRoutes: [
            {
                path: '/budget-manager/budget',
                getComponent(nextState, cb) {
                    new Promise(function(resolve) { resolve(); }).then((require => {
                            cb(null, __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./containers/home\""); e.code = 'MODULE_NOT_FOUND'; throw e; }())).default);
                        }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
                }
            }
        ]
    }
];

/* harmony default export */ __webpack_exports__["default"] = (routes);


/***/ }),

/***/ "hqmG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__("O27J");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _MuiThemeProvider = __webpack_require__("7L6O");

var _MuiThemeProvider2 = _interopRequireDefault(_MuiThemeProvider);

var _home = __webpack_require__("q29b");

var _home2 = _interopRequireDefault(_home);

var _redux = __webpack_require__("2KeS");

var _reducers = __webpack_require__("Gv9F");

var _reducers2 = _interopRequireDefault(_reducers);

var _registerServiceWorker = __webpack_require__("2XII");

var _registerServiceWorker2 = _interopRequireDefault(_registerServiceWorker);

var _routes = __webpack_require__("gXwj");

var _routes2 = _interopRequireDefault(_routes);

var _router = __webpack_require__("j6IV");

var _router2 = _interopRequireDefault(_router);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Provider = __webpack_require__("RH2O").Provider;

var store = (0, _redux.createStore)(_reducers2.default);

console.log(store.getState());
(0, _router2.default)(_routes2.default);

_reactDom2.default.render(_react2.default.createElement(
    Provider,
    { store: store },
    _react2.default.createElement(
        _MuiThemeProvider2.default,
        null,
        _react2.default.createElement(_home2.default, null)
    )
), document.body);

/***/ }),

/***/ "j6IV":
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (22:8)\nYou may need an appropriate loader to handle this file type.\n| const wrapDecorator = (Parent, Child) => {\r\n|     const Component = props =>\r\n|         <Parent>\r\n|             {typeof Child === 'string'\r\n|                 ? <Child>\r");

/***/ }),

/***/ "nKUy":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__("U9Ys");

var _AppBar2 = _interopRequireDefault(_AppBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  root: {
    width: '300px',
    height: '730px',
    backgroundColor: '#212121'
  }
};

/**
 * A simple example of `AppBar` with an icon on the right. By default, the left
 * icon is a navigation-menu.
 */
var AppBarIcon = function AppBarIcon() {
  return _react2.default.createElement(_AppBar2.default, {
    style: styles.root });
};

exports.default = AppBarIcon;

/***/ }),

/***/ "om/2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    height: 100%;\n    height: 60px;\n    min-height: 60px;\n    display: flex !important;\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fafafa;\n\n    hgroup {\n        display: flex;\n        justify-content: flex-start;\n        height: 100%;\n        min-height: 60px;\n\n        .containerMenuHeader {\n            width: 166px !important;\n            height: 86px !important;\n            padding: 0 !important;\n            background: #fff !important;\n            position: absolute !important;\n            top: 56px !important;\n            z-index: 9999 !important;\n            right: -20px !important;\n            display: none !important;\n            box-shadow: 0px 10px 25px -10px #888888;\n\n            .menuDropProfile {\n                list-style: none !important;\n                padding: 0px !important;\n                height: 86px !important;\n                li {\n                    width: 166px !important;\n                    min-height: 43px !important;\n                    &:last-child {\n                        a {\n                            border-bottom: none !important;\n                        }\n                    }\n                    a {\n                        text-align: left !important;\n                        display: block !important;\n                        width: 166px !important;\n                        min-height: 43px !important;\n                        line-height: 43px !important;\n                        padding: 0 12px !important;\n                        color: #757575 !important;\n                        font-size: 12px !important;\n                        border-bottom: 1px solid #f4f4f4;\n                        &:hover {\n                            background: #fafafa !important;\n                            text-decoration: none !important;\n                        }\n                        svg {\n                            width: 22px !important;\n                            height: 22px !important;\n                            margin: 0 2px 0 0 !important;\n                            padding: 3px 0 0 0 !important;\n                            transform: translateY(4px) !important;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    /*Logo Santander*/\n    .logo-santander {\n        width: 134.5px;\n        height: 25px;\n        margin: 15px 77px 20px 20px;\n        display: inline-block;\n        object-fit: contain;\n        background: no-repeat\n            url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMTIiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCAzMTIgNTgiPiAgICA8ZyBmaWxsPSIjREEyRTQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPHBhdGggZD0iTTQzLjcxNiAyNS42OXMwIC43NzMtLjMyNSAxLjU5NWMxMC45NjggMi4zMTUgMTguNzM2IDcuNzcxIDE4LjczNiAxNC4xNjIgMCA4LjU5NC0xMy44NSAxNS43MDMtMzEuMDEyIDE1LjcwM0MxMy41ODYgNTcuMTUgMCA1MC4xNTggMCA0MS43NzdjMC02LjM4NyA4LjQxNy0xMS41NzIgMTguNTc2LTE0LjMyMiAwIDMuNTI1IDExLjU1NyAxNC43MTEgMTEuODM1IDE5LjIyNC4wMzMuNTE4LjEzNC45NTYgMCAxLjQ4OSAyLjUtMS4zMjIgMi41LTUuNDU2IDIuNS01LjQ1NiAwLTkuODA0LTExLjI0Mi0xNC4xNTYtMTEuMjQyLTIzLjc5NyAwLTMuNzQ4IDEuNzQxLTYuNSAzLjMxMS03LjI3djIuNjk3YzAgNi45OTcgMTIuMTY0IDE0LjgxOSAxMi4xNjQgMjEuMjExdjIuMDk0YzIuODI3LTEuMSAyLjgyNy02LjMzNyAyLjgyNy02LjMzNyAwLTguODE0LTExLjI5Ni0xMy43MTgtMTEuMjk2LTIzLjggMC0zLjc0MyAxLjczNi02LjQ5NiAzLjMxMS03LjI3MnYyLjcwM2MwIDYuOTk0IDExLjczIDE0Ljc2MyAxMS43MyAyMi43NDl6TTg2Ljc3NyA1NC40NDFjLTUuOTE2IDAtMTAuMjAyLTEuNzA1LTEwLjIwMi0xLjcwNVY0Mi4zMjhoMS40NjVjLjc1OCA1LjUwMyA0Ljg4NCA5LjY4NyA5LjYwNCA5LjY4NyA0LjcyNCAwIDguMDM1LTIuNjQxIDguMDM1LTYuODI1IDAtNC40Ni00LjM5OC02LjQ5NS03LjMyOC03Ljk4bC00LjIzMy0yLjE0OWMtNC4wMTYtMi4wMzYtNy4yNy01LjM0NC03LjI3LTkuOTY1IDAtNS43OCA0LjIzMy0xMC43MzUgMTIuMzE2LTEwLjczNSA1LjUzNiAwIDEwLjA5NCAxLjg3MyAxMC4wOTQgMS44NzN2OS4zaC0xLjQ2NWMtLjg2OC00Ljk1My0zLjU4MS04Ljg2Mi05LjExNy04Ljg2Mi00LjEyNSAwLTYuNTY1IDIuODY1LTYuNTY1IDUuNzgxIDAgMy44IDIuNjAzIDUuNTA0IDUuNjQyIDcuMDQ3bDQuMjM2IDIuMTQ0YzMuODUgMS45ODYgOC42MjcgNS4yODkgOC42MjcgMTAuOTA1IDAgNy4xNTUtNC44ODYgMTEuODkyLTEzLjgzOSAxMS44OTJNMTExLjkwMyA1NC4yMTdjLTMuNjkgMC02LjA3OC0yLjQ3OC02LjA3OC02LjE2MiAwLTIuNjQ0IDEuOS00LjY4MSA2LjA3OC02LjIyNGw3LjMyOC0yLjY5NXYtMi4zMTdjMC0zLjQ2NC0xLjU3NC01LjYxMi0zLjk2Mi01LjYxMi0xLjYzMSAwLTMuMjU3LjgyNi00LjA3MyAyLjE0OC0uMzIyLjQ5Mi0uMzc3IDEuMjEzLS4zNzcgMS43NTkgMCAuOTM1LjU5NCAyLjAzNi41OTQgMi4wMzZsLTMuNTc5IDEuNjUzYy0uNDM1LS43NjgtLjk3Ny0xLjkyNC0uOTc3LTMuMDgzIDAtLjIxNy4wNTMtLjQzOS4wNTMtLjYwNi4yNzMtMS45ODEgMS45NTUtMy4zMDIgNC4yMzQtNC42NzUgMi4yMjYtMS4zNzYgNC4xMjUtMS43NjYgNS40OC0xLjc2NiA2Ljg0IDAgOC4wMzIgNS41MDQgOC4wMzIgNy4zMjN2MTEuMzk3YzAgMS44MTMuMTY1IDIuOTczIDEuNjI4IDIuOTczLjQzNCAwIC43MDUgMCAxLjMwNC0uMjIxbDEuMzA0LS40NDF2MS42NTFsLTcuNjAxIDIuODYyYy0xLjEzOS0uODIxLTEuNjg0LTIuMzExLTEuODk3LTMuNTc1LTEuNzkxIDEuNTQzLTQuODg0IDMuNTc1LTcuNDkxIDMuNTc1bTIuMjI1LTExLjEyMWMtMS4xNDEuNDk5LTMuMTQ5IDEuNDM0LTMuMTQ5IDQuMDc1IDAgMS40MzEuODE2IDMuNzQ3IDMuNjM5IDMuNzQ3IDEuMzU4IDAgMy4yNTUtLjc3MyA0LjYxMy0xLjg3NHYtOC4xNWwtNS4xMDMgMi4yMDJNMTMwLjU3MiA1My42NjZ2LTEuMzE0bDEuNzkxLS4zMzdjMS4wODQtLjIyMiAxLjg0My0xLjA0NCAxLjg0My0yLjE0OVYzNS4xNjljMC0xLjI2NC0uNTk0LTEuOTI3LTEuNjgzLTEuOTI3LS4zNzcgMC0uODE0LjA1OC0xLjI0Ny4yMjFsLS43MDQuMjc1di0xLjY1MWw3LjgxMy0zLjQxNGgxLjE0MXY0LjA3N2MyLjM4NC0yLjcwMyA1LjIwOC00LjA3NyA3LjcwNi00LjA3NyA1LjUzNCAwIDguMTkzIDQuMDIyIDguMTkzIDguNjk5djEyLjQ5NGMwIDEuMTA1LjgxNSAxLjk4NiAxLjkwMiAyLjE0OWwxLjg0My4zMzd2MS4zMTRoLTEyLjkxNnYtMS4zMTRsMS43OTEtLjMzN2MxLjA4NC0uMjIyIDEuOTU0LTEuMDQ0IDEuOTU0LTIuMTQ5VjM3LjQzYzAtMS42NTYtLjQzNi01LjM0My00Ljc3Ny01LjM0My0yLjM4OCAwLTQuMzk2IDEuNDg5LTUuNTg4IDIuNTg5djE1LjE5YzAgMS4xMDUuODY3IDEuOTI3IDEuOTUzIDIuMTQ5bDEuNzg5LjMzN3YxLjMxNGgtMTIuODA0TTE3MC4yOTMgMzIuMDMzVjQ1LjY5YzAgMy4wMjUgMS41NzYgNC42NzYgMy44NTMgNC42NzYuOTI0IDAgMi4zODgtLjI3NSAzLjc0Ny0xLjA0NmwuNTk1IDEuMzIyLTQuODg1IDMuMTM3cy0uOTc2LjE2My0xLjQ2LjE2M2MtNC43MjQgMC03LjI3Ni0yLjgwNC03LjI3Ni04Ljc1MlYzMi4wMzNoLTMuOTZWMzAuNjZzNS45NjgtMi4zMTYgOC4zMDItNy45ODhoMS4wODR2Ni45OTFoOC41NzZsLS45NzYgMi4zN2gtNy42ek0xODcuMDQ5IDU0LjIxN2MtMy42OTMgMC02LjA3Ni0yLjQ3OC02LjA3Ni02LjE2MiAwLTIuNjQ0IDEuODk3LTQuNjgxIDYuMDc2LTYuMjI0bDcuMzI2LTIuNjk1di0yLjMxN2MwLTMuNDY0LTEuNTcyLTUuNjEyLTMuOTYxLTUuNjEyLTEuNjI4IDAtMy4yNi44MjYtNC4wNjkgMi4xNDgtLjMyNi40OTItLjM4MyAxLjIxMy0uMzgzIDEuNzU5IDAgLjkzNS42MDIgMi4wMzYuNjAyIDIuMDM2bC0zLjU4NSAxLjY1M2MtLjQzNS0uNzY4LS45NzUtMS45MjQtLjk3NS0zLjA4MyAwLS4yMTcuMDU2LS40MzkuMDU2LS42MDYuMjY3LTEuOTgxIDEuOTUtMy4zMDIgNC4yMjgtNC42NzUgMi4yMjktMS4zNzYgNC4xMjYtMS43NjYgNS40NzktMS43NjYgNi44NDMgMCA4LjAzOCA1LjUwNCA4LjAzOCA3LjMyM3YxMS4zOTdjMCAxLjgxMy4xNjIgMi45NzMgMS42MjYgMi45NzMuNDMyIDAgLjcwOCAwIDEuMzAxLS4yMjFsMS4zMDQtLjQ0MXYxLjY1MWwtNy41OTUgMi44NjJjLTEuMTQxLS44MjEtMS42ODItMi4zMTEtMS45MDEtMy41NzUtMS43OSAxLjU0My00Ljg4NCAzLjU3NS03LjQ5MSAzLjU3NW0yLjIyNS0xMS4xMjFjLTEuMTM4LjQ5OS0zLjE0NiAxLjQzNC0zLjE0NiA0LjA3NSAwIDEuNDMxLjgxIDMuNzQ3IDMuNjM2IDMuNzQ3IDEuMzU2IDAgMy4yNTctLjc3MyA0LjYxMS0xLjg3NHYtOC4xNWwtNS4xMDEgMi4yMDJNMjA1LjcxNSA1My42NjZ2LTEuMzE0bDEuNzk0LS4zMzdjMS4wODMtLjIyMiAxLjg0NS0xLjA0NCAxLjg0NS0yLjE0OVYzNS4xNjljMC0xLjI2NC0uNi0xLjkyNy0xLjY4NC0xLjkyNy0uMzc4IDAtLjgxMy4wNTgtMS4yNDguMjIxbC0uNzA3LjI3NXYtMS42NTFsNy44MTctMy40MTRoMS4xNDJ2NC4wNzdjMi4zODctMi43MDMgNS4yMDctNC4wNzcgNy43MDItNC4wNzcgNS41MzQgMCA4LjE5NiA0LjAyMiA4LjE5NiA4LjY5OXYxMi40OTRjMCAxLjEwNS44MTQgMS45ODYgMS44OTkgMi4xNDlsMS44NDIuMzM3djEuMzE0aC0xMi45MTJ2LTEuMzE0bDEuNzkyLS4zMzdjMS4wODQtLjIyMiAxLjk1MS0xLjA0NCAxLjk1MS0yLjE0OVYzNy40M2MwLTEuNjU2LS40MzQtNS4zNDMtNC43NzUtNS4zNDMtMi4zOSAwLTQuMzk1IDEuNDg5LTUuNTkxIDIuNTg5djE1LjE5YzAgMS4xMDUuODczIDEuOTI3IDEuOTUzIDIuMTQ5bDEuNzkzLjMzN3YxLjMxNGgtMTIuODA5TTI0OC4xIDU0LjIxN2MtNS4xMDEgMC0xMS4yMzYtMy44NTEtMTEuMjM2LTEyLjIxOCAwLTcuMzIzIDUuNTg5LTEzLjMyNiAxMy4wODItMTMuMzI2IDIuNDk2IDAgNC4yOS40OTggNS41OSAxLjA0OVYxNy4xMTRjMC0xLjMyMy0uNzA1LTEuNzA3LTEuNTc1LTEuNzA3LS40ODggMC0xLjAzLjExMS0xLjUxOS4yNzNsLTEuMDg3LjM4N3YtMS42NTRsOC40NzEtMy42M2gxLjEzOHYzNi4yOGMwIDIuMDk0LjMyMiAzLjMwMyAxLjc5IDMuMzAzLjQzNCAwIC43MDMgMCAxLjMtLjIyMWwxLjMwMy0uNDQxdjEuNjUxbC03LjU5NiAyLjg2MmMtMS4xOTMtLjgyMS0xLjc5MS0yLjM2NS0yLjA2MS0zLjYzLTEuNDEzIDEuNTQtMy45NjQgMy42My03LjYgMy42M20yLjQ0MS0yMy4yMjhjLTMuOTA1IDAtNy45MjMgMi41MjktNy45MjMgOS45MDUgMCA2LjE2OSAzLjA0MSA5LjkxIDcuODE2IDkuOTEgMi44NzcgMCA0LjY2OS0xLjcwNiA1LjEwMi0yLjU4N1YzMy45MDVjLS43MDUtMS44MTgtMi43MTMtMi45MTYtNC45OTUtMi45MTZNMjczLjI4IDM5LjQ2NnYuMjc1Yy0uMDU0IDcuMzIyIDQuMDcyIDExLjAwOSA5LjIyNSAxMS4wMDkgMi42MDQgMCA0Ljk5My0uOTkzIDYuODkzLTIuNDc0djIuMTk5YTEzLjk0OSAxMy45NDkgMCAwIDEtOS41NSAzLjc0MmMtOC40NjUgMC0xMi4yMS02LjQzOC0xMi4yMS0xMi41NDkgMC03LjE2MiA1LjM3My0xMi45OTUgMTIuMzE1LTEyLjk5NSA1LjcgMCAxMC4xNTEgNC4wNzcgMTAuMTUxIDEwLjA3N3YuNzE2SDI3My4yOHptMTEuMTI0LTIuMjU2di0uMTA5YzAtNC4xMy0yLjI3NS02LjExNi00Ljk5My02LjExNi0zLjAzOSAwLTUuMzE4IDIuMDQtNS45NjkgNi4yMjVoMTAuOTYyek0yOTMuMzA1IDUzLjY2NnYtMS4zMTRsMS43ODgtLjMzN2MxLjAzNi0uMjIyIDEuODQ3LTEuMDQ0IDEuODQ3LTIuMTQ5VjM1LjE2OWMwLTEuMjY0LS41OTYtMS45MjctMS42ODEtMS45MjctLjM3OSAwLS44MTUuMDU4LTEuMjQ2LjIyMWwtLjcwOC4yNzV2LTEuNjUxbDcuNzA0LTMuNDE0aDEuMTQzdjUuMzQxYzEuOTUyLTMuODUzIDQuMjg3LTUuNDQ5IDYuOTQ2LTUuNDQ5IDIuMTcyIDAgMi43MTMuNTUxIDIuNzEzLjU1MXY1LjgzNmgtMS4wODJjLS4yNzQtMS41NDMtMS4zMDYtMi4zMTEtMi45MzItMi4zMTEtMS43MzcgMC0zLjkwNy40OTItNS40MjggMy42ODR2MTMuNTQxYzAgMS4xMDUgMS4wODUgMS45ODYgMi4xMTcgMi4xNDlsMi42MDcuMzM3djEuMzE0aC0xMy43ODgiLz4gICAgPC9nPjwvc3ZnPg==);\n        background-position: center center;\n        background-size: 134.5px 25px;\n        cursor: pointer;\n    }\n\n    /*Icone de Busca/Pesquisa*/\n    .search {\n        width: 25.4px;\n        height: 100%;\n        min-height: 60px;\n        background-position: center center !important;\n        background: no-repeat\n            url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNFMDAzMDMiIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwIDAgMTYgOS41IDYuNSA2LjUgMCAxIDAgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiLz4gICAgPC9nPjwvc3ZnPg==);\n        background-size: 24px 24px;\n        position: relative;\n        cursor: pointer;\n        transition: background-size 0.3s ease;\n        margin: 0 15px 0 0;\n        &:before {\n            content: "";\n            display: inline-block;\n            width: 25.4px;\n            height: 2px;\n            background-color: #e00303;\n            position: absolute;\n            bottom: 0;\n        }\n\n        &:hover {\n            background-size: 27px 27px;\n        }\n    }\n\n    /*Menu-TABS*/\n    .header-tabs {\n        min-width: 430px;\n        height: 100%;\n        min-height: 60px;\n        > div:nth-child(1) {\n            height: 100%;\n            min-height: 60px;\n            background-color: transparent !important;\n            button {\n                width: auto;\n                font-family: OpenSans;\n                font-size: 14px;\n                text-align: left;\n                color: #757575 !important;\n                margin: 0 15 !important;\n                text-transform: none !important;\n            }\n        }\n        > div:nth-child(2) {\n            height: 100%;\n            min-height: 60px;\n            div {\n                background-color: #e00303 !important;\n            }\n        }\n    }\n\n    /*Profile*/\n    .profile-user {\n        height: 100%;\n        min-height: 60px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n\n        > div {\n            padding: 0 !important;\n            svg {\n                color: #e00303 !important;\n            }\n            > span {\n                transform: scale(0.7);\n                background-color: #fafafa !important;\n                color: #e00303 !important;\n                border: 1px solid #e00303 !important;\n                align-items: normal !important;\n                padding-top: 2px !important;\n            }\n        }\n\n        .menu-profile {\n            &:hover {\n                .containerMenuHeader {\n                    display: inline-block !important;\n                }\n            }\n            display: inline-block;\n            height: 100%;\n            min-height: 60px;\n            position: relative;\n            cursor: pointer;\n            margin: 0 38px 0 18px;\n            line-height: 60px;\n            font-family: Roboto, Helvetica, sans-serif;\n            font-size: 12px;\n            font-weight: bold !important;\n            text-align: right;\n            color: #980000 !important;\n            text-decoration: none;\n            &:after {\n                content: "";\n                display: inline-block;\n                position: absolute;\n                top: 50%;\n                transform: translateY(-50%);\n                right: -25px;\n                width: 16px;\n                height: 16px;\n                background-size: 16px 16px;\n                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0yNCAwdjI0SDBWMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNFMDAzMDMiIGQ9Ik0xOSA4SDVsNyAxMXoiLz4gICAgPC9nPjwvc3ZnPg==);\n            }\n        }\n    }\n'], ['\n    height: 100%;\n    height: 60px;\n    min-height: 60px;\n    display: flex !important;\n    position: relative;\n    justify-content: space-between;\n    align-items: center;\n    background-color: #fafafa;\n\n    hgroup {\n        display: flex;\n        justify-content: flex-start;\n        height: 100%;\n        min-height: 60px;\n\n        .containerMenuHeader {\n            width: 166px !important;\n            height: 86px !important;\n            padding: 0 !important;\n            background: #fff !important;\n            position: absolute !important;\n            top: 56px !important;\n            z-index: 9999 !important;\n            right: -20px !important;\n            display: none !important;\n            box-shadow: 0px 10px 25px -10px #888888;\n\n            .menuDropProfile {\n                list-style: none !important;\n                padding: 0px !important;\n                height: 86px !important;\n                li {\n                    width: 166px !important;\n                    min-height: 43px !important;\n                    &:last-child {\n                        a {\n                            border-bottom: none !important;\n                        }\n                    }\n                    a {\n                        text-align: left !important;\n                        display: block !important;\n                        width: 166px !important;\n                        min-height: 43px !important;\n                        line-height: 43px !important;\n                        padding: 0 12px !important;\n                        color: #757575 !important;\n                        font-size: 12px !important;\n                        border-bottom: 1px solid #f4f4f4;\n                        &:hover {\n                            background: #fafafa !important;\n                            text-decoration: none !important;\n                        }\n                        svg {\n                            width: 22px !important;\n                            height: 22px !important;\n                            margin: 0 2px 0 0 !important;\n                            padding: 3px 0 0 0 !important;\n                            transform: translateY(4px) !important;\n                        }\n                    }\n                }\n            }\n        }\n    }\n\n    /*Logo Santander*/\n    .logo-santander {\n        width: 134.5px;\n        height: 25px;\n        margin: 15px 77px 20px 20px;\n        display: inline-block;\n        object-fit: contain;\n        background: no-repeat\n            url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMTIiIGhlaWdodD0iNTgiIHZpZXdCb3g9IjAgMCAzMTIgNTgiPiAgICA8ZyBmaWxsPSIjREEyRTQwIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPHBhdGggZD0iTTQzLjcxNiAyNS42OXMwIC43NzMtLjMyNSAxLjU5NWMxMC45NjggMi4zMTUgMTguNzM2IDcuNzcxIDE4LjczNiAxNC4xNjIgMCA4LjU5NC0xMy44NSAxNS43MDMtMzEuMDEyIDE1LjcwM0MxMy41ODYgNTcuMTUgMCA1MC4xNTggMCA0MS43NzdjMC02LjM4NyA4LjQxNy0xMS41NzIgMTguNTc2LTE0LjMyMiAwIDMuNTI1IDExLjU1NyAxNC43MTEgMTEuODM1IDE5LjIyNC4wMzMuNTE4LjEzNC45NTYgMCAxLjQ4OSAyLjUtMS4zMjIgMi41LTUuNDU2IDIuNS01LjQ1NiAwLTkuODA0LTExLjI0Mi0xNC4xNTYtMTEuMjQyLTIzLjc5NyAwLTMuNzQ4IDEuNzQxLTYuNSAzLjMxMS03LjI3djIuNjk3YzAgNi45OTcgMTIuMTY0IDE0LjgxOSAxMi4xNjQgMjEuMjExdjIuMDk0YzIuODI3LTEuMSAyLjgyNy02LjMzNyAyLjgyNy02LjMzNyAwLTguODE0LTExLjI5Ni0xMy43MTgtMTEuMjk2LTIzLjggMC0zLjc0MyAxLjczNi02LjQ5NiAzLjMxMS03LjI3MnYyLjcwM2MwIDYuOTk0IDExLjczIDE0Ljc2MyAxMS43MyAyMi43NDl6TTg2Ljc3NyA1NC40NDFjLTUuOTE2IDAtMTAuMjAyLTEuNzA1LTEwLjIwMi0xLjcwNVY0Mi4zMjhoMS40NjVjLjc1OCA1LjUwMyA0Ljg4NCA5LjY4NyA5LjYwNCA5LjY4NyA0LjcyNCAwIDguMDM1LTIuNjQxIDguMDM1LTYuODI1IDAtNC40Ni00LjM5OC02LjQ5NS03LjMyOC03Ljk4bC00LjIzMy0yLjE0OWMtNC4wMTYtMi4wMzYtNy4yNy01LjM0NC03LjI3LTkuOTY1IDAtNS43OCA0LjIzMy0xMC43MzUgMTIuMzE2LTEwLjczNSA1LjUzNiAwIDEwLjA5NCAxLjg3MyAxMC4wOTQgMS44NzN2OS4zaC0xLjQ2NWMtLjg2OC00Ljk1My0zLjU4MS04Ljg2Mi05LjExNy04Ljg2Mi00LjEyNSAwLTYuNTY1IDIuODY1LTYuNTY1IDUuNzgxIDAgMy44IDIuNjAzIDUuNTA0IDUuNjQyIDcuMDQ3bDQuMjM2IDIuMTQ0YzMuODUgMS45ODYgOC42MjcgNS4yODkgOC42MjcgMTAuOTA1IDAgNy4xNTUtNC44ODYgMTEuODkyLTEzLjgzOSAxMS44OTJNMTExLjkwMyA1NC4yMTdjLTMuNjkgMC02LjA3OC0yLjQ3OC02LjA3OC02LjE2MiAwLTIuNjQ0IDEuOS00LjY4MSA2LjA3OC02LjIyNGw3LjMyOC0yLjY5NXYtMi4zMTdjMC0zLjQ2NC0xLjU3NC01LjYxMi0zLjk2Mi01LjYxMi0xLjYzMSAwLTMuMjU3LjgyNi00LjA3MyAyLjE0OC0uMzIyLjQ5Mi0uMzc3IDEuMjEzLS4zNzcgMS43NTkgMCAuOTM1LjU5NCAyLjAzNi41OTQgMi4wMzZsLTMuNTc5IDEuNjUzYy0uNDM1LS43NjgtLjk3Ny0xLjkyNC0uOTc3LTMuMDgzIDAtLjIxNy4wNTMtLjQzOS4wNTMtLjYwNi4yNzMtMS45ODEgMS45NTUtMy4zMDIgNC4yMzQtNC42NzUgMi4yMjYtMS4zNzYgNC4xMjUtMS43NjYgNS40OC0xLjc2NiA2Ljg0IDAgOC4wMzIgNS41MDQgOC4wMzIgNy4zMjN2MTEuMzk3YzAgMS44MTMuMTY1IDIuOTczIDEuNjI4IDIuOTczLjQzNCAwIC43MDUgMCAxLjMwNC0uMjIxbDEuMzA0LS40NDF2MS42NTFsLTcuNjAxIDIuODYyYy0xLjEzOS0uODIxLTEuNjg0LTIuMzExLTEuODk3LTMuNTc1LTEuNzkxIDEuNTQzLTQuODg0IDMuNTc1LTcuNDkxIDMuNTc1bTIuMjI1LTExLjEyMWMtMS4xNDEuNDk5LTMuMTQ5IDEuNDM0LTMuMTQ5IDQuMDc1IDAgMS40MzEuODE2IDMuNzQ3IDMuNjM5IDMuNzQ3IDEuMzU4IDAgMy4yNTUtLjc3MyA0LjYxMy0xLjg3NHYtOC4xNWwtNS4xMDMgMi4yMDJNMTMwLjU3MiA1My42NjZ2LTEuMzE0bDEuNzkxLS4zMzdjMS4wODQtLjIyMiAxLjg0My0xLjA0NCAxLjg0My0yLjE0OVYzNS4xNjljMC0xLjI2NC0uNTk0LTEuOTI3LTEuNjgzLTEuOTI3LS4zNzcgMC0uODE0LjA1OC0xLjI0Ny4yMjFsLS43MDQuMjc1di0xLjY1MWw3LjgxMy0zLjQxNGgxLjE0MXY0LjA3N2MyLjM4NC0yLjcwMyA1LjIwOC00LjA3NyA3LjcwNi00LjA3NyA1LjUzNCAwIDguMTkzIDQuMDIyIDguMTkzIDguNjk5djEyLjQ5NGMwIDEuMTA1LjgxNSAxLjk4NiAxLjkwMiAyLjE0OWwxLjg0My4zMzd2MS4zMTRoLTEyLjkxNnYtMS4zMTRsMS43OTEtLjMzN2MxLjA4NC0uMjIyIDEuOTU0LTEuMDQ0IDEuOTU0LTIuMTQ5VjM3LjQzYzAtMS42NTYtLjQzNi01LjM0My00Ljc3Ny01LjM0My0yLjM4OCAwLTQuMzk2IDEuNDg5LTUuNTg4IDIuNTg5djE1LjE5YzAgMS4xMDUuODY3IDEuOTI3IDEuOTUzIDIuMTQ5bDEuNzg5LjMzN3YxLjMxNGgtMTIuODA0TTE3MC4yOTMgMzIuMDMzVjQ1LjY5YzAgMy4wMjUgMS41NzYgNC42NzYgMy44NTMgNC42NzYuOTI0IDAgMi4zODgtLjI3NSAzLjc0Ny0xLjA0NmwuNTk1IDEuMzIyLTQuODg1IDMuMTM3cy0uOTc2LjE2My0xLjQ2LjE2M2MtNC43MjQgMC03LjI3Ni0yLjgwNC03LjI3Ni04Ljc1MlYzMi4wMzNoLTMuOTZWMzAuNjZzNS45NjgtMi4zMTYgOC4zMDItNy45ODhoMS4wODR2Ni45OTFoOC41NzZsLS45NzYgMi4zN2gtNy42ek0xODcuMDQ5IDU0LjIxN2MtMy42OTMgMC02LjA3Ni0yLjQ3OC02LjA3Ni02LjE2MiAwLTIuNjQ0IDEuODk3LTQuNjgxIDYuMDc2LTYuMjI0bDcuMzI2LTIuNjk1di0yLjMxN2MwLTMuNDY0LTEuNTcyLTUuNjEyLTMuOTYxLTUuNjEyLTEuNjI4IDAtMy4yNi44MjYtNC4wNjkgMi4xNDgtLjMyNi40OTItLjM4MyAxLjIxMy0uMzgzIDEuNzU5IDAgLjkzNS42MDIgMi4wMzYuNjAyIDIuMDM2bC0zLjU4NSAxLjY1M2MtLjQzNS0uNzY4LS45NzUtMS45MjQtLjk3NS0zLjA4MyAwLS4yMTcuMDU2LS40MzkuMDU2LS42MDYuMjY3LTEuOTgxIDEuOTUtMy4zMDIgNC4yMjgtNC42NzUgMi4yMjktMS4zNzYgNC4xMjYtMS43NjYgNS40NzktMS43NjYgNi44NDMgMCA4LjAzOCA1LjUwNCA4LjAzOCA3LjMyM3YxMS4zOTdjMCAxLjgxMy4xNjIgMi45NzMgMS42MjYgMi45NzMuNDMyIDAgLjcwOCAwIDEuMzAxLS4yMjFsMS4zMDQtLjQ0MXYxLjY1MWwtNy41OTUgMi44NjJjLTEuMTQxLS44MjEtMS42ODItMi4zMTEtMS45MDEtMy41NzUtMS43OSAxLjU0My00Ljg4NCAzLjU3NS03LjQ5MSAzLjU3NW0yLjIyNS0xMS4xMjFjLTEuMTM4LjQ5OS0zLjE0NiAxLjQzNC0zLjE0NiA0LjA3NSAwIDEuNDMxLjgxIDMuNzQ3IDMuNjM2IDMuNzQ3IDEuMzU2IDAgMy4yNTctLjc3MyA0LjYxMS0xLjg3NHYtOC4xNWwtNS4xMDEgMi4yMDJNMjA1LjcxNSA1My42NjZ2LTEuMzE0bDEuNzk0LS4zMzdjMS4wODMtLjIyMiAxLjg0NS0xLjA0NCAxLjg0NS0yLjE0OVYzNS4xNjljMC0xLjI2NC0uNi0xLjkyNy0xLjY4NC0xLjkyNy0uMzc4IDAtLjgxMy4wNTgtMS4yNDguMjIxbC0uNzA3LjI3NXYtMS42NTFsNy44MTctMy40MTRoMS4xNDJ2NC4wNzdjMi4zODctMi43MDMgNS4yMDctNC4wNzcgNy43MDItNC4wNzcgNS41MzQgMCA4LjE5NiA0LjAyMiA4LjE5NiA4LjY5OXYxMi40OTRjMCAxLjEwNS44MTQgMS45ODYgMS44OTkgMi4xNDlsMS44NDIuMzM3djEuMzE0aC0xMi45MTJ2LTEuMzE0bDEuNzkyLS4zMzdjMS4wODQtLjIyMiAxLjk1MS0xLjA0NCAxLjk1MS0yLjE0OVYzNy40M2MwLTEuNjU2LS40MzQtNS4zNDMtNC43NzUtNS4zNDMtMi4zOSAwLTQuMzk1IDEuNDg5LTUuNTkxIDIuNTg5djE1LjE5YzAgMS4xMDUuODczIDEuOTI3IDEuOTUzIDIuMTQ5bDEuNzkzLjMzN3YxLjMxNGgtMTIuODA5TTI0OC4xIDU0LjIxN2MtNS4xMDEgMC0xMS4yMzYtMy44NTEtMTEuMjM2LTEyLjIxOCAwLTcuMzIzIDUuNTg5LTEzLjMyNiAxMy4wODItMTMuMzI2IDIuNDk2IDAgNC4yOS40OTggNS41OSAxLjA0OVYxNy4xMTRjMC0xLjMyMy0uNzA1LTEuNzA3LTEuNTc1LTEuNzA3LS40ODggMC0xLjAzLjExMS0xLjUxOS4yNzNsLTEuMDg3LjM4N3YtMS42NTRsOC40NzEtMy42M2gxLjEzOHYzNi4yOGMwIDIuMDk0LjMyMiAzLjMwMyAxLjc5IDMuMzAzLjQzNCAwIC43MDMgMCAxLjMtLjIyMWwxLjMwMy0uNDQxdjEuNjUxbC03LjU5NiAyLjg2MmMtMS4xOTMtLjgyMS0xLjc5MS0yLjM2NS0yLjA2MS0zLjYzLTEuNDEzIDEuNTQtMy45NjQgMy42My03LjYgMy42M20yLjQ0MS0yMy4yMjhjLTMuOTA1IDAtNy45MjMgMi41MjktNy45MjMgOS45MDUgMCA2LjE2OSAzLjA0MSA5LjkxIDcuODE2IDkuOTEgMi44NzcgMCA0LjY2OS0xLjcwNiA1LjEwMi0yLjU4N1YzMy45MDVjLS43MDUtMS44MTgtMi43MTMtMi45MTYtNC45OTUtMi45MTZNMjczLjI4IDM5LjQ2NnYuMjc1Yy0uMDU0IDcuMzIyIDQuMDcyIDExLjAwOSA5LjIyNSAxMS4wMDkgMi42MDQgMCA0Ljk5My0uOTkzIDYuODkzLTIuNDc0djIuMTk5YTEzLjk0OSAxMy45NDkgMCAwIDEtOS41NSAzLjc0MmMtOC40NjUgMC0xMi4yMS02LjQzOC0xMi4yMS0xMi41NDkgMC03LjE2MiA1LjM3My0xMi45OTUgMTIuMzE1LTEyLjk5NSA1LjcgMCAxMC4xNTEgNC4wNzcgMTAuMTUxIDEwLjA3N3YuNzE2SDI3My4yOHptMTEuMTI0LTIuMjU2di0uMTA5YzAtNC4xMy0yLjI3NS02LjExNi00Ljk5My02LjExNi0zLjAzOSAwLTUuMzE4IDIuMDQtNS45NjkgNi4yMjVoMTAuOTYyek0yOTMuMzA1IDUzLjY2NnYtMS4zMTRsMS43ODgtLjMzN2MxLjAzNi0uMjIyIDEuODQ3LTEuMDQ0IDEuODQ3LTIuMTQ5VjM1LjE2OWMwLTEuMjY0LS41OTYtMS45MjctMS42ODEtMS45MjctLjM3OSAwLS44MTUuMDU4LTEuMjQ2LjIyMWwtLjcwOC4yNzV2LTEuNjUxbDcuNzA0LTMuNDE0aDEuMTQzdjUuMzQxYzEuOTUyLTMuODUzIDQuMjg3LTUuNDQ5IDYuOTQ2LTUuNDQ5IDIuMTcyIDAgMi43MTMuNTUxIDIuNzEzLjU1MXY1LjgzNmgtMS4wODJjLS4yNzQtMS41NDMtMS4zMDYtMi4zMTEtMi45MzItMi4zMTEtMS43MzcgMC0zLjkwNy40OTItNS40MjggMy42ODR2MTMuNTQxYzAgMS4xMDUgMS4wODUgMS45ODYgMi4xMTcgMi4xNDlsMi42MDcuMzM3djEuMzE0aC0xMy43ODgiLz4gICAgPC9nPjwvc3ZnPg==);\n        background-position: center center;\n        background-size: 134.5px 25px;\n        cursor: pointer;\n    }\n\n    /*Icone de Busca/Pesquisa*/\n    .search {\n        width: 25.4px;\n        height: 100%;\n        min-height: 60px;\n        background-position: center center !important;\n        background: no-repeat\n            url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNFMDAzMDMiIGQ9Ik0xNS41IDE0aC0uNzlsLS4yOC0uMjdBNi40NzEgNi40NzEgMCAwIDAgMTYgOS41IDYuNSA2LjUgMCAxIDAgOS41IDE2YzEuNjEgMCAzLjA5LS41OSA0LjIzLTEuNTdsLjI3LjI4di43OWw1IDQuOTlMMjAuNDkgMTlsLTQuOTktNXptLTYgMEM3LjAxIDE0IDUgMTEuOTkgNSA5LjVTNy4wMSA1IDkuNSA1IDE0IDcuMDEgMTQgOS41IDExLjk5IDE0IDkuNSAxNHoiLz4gICAgPC9nPjwvc3ZnPg==);\n        background-size: 24px 24px;\n        position: relative;\n        cursor: pointer;\n        transition: background-size 0.3s ease;\n        margin: 0 15px 0 0;\n        &:before {\n            content: "";\n            display: inline-block;\n            width: 25.4px;\n            height: 2px;\n            background-color: #e00303;\n            position: absolute;\n            bottom: 0;\n        }\n\n        &:hover {\n            background-size: 27px 27px;\n        }\n    }\n\n    /*Menu-TABS*/\n    .header-tabs {\n        min-width: 430px;\n        height: 100%;\n        min-height: 60px;\n        > div:nth-child(1) {\n            height: 100%;\n            min-height: 60px;\n            background-color: transparent !important;\n            button {\n                width: auto;\n                font-family: OpenSans;\n                font-size: 14px;\n                text-align: left;\n                color: #757575 !important;\n                margin: 0 15 !important;\n                text-transform: none !important;\n            }\n        }\n        > div:nth-child(2) {\n            height: 100%;\n            min-height: 60px;\n            div {\n                background-color: #e00303 !important;\n            }\n        }\n    }\n\n    /*Profile*/\n    .profile-user {\n        height: 100%;\n        min-height: 60px;\n        display: flex;\n        align-items: center;\n        justify-content: flex-end;\n\n        > div {\n            padding: 0 !important;\n            svg {\n                color: #e00303 !important;\n            }\n            > span {\n                transform: scale(0.7);\n                background-color: #fafafa !important;\n                color: #e00303 !important;\n                border: 1px solid #e00303 !important;\n                align-items: normal !important;\n                padding-top: 2px !important;\n            }\n        }\n\n        .menu-profile {\n            &:hover {\n                .containerMenuHeader {\n                    display: inline-block !important;\n                }\n            }\n            display: inline-block;\n            height: 100%;\n            min-height: 60px;\n            position: relative;\n            cursor: pointer;\n            margin: 0 38px 0 18px;\n            line-height: 60px;\n            font-family: Roboto, Helvetica, sans-serif;\n            font-size: 12px;\n            font-weight: bold !important;\n            text-align: right;\n            color: #980000 !important;\n            text-decoration: none;\n            &:after {\n                content: "";\n                display: inline-block;\n                position: absolute;\n                top: 50%;\n                transform: translateY(-50%);\n                right: -25px;\n                width: 16px;\n                height: 16px;\n                background-size: 16px 16px;\n                background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4gICAgPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxwYXRoIGQ9Ik0yNCAwdjI0SDBWMHoiLz4gICAgICAgIDxwYXRoIGZpbGw9IiNFMDAzMDMiIGQ9Ik0xOSA4SDVsNyAxMXoiLz4gICAgPC9nPjwvc3ZnPg==);\n            }\n        }\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    &.stylehide{\n        > span{\n                display:none!important;\n        }\n    }\n    &.maior99{\n        > span{\n                padding:0 4px!important;\n                width:auto!important;\n                left:calc(100% - 20px)!important;\n                right:auto!important;\n                border-radius: 10px!important;\n                transform-origin:left center;\n        }\n    }\n\n'], ['\n    &.stylehide{\n        > span{\n                display:none!important;\n        }\n    }\n    &.maior99{\n        > span{\n                padding:0 4px!important;\n                width:auto!important;\n                left:calc(100% - 20px)!important;\n                right:auto!important;\n                border-radius: 10px!important;\n                transform-origin:left center;\n        }\n    }\n\n']);

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _AppBar = __webpack_require__("U9Ys");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Tabs = __webpack_require__("ceAg");

var _Badge = __webpack_require__("BSVS");

var _Badge2 = _interopRequireDefault(_Badge);

var _IconButton = __webpack_require__("nz+8");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _powerSettingsNew = __webpack_require__("dFBI");

var _powerSettingsNew2 = _interopRequireDefault(_powerSettingsNew);

var _person = __webpack_require__("G2fq");

var _person2 = _interopRequireDefault(_person);

var _notifications = __webpack_require__("Y2r7");

var _notifications2 = _interopRequireDefault(_notifications);

var _createBrowserHistory = __webpack_require__("ciQf");

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _styledComponents = __webpack_require__("VEsJ");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/*components*/

//import history from 'react-router/lib/hashHistory';

/*Style*/


var Header = _styledComponents2.default.header(_templateObject);

var BadgeStyled = (0, _styledComponents2.default)(_Badge2.default)(_templateObject2);

var AppBarIcon = function (_React$Component) {
    _inherits(AppBarIcon, _React$Component);

    function AppBarIcon(props) {
        _classCallCheck(this, AppBarIcon);

        var _this = _possibleConstructorReturn(this, (AppBarIcon.__proto__ || Object.getPrototypeOf(AppBarIcon)).call(this, props));

        _this.state = {
            slideIndex: _this.props.initialMenu,
            badgeNumber: 0
        };
        return _this;
    }

    // handleChange = (value) => {
    //     this.setState({
    //         slideIndex: value
    //     });
    // };

    _createClass(AppBarIcon, [{
        key: 'render',
        value: function render() {
            var notificationNumber = 100;

            return _react2.default.createElement(
                Header,
                null,
                _react2.default.createElement(
                    'hgroup',
                    null,
                    _react2.default.createElement('a', { className: 'logo-santander' }),
                    _react2.default.createElement(
                        _Tabs.Tabs,
                        {
                            onChange: this.handleChange,
                            value: this.state.slideIndex,
                            className: 'header-tabs'
                        },
                        _react2.default.createElement(_Tabs.Tab, {
                            label: 'Banco de Ativos',
                            onActive: function onActive() {
                                return window.location.href = 'http://www.google.com.br';
                            },
                            value: 0,
                            className: this.state.stepIndex == 2 ? 'active' : ''
                        }),
                        _react2.default.createElement(_Tabs.Tab, {
                            label: 'Gest\xE3o de Campanhas',
                            onActive: function onActive() {
                                return window.location.href = 'http://www.google.com.br';
                            },
                            value: 1,
                            className: this.state.stepIndex == 1 ? 'active' : ''
                        }),
                        _react2.default.createElement(_Tabs.Tab, {
                            label: 'Budget Manager',
                            value: 2,
                            className: this.state.stepIndex == 0 ? 'active' : ''
                        })
                    )
                ),
                _react2.default.createElement(
                    'hgroup',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: 'profile-user' },
                        _react2.default.createElement(
                            BadgeStyled,
                            {
                                badgeContent: notificationNumber,
                                secondary: true,
                                badgeStyle: { top: 0, right: 0 },
                                className: notificationNumber > 99 ? 'maior99' :  false ? 'stylehide' : ''
                            },
                            _react2.default.createElement(
                                _IconButton2.default,
                                { href: 'www.google.com.br' },
                                _react2.default.createElement(_notifications2.default, null)
                            )
                        ),
                        _react2.default.createElement(
                            'a',
                            { className: 'menu-profile' },
                            'Emerson',
                            _react2.default.createElement(
                                'div',
                                { className: 'containerMenuHeader' },
                                _react2.default.createElement(
                                    'ul',
                                    { className: 'menuDropProfile' },
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            {
                                                onClick: function onClick() {
                                                    return window.location.href = 'http://www.google.com.br';
                                                }
                                            },
                                            _react2.default.createElement(_person2.default, null),
                                            ' Editar Perfil'
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'li',
                                        null,
                                        _react2.default.createElement(
                                            'a',
                                            {
                                                onClick: function onClick() {
                                                    return window.location.href = 'http://www.google.com.br';
                                                }
                                            },
                                            _react2.default.createElement(_powerSettingsNew2.default, null),
                                            ' Sair'
                                        )
                                    )
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return AppBarIcon;
}(_react2.default.Component);

exports.default = AppBarIcon;

/***/ }),

/***/ "q29b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__("RH2O");

var _home = __webpack_require__("U/vd");

var _home2 = _interopRequireDefault(_home);

var _actions = __webpack_require__("DVLJ");

var _selectors = __webpack_require__("Xd2d");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('Home', _home2.default);
var mapStateToProps = function mapStateToProps(state) {
  return {
    bar: (0, _selectors.getBarState)(state)
  };
};

var mapDispatchToProps = {
  addTodo: _actions.addTodo
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_home2.default);

/***/ }),

/***/ "uMfu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__("RH2O");

var _reselect = __webpack_require__("bndy");

var _headerBar = __webpack_require__("om/2");

var _headerBar2 = _interopRequireDefault(_headerBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapState = (0, _reselect.createStructuredSelector)({});

var actions = {};

exports.default = (0, _reactRedux.connect)(mapState, actions)(_headerBar2.default);

/***/ }),

/***/ "xCzM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__("GiK3");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    root: {
        width: '100%' /*1280px*/
        , height: 'auto',
        backgroundColor: '#fafafa'
    }
};

var PageWrapper = function PageWrapper(_ref) {
    var children = _ref.children;
    return _react2.default.createElement(
        'div',
        { style: styles.root },
        children
    );
};

exports.default = PageWrapper;

/***/ }),

/***/ "xe6J":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageWrapper = __webpack_require__("xCzM");

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageWrapper).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ })

},["hqmG"]);
//# sourceMappingURL=app.523fdea9063714f621ca.js.map