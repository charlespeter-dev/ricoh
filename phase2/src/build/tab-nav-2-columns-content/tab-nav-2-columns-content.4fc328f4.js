/**
 * include bootstrap Tab & Collapse
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * Constants
 */ const $ac46495d46cde4d0$var$elementMap = new Map();
var $ac46495d46cde4d0$export$2e2bcd8739ae039 = {
    set (element, key, instance) {
        if (!$ac46495d46cde4d0$var$elementMap.has(element)) $ac46495d46cde4d0$var$elementMap.set(element, new Map());
        const instanceMap = $ac46495d46cde4d0$var$elementMap.get(element);
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
        if ($ac46495d46cde4d0$var$elementMap.has(element)) return $ac46495d46cde4d0$var$elementMap.get(element).get(key) || null;
        return null;
    },
    remove (element, key) {
        if (!$ac46495d46cde4d0$var$elementMap.has(element)) return;
        const instanceMap = $ac46495d46cde4d0$var$elementMap.get(element);
        instanceMap.delete(key);
        // free up element references if there are no instances left for an element
        if (instanceMap.size === 0) $ac46495d46cde4d0$var$elementMap.delete(element);
    }
};


/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $e210a887c6468aad$var$MAX_UID = 1000000;
const $e210a887c6468aad$var$MILLISECONDS_MULTIPLIER = 1000;
const $e210a887c6468aad$var$TRANSITION_END = "transitionend";
/**
 * Properly escape IDs selectors to handle weird IDs
 * @param {string} selector
 * @returns {string}
 */ const $e210a887c6468aad$export$529769e360e2fa1b = (selector)=>{
    if (selector && window.CSS && window.CSS.escape) // document.querySelector needs escaping to handle IDs (html5+) containing for instance /
    selector = selector.replace(/#([^\s"#']+)/g, (match, id)=>`#${CSS.escape(id)}`);
    return selector;
};
// Shout-out Angus Croll (https://goo.gl/pxwQGp)
const $e210a887c6468aad$export$2fe53163c7bc4eaf = (object)=>{
    if (object === null || object === undefined) return `${object}`;
    return Object.prototype.toString.call(object).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * Public Util API
 */ const $e210a887c6468aad$export$6d2b3473b0986646 = (prefix)=>{
    do prefix += Math.floor(Math.random() * $e210a887c6468aad$var$MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const $e210a887c6468aad$export$530d045e570efb0f = (element)=>{
    if (!element) return 0;
    // Get transition-duration of the element
    let { transitionDuration: transitionDuration, transitionDelay: transitionDelay } = window.getComputedStyle(element);
    const floatTransitionDuration = Number.parseFloat(transitionDuration);
    const floatTransitionDelay = Number.parseFloat(transitionDelay);
    // Return 0 if element or transition duration is not found
    if (!floatTransitionDuration && !floatTransitionDelay) return 0;
    // If multiple durations are defined, take the first
    transitionDuration = transitionDuration.split(",")[0];
    transitionDelay = transitionDelay.split(",")[0];
    return (Number.parseFloat(transitionDuration) + Number.parseFloat(transitionDelay)) * $e210a887c6468aad$var$MILLISECONDS_MULTIPLIER;
};
const $e210a887c6468aad$export$201d3c8336a47e6c = (element)=>{
    element.dispatchEvent(new Event($e210a887c6468aad$var$TRANSITION_END));
};
const $e210a887c6468aad$export$45a5e7f76e0caa8d = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const $e210a887c6468aad$export$d16800b7e59a8051 = (object)=>{
    // it's a jQuery object or a node element
    if ($e210a887c6468aad$export$45a5e7f76e0caa8d(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector($e210a887c6468aad$export$529769e360e2fa1b(object));
    return null;
};
const $e210a887c6468aad$export$795910f5f15a9633 = (element)=>{
    if (!$e210a887c6468aad$export$45a5e7f76e0caa8d(element) || element.getClientRects().length === 0) return false;
    const elementIsVisible = getComputedStyle(element).getPropertyValue("visibility") === "visible";
    // Handle `details` element as its content may falsie appear visible when it is closed
    const closedDetails = element.closest("details:not([open])");
    if (!closedDetails) return elementIsVisible;
    if (closedDetails !== element) {
        const summary = element.closest("summary");
        if (summary && summary.parentNode !== closedDetails) return false;
        if (summary === null) return false;
    }
    return elementIsVisible;
};
const $e210a887c6468aad$export$30e0dc115df457ed = (element)=>{
    if (!element || element.nodeType !== Node.ELEMENT_NODE) return true;
    if (element.classList.contains("disabled")) return true;
    if (typeof element.disabled !== "undefined") return element.disabled;
    return element.hasAttribute("disabled") && element.getAttribute("disabled") !== "false";
};
const $e210a887c6468aad$export$1a538cc28c24d2ec = (element)=>{
    if (!document.documentElement.attachShadow) return null;
    // Can find the shadow root otherwise it'll return the document
    if (typeof element.getRootNode === "function") {
        const root = element.getRootNode();
        return root instanceof ShadowRoot ? root : null;
    }
    if (element instanceof ShadowRoot) return element;
    // when we don't find a shadow root
    if (!element.parentNode) return null;
    return $e210a887c6468aad$export$1a538cc28c24d2ec(element.parentNode);
};
const $e210a887c6468aad$export$8793edee2d425525 = ()=>{};
/**
 * Trick to restart an element's animation
 *
 * @param {HTMLElement} element
 * @return void
 *
 * @see https://www.charistheo.io/blog/2021/02/restart-a-css-animation-with-javascript/#restarting-a-css-animation
 */ const $e210a887c6468aad$export$b7a864e1eaef9de5 = (element)=>{
    element.offsetHeight // eslint-disable-line no-unused-expressions
    ;
};
const $e210a887c6468aad$export$74ab881f7fc208ab = ()=>{
    if (window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return window.jQuery;
    return null;
};
const $e210a887c6468aad$var$DOMContentLoadedCallbacks = [];
const $e210a887c6468aad$export$62028ff70825ead9 = (callback)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!$e210a887c6468aad$var$DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            for (const callback of $e210a887c6468aad$var$DOMContentLoadedCallbacks)callback();
        });
        $e210a887c6468aad$var$DOMContentLoadedCallbacks.push(callback);
    } else callback();
};
const $e210a887c6468aad$export$702d680b21cbd764 = ()=>document.documentElement.dir === "rtl";
const $e210a887c6468aad$export$6be86de4be20ff32 = (plugin)=>{
    $e210a887c6468aad$export$62028ff70825ead9(()=>{
        const $ = $e210a887c6468aad$export$74ab881f7fc208ab();
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
const $e210a887c6468aad$export$51396ec711da548b = (possibleCallback, args = [], defaultValue = possibleCallback)=>{
    return typeof possibleCallback === "function" ? possibleCallback(...args) : defaultValue;
};
const $e210a887c6468aad$export$d6cd5457cf4106ef = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        $e210a887c6468aad$export$51396ec711da548b(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = $e210a887c6468aad$export$530d045e570efb0f(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target: target })=>{
        if (target !== transitionElement) return;
        called = true;
        transitionElement.removeEventListener($e210a887c6468aad$var$TRANSITION_END, handler);
        $e210a887c6468aad$export$51396ec711da548b(callback);
    };
    transitionElement.addEventListener($e210a887c6468aad$var$TRANSITION_END, handler);
    setTimeout(()=>{
        if (!called) $e210a887c6468aad$export$201d3c8336a47e6c(transitionElement);
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
 */ const $e210a887c6468aad$export$7bc25e2173fc3d1f = (list, activeElement, shouldGetNext, isCycleAllowed)=>{
    const listLength = list.length;
    let index = list.indexOf(activeElement);
    // if the element does not exist in the list return an element
    // depending on the direction and if cycle is allowed
    if (index === -1) return !shouldGetNext && isCycleAllowed ? list[listLength - 1] : list[0];
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};


/**
 * Constants
 */ const $3426e80176c401dc$var$namespaceRegex = /[^.]*(?=\..*)\.|.*/;
const $3426e80176c401dc$var$stripNameRegex = /\..*/;
const $3426e80176c401dc$var$stripUidRegex = /::\d+$/;
const $3426e80176c401dc$var$eventRegistry = {} // Events storage
;
let $3426e80176c401dc$var$uidEvent = 1;
const $3426e80176c401dc$var$customEvents = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
};
const $3426e80176c401dc$var$nativeEvents = new Set([
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
 * Private methods
 */ function $3426e80176c401dc$var$makeEventUid(element, uid) {
    return uid && `${uid}::${$3426e80176c401dc$var$uidEvent++}` || element.uidEvent || $3426e80176c401dc$var$uidEvent++;
}
function $3426e80176c401dc$var$getElementEvents(element) {
    const uid = $3426e80176c401dc$var$makeEventUid(element);
    element.uidEvent = uid;
    $3426e80176c401dc$var$eventRegistry[uid] = $3426e80176c401dc$var$eventRegistry[uid] || {};
    return $3426e80176c401dc$var$eventRegistry[uid];
}
function $3426e80176c401dc$var$bootstrapHandler(element, fn) {
    return function handler(event) {
        $3426e80176c401dc$var$hydrateObj(event, {
            delegateTarget: element
        });
        if (handler.oneOff) $3426e80176c401dc$var$EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function $3426e80176c401dc$var$bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target: target } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
            if (domElement !== target) continue;
            $3426e80176c401dc$var$hydrateObj(event, {
                delegateTarget: target
            });
            if (handler.oneOff) $3426e80176c401dc$var$EventHandler.off(element, event.type, selector, fn);
            return fn.apply(target, [
                event
            ]);
        }
    };
}
function $3426e80176c401dc$var$findHandler(events, callable, delegationSelector = null) {
    return Object.values(events).find((event)=>event.callable === callable && event.delegationSelector === delegationSelector);
}
function $3426e80176c401dc$var$normalizeParameters(originalTypeEvent, handler, delegationFunction) {
    const isDelegated = typeof handler === "string";
    // TODO: tooltip passes `false` instead of selector, so we need to check
    const callable = isDelegated ? delegationFunction : handler || delegationFunction;
    let typeEvent = $3426e80176c401dc$var$getTypeEvent(originalTypeEvent);
    if (!$3426e80176c401dc$var$nativeEvents.has(typeEvent)) typeEvent = originalTypeEvent;
    return [
        isDelegated,
        callable,
        typeEvent
    ];
}
function $3426e80176c401dc$var$addHandler(element, originalTypeEvent, handler, delegationFunction, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    let [isDelegated, callable, typeEvent] = $3426e80176c401dc$var$normalizeParameters(originalTypeEvent, handler, delegationFunction);
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if (originalTypeEvent in $3426e80176c401dc$var$customEvents) {
        const wrapFunction = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        callable = wrapFunction(callable);
    }
    const events = $3426e80176c401dc$var$getElementEvents(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFunction = $3426e80176c401dc$var$findHandler(handlers, callable, isDelegated ? handler : null);
    if (previousFunction) {
        previousFunction.oneOff = previousFunction.oneOff && oneOff;
        return;
    }
    const uid = $3426e80176c401dc$var$makeEventUid(callable, originalTypeEvent.replace($3426e80176c401dc$var$namespaceRegex, ""));
    const fn = isDelegated ? $3426e80176c401dc$var$bootstrapDelegationHandler(element, handler, callable) : $3426e80176c401dc$var$bootstrapHandler(element, callable);
    fn.delegationSelector = isDelegated ? handler : null;
    fn.callable = callable;
    fn.oneOff = oneOff;
    fn.uidEvent = uid;
    handlers[uid] = fn;
    element.addEventListener(typeEvent, fn, isDelegated);
}
function $3426e80176c401dc$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = $3426e80176c401dc$var$findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function $3426e80176c401dc$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    for (const [handlerKey, event] of Object.entries(storeElementEvent))if (handlerKey.includes(namespace)) $3426e80176c401dc$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
}
function $3426e80176c401dc$var$getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace($3426e80176c401dc$var$stripNameRegex, "");
    return $3426e80176c401dc$var$customEvents[event] || event;
}
const $3426e80176c401dc$var$EventHandler = {
    on (element, event, handler, delegationFunction) {
        $3426e80176c401dc$var$addHandler(element, event, handler, delegationFunction, false);
    },
    one (element, event, handler, delegationFunction) {
        $3426e80176c401dc$var$addHandler(element, event, handler, delegationFunction, true);
    },
    off (element, originalTypeEvent, handler, delegationFunction) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [isDelegated, callable, typeEvent] = $3426e80176c401dc$var$normalizeParameters(originalTypeEvent, handler, delegationFunction);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = $3426e80176c401dc$var$getElementEvents(element);
        const storeElementEvent = events[typeEvent] || {};
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof callable !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!Object.keys(storeElementEvent).length) return;
            $3426e80176c401dc$var$removeHandler(element, events, typeEvent, callable, isDelegated ? handler : null);
            return;
        }
        if (isNamespace) for (const elementEvent of Object.keys(events))$3426e80176c401dc$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        for (const [keyHandlers, event] of Object.entries(storeElementEvent)){
            const handlerKey = keyHandlers.replace($3426e80176c401dc$var$stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) $3426e80176c401dc$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
        }
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = (0, $e210a887c6468aad$export$74ab881f7fc208ab)();
        const typeEvent = $3426e80176c401dc$var$getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        let jQueryEvent = null;
        let bubbles = true;
        let nativeDispatch = true;
        let defaultPrevented = false;
        if (inNamespace && $) {
            jQueryEvent = $.Event(event, args);
            $(element).trigger(jQueryEvent);
            bubbles = !jQueryEvent.isPropagationStopped();
            nativeDispatch = !jQueryEvent.isImmediatePropagationStopped();
            defaultPrevented = jQueryEvent.isDefaultPrevented();
        }
        const evt = $3426e80176c401dc$var$hydrateObj(new Event(event, {
            bubbles: bubbles,
            cancelable: true
        }), args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function $3426e80176c401dc$var$hydrateObj(obj, meta = {}) {
    for (const [key, value] of Object.entries(meta))try {
        obj[key] = value;
    } catch  {
        Object.defineProperty(obj, key, {
            configurable: true,
            get () {
                return value;
            }
        });
    }
    return obj;
}
var $3426e80176c401dc$export$2e2bcd8739ae039 = $3426e80176c401dc$var$EventHandler;


/**
 * --------------------------------------------------------------------------
 * Bootstrap util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function $9f1bee617b265502$var$normalizeData(value) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (value === Number(value).toString()) return Number(value);
    if (value === "" || value === "null") return null;
    if (typeof value !== "string") return value;
    try {
        return JSON.parse(decodeURIComponent(value));
    } catch  {
        return value;
    }
}
function $9f1bee617b265502$var$normalizeDataKey(key) {
    return key.replace(/[A-Z]/g, (chr)=>`-${chr.toLowerCase()}`);
}
const $9f1bee617b265502$var$Manipulator = {
    setDataAttribute (element, key, value) {
        element.setAttribute(`data-bs-${$9f1bee617b265502$var$normalizeDataKey(key)}`, value);
    },
    removeDataAttribute (element, key) {
        element.removeAttribute(`data-bs-${$9f1bee617b265502$var$normalizeDataKey(key)}`);
    },
    getDataAttributes (element) {
        if (!element) return {};
        const attributes = {};
        const bsKeys = Object.keys(element.dataset).filter((key)=>key.startsWith("bs") && !key.startsWith("bsConfig"));
        for (const key of bsKeys){
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = $9f1bee617b265502$var$normalizeData(element.dataset[key]);
        }
        return attributes;
    },
    getDataAttribute (element, key) {
        return $9f1bee617b265502$var$normalizeData(element.getAttribute(`data-bs-${$9f1bee617b265502$var$normalizeDataKey(key)}`));
    }
};
var $9f1bee617b265502$export$2e2bcd8739ae039 = $9f1bee617b265502$var$Manipulator;



/**
 * Class definition
 */ class $5dbfd1c666377abf$var$Config {
    // Getters
    static get Default() {
        return {};
    }
    static get DefaultType() {
        return {};
    }
    static get NAME() {
        throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        return config;
    }
    _mergeConfigObj(config, element) {
        const jsonConfig = (0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(element) ? (0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttribute(element, "config") : {} // try to parse
        ;
        return {
            ...this.constructor.Default,
            ...typeof jsonConfig === "object" ? jsonConfig : {},
            ...(0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(element) ? (0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttributes(element) : {},
            ...typeof config === "object" ? config : {}
        };
    }
    _typeCheckConfig(config, configTypes = this.constructor.DefaultType) {
        for (const [property, expectedTypes] of Object.entries(configTypes)){
            const value = config[property];
            const valueType = (0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(value) ? "element" : (0, $e210a887c6468aad$export$2fe53163c7bc4eaf)(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
var $5dbfd1c666377abf$export$2e2bcd8739ae039 = $5dbfd1c666377abf$var$Config;



/**
 * Constants
 */ const $5b3598292f163e3e$var$VERSION = "5.3.2";
/**
 * Class definition
 */ class $5b3598292f163e3e$var$BaseComponent extends (0, $5dbfd1c666377abf$export$2e2bcd8739ae039) {
    constructor(element, config){
        super();
        element = (0, $e210a887c6468aad$export$d16800b7e59a8051)(element);
        if (!element) return;
        this._element = element;
        this._config = this._getConfig(config);
        (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).set(this._element, this.constructor.DATA_KEY, this);
    }
    // Public
    dispose() {
        (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).remove(this._element, this.constructor.DATA_KEY);
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).off(this._element, this.constructor.EVENT_KEY);
        for (const propertyName of Object.getOwnPropertyNames(this))this[propertyName] = null;
    }
    _queueCallback(callback, element, isAnimated = true) {
        (0, $e210a887c6468aad$export$d6cd5457cf4106ef)(callback, element, isAnimated);
    }
    _getConfig(config) {
        config = this._mergeConfigObj(config, this._element);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    // Static
    static getInstance(element) {
        return (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).get((0, $e210a887c6468aad$export$d16800b7e59a8051)(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return $5b3598292f163e3e$var$VERSION;
    }
    static get DATA_KEY() {
        return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
    }
    static eventName(name) {
        return `${name}${this.EVENT_KEY}`;
    }
}
var $5b3598292f163e3e$export$2e2bcd8739ae039 = $5b3598292f163e3e$var$BaseComponent;



/**
 * --------------------------------------------------------------------------
 * Bootstrap dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 
const $47e855298aebfbc4$var$getSelector = (element)=>{
    let selector = element.getAttribute("data-bs-target");
    if (!selector || selector === "#") {
        let hrefAttribute = element.getAttribute("href");
        // The only valid content that could double as a selector are IDs or classes,
        // so everything starting with `#` or `.`. If a "real" URL is used as the selector,
        // `document.querySelector` will rightfully complain it is invalid.
        // See https://github.com/twbs/bootstrap/issues/32273
        if (!hrefAttribute || !hrefAttribute.includes("#") && !hrefAttribute.startsWith(".")) return null;
        // Just in case some CMS puts out a full URL with the anchor appended
        if (hrefAttribute.includes("#") && !hrefAttribute.startsWith("#")) hrefAttribute = `#${hrefAttribute.split("#")[1]}`;
        selector = hrefAttribute && hrefAttribute !== "#" ? (0, $e210a887c6468aad$export$529769e360e2fa1b)(hrefAttribute.trim()) : null;
    }
    return selector;
};
const $47e855298aebfbc4$var$SelectorEngine = {
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
        let ancestor = element.parentNode.closest(selector);
        while(ancestor){
            parents.push(ancestor);
            ancestor = ancestor.parentNode.closest(selector);
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
    // TODO: this is now unused; remove later along with prev()
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
        ].map((selector)=>`${selector}:not([tabindex^="-"])`).join(",");
        return this.find(focusables, element).filter((el)=>!(0, $e210a887c6468aad$export$30e0dc115df457ed)(el) && (0, $e210a887c6468aad$export$795910f5f15a9633)(el));
    },
    getSelectorFromElement (element) {
        const selector = $47e855298aebfbc4$var$getSelector(element);
        if (selector) return $47e855298aebfbc4$var$SelectorEngine.findOne(selector) ? selector : null;
        return null;
    },
    getElementFromSelector (element) {
        const selector = $47e855298aebfbc4$var$getSelector(element);
        return selector ? $47e855298aebfbc4$var$SelectorEngine.findOne(selector) : null;
    },
    getMultipleElementsFromSelector (element) {
        const selector = $47e855298aebfbc4$var$getSelector(element);
        return selector ? $47e855298aebfbc4$var$SelectorEngine.find(selector) : [];
    }
};
var $47e855298aebfbc4$export$2e2bcd8739ae039 = $47e855298aebfbc4$var$SelectorEngine;



/**
 * Constants
 */ const $b53d16494e490efd$var$NAME = "tab";
const $b53d16494e490efd$var$DATA_KEY = "bs.tab";
const $b53d16494e490efd$var$EVENT_KEY = `.${$b53d16494e490efd$var$DATA_KEY}`;
const $b53d16494e490efd$var$EVENT_HIDE = `hide${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_HIDDEN = `hidden${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_SHOW = `show${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_SHOWN = `shown${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_CLICK_DATA_API = `click${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_KEYDOWN = `keydown${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$EVENT_LOAD_DATA_API = `load${$b53d16494e490efd$var$EVENT_KEY}`;
const $b53d16494e490efd$var$ARROW_LEFT_KEY = "ArrowLeft";
const $b53d16494e490efd$var$ARROW_RIGHT_KEY = "ArrowRight";
const $b53d16494e490efd$var$ARROW_UP_KEY = "ArrowUp";
const $b53d16494e490efd$var$ARROW_DOWN_KEY = "ArrowDown";
const $b53d16494e490efd$var$HOME_KEY = "Home";
const $b53d16494e490efd$var$END_KEY = "End";
const $b53d16494e490efd$var$CLASS_NAME_ACTIVE = "active";
const $b53d16494e490efd$var$CLASS_NAME_FADE = "fade";
const $b53d16494e490efd$var$CLASS_NAME_SHOW = "show";
const $b53d16494e490efd$var$CLASS_DROPDOWN = "dropdown";
const $b53d16494e490efd$var$SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle";
const $b53d16494e490efd$var$SELECTOR_DROPDOWN_MENU = ".dropdown-menu";
const $b53d16494e490efd$var$NOT_SELECTOR_DROPDOWN_TOGGLE = `:not(${$b53d16494e490efd$var$SELECTOR_DROPDOWN_TOGGLE})`;
const $b53d16494e490efd$var$SELECTOR_TAB_PANEL = '.list-group, .nav, [role="tablist"]';
const $b53d16494e490efd$var$SELECTOR_OUTER = ".nav-item, .list-group-item";
const $b53d16494e490efd$var$SELECTOR_INNER = `.nav-link${$b53d16494e490efd$var$NOT_SELECTOR_DROPDOWN_TOGGLE}, .list-group-item${$b53d16494e490efd$var$NOT_SELECTOR_DROPDOWN_TOGGLE}, [role="tab"]${$b53d16494e490efd$var$NOT_SELECTOR_DROPDOWN_TOGGLE}`;
const $b53d16494e490efd$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]' // TODO: could only be `tab` in v6
;
const $b53d16494e490efd$var$SELECTOR_INNER_ELEM = `${$b53d16494e490efd$var$SELECTOR_INNER}, ${$b53d16494e490efd$var$SELECTOR_DATA_TOGGLE}`;
const $b53d16494e490efd$var$SELECTOR_DATA_TOGGLE_ACTIVE = `.${$b53d16494e490efd$var$CLASS_NAME_ACTIVE}[data-bs-toggle="tab"], .${$b53d16494e490efd$var$CLASS_NAME_ACTIVE}[data-bs-toggle="pill"], .${$b53d16494e490efd$var$CLASS_NAME_ACTIVE}[data-bs-toggle="list"]`;
/**
 * Class definition
 */ class $b53d16494e490efd$var$Tab extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    constructor(element){
        super(element);
        this._parent = this._element.closest($b53d16494e490efd$var$SELECTOR_TAB_PANEL);
        if (!this._parent) return;
        // Set up initial aria attributes
        this._setInitialAttributes(this._parent, this._getChildren());
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $b53d16494e490efd$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
    }
    // Getters
    static get NAME() {
        return $b53d16494e490efd$var$NAME;
    }
    // Public
    show() {
        const innerElem = this._element;
        if (this._elemIsActive(innerElem)) return;
        // Search for active tab on same parent to deactivate it
        const active = this._getActiveElem();
        const hideEvent = active ? (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(active, $b53d16494e490efd$var$EVENT_HIDE, {
            relatedTarget: innerElem
        }) : null;
        const showEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(innerElem, $b53d16494e490efd$var$EVENT_SHOW, {
            relatedTarget: active
        });
        if (showEvent.defaultPrevented || hideEvent && hideEvent.defaultPrevented) return;
        this._deactivate(active, innerElem);
        this._activate(innerElem, active);
    }
    // Private
    _activate(element, relatedElem) {
        if (!element) return;
        element.classList.add($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
        this._activate((0, $47e855298aebfbc4$export$2e2bcd8739ae039).getElementFromSelector(element)) // Search and activate/show the proper section
        ;
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.add($b53d16494e490efd$var$CLASS_NAME_SHOW);
                return;
            }
            element.removeAttribute("tabindex");
            element.setAttribute("aria-selected", true);
            this._toggleDropDown(element, true);
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(element, $b53d16494e490efd$var$EVENT_SHOWN, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains($b53d16494e490efd$var$CLASS_NAME_FADE));
    }
    _deactivate(element, relatedElem) {
        if (!element) return;
        element.classList.remove($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
        element.blur();
        this._deactivate((0, $47e855298aebfbc4$export$2e2bcd8739ae039).getElementFromSelector(element)) // Search and deactivate the shown section too
        ;
        const complete = ()=>{
            if (element.getAttribute("role") !== "tab") {
                element.classList.remove($b53d16494e490efd$var$CLASS_NAME_SHOW);
                return;
            }
            element.setAttribute("aria-selected", false);
            element.setAttribute("tabindex", "-1");
            this._toggleDropDown(element, false);
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(element, $b53d16494e490efd$var$EVENT_HIDDEN, {
                relatedTarget: relatedElem
            });
        };
        this._queueCallback(complete, element, element.classList.contains($b53d16494e490efd$var$CLASS_NAME_FADE));
    }
    _keydown(event) {
        if (![
            $b53d16494e490efd$var$ARROW_LEFT_KEY,
            $b53d16494e490efd$var$ARROW_RIGHT_KEY,
            $b53d16494e490efd$var$ARROW_UP_KEY,
            $b53d16494e490efd$var$ARROW_DOWN_KEY,
            $b53d16494e490efd$var$HOME_KEY,
            $b53d16494e490efd$var$END_KEY
        ].includes(event.key)) return;
        event.stopPropagation() // stopPropagation/preventDefault both added to support up/down keys without scrolling the page
        ;
        event.preventDefault();
        const children = this._getChildren().filter((element)=>!(0, $e210a887c6468aad$export$30e0dc115df457ed)(element));
        let nextActiveElement;
        if ([
            $b53d16494e490efd$var$HOME_KEY,
            $b53d16494e490efd$var$END_KEY
        ].includes(event.key)) nextActiveElement = children[event.key === $b53d16494e490efd$var$HOME_KEY ? 0 : children.length - 1];
        else {
            const isNext = [
                $b53d16494e490efd$var$ARROW_RIGHT_KEY,
                $b53d16494e490efd$var$ARROW_DOWN_KEY
            ].includes(event.key);
            nextActiveElement = (0, $e210a887c6468aad$export$7bc25e2173fc3d1f)(children, event.target, isNext, true);
        }
        if (nextActiveElement) {
            nextActiveElement.focus({
                preventScroll: true
            });
            $b53d16494e490efd$var$Tab.getOrCreateInstance(nextActiveElement).show();
        }
    }
    _getChildren() {
        return (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($b53d16494e490efd$var$SELECTOR_INNER_ELEM, this._parent);
    }
    _getActiveElem() {
        return this._getChildren().find((child)=>this._elemIsActive(child)) || null;
    }
    _setInitialAttributes(parent, children) {
        this._setAttributeIfNotExists(parent, "role", "tablist");
        for (const child of children)this._setInitialAttributesOnChild(child);
    }
    _setInitialAttributesOnChild(child) {
        child = this._getInnerElement(child);
        const isActive = this._elemIsActive(child);
        const outerElem = this._getOuterElement(child);
        child.setAttribute("aria-selected", isActive);
        if (outerElem !== child) this._setAttributeIfNotExists(outerElem, "role", "presentation");
        if (!isActive) child.setAttribute("tabindex", "-1");
        this._setAttributeIfNotExists(child, "role", "tab");
        // set attributes to the related panel too
        this._setInitialAttributesOnTargetPanel(child);
    }
    _setInitialAttributesOnTargetPanel(child) {
        const target = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).getElementFromSelector(child);
        if (!target) return;
        this._setAttributeIfNotExists(target, "role", "tabpanel");
        if (child.id) this._setAttributeIfNotExists(target, "aria-labelledby", `${child.id}`);
    }
    _toggleDropDown(element, open) {
        const outerElem = this._getOuterElement(element);
        if (!outerElem.classList.contains($b53d16494e490efd$var$CLASS_DROPDOWN)) return;
        const toggle = (selector, className)=>{
            const element = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne(selector, outerElem);
            if (element) element.classList.toggle(className, open);
        };
        toggle($b53d16494e490efd$var$SELECTOR_DROPDOWN_TOGGLE, $b53d16494e490efd$var$CLASS_NAME_ACTIVE);
        toggle($b53d16494e490efd$var$SELECTOR_DROPDOWN_MENU, $b53d16494e490efd$var$CLASS_NAME_SHOW);
        outerElem.setAttribute("aria-expanded", open);
    }
    _setAttributeIfNotExists(element, attribute, value) {
        if (!element.hasAttribute(attribute)) element.setAttribute(attribute, value);
    }
    _elemIsActive(elem) {
        return elem.classList.contains($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
    }
    // Try to get the inner element (usually the .nav-link)
    _getInnerElement(elem) {
        return elem.matches($b53d16494e490efd$var$SELECTOR_INNER_ELEM) ? elem : (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($b53d16494e490efd$var$SELECTOR_INNER_ELEM, elem);
    }
    // Try to get the outer element (usually the .nav-item)
    _getOuterElement(elem) {
        return elem.closest($b53d16494e490efd$var$SELECTOR_OUTER) || elem;
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $b53d16494e490efd$var$Tab.getOrCreateInstance(this);
            if (typeof config !== "string") return;
            if (data[config] === undefined || config.startsWith("_") || config === "constructor") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * Data API implementation
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $b53d16494e490efd$var$EVENT_CLICK_DATA_API, $b53d16494e490efd$var$SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if ((0, $e210a887c6468aad$export$30e0dc115df457ed)(this)) return;
    $b53d16494e490efd$var$Tab.getOrCreateInstance(this).show();
});
/**
 * Initialize on focus
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(window, $b53d16494e490efd$var$EVENT_LOAD_DATA_API, ()=>{
    for (const element of (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($b53d16494e490efd$var$SELECTOR_DATA_TOGGLE_ACTIVE))$b53d16494e490efd$var$Tab.getOrCreateInstance(element);
});
/**
 * jQuery
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($b53d16494e490efd$var$Tab);
var $b53d16494e490efd$export$2e2bcd8739ae039 = $b53d16494e490efd$var$Tab;


/**
 * --------------------------------------------------------------------------
 * Bootstrap collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 



/**
 * Constants
 */ const $40b3428f6c2a2b86$var$NAME = "collapse";
const $40b3428f6c2a2b86$var$DATA_KEY = "bs.collapse";
const $40b3428f6c2a2b86$var$EVENT_KEY = `.${$40b3428f6c2a2b86$var$DATA_KEY}`;
const $40b3428f6c2a2b86$var$DATA_API_KEY = ".data-api";
const $40b3428f6c2a2b86$var$EVENT_SHOW = `show${$40b3428f6c2a2b86$var$EVENT_KEY}`;
const $40b3428f6c2a2b86$var$EVENT_SHOWN = `shown${$40b3428f6c2a2b86$var$EVENT_KEY}`;
const $40b3428f6c2a2b86$var$EVENT_HIDE = `hide${$40b3428f6c2a2b86$var$EVENT_KEY}`;
const $40b3428f6c2a2b86$var$EVENT_HIDDEN = `hidden${$40b3428f6c2a2b86$var$EVENT_KEY}`;
const $40b3428f6c2a2b86$var$EVENT_CLICK_DATA_API = `click${$40b3428f6c2a2b86$var$EVENT_KEY}${$40b3428f6c2a2b86$var$DATA_API_KEY}`;
const $40b3428f6c2a2b86$var$CLASS_NAME_SHOW = "show";
const $40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE = "collapse";
const $40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSING = "collapsing";
const $40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSED = "collapsed";
const $40b3428f6c2a2b86$var$CLASS_NAME_DEEPER_CHILDREN = `:scope .${$40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE} .${$40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE}`;
const $40b3428f6c2a2b86$var$CLASS_NAME_HORIZONTAL = "collapse-horizontal";
const $40b3428f6c2a2b86$var$WIDTH = "width";
const $40b3428f6c2a2b86$var$HEIGHT = "height";
const $40b3428f6c2a2b86$var$SELECTOR_ACTIVES = ".collapse.show, .collapse.collapsing";
const $40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="collapse"]';
const $40b3428f6c2a2b86$var$Default = {
    parent: null,
    toggle: true
};
const $40b3428f6c2a2b86$var$DefaultType = {
    parent: "(null|element)",
    toggle: "boolean"
};
/**
 * Class definition
 */ class $40b3428f6c2a2b86$var$Collapse extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    constructor(element, config){
        super(element, config);
        this._isTransitioning = false;
        this._triggerArray = [];
        const toggleList = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE);
        for (const elem of toggleList){
            const selector = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).getSelectorFromElement(elem);
            const filterElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find(selector).filter((foundElement)=>foundElement === this._element);
            if (selector !== null && filterElement.length) this._triggerArray.push(elem);
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    // Getters
    static get Default() {
        return $40b3428f6c2a2b86$var$Default;
    }
    static get DefaultType() {
        return $40b3428f6c2a2b86$var$DefaultType;
    }
    static get NAME() {
        return $40b3428f6c2a2b86$var$NAME;
    }
    // Public
    toggle() {
        if (this._isShown()) this.hide();
        else this.show();
    }
    show() {
        if (this._isTransitioning || this._isShown()) return;
        let activeChildren = [];
        // find active children
        if (this._config.parent) activeChildren = this._getFirstLevelChildren($40b3428f6c2a2b86$var$SELECTOR_ACTIVES).filter((element)=>element !== this._element).map((element)=>$40b3428f6c2a2b86$var$Collapse.getOrCreateInstance(element, {
                toggle: false
            }));
        if (activeChildren.length && activeChildren[0]._isTransitioning) return;
        const startEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $40b3428f6c2a2b86$var$EVENT_SHOW);
        if (startEvent.defaultPrevented) return;
        for (const activeInstance of activeChildren)activeInstance.hide();
        const dimension = this._getDimension();
        this._element.classList.remove($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE);
        this._element.classList.add($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSING);
        this._element.style[dimension] = 0;
        this._addAriaAndCollapsedClass(this._triggerArray, true);
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSING);
            this._element.classList.add($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE, $40b3428f6c2a2b86$var$CLASS_NAME_SHOW);
            this._element.style[dimension] = "";
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $40b3428f6c2a2b86$var$EVENT_SHOWN);
        };
        const capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
        const scrollSize = `scroll${capitalizedDimension}`;
        this._queueCallback(complete, this._element, true);
        this._element.style[dimension] = `${this._element[scrollSize]}px`;
    }
    hide() {
        if (this._isTransitioning || !this._isShown()) return;
        const startEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $40b3428f6c2a2b86$var$EVENT_HIDE);
        if (startEvent.defaultPrevented) return;
        const dimension = this._getDimension();
        this._element.style[dimension] = `${this._element.getBoundingClientRect()[dimension]}px`;
        (0, $e210a887c6468aad$export$b7a864e1eaef9de5)(this._element);
        this._element.classList.add($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSING);
        this._element.classList.remove($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE, $40b3428f6c2a2b86$var$CLASS_NAME_SHOW);
        for (const trigger of this._triggerArray){
            const element = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).getElementFromSelector(trigger);
            if (element && !this._isShown(element)) this._addAriaAndCollapsedClass([
                trigger
            ], false);
        }
        this._isTransitioning = true;
        const complete = ()=>{
            this._isTransitioning = false;
            this._element.classList.remove($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSING);
            this._element.classList.add($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSE);
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $40b3428f6c2a2b86$var$EVENT_HIDDEN);
        };
        this._element.style[dimension] = "";
        this._queueCallback(complete, this._element, true);
    }
    _isShown(element = this._element) {
        return element.classList.contains($40b3428f6c2a2b86$var$CLASS_NAME_SHOW);
    }
    // Private
    _configAfterMerge(config) {
        config.toggle = Boolean(config.toggle) // Coerce string values
        ;
        config.parent = (0, $e210a887c6468aad$export$d16800b7e59a8051)(config.parent);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains($40b3428f6c2a2b86$var$CLASS_NAME_HORIZONTAL) ? $40b3428f6c2a2b86$var$WIDTH : $40b3428f6c2a2b86$var$HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = this._getFirstLevelChildren($40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE);
        for (const element of children){
            const selected = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).getElementFromSelector(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        }
    }
    _getFirstLevelChildren(selector) {
        const children = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        // remove children if greater depth
        return (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find(selector, this._config.parent).filter((element)=>!children.includes(element));
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        for (const element of triggerArray){
            element.classList.toggle($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSED, !isOpen);
            element.setAttribute("aria-expanded", isOpen);
        }
    }
    // Static
    static jQueryInterface(config) {
        const _config = {};
        if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
        return this.each(function() {
            const data = $40b3428f6c2a2b86$var$Collapse.getOrCreateInstance(this, _config);
            if (typeof config === "string") {
                if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
                data[config]();
            }
        });
    }
}
/**
 * Data API implementation
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $40b3428f6c2a2b86$var$EVENT_CLICK_DATA_API, $40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    for (const element of (0, $47e855298aebfbc4$export$2e2bcd8739ae039).getMultipleElementsFromSelector(this))$40b3428f6c2a2b86$var$Collapse.getOrCreateInstance(element, {
        toggle: false
    }).toggle();
});
/**
 * jQuery
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($40b3428f6c2a2b86$var$Collapse);
var $40b3428f6c2a2b86$export$2e2bcd8739ae039 = $40b3428f6c2a2b86$var$Collapse;




