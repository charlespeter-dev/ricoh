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
 */ class $29cabbdf8359b033$var$Carousel extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
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
        this._indicatorsElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_INDICATORS, this._element);
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
        if (!document.hidden && (0, $e210a887c6468aad$export$795910f5f15a9633)(this._element)) this.next();
    }
    prev() {
        this._slide($29cabbdf8359b033$var$ORDER_PREV);
    }
    pause(event) {
        if (!event) this._isPaused = true;
        if ((0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_NEXT_PREV, this._element)) {
            (0, $e210a887c6468aad$export$201d3c8336a47e6c)(this._element);
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
        this._activeElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
        const activeIndex = this._getItemIndex(this._activeElement);
        if (index > this._items.length - 1 || index < 0) return;
        if (this._isSliding) {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).one(this._element, $29cabbdf8359b033$var$EVENT_SLID, ()=>this.to(index));
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
            ...(0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttributes(this._element),
            ...typeof config === "object" ? config : {}
        };
        (0, $e210a887c6468aad$export$a0f7579b69cdb6e1)($29cabbdf8359b033$var$NAME, config, $29cabbdf8359b033$var$DefaultType);
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
        if (this._config.keyboard) (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_KEYDOWN, (event)=>this._keydown(event));
        if (this._config.pause === "hover") {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSEENTER, (event)=>this.pause(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_MOUSELEAVE, (event)=>this.cycle(event));
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
        (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_ITEM_IMG, this._element).forEach((itemImg)=>{
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(itemImg, $29cabbdf8359b033$var$EVENT_DRAG_START, (event)=>event.preventDefault());
        });
        if (this._pointerEvent) {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_POINTERDOWN, (event)=>start(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_POINTERUP, (event)=>end(event));
            this._element.classList.add($29cabbdf8359b033$var$CLASS_NAME_POINTER_EVENT);
        } else {
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_TOUCHSTART, (event)=>start(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_TOUCHMOVE, (event)=>move(event));
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, $29cabbdf8359b033$var$EVENT_TOUCHEND, (event)=>end(event));
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
        this._items = element && element.parentNode ? (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_ITEM, element.parentNode) : [];
        return this._items.indexOf(element);
    }
    _getItemByOrder(order, activeElement) {
        const isNext = order === $29cabbdf8359b033$var$ORDER_NEXT;
        return (0, $e210a887c6468aad$export$7bc25e2173fc3d1f)(this._items, activeElement, isNext, this._config.wrap);
    }
    _triggerSlideEvent(relatedTarget, eventDirectionName) {
        const targetIndex = this._getItemIndex(relatedTarget);
        const fromIndex = this._getItemIndex((0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element));
        return (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $29cabbdf8359b033$var$EVENT_SLIDE, {
            relatedTarget: relatedTarget,
            direction: eventDirectionName,
            from: fromIndex,
            to: targetIndex
        });
    }
    _setActiveIndicatorElement(element) {
        if (this._indicatorsElement) {
            const activeIndicator = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE, this._indicatorsElement);
            activeIndicator.classList.remove($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
            activeIndicator.removeAttribute("aria-current");
            const indicators = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_INDICATOR, this._indicatorsElement);
            for(let i = 0; i < indicators.length; i++)if (Number.parseInt(indicators[i].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(element)) {
                indicators[i].classList.add($29cabbdf8359b033$var$CLASS_NAME_ACTIVE);
                indicators[i].setAttribute("aria-current", "true");
                break;
            }
        }
    }
    _updateInterval() {
        const element = this._activeElement || (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
        if (!element) return;
        const elementInterval = Number.parseInt(element.getAttribute("data-bs-interval"), 10);
        if (elementInterval) {
            this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
            this._config.interval = elementInterval;
        } else this._config.interval = this._config.defaultInterval || this._config.interval;
    }
    _slide(directionOrOrder, element) {
        const order = this._directionToOrder(directionOrOrder);
        const activeElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($29cabbdf8359b033$var$SELECTOR_ACTIVE_ITEM, this._element);
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
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $29cabbdf8359b033$var$EVENT_SLID, {
                relatedTarget: nextElement,
                direction: eventDirectionName,
                from: activeElementIndex,
                to: nextElementIndex
            });
        };
        if (this._element.classList.contains($29cabbdf8359b033$var$CLASS_NAME_SLIDE)) {
            nextElement.classList.add(orderClassName);
            (0, $e210a887c6468aad$export$b7a864e1eaef9de5)(nextElement);
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
        if ((0, $e210a887c6468aad$export$702d680b21cbd764)()) return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_PREV : $29cabbdf8359b033$var$ORDER_NEXT;
        return direction === $29cabbdf8359b033$var$DIRECTION_LEFT ? $29cabbdf8359b033$var$ORDER_NEXT : $29cabbdf8359b033$var$ORDER_PREV;
    }
    _orderToDirection(order) {
        if (![
            $29cabbdf8359b033$var$ORDER_NEXT,
            $29cabbdf8359b033$var$ORDER_PREV
        ].includes(order)) return order;
        if ((0, $e210a887c6468aad$export$702d680b21cbd764)()) return order === $29cabbdf8359b033$var$ORDER_PREV ? $29cabbdf8359b033$var$DIRECTION_LEFT : $29cabbdf8359b033$var$DIRECTION_RIGHT;
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
        const target = (0, $e210a887c6468aad$export$4a2866eb97cae207)(this);
        if (!target || !target.classList.contains($29cabbdf8359b033$var$CLASS_NAME_CAROUSEL)) return;
        const config = {
            ...(0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttributes(target),
            ...(0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttributes(this)
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
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $29cabbdf8359b033$var$EVENT_CLICK_DATA_API, $29cabbdf8359b033$var$SELECTOR_DATA_SLIDE, $29cabbdf8359b033$var$Carousel.dataApiClickHandler);
(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(window, $29cabbdf8359b033$var$EVENT_LOAD_DATA_API, ()=>{
    const carousels = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($29cabbdf8359b033$var$SELECTOR_DATA_RIDE);
    for(let i = 0, len = carousels.length; i < len; i++)$29cabbdf8359b033$var$Carousel.carouselInterface(carousels[i], $29cabbdf8359b033$var$Carousel.getInstance(carousels[i]));
});
/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 * add .Carousel to jQuery only if jQuery is present
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($29cabbdf8359b033$var$Carousel);
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


