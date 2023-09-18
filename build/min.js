/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./node_modules/tslib/tslib.es6.mjs
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
  return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
  function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

/* harmony default export */ const tslib_es6 = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
});

;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isFunction.js
function isFunction_isFunction(value) {
    return typeof value === 'function';
}
//# sourceMappingURL=isFunction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/createErrorClass.js
function createErrorClass(createImpl) {
    var _super = function (instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
//# sourceMappingURL=createErrorClass.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/UnsubscriptionError.js

var UnsubscriptionError = createErrorClass(function (_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors
            ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
            : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});
//# sourceMappingURL=UnsubscriptionError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/arrRemove.js
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
//# sourceMappingURL=arrRemove.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscription.js




var Subscription = (function () {
    function Subscription(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
    }
    Subscription.prototype.unsubscribe = function () {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) {
                    try {
                        for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                            var parent_1 = _parentage_1_1.value;
                            parent_1.remove(this);
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                else {
                    _parentage.remove(this);
                }
            }
            var initialFinalizer = this.initialTeardown;
            if (isFunction_isFunction(initialFinalizer)) {
                try {
                    initialFinalizer();
                }
                catch (e) {
                    errors = e instanceof UnsubscriptionError ? e.errors : [e];
                }
            }
            var _finalizers = this._finalizers;
            if (_finalizers) {
                this._finalizers = null;
                try {
                    for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                        var finalizer = _finalizers_1_1.value;
                        try {
                            execFinalizer(finalizer);
                        }
                        catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError) {
                                errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            }
                            else {
                                errors.push(err);
                            }
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
            }
            if (errors) {
                throw new UnsubscriptionError(errors);
            }
        }
    };
    Subscription.prototype.add = function (teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) {
                execFinalizer(teardown);
            }
            else {
                if (teardown instanceof Subscription) {
                    if (teardown.closed || teardown._hasParent(this)) {
                        return;
                    }
                    teardown._addParent(this);
                }
                (this._finalizers = (_a = this._finalizers) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription.prototype._hasParent = function (parent) {
        var _parentage = this._parentage;
        return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
    };
    Subscription.prototype._addParent = function (parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
    };
    Subscription.prototype._removeParent = function (parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
            this._parentage = null;
        }
        else if (Array.isArray(_parentage)) {
            arrRemove(_parentage, parent);
        }
    };
    Subscription.prototype.remove = function (teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription) {
            teardown._removeParent(this);
        }
    };
    Subscription.EMPTY = (function () {
        var empty = new Subscription();
        empty.closed = true;
        return empty;
    })();
    return Subscription;
}());

var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return (value instanceof Subscription ||
        (value && 'closed' in value && isFunction_isFunction(value.remove) && isFunction_isFunction(value.add) && isFunction_isFunction(value.unsubscribe)));
}
function execFinalizer(finalizer) {
    if (isFunction_isFunction(finalizer)) {
        finalizer();
    }
    else {
        finalizer.unsubscribe();
    }
}
//# sourceMappingURL=Subscription.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/config.js
var config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false,
};
//# sourceMappingURL=config.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/timeoutProvider.js

var timeoutProvider = {
    setTimeout: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
            return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearTimeout: function (handle) {
        var delegate = timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=timeoutProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/reportUnhandledError.js


function reportUnhandledError(err) {
    timeoutProvider.setTimeout(function () {
        var onUnhandledError = config.onUnhandledError;
        if (onUnhandledError) {
            onUnhandledError(err);
        }
        else {
            throw err;
        }
    });
}
//# sourceMappingURL=reportUnhandledError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/noop.js
function noop() { }
//# sourceMappingURL=noop.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/NotificationFactories.js
var COMPLETE_NOTIFICATION = (function () { return createNotification('C', undefined, undefined); })();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error,
    };
}
//# sourceMappingURL=NotificationFactories.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/errorContext.js

var context = null;
function errorContext(cb) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
            context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
            var _a = context, errorThrown = _a.errorThrown, error = _a.error;
            context = null;
            if (errorThrown) {
                throw error;
            }
        }
    }
    else {
        cb();
    }
}
function captureError(err) {
    if (config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
    }
}
//# sourceMappingURL=errorContext.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subscriber.js









var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (isSubscription(destination)) {
                destination.add(_this);
            }
        }
        else {
            _this.destination = EMPTY_OBSERVER;
        }
        return _this;
    }
    Subscriber.create = function (next, error, complete) {
        return new SafeSubscriber(next, error, complete);
    };
    Subscriber.prototype.next = function (value) {
        if (this.isStopped) {
            handleStoppedNotification(nextNotification(value), this);
        }
        else {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (this.isStopped) {
            handleStoppedNotification(errorNotification(err), this);
        }
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (this.isStopped) {
            handleStoppedNotification(COMPLETE_NOTIFICATION, this);
        }
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        try {
            this.destination.error(err);
        }
        finally {
            this.unsubscribe();
        }
    };
    Subscriber.prototype._complete = function () {
        try {
            this.destination.complete();
        }
        finally {
            this.unsubscribe();
        }
    };
    return Subscriber;
}(Subscription));

var _bind = Function.prototype.bind;
function bind(fn, thisArg) {
    return _bind.call(fn, thisArg);
}
var ConsumerObserver = (function () {
    function ConsumerObserver(partialObserver) {
        this.partialObserver = partialObserver;
    }
    ConsumerObserver.prototype.next = function (value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
            try {
                partialObserver.next(value);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    ConsumerObserver.prototype.error = function (err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
            try {
                partialObserver.error(err);
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
        else {
            handleUnhandledError(err);
        }
    };
    ConsumerObserver.prototype.complete = function () {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
            try {
                partialObserver.complete();
            }
            catch (error) {
                handleUnhandledError(error);
            }
        }
    };
    return ConsumerObserver;
}());
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_isFunction(observerOrNext) || !observerOrNext) {
            partialObserver = {
                next: (observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : undefined),
                error: error !== null && error !== void 0 ? error : undefined,
                complete: complete !== null && complete !== void 0 ? complete : undefined,
            };
        }
        else {
            var context_1;
            if (_this && config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function () { return _this.unsubscribe(); };
                partialObserver = {
                    next: observerOrNext.next && bind(observerOrNext.next, context_1),
                    error: observerOrNext.error && bind(observerOrNext.error, context_1),
                    complete: observerOrNext.complete && bind(observerOrNext.complete, context_1),
                };
            }
            else {
                partialObserver = observerOrNext;
            }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
    }
    return SafeSubscriber;
}(Subscriber));

function handleUnhandledError(error) {
    if (config.useDeprecatedSynchronousErrorHandling) {
        captureError(error);
    }
    else {
        reportUnhandledError(error);
    }
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config.onStoppedNotification;
    onStoppedNotification && timeoutProvider.setTimeout(function () { return onStoppedNotification(notification, subscriber); });
}
var EMPTY_OBSERVER = {
    closed: true,
    next: noop,
    error: defaultErrorHandler,
    complete: noop,
};
//# sourceMappingURL=Subscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/observable.js
var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();
//# sourceMappingURL=observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/identity.js
function identity(x) {
    return x;
}
//# sourceMappingURL=identity.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/pipe.js

