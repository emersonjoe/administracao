webpackJsonp([0],{"0K35":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBarState=void 0;var o=n("bndy"),r=function(e){return e.todos&&e.todos.length&&e.todos[0].text};t.getBarState=(0,o.createSelector)([r],function(e){return e})},"2XII":function(e,t,n){"use strict";(function(e){function n(){if("serviceWorker"in navigator){if(new URL(e.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var t=e.env.PUBLIC_URL+"/service-worker.js";u?(r(t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):o(t)})}}function o(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}function r(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):o(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}function i(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=n,t.unregister=i;var u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/))}).call(t,n("W2nU"))},"4Rz6":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_TODO="ADD_TODO",t.TOGGLE_TODO="TOGGLE_TODO",t.SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER",t.VisibilityFilters={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"}},"5PUG":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),i=o(r),u=n("fLuc"),l=o(u),a=n("COpx"),c=o(a),d=function(){return i.default.createElement("div",null,i.default.createElement(l.default,null),i.default.createElement(c.default,null))};t.default=d},"5SO7":function(e,t,n){"use strict";function o(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments[1];switch(t.type){case u.SET_VISIBILITY_FILTER:return t.filter;default:return e}}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1];switch(t.type){case u.ADD_TODO:return console.log("reducer ADD_TODO",u.ADD_TODO),console.log("action",t),[].concat(o(e),[{text:t.text,completed:!1}]);case u.TOGGLE_TODO:return e.map(function(e,n){return n===t.index?Object.assign({},e,{completed:!e.completed}):e});default:return e}}Object.defineProperty(t,"__esModule",{value:!0}),t.visibilityFilter=r,t.todos=i;var u=n("4Rz6"),l=(n("2KeS"),u.VisibilityFilters.SHOW_ALL)},COpx:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),i=o(r),u=n("F8kA"),l=n("q29b"),a=o(l),c=n("jHFQ"),d=o(c),f=function(){return i.default.createElement("main",null,i.default.createElement(u.Switch,null,i.default.createElement(u.Route,{exact:!0,path:"/",component:d.default}),i.default.createElement(u.Route,{path:"/login",component:d.default}),i.default.createElement(u.Route,{path:"/roster",component:a.default}),i.default.createElement(u.Route,{path:"/schedule",component:a.default}),i.default.createElement(u.Route,{path:"/home",component:a.default})))};t.default=f},DVLJ:function(e,t,n){"use strict";function o(e){return{type:i.TOGGLE_TODO,index:e}}function r(e){return{type:i.SET_VISIBILITY_FILTER,filter:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addTodo=void 0,t.toggleTodo=o,t.setVisibilityFilter=r;var i=(n("2KeS"),n("4Rz6"));t.addTodo=function(e){return console.log("text",e),console.log("ADD_TODO",i.ADD_TODO),{type:i.ADD_TODO,text:e}}},Gv9F:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("2KeS"),r=n("5SO7");t.default=(0,o.combineReducers)({todos:r.todos,visibilityFilter:r.visibilityFilter})},K41a:function(e,t,n){"use strict";function o(e){return{type:i.TOGGLE_TODO,index:e}}function r(e){return{type:i.SET_VISIBILITY_FILTER,filter:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.addTodo=void 0,t.toggleTodo=o,t.setVisibilityFilter=r;var i=(n("2KeS"),n("MK70"));t.addTodo=function(e){return console.log("text",e),console.log("ADD_TODO",i.ADD_TODO),{type:i.ADD_TODO,text:e}}},MK70:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ADD_TODO="ADD_TODO",t.TOGGLE_TODO="TOGGLE_TODO",t.SET_VISIBILITY_FILTER="SET_VISIBILITY_FILTER",t.VisibilityFilters={SHOW_ALL:"SHOW_ALL",SHOW_COMPLETED:"SHOW_COMPLETED",SHOW_ACTIVE:"SHOW_ACTIVE"}},"U/vd":function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n("GiK3"),c=o(a),d=n("U9Ys"),f=o(d),s=(n("RH2O"),function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),l(t,[{key:"componentDidMount",value:function(){console.log("addTodo",this.props.addTodo);var e=new Date;e.getDay();this.props.addTodo(e)}},{key:"render",value:function(){console.log("props",this.props);var e=this.props.bar?this.props.bar.toString():"vazio";return console.log("titulo",e),c.default.createElement(f.default,{title:e,iconClassNameRight:"muidocs-icon-navigation-expand-more"})}}]),t}(c.default.Component));t.default=s},Xd2d:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getBarState=void 0;var o=n("bndy"),r=function(e){return e.todos&&e.todos.length&&e.todos[0].text};t.getBarState=(0,o.createSelector)([r],function(e){return e})},YDbS:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),l=n("GiK3"),a=function(e){return e&&e.__esModule?e:{default:e}}(l),c=(n("RH2O"),n("Q4lS")),d=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"componentDidMount",value:function(){console.log("addTodo",this.props.addTodo);var e=new Date;e.getDay();this.props.addTodo(e)}},{key:"render",value:function(){return a.default.createElement("div",null,a.default.createElement(c.TextField,{hintText:"Usuário"}),a.default.createElement("br",null),a.default.createElement(c.TextField,{hintText:"Senha",type:"password"}),a.default.createElement(c.FlatButton,{label:"Entrar",onClick:function(){return window.location.href="/home/"}}))}}]),t}(a.default.Component);t.default=d},fLuc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("GiK3"),r=function(e){return e&&e.__esModule?e:{default:e}}(o),i=n("F8kA"),u=function(){return r.default.createElement("header",null,r.default.createElement("nav",null,r.default.createElement("ul",null,r.default.createElement("li",null,r.default.createElement(i.Link,{to:"/"},"Home")),r.default.createElement("li",null,r.default.createElement(i.Link,{to:"/roster"},"Roster")),r.default.createElement("li",null,r.default.createElement(i.Link,{to:"/schedule"},"Schedule")))))};t.default=u},hqmG:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n("GiK3"),i=o(r),u=n("O27J"),l=o(u),a=n("7L6O"),c=o(a),d=n("2KeS"),f=n("Gv9F"),s=o(f),p=n("2XII"),_=(o(p),n("F8kA")),O=n("COpx"),v=(o(O),n("5PUG")),T=o(v),y=n("RH2O").Provider,h=(0,d.createStore)(s.default);console.log(h.getState()),l.default.render(i.default.createElement(y,{store:h},i.default.createElement(c.default,null,i.default.createElement(_.BrowserRouter,null,i.default.createElement(T.default,null)))),document.body)},jHFQ:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),i=(o(r),n("RH2O")),u=n("YDbS"),l=o(u),a=n("K41a"),c=n("0K35"),d=function(e){return{bar:(0,c.getBarState)(e)}},f={addTodo:a.addTodo};t.default=(0,i.connect)(d,f)(l.default)},q29b:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),i=(o(r),n("RH2O")),u=n("U/vd"),l=o(u),a=n("DVLJ"),c=n("Xd2d");console.log("Home",l.default);var d=function(e){return{bar:(0,c.getBarState)(e)}},f={addTodo:a.addTodo};t.default=(0,i.connect)(d,f)(l.default)}},["hqmG"]);