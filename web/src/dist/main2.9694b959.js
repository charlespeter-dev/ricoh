// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"lU2QL":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "42036d7a98ade5a7";
module.bundle.HMR_BUNDLE_ID = "f1efc10e9694b959";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, importScripts */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ("reload" in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                if (asset.type === "js") {
                    if (typeof document !== "undefined") {
                        let script = document.createElement("script");
                        script.src = asset.url;
                        return new Promise((resolve, reject)=>{
                            var _document$head;
                            script.onload = ()=>resolve(script);
                            script.onerror = reject;
                            (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
                        });
                    } else if (typeof importScripts === "function") return new Promise((resolve, reject)=>{
                        try {
                            importScripts(asset.url);
                        } catch (err) {
                            reject(err);
                        }
                    });
                }
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id1][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"jQjaL":[function(require,module,exports) {
var _carousel = require("../../../node_modules/bootstrap/js/src/carousel");
/**
 * @link https://getbootstrap.com/docs/5.1/components/carousel/#events
 * 
 * - get the hidden caption
 * - copy to another visible outside container
 */ let swhCarousel = document.getElementById("swh-carousel");
let visibleCaption = document.querySelector(".visible-caption");
swhCarousel.addEventListener("slide.bs.carousel", (e)=>{
    let activeElement = e.relatedTarget;
    let caption = activeElement.querySelector(".carousel-caption");
    visibleCaption.innerHTML = caption.innerHTML.trim();
});
/**
 * on document load, get the first caption, put it in the Visible Caption container
 */ document.addEventListener("DOMContentLoaded", ()=>{
    let firstCaption = document.querySelector(".carousel-caption");
    visibleCaption.innerHTML = firstCaption.innerHTML.trim();
});

},{"../../../node_modules/bootstrap/js/src/carousel":"cqfpO"}],"cqfpO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var _index = require("./util/index");
var _eventHandler = require("./dom/event-handler");
var _eventHandlerDefault = parcelHelpers.interopDefault(_eventHandler);
var _manipulator = require("./dom/manipulator");
var _manipulatorDefault = parcelHelpers.interopDefault(_manipulator);
var _selectorEngine = require("./dom/selector-engine");
var _selectorEngineDefault = parcelHelpers.interopDefault(_selectorEngine);
var _baseComponent = require("./base-component");
var _baseComponentDefault = parcelHelpers.interopDefault(_baseComponent);
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const NAME = "carousel";
const DATA_KEY = "bs.carousel";
const EVENT_KEY = `.${DATA_KEY}`;
const DATA_API_KEY = ".data-api";
const ARROW_LEFT_KEY = "ArrowLeft";
const ARROW_RIGHT_KEY = "ArrowRight";
const TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch
;
const SWIPE_THRESHOLD = 40;
const Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: "hover",
    wrap: true,
    touch: true
};
const DefaultType = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
};
const ORDER_NEXT = "next";
const ORDER_PREV = "prev";
const DIRECTION_LEFT = "left";
const DIRECTION_RIGHT = "right";
const KEY_TO_DIRECTION = {
    [ARROW_LEFT_KEY]: DIRECTION_RIGHT,
    [ARROW_RIGHT_KEY]: DIRECTION_LEFT
};
const EVENT_SLIDE = `slide${EVENT_KEY}`;
const EVENT_SLID = `slid${EVENT_KEY}`;
const EVENT_KEYDOWN = `keydown${EVENT_KEY}`;
const EVENT_MOUSEENTER = `mouseenter${EVENT_KEY}`;
const EVENT_MOUSELEAVE = `mouseleave${EVENT_KEY}`;
const EVENT_TOUCHSTART = `touchstart${EVENT_KEY}`;
const EVENT_TOUCHMOVE = `touchmove${EVENT_KEY}`;
const EVENT_TOUCHEND = `touchend${EVENT_KEY}`;
const EVENT_POINTERDOWN = `pointerdown${EVENT_KEY}`;
const EVENT_POINTERUP = `pointerup${EVENT_KEY}`;
const EVENT_DRAG_START = `dragstart${EVENT_KEY}`;
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;
const EVENT_CLICK_DATA_API = `click${EVENT_KEY}${DATA_API_KEY}`;
const CLASS_NAME_CAROUSEL = "carousel";
const CLASS_NAME_ACTIVE = "active";
const CLASS_NAME_SLIDE = "slide";
const CLASS_NAME_END = "carousel-item-end";
const CLASS_NAME_START = "carousel-item-start";
const CLASS_NAME_NEXT = "carousel-item-next";
const CLASS_NAME_PREV = "carousel-item-prev";
const CLASS_NAME_POINTER_EVENT = "pointer-event";
const SELECTOR_ACTIVE = ".active";
const SELECTOR_ACTIVE_ITEM = ".active.carousel-item";
const SELECTOR_ITEM = ".carousel-item";
const SELECTOR_ITEM_IMG = ".carousel-item img";
const SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev";
const SELECTOR_INDICATORS = ".carousel-indicators";
const SELECTOR_INDICATOR = "[data-bs-target]";
const SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const POINTER_TYPE_TOUCH = "touch";
const POINTER_TYPE_PEN = "pen";
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class Carousel extends (0, _baseComponentDefault.default) {
    constructor(element, config){
        super(element);
        this._items = null;
        this._interval = null;
        this._activeElement = null;
        this._isPaused = false;
        this._isSliding = false;
        this.touchTimeout = null;
        this.touchStartX = 0;
        this.touchDeltaX = 0;
        this._config = this._getConfig(config);
        this._indicatorsElement = (0, _selectorEngineDefault.default).findOne(SELECTOR_INDICATORS, this._element);
        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return Default;
    }
    static get NAME() {
        return NAME;
    }
    // Public
    next() {
        this._slide(ORDER_NEXT);
    }
    nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && (0, _index.isVisible)(this._element)) this.next();
    }
    prev() {
        this._slide(ORDER_PREV);
    }
    pause(event) {
        if (!event) this._isPaused = true;
        if ((0, _selectorEngineDefault.default).findOne(SELECTOR_NEXT_PREV, this._element)) {
            (0, _index.triggerTransitionEnd)(this._element);
            this.cycle(true);
        }
        clearInterval(this._interval);
        this._interval = null;
    }
    cycle(event) {
        if (!event) this._isPaused = false;
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
        if (this._config && this._config.interval && !this._isPaused) {
            this._updateInterval();
            this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
        }
    }
    to(index) {
        this._activeElement = (0, _selectorEngineDefault.default).findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) return;
        if (this._isSliding) {
            (0, _eventHandlerDefault.default).one(this._element, EVENT_SLID, ()=>this.to(index));
            return;
        }
        if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
        }
        const order = index > activeIndex ? ORDER_NEXT : ORDER_PREV;
        this._slide(order, this._items[index]);
    }
    // Private
    _getConfig(config) {
        config = {
            ...Default,
            ...(0, _manipulatorDefault.default).getDataAttributes(this._element),
            ...typeof config === "object" ? config : {}
        };
        (0, _index.typeCheckConfig)(NAME, config, DefaultType);
        return config;
    }
    _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= SWIPE_THRESHOLD) return;
        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        if (!direction) return;
        this._slide(direction > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
    _addEventListeners() {
        if (this._config.keyboard) (0, _eventHandlerDefault.default).on(this._element, EVENT_KEYDOWN, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            (0, _eventHandlerDefault.default).on(this._element, EVENT_MOUSEENTER, (event)=>this.pause(event));
            (0, _eventHandlerDefault.default).on(this._element, EVENT_MOUSELEAVE, (event)=>this.cycle(event));
        }
        if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        const hasPointerPenTouch = (event)=>{
            return this._pointerEvent && (event.pointerType === POINTER_TYPE_PEN || event.pointerType === POINTER_TYPE_TOUCH);
        };
        const start = (event)=>{
            if (hasPointerPenTouch(event)) this.touchStartX = event.clientX;
            else if (!this._pointerEvent) this.touchStartX = event.touches[0].clientX;
        };
        const move = (event)=>{
            // ensure swiping with one touch and not pinching
            this.touchDeltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this.touchStartX;
        };
        const end = (event1)=>{
            if (hasPointerPenTouch(event1)) this.touchDeltaX = event1.clientX - this.touchStartX;
            this._handleSwipe();
            if (this._config.pause === "hover") {
                // If it's a touch-enabled device, mouseenter/leave are fired as
                // part of the mouse compatibility events on first tap - the carousel
                // would stop cycling until user tapped out of it;
                // here, we listen for touchend, explicitly pause the carousel
                // (as if it's the second time we tap on it, mouseenter compat event
                // is NOT fired) and after a timeout (to allow for mouse compatibility
                // events to fire) we explicitly restart cycling
                this.pause();
                if (this.touchTimeout) clearTimeout(this.touchTimeout);
                this.touchTimeout = setTimeout((event)=>this.cycle(event), TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            }
        };
        (0, _selectorEngineDefault.default).find(SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
            (0, _eventHandlerDefault.default).on(itemImg, EVENT_DRAG_START, (event)=>event.preventDefault());
        });
        if (this._pointerEvent) {
            (0, _eventHandlerDefault.default).on(this._element, EVENT_POINTERDOWN, (event)=>start(event));
            (0, _eventHandlerDefault.default).on(this._element, EVENT_POINTERUP, (event)=>end(event));
            this._element.classList.add(CLASS_NAME_POINTER_EVENT);
        } else {
            (0, _eventHandlerDefault.default).on(this._element, EVENT_TOUCHSTART, (event)=>start(event));
            (0, _eventHandlerDefault.default).on(this._element, EVENT_TOUCHMOVE, (event)=>move(event));
            (0, _eventHandlerDefault.default).on(this._element, EVENT_TOUCHEND, (event)=>end(event));
        }
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(direction);
        }
    }
    _getItemIndex(element) {
        this._items = element && element.parentNode ? (0, _selectorEngineDefault.default).find(SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
    }
    _getItemByOrder(order, activeElement) {
        const isNext = order === ORDER_NEXT;
        return (0, _index.getNextActiveElement)(this._items, activeElement, isNext, this._config.wrap);
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
        const fromIndex = this._getItemIndex((0, _selectorEngineDefault.default).findOne(SELECTOR_ACTIVE_ITEM, this._element));
        return (0, _eventHandlerDefault.default).trigger(this._element, EVENT_SLIDE, {
            relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
        });
    }
    _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
            const activeIndicator = (0, _selectorEngineDefault.default).findOne(SELECTOR_ACTIVE, this._indicatorsElement);
            activeIndicator.classList.remove(CLASS_NAME_ACTIVE);
            activeIndicator.removeAttribute("aria-current");
            const indicators = (0, _selectorEngineDefault.default).find(SELECTOR_INDICATOR, this._indicatorsElement);
            for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(element)) {
                indicators[i].classList.add(CLASS_NAME_ACTIVE);
                indicators[i].setAttribute("aria-current", "true");
                break;
            }
        }
    }
    _updateInterval() {
        const element = this._activeElement || (0, _selectorEngineDefault.default).findOne(SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
        } else this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(directionOrOrder, element) {
        const order = this._directionToOrder(directionOrOrder);
        const activeElement = (0, _selectorEngineDefault.default).findOne(SELECTOR_ACTIVE_ITEM, this._element);
        const activeElementIndex = this._getItemIndex(activeElement);
        const nextElement = element || this._getItemByOrder(order, activeElement);
        const nextElementIndex = this._getItemIndex(nextElement);
        const isCycling = Boolean(this._interval);
        const isNext = order === ORDER_NEXT;
        const directionalClassName = isNext ? CLASS_NAME_START : CLASS_NAME_END;
        const orderClassName = isNext ? CLASS_NAME_NEXT : CLASS_NAME_PREV;
        const eventDirectionName = this._orderToDirection(order);
        if (nextElement && nextElement.classList.contains(CLASS_NAME_ACTIVE)) {
            this._isSliding = false;
            return;
        }
        if (this._isSliding) return;
        const slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        return;
        this._isSliding = true;
        if (isCycling) this.pause();
        this._setActiveIndicatorElement(nextElement);
        this._activeElement = nextElement;
        const triggerSlidEvent = ()=>{
            (0, _eventHandlerDefault.default).trigger(this._element, EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            });
        };
        if (this._element.classList.contains(CLASS_NAME_SLIDE)) {
            nextElement.classList.add(orderClassName);
            (0, _index.reflow)(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);
            const completeCallBack = ()=>{
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add(CLASS_NAME_ACTIVE);
                activeElement.classList.remove(CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
                this._isSliding = false;
                setTimeout(triggerSlidEvent, 0);
            };
            this._queueCallback(completeCallBack, activeElement, true);
        } else {
            activeElement.classList.remove(CLASS_NAME_ACTIVE);
            nextElement.classList.add(CLASS_NAME_ACTIVE);
            this._isSliding = false;
            triggerSlidEvent();
        }
        if (isCycling) this.cycle();
    }
    _directionToOrder(direction) {
        if (![
            DIRECTION_RIGHT,
            DIRECTION_LEFT
        ].includes(direction)) return direction;
        if ((0, _index.isRTL)()) return direction === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT;
        return direction === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV;
    }
    _orderToDirection(order) {
        if (![
            ORDER_NEXT,
            ORDER_PREV
        ].includes(order)) return order;
        if ((0, _index.isRTL)()) return order === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT;
        return order === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT;
    }
    // Static
    static carouselInterface(element, config) {
        const data = Carousel.getOrCreateInstance(element, config);
        let { _config  } = data;
        if (typeof config === "object") _config = {
            ..._config,
            ...config
        };
        const action = typeof config === "string" ? config : _config.slide;
        if (typeof config === "number") data.to(config);
        else if (typeof action === "string") {
            if (typeof data[action] === "undefined") throw new TypeError(`No method named "${action}"`);
            data[action]();
        } else if (_config.interval && _config.ride) {
            data.pause();
            data.cycle();
        }
    }
    static jQueryInterface(config) {
        return this.each(function() {
            Carousel.carouselInterface(this, config);
        });
    }
    static dataApiClickHandler(event) {
        const target = (0, _index.getElementFromSelector)(this);
        if (!target || !target.classList.contains(CLASS_NAME_CAROUSEL)) return;
        const config = {
            ...(0, _manipulatorDefault.default).getDataAttributes(target),
            ...(0, _manipulatorDefault.default).getDataAttributes(this)
        };
        const slideIndex = this.getAttribute("data-bs-slide-to");
        if (slideIndex) config.interval = false;
        Carousel.carouselInterface(target, config);
        if (slideIndex) Carousel.getInstance(target).to(slideIndex);
        event.preventDefault();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ (0, _eventHandlerDefault.default).on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler);
(0, _eventHandlerDefault.default).on(window, EVENT_LOAD_DATA_API, ()=>{
    const carousels = (0, _selectorEngineDefault.default).find(SELECTOR_DATA_RIDE);
    for(let i = 0, len = carousels.length; i < len; i++)Carousel.carouselInterface(carousels[i], Carousel.getInstance(carousels[i]));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */ (0, _index.defineJQueryPlugin)(Carousel);
exports.default = Carousel;

},{"./util/index":"lyX8s","./dom/event-handler":"a63ez","./dom/manipulator":"BMF5o","./dom/selector-engine":"2TEBH","./base-component":"kSsKw","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"lyX8s":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getElement", ()=>getElement);
parcelHelpers.export(exports, "getUID", ()=>getUID);
parcelHelpers.export(exports, "getSelectorFromElement", ()=>getSelectorFromElement);
parcelHelpers.export(exports, "getElementFromSelector", ()=>getElementFromSelector);
parcelHelpers.export(exports, "getTransitionDurationFromElement", ()=>getTransitionDurationFromElement);
parcelHelpers.export(exports, "triggerTransitionEnd", ()=>triggerTransitionEnd);
parcelHelpers.export(exports, "isElement", ()=>isElement);
parcelHelpers.export(exports, "typeCheckConfig", ()=>typeCheckConfig);
parcelHelpers.export(exports, "isVisible", ()=>isVisible);
parcelHelpers.export(exports, "isDisabled", ()=>isDisabled);
parcelHelpers.export(exports, "findShadowRoot", ()=>findShadowRoot);
parcelHelpers.export(exports, "noop", ()=>noop);
parcelHelpers.export(exports, "getNextActiveElement", ()=>getNextActiveElement);
parcelHelpers.export(exports, "reflow", ()=>reflow);
parcelHelpers.export(exports, "getjQuery", ()=>getjQuery);
parcelHelpers.export(exports, "onDOMContentLoaded", ()=>onDOMContentLoaded);
parcelHelpers.export(exports, "isRTL", ()=>isRTL);
parcelHelpers.export(exports, "defineJQueryPlugin", ()=>defineJQueryPlugin);
parcelHelpers.export(exports, "execute", ()=>execute);
parcelHelpers.export(exports, "executeAfterTransition", ()=>executeAfterTransition);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const MAX_UID = 1000000;
const MILLISECONDS_MULTIPLIER = 1000;
const TRANSITION_END = "transitionend";
// Shoutout AngusCroll (https://goo.gl/pxwQGp)
const toType = (obj)=>{
    if (obj === null || obj === undefined) return `${obj}`;
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */ const getUID = (prefix)=>{
    do prefix += Math.floor(Math.random() * MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttr = element.getAttribute("href");
        // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttr || !hrefAttr.includes("#") && !hrefAttr.startsWith(".")) return null;
        // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttr.includes("#") && !hrefAttr.startsWith("#")) hrefAttr = `#${hrefAttr.split("#")[1]}`;
        selector = hrefAttr && hrefAttr !== "#" ? hrefAttr.trim() : null;
    }
    return selector;
};
const getSelectorFromElement = (element)=>{
    const selector = getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
const getElementFromSelector = (element)=>{
    const selector = getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
const getTransitionDurationFromElement = (element)=>{
    if (!element) return 0;
    // Get transition-duration of the element
    let { transitionDuration , transitionDelay  } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * MILLISECONDS_MULTIPLIER;
};
const triggerTransitionEnd = (element)=>{
    element.dispatchEvent(new Event(TRANSITION_END));
};
const isElement = (obj)=>{
    if (!obj || typeof obj !== "object") return false;
    if (typeof obj.jquery !== "undefined") obj = obj[0];
    return typeof obj.nodeType !== "undefined";
};
const getElement = (obj)=>{
    if (isElement(obj)) return obj.jquery ? obj[0] : obj;
    if (typeof obj === "string" && obj.length > 0) return document.querySelector(obj);
    return null;
};
const typeCheckConfig = (componentName, config, configTypes)=>{
    Object.keys(configTypes).forEach((property)=>{
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && isElement(value) ? "element" : toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    });
};
const isVisible = (element)=>{
    if (!isElement(element) || element.getClientRects().length === 0) return false;
    return getComputedStyle(element).getPropertyValue("visibility") === "visible";
};
const isDisabled = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const findShadowRoot = (element)=>{
    if (!document.documentElement.attachShadow) return null;
    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
    // when we don't find a shadow root
    if (!element.parentNode) return null;
    return findShadowRoot(element.parentNode);
};
const noop = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const reflow = (element)=>{
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
};
const getjQuery = ()=>{
    const { jQuery  } = window;
    if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return jQuery;
    return null;
};
const DOMContentLoadedCallbacks = [];
const onDOMContentLoaded = (callback1)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            DOMContentLoadedCallbacks.forEach((callback)=>callback());
        });
        DOMContentLoadedCallbacks.push(callback1);
    } else callback1();
};
const isRTL = ()=>document.documentElement.dir === "rtl";
const defineJQueryPlugin = (plugin)=>{
    onDOMContentLoaded(()=>{
        const $ = getjQuery();
        /* istanbul ignore if */ if ($) {
            const name = plugin.NAME;
            const JQUERY_NO_CONFLICT = $.fn[name];
            $.fn[name] = plugin.jQueryInterface;
            $.fn[name].Constructor = plugin;
            $.fn[name].noConflict = ()=>{
                $.fn[name] = JQUERY_NO_CONFLICT;
                return plugin.jQueryInterface;
            };
        }
    });
};
const execute = (callback)=>{
    if (typeof callback === "function") callback();
};
const executeAfterTransition = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        execute(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = getTransitionDurationFromElement(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target  })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener(TRANSITION_END, handler);
        execute(callback);
    };
    transitionElement.addEventListener(TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) triggerTransitionEnd(transitionElement);
    }, emulatedDuration);
};
/**
 * Return the previous/next element of a list.
 *
 * @param {array} list    The list of elements
 * @param activeElement   The active element
 * @param shouldGetNext   Choose to get next or previous element
 * @param isCycleAllowed
 * @return {Element|elem} The proper element
 */ const getNextActiveElement = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    let index = list.indexOf(activeElement);
    // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
    if (index === -1) return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"j7FRh":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"a63ez":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var _index = require("../util/index");
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const stripNameRegex = /\..*/;
const stripUidRegex = /::\d+$/;
const eventRegistry = {} // Events storage
;
let uidEvent = 1;
const customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const customEventsRegex = /^(mouseenter|mouseleave)/i;
const nativeEvents = new Set([
    "click",
    "dblclick",
    "mouseup",
    "mousedown",
    "contextmenu",
    "mousewheel",
    "DOMMouseScroll",
    "mouseover",
    "mouseout",
    "mousemove",
    "selectstart",
    "selectend",
    "keydown",
    "keypress",
    "keyup",
    "orientationchange",
    "touchstart",
    "touchmove",
    "touchend",
    "touchcancel",
    "pointerdown",
    "pointermove",
    "pointerup",
    "pointerleave",
    "pointercancel",
    "gesturestart",
    "gesturechange",
    "gestureend",
    "focus",
    "blur",
    "change",
    "reset",
    "select",
    "submit",
    "focusin",
    "focusout",
    "load",
    "unload",
    "beforeunload",
    "resize",
    "move",
    "DOMContentLoaded",
    "readystatechange",
    "error",
    "abort",
    "scroll"
]);
/**
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */ function getUidEvent(element, uid) {
    return uid && `${uid}::${uidEvent++}` || element.uidEvent || uidEvent++;
}
function getEvent(element) {
    const uid = getUidEvent(element);
    element.uidEvent = uid;
    eventRegistry[uid] = eventRegistry[uid] || {};
    return eventRegistry[uid];
}
function bootstrapHandler(element, fn) {
    return function handler(event) {
        event.delegateTarget = element;
        if (handler.oneOff) EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target  } = event; target && target !== this; target = target.parentNode){
            for(let i = domElements.length; i--;)if (domElements[i] === target) {
                event.delegateTarget = target;
                if (handler.oneOff) EventHandler.off(element, event.type, selector, fn);
                return fn.apply(target, [
                    event
                ]);
            }
        }
        // To please ESLint
        return null;
    };
}
function findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);
    for(let i = 0, len = uidEventList.length; i < len; i++){
        const event = events[uidEventList[i]];
        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
    }
    return null;
}
function normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === "string";
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = getTypeEvent(originalTypeEvent);
    const isNative = nativeEvents.has(typeEvent);
    if (!isNative) typeEvent = originalTypeEvent;
    return [
        delegation,
        originalHandler,
        typeEvent
    ];
}
function addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    if (!handler) {
        handler = delegationFn;
        delegationFn = null;
    }
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (customEventsRegex.test(originalTypeEvent)) {
        const wrapFn = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        if (delegationFn) delegationFn = wrapFn(delegationFn);
        else handler = wrapFn(handler);
    }
    const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
    }
    const uid = getUidEvent(originalHandler, originalTypeEvent.replace(namespaceRegex, ""));
    const fn1 = delegation ? bootstrapDelegationHandler(element, handler, delegationFn) : bootstrapHandler(element, handler);
    fn1.delegationSelector = delegation ? handler : null;
    fn1.originalHandler = originalHandler;
    fn1.oneOff = oneOff;
    fn1.uidEvent = uid;
    handlers[uid] = fn1;
    element.addEventListener(typeEvent, fn1, delegation);
}
function removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach((handlerKey)=>{
        if (handlerKey.includes(namespace)) {
            const event = storeElementEvent[handlerKey];
            removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
    });
}
function getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace(stripNameRegex, "");
    return customEvents[event] || event;
}
const EventHandler = {
    on (element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, false);
    },
    one (element, event, handler, delegationFn) {
        addHandler(element, event, handler, delegationFn, true);
    },
    off (element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [delegation, originalHandler, typeEvent] = normalizeParams(originalTypeEvent, handler, delegationFn);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = getEvent(element);
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof originalHandler !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!events || !events[typeEvent]) return;
            removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
            return;
        }
        if (isNamespace) Object.keys(events).forEach((elementEvent)=>{
            removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
        const storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach((keyHandlers)=>{
            const handlerKey = keyHandlers.replace(stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = (0, _index.getjQuery)();
        const typeEvent = getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        const isNative = nativeEvents.has(typeEvent);
        let jQueryEvent;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        let evt = null;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        if (isNative) {
            evt = document.createEvent("HTMLEvents");
            evt.initEvent(typeEvent, bubbles, true);
        } else evt = new CustomEvent(event, {
            bubbles,
            cancelable: true
        });
        // merge custom information in our event
        if (typeof args !== "undefined") Object.keys(args).forEach((key)=>{
            Object.defineProperty(evt, key, {
                get () {
                    return args[key];
                }
            });
        });
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && typeof jQueryEvent !== "undefined") jQueryEvent.preventDefault();
        return evt;
    }
};
exports.default = EventHandler;

},{"../util/index":"lyX8s","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"BMF5o":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function normalizeData(val) {
    if (val === "true") return true;
    if (val === "false") return false;
    if (val === Number(val).toString()) return Number(val);
    if (val === "" || val === "null") return null;
    return val;
}
function normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        Object.keys(element.dataset).filter((key)=>key.startsWith("bs")).forEach((key)=>{
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = normalizeData(element.dataset[key]);
        });
        return attributes;
    },
    getDataAttribute (element, key) {
        return normalizeData(element.getAttribute(`data-bs-${normalizeDataKey(key)}`));
    },
    offset (element) {
        const rect = element.getBoundingClientRect();
        return {
            top: rect.top + window.pageYOffset,
            left: rect.left + window.pageXOffset
        };
    },
    position (element) {
        return {
            top: element.offsetTop,
            left: element.offsetLeft
        };
    }
};
exports.default = Manipulator;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"2TEBH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ var _index = require("../util/index");
const NODE_TEXT = 3;
const SelectorEngine = {
    find (selector, element = document.documentElement) {
        return [].concat(...Element.prototype.querySelectorAll.call(element, selector));
    },
    findOne (selector, element = document.documentElement) {
        return Element.prototype.querySelector.call(element, selector);
    },
    children (element, selector) {
        return [].concat(...element.children).filter((child)=>child.matches(selector));
    },
    parents (element, selector) {
        const parents = [];
        let ancestor = element.parentNode;
        while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== NODE_TEXT){
            if (ancestor.matches(selector)) parents.push(ancestor);
            ancestor = ancestor.parentNode;
        }
        return parents;
    },
    prev (element, selector) {
        let previous = element.previousElementSibling;
        while(previous){
            if (previous.matches(selector)) return [
                previous
            ];
            previous = previous.previousElementSibling;
        }
        return [];
    },
    next (element, selector) {
        let next = element.nextElementSibling;
        while(next){
            if (next.matches(selector)) return [
                next
            ];
            next = next.nextElementSibling;
        }
        return [];
    },
    focusableChildren (element) {
        const focusables = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]'
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(", ");
        return this.find(focusables, element).filter((el)=>!(0, _index.isDisabled)(el) && (0, _index.isVisible)(el));
    }
};
exports.default = SelectorEngine;

},{"../util/index":"lyX8s","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"kSsKw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var _data = require("./dom/data");
var _dataDefault = parcelHelpers.interopDefault(_data);
var _index = require("./util/index");
var _eventHandler = require("./dom/event-handler");
var _eventHandlerDefault = parcelHelpers.interopDefault(_eventHandler);
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const VERSION = "5.1.3";
class BaseComponent {
    constructor(element){
        element = (0, _index.getElement)(element);
        if (!element) return;
        this._element = element;
        (0, _dataDefault.default).set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        (0, _dataDefault.default).remove(this._element, this.constructor.DATA_KEY);
        (0, _eventHandlerDefault.default).off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach((propertyName)=>{
            this[propertyName] = null;
        });
    }
    _queueCallback(callback, element, isAnimated = true) {
        (0, _index.executeAfterTransition)(callback, element, isAnimated);
    }
    /** Static */ static getInstance(element) {
        return (0, _dataDefault.default).get((0, _index.getElement)(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return VERSION;
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
}
exports.default = BaseComponent;

},{"./dom/data":"6cC82","./util/index":"lyX8s","./dom/event-handler":"a63ez","@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}],"6cC82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const elementMap = new Map();
exports.default = {
    set (element, key, instance) {
        if (!elementMap.has(element)) elementMap.set(element, new Map());
        const instanceMap = elementMap.get(element);
        // make it clear we only want one instance per element
        // can be removed later when multiple key/instances are fine to be used
        if (!instanceMap.has(key) && instanceMap.size !== 0) {
            // eslint-disable-next-line no-console
            console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(instanceMap.keys())[0]}.`);
            return;
        }
        instanceMap.set(key, instance);
    },
    get (element, key) {
        if (elementMap.has(element)) return elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!elementMap.has(element)) return;
        const instanceMap = elementMap.get(element);
        instanceMap.delete(key);
        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) elementMap.delete(element);
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"j7FRh"}]},["lU2QL","jQjaL"], "jQjaL", "parcelRequire2f87")