function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
function pipeFromArray(fns) {
    if (fns.length === 0) {
        return identity;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
//# sourceMappingURL=pipe.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Observable.js







var Observable_Observable = (function () {
    function Observable(subscribe) {
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
        errorContext(function () {
            var _a = _this, operator = _a.operator, source = _a.source;
            subscriber.add(operator
                ?
                    operator.call(subscriber, source)
                : source
                    ?
                        _this._subscribe(subscriber)
                    :
                        _this._trySubscribe(subscriber));
        });
        return subscriber;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            sink.error(err);
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscriber = new SafeSubscriber({
                next: function (value) {
                    try {
                        next(value);
                    }
                    catch (err) {
                        reject(err);
                        subscriber.unsubscribe();
                    }
                },
                error: reject,
                complete: resolve,
            });
            _this.subscribe(subscriber);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable.prototype[observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        return pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());

function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_isFunction(value.next) && isFunction_isFunction(value.error) && isFunction_isFunction(value.complete);
}
function isSubscriber(value) {
    return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
}
//# sourceMappingURL=Observable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/ObjectUnsubscribedError.js

var ObjectUnsubscribedError = createErrorClass(function (_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});
//# sourceMappingURL=ObjectUnsubscribedError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Subject.js






var Subject = (function (_super) {
    __extends(Subject, _super);
    function Subject() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject.prototype.lift = function (operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject.prototype._throwIfClosed = function () {
        if (this.closed) {
            throw new ObjectUnsubscribedError();
        }
    };
    Subject.prototype.next = function (value) {
        var _this = this;
        errorContext(function () {
            var e_1, _a;
            _this._throwIfClosed();
            if (!_this.isStopped) {
                if (!_this.currentObservers) {
                    _this.currentObservers = Array.from(_this.observers);
                }
                try {
                    for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var observer = _c.value;
                        observer.next(value);
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
            }
        });
    };
    Subject.prototype.error = function (err) {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.hasError = _this.isStopped = true;
                _this.thrownError = err;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().error(err);
                }
            }
        });
    };
    Subject.prototype.complete = function () {
        var _this = this;
        errorContext(function () {
            _this._throwIfClosed();
            if (!_this.isStopped) {
                _this.isStopped = true;
                var observers = _this.observers;
                while (observers.length) {
                    observers.shift().complete();
                }
            }
        });
    };
    Subject.prototype.unsubscribe = function () {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
    };
    Object.defineProperty(Subject.prototype, "observed", {
        get: function () {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject.prototype._trySubscribe = function (subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject.prototype._subscribe = function (subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject.prototype._innerSubscribe = function (subscriber) {
        var _this = this;
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        if (hasError || isStopped) {
            return EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription(function () {
            _this.currentObservers = null;
            arrRemove(observers, subscriber);
        });
    };
    Subject.prototype._checkFinalizedStatuses = function (subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) {
            subscriber.error(thrownError);
        }
        else if (isStopped) {
            subscriber.complete();
        }
    };
    Subject.prototype.asObservable = function () {
        var observable = new Observable_Observable();
        observable.source = this;
        return observable;
    };
    Subject.create = function (destination, source) {
        return new AnonymousSubject(destination, source);
    };
    return Subject;
}(Observable_Observable));

var AnonymousSubject = (function (_super) {
    __extends(AnonymousSubject, _super);
    function AnonymousSubject(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject.prototype.next = function (value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 ? void 0 : _b.call(_a, value);
    };
    AnonymousSubject.prototype.error = function (err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 ? void 0 : _b.call(_a, err);
    };
    AnonymousSubject.prototype.complete = function () {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 ? void 0 : _b.call(_a);
    };
    AnonymousSubject.prototype._subscribe = function (subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject;
}(Subject));

//# sourceMappingURL=Subject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/Action.js


var Action = (function (_super) {
    __extends(Action, _super);
    function Action(scheduler, work) {
        return _super.call(this) || this;
    }
    Action.prototype.schedule = function (state, delay) {
        if (delay === void 0) { delay = 0; }
        return this;
    };
    return Action;
}(Subscription));

//# sourceMappingURL=Action.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/intervalProvider.js

var intervalProvider = {
    setInterval: function (handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        var delegate = intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
            return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
    },
    clearInterval: function (handle) {
        var delegate = intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined,
};
//# sourceMappingURL=intervalProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncAction.js




var AsyncAction = (function (_super) {
    __extends(AsyncAction, _super);
    function AsyncAction(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction.prototype.schedule = function (state, delay) {
        var _a;
        if (delay === void 0) { delay = 0; }
        if (this.closed) {
            return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a = this.id) !== null && _a !== void 0 ? _a : this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
        if (delay === void 0) { delay = 0; }
        return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
        if (delay === void 0) { delay = 0; }
        if (delay != null && this.delay === delay && this.pending === false) {
            return id;
        }
        if (id != null) {
            intervalProvider.clearInterval(id);
        }
        return undefined;
    };
    AsyncAction.prototype.execute = function (state, delay) {
        if (this.closed) {
            return new Error('executing a cancelled action');
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
            return error;
        }
        else if (this.pending === false && this.id != null) {
            this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
    };
    AsyncAction.prototype._execute = function (state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        }
        catch (e) {
            errored = true;
            errorValue = e ? e : new Error('Scheduled action threw falsy error');
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction.prototype.unsubscribe = function () {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove(actions, this);
            if (id != null) {
                this.id = this.recycleAsyncId(scheduler, id, null);
            }
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction;
}(Action));

//# sourceMappingURL=AsyncAction.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js
var dateTimestampProvider = {
    now: function () {
        return (dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined,
};
//# sourceMappingURL=dateTimestampProvider.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/Scheduler.js

var Scheduler = (function () {
    function Scheduler(schedulerActionCtor, now) {
        if (now === void 0) { now = Scheduler.now; }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler.prototype.schedule = function (work, delay, state) {
        if (delay === void 0) { delay = 0; }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler.now = dateTimestampProvider.now;
    return Scheduler;
}());

//# sourceMappingURL=Scheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/AsyncScheduler.js


var AsyncScheduler = (function (_super) {
    __extends(AsyncScheduler, _super);
    function AsyncScheduler(SchedulerAction, now) {
        if (now === void 0) { now = Scheduler.now; }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
    }
    AsyncScheduler.prototype.flush = function (action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if ((error = action.execute(action.state, action.delay))) {
                break;
            }
        } while ((action = actions.shift()));
        this._active = false;
        if (error) {
            while ((action = actions.shift())) {
                action.unsubscribe();
            }
            throw error;
        }
    };
    return AsyncScheduler;
}(Scheduler));

//# sourceMappingURL=AsyncScheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduler/async.js


var asyncScheduler = new AsyncScheduler(AsyncAction);
var async_async = asyncScheduler;
//# sourceMappingURL=async.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isScheduler.js

function isScheduler(value) {
    return value && isFunction_isFunction(value.schedule);
}
//# sourceMappingURL=isScheduler.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isDate.js
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
//# sourceMappingURL=isDate.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/timer.js




function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) { dueTime = 0; }
    if (scheduler === void 0) { scheduler = async_async; }
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler(intervalOrScheduler)) {
            scheduler = intervalOrScheduler;
        }
        else {
            intervalDuration = intervalOrScheduler;
        }
    }
    return new Observable_Observable(function (subscriber) {
        var due = isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
            due = 0;
        }
        var n = 0;
        return scheduler.schedule(function () {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) {
                    this.schedule(undefined, intervalDuration);
                }
                else {
                    subscriber.complete();
                }
            }
        }, due);
    });
}
//# sourceMappingURL=timer.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/interval.js


function interval(period, scheduler) {
    if (period === void 0) { period = 0; }
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    if (period < 0) {
        period = 0;
    }
    return timer(period, period, scheduler);
}
//# sourceMappingURL=interval.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/lift.js

function hasLift(source) {
    return isFunction_isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
function operate(init) {
    return function (source) {
        if (hasLift(source)) {
            return source.lift(function (liftedSource) {
                try {
                    return init(liftedSource, this);
                }
                catch (err) {
                    this.error(err);
                }
            });
        }
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
//# sourceMappingURL=lift.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js


function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
    return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
}
var OperatorSubscriber = (function (_super) {
    __extends(OperatorSubscriber, _super);
    function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext
            ? function (value) {
                try {
                    onNext(value);
                }
                catch (err) {
                    destination.error(err);
                }
            }
            : _super.prototype._next;
        _this._error = onError
            ? function (err) {
                try {
                    onError(err);
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._error;
        _this._complete = onComplete
            ? function () {
                try {
                    onComplete();
                }
                catch (err) {
                    destination.error(err);
                }
                finally {
                    this.unsubscribe();
                }
            }
            : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber.prototype.unsubscribe = function () {
        var _a;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
            var closed_1 = this.closed;
            _super.prototype.unsubscribe.call(this);
            !closed_1 && ((_a = this.onFinalize) === null || _a === void 0 ? void 0 : _a.call(this));
        }
    };
    return OperatorSubscriber;
}(Subscriber));

//# sourceMappingURL=OperatorSubscriber.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/map.js


function map_map(project, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
//# sourceMappingURL=map.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/timestamp.js


function timestamp(timestampProvider) {
    if (timestampProvider === void 0) { timestampProvider = dateTimestampProvider; }
    return map_map(function (value) { return ({ value: value, timestamp: timestampProvider.now() }); });
}
//# sourceMappingURL=timestamp.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/pairwise.js


function pairwise() {
    return operate(function (source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([p, value]);
            hasPrev = true;
        }));
    });
}
//# sourceMappingURL=pairwise.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/tap.js




function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_isFunction(observerOrNext) || error || complete
        ?
            { next: observerOrNext, error: error, complete: complete }
        : observerOrNext;
    return tapObserver
        ? operate(function (source, subscriber) {
            var _a;
            (_a = tapObserver.subscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
            var isUnsub = true;
            source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                var _a;
                (_a = tapObserver.next) === null || _a === void 0 ? void 0 : _a.call(tapObserver, value);
                subscriber.next(value);
            }, function () {
                var _a;
                isUnsub = false;
                (_a = tapObserver.complete) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                subscriber.complete();
            }, function (err) {
                var _a;
                isUnsub = false;
                (_a = tapObserver.error) === null || _a === void 0 ? void 0 : _a.call(tapObserver, err);
                subscriber.error(err);
            }, function () {
                var _a, _b;
                if (isUnsub) {
                    (_a = tapObserver.unsubscribe) === null || _a === void 0 ? void 0 : _a.call(tapObserver);
                }
                (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
            }));
        })
        :
            identity;
}
//# sourceMappingURL=tap.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/filter.js


function filter(predicate, thisArg) {
    return operate(function (source, subscriber) {
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
    });
}
//# sourceMappingURL=filter.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js
var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });
//# sourceMappingURL=isArrayLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isPromise.js

function isPromise(value) {
    return isFunction_isFunction(value === null || value === void 0 ? void 0 : value.then);
}
//# sourceMappingURL=isPromise.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isInteropObservable.js


function isInteropObservable(input) {
    return isFunction_isFunction(input[observable]);
}
//# sourceMappingURL=isInteropObservable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isAsyncIterable.js

function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
//# sourceMappingURL=isAsyncIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/throwUnobservableError.js
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
//# sourceMappingURL=throwUnobservableError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/symbol/iterator.js
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) {
        return '@@iterator';
    }
    return Symbol.iterator;
}
var iterator_iterator = getSymbolIterator();
//# sourceMappingURL=iterator.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isIterable.js


function isIterable(input) {
    return isFunction_isFunction(input === null || input === void 0 ? void 0 : input[iterator_iterator]);
}
//# sourceMappingURL=isIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/isReadableStreamLike.js


function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, , 9, 10]);
                    _b.label = 2;
                case 2:
                    if (false) {}
                    return [4, __await(reader.read())];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [3, 5];
                    return [4, __await(void 0)];
                case 4: return [2, _b.sent()];
                case 5: return [4, __await(value)];
                case 6: return [4, _b.sent()];
                case 7:
                    _b.sent();
                    return [3, 2];
                case 8: return [3, 10];
                case 9:
                    reader.releaseLock();
                    return [7];
                case 10: return [2];
            }
        });
    });
}
function isReadableStreamLike(obj) {
    return isFunction_isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
//# sourceMappingURL=isReadableStreamLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js












function innerFrom(input) {
    if (input instanceof Observable_Observable) {
        return input;
    }
    if (input != null) {
        if (isInteropObservable(input)) {
            return fromInteropObservable(input);
        }
        if (isArrayLike(input)) {
            return fromArrayLike(input);
        }
        if (isPromise(input)) {
            return fromPromise(input);
        }
        if (isAsyncIterable(input)) {
            return fromAsyncIterable(input);
        }
        if (isIterable(input)) {
            return fromIterable(input);
        }
        if (isReadableStreamLike(input)) {
            return fromReadableStreamLike(input);
        }
    }
    throw createInvalidObservableTypeError(input);
}
function fromInteropObservable(obj) {
    return new Observable_Observable(function (subscriber) {
        var obs = obj[observable]();
        if (isFunction_isFunction(obs.subscribe)) {
            return obs.subscribe(subscriber);
        }
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable_Observable(function (subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
            subscriber.next(array[i]);
        }
        subscriber.complete();
    });
}
function fromPromise(promise) {
    return new Observable_Observable(function (subscriber) {
        promise
            .then(function (value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function (err) { return subscriber.error(err); })
            .then(null, reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable_Observable(function (subscriber) {
        var e_1, _a;
        try {
            for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) {
                    return;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable_Observable(function (subscriber) {
        process(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function () {
        var value, e_2_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, 6, 11]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1: return [4, asyncIterable_1.next()];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) {
                        return [2];
                    }
                    _b.label = 3;
                case 3: return [3, 1];
                case 4: return [3, 11];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = { error: e_2_1 };
                    return [3, 11];
                case 6:
                    _b.trys.push([6, , 9, 10]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                    return [4, _a.call(asyncIterable_1)];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8: return [3, 10];
                case 9:
                    if (e_2) throw e_2.error;
                    return [7];
                case 10: return [7];
                case 11:
                    subscriber.complete();
                    return [2];
            }
        });
    });
}
//# sourceMappingURL=innerFrom.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js
function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
    if (delay === void 0) { delay = 0; }
    if (repeat === void 0) { repeat = false; }
    var scheduleSubscription = scheduler.schedule(function () {
        work();
        if (repeat) {
            parentSubscription.add(this.schedule(null, delay));
        }
        else {
            this.unsubscribe();
        }
    }, delay);
    parentSubscription.add(scheduleSubscription);
    if (!repeat) {
        return scheduleSubscription;
    }
}
//# sourceMappingURL=executeSchedule.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeInternals.js



function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function () {
        if (isComplete && !buffer.length && !active) {
            subscriber.complete();
        }
    };
    var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
    var doInnerSub = function (value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
            if (expand) {
                outerNext(innerValue);
            }
            else {
                subscriber.next(innerValue);
            }
        }, function () {
            innerComplete = true;
        }, undefined, function () {
            if (innerComplete) {
                try {
                    active--;
                    var _loop_1 = function () {
                        var bufferedValue = buffer.shift();
                        if (innerSubScheduler) {
                            executeSchedule(subscriber, innerSubScheduler, function () { return doInnerSub(bufferedValue); });
                        }
                        else {
                            doInnerSub(bufferedValue);
                        }
                    };
                    while (buffer.length && active < concurrent) {
                        _loop_1();
                    }
                    checkComplete();
                }
                catch (err) {
                    subscriber.error(err);
                }
            }
        }));
    };
    source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
        isComplete = true;
        checkComplete();
    }));
    return function () {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
    };
}
//# sourceMappingURL=mergeInternals.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js





