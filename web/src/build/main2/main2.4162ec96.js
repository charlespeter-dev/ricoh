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

var $dEVUr = parcelRequire("dEVUr");

var $6aLfT = parcelRequire("6aLfT");

var $7Pvka = parcelRequire("7Pvka");
/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const $29cabbdf8359b033$var$NAME = "carousel";
const $29cabbdf8359b033$var$DATA_KEY = "bs.carousel";
const $29cabbdf8359b033$var$EVENT_KEY = `.${$29cabbdf8359b033$var$DATA_KEY}`;
const $29cabbdf8359b033$var$DATA_API_KEY = ".data-api";
const $29cabbdf8359b033$var$ARROW_LEFT_KEY = "ArrowLeft";
const $29cabbdf8359b033$var$ARROW_RIGHT_KEY = "ArrowRight";
const $29cabbdf8359b033$var$TOUCHEVENT_COMPAT_WAIT = 500 // Time for mouse compat events to fire after touch
;
const $29cabbdf8359b033$var$SWIPE_THRESHOLD = 40;
const $29cabbdf8359b033$var$Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: "hover",
    wrap: true,
    touch: true
};
const $29cabbdf8359b033$var$DefaultType = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
};
const $29cabbdf8359b033$var$ORDER_NEXT = "next";
const $29cabbdf8359b033$var$ORDER_PREV = "prev";
const $29cabbdf8359b033$var$DIRECTION_LEFT = "left";
const $29cabbdf8359b033$var$DIRECTION_RIGHT = "right";
const $29cabbdf8359b033$var$KEY_TO_DIRECTION = {
    [$29cabbdf8359b033$var$ARROW_LEFT_KEY]: $29cabbdf8359b033$var$DIRECTION_RIGHT,
    [$29cabbdf8359b033$var$ARROW_RIGHT_KEY]: $29cabbdf8359b033$var$DIRECTION_LEFT
};
const $29cabbdf8359b033$var$EVENT_SLIDE = `slide${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_SLID = `slid${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_KEYDOWN = `keydown${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_MOUSEENTER = `mouseenter${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_MOUSELEAVE = `mouseleave${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_TOUCHSTART = `touchstart${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_TOUCHMOVE = `touchmove${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_TOUCHEND = `touchend${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_POINTERDOWN = `pointerdown${$29cabbdf8359b033$var$EVENT_KEY}`;
const $29cabbdf8359b033$var$EVENT_POINTERUP = `pointerup${$29cabbdf8359b033$var$EVENT_KEY}`;
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
const $29cabbdf8359b033$var$CLASS_NAME_POINTER_EVENT = "pointer-event";
const $29cabbdf8359b033$var$SELECTOR_ACTIVE = ".active";
const $29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM = ".active.carousel-item";
const $29cabbdf8359b033$var$SELECTOR_ITEM = ".carousel-item";
const $29cabbdf8359b033$var$SELECTOR_ITEM_IMG = ".carousel-item img";
const $29cabbdf8359b033$var$SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev";
const $29cabbdf8359b033$var$SELECTOR_INDICATORS = ".carousel-indicators";
const $29cabbdf8359b033$var$SELECTOR_INDICATOR = "[data-bs-target]";
const $29cabbdf8359b033$var$SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]";
const $29cabbdf8359b033$var$SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]';
const $29cabbdf8359b033$var$POINTER_TYPE_TOUCH = "touch";
const $29cabbdf8359b033$var$POINTER_TYPE_PEN = "pen";
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class $29cabbdf8359b033$var$Carousel extends (0, $7Pvka.default) {
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
        this._indicatorsElement = (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_INDICATORS, this._element);
        this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        this._pointerEvent = Boolean(window.PointerEvent);
        this._addEventListeners();
    }
    // Getters
    static get Default() {
        return $29cabbdf8359b033$var$Default;
    }
    static get NAME() {
        return $29cabbdf8359b033$var$NAME;
    }
    // Public
    next() {
        this._slide($29cabbdf8359b033$var$ORDER_NEXT);
    }
    nextWhenVisible() {
        // Don't call next when the page isn't visible
        // or the carousel or its parent isn't visible
        if (!document.hidden && (0, $jpl1o.isVisible)(this._element)) this.next();
    }
    prev() {
        this._slide($29cabbdf8359b033$var$ORDER_PREV);
    }
    pause(event) {
        if (!event) this._isPaused = true;
        if ((0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_NEXT_PREV, this._element)) {
            (0, $jpl1o.triggerTransitionEnd)(this._element);
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
        this._activeElement = (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
        const activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) return;
        if (this._isSliding) {
            (0, $4tBqP.default).one(this._element, $29cabbdf8359b033$var$EVENT_SLID, ()=>this.to(index));
            return;
        }
        if (activeIndex === index) {
            this.pause();
            this.cycle();
            return;
        }
        const order = index > activeIndex ? $29cabbdf8359b033$var$ORDER_NEXT : $29cabbdf8359b033$var$ORDER_PREV;
        this._slide(order, this._items[index]);
    }
    // Private
    _getConfig(config) {
        config = {
            ...$29cabbdf8359b033$var$Default,
            ...(0, $dEVUr.default).getDataAttributes(this._element),
            ...typeof config === "object" ? config : {}
        };
        (0, $jpl1o.typeCheckConfig)($29cabbdf8359b033$var$NAME, config, $29cabbdf8359b033$var$DefaultType);
        return config;
    }
    _handleSwipe() {
        const absDeltax = Math.abs(this.touchDeltaX);
        if (absDeltax <= $29cabbdf8359b033$var$SWIPE_THRESHOLD) return;
        const direction = absDeltax / this.touchDeltaX;
        this.touchDeltaX = 0;
        if (!direction) return;
        this._slide(direction > 0 ? $29cabbdf8359b033$var$DIRECTION_RIGHT : $29cabbdf8359b033$var$DIRECTION_LEFT);
    }
    _addEventListeners() {
        if (this._config.keyboard) (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSEENTER, (event)=>this.pause(event));
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSELEAVE, (event)=>this.cycle(event));
        }
        if (this._config.touch && this._touchSupported) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        const hasPointerPenTouch = (event)=>{
            return this._pointerEvent && (event.pointerType === $29cabbdf8359b033$var$POINTER_TYPE_PEN || event.pointerType === $29cabbdf8359b033$var$POINTER_TYPE_TOUCH);
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
                this.touchTimeout = setTimeout((event)=>this.cycle(event), $29cabbdf8359b033$var$TOUCHEVENT_COMPAT_WAIT + this._config.interval);
            }
        };
        (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
            (0, $4tBqP.default).on(itemImg, $29cabbdf8359b033$var$EVENT_DRAG_START, (event)=>event.preventDefault());
        });
        if (this._pointerEvent) {
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_POINTERDOWN, (event)=>start(event));
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_POINTERUP, (event)=>end(event));
            this._element.classList.add($29cabbdf8359b033$var$CLASS_NAME_POINTER_EVENT);
        } else {
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_TOUCHSTART, (event)=>start(event));
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_TOUCHMOVE, (event)=>move(event));
            (0, $4tBqP.default).on(this._element, $29cabbdf8359b033$var$EVENT_TOUCHEND, (event)=>end(event));
        }
    }
    _keydown(event) {
        if (/input|textarea/i.test(event.target.tagName)) return;
        const direction = $29cabbdf8359b033$var$KEY_TO_DIRECTION[event.key];
        if (direction) {
            event.preventDefault();
            this._slide(direction);
        }
    }
    _getItemIndex(element) {
        this._items = element && element.parentNode ? (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
    }
    _getItemByOrder(order, activeElement) {
        const isNext = order === $29cabbdf8359b033$var$ORDER_NEXT;
        return (0, $jpl1o.getNextActiveElement)(this._items, activeElement, isNext, this._config.wrap);
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
        const fromIndex = this._getItemIndex((0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element));
        return (0, $4tBqP.default).trigger(this._element, $29cabbdf8359b033$var$EVENT_SLIDE, {
            relatedTarget: relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
        });
    }
    _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
            const activeIndicator = (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE, this._indicatorsElement);
            activeIndicator.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
            activeIndicator.removeAttribute("aria-current");
            const indicators = (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_INDICATOR, this._indicatorsElement);
            for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(element)) {
                indicators[i].classList.add($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
                indicators[i].setAttribute("aria-current", "true");
                break;
            }
        }
    }
    _updateInterval() {
        const element = this._activeElement || (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
        } else this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(directionOrOrder, element) {
        const order = this._directionToOrder(directionOrOrder);
        const activeElement = (0, $6aLfT.default).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
        const activeElementIndex = this._getItemIndex(activeElement);
        const nextElement = element || this._getItemByOrder(order, activeElement);
        const nextElementIndex = this._getItemIndex(nextElement);
        const isCycling = Boolean(this._interval);
        const isNext = order === $29cabbdf8359b033$var$ORDER_NEXT;
        const directionalClassName = isNext ? $29cabbdf8359b033$var$CLASS_NAME_START : $29cabbdf8359b033$var$CLASS_NAME_END;
        const orderClassName = isNext ? $29cabbdf8359b033$var$CLASS_NAME_NEXT : $29cabbdf8359b033$var$CLASS_NAME_PREV;
        const eventDirectionName = this._orderToDirection(order);
        if (nextElement && nextElement.classList.contains($29cabbdf8359b033$var$CLASS_NAME_ACTIVE)) {
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
            (0, $4tBqP.default).trigger(this._element, $29cabbdf8359b033$var$EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            });
        };
        if (this._element.classList.contains($29cabbdf8359b033$var$CLASS_NAME_SLIDE)) {
            nextElement.classList.add(orderClassName);
            (0, $jpl1o.reflow)(nextElement);
            activeElement.classList.add(directionalClassName);
            nextElement.classList.add(directionalClassName);
            const completeCallBack = ()=>{
                nextElement.classList.remove(directionalClassName, orderClassName);
                nextElement.classList.add($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
                activeElement.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE, orderClassName, directionalClassName);
                this._isSliding = false;
                setTimeout(triggerSlidEvent, 0);
            };
            this._queueCallback(completeCallBack, activeElement, true);
        } else {
            activeElement.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
            nextElement.classList.add($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
            this._isSliding = false;
            triggerSlidEvent();
        }
        if (isCycling) this.cycle();
    }
    _directionToOrder(direction) {
        if (![
            $29cabbdf8359b033$var$DIRECTION_RIGHT,
            $29cabbdf8359b033$var$DIRECTION_LEFT
        ].includes(direction)) return direction;
        if ((0, $jpl1o.isRTL)()) return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_PREV : $29cabbdf8359b033$var$ORDER_NEXT;
        return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_NEXT : $29cabbdf8359b033$var$ORDER_PREV;
    }
    _orderToDirection(order) {
        if (![
            $29cabbdf8359b033$var$ORDER_NEXT,
            $29cabbdf8359b033$var$ORDER_PREV
        ].includes(order)) return order;
        if ((0, $jpl1o.isRTL)()) return order === $29cabbdf8359b033$var$ORDER_PREV ? $29cabbdf8359b033$var$DIRECTION_LEFT : $29cabbdf8359b033$var$DIRECTION_RIGHT;
        return order === $29cabbdf8359b033$var$ORDER_PREV ? $29cabbdf8359b033$var$DIRECTION_RIGHT : $29cabbdf8359b033$var$DIRECTION_LEFT;
    }
    // Static
    static carouselInterface(element, config) {
        const data = $29cabbdf8359b033$var$Carousel.getOrCreateInstance(element, config);
        let { _config: _config  } = data;
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
            $29cabbdf8359b033$var$Carousel.carouselInterface(this, config);
        });
    }
    static dataApiClickHandler(event) {
        const target = (0, $jpl1o.getElementFromSelector)(this);
        if (!target || !target.classList.contains($29cabbdf8359b033$var$CLASS_NAME_CAROUSEL)) return;
        const config = {
            ...(0, $dEVUr.default).getDataAttributes(target),
            ...(0, $dEVUr.default).getDataAttributes(this)
        };
        const slideIndex = this.getAttribute("data-bs-slide-to");
        if (slideIndex) config.interval = false;
        $29cabbdf8359b033$var$Carousel.carouselInterface(target, config);
        if (slideIndex) $29cabbdf8359b033$var$Carousel.getInstance(target).to(slideIndex);
        event.preventDefault();
    }
}
/**
 * ------------------------------------------------------------------------
 * Data Api implementation
 * ------------------------------------------------------------------------
 */ (0, $4tBqP.default).on(document, $29cabbdf8359b033$var$EVENT_CLICK_DATA_API, $29cabbdf8359b033$var$SELECTOR_DATA_SLIDE, $29cabbdf8359b033$var$Carousel.dataApiClickHandler);
