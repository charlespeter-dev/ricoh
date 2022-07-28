/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $e210a887c6468aad$var$MAX_UID = 1000000;
const $e210a887c6468aad$var$MILLISECONDS_MULTIPLIER = 1000;
const $e210a887c6468aad$var$TRANSITION_END = "transitionend";
// Shoutout AngusCroll (https://goo.gl/pxwQGp)
const $e210a887c6468aad$var$toType = (obj)=>{
    if (obj === null || obj === undefined) return `${obj}`;
    return ({}).toString.call(obj).match(/\s([a-z]+)/i)[1].toLowerCase();
};
/**
 * --------------------------------------------------------------------------
 * Public Util Api
 * --------------------------------------------------------------------------
 */ const $e210a887c6468aad$export$6d2b3473b0986646 = (prefix)=>{
    do prefix += Math.floor(Math.random() * $e210a887c6468aad$var$MAX_UID);
    while (document.getElementById(prefix));
    return prefix;
};
const $e210a887c6468aad$var$getSelector = (element)=>{
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
const $e210a887c6468aad$export$2a298c6a007e5e40 = (element)=>{
    const selector = $e210a887c6468aad$var$getSelector(element);
    if (selector) return document.querySelector(selector) ? selector : null;
    return null;
};
const $e210a887c6468aad$export$4a2866eb97cae207 = (element)=>{
    const selector = $e210a887c6468aad$var$getSelector(element);
    return selector ? document.querySelector(selector) : null;
};
const $e210a887c6468aad$export$530d045e570efb0f = (element)=>{
    if (!element) return 0;
    // Get transition-duration of the element
    let { transitionDuration: transitionDuration , transitionDelay: transitionDelay  } = window.getComputedStyle(element);
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
const $e210a887c6468aad$export$45a5e7f76e0caa8d = (obj)=>{
    if (!obj || typeof obj !== "object") return false;
    if (typeof obj.jquery !== "undefined") obj = obj[0];
    return typeof obj.nodeType !== "undefined";
};
const $e210a887c6468aad$export$d16800b7e59a8051 = (obj)=>{
    if ($e210a887c6468aad$export$45a5e7f76e0caa8d(obj)) return obj.jquery ? obj[0] : obj;
    if (typeof obj === "string" && obj.length > 0) return document.querySelector(obj);
    return null;
};
const $e210a887c6468aad$export$a0f7579b69cdb6e1 = (componentName, config, configTypes)=>{
    Object.keys(configTypes).forEach((property)=>{
        const expectedTypes = configTypes[property];
        const value = config[property];
        const valueType = value && $e210a887c6468aad$export$45a5e7f76e0caa8d(value) ? "element" : $e210a887c6468aad$var$toType(value);
        if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${componentName.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
    });
};
const $e210a887c6468aad$export$795910f5f15a9633 = (element)=>{
    if (!$e210a887c6468aad$export$45a5e7f76e0caa8d(element) || element.getClientRects().length === 0) return false;
    return getComputedStyle(element).getPropertyValue("visibility") === "visible";
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
    // eslint-disable-next-line no-unused-expressions
    element.offsetHeight;
};
const $e210a887c6468aad$export$74ab881f7fc208ab = ()=>{
    const { jQuery: jQuery  } = window;
    if (jQuery && !document.body.hasAttribute("data-bs-no-jquery")) return jQuery;
    return null;
};
const $e210a887c6468aad$var$DOMContentLoadedCallbacks = [];
const $e210a887c6468aad$export$62028ff70825ead9 = (callback1)=>{
    if (document.readyState === "loading") {
        // add listener on the first call when the document is in loading state
        if (!$e210a887c6468aad$var$DOMContentLoadedCallbacks.length) document.addEventListener("DOMContentLoaded", ()=>{
            $e210a887c6468aad$var$DOMContentLoadedCallbacks.forEach((callback)=>callback());
        });
        $e210a887c6468aad$var$DOMContentLoadedCallbacks.push(callback1);
    } else callback1();
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
const $e210a887c6468aad$export$51396ec711da548b = (callback)=>{
    if (typeof callback === "function") callback();
};
const $e210a887c6468aad$export$d6cd5457cf4106ef = (callback, transitionElement, waitForTransition = true)=>{
    if (!waitForTransition) {
        $e210a887c6468aad$export$51396ec711da548b(callback);
        return;
    }
    const durationPadding = 5;
    const emulatedDuration = $e210a887c6468aad$export$530d045e570efb0f(transitionElement) + durationPadding;
    let called = false;
    const handler = ({ target: target  })=>{
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
    let index = list.indexOf(activeElement);
    // if the element does not exist in the list return an element depending on the direction and if cycle is allowed
    if (index === -1) return list[!shouldGetNext && isCycleAllowed ? list.length - 1 : 0];
    const listLength = list.length;
    index += shouldGetNext ? 1 : -1;
    if (isCycleAllowed) index = (index + listLength) % listLength;
    return list[Math.max(0, Math.min(index, listLength - 1))];
};



/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
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
const $3426e80176c401dc$var$customEventsRegex = /^(mouseenter|mouseleave)/i;
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
 * ------------------------------------------------------------------------
 * Private methods
 * ------------------------------------------------------------------------
 */ function $3426e80176c401dc$var$getUidEvent(element, uid) {
    return uid && `${uid}::${$3426e80176c401dc$var$uidEvent++}` || element.uidEvent || $3426e80176c401dc$var$uidEvent++;
}
function $3426e80176c401dc$var$getEvent(element) {
    const uid = $3426e80176c401dc$var$getUidEvent(element);
    element.uidEvent = uid;
    $3426e80176c401dc$var$eventRegistry[uid] = $3426e80176c401dc$var$eventRegistry[uid] || {};
    return $3426e80176c401dc$var$eventRegistry[uid];
}
function $3426e80176c401dc$var$bootstrapHandler(element, fn) {
    return function handler(event) {
        event.delegateTarget = element;
        if (handler.oneOff) $3426e80176c401dc$var$EventHandler.off(element, event.type, fn);
        return fn.apply(element, [
            event
        ]);
    };
}
function $3426e80176c401dc$var$bootstrapDelegationHandler(element, selector, fn) {
    return function handler(event) {
        const domElements = element.querySelectorAll(selector);
        for(let { target: target  } = event; target && target !== this; target = target.parentNode){
            for(let i = domElements.length; i--;)if (domElements[i] === target) {
                event.delegateTarget = target;
                if (handler.oneOff) $3426e80176c401dc$var$EventHandler.off(element, event.type, selector, fn);
                return fn.apply(target, [
                    event
                ]);
            }
        }
        // To please ESLint
        return null;
    };
}
function $3426e80176c401dc$var$findHandler(events, handler, delegationSelector = null) {
    const uidEventList = Object.keys(events);
    for(let i = 0, len = uidEventList.length; i < len; i++){
        const event = events[uidEventList[i]];
        if (event.originalHandler === handler && event.delegationSelector === delegationSelector) return event;
    }
    return null;
}
function $3426e80176c401dc$var$normalizeParams(originalTypeEvent, handler, delegationFn) {
    const delegation = typeof handler === "string";
    const originalHandler = delegation ? delegationFn : handler;
    let typeEvent = $3426e80176c401dc$var$getTypeEvent(originalTypeEvent);
    const isNative = $3426e80176c401dc$var$nativeEvents.has(typeEvent);
    if (!isNative) typeEvent = originalTypeEvent;
    return [
        delegation,
        originalHandler,
        typeEvent
    ];
}
function $3426e80176c401dc$var$addHandler(element, originalTypeEvent, handler, delegationFn, oneOff) {
    if (typeof originalTypeEvent !== "string" || !element) return;
    if (!handler) {
        handler = delegationFn;
        delegationFn = null;
    }
    // in case of mouseenter or mouseleave wrap the handler within a function that checks for its DOM position
    // this prevents the handler from being dispatched the same way as mouseover or mouseout does
    if ($3426e80176c401dc$var$customEventsRegex.test(originalTypeEvent)) {
        const wrapFn = (fn)=>{
            return function(event) {
                if (!event.relatedTarget || event.relatedTarget !== event.delegateTarget && !event.delegateTarget.contains(event.relatedTarget)) return fn.call(this, event);
            };
        };
        if (delegationFn) delegationFn = wrapFn(delegationFn);
        else handler = wrapFn(handler);
    }
    const [delegation, originalHandler, typeEvent] = $3426e80176c401dc$var$normalizeParams(originalTypeEvent, handler, delegationFn);
    const events = $3426e80176c401dc$var$getEvent(element);
    const handlers = events[typeEvent] || (events[typeEvent] = {});
    const previousFn = $3426e80176c401dc$var$findHandler(handlers, originalHandler, delegation ? handler : null);
    if (previousFn) {
        previousFn.oneOff = previousFn.oneOff && oneOff;
        return;
    }
    const uid = $3426e80176c401dc$var$getUidEvent(originalHandler, originalTypeEvent.replace($3426e80176c401dc$var$namespaceRegex, ""));
    const fn1 = delegation ? $3426e80176c401dc$var$bootstrapDelegationHandler(element, handler, delegationFn) : $3426e80176c401dc$var$bootstrapHandler(element, handler);
    fn1.delegationSelector = delegation ? handler : null;
    fn1.originalHandler = originalHandler;
    fn1.oneOff = oneOff;
    fn1.uidEvent = uid;
    handlers[uid] = fn1;
    element.addEventListener(typeEvent, fn1, delegation);
}
function $3426e80176c401dc$var$removeHandler(element, events, typeEvent, handler, delegationSelector) {
    const fn = $3426e80176c401dc$var$findHandler(events[typeEvent], handler, delegationSelector);
    if (!fn) return;
    element.removeEventListener(typeEvent, fn, Boolean(delegationSelector));
    delete events[typeEvent][fn.uidEvent];
}
function $3426e80176c401dc$var$removeNamespacedHandlers(element, events, typeEvent, namespace) {
    const storeElementEvent = events[typeEvent] || {};
    Object.keys(storeElementEvent).forEach((handlerKey)=>{
        if (handlerKey.includes(namespace)) {
            const event = storeElementEvent[handlerKey];
            $3426e80176c401dc$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
        }
    });
}
function $3426e80176c401dc$var$getTypeEvent(event) {
    // allow to get the native events from namespaced events ('click.bs.button' --> 'click')
    event = event.replace($3426e80176c401dc$var$stripNameRegex, "");
    return $3426e80176c401dc$var$customEvents[event] || event;
}
const $3426e80176c401dc$var$EventHandler = {
    on (element, event, handler, delegationFn) {
        $3426e80176c401dc$var$addHandler(element, event, handler, delegationFn, false);
    },
    one (element, event, handler, delegationFn) {
        $3426e80176c401dc$var$addHandler(element, event, handler, delegationFn, true);
    },
    off (element, originalTypeEvent, handler, delegationFn) {
        if (typeof originalTypeEvent !== "string" || !element) return;
        const [delegation, originalHandler, typeEvent] = $3426e80176c401dc$var$normalizeParams(originalTypeEvent, handler, delegationFn);
        const inNamespace = typeEvent !== originalTypeEvent;
        const events = $3426e80176c401dc$var$getEvent(element);
        const isNamespace = originalTypeEvent.startsWith(".");
        if (typeof originalHandler !== "undefined") {
            // Simplest case: handler is passed, remove that listener ONLY.
            if (!events || !events[typeEvent]) return;
            $3426e80176c401dc$var$removeHandler(element, events, typeEvent, originalHandler, delegation ? handler : null);
            return;
        }
        if (isNamespace) Object.keys(events).forEach((elementEvent)=>{
            $3426e80176c401dc$var$removeNamespacedHandlers(element, events, elementEvent, originalTypeEvent.slice(1));
        });
        const storeElementEvent = events[typeEvent] || {};
        Object.keys(storeElementEvent).forEach((keyHandlers)=>{
            const handlerKey = keyHandlers.replace($3426e80176c401dc$var$stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                $3426e80176c401dc$var$removeHandler(element, events, typeEvent, event.originalHandler, event.delegationSelector);
            }
        });
    },
    trigger (element, event, args) {
        if (typeof event !== "string" || !element) return null;
        const $ = (0, $e210a887c6468aad$export$74ab881f7fc208ab)();
        const typeEvent = $3426e80176c401dc$var$getTypeEvent(event);
        const inNamespace = event !== typeEvent;
        const isNative = $3426e80176c401dc$var$nativeEvents.has(typeEvent);
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
            bubbles: bubbles,
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
var $3426e80176c401dc$export$2e2bcd8739ae039 = $3426e80176c401dc$var$EventHandler;



const $47e855298aebfbc4$var$NODE_TEXT = 3;
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
        let ancestor = element.parentNode;
        while(ancestor && ancestor.nodeType === Node.ELEMENT_NODE && ancestor.nodeType !== $47e855298aebfbc4$var$NODE_TEXT){
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
        return this.find(focusables, element).filter((el)=>!(0, $e210a887c6468aad$export$30e0dc115df457ed)(el) && (0, $e210a887c6468aad$export$795910f5f15a9633)(el));
    }
};
var $47e855298aebfbc4$export$2e2bcd8739ae039 = $47e855298aebfbc4$var$SelectorEngine;


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/data.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
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
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const $5b3598292f163e3e$var$VERSION = "5.1.3";
class $5b3598292f163e3e$var$BaseComponent {
    constructor(element){
        element = (0, $e210a887c6468aad$export$d16800b7e59a8051)(element);
        if (!element) return;
        this._element = element;
        (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).set(this._element, this.constructor.DATA_KEY, this);
    }
    dispose() {
        (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).remove(this._element, this.constructor.DATA_KEY);
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).off(this._element, this.constructor.EVENT_KEY);
        Object.getOwnPropertyNames(this).forEach((propertyName)=>{
            this[propertyName] = null;
        });
    }
    _queueCallback(callback, element, isAnimated = true) {
        (0, $e210a887c6468aad$export$d6cd5457cf4106ef)(callback, element, isAnimated);
    }
    /** Static */ static getInstance(element) {
        return (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).get((0, $e210a887c6468aad$export$d16800b7e59a8051)(element), this.DATA_KEY);
    }
    static getOrCreateInstance(element, config = {}) {
        return this.getInstance(element) || new this(element, typeof config === "object" ? config : null);
    }
    static get VERSION() {
        return $5b3598292f163e3e$var$VERSION;
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
var $5b3598292f163e3e$export$2e2bcd8739ae039 = $5b3598292f163e3e$var$BaseComponent;


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
 */ class $b53d16494e490efd$var$Tab extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    // Getters
    static get NAME() {
        return $b53d16494e490efd$var$NAME;
    }
    // Public
    show() {
        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains($b53d16494e490efd$var$CLASS_NAME_ACTIVE)) return;
        let previous;
        const target = (0, $e210a887c6468aad$export$4a2866eb97cae207)(this._element);
        const listElement = this._element.closest($b53d16494e490efd$var$SELECTOR_NAV_LIST_GROUP);
        if (listElement) {
            const itemSelector = listElement.nodeName === "UL" || listElement.nodeName === "OL" ? $b53d16494e490efd$var$SELECTOR_ACTIVE_UL : $b53d16494e490efd$var$SELECTOR_ACTIVE;
            previous = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find(itemSelector, listElement);
            previous = previous[previous.length - 1];
        }
        const hideEvent = previous ? (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(previous, $b53d16494e490efd$var$EVENT_HIDE, {
            relatedTarget: this._element
        }) : null;
        const showEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $b53d16494e490efd$var$EVENT_SHOW, {
            relatedTarget: previous
        });
        if (showEvent.defaultPrevented || hideEvent !== null && hideEvent.defaultPrevented) return;
        this._activate(this._element, listElement);
        const complete = ()=>{
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(previous, $b53d16494e490efd$var$EVENT_HIDDEN, {
                relatedTarget: this._element
            });
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $b53d16494e490efd$var$EVENT_SHOWN, {
                relatedTarget: previous
            });
        };
        if (target) this._activate(target, target.parentNode, complete);
        else complete();
    }
    // Private
    _activate(element, container, callback) {
        const activeElements = container && (container.nodeName === "UL" || container.nodeName === "OL") ? (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($b53d16494e490efd$var$SELECTOR_ACTIVE_UL, container) : (0, $47e855298aebfbc4$export$2e2bcd8739ae039).children(container, $b53d16494e490efd$var$SELECTOR_ACTIVE);
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
            const dropdownChild = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($b53d16494e490efd$var$SELECTOR_DROPDOWN_ACTIVE_CHILD, active.parentNode);
            if (dropdownChild) dropdownChild.classList.remove($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
            if (active.getAttribute("role") === "tab") active.setAttribute("aria-selected", false);
        }
        element.classList.add($b53d16494e490efd$var$CLASS_NAME_ACTIVE);
        if (element.getAttribute("role") === "tab") element.setAttribute("aria-selected", true);
        (0, $e210a887c6468aad$export$b7a864e1eaef9de5)(element);
        if (element.classList.contains($b53d16494e490efd$var$CLASS_NAME_FADE)) element.classList.add($b53d16494e490efd$var$CLASS_NAME_SHOW);
        let parent = element.parentNode;
        if (parent && parent.nodeName === "LI") parent = parent.parentNode;
        if (parent && parent.classList.contains($b53d16494e490efd$var$CLASS_NAME_DROPDOWN_MENU)) {
            const dropdownElement = element.closest($b53d16494e490efd$var$SELECTOR_DROPDOWN);
            if (dropdownElement) (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($b53d16494e490efd$var$SELECTOR_DROPDOWN_TOGGLE, dropdownElement).forEach((dropdown)=>dropdown.classList.add($b53d16494e490efd$var$CLASS_NAME_ACTIVE));
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
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $b53d16494e490efd$var$EVENT_CLICK_DATA_API, $b53d16494e490efd$var$SELECTOR_DATA_TOGGLE, function(event) {
    if ([
        "A",
        "AREA"
    ].includes(this.tagName)) event.preventDefault();
    if ((0, $e210a887c6468aad$export$30e0dc115df457ed)(this)) return;
    const data = $b53d16494e490efd$var$Tab.getOrCreateInstance(this);
    data.show();
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Tab to jQuery only if jQuery is present
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($b53d16494e490efd$var$Tab);
var $b53d16494e490efd$export$2e2bcd8739ae039 = $b53d16494e490efd$var$Tab;





/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.1.3): dom/manipulator.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ function $9f1bee617b265502$var$normalizeData(val) {
    if (val === "true") return true;
    if (val === "false") return false;
    if (val === Number(val).toString()) return Number(val);
    if (val === "" || val === "null") return null;
    return val;
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
        Object.keys(element.dataset).filter((key)=>key.startsWith("bs")).forEach((key)=>{
            let pureKey = key.replace(/^bs/, "");
            pureKey = pureKey.charAt(0).toLowerCase() + pureKey.slice(1, pureKey.length);
            attributes[pureKey] = $9f1bee617b265502$var$normalizeData(element.dataset[key]);
        });
        return attributes;
    },
    getDataAttribute (element, key) {
        return $9f1bee617b265502$var$normalizeData(element.getAttribute(`data-bs-${$9f1bee617b265502$var$normalizeDataKey(key)}`));
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
var $9f1bee617b265502$export$2e2bcd8739ae039 = $9f1bee617b265502$var$Manipulator;




/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */ const $40b3428f6c2a2b86$var$NAME = "collapse";
const $40b3428f6c2a2b86$var$DATA_KEY = "bs.collapse";
const $40b3428f6c2a2b86$var$EVENT_KEY = `.${$40b3428f6c2a2b86$var$DATA_KEY}`;
const $40b3428f6c2a2b86$var$DATA_API_KEY = ".data-api";
const $40b3428f6c2a2b86$var$Default = {
    toggle: true,
    parent: null
};
const $40b3428f6c2a2b86$var$DefaultType = {
    toggle: "boolean",
    parent: "(null|element)"
};
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
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */ class $40b3428f6c2a2b86$var$Collapse extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    constructor(element, config){
        super(element);
        this._isTransitioning = false;
        this._config = this._getConfig(config);
        this._triggerArray = [];
        const toggleList = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE);
        for(let i = 0, len = toggleList.length; i < len; i++){
            const elem = toggleList[i];
            const selector = (0, $e210a887c6468aad$export$2a298c6a007e5e40)(elem);
            const filterElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find(selector).filter((foundElem)=>foundElem === this._element);
            if (selector !== null && filterElement.length) {
                this._selector = selector;
                this._triggerArray.push(elem);
            }
        }
        this._initializeChildren();
        if (!this._config.parent) this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
        if (this._config.toggle) this.toggle();
    }
    // Getters
    static get Default() {
        return $40b3428f6c2a2b86$var$Default;
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
        let actives = [];
        let activesData;
        if (this._config.parent) {
            const children = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
            actives = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$SELECTOR_ACTIVES, this._config.parent).filter((elem)=>!children.includes(elem)) // remove children if greater depth
            ;
        }
        const container = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne(this._selector);
        if (actives.length) {
            const tempActiveData = actives.find((elem)=>container !== elem);
            activesData = tempActiveData ? $40b3428f6c2a2b86$var$Collapse.getInstance(tempActiveData) : null;
            if (activesData && activesData._isTransitioning) return;
        }
        const startEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $40b3428f6c2a2b86$var$EVENT_SHOW);
        if (startEvent.defaultPrevented) return;
        actives.forEach((elemActive)=>{
            if (container !== elemActive) $40b3428f6c2a2b86$var$Collapse.getOrCreateInstance(elemActive, {
                toggle: false
            }).hide();
            if (!activesData) (0, $ac46495d46cde4d0$export$2e2bcd8739ae039).set(elemActive, $40b3428f6c2a2b86$var$DATA_KEY, null);
        });
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
        const triggerArrayLength = this._triggerArray.length;
        for(let i = 0; i < triggerArrayLength; i++){
            const trigger = this._triggerArray[i];
            const elem = (0, $e210a887c6468aad$export$4a2866eb97cae207)(trigger);
            if (elem && !this._isShown(elem)) this._addAriaAndCollapsedClass([
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
    _getConfig(config) {
        config = {
            ...$40b3428f6c2a2b86$var$Default,
            ...(0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttributes(this._element),
            ...config
        };
        config.toggle = Boolean(config.toggle) // Coerce string values
        ;
        config.parent = (0, $e210a887c6468aad$export$d16800b7e59a8051)(config.parent);
        (0, $e210a887c6468aad$export$a0f7579b69cdb6e1)($40b3428f6c2a2b86$var$NAME, config, $40b3428f6c2a2b86$var$DefaultType);
        return config;
    }
    _getDimension() {
        return this._element.classList.contains($40b3428f6c2a2b86$var$CLASS_NAME_HORIZONTAL) ? $40b3428f6c2a2b86$var$WIDTH : $40b3428f6c2a2b86$var$HEIGHT;
    }
    _initializeChildren() {
        if (!this._config.parent) return;
        const children = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$CLASS_NAME_DEEPER_CHILDREN, this._config.parent);
        (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE, this._config.parent).filter((elem)=>!children.includes(elem)).forEach((element)=>{
            const selected = (0, $e210a887c6468aad$export$4a2866eb97cae207)(element);
            if (selected) this._addAriaAndCollapsedClass([
                element
            ], this._isShown(selected));
        });
    }
    _addAriaAndCollapsedClass(triggerArray, isOpen) {
        if (!triggerArray.length) return;
        triggerArray.forEach((elem)=>{
            if (isOpen) elem.classList.remove($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSED);
            else elem.classList.add($40b3428f6c2a2b86$var$CLASS_NAME_COLLAPSED);
            elem.setAttribute("aria-expanded", isOpen);
        });
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const _config = {};
            if (typeof config === "string" && /show|hide/.test(config)) _config.toggle = false;
            const data = $40b3428f6c2a2b86$var$Collapse.getOrCreateInstance(this, _config);
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
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $40b3428f6c2a2b86$var$EVENT_CLICK_DATA_API, $40b3428f6c2a2b86$var$SELECTOR_DATA_TOGGLE, function(event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.target.tagName === "A" || event.delegateTarget && event.delegateTarget.tagName === "A") event.preventDefault();
    const selector = (0, $e210a887c6468aad$export$2a298c6a007e5e40)(this);
    const selectorElements = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find(selector);
    selectorElements.forEach((element)=>{
        $40b3428f6c2a2b86$var$Collapse.getOrCreateInstance(element, {
            toggle: false
        }).toggle();
    });
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Collapse to jQuery only if jQuery is present
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($40b3428f6c2a2b86$var$Collapse);
var $40b3428f6c2a2b86$export$2e2bcd8739ae039 = $40b3428f6c2a2b86$var$Collapse;