function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    if (isFunction_isFunction(resultSelector)) {
        return mergeMap(function (a, i) { return map_map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
    }
    else if (typeof resultSelector === 'number') {
        concurrent = resultSelector;
    }
    return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
}
//# sourceMappingURL=mergeMap.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js


function mergeAll(concurrent) {
    if (concurrent === void 0) { concurrent = Infinity; }
    return mergeMap(identity, concurrent);
}
//# sourceMappingURL=mergeAll.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/empty.js

var EMPTY = new Observable_Observable(function (subscriber) { return subscriber.complete(); });
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : EMPTY;
}
function emptyScheduled(scheduler) {
    return new Observable(function (subscriber) { return scheduler.schedule(function () { return subscriber.complete(); }); });
}
//# sourceMappingURL=empty.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/args.js


function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction(last(args)) ? args.pop() : undefined;
}
function popScheduler(args) {
    return isScheduler(last(args)) ? args.pop() : undefined;
}
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
//# sourceMappingURL=args.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/observeOn.js



function observeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
    });
}
//# sourceMappingURL=observeOn.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/subscribeOn.js

function subscribeOn(scheduler, delay) {
    if (delay === void 0) { delay = 0; }
    return operate(function (source, subscriber) {
        subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
    });
}
//# sourceMappingURL=subscribeOn.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleObservable.js



function scheduleObservable(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=scheduleObservable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/schedulePromise.js



function schedulePromise(input, scheduler) {
    return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
}
//# sourceMappingURL=schedulePromise.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleArray.js

function scheduleArray(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var i = 0;
        return scheduler.schedule(function () {
            if (i === input.length) {
                subscriber.complete();
            }
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) {
                    this.schedule();
                }
            }
        });
    });
}
//# sourceMappingURL=scheduleArray.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleIterable.js




