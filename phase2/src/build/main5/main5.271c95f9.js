var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire2f87"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire2f87"] = parcelRequire;
}

var $jpl1o = parcelRequire("jpl1o");

var $4tBqP = parcelRequire("4tBqP");

var $6aLfT = parcelRequire("6aLfT");

var $7Pvka = parcelRequire("7Pvka");
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const $b53d16494e490efd$var$NAME = "tab";
const $b53d16494e490efd$var$DATA_KEY = "bs.tab";
const $b53d16494e490efd$var$EVENT_KEY = `.${$b53d16494e490efd$var$DATA_KEY}`;
const $b53d16494e490efd$var$DATA_API_KEY = ".data-api";
const $b53d16494e490efd$var$EVENT_HIDE = `hide${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_HIDDEN = `hidden${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_SHOW = `show${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_SHOWN = `shown${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_CLICK_DATA_API = `click${$b53d16494e490efd$var$EVENT_KEY}${$b53d16494e490efd$var$DATA_API_KEY}`;
const $b53d16494e490efd$var$CLASS_NAME_DROPDOWN_MENU = "dropdown-menu";
const $b53d16494e490efd$var$CLASS_NAME_ACTIVE = "active";
const $b53d16494e490efd$var$CLASS_NAME_FADE = "fade";
const $b53d16494e490efd$var$CLASS_NAME_SHOW = "show";
const $b53d16494e490efd$var$SELECTOR_DROPDOWN = ".dropdown";
const $b53d16494e490efd$var$SELECTOR_NAV_LIST_GROUP = ".nav, .list-group";
const $b53d16494e490efd$var$SELECTOR_ACTIVE = ".active";
const $b53d16494e490efd$var$SELECTOR_ACTIVE_UL = ":scope > li > .active";
const $b53d16494e490efd$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]';
const $b53d16494e490efd$var$SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const $b53d16494e490efd$var$SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class $b53d16494e490efd$var$Tab extends (0, $7Pvka.default) {
    // Getters
    static get NAME() {
        return $b53d16494e490efd$var$NAME;
    }
    // Public
    show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($b53d16494e490efd$var$CLASS_NAME_ACTIVE)) return;
        let previous;
        const target = (0, $jpl1o.getElementFromSelector)(this._element);
        const listElement = this._element.closest($b53d16494e490efd$var$SELECTOR_NAV_LIST_GROUP);
        if (listElement) {
            const itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? $b53d16494e490efd$var$SELECTOR_ACTIVE_UL : $b53d16494e490efd$var$SELECTOR_ACTIVE;
            previous = (0, $6aLfT.default).find(itemSelector, listElement);
            previous = previous[previous.length - 1];
        }
        const hideEvent = previous ? (0, $4tBqP.default).trigger(previous, $b53d16494e490efd$var$EVENT_HIDE, {
            relatedTarget: this._element
        }) : null;
        const showEvent = (0, $4tBqP.default).trigger(this._element, $b53d16494e490efd$var$EVENT_SHOW, {
            relatedTarget: previous
        });
        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
        this._activate(this._element, listElement);
        const complete = ()=>{
            (0, $4tBqP.default).trigger(previous, $b53d16494e490efd$var$EVENT_HIDDEN, {
                relatedTarget: this._element
            });
            (0, $4tBqP.default).trigger(this._element, $b53d16494e490efd$var$EVENT_SHOWN, {
                relatedTarget: previous
            });
        };
        if (target) this._activate(target, target.parentNode, complete);
        else complete();
    }
    // Private
    _activate(element, container, callback) {
        const activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? (0, $6aLfT.default).find($b53d16494e490efd$var$SELECTOR_ACTIVE_UL, container) : (0, $6aLfT.default).children(container, $b53d16494e490efd$var$SELECTOR_ACTIVE);
        const active = activeElements[0];
        const isTransitioning = callback && active && active.classList.contains($b53d16494e490efd$var$CLASS_NAME_FADE);
        const complete = ()=>this._transitionComplete(element, active, callback);
        if (active && isTransitioning) {
            active.classList.remove($b53d16494e490efd$var$CLASS_NAME_SHOW);
            this._queueCallback(complete, element, true);
        } else complete();
    }
    _transitionComplete(element, active, callback) {
        if (active) {
            active.classList.remove($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
            const dropdownChild = (0, $6aLfT.default).findOne($b53d16494e490efd$var$SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
            if (dropdownChild) dropdownChild.classList.remove($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
            if (active.getAttribute("role") === "tab") active.setAttribute("aria-selected", false);
        }
        element.classList.add($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
        if (element.getAttribute("role") === "tab") element.setAttribute("aria-selected", true);
        (0, $jpl1o.reflow)(element);
        if (element.classList.contains($b53d16494e490efd$var$CLASS_NAME_FADE)) element.classList.add($b53d16494e490efd$var$CLASS_NAME_SHOW);
        let parent = element.parentNode;
        if (parent && parent.nodeName === "LI") parent = parent.parentNode;
        if (parent && parent.classList.contains($b53d16494e490efd$var$CLASS_NAME_DROPDOWN_MENU)) {
            const dropdownElement = element.closest($b53d16494e490efd$var$SELECTOR_DROPDOWN);
            if (dropdownElement) (0, $6aLfT.default).find($b53d16494e490efd$var$SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach((dropdown)=>dropdown.classList.add($b53d16494e490efd$var$CLASS_NAME_ACTIVE));
            element.setAttribute("aria-expanded", true);
        }
        if (callback) callback();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $b53d16494e490efd$var$Tab.getOrCreateInstance(this);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ (0, $4tBqP.default).on(document, $b53d16494e490efd$var$EVENT_CLICK_DATA_API, $b53d16494e490efd$var$SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if ((0, $jpl1o.isDisabled)(this)) return;
    const data = $b53d16494e490efd$var$Tab.getOrCreateInstance(this);
    data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */ (0, $jpl1o.defineJQueryPlugin)($b53d16494e490efd$var$Tab);
var $b53d16494e490efd$export$2e2bcd8739ae039 = $b53d16494e490efd$var$Tab;


parcelRequire("5yoFf");


