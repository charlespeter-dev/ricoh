/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ const $e210a887c6468aad$var$MAX_UID = 1000000;
const $e210a887c6468aad$var$MILLISECONDS_MULTIPLIER = 1000;
const $e210a887c6468aad$var$TRANSITION_END = "transitionend";
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
const $e210a887c6468aad$var$getSelector = (element)=>{
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
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
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
const $e210a887c6468aad$export$45a5e7f76e0caa8d = (object)=>{
    if (!object || typeof object !== "object") return false;
    if (typeof object.jquery !== "undefined") object = object[0];
    return typeof object.nodeType !== "undefined";
};
const $e210a887c6468aad$export$d16800b7e59a8051 = (object)=>{
    // it's a jQuery object or a node element
    if ($e210a887c6468aad$export$45a5e7f76e0caa8d(object)) return object.jquery ? object[0] : object;
    if (typeof object === "string" && object.length > 0) return document.querySelector(object);
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
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/event-handler.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 
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
        for(let { target: target  } = event; target && target !== this; target = target.parentNode)for (const domElement of domElements){
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
    // todo: tooltip passes `false` instead of selector, so we need to check
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
    for (const handlerKey of Object.keys(storeElementEvent))if (handlerKey.includes(namespace)) {
        const event = storeElementEvent[handlerKey];
        $3426e80176c401dc$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
    }
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
        for (const keyHandlers of Object.keys(storeElementEvent)){
            const handlerKey = keyHandlers.replace($3426e80176c401dc$var$stripUidRegex, "");
            if (!inNamespace || originalTypeEvent.includes(handlerKey)) {
                const event = storeElementEvent[keyHandlers];
                $3426e80176c401dc$var$removeHandler(element, events, typeEvent, event.callable, event.delegationSelector);
            }
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
        let evt = new Event(event, {
            bubbles: bubbles,
            cancelable: true
        });
        evt = $3426e80176c401dc$var$hydrateObj(evt, args);
        if (defaultPrevented) evt.preventDefault();
        if (nativeDispatch) element.dispatchEvent(evt);
        if (evt.defaultPrevented && jQueryEvent) jQueryEvent.preventDefault();
        return evt;
    }
};
function $3426e80176c401dc$var$hydrateObj(obj, meta) {
    for (const [key, value] of Object.entries(meta || {}))try {
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
 * Bootstrap (v5.2.3): dom/manipulator.js
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
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/selector-engine.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 
/**
 * Constants
 */ const $47e855298aebfbc4$var$SelectorEngine = {
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
    }
};
var $47e855298aebfbc4$export$2e2bcd8739ae039 = $47e855298aebfbc4$var$SelectorEngine;


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/swipe.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): util/config.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 

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
        for (const property of Object.keys(configTypes)){
            const expectedTypes = configTypes[property];
            const value = config[property];
            const valueType = (0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(value) ? "element" : (0, $e210a887c6468aad$export$2fe53163c7bc4eaf)(value);
            if (!new RegExp(expectedTypes).test(valueType)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${property}" provided type "${valueType}" but expected type "${expectedTypes}".`);
        }
    }
}
var $5dbfd1c666377abf$export$2e2bcd8739ae039 = $5dbfd1c666377abf$var$Config;




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
 */ class $f26ea41c696aca8a$var$Swipe extends (0, $5dbfd1c666377abf$export$2e2bcd8739ae039) {
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
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).off(this._element, $f26ea41c696aca8a$var$EVENT_KEY);
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
        (0, $e210a887c6468aad$export$51396ec711da548b)(this._config.endCallback);
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
        (0, $e210a887c6468aad$export$51396ec711da548b)(direction > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
        if (this._supportPointerEvents) {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $f26ea41c696aca8a$var$EVENT_POINTERDOWN, (event)=>this._start(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $f26ea41c696aca8a$var$EVENT_POINTERUP, (event)=>this._end(event));
            this._element.classList.add($f26ea41c696aca8a$var$CLASS_NAME_POINTER_EVENT);
        } else {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $f26ea41c696aca8a$var$EVENT_TOUCHSTART, (event)=>this._start(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $f26ea41c696aca8a$var$EVENT_TOUCHMOVE, (event)=>this._move(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $f26ea41c696aca8a$var$EVENT_TOUCHEND, (event)=>this._end(event));
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


/**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): base-component.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ /**
 * --------------------------------------------------------------------------
 * Bootstrap (v5.2.3): dom/data.js
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
 * Constants
 */ const $5b3598292f163e3e$var$VERSION = "5.2.3";
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
 */ class $29cabbdf8359b033$var$Carousel extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    constructor(element, config){
        super(element, config);
        this._interval = null;
        this._activeElement = null;
        this._isSliding = false;
        this.touchTimeout = null;
        this._swipeHelper = null;
        this._indicatorsElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_INDICATORS, this._element);
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
        if (!document.hidden && (0, $e210a887c6468aad$export$795910f5f15a9633)(this._element)) this.next();
    }
    prev() {
        this._slide($29cabbdf8359b033$var$ORDER_PREV);
    }
    pause() {
        if (this._isSliding) (0, $e210a887c6468aad$export$201d3c8336a47e6c)(this._element);
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
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).one(this._element, $29cabbdf8359b033$var$EVENT_SLID, ()=>this.cycle());
            return;
        }
        this.cycle();
    }
    to(index) {
        const items = this._getItems();
        if (index > items.length - 1 || index < 0) return;
        if (this._isSliding) {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).one(this._element, $29cabbdf8359b033$var$EVENT_SLID, ()=>this.to(index));
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
        if (this._config.keyboard) (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSEENTER, ()=>this.pause());
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSELEAVE, ()=>this._maybeEnableCycle());
        }
        if (this._config.touch && (0, $f26ea41c696aca8a$export$2e2bcd8739ae039).isSupported()) this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
        for (const img of (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_ITEM_IMG, this._element))(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(img, $29cabbdf8359b033$var$EVENT_DRAG_START, (event)=>event.preventDefault());
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
        const activeIndicator = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE, this._indicatorsElement);
        activeIndicator.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
        activeIndicator.removeAttribute("aria-current");
        const newActiveIndicator = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne(`[data-bs-slide-to="${index}"]`, this._indicatorsElement);
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
        const nextElement = element || (0, $e210a887c6468aad$export$7bc25e2173fc3d1f)(this._getItems(), activeElement, isNext, this._config.wrap);
        if (nextElement === activeElement) return;
        const nextElementIndex = this._getItemIndex(nextElement);
        const triggerEvent = (eventName)=>{
            return (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, eventName, {
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
        (0, $e210a887c6468aad$export$b7a864e1eaef9de5)(nextElement);
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
        return (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
    }
    _getItems() {
        return (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_ITEM, this._element);
    }
    _clearInterval() {
        if (this._interval) {
            clearInterval(this._interval);
            this._interval = null;
        }
    }
    _directionToOrder(direction) {
        if ((0, $e210a887c6468aad$export$702d680b21cbd764)()) return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_PREV : $29cabbdf8359b033$var$ORDER_NEXT;
        return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_NEXT : $29cabbdf8359b033$var$ORDER_PREV;
    }
    _orderToDirection(order) {
        if ((0, $e210a887c6468aad$export$702d680b21cbd764)()) return order === $29cabbdf8359b033$var$ORDER_PREV ? $29cabbdf8359b033$var$DIRECTION_LEFT : $29cabbdf8359b033$var$DIRECTION_RIGHT;
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
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $29cabbdf8359b033$var$EVENT_CLICK_DATA_API, $29cabbdf8359b033$var$SELECTOR_DATA_SLIDE, function(event) {
    const target = (0, $e210a887c6468aad$export$4a2866eb97cae207)(this);
    if (!target || !target.classList.contains($29cabbdf8359b033$var$CLASS_NAME_CAROUSEL)) return;
    event.preventDefault();
    const carousel = $29cabbdf8359b033$var$Carousel.getOrCreateInstance(target);
    const slideIndex = this.getAttribute("data-bs-slide-to");
    if (slideIndex) {
        carousel.to(slideIndex);
        carousel._maybeEnableCycle();
        return;
    }
    if ((0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttribute(this, "slide") === "next") {
        carousel.next();
        carousel._maybeEnableCycle();
        return;
    }
    carousel.prev();
    carousel._maybeEnableCycle();
});
(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(window, $29cabbdf8359b033$var$EVENT_LOAD_DATA_API, ()=>{
    const carousels = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_DATA_RIDE);
    for (const carousel of carousels)$29cabbdf8359b033$var$Carousel.getOrCreateInstance(carousel);
});
/**
 * jQuery
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($29cabbdf8359b033$var$Carousel);
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