function scheduleIterable(input, scheduler) {
    return new Observable_Observable(function (subscriber) {
        var iterator;
        executeSchedule(subscriber, scheduler, function () {
            iterator = input[iterator_iterator]();
            executeSchedule(subscriber, scheduler, function () {
                var _a;
                var value;
                var done;
                try {
                    (_a = iterator.next(), value = _a.value, done = _a.done);
                }
                catch (err) {
                    subscriber.error(err);
                    return;
                }
                if (done) {
                    subscriber.complete();
                }
                else {
                    subscriber.next(value);
                }
            }, 0, true);
        });
        return function () { return isFunction_isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return(); };
    });
}
//# sourceMappingURL=scheduleIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleAsyncIterable.js


function scheduleAsyncIterable(input, scheduler) {
    if (!input) {
        throw new Error('Iterable cannot be null');
    }
    return new Observable_Observable(function (subscriber) {
        executeSchedule(subscriber, scheduler, function () {
            var iterator = input[Symbol.asyncIterator]();
            executeSchedule(subscriber, scheduler, function () {
                iterator.next().then(function (result) {
                    if (result.done) {
                        subscriber.complete();
                    }
                    else {
                        subscriber.next(result.value);
                    }
                });
            }, 0, true);
        });
    });
}
//# sourceMappingURL=scheduleAsyncIterable.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduleReadableStreamLike.js


function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
}
//# sourceMappingURL=scheduleReadableStreamLike.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/scheduled/scheduled.js













function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable(input)) {
            return scheduleObservable(input, scheduler);
        }
        if (isArrayLike(input)) {
            return scheduleArray(input, scheduler);
        }
        if (isPromise(input)) {
            return schedulePromise(input, scheduler);
        }
        if (isAsyncIterable(input)) {
            return scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable(input)) {
            return scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike(input)) {
            return scheduleReadableStreamLike(input, scheduler);
        }
    }
    throw createInvalidObservableTypeError(input);
}
//# sourceMappingURL=scheduled.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/from.js


function from(input, scheduler) {
    return scheduler ? scheduled(input, scheduler) : innerFrom(input);
}
//# sourceMappingURL=from.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/merge.js





function merge_merge() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    var concurrent = popNumber(args, Infinity);
    var sources = args;
    return !sources.length
        ?
            EMPTY
        : sources.length === 1
            ?
                innerFrom(sources[0])
            :
                mergeAll(concurrent)(from(sources, scheduler));
}
//# sourceMappingURL=merge.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js


var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_map(function (args) { return callOrApply(fn, args); });
}
//# sourceMappingURL=mapOneOrManyArgs.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js







var nodeEventEmitterMethods = ['addListener', 'removeListener'];
var eventTargetMethods = ['addEventListener', 'removeEventListener'];
var jqueryMethods = ['on', 'off'];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs(resultSelector));
    }
    var _a = __read(isEventTarget(target)
        ? eventTargetMethods.map(function (methodName) { return function (handler) { return target[methodName](eventName, handler, options); }; })
        :
            isNodeStyleEventEmitter(target)
                ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName))
                : isJQueryStyleEventEmitter(target)
                    ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName))
                    : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike(target)) {
            return mergeMap(function (subTarget) { return fromEvent(subTarget, eventName, options); })(innerFrom(target));
        }
    }
    if (!add) {
        throw new TypeError('Invalid event target');
    }
    return new Observable_Observable(function (subscriber) {
        var handler = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function () { return remove(handler); };
    });
}
function toCommonHandlerRegistry(target, eventName) {
    return function (methodName) { return function (handler) { return target[methodName](eventName, handler); }; };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_isFunction(target.addListener) && isFunction_isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_isFunction(target.on) && isFunction_isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_isFunction(target.addEventListener) && isFunction_isFunction(target.removeEventListener);
}
//# sourceMappingURL=fromEvent.js.map
;// CONCATENATED MODULE: ./build/ts/_InputManager.js



class InputManager {
    constructor(_keys = {}, _tickKeys = [{}, {}], _mouse_keys = {}, _mouse_tickKeys = [{}, {}], _tickIdx = 0, mouse = { x: 0, y: 0 }, mouse01 = { x: 0, y: 0 }, mouseW = { x: 0, y: 0 }, MouseMoveUpdate$ = null, MouseKeyUpdate$ = null, KeyUpdate$ = null) {
        this._keys = _keys;
        this._tickKeys = _tickKeys;
        this._mouse_keys = _mouse_keys;
        this._mouse_tickKeys = _mouse_tickKeys;
        this._tickIdx = _tickIdx;
        this.mouse = mouse;
        this.mouse01 = mouse01;
        this.mouseW = mouseW;
        this.MouseMoveUpdate$ = MouseMoveUpdate$;
        this.MouseKeyUpdate$ = MouseKeyUpdate$;
        this.KeyUpdate$ = KeyUpdate$;
        this.MouseKeyUpdate$ = merge_merge(fromEvent(document, 'mousedown').pipe(map_map(e => this.procMouseKey(e.button, 1, e.clientX, e.clientY))), fromEvent(document, 'mouseup').pipe(map_map(e => this.procMouseKey(e.button, 0, e.clientX, e.clientY))));
        this.MouseMoveUpdate$ = merge_merge(this.MouseKeyUpdate$, merge_merge(fromEvent(document, 'mousemove'), fromEvent(document, 'mouseenter'), fromEvent(document, 'mouseleave'), fromEvent(document, 'mouseout'))
            .pipe(map_map(e => ({ x: e.clientX, y: e.clientY }))))
            .pipe(map_map(e => ({ x: e.x, y: e.y })));
        this.KeyUpdate$ = merge_merge(fromEvent(document, 'keydown').pipe(filter(event => !event.repeat), //////****
        map_map(event => this.procKey(event.key.toLocaleLowerCase(), 1, event.repeated))), fromEvent(document, 'keyup').pipe(map_map(event => this.procKey(event.key.toLocaleLowerCase(), 0, false))));
        this.MouseKeyUpdate$.subscribe();
        this.MouseMoveUpdate$.subscribe(e => {
            this.mouse.x = e.x;
            this.mouse.y = e.y;
            this.mouse01.x = e.x / window.innerWidth;
            this.mouse01.y = e.y / window.innerHeight;
            this.calcMouseW();
        });
        this.KeyUpdate$.subscribe();
    }
    calcMouseW() {
        this.mouseW.x = (this.mouse01.x - 0.5) * window.innerWidth;
        this.mouseW.y = (this.mouse01.y - 0.5) * window.innerHeight;
        if (Game.player) {
            this.mouseW.x += Game.player.position.x;
            this.mouseW.y += Game.player.position.y;
        }
    }
    tick() {
        this._tickIdx = ((++this._tickIdx) % 2);
        this._tickKeys[this._tickIdx] = {};
        this._mouse_tickKeys[this._tickIdx] = {};
        this.calcMouseW();
    }
    procKey(key, newState, repeated) {
        if (newState === undefined)
            return;
        this._keys[key] = newState;
        this._tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState, repeated: repeated ?? false };
    }
    procMouseKey(key, newState, x, y) {
        if (newState === undefined)
            return;
        this._mouse_keys[key] = newState;
        this._mouse_tickKeys[this._tickIdx][key] = newState;
        return { key: key, state: newState, x, y };
    }
    getKey(key) {
        return this._keys[key] ?? 0;
    }
    subKey(key, state, fn) {
        return this.KeyUpdate$.pipe(filter(e => e.key == key && (state === null ? true : e.state == state))).subscribe(fn);
    }
    getMouseKey(key) {
        return this._mouse_keys[key] ?? 0;
    }
    subMouseKey(key, state, fn) {
        return this.MouseKeyUpdate$.pipe(filter(e => e.key == key && (state === null ? true : e.state == state))).subscribe(fn);
    }
}
//# sourceMappingURL=_InputManager.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttle.js