(0, $4tBqP.default).on(window, $29cabbdf8359b033$var$EVENT_LOAD_DATA_API, ()=>{
    const carousels = (0, $6aLfT.default).find($29cabbdf8359b033$var$SELECTOR_DATA_RIDE);
    for(let i = 0, len = carousels.length; i < len; i++)$29cabbdf8359b033$var$Carousel.carouselInterface(carousels[i], $29cabbdf8359b033$var$Carousel.getInstance(carousels[i]));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */ (0, $jpl1o.defineJQueryPlugin)($29cabbdf8359b033$var$Carousel);
var $29cabbdf8359b033$export$2e2bcd8739ae039 = $29cabbdf8359b033$var$Carousel;


/**
 * @link https://getbootstrap.com/docs/5.1/components/carousel/#events
 * 
 * - get the hidden caption
 * - copy to another visible outside container
 */ let $4ef825cc08ee2246$var$swhCarousel = document.getElementById("swh-carousel");
let $4ef825cc08ee2246$var$visibleCaption = document.querySelector(".visible-caption");
$4ef825cc08ee2246$var$swhCarousel.addEventListener("slide.bs.carousel", (e)=>{
    let activeElement = e.relatedTarget;
    let caption = activeElement.querySelector(".carousel-caption");
    $4ef825cc08ee2246$var$visibleCaption.innerHTML = caption.innerHTML.trim();
});
/**
 * on document load, get the first caption, put it in the Visible Caption container
 */ document.addEventListener("DOMContentLoaded", ()=>{
    let firstCaption = document.querySelector(".carousel-caption");
    $4ef825cc08ee2246$var$visibleCaption.innerHTML = firstCaption.innerHTML.trim();
});


