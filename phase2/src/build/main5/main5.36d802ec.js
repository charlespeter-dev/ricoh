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
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 
var $jpl1o = parcelRequire("jpl1o");

var $4tBqP = parcelRequire("4tBqP");

var $dEVUr = parcelRequire("dEVUr");

var $6aLfT = parcelRequire("6aLfT");
/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 
var $831ze = parcelRequire("831ze");

var $4tBqP = parcelRequire("4tBqP");

var $jpl1o = parcelRequire("jpl1o");
/**
 * Constants
 */ const $f26ea41c696aca8a$var$NAME = "swipe";
const $f26ea41c696aca8a$var$EVENT_KEY = ".bs.swipe";
const $f26ea41c696aca8a$var$EVENT_TOUCHSTART = `touchstart${$f26ea41c696aca8a$var$EVENT_KEY}`;
const $f26ea41c696aca8a$var$EVENT_TOUCHMOVE = `touchmove${$f26ea41c696aca8a$var$EVENT_KEY}`;
const $f26ea41c696aca8a$var$EVENT_TOUCHEND = `touchend${$f26ea41c696aca8a$var$EVENT_KEY}`;
const $f26ea41c696aca8a$var$EVENT_POINTERDOWN = `pointerdown${$f26ea41c696aca8a$var$EVENT_KEY}`;
const $f26ea41c696aca8a$var$EVENT_POINTERUP = `pointerup${$f26ea41c696aca8a$var$EVENT_KEY}`;
const $f26ea41c696aca8a$var$POINTER_TYPE_TOUCH = "touch";
const $f26ea41c696aca8a$var$POINTER_TYPE_PEN = "pen";
const $f26ea41c696aca8a$var$CLASS_NAME_POINTER_EVENT = "pointer-event";
const $f26ea41c696aca8a$var$SWIPE_THRESHOLD = 40;
const $f26ea41c696aca8a$var$Default = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
};
const $f26ea41c696aca8a$var$DefaultType = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
};
/**
 * Class definition
 */ class $f26ea41c696aca8a$var$Swipe extends (0, $831ze.default) {
    constructor(element, config){
        super();
        this._element = element;
        if (!element || !$f26ea41c696aca8a$var$Swipe.isSupported()) return;
        this._config = this._getConfig(config);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
    }
    // Getters
    static get Default() {
        return $f26ea41c696aca8a$var$Default;
    }
    static get DefaultType() {
        return $f26ea41c696aca8a$var$DefaultType;
    }
    static get NAME() {
        return $f26ea41c696aca8a$var$NAME;
    }
    // Public
    dispose() {
        (0, $4tBqP.default).off(this._element, $f26ea41c696aca8a$var$EVENT_KEY);
    }
    // Private
    _start(event) {
        if (!this._supportPointerEvents) {
            this._deltaX = event.touches[0].clientX;
            return;
        }
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX;
    }
    _end(event) {
        if (this._eventIsPointerPenTouch(event)) this._deltaX = event.clientX - this._deltaX;
        this._handleSwipe();
        (0, $jpl1o.execute)(this._config.endCallback);
    }
    _move(event) {
        this._deltaX = event.touches && event.touches.length > 1 ? 0 : event.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
        const absDeltaX = Math.abs(this._deltaX);
        if (absDeltaX <= $f26ea41c696aca8a$var$SWIPE_THRESHOLD) return;
        const direction = absDeltaX / this._deltaX;
        this._deltaX = 0;
        if (!direction) return;
        (0, $jpl1o.execute)(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            (0, $4tBqP.default).on(this._element, $f26ea41c696aca8a$var$EVENT_POINTERDOWN, (event)=>this._start(event));
            (0, $4tBqP.default).on(this._element, $f26ea41c696aca8a$var$EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add($f26ea41c696aca8a$var$CLASS_NAME_POINTER_EVENT);
        } else {
            (0, $4tBqP.default).on(this._element, $f26ea41c696aca8a$var$EVENT_TOUCHSTART, (event)=>this._start(event));
            (0, $4tBqP.default).on(this._element, $f26ea41c696aca8a$var$EVENT_TOUCHMOVE, (event)=>this._move(event));
            (0, $4tBqP.default).on(this._element, $f26ea41c696aca8a$var$EVENT_TOUCHEND, (event)=>this._end(event));
        }
    }
    _eventIsPointerPenTouch(event) {
        return this._supportPointerEvents && (event.pointerType === $f26ea41c696aca8a$var$POINTER_TYPE_PEN || event.pointerType === $f26ea41c696aca8a$var$POINTER_TYPE_TOUCH);
    }
    // Static
    static isSupported() {
        return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
}
var $f26ea41c696aca8a$export$2e2bcd8739ae039 = $f26ea41c696aca8a$var$Swipe;



var $7Pvka = parcelRequire("7Pvka");
/**
 * Constants
 */ const $29cabbdf8359b033$var$NAME = "carousel";
const $29cabbdf8359b033$var$DATA_KEY = "bs.carousel";
const $29cabbdf8359b033$var$EVENT_KEY = `.${$29cabbdf8359b033$var$DATA_KEY}`;
const $29cabbdf8359b033$var$DATA_API_KEY = ".data-api";
const $29cabbdf8359b033$var$ARROW_LEFT_KEY = "ArrowLeft";
const $29cabbdf8359b033$var$ARROW_RIGHT_KEY = "ArrowRight";
const $29cabbdf8359b033$var$TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch
;
const $29cabbdf8359b033$var$ORDER_NEXT = "next";
const $29cabbdf8359b033$var$ORDER_PREV = "prev";
const $29cabbdf8359b033$var$DIRECTION_LEFT = "left";
const $29cabbdf8359b033$var$DIRECTION_RIGHT = "right";
const $29cabbdf8359b033$var$EVENT_SLIDE = `slide${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_SLID = `slid${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_KEYDOWN = `keydown${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_MOUSEENTER = `mouseenter${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_MOUSELEAVE = `mouseleave${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_DRAG_START = `dragstart${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_LOAD_DATA_API = `load${$29cabbdf8359b033$var$EVENT_KEY}${$29cabbdf8359b033$var$DATA_API_KEY}`;
const $29cabbdf8359b033$var$EVENT_CLICK_DATA_API = `click${$29cabbdf8359b033$var$EVENT_KEY}${$29cabbdf8359b033$var$DATA_API_KEY}`;
const $29cabbdf8359b033$var$CLASS_NAME_CAROUSEL = "carousel";
const $29cabbdf8359b033$var$CLASS_NAME_ACTIVE = "active";
const $29cabbdf8359b033$var$CLASS_NAME_SLIDE = "slide";
const $29cabbdf8359b033$var$CLASS_NAME_END = "carousel-item-end";
const $29cabbdf8359b033$var$CLASS_NAME_START = "carousel-item-start";
const $29cabbdf8359b033$var$CLASS_NAME_NEXT = "carousel-item-next";
const $29cabbdf8359b033$var$CLASS_NAME_PREV = "carousel-item-prev";
const $29cabbdf8359b033$var$SELECTOR_ACTIVE = ".active";
const $29cabbdf8359b033$var$SELECTOR_ITEM = ".carousel-item";
const $29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM = $29cabbdf8359b033$var$SELECTOR_ACTIVE + $29cabbdf8359b033$var$SELECTOR_ITEM;
const $29cabbdf8359b033$var$SELECTOR_ITEM_IMG = ".carousel-item img";
const $29cabbdf8359b033$var$SELECTOR_INDICATORS = ".carousel-indicators";
const $29cabbdf8359b033$var$SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const $29cabbdf8359b033$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $29cabbdf8359b033$var$KEY_TO_DIRECTION = {
    [$29cabbdf8359b033$var$ARROW_LEFT_KEY]: $29cabbdf8359b033$var$DIRECTION_RIGHT,
    [$29cabbdf8359b033$var$ARROW_RIGHT_KEY]: $29cabbdf8359b033$var$DIRECTION_LEFT
};
const $29cabbdf8359b033$var$Default = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
};
const $29cabbdf8359b033$var$DefaultType = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
};
/**
 * Class definition
 */ class $29cabbdf8359b033$var$Carousel extends (0, $7Pvka.default) {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_INDICATORS, this._element);
        this._addEventListeners();
        if (this._config.ride === $29cabbdf8359b033$var$CLASS_NAME_CAROUSEL) this.cycle();
    }
    // Getters
    static get Default() {
        return $29cabbdf8359b033$var$Default;
    }
    static get DefaultType() {
        return $29cabbdf8359b033$var$DefaultType;
    }
    static get NAME() {
        return $29cabbdf8359b033$var$NAME;
    }
    // Public
    next() {
        this._slide($29cabbdf8359b033$var$ORDER_NEXT);
    }
    nextWhenVisible() {
        // FIXME TODO use `document.visibilityState`
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && (0, $jpl1o.isVisible)(this._element)) this.next();
    }
    prev() {
        this._slide($29cabbdf8359b033$var$ORDER_PREV);
    }
    pause() {
        if (this._isSliding) (0, $jpl1o.triggerTransitionEnd)(this._element);
        this._clearInterval();
    }
    cycle() {
        this._clearInterval();
        this._updateInterval();
        this._interval = setInterval(()=>this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
        if (!this._config.ride) return;
        if (this._isSliding) {
            (0, $4tBqP.default).one(this._element, $29cabbdf8359b033$var$EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            (0, $4tBqP.default).one(this._element, $29cabbdf8359b033$var$EVENT_SLID, ()=>this.to(index));
            return;
        }
        const activeIndex = this._getItemIndex(this._getActive());
        if (activeIndex === index) return;
        const order = index > activeIndex ? $29cabbdf8359b033$var$ORDER_NEXT : $29cabbdf8359b033$var$ORDER_PREV;
        this._slide(order, items[index]);
    }
    dispose() {
        if (this._swipeHelper) this._swipeHelper.dispose();
        super.dispose();
    }
    // Private
    _configAfterMerge(config) {
        config.defaultInterval = config.interval;
        return config;
    }
    _addEventListeners() {
        if (this._config.keyboard) (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSEENTER, ()=>this.pause());
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSELEAVE, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && (0, $f26ea41c696aca8a$export$2e2bcd8739ae039).isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_ITEM_IMG, this._element))(0, $4tBqP.default).on(img, $29cabbdf8359b033$var$EVENT_DRAG_START, (event)=>event.preventDefault());
        const endCallBack = ()=>{
            if (this._config.pause !== "hover") return;
            // If it's a touch-enabled device, mouseenter/leave are fired as
            // part of the mouse compatibility events on first tap - the carousel
            // would stop cycling until user tapped out of it;
            // here, we listen for touchend, explicitly pause the carousel
            // (as if it's the second time we tap on it, mouseenter compat event
            // is NOT fired) and after a timeout (to allow for mouse compatibility
            // events to fire) we explicitly restart cycling
            this.pause();
            if (this.touchTimeout) clearTimeout(this.touchTimeout);
            this.touchTimeout = setTimeout(()=>this._maybeEnableCycle(), $29cabbdf8359b033$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
        };
        const swipeConfig = {
            leftCallback: ()=>this._slide(this._directionToOrder($29cabbdf8359b033$var$DIRECTION_LEFT)),
            rightCallback: ()=>this._slide(this._directionToOrder($29cabbdf8359b033$var$DIRECTION_RIGHT)),
            endCallback: endCallBack
        };
        this._swipeHelper = new (0, $f26ea41c696aca8a$export$2e2bcd8739ae039)(this._element, swipeConfig);
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = $29cabbdf8359b033$var$KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(this._directionToOrder(direction));
        }
    }
    _getItemIndex(element) {
        return this._getItems().indexOf(element);
    }
    _setActiveIndicatorElement(index) {
        if (!this._indicatorsElement) return;
        const activeIndicator = (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = (0, $6aLfT.default).findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
        if (newActiveIndicator) {
            newActiveIndicator.classList.add($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
            newActiveIndicator.setAttribute("aria-current", "true");
        }
    }
    _updateInterval() {
        const element = this._activeElement || this._getActive();
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        this._config.interval = elementInterval || this._config.defaultInterval;
    }
    _slide(order, element = null) {
        if (this._isSliding) return;
        const activeElement = this._getActive();
        const isNext = order === $29cabbdf8359b033$var$ORDER_NEXT;
        const nextElement = element || (0, $jpl1o.getNextActiveElement)(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return (0, $4tBqP.default).trigger(this._element, eventName, {
                relatedTarget: nextElement,
                direction: this._orderToDirection(order),
                from: this._getItemIndex(activeElement),
                to: nextElementIndex
            });
        };
        const slideEvent = triggerEvent($29cabbdf8359b033$var$EVENT_SLIDE);
        if (slideEvent.defaultPrevented) return;
        if (!activeElement || !nextElement) // Some weirdness is happening, so we bail
        // todo: change tests that use empty divs to avoid this check
        return;
        const isCycling = Boolean(this._interval);
        this.pause();
        this._isSliding = true;
        this._setActiveIndicatorElement(nextElementIndex);
        this._activeElement = nextElement;
        const directionalClassName = isNext ? $29cabbdf8359b033$var$CLASS_NAME_START : $29cabbdf8359b033$var$CLASS_NAME_END;
        const orderClassName = isNext ? $29cabbdf8359b033$var$CLASS_NAME_NEXT : $29cabbdf8359b033$var$CLASS_NAME_PREV;
        nextElement.classList.add(orderClassName);
        (0, $jpl1o.reflow)(nextElement);
        activeElement.classList.add(directionalClassName);
        nextElement.classList.add(directionalClassName);
        const completeCallBack = ()=>{
            nextElement.classList.remove(directionalClassName, orderClassName);
            nextElement.classList.add($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
            activeElement.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
            this._isSliding = false;
            triggerEvent($29cabbdf8359b033$var$EVENT_SLID);
        };
        this._queueCallback(completeCallBack, activeElement, this._isAnimated());
        if (isCycling) this.cycle();
    }
    _isAnimated() {
        return this._element.classList.contains($29cabbdf8359b033$var$CLASS_NAME_SLIDE);
    }
    _getActive() {
        return (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if ((0, $jpl1o.isRTL)()) return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_PREV : $29cabbdf8359b033$var$ORDER_NEXT;
        return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_NEXT : $29cabbdf8359b033$var$ORDER_PREV;
    }
    _orderToDirection(order) {
        if ((0, $jpl1o.isRTL)()) return order === $29cabbdf8359b033$var$ORDER_PREV ? $29cabbdf8359b033$var$DIRECTION_LEFT : $29cabbdf8359b033$var$DIRECTION_RIGHT;
        return order === $29cabbdf8359b033$var$ORDER_PREV ? $29cabbdf8359b033$var$DIRECTION_RIGHT : $29cabbdf8359b033$var$DIRECTION_LEFT;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $29cabbdf8359b033$var$Carousel.getOrCreateInstance(this, config);
            if (typeof config === "number") {
                data.to(config);
                return;
            }
            if (typeof config === "string") {
                if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ (0, $4tBqP.default).on(document, $29cabbdf8359b033$var$EVENT_CLICK_DATA_API, $29cabbdf8359b033$var$SELECTOR_DATA_SLIDE, function(event) {
    const target = (0, $jpl1o.getElementFromSelector)(this);
    if (!target || !target.classList.contains($29cabbdf8359b033$var$CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = $29cabbdf8359b033$var$Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if ((0, $dEVUr.default).getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
(0, $4tBqP.default).on(window, $29cabbdf8359b033$var$EVENT_LOAD_DATA_API, ()=>{
    const carousels = (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_DATA_RIDE);
    for (const carousel of carousels)$29cabbdf8359b033$var$Carousel.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ (0, $jpl1o.defineJQueryPlugin)($29cabbdf8359b033$var$Carousel);
var $29cabbdf8359b033$export$2e2bcd8739ae039 = $29cabbdf8359b033$var$Carousel;


/**
 * @link https://getbootstrap.com/docs/5.1/components/carousel/#events
 * 
 * - get the hidden caption
 * - copy to another visible outside container
 */ let $4da2b555392dbe33$var$swhCarousel = document.getElementById("swh-carousel");
let $4da2b555392dbe33$var$visibleCaption = document.querySelector(".visible-caption");
$4da2b555392dbe33$var$swhCarousel.addEventListener("slide.bs.carousel", (e)=>{
    let activeElement = e.relatedTarget;
    let caption = activeElement.querySelector(".carousel-caption");
    $4da2b555392dbe33$var$visibleCaption.innerHTML = caption.innerHTML.trim();
});
/**
 * on document load, get the first caption, put it in the Visible Caption container
 */ document.addEventListener("DOMContentLoaded", ()=>{
    let firstCaption = document.querySelector(".carousel-caption");
    $4da2b555392dbe33$var$visibleCaption.innerHTML = firstCaption.innerHTML.trim();
});