function throttle(durationSelector, config) {
    return operate(function (source, subscriber) {
        var _a = config !== null && config !== void 0 ? config : {}, _b = _a.leading, leading = _b === void 0 ? true : _b, _c = _a.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function () {
            throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function () {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function (value) {
            return (throttled = innerFrom(durationSelector(value)).subscribe(createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling)));
        };
        var send = function () {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function () {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
//# sourceMappingURL=throttle.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/throttleTime.js



function throttleTime_throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    var duration$ = timer(duration, scheduler);
    return throttle(function () { return duration$; }, config);
}
//# sourceMappingURL=throttleTime.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/take.js



function take(count) {
    return count <= 0
        ?
            function () { return EMPTY; }
        : operate(function (source, subscriber) {
            var seen = 0;
            source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                if (++seen <= count) {
                    subscriber.next(value);
                    if (count <= seen) {
                        subscriber.complete();
                    }
                }
            }));
        });
}
//# sourceMappingURL=take.js.map
;// CONCATENATED MODULE: ./build/ts/Vector.js
function Vector(x, y) {
    return { x, y };
}
function VecNormalize(x, y) {
    if (typeof x !== 'number') {
        y = x.y;
        x = x.x;
    }
    let length = Math.sqrt(x * x + y * y);
    if (length === 0) {
        return { x: 0, y: 0 };
    }
    else {
        return { x: x / length, y: y / length };
    }
}
function VecDist(vec1, vec2) {
    let dx = vec2.x - vec1.x;
    let dy = vec2.y - vec1.y;
    return Math.sqrt(dx * dx + dy * dy);
}
function VecDir(from, to) {
    let direction = Vector(to.x - from.x, to.y - from.y);
    return VecNormalize(direction);
}
function VecAdd(vec1, vec2) {
    return Vector(vec1.x + vec2.x, vec1.y + vec2.y);
}
function VecSub(vec1, vec2) {
    return Vector(vec1.x - vec2.x, vec1.y - vec2.y);
}
function VecMul(vec, scalar) {
    return Vector(vec.x * scalar, vec.y * scalar);
}
//# sourceMappingURL=Vector.js.map
;// CONCATENATED MODULE: ./build/ts/GameObject.js




class GameObject {
    constructor(parent = null, htmlParent) {
        this.enabled = true;
        this.name = "";
        this.collider = true;
        this.parent = parent ?? null;
        this.position = Vector(0, 0);
        this.size = Vector(50, 50);
        this.centered = true;
        this.boundByScene = true;
        this.rotation = 0;
        this.color = 'red';
        this.el = document.createElement('div');
        this.htmlParent = htmlParent ?? Game.canvas;
        this.htmlParent.append(this.el);
        this.customStyle = null;
        this.Tick = new Subject();
        this.PreRender = new Subject();
        this.Render = new Subject();
        this.CollidedSceneEdge = new Subject();
        this._tickSub = Game.ticks$?.pipe(tap(deltaTime => {
            if (this.enabled == false)
                return;
            if (this.boundByScene)
                this.BoundByScene();
            this.Tick.next(deltaTime);
            this.PreRender.next(deltaTime);
            this.RenderMethod(deltaTime);
            this.Render.next(deltaTime);
        }))?.subscribe();
        Game.gameObjects.push(this);
    }
    Disable() {
        this.enabled = false;
        this.el.style.cssText = '';
    }
    Destroy() {
        this._tickSub.unsubscribe();
        this.enabled = false;
        const index = Game.gameObjects.indexOf(this);
        if (index > -1) { // only splice array when item is found
            Game.gameObjects.splice(index, 1); // 2nd parameter means remove one item only
        }
        this.htmlParent.removeChild(this.el);
        this.el.outerHTML = "";
        this.el = null;
        this.htmlParent = null;
        return null;
    }
    BoundByScene() {
        let pos = { ...this.position };
        if (this.centered) {
            let halfXSize = this.size.x / 2;
            let halfYSize = this.size.y / 2;
            if (this.position.x - halfXSize < Game.sceneExtents.x)
                this.position.x = Game.sceneExtents.x + halfXSize;
            else if (this.position.x + halfXSize > Game.sceneExtents.x + Game.sceneExtents.xSize)
                this.position.x = Game.sceneExtents.x + Game.sceneExtents.xSize - halfXSize;
            if (this.position.y - halfYSize < Game.sceneExtents.y)
                this.position.y = Game.sceneExtents.y + halfYSize;
            else if (this.position.y + halfYSize > Game.sceneExtents.y + Game.sceneExtents.ySize)
                this.position.y = Game.sceneExtents.y + Game.sceneExtents.ySize - halfYSize;
        }
        else {
            if (this.position.x < Game.sceneExtents.x)
                this.position.x = Game.sceneExtents.x;
            else if (this.position.x + this.size.x > Game.sceneExtents.x + Game.sceneExtents.xSize)
                this.position.x = Game.sceneExtents.x + Game.sceneExtents.xSize - this.size.x;
            if (this.position.y < Game.sceneExtents.y)
                this.position.y = Game.sceneExtents.y;
            else if (this.position.y + this.size.y > Game.sceneExtents.y + Game.sceneExtents.ySize)
                this.position.y = Game.sceneExtents.y + Game.sceneExtents.ySize - this.size.y;
        }
        if (pos.x != this.position.x || pos.y != this.position.y)
            this.CollidedSceneEdge.next();
    }
    RenderMethod(deltaTime) {
        if (this.enabled == false) {
            this.el.style.cssText = '';
            return;
        }
        let x = this.position.x /*-Game.cameraOffset.x*/ - Game.cameraPos.x + Game.viewportCenter.x;
        let y = this.position.y /*-Game.cameraOffset.y*/ - Game.cameraPos.y + Game.viewportCenter.y;
        if (this.centered) {
            x -= this.size.x / 2;
            y -= this.size.y / 2;
        }
        this.el.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        background-color: ${this.color};
        height: ${this.size.y}px;
        width: ${this.size.x}px;
        z-index:-1;
        ${this.customStyle ? this.customStyle : ""}
        `.split('\n').join('');
    }
}
//# sourceMappingURL=GameObject.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/scanInternals.js

function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function (source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            var i = index++;
            state = hasState
                ?
                    accumulator(state, value, i)
                :
                    ((hasState = true), value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete &&
            (function () {
                hasState && subscriber.next(state);
                subscriber.complete();
            })));
    };
}
//# sourceMappingURL=scanInternals.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/scan.js


function scan(accumulator, seed) {
    return operate(scanInternals(accumulator, seed, arguments.length >= 2, true));
}
//# sourceMappingURL=scan.js.map
;// CONCATENATED MODULE: ./build/ts/Bullet.js


class Bullet extends GameObject {
    static { this.bulletPool = []; }
    constructor(vecPos, vecDir, type) {
        super();
        this.name = 'bullet';
        this.size = { x: 10, y: 10 };
        this.color = 'yellow';
        this.centered = true;
        this.enabled = false; // All bullets are disabled initially
        this.vecDir = vecDir;
        // Enable the bullet and set its parameters
        this.enabled = true;
        this.position = { ...vecPos };
        this.type = type;
        this.speed = 1.7;
        //b.homing = false;
        this.homingRate = 0.2;
        this.damage = 99;
    }
    static shoot(vecPos, vecDir, type, speed = 1.7) {
        // Find the first disabled bullet
        let b = Bullet.bulletPool.find(bullet => !bullet.enabled);
        if (!b) {
            b = new Bullet(vecPos, vecDir, type);
            Bullet.bulletPool.push(b);
        }
        b.vecDir = vecDir;
        // Enable the bullet and set its parameters
        b.enabled = true;
        b.position = { ...vecPos };
        b.type = type;
        b.speed = speed;
        //b.homing = false;
        b.homingRate = 0.2;
        b.Tick.pipe(map_map((deltaTime) => ({
            x: b.vecDir.x * b.speed * deltaTime,
            y: b.vecDir.y * b.speed * deltaTime,
        })), scan((position, movement) => ({
            y: position.y + movement.y,
            x: position.x + movement.x,
        }), b.position)).subscribe((pos) => {
            b.position = pos;
        });
        if (b.homing)
            b.homing.unsubscribe();
        b.CollidedSceneEdge.subscribe(() => {
            b.Disable(); // Disable the bullet when it collides with the scene edge
        });
        return b;
    }
}
/* harmony default export */ const ts_Bullet = (Bullet);
//# sourceMappingURL=Bullet.js.map
;// CONCATENATED MODULE: ./build/ts/_Enemy.js





class Enemy extends GameObject {
    static { this.enemies = []; }
    static predictFuturePosition(dist) {
        let velocity = {
            x: Game.player.position.x - Game.player.playerLastPosition.x,
            y: Game.player.position.y - Game.player.playerLastPosition.y
        };
        //let magnitude = Math.sqrt(velocity.x * velocity.x + velocity.y * velocity.y);
        //if(magnitude==0) magnitude = 1;
        let direction = {
            x: velocity.x,
            y: velocity.y // / magnitude
        };
        let futurePosition = {
            x: Game.player.position.x + direction.x * dist,
            y: Game.player.position.y + direction.y * dist
        };
        return futurePosition;
    }
    constructor() {
        super();
        this.hp = 100;
        this.name = 'enemy';
        this.hp = 100;
        this.Tick.pipe(throttleTime_throttleTime(1000) ////// ******
        ).subscribe(() => {
            let dist = VecDist(this.position, Game.player.position) * 0.03;
            let playerPos = Enemy.predictFuturePosition(dist);
            //console.log(playerPos,player.position,dist);
            let b = ts_Bullet.shoot(this.position, VecDir(this.position, playerPos), 1);
            //b.speed = 1.1;
            b.speed = 0.6;
            b.color = 'red';
            b.homingRate = 0.05;
            b.damage = 15;
            b.homing = b.Tick.pipe(throttleTime_throttleTime(300), take(2) ////// ******
            ).subscribe(() => {
                let dist = VecDist(b.position, Game.player.position) * b.homingRate;
                let playerPos = Enemy.predictFuturePosition(dist);
                b.vecDir = VecDir(b.position, playerPos);
            });
            /*
                b.homingRate = 0.25;
                b.homing = b.Tick.pipe(throttleTime(300) ).subscribe(()=>{
                    let dist = VecDist(b.position,player.position) * b.homingRate;
                    let playerPos = predictFuturePosition(dist);
                    b.vecDir = VecDir(b.position, playerPos);
                        //console.log(b.position,player.position,b.vecDir)
                    b.speed *= 1.1;
                    b.homingRate *= 0.8;
                            
                    /*
                    let vecDirToPlayer = VecDir(b.position, playerPos);
                    let weightedCurrentDirection = VecMul(b.vecDir, 1 - b.homingRate);
                    let weightedDirectionToPlayer = VecMul(vecDirToPlayer, b.homingRate);
                    b.vecDir = VecNormalize(VecAdd(weightedCurrentDirection, weightedDirectionToPlayer));
                    */
            //});
        });
        Enemy.enemies.push(this);
    }
    Destroy() {
        const index = Enemy.enemies.indexOf(this);
        if (index > -1) { // only splice array when item is found
            Enemy.enemies.splice(index, 1); // 2nd parameter means remove one item only
        }
        return super.Destroy();
    }
}
/* harmony default export */ const _Enemy = (Enemy);
//# sourceMappingURL=_Enemy.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/concatAll.js

function concatAll() {
    return mergeAll(1);
}
//# sourceMappingURL=concatAll.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/concat.js



function concat() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return concatAll()(from(args, popScheduler(args)));
}
//# sourceMappingURL=concat.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/startWith.js



function startWith() {
    var values = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
    }
    var scheduler = popScheduler(values);
    return operate(function (source, subscriber) {
        (scheduler ? concat(values, source, scheduler) : concat(values, source)).subscribe(subscriber);
    });
}
//# sourceMappingURL=startWith.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js



function switchMap(project, resultSelector) {
    return operate(function (source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function () { return isComplete && !innerSubscriber && subscriber.complete(); };
        source.subscribe(createOperatorSubscriber(subscriber, function (value) {
            innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            innerFrom(project(value, outerIndex)).subscribe((innerSubscriber = createOperatorSubscriber(subscriber, function (innerValue) { return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue); }, function () {
                innerSubscriber = null;
                checkComplete();
            })));
        }, function () {
            isComplete = true;
            checkComplete();
        }));
    });
}
//# sourceMappingURL=switchMap.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/ignoreElements.js



function ignoreElements() {
    return operate(function (source, subscriber) {
        source.subscribe(createOperatorSubscriber(subscriber, noop));
    });
}
//# sourceMappingURL=ignoreElements.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js

function mapTo(value) {
    return map_map(function () { return value; });
}
//# sourceMappingURL=mapTo.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delayWhen.js






function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) {
        return function (source) {
            return concat(subscriptionDelay.pipe(take(1), ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
    }
    return mergeMap(function (value, index) { return innerFrom(delayDurationSelector(value, index)).pipe(take(1), mapTo(value)); });
}
//# sourceMappingURL=delayWhen.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/delay.js



function delay_delay(due, scheduler) {
    if (scheduler === void 0) { scheduler = asyncScheduler; }
    var duration = timer(due, scheduler);
    return delayWhen(function () { return duration; });
}
//# sourceMappingURL=delay.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/catchError.js



function catchError(selector) {
    return operate(function (source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
            handledResult = innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            }
            else {
                syncUnsub = true;
            }
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
//# sourceMappingURL=catchError.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/of.js


function of() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var scheduler = popScheduler(args);
    return from(args, scheduler);
}
//# sourceMappingURL=of.js.map
;// CONCATENATED MODULE: ./build/ts/Levels.js


let weapons = {
    1: {
        cooldown: 160,
        automatic: true,
        damage: 10,
        color: 'cyan'
    },
    2: {
        cooldown: 300,
        automatic: false,
        damage: 20,
        color: 'yellow'
    }
};
let levels = {
    1: {
        initialWeapon: 1,
        load() {
            this.enemies =
                [
                    Object.assign(new _Enemy(), {
                        position: { x: -400, y: 400 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 400, y: -400 },
                    })
                ];
        }
    },
    2: {
        initialWeapon: 1,
        load() {
            this.enemies =
                [
                    Object.assign(new _Enemy(), {
                        position: { x: -400, y: 400 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 400, y: -400 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 400, y: 400 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: -400, y: -400 },
                    })
                ];
        }
    },
    3: {
        initialWeapon: 1,
        load() {
            this.enemies =
                [
                    Object.assign(Game.player, {
                        position: { x: -600, y: 0 }
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 700, y: 400 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 700, y: 100 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 700, y: -100 },
                    }),
                    Object.assign(new _Enemy(), {
                        position: { x: 700, y: -400 },
                    })
                ];
        }
    }
};
//# sourceMappingURL=Levels.js.map
;// CONCATENATED MODULE: ./build/ts/__GameLogic.js

//import { catchError } from 'rxjs/operators';



const powerup = (type, value) => ({ type, value });
const hurt = (value, type = 'dmg') => ({ type, value });
const hurtT = { dmg: 'dmg', poison: 'poison' };
let invincibilityP = powerup('invincible', 10.0);
function makeGameEvents(document) {
    const clicks$ = fromEvent(document, 'click').pipe(map_map((x) => ({ n: 'click', e: x })));
    const keys$ = fromEvent(document, 'keydown').pipe(map_map((x) => ({ n: 'key', e: x })));
    const keysOnce$ = fromEvent(document, 'keydown').pipe(filter(e => e.repeat), map_map((x) => ({ n: 'key1', e: x })));
    let gameEvents;
    gameEvents = merge_merge(
    ///////////////////////// Weapon fire
    ///////////////////////// Weapon Switch
    keys$.pipe(filter(e => !e.e.ctrlKey && /^\d$/.test(e.e.key)), map_map(e => parseInt(e.e.key)), //get weapon key
    filter(e => weapons[e]), map_map(e => ({ type: 'weaponSwitch', value: e }))).pipe(map_map(x => x.value), startWith(levels[Game.curLevel].initialWeapon), //starting weapon
    tap((x) => console.log("weapon switch:" + x)), switchMap((weapon) => //pucaj trenutno oruzije
     
    ///////////////////////// Shoot signal
    merge_merge(keys$, clicks$, interval(1)).pipe(filter((e) => {
        if (typeof e == 'number' || e?.e?.key) {
            if (weapons[weapon].automatic)
                if (Game.Input?.getKey(' ') == 1)
                    return true;
            if (typeof e == 'number')
                return false;
            if (weapons[weapon].automatic) {
                return e?.e?.key == ' ';
            }
            else if (typeof e != 'number') {
                return e?.e?.key == ' ' && !e.e.repeated;
            }
        }
        return e.e.button == 0;
    }), throttleTime_throttleTime(weapons[weapon].cooldown * Game.timeScale), map_map(e => ({ type: 'shootSignal' })))
        // gameEvents.pipe( filter(e=>e.type=='shootSignal'),map(x=>x.value))
        .pipe(map_map(() => ({ type: 'fireWeapon', weapon }))))), 
    //switchMap((e) => interval(repeatTime).pipe(map(i=>2),scan((acc,j)=>acc+j),map(x=>e.n+x)))
    ///////////////////////// Level Switch
    keys$.pipe(filter(e => e.e.ctrlKey && /^\d$/.test(e.e.key)), map_map(e => parseInt(e.e.key)), filter(e => levels[e]), map_map(e => ({ type: 'levelSwitch', value: e }))), 
    ///////////////////////// Weapon Switch
    keys$.pipe(filter(e => !e.e.ctrlKey && /^\d$/.test(e.e.key)), map_map(e => parseInt(e.e.key)), filter(e => weapons[e]), delay_delay(10), map_map(e => ({ type: 'weaponSwitch', value: e }))), 
    /*
  merge(
  )
  .pipe(
    startWith(null), pairwise(),
    filter((x) => x[1].type == 'weaponSwitch'),
    map((x) => x[x[0]?.type == 'levelSwitch' ? 0 : 1]),
  ),*/
    ///////////////////////// Restart level
    keys$.pipe(filter(e => e.e.key == ']'), map_map(e => ({ type: 'restart' })))).pipe(catchError(e => {
        console.log('error ', e);
        return merge_merge(of({ type: 'error', error: e }), makeGameEvents(document));
    }));
    return gameEvents;
}
function sub(ev, type, fn) {
    console.log("sub", ev);
    return ev.pipe(filter(e => e.type == type)).subscribe(x => fn(x));
}
//# sourceMappingURL=__GameLogic.js.map
;// CONCATENATED MODULE: ./build/ts/_Game.js






function getViewportSize() {
    return { x: window.innerWidth, y: window.innerHeight };
}
function getViewportCenter() {
    let size = getViewportSize();
    size.x /= 2;
    size.y /= 2;
    return size;
}
class Game {
    static { this.reset$ = new Subject(); }
    static { this.player = null; }
    static { this.canvas = null; }
    static { this.Input = null; }
    static { this.ticks$ = null; }
    static { this.cameraOffset = { x: -250, y: -250 }; }
    static { this.cameraPos = { x: 0, y: 0 }; }
    static { this.sceneExtents = { y: -250, x: -250, xSize: 500, ySize: 500 }; }
    static { this.gameObjects = []; }
    static { this.paused = false; }
    static { this.deltaTime = 0; }
    static { this.timeScale = 1.0; }
    static { this.collisionPairs = []; } //cached last CollisionCheck
    static { this.viewportCenter = getViewportCenter(); }
    static { this.score = 0; }
    static { this._gameEvents = null; }
    static { this.curLevel = 1; }
    constructor() {
        Game.canvas = document.getElementById('canvas');
        Game.Input = new InputManager();
        Game.ticks$ = interval(0).pipe(////// ******
        timestamp(), pairwise(), ////// ******
        map_map(([previous, current]) => {
            (Game.deltaTime = (current.timestamp - previous.timestamp) * Game.timeScale);
            if (Game.deltaTime > 10)
                Game.deltaTime = 10;
            return Game.deltaTime;
        }), 
        //da imamo deltaTime izmedju emissija
        tap(() => Game.Input?.tick()), filter(() => !Game.paused));
        window.addEventListener('resize', () => {
            console.log('resize ', getViewportCenter());
            Game.viewportCenter = getViewportCenter();
        });
        Game.events = new Subject();
        Game.curLevel = 1;
    }
    static reset() {
        Game.reset$.next(1);
        Game.score = 0;
        _Enemy.enemies.forEach(e => e.Destroy());
        Game.player.powerups.forEach(e => e.Destroy());
        Game.player.powerupsWorld.forEach(e => e.Destroy());
        ts_Bullet.bulletPool.forEach(e => e.Disable());
        if (Game._gameEvents)
            Game._gameEvents.unsubscribe();
        Game._gameEvents = makeGameEvents(document).subscribe(e => {
            console.log(e);
            Game.events.next(e);
        });
    }
    static sub(type, fn) {
        console.log("Game sub");
        return sub(Game.events, type, fn);
    }
    static CheckCollisions(from = Game.gameObjects, against = null) {
        Game.collisionPairs.length = 0;
        for (let i = 0; i < from.length - 1; i++) {
            let objA = from[i];
            if (!objA.enabled || !objA.collider)
                continue;
            let aLeft = objA.position.x - (objA.centered ? objA.size.x / 2 : 0);
            let aRight = aLeft + objA.size.x;
            let aTop = objA.position.y - (objA.centered ? objA.size.y / 2 : 0);
            let aBottom = aTop + objA.size.y;
            let start = i + 1;
            if (against) {
                start = 0;
            }
            else
                against = from;
            for (let j = start; j < against.length; j++) {
                let objB = against[j];
                if (!objB.enabled || !objB.collider)
                    continue;
                let bLeft = objB.position.x - (objB.centered ? objB.size.x / 2 : 0);
                let bRight = bLeft + objB.size.x;
                let bTop = objB.position.y - (objB.centered ? objB.size.y / 2 : 0);
                let bBottom = bTop + objB.size.y;
                if (aRight > bLeft && aLeft < bRight && aBottom > bTop && aTop < bBottom) {
                    Game.collisionPairs.push([objA, objB]);
                }
            }
        }
        return Game.collisionPairs;
    }
    static generateRandomPoint(padding) {
        return {
            x: (-1300 / 2) + padding + Math.random() * ((1300) - 2 * padding),
            y: (-900 / 2) + padding + Math.random() * ((900) - 2 * padding)
        };
    }
}

//# sourceMappingURL=_Game.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js




function takeUntil(notifier) {
    return operate(function (source, subscriber) {
        innerFrom(notifier).subscribe(createOperatorSubscriber(subscriber, function () { return subscriber.complete(); }, noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
//# sourceMappingURL=takeUntil.js.map
;// CONCATENATED MODULE: ./build/ts/_Player.js



class Player extends GameObject {
    constructor() {
        super();
        this.hp = 100;
        this.speed = 0.6;
        this.powerups = [];
        this.powerupsWorld = [];
        this.playerLastPosition = { x: 0, y: 0 };
        this.name = 'player';
        this.color = 'green';
        Game.reset$.subscribe(() => {
            this.hp = 100;
            this.powerups = [];
            this.position = (this.playerLastPosition = { x: 0, y: 0 });
            this.setupListeners();
        });
    }
    setupListeners() {
        this.Tick.pipe(takeUntil(Game.reset$), ////
        filter(() => this.hp > 0), tap(() => console.log(this.hp)), map_map((deltaTime) => ({
            y: Game.Input.getKey('w') ? -this.speed * deltaTime : Game.Input.getKey('s') ? this.speed * deltaTime : 0,
            x: Game.Input.getKey('a') ? -this.speed * deltaTime : Game.Input.getKey('d') ? this.speed * deltaTime : 0,
        })), scan((position, movement) => ({
            y: position.y + movement.y,
            x: position.x + movement.x,
        }), { y: 0, x: 0 })).subscribe(position => {
            this.playerLastPosition = this.position;
            this.position = position;
            Game.cameraPos = this.position;
        });
    }
}
//# sourceMappingURL=_Player.js.map
;// CONCATENATED MODULE: ./build/ts/Powerup.js


class Powerup extends GameObject {
    constructor() {
        super();
        this.value = "Powerup";
        this.name = 'powerup';
        this.value = "Powerup";
        this.size = { x: 20, y: 20 };
        this.color = 'lime';
        Game.player.powerupsWorld.push(this);
    }
    Destroy() {
        const index = Game.player.powerupsWorld.indexOf(this);
        if (index > -1) { // only splice array when item is found
            Game.player.powerupsWorld.splice(index, 1); // 2nd parameter means remove one item only
        }
        return super.Destroy();
    }
}
//# sourceMappingURL=Powerup.js.map
;// CONCATENATED MODULE: ./build/ts/__Helpers.js

//merge, takeUntil, delay, timer,interval, map,tap
function gradual(gradualFn, finalFn, time, splits = 10, last = false) {
    merge_merge(of(-1), interval(time / splits))
        .pipe(map_map(i => i + 1), //0.0 -> 1.0
    delay_delay(1), takeUntil(timer(time).pipe(//final
    tap(() => { if (last)
        gradualFn(1); if (finalFn)
        finalFn(); }))), tap((x) => gradualFn(x / splits)) //gradual
    ).subscribe();
}
/*
gFn: 0.0
gFn: 0.1
..
gFn: 0.8
gFn: 0.9
finalFunction (1.0)
*/
function throttleWrap(obs, time) {
    let nt = obs.pipe(delay(1), map((value) => ({ throttled: true, value })));
    return merge(obs.pipe(throttleTime(time), map((value) => ({ throttled: false, value }))), nt).pipe(bufferWhen(() => nt.pipe()), map((x) => x[0]));
}
//# sourceMappingURL=__Helpers.js.map
;// CONCATENATED MODULE: ./node_modules/rxjs/dist/esm5/internal/observable/dom/fetch.js




function fromFetch(input, initWithSelector) {
    if (initWithSelector === void 0) { initWithSelector = {}; }
    var selector = initWithSelector.selector, init = __rest(initWithSelector, ["selector"]);
    return new Observable_Observable(function (subscriber) {
        var controller = new AbortController();
        var signal = controller.signal;
        var abortable = true;
        var outerSignal = init.signal;
        if (outerSignal) {
            if (outerSignal.aborted) {
                controller.abort();
            }
            else {
                var outerSignalHandler_1 = function () {
                    if (!signal.aborted) {
                        controller.abort();
                    }
                };
                outerSignal.addEventListener('abort', outerSignalHandler_1);
                subscriber.add(function () { return outerSignal.removeEventListener('abort', outerSignalHandler_1); });
            }
        }
        var perSubscriberInit = __assign(__assign({}, init), { signal: signal });
        var handleError = function (err) {
            abortable = false;
            subscriber.error(err);
        };
        fetch(input, perSubscriberInit)
            .then(function (response) {
            if (selector) {
                innerFrom(selector(response)).subscribe(createOperatorSubscriber(subscriber, undefined, function () {
                    abortable = false;
                    subscriber.complete();
                }, handleError));
            }
            else {
                abortable = false;
                subscriber.next(response);
                subscriber.complete();
            }
        })
            .catch(handleError);
        return function () {
            if (abortable) {
                controller.abort();
            }
        };
    });
}
//# sourceMappingURL=fetch.js.map
;// CONCATENATED MODULE: ./build/ts/randImg.js



async function randImg() {
    let img = document.getElementById('randImg');
    merge_merge(of(1), interval(4000)).pipe(switchMap((x) => (x % 2 == 0)
        ? fromFetch('https://picsum.photos/600/400')
            .pipe(map_map((x) => x.url))
        : new Observable_Observable((subscriber) => {
            (async function () {
                subscriber.next((await fetch('https://picsum.photos/400/600')).url);
                subscriber.complete();
            })();
        }))).subscribe(url => {
        img.setAttribute('src', url);
    });
    gradual((v) => {
        img.style.opacity = ((1.0 - v) / 2).toString();
    }, null, 16000, 100, true);
}
//# sourceMappingURL=randImg.js.map
;// CONCATENATED MODULE: ./build/ts/Main.js











let etime = 0;
let enextSpawn = 7000;
let enextS = 3000 + enextSpawn * (0.5 + Math.random() / 2);
let ptime = 0;
let pcount = 0;
let pnextSpawn = 7000;
let pnextS = 3000 + pnextSpawn * (0.5 + Math.random() / 2);
new Game();
window['Game'] = Game;
let sceneSize = [1000, 700];
Game.sceneExtents.x = -sceneSize[0] / 2;
Game.sceneExtents.y = -sceneSize[1] / 2;
Game.cameraOffset.x = -sceneSize[0] / 2;
Game.cameraOffset.y = -sceneSize[1] / 2;
Game.sceneExtents.xSize = sceneSize[0];
Game.sceneExtents.ySize = sceneSize[1];
window['scene'] = new GameObject();
Object.assign(window['scene'], { position: { x: 0, y: 0 }, collider: false, size: { x: Game.sceneExtents.xSize, y: Game.sceneExtents.ySize }, centered: true, color: 'black' });
randImg();
let player = Game.player = window['player'] = new Player();
Game.Input.subKey('e', 1, () => {
    Game.reset();
});
let mouseCursor = new GameObject();
mouseCursor.size = { x: 40, y: 40 };
mouseCursor.collider = false;
mouseCursor.boundByScene = false;
mouseCursor.color = 'transparent';
mouseCursor.customStyle = "border: 3px solid pink; border-radius: 50%; opacity: 0.3; z-index:50;";
mouseCursor.Tick.subscribe(() => {
    mouseCursor.position = Game.Input.mouseW;
});
Game.sub('fireWeapon', (fireEv) => {
    if (player.hp <= 0)
        return;
    let weapon = fireEv.weapon;
    let b = ts_Bullet.shoot(player.position, VecDir(player.position, Game.Input.mouseW), 0, 0.9);
    b.color = weapons[weapon].color;
    b.damage = weapons[weapon].damage;
});
Game.Input.subKey('g', 1, () => {
    Game.timeScale = ((Game.timeScale > 0.99) ? 0.4 : 1.0);
});
function switchLevel(i) {
    if (!levels[i])
        return;
    Game.curLevel = i;
    Game.reset();
    window.uiMgr.T_Text.innerHTML = "Level " + i;
    gradual((i) => {
        window.uiMgr.T_Text.style.opacity = (1.0 - (i * i)).toString();
    }, null, 6000, 30, true);
    levels[i].load();
}
//Game.sub('levelSwitch',(l)=>console.log(l));
//Game.sub('restart',(l)=>console.log(l));
Game.events.subscribe(e => {
    console.log(">>>>>>>>>", e);
    //if(e.type=='weaponSwitch') curWeapon=e.value;
    if (e.type == 'levelSwitch')
        switchLevel(e.value);
    if (e.type == 'restart')
        switchLevel(Game.curLevel);
});
Game.ticks$.subscribe(function () {
    let cols = Game.CheckCollisions(ts_Bullet.bulletPool, [player, ..._Enemy.enemies]);
    for (var i = 0; i < cols.length; i++) {
        if (cols[i][1] == player) {
            if (cols[i][0].type === 1) {
                cols[i][0].Disable();
                player.hp -= cols[i][0].damage;
                if (player.hp <= 0) {
                    window.uiMgr.T_Text.innerHTML = "You are dead.";
                    window.uiMgr.T_Text.style.opacity = "1";
                }
            }
        }
        else {
            if (cols[i][0].type === 0) {
                cols[i][0].Disable();
                cols[i][1].hp -= cols[i][0].damage;
                console.log("enemy hurt");
                if (cols[i][1].hp <= 0) {
                    cols[i][1].Destroy();
                    Game.score++;
                }
            }
        }
    }
    //cols = Game.CheckCollisions(player.powerupsWorld,[player]) as any[][];
    for (var i = 0; i < player.powerupsWorld.length; i++) {
        if (VecDist(player.position, player.powerupsWorld[i].position) < 50) {
            //if(cols[i][0]==player||cols[i][1]==player){
            //player.powerups.push("Powerup");
            player.hp += 30;
            pcount--;
            //window['appComponent'].rerender();
            player.powerupsWorld[i].Destroy();
        }
    }
});
//Enemy.spawner();
/*

let esub = Game.ticks$.subscribe(function(deltaTime){
    etime+=deltaTime;
    console.log(etime);
    if(etime>enextS){
        etime = 0;
        let e = new Enemy();
        e.position = Game.generateRandomPoint(100);
        enextSpawn*=0.99;
        enextS = 3000 + enextSpawn * (0.5+Math.random()/2);
        console.log("SPAWN P");
    }

});
*/
/*
let psub = interval(10000).pipe(
    startWith(0),
    scan((acc) => acc * 0.99, 10),
    map((nextSpawn) => {
      console.log('Spawned');
      return nextSpawn;
    })
  ).subscribe();
  */
let psub = Game.ticks$.subscribe(function (deltaTime) {
    //return;
    if (pcount > 2)
        return;
    ptime += deltaTime;
    if (ptime > pnextS) {
        ptime = 0;
        pcount++;
        let e = new Powerup();
        e.position = Game.generateRandomPoint(100);
        pnextSpawn *= 0.99;
        pnextS = 3000 + pnextSpawn * (0.5 + Math.random() / 2);
    }
});
switchLevel(1);
//# sourceMappingURL=Main.js.map
/******/ })()
;