
function $parcel$exportWildcard(dest, source) {
  Object.keys(source).forEach(function(key) {
    if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function get() {
        return source[key];
      }
    });
  });

  return dest;
}

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}
/**
 * --------------------------------------------------------------------------
 * Bootstrap dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ var $864a452899cad2a6$exports = {};

$parcel$export($864a452899cad2a6$exports, "popperGenerator", () => $df51816adb601187$export$ed5e13716264f202);
$parcel$export($864a452899cad2a6$exports, "detectOverflow", () => $80d5553059a81f89$export$2e2bcd8739ae039);
$parcel$export($864a452899cad2a6$exports, "createPopperBase", () => $df51816adb601187$export$8f7491d57c8f97a9);
$parcel$export($864a452899cad2a6$exports, "createPopper", () => $93be2f11a82496fa$export$8f7491d57c8f97a9);
$parcel$export($864a452899cad2a6$exports, "createPopperLite", () => $253fcb0e048ab9b2$export$8f7491d57c8f97a9);
var $d33c9c04e83a0fb3$exports = {};

$parcel$export($d33c9c04e83a0fb3$exports, "top", () => $d33c9c04e83a0fb3$export$1e95b668f3b82d);
$parcel$export($d33c9c04e83a0fb3$exports, "bottom", () => $d33c9c04e83a0fb3$export$40e543e69a8b3fbb);
$parcel$export($d33c9c04e83a0fb3$exports, "right", () => $d33c9c04e83a0fb3$export$79ffe56a765070d2);
$parcel$export($d33c9c04e83a0fb3$exports, "left", () => $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4);
$parcel$export($d33c9c04e83a0fb3$exports, "auto", () => $d33c9c04e83a0fb3$export$dfb5619354ba860);
$parcel$export($d33c9c04e83a0fb3$exports, "basePlacements", () => $d33c9c04e83a0fb3$export$aec2ce47c367b8c3);
$parcel$export($d33c9c04e83a0fb3$exports, "start", () => $d33c9c04e83a0fb3$export$b3571188c770cc5a);
$parcel$export($d33c9c04e83a0fb3$exports, "end", () => $d33c9c04e83a0fb3$export$bd5df0f255a350f8);
$parcel$export($d33c9c04e83a0fb3$exports, "clippingParents", () => $d33c9c04e83a0fb3$export$390fd549c5303b4d);
$parcel$export($d33c9c04e83a0fb3$exports, "viewport", () => $d33c9c04e83a0fb3$export$d7b7311ec04a3e8f);
$parcel$export($d33c9c04e83a0fb3$exports, "popper", () => $d33c9c04e83a0fb3$export$ae5ab1c730825774);
$parcel$export($d33c9c04e83a0fb3$exports, "reference", () => $d33c9c04e83a0fb3$export$ca50aac9f3ba507f);
$parcel$export($d33c9c04e83a0fb3$exports, "variationPlacements", () => $d33c9c04e83a0fb3$export$368f9a87e87fa4e1);
$parcel$export($d33c9c04e83a0fb3$exports, "placements", () => $d33c9c04e83a0fb3$export$803cd8101b6c182b);
$parcel$export($d33c9c04e83a0fb3$exports, "beforeRead", () => $d33c9c04e83a0fb3$export$421679a7c3d56e);
$parcel$export($d33c9c04e83a0fb3$exports, "read", () => $d33c9c04e83a0fb3$export$aafa59e2e03f2942);
$parcel$export($d33c9c04e83a0fb3$exports, "afterRead", () => $d33c9c04e83a0fb3$export$6964f6c886723980);
$parcel$export($d33c9c04e83a0fb3$exports, "beforeMain", () => $d33c9c04e83a0fb3$export$c65e99957a05207c);
$parcel$export($d33c9c04e83a0fb3$exports, "main", () => $d33c9c04e83a0fb3$export$f22da7240b7add18);
$parcel$export($d33c9c04e83a0fb3$exports, "afterMain", () => $d33c9c04e83a0fb3$export$bab79516f2d662fe);
$parcel$export($d33c9c04e83a0fb3$exports, "beforeWrite", () => $d33c9c04e83a0fb3$export$8d4d2d70e7d46032);
$parcel$export($d33c9c04e83a0fb3$exports, "write", () => $d33c9c04e83a0fb3$export$68d8715fc104d294);
$parcel$export($d33c9c04e83a0fb3$exports, "afterWrite", () => $d33c9c04e83a0fb3$export$70a6e5159acce2e6);
$parcel$export($d33c9c04e83a0fb3$exports, "modifierPhases", () => $d33c9c04e83a0fb3$export$d087d3878fdf71d5);
var $d33c9c04e83a0fb3$export$1e95b668f3b82d = "top";
var $d33c9c04e83a0fb3$export$40e543e69a8b3fbb = "bottom";
var $d33c9c04e83a0fb3$export$79ffe56a765070d2 = "right";
var $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4 = "left";
var $d33c9c04e83a0fb3$export$dfb5619354ba860 = "auto";
var $d33c9c04e83a0fb3$export$aec2ce47c367b8c3 = [
    $d33c9c04e83a0fb3$export$1e95b668f3b82d,
    $d33c9c04e83a0fb3$export$40e543e69a8b3fbb,
    $d33c9c04e83a0fb3$export$79ffe56a765070d2,
    $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4
];
var $d33c9c04e83a0fb3$export$b3571188c770cc5a = "start";
var $d33c9c04e83a0fb3$export$bd5df0f255a350f8 = "end";
var $d33c9c04e83a0fb3$export$390fd549c5303b4d = "clippingParents";
var $d33c9c04e83a0fb3$export$d7b7311ec04a3e8f = "viewport";
var $d33c9c04e83a0fb3$export$ae5ab1c730825774 = "popper";
var $d33c9c04e83a0fb3$export$ca50aac9f3ba507f = "reference";
var $d33c9c04e83a0fb3$export$368f9a87e87fa4e1 = /*#__PURE__*/ $d33c9c04e83a0fb3$export$aec2ce47c367b8c3.reduce(function(acc, placement) {
    return acc.concat([
        placement + "-" + $d33c9c04e83a0fb3$export$b3571188c770cc5a,
        placement + "-" + $d33c9c04e83a0fb3$export$bd5df0f255a350f8
    ]);
}, []);
var $d33c9c04e83a0fb3$export$803cd8101b6c182b = /*#__PURE__*/ [].concat($d33c9c04e83a0fb3$export$aec2ce47c367b8c3, [
    $d33c9c04e83a0fb3$export$dfb5619354ba860
]).reduce(function(acc, placement) {
    return acc.concat([
        placement,
        placement + "-" + $d33c9c04e83a0fb3$export$b3571188c770cc5a,
        placement + "-" + $d33c9c04e83a0fb3$export$bd5df0f255a350f8
    ]);
}, []); // modifiers that need to read the DOM
var $d33c9c04e83a0fb3$export$421679a7c3d56e = "beforeRead";
var $d33c9c04e83a0fb3$export$aafa59e2e03f2942 = "read";
var $d33c9c04e83a0fb3$export$6964f6c886723980 = "afterRead"; // pure-logic modifiers
var $d33c9c04e83a0fb3$export$c65e99957a05207c = "beforeMain";
var $d33c9c04e83a0fb3$export$f22da7240b7add18 = "main";
var $d33c9c04e83a0fb3$export$bab79516f2d662fe = "afterMain"; // modifier with the purpose to write to the DOM (or write into a framework state)
var $d33c9c04e83a0fb3$export$8d4d2d70e7d46032 = "beforeWrite";
var $d33c9c04e83a0fb3$export$68d8715fc104d294 = "write";
var $d33c9c04e83a0fb3$export$70a6e5159acce2e6 = "afterWrite";
var $d33c9c04e83a0fb3$export$d087d3878fdf71d5 = [
    $d33c9c04e83a0fb3$export$421679a7c3d56e,
    $d33c9c04e83a0fb3$export$aafa59e2e03f2942,
    $d33c9c04e83a0fb3$export$6964f6c886723980,
    $d33c9c04e83a0fb3$export$c65e99957a05207c,
    $d33c9c04e83a0fb3$export$f22da7240b7add18,
    $d33c9c04e83a0fb3$export$bab79516f2d662fe,
    $d33c9c04e83a0fb3$export$8d4d2d70e7d46032,
    $d33c9c04e83a0fb3$export$68d8715fc104d294,
    $d33c9c04e83a0fb3$export$70a6e5159acce2e6
];


var $15ca2fc00be1eccc$exports = {};

$parcel$export($15ca2fc00be1eccc$exports, "applyStyles", () => $241338cc8e5e4c60$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "arrow", () => $526b57b22d6d7642$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "computeStyles", () => $3b4ec12f7f30e6e9$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "eventListeners", () => $4b01034568a27423$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "flip", () => $b8ee520e10aec899$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "hide", () => $7b42606e08d4f5d8$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "offset", () => $cf1303c32e82a4d1$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "popperOffsets", () => $d877008fcb6b0622$export$2e2bcd8739ae039);
$parcel$export($15ca2fc00be1eccc$exports, "preventOverflow", () => $671842b37ab05fc3$export$2e2bcd8739ae039);
function $8aabccf3c156d7af$export$2e2bcd8739ae039(element) {
    return element ? (element.nodeName || "").toLowerCase() : null;
}


function $049c3efc6be0b3a5$export$2e2bcd8739ae039(node) {
    if (node == null) return window;
    if (node.toString() !== "[object Window]") {
        var ownerDocument = node.ownerDocument;
        return ownerDocument ? ownerDocument.defaultView || window : window;
    }
    return node;
}


function $eefe3e69c9d92426$export$45a5e7f76e0caa8d(node) {
    var OwnElement = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(node).Element;
    return node instanceof OwnElement || node instanceof Element;
}
function $eefe3e69c9d92426$export$1b3bfaa9684536aa(node) {
    var OwnElement = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(node).HTMLElement;
    return node instanceof OwnElement || node instanceof HTMLElement;
}
function $eefe3e69c9d92426$export$af51f0f06c0f328a(node) {
    // IE 11 has no ShadowRoot
    if (typeof ShadowRoot === "undefined") return false;
    var OwnElement = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(node).ShadowRoot;
    return node instanceof OwnElement || node instanceof ShadowRoot;
}


// and applies them to the HTMLElements such as popper and arrow
function $241338cc8e5e4c60$var$applyStyles(_ref) {
    var state = _ref.state;
    Object.keys(state.elements).forEach(function(name) {
        var style = state.styles[name] || {};
        var attributes = state.attributes[name] || {};
        var element = state.elements[name]; // arrow is optional + virtual elements
        if (!(0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(element) || !(0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(element)) return;
         // Flow doesn't support to extend this property, but it's the most
        // effective way to apply styles to an HTMLElement
        // $FlowFixMe[cannot-write]
        Object.assign(element.style, style);
        Object.keys(attributes).forEach(function(name) {
            var value = attributes[name];
            if (value === false) element.removeAttribute(name);
            else element.setAttribute(name, value === true ? "" : value);
        });
    });
}
function $241338cc8e5e4c60$var$effect(_ref2) {
    var state = _ref2.state;
    var initialStyles = {
        popper: {
            position: state.options.strategy,
            left: "0",
            top: "0",
            margin: "0"
        },
        arrow: {
            position: "absolute"
        },
        reference: {}
    };
    Object.assign(state.elements.popper.style, initialStyles.popper);
    state.styles = initialStyles;
    if (state.elements.arrow) Object.assign(state.elements.arrow.style, initialStyles.arrow);
    return function() {
        Object.keys(state.elements).forEach(function(name) {
            var element = state.elements[name];
            var attributes = state.attributes[name] || {};
            var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them
            var style = styleProperties.reduce(function(style, property) {
                style[property] = "";
                return style;
            }, {}); // arrow is optional + virtual elements
            if (!(0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(element) || !(0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(element)) return;
            Object.assign(element.style, style);
            Object.keys(attributes).forEach(function(attribute) {
                element.removeAttribute(attribute);
            });
        });
    };
} // eslint-disable-next-line import/no-unused-modules
var $241338cc8e5e4c60$export$2e2bcd8739ae039 = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: $241338cc8e5e4c60$var$applyStyles,
    effect: $241338cc8e5e4c60$var$effect,
    requires: [
        "computeStyles"
    ]
};



function $0f2f0199dbc7c8d3$export$2e2bcd8739ae039(placement) {
    return placement.split("-")[0];
}



var $0b86c7169394af9b$export$8960430cfd85939f = Math.max;
var $0b86c7169394af9b$export$96ec731ed4dcb222 = Math.min;
var $0b86c7169394af9b$export$2077e0241d6afd3c = Math.round;



function $864efb2543a576b4$export$2e2bcd8739ae039() {
    var uaData = navigator.userAgentData;
    if (uaData != null && uaData.brands && Array.isArray(uaData.brands)) return uaData.brands.map(function(item) {
        return item.brand + "/" + item.version;
    }).join(" ");
    return navigator.userAgent;
}


function $5e3c194656e13b60$export$2e2bcd8739ae039() {
    return !/^((?!chrome|android).)*safari/i.test((0, $864efb2543a576b4$export$2e2bcd8739ae039)());
}


function $6aa05d202a8346dd$export$2e2bcd8739ae039(element, includeScale, isFixedStrategy) {
    if (includeScale === void 0) includeScale = false;
    if (isFixedStrategy === void 0) isFixedStrategy = false;
    var clientRect = element.getBoundingClientRect();
    var scaleX = 1;
    var scaleY = 1;
    if (includeScale && (0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(element)) {
        scaleX = element.offsetWidth > 0 ? (0, $0b86c7169394af9b$export$2077e0241d6afd3c)(clientRect.width) / element.offsetWidth || 1 : 1;
        scaleY = element.offsetHeight > 0 ? (0, $0b86c7169394af9b$export$2077e0241d6afd3c)(clientRect.height) / element.offsetHeight || 1 : 1;
    }
    var _ref = (0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(element) ? (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(element) : window, visualViewport = _ref.visualViewport;
    var addVisualOffsets = !(0, $5e3c194656e13b60$export$2e2bcd8739ae039)() && isFixedStrategy;
    var x = (clientRect.left + (addVisualOffsets && visualViewport ? visualViewport.offsetLeft : 0)) / scaleX;
    var y = (clientRect.top + (addVisualOffsets && visualViewport ? visualViewport.offsetTop : 0)) / scaleY;
    var width = clientRect.width / scaleX;
    var height = clientRect.height / scaleY;
    return {
        width: width,
        height: height,
        top: y,
        right: x + width,
        bottom: y + height,
        left: x,
        x: x,
        y: y
    };
}


function $a0e1556813bf1a2c$export$2e2bcd8739ae039(element) {
    var clientRect = (0, $6aa05d202a8346dd$export$2e2bcd8739ae039)(element); // Use the clientRect sizes if it's not been transformed.
    // Fixes https://github.com/popperjs/popper-core/issues/1223
    var width = element.offsetWidth;
    var height = element.offsetHeight;
    if (Math.abs(clientRect.width - width) <= 1) width = clientRect.width;
    if (Math.abs(clientRect.height - height) <= 1) height = clientRect.height;
    return {
        x: element.offsetLeft,
        y: element.offsetTop,
        width: width,
        height: height
    };
}



function $9476e7dd16c7bf0e$export$2e2bcd8739ae039(parent, child) {
    var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method
    if (parent.contains(child)) return true;
    else if (rootNode && (0, $eefe3e69c9d92426$export$af51f0f06c0f328a)(rootNode)) {
        var next = child;
        do {
            if (next && parent.isSameNode(next)) return true;
             // $FlowFixMe[prop-missing]: need a better way to handle this...
            next = next.parentNode || next.host;
        }while (next);
    } // Give up, the result is false
    return false;
}





function $f4ee8b1ee9beae4b$export$2e2bcd8739ae039(element) {
    return (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(element).getComputedStyle(element);
}




function $c4e9e5155d65fb4c$export$2e2bcd8739ae039(element) {
    return [
        "table",
        "td",
        "th"
    ].indexOf((0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(element)) >= 0;
}




function $ab16fca49e3372f0$export$2e2bcd8739ae039(element) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return (((0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}



function $9f6a91c5ce483442$export$2e2bcd8739ae039(element) {
    if ((0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(element) === "html") return element;
    return(// $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ((0, $eefe3e69c9d92426$export$af51f0f06c0f328a)(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    (0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(element) // fallback
    );
}



function $35c8e64b545245be$var$getTrueOffsetParent(element) {
    if (!(0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(element) || // https://github.com/popperjs/popper-core/issues/837
    (0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(element).position === "fixed") return null;
    return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block
function $35c8e64b545245be$var$getContainingBlock(element) {
    var isFirefox = /firefox/i.test((0, $864efb2543a576b4$export$2e2bcd8739ae039)());
    var isIE = /Trident/i.test((0, $864efb2543a576b4$export$2e2bcd8739ae039)());
    if (isIE && (0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(element)) {
        // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
        var elementCss = (0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(element);
        if (elementCss.position === "fixed") return null;
    }
    var currentNode = (0, $9f6a91c5ce483442$export$2e2bcd8739ae039)(element);
    if ((0, $eefe3e69c9d92426$export$af51f0f06c0f328a)(currentNode)) currentNode = currentNode.host;
    while((0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(currentNode) && [
        "html",
        "body"
    ].indexOf((0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(currentNode)) < 0){
        var css = (0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(currentNode); // This is non-exhaustive but covers the most common CSS properties that
        // create a containing block.
        // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
        if (css.transform !== "none" || css.perspective !== "none" || css.contain === "paint" || [
            "transform",
            "perspective"
        ].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === "filter" || isFirefox && css.filter && css.filter !== "none") return currentNode;
        else currentNode = currentNode.parentNode;
    }
    return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
function $35c8e64b545245be$export$2e2bcd8739ae039(element) {
    var window = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(element);
    var offsetParent = $35c8e64b545245be$var$getTrueOffsetParent(element);
    while(offsetParent && (0, $c4e9e5155d65fb4c$export$2e2bcd8739ae039)(offsetParent) && (0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(offsetParent).position === "static")offsetParent = $35c8e64b545245be$var$getTrueOffsetParent(offsetParent);
    if (offsetParent && ((0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(offsetParent) === "html" || (0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(offsetParent) === "body" && (0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(offsetParent).position === "static")) return window;
    return offsetParent || $35c8e64b545245be$var$getContainingBlock(element) || window;
}


function $916b6c77dc8ec1f4$export$2e2bcd8739ae039(placement) {
    return [
        "top",
        "bottom"
    ].indexOf(placement) >= 0 ? "x" : "y";
}



function $cc41d4b4de34d820$export$f28d906d67a997f3(min, value, max) {
    return (0, $0b86c7169394af9b$export$8960430cfd85939f)(min, (0, $0b86c7169394af9b$export$96ec731ed4dcb222)(value, max));
}
function $cc41d4b4de34d820$export$86c8af6d3ef0b4a(min, value, max) {
    var v = $cc41d4b4de34d820$export$f28d906d67a997f3(min, value, max);
    return v > max ? max : v;
}


function $3280c556087f1c70$export$2e2bcd8739ae039() {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
    };
}


function $5cefcaae158c9eee$export$2e2bcd8739ae039(paddingObject) {
    return Object.assign({}, (0, $3280c556087f1c70$export$2e2bcd8739ae039)(), paddingObject);
}


function $c0af71f6bf33a8d9$export$2e2bcd8739ae039(value, keys) {
    return keys.reduce(function(hashMap, key) {
        hashMap[key] = value;
        return hashMap;
    }, {});
}



var $526b57b22d6d7642$var$toPaddingObject = function toPaddingObject(padding, state) {
    padding = typeof padding === "function" ? padding(Object.assign({}, state.rects, {
        placement: state.placement
    })) : padding;
    return (0, $5cefcaae158c9eee$export$2e2bcd8739ae039)(typeof padding !== "number" ? padding : (0, $c0af71f6bf33a8d9$export$2e2bcd8739ae039)(padding, (0, $d33c9c04e83a0fb3$export$aec2ce47c367b8c3)));
};
function $526b57b22d6d7642$var$arrow(_ref) {
    var _state$modifiersData$;
    var state = _ref.state, name = _ref.name, options = _ref.options;
    var arrowElement = state.elements.arrow;
    var popperOffsets = state.modifiersData.popperOffsets;
    var basePlacement = (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(state.placement);
    var axis = (0, $916b6c77dc8ec1f4$export$2e2bcd8739ae039)(basePlacement);
    var isVertical = [
        (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4),
        (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0;
    var len = isVertical ? "height" : "width";
    if (!arrowElement || !popperOffsets) return;
    var paddingObject = $526b57b22d6d7642$var$toPaddingObject(options.padding, state);
    var arrowRect = (0, $a0e1556813bf1a2c$export$2e2bcd8739ae039)(arrowElement);
    var minProp = axis === "y" ? (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d) : (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4);
    var maxProp = axis === "y" ? (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb) : (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2);
    var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
    var startDiff = popperOffsets[axis] - state.rects.reference[axis];
    var arrowOffsetParent = (0, $35c8e64b545245be$export$2e2bcd8739ae039)(arrowElement);
    var clientSize = arrowOffsetParent ? axis === "y" ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
    var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
    // outside of the popper bounds
    var min = paddingObject[minProp];
    var max = clientSize - arrowRect[len] - paddingObject[maxProp];
    var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
    var offset = (0, $cc41d4b4de34d820$export$f28d906d67a997f3)(min, center, max); // Prevents breaking syntax highlighting...
    var axisProp = axis;
    state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}
function $526b57b22d6d7642$var$effect(_ref2) {
    var state = _ref2.state, options = _ref2.options;
    var _options$element = options.element, arrowElement = _options$element === void 0 ? "[data-popper-arrow]" : _options$element;
    if (arrowElement == null) return;
     // CSS selector
    if (typeof arrowElement === "string") {
        arrowElement = state.elements.popper.querySelector(arrowElement);
        if (!arrowElement) return;
    }
    if (!(0, $9476e7dd16c7bf0e$export$2e2bcd8739ae039)(state.elements.popper, arrowElement)) return;
    state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules
var $526b57b22d6d7642$export$2e2bcd8739ae039 = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: $526b57b22d6d7642$var$arrow,
    effect: $526b57b22d6d7642$var$effect,
    requires: [
        "popperOffsets"
    ],
    requiresIfExists: [
        "preventOverflow"
    ]
};








function $55d412c966f7cc47$export$2e2bcd8739ae039(placement) {
    return placement.split("-")[1];
}



var $3b4ec12f7f30e6e9$var$unsetSides = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.
function $3b4ec12f7f30e6e9$var$roundOffsetsByDPR(_ref, win) {
    var x = _ref.x, y = _ref.y;
    var dpr = win.devicePixelRatio || 1;
    return {
        x: (0, $0b86c7169394af9b$export$2077e0241d6afd3c)(x * dpr) / dpr || 0,
        y: (0, $0b86c7169394af9b$export$2077e0241d6afd3c)(y * dpr) / dpr || 0
    };
}
function $3b4ec12f7f30e6e9$export$378fa78a8fea596f(_ref2) {
    var _Object$assign2;
    var popper = _ref2.popper, popperRect = _ref2.popperRect, placement = _ref2.placement, variation = _ref2.variation, offsets = _ref2.offsets, position = _ref2.position, gpuAcceleration = _ref2.gpuAcceleration, adaptive = _ref2.adaptive, roundOffsets = _ref2.roundOffsets, isFixed = _ref2.isFixed;
    var _offsets$x = offsets.x, x = _offsets$x === void 0 ? 0 : _offsets$x, _offsets$y = offsets.y, y = _offsets$y === void 0 ? 0 : _offsets$y;
    var _ref3 = typeof roundOffsets === "function" ? roundOffsets({
        x: x,
        y: y
    }) : {
        x: x,
        y: y
    };
    x = _ref3.x;
    y = _ref3.y;
    var hasX = offsets.hasOwnProperty("x");
    var hasY = offsets.hasOwnProperty("y");
    var sideX = (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4);
    var sideY = (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d);
    var win = window;
    if (adaptive) {
        var offsetParent = (0, $35c8e64b545245be$export$2e2bcd8739ae039)(popper);
        var heightProp = "clientHeight";
        var widthProp = "clientWidth";
        if (offsetParent === (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(popper)) {
            offsetParent = (0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(popper);
            if ((0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(offsetParent).position !== "static" && position === "absolute") {
                heightProp = "scrollHeight";
                widthProp = "scrollWidth";
            }
        } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it
        offsetParent;
        if (placement === (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d) || (placement === (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4) || placement === (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2)) && variation === (0, $d33c9c04e83a0fb3$export$bd5df0f255a350f8)) {
            sideY = (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb);
            var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : offsetParent[heightProp];
            y -= offsetY - popperRect.height;
            y *= gpuAcceleration ? 1 : -1;
        }
        if (placement === (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4) || (placement === (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d) || placement === (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb)) && variation === (0, $d33c9c04e83a0fb3$export$bd5df0f255a350f8)) {
            sideX = (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2);
            var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : offsetParent[widthProp];
            x -= offsetX - popperRect.width;
            x *= gpuAcceleration ? 1 : -1;
        }
    }
    var commonStyles = Object.assign({
        position: position
    }, adaptive && $3b4ec12f7f30e6e9$var$unsetSides);
    var _ref4 = roundOffsets === true ? $3b4ec12f7f30e6e9$var$roundOffsetsByDPR({
        x: x,
        y: y
    }, (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(popper)) : {
        x: x,
        y: y
    };
    x = _ref4.x;
    y = _ref4.y;
    if (gpuAcceleration) {
        var _Object$assign;
        return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? "0" : "", _Object$assign[sideX] = hasX ? "0" : "", _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
    }
    return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : "", _Object$assign2[sideX] = hasX ? x + "px" : "", _Object$assign2.transform = "", _Object$assign2));
}
function $3b4ec12f7f30e6e9$var$computeStyles(_ref5) {
    var state = _ref5.state, options = _ref5.options;
    var _options$gpuAccelerat = options.gpuAcceleration, gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat, _options$adaptive = options.adaptive, adaptive = _options$adaptive === void 0 ? true : _options$adaptive, _options$roundOffsets = options.roundOffsets, roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;
    var commonStyles = {
        placement: (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(state.placement),
        variation: (0, $55d412c966f7cc47$export$2e2bcd8739ae039)(state.placement),
        popper: state.elements.popper,
        popperRect: state.rects.popper,
        gpuAcceleration: gpuAcceleration,
        isFixed: state.options.strategy === "fixed"
    };
    if (state.modifiersData.popperOffsets != null) state.styles.popper = Object.assign({}, state.styles.popper, $3b4ec12f7f30e6e9$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.popperOffsets,
        position: state.options.strategy,
        adaptive: adaptive,
        roundOffsets: roundOffsets
    })));
    if (state.modifiersData.arrow != null) state.styles.arrow = Object.assign({}, state.styles.arrow, $3b4ec12f7f30e6e9$export$378fa78a8fea596f(Object.assign({}, commonStyles, {
        offsets: state.modifiersData.arrow,
        position: "absolute",
        adaptive: false,
        roundOffsets: roundOffsets
    })));
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-placement": state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $3b4ec12f7f30e6e9$export$2e2bcd8739ae039 = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: $3b4ec12f7f30e6e9$var$computeStyles,
    data: {}
};



var $4b01034568a27423$var$passive = {
    passive: true
};
function $4b01034568a27423$var$effect(_ref) {
    var state = _ref.state, instance = _ref.instance, options = _ref.options;
    var _options$scroll = options.scroll, scroll = _options$scroll === void 0 ? true : _options$scroll, _options$resize = options.resize, resize = _options$resize === void 0 ? true : _options$resize;
    var window = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(state.elements.popper);
    var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);
    if (scroll) scrollParents.forEach(function(scrollParent) {
        scrollParent.addEventListener("scroll", instance.update, $4b01034568a27423$var$passive);
    });
    if (resize) window.addEventListener("resize", instance.update, $4b01034568a27423$var$passive);
    return function() {
        if (scroll) scrollParents.forEach(function(scrollParent) {
            scrollParent.removeEventListener("scroll", instance.update, $4b01034568a27423$var$passive);
        });
        if (resize) window.removeEventListener("resize", instance.update, $4b01034568a27423$var$passive);
    };
} // eslint-disable-next-line import/no-unused-modules
var $4b01034568a27423$export$2e2bcd8739ae039 = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function fn() {},
    effect: $4b01034568a27423$var$effect,
    data: {}
};


var $756cdbd08d5f0d98$var$hash = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
};
function $756cdbd08d5f0d98$export$2e2bcd8739ae039(placement) {
    return placement.replace(/left|right|bottom|top/g, function(matched) {
        return $756cdbd08d5f0d98$var$hash[matched];
    });
}



var $a6ee70a801da2c6a$var$hash = {
    start: "end",
    end: "start"
};
function $a6ee70a801da2c6a$export$2e2bcd8739ae039(placement) {
    return placement.replace(/start|end/g, function(matched) {
        return $a6ee70a801da2c6a$var$hash[matched];
    });
}








function $1e1cb389447d4d11$export$2e2bcd8739ae039(node) {
    var win = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(node);
    var scrollLeft = win.pageXOffset;
    var scrollTop = win.pageYOffset;
    return {
        scrollLeft: scrollLeft,
        scrollTop: scrollTop
    };
}


function $8b982d9d5f0c9244$export$2e2bcd8739ae039(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    // Popper 1 is broken in this case and never had a bug report so let's assume
    // it's not an issue. I don't think anyone ever specifies width on <html>
    // anyway.
    // Browsers where the left scrollbar doesn't cause an issue report `0` for
    // this (e.g. Edge 2019, IE11, Safari)
    return (0, $6aa05d202a8346dd$export$2e2bcd8739ae039)((0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(element)).left + (0, $1e1cb389447d4d11$export$2e2bcd8739ae039)(element).scrollLeft;
}



function $3dd79488abf7ae95$export$2e2bcd8739ae039(element, strategy) {
    var win = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(element);
    var html = (0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(element);
    var visualViewport = win.visualViewport;
    var width = html.clientWidth;
    var height = html.clientHeight;
    var x = 0;
    var y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        var layoutViewport = (0, $5e3c194656e13b60$export$2e2bcd8739ae039)();
        if (layoutViewport || !layoutViewport && strategy === "fixed") {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    return {
        width: width,
        height: height,
        x: x + (0, $8b982d9d5f0c9244$export$2e2bcd8739ae039)(element),
        y: y
    };
}







function $c970046d6f611616$export$2e2bcd8739ae039(element) {
    var _element$ownerDocumen;
    var html = (0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(element);
    var winScroll = (0, $1e1cb389447d4d11$export$2e2bcd8739ae039)(element);
    var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
    var width = (0, $0b86c7169394af9b$export$8960430cfd85939f)(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
    var height = (0, $0b86c7169394af9b$export$8960430cfd85939f)(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
    var x = -winScroll.scrollLeft + (0, $8b982d9d5f0c9244$export$2e2bcd8739ae039)(element);
    var y = -winScroll.scrollTop;
    if ((0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(body || html).direction === "rtl") x += (0, $0b86c7169394af9b$export$8960430cfd85939f)(html.clientWidth, body ? body.clientWidth : 0) - width;
    return {
        width: width,
        height: height,
        x: x,
        y: y
    };
}




function $bae95fc42482ec2f$export$2e2bcd8739ae039(element) {
    // Firefox wants us to check `-x` and `-y` variations as well
    var _getComputedStyle = (0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(element), overflow = _getComputedStyle.overflow, overflowX = _getComputedStyle.overflowX, overflowY = _getComputedStyle.overflowY;
    return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}




function $7d5bc2db735bc210$export$2e2bcd8739ae039(node) {
    if ([
        "html",
        "body",
        "#document"
    ].indexOf((0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(node)) >= 0) // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
    if ((0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(node) && (0, $bae95fc42482ec2f$export$2e2bcd8739ae039)(node)) return node;
    return $7d5bc2db735bc210$export$2e2bcd8739ae039((0, $9f6a91c5ce483442$export$2e2bcd8739ae039)(node));
}





function $326acd9f31c3f47e$export$2e2bcd8739ae039(element, list) {
    var _element$ownerDocumen;
    if (list === void 0) list = [];
    var scrollParent = (0, $7d5bc2db735bc210$export$2e2bcd8739ae039)(element);
    var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
    var win = (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(scrollParent);
    var target = isBody ? [
        win
    ].concat(win.visualViewport || [], (0, $bae95fc42482ec2f$export$2e2bcd8739ae039)(scrollParent) ? scrollParent : []) : scrollParent;
    var updatedList = list.concat(target);
    return isBody ? updatedList : updatedList.concat($326acd9f31c3f47e$export$2e2bcd8739ae039((0, $9f6a91c5ce483442$export$2e2bcd8739ae039)(target)));
}










function $38353acea1d1bf22$export$2e2bcd8739ae039(rect) {
    return Object.assign({}, rect, {
        left: rect.x,
        top: rect.y,
        right: rect.x + rect.width,
        bottom: rect.y + rect.height
    });
}



function $945fbf2d461eeedf$var$getInnerBoundingClientRect(element, strategy) {
    var rect = (0, $6aa05d202a8346dd$export$2e2bcd8739ae039)(element, false, strategy === "fixed");
    rect.top = rect.top + element.clientTop;
    rect.left = rect.left + element.clientLeft;
    rect.bottom = rect.top + element.clientHeight;
    rect.right = rect.left + element.clientWidth;
    rect.width = element.clientWidth;
    rect.height = element.clientHeight;
    rect.x = rect.left;
    rect.y = rect.top;
    return rect;
}
function $945fbf2d461eeedf$var$getClientRectFromMixedType(element, clippingParent, strategy) {
    return clippingParent === (0, $d33c9c04e83a0fb3$export$d7b7311ec04a3e8f) ? (0, $38353acea1d1bf22$export$2e2bcd8739ae039)((0, $3dd79488abf7ae95$export$2e2bcd8739ae039)(element, strategy)) : (0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(clippingParent) ? $945fbf2d461eeedf$var$getInnerBoundingClientRect(clippingParent, strategy) : (0, $38353acea1d1bf22$export$2e2bcd8739ae039)((0, $c970046d6f611616$export$2e2bcd8739ae039)((0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`
function $945fbf2d461eeedf$var$getClippingParents(element) {
    var clippingParents = (0, $326acd9f31c3f47e$export$2e2bcd8739ae039)((0, $9f6a91c5ce483442$export$2e2bcd8739ae039)(element));
    var canEscapeClipping = [
        "absolute",
        "fixed"
    ].indexOf((0, $f4ee8b1ee9beae4b$export$2e2bcd8739ae039)(element).position) >= 0;
    var clipperElement = canEscapeClipping && (0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(element) ? (0, $35c8e64b545245be$export$2e2bcd8739ae039)(element) : element;
    if (!(0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(clipperElement)) return [];
     // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414
    return clippingParents.filter(function(clippingParent) {
        return (0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(clippingParent) && (0, $9476e7dd16c7bf0e$export$2e2bcd8739ae039)(clippingParent, clipperElement) && (0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(clippingParent) !== "body";
    });
} // Gets the maximum area that the element is visible in due to any number of
function $945fbf2d461eeedf$export$2e2bcd8739ae039(element, boundary, rootBoundary, strategy) {
    var mainClippingParents = boundary === "clippingParents" ? $945fbf2d461eeedf$var$getClippingParents(element) : [].concat(boundary);
    var clippingParents = [].concat(mainClippingParents, [
        rootBoundary
    ]);
    var firstClippingParent = clippingParents[0];
    var clippingRect = clippingParents.reduce(function(accRect, clippingParent) {
        var rect = $945fbf2d461eeedf$var$getClientRectFromMixedType(element, clippingParent, strategy);
        accRect.top = (0, $0b86c7169394af9b$export$8960430cfd85939f)(rect.top, accRect.top);
        accRect.right = (0, $0b86c7169394af9b$export$96ec731ed4dcb222)(rect.right, accRect.right);
        accRect.bottom = (0, $0b86c7169394af9b$export$96ec731ed4dcb222)(rect.bottom, accRect.bottom);
        accRect.left = (0, $0b86c7169394af9b$export$8960430cfd85939f)(rect.left, accRect.left);
        return accRect;
    }, $945fbf2d461eeedf$var$getClientRectFromMixedType(element, firstClippingParent, strategy));
    clippingRect.width = clippingRect.right - clippingRect.left;
    clippingRect.height = clippingRect.bottom - clippingRect.top;
    clippingRect.x = clippingRect.left;
    clippingRect.y = clippingRect.top;
    return clippingRect;
}








function $87227bb56ca09552$export$2e2bcd8739ae039(_ref) {
    var reference = _ref.reference, element = _ref.element, placement = _ref.placement;
    var basePlacement = placement ? (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(placement) : null;
    var variation = placement ? (0, $55d412c966f7cc47$export$2e2bcd8739ae039)(placement) : null;
    var commonX = reference.x + reference.width / 2 - element.width / 2;
    var commonY = reference.y + reference.height / 2 - element.height / 2;
    var offsets;
    switch(basePlacement){
        case 0, $d33c9c04e83a0fb3$export$1e95b668f3b82d:
            offsets = {
                x: commonX,
                y: reference.y - element.height
            };
            break;
        case 0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb:
            offsets = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 0, $d33c9c04e83a0fb3$export$79ffe56a765070d2:
            offsets = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4:
            offsets = {
                x: reference.x - element.width,
                y: commonY
            };
            break;
        default:
            offsets = {
                x: reference.x,
                y: reference.y
            };
    }
    var mainAxis = basePlacement ? (0, $916b6c77dc8ec1f4$export$2e2bcd8739ae039)(basePlacement) : null;
    if (mainAxis != null) {
        var len = mainAxis === "y" ? "height" : "width";
        switch(variation){
            case 0, $d33c9c04e83a0fb3$export$b3571188c770cc5a:
                offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
                break;
            case 0, $d33c9c04e83a0fb3$export$bd5df0f255a350f8:
                offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
                break;
            default:
        }
    }
    return offsets;
}







function $80d5553059a81f89$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, _options$placement = _options.placement, placement = _options$placement === void 0 ? state.placement : _options$placement, _options$strategy = _options.strategy, strategy = _options$strategy === void 0 ? state.strategy : _options$strategy, _options$boundary = _options.boundary, boundary = _options$boundary === void 0 ? (0, $d33c9c04e83a0fb3$export$390fd549c5303b4d) : _options$boundary, _options$rootBoundary = _options.rootBoundary, rootBoundary = _options$rootBoundary === void 0 ? (0, $d33c9c04e83a0fb3$export$d7b7311ec04a3e8f) : _options$rootBoundary, _options$elementConte = _options.elementContext, elementContext = _options$elementConte === void 0 ? (0, $d33c9c04e83a0fb3$export$ae5ab1c730825774) : _options$elementConte, _options$altBoundary = _options.altBoundary, altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary, _options$padding = _options.padding, padding = _options$padding === void 0 ? 0 : _options$padding;
    var paddingObject = (0, $5cefcaae158c9eee$export$2e2bcd8739ae039)(typeof padding !== "number" ? padding : (0, $c0af71f6bf33a8d9$export$2e2bcd8739ae039)(padding, (0, $d33c9c04e83a0fb3$export$aec2ce47c367b8c3)));
    var altContext = elementContext === (0, $d33c9c04e83a0fb3$export$ae5ab1c730825774) ? (0, $d33c9c04e83a0fb3$export$ca50aac9f3ba507f) : (0, $d33c9c04e83a0fb3$export$ae5ab1c730825774);
    var popperRect = state.rects.popper;
    var element = state.elements[altBoundary ? altContext : elementContext];
    var clippingClientRect = (0, $945fbf2d461eeedf$export$2e2bcd8739ae039)((0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(element) ? element : element.contextElement || (0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(state.elements.popper), boundary, rootBoundary, strategy);
    var referenceClientRect = (0, $6aa05d202a8346dd$export$2e2bcd8739ae039)(state.elements.reference);
    var popperOffsets = (0, $87227bb56ca09552$export$2e2bcd8739ae039)({
        reference: referenceClientRect,
        element: popperRect,
        strategy: "absolute",
        placement: placement
    });
    var popperClientRect = (0, $38353acea1d1bf22$export$2e2bcd8739ae039)(Object.assign({}, popperRect, popperOffsets));
    var elementClientRect = elementContext === (0, $d33c9c04e83a0fb3$export$ae5ab1c730825774) ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
    // 0 or negative = within the clipping rect
    var overflowOffsets = {
        top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
        bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
        left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
        right: elementClientRect.right - clippingClientRect.right + paddingObject.right
    };
    var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element
    if (elementContext === (0, $d33c9c04e83a0fb3$export$ae5ab1c730825774) && offsetData) {
        var offset = offsetData[placement];
        Object.keys(overflowOffsets).forEach(function(key) {
            var multiply = [
                (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2),
                (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? 1 : -1;
            var axis = [
                (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d),
                (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb)
            ].indexOf(key) >= 0 ? "y" : "x";
            overflowOffsets[key] += offset[axis] * multiply;
        });
    }
    return overflowOffsets;
}






function $129e89498f274122$export$2e2bcd8739ae039(state, options) {
    if (options === void 0) options = {};
    var _options = options, placement = _options.placement, boundary = _options.boundary, rootBoundary = _options.rootBoundary, padding = _options.padding, flipVariations = _options.flipVariations, _options$allowedAutoP = _options.allowedAutoPlacements, allowedAutoPlacements = _options$allowedAutoP === void 0 ? (0, $d33c9c04e83a0fb3$export$803cd8101b6c182b) : _options$allowedAutoP;
    var variation = (0, $55d412c966f7cc47$export$2e2bcd8739ae039)(placement);
    var placements = variation ? flipVariations ? (0, $d33c9c04e83a0fb3$export$368f9a87e87fa4e1) : (0, $d33c9c04e83a0fb3$export$368f9a87e87fa4e1).filter(function(placement) {
        return (0, $55d412c966f7cc47$export$2e2bcd8739ae039)(placement) === variation;
    }) : (0, $d33c9c04e83a0fb3$export$aec2ce47c367b8c3);
    var allowedPlacements = placements.filter(function(placement) {
        return allowedAutoPlacements.indexOf(placement) >= 0;
    });
    if (allowedPlacements.length === 0) allowedPlacements = placements;
     // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...
    var overflows = allowedPlacements.reduce(function(acc, placement) {
        acc[placement] = (0, $80d5553059a81f89$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding
        })[(0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(placement)];
        return acc;
    }, {});
    return Object.keys(overflows).sort(function(a, b) {
        return overflows[a] - overflows[b];
    });
}




function $b8ee520e10aec899$var$getExpandedFallbackPlacements(placement) {
    if ((0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(placement) === (0, $d33c9c04e83a0fb3$export$dfb5619354ba860)) return [];
    var oppositePlacement = (0, $756cdbd08d5f0d98$export$2e2bcd8739ae039)(placement);
    return [
        (0, $a6ee70a801da2c6a$export$2e2bcd8739ae039)(placement),
        oppositePlacement,
        (0, $a6ee70a801da2c6a$export$2e2bcd8739ae039)(oppositePlacement)
    ];
}
function $b8ee520e10aec899$var$flip(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    if (state.modifiersData[name]._skip) return;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis, specifiedFallbackPlacements = options.fallbackPlacements, padding = options.padding, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, _options$flipVariatio = options.flipVariations, flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio, allowedAutoPlacements = options.allowedAutoPlacements;
    var preferredPlacement = state.options.placement;
    var basePlacement = (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(preferredPlacement);
    var isBasePlacement = basePlacement === preferredPlacement;
    var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [
        (0, $756cdbd08d5f0d98$export$2e2bcd8739ae039)(preferredPlacement)
    ] : $b8ee520e10aec899$var$getExpandedFallbackPlacements(preferredPlacement));
    var placements = [
        preferredPlacement
    ].concat(fallbackPlacements).reduce(function(acc, placement) {
        return acc.concat((0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(placement) === (0, $d33c9c04e83a0fb3$export$dfb5619354ba860) ? (0, $129e89498f274122$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            padding: padding,
            flipVariations: flipVariations,
            allowedAutoPlacements: allowedAutoPlacements
        }) : placement);
    }, []);
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var checksMap = new Map();
    var makeFallbackChecks = true;
    var firstFittingPlacement = placements[0];
    for(var i = 0; i < placements.length; i++){
        var placement = placements[i];
        var _basePlacement = (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(placement);
        var isStartVariation = (0, $55d412c966f7cc47$export$2e2bcd8739ae039)(placement) === (0, $d33c9c04e83a0fb3$export$b3571188c770cc5a);
        var isVertical = [
            (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d),
            (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb)
        ].indexOf(_basePlacement) >= 0;
        var len = isVertical ? "width" : "height";
        var overflow = (0, $80d5553059a81f89$export$2e2bcd8739ae039)(state, {
            placement: placement,
            boundary: boundary,
            rootBoundary: rootBoundary,
            altBoundary: altBoundary,
            padding: padding
        });
        var mainVariationSide = isVertical ? isStartVariation ? (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2) : (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4) : isStartVariation ? (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb) : (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d);
        if (referenceRect[len] > popperRect[len]) mainVariationSide = (0, $756cdbd08d5f0d98$export$2e2bcd8739ae039)(mainVariationSide);
        var altVariationSide = (0, $756cdbd08d5f0d98$export$2e2bcd8739ae039)(mainVariationSide);
        var checks = [];
        if (checkMainAxis) checks.push(overflow[_basePlacement] <= 0);
        if (checkAltAxis) checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
        if (checks.every(function(check) {
            return check;
        })) {
            firstFittingPlacement = placement;
            makeFallbackChecks = false;
            break;
        }
        checksMap.set(placement, checks);
    }
    if (makeFallbackChecks) {
        // `2` may be desired in some cases – research later
        var numberOfChecks = flipVariations ? 3 : 1;
        var _loop = function _loop(_i) {
            var fittingPlacement = placements.find(function(placement) {
                var checks = checksMap.get(placement);
                if (checks) return checks.slice(0, _i).every(function(check) {
                    return check;
                });
            });
            if (fittingPlacement) {
                firstFittingPlacement = fittingPlacement;
                return "break";
            }
        };
        for(var _i = numberOfChecks; _i > 0; _i--){
            var _ret = _loop(_i);
            if (_ret === "break") break;
        }
    }
    if (state.placement !== firstFittingPlacement) {
        state.modifiersData[name]._skip = true;
        state.placement = firstFittingPlacement;
        state.reset = true;
    }
} // eslint-disable-next-line import/no-unused-modules
var $b8ee520e10aec899$export$2e2bcd8739ae039 = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: $b8ee520e10aec899$var$flip,
    requiresIfExists: [
        "offset"
    ],
    data: {
        _skip: false
    }
};




function $7b42606e08d4f5d8$var$getSideOffsets(overflow, rect, preventedOffsets) {
    if (preventedOffsets === void 0) preventedOffsets = {
        x: 0,
        y: 0
    };
    return {
        top: overflow.top - rect.height - preventedOffsets.y,
        right: overflow.right - rect.width + preventedOffsets.x,
        bottom: overflow.bottom - rect.height + preventedOffsets.y,
        left: overflow.left - rect.width - preventedOffsets.x
    };
}
function $7b42606e08d4f5d8$var$isAnySideFullyClipped(overflow) {
    return [
        (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d),
        (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2),
        (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb),
        (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4)
    ].some(function(side) {
        return overflow[side] >= 0;
    });
}
function $7b42606e08d4f5d8$var$hide(_ref) {
    var state = _ref.state, name = _ref.name;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var preventedOffsets = state.modifiersData.preventOverflow;
    var referenceOverflow = (0, $80d5553059a81f89$export$2e2bcd8739ae039)(state, {
        elementContext: "reference"
    });
    var popperAltOverflow = (0, $80d5553059a81f89$export$2e2bcd8739ae039)(state, {
        altBoundary: true
    });
    var referenceClippingOffsets = $7b42606e08d4f5d8$var$getSideOffsets(referenceOverflow, referenceRect);
    var popperEscapeOffsets = $7b42606e08d4f5d8$var$getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
    var isReferenceHidden = $7b42606e08d4f5d8$var$isAnySideFullyClipped(referenceClippingOffsets);
    var hasPopperEscaped = $7b42606e08d4f5d8$var$isAnySideFullyClipped(popperEscapeOffsets);
    state.modifiersData[name] = {
        referenceClippingOffsets: referenceClippingOffsets,
        popperEscapeOffsets: popperEscapeOffsets,
        isReferenceHidden: isReferenceHidden,
        hasPopperEscaped: hasPopperEscaped
    };
    state.attributes.popper = Object.assign({}, state.attributes.popper, {
        "data-popper-reference-hidden": isReferenceHidden,
        "data-popper-escaped": hasPopperEscaped
    });
} // eslint-disable-next-line import/no-unused-modules
var $7b42606e08d4f5d8$export$2e2bcd8739ae039 = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: [
        "preventOverflow"
    ],
    fn: $7b42606e08d4f5d8$var$hide
};




function $cf1303c32e82a4d1$export$7fa02d8595b015ed(placement, rects, offset) {
    var basePlacement = (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(placement);
    var invertDistance = [
        (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4),
        (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d)
    ].indexOf(basePlacement) >= 0 ? -1 : 1;
    var _ref = typeof offset === "function" ? offset(Object.assign({}, rects, {
        placement: placement
    })) : offset, skidding = _ref[0], distance = _ref[1];
    skidding = skidding || 0;
    distance = (distance || 0) * invertDistance;
    return [
        (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4),
        (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2)
    ].indexOf(basePlacement) >= 0 ? {
        x: distance,
        y: skidding
    } : {
        x: skidding,
        y: distance
    };
}
function $cf1303c32e82a4d1$var$offset(_ref2) {
    var state = _ref2.state, options = _ref2.options, name = _ref2.name;
    var _options$offset = options.offset, offset = _options$offset === void 0 ? [
        0,
        0
    ] : _options$offset;
    var data = (0, $d33c9c04e83a0fb3$export$803cd8101b6c182b).reduce(function(acc, placement) {
        acc[placement] = $cf1303c32e82a4d1$export$7fa02d8595b015ed(placement, state.rects, offset);
        return acc;
    }, {});
    var _data$state$placement = data[state.placement], x = _data$state$placement.x, y = _data$state$placement.y;
    if (state.modifiersData.popperOffsets != null) {
        state.modifiersData.popperOffsets.x += x;
        state.modifiersData.popperOffsets.y += y;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $cf1303c32e82a4d1$export$2e2bcd8739ae039 = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: [
        "popperOffsets"
    ],
    fn: $cf1303c32e82a4d1$var$offset
};



function $d877008fcb6b0622$var$popperOffsets(_ref) {
    var state = _ref.state, name = _ref.name;
    // Offsets are the actual position the popper needs to have to be
    // properly positioned near its reference element
    // This is the most basic placement, and will be adjusted by
    // the modifiers in the next step
    state.modifiersData[name] = (0, $87227bb56ca09552$export$2e2bcd8739ae039)({
        reference: state.rects.reference,
        element: state.rects.popper,
        strategy: "absolute",
        placement: state.placement
    });
} // eslint-disable-next-line import/no-unused-modules
var $d877008fcb6b0622$export$2e2bcd8739ae039 = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: $d877008fcb6b0622$var$popperOffsets,
    data: {}
};





function $25af114da5701d6f$export$2e2bcd8739ae039(axis) {
    return axis === "x" ? "y" : "x";
}









function $671842b37ab05fc3$var$preventOverflow(_ref) {
    var state = _ref.state, options = _ref.options, name = _ref.name;
    var _options$mainAxis = options.mainAxis, checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis, _options$altAxis = options.altAxis, checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis, boundary = options.boundary, rootBoundary = options.rootBoundary, altBoundary = options.altBoundary, padding = options.padding, _options$tether = options.tether, tether = _options$tether === void 0 ? true : _options$tether, _options$tetherOffset = options.tetherOffset, tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
    var overflow = (0, $80d5553059a81f89$export$2e2bcd8739ae039)(state, {
        boundary: boundary,
        rootBoundary: rootBoundary,
        padding: padding,
        altBoundary: altBoundary
    });
    var basePlacement = (0, $0f2f0199dbc7c8d3$export$2e2bcd8739ae039)(state.placement);
    var variation = (0, $55d412c966f7cc47$export$2e2bcd8739ae039)(state.placement);
    var isBasePlacement = !variation;
    var mainAxis = (0, $916b6c77dc8ec1f4$export$2e2bcd8739ae039)(basePlacement);
    var altAxis = (0, $25af114da5701d6f$export$2e2bcd8739ae039)(mainAxis);
    var popperOffsets = state.modifiersData.popperOffsets;
    var referenceRect = state.rects.reference;
    var popperRect = state.rects.popper;
    var tetherOffsetValue = typeof tetherOffset === "function" ? tetherOffset(Object.assign({}, state.rects, {
        placement: state.placement
    })) : tetherOffset;
    var normalizedTetherOffsetValue = typeof tetherOffsetValue === "number" ? {
        mainAxis: tetherOffsetValue,
        altAxis: tetherOffsetValue
    } : Object.assign({
        mainAxis: 0,
        altAxis: 0
    }, tetherOffsetValue);
    var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
    var data = {
        x: 0,
        y: 0
    };
    if (!popperOffsets) return;
    if (checkMainAxis) {
        var _offsetModifierState$;
        var mainSide = mainAxis === "y" ? (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d) : (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4);
        var altSide = mainAxis === "y" ? (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb) : (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2);
        var len = mainAxis === "y" ? "height" : "width";
        var offset = popperOffsets[mainAxis];
        var min = offset + overflow[mainSide];
        var max = offset - overflow[altSide];
        var additive = tether ? -popperRect[len] / 2 : 0;
        var minLen = variation === (0, $d33c9c04e83a0fb3$export$b3571188c770cc5a) ? referenceRect[len] : popperRect[len];
        var maxLen = variation === (0, $d33c9c04e83a0fb3$export$b3571188c770cc5a) ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
        // outside the reference bounds
        var arrowElement = state.elements.arrow;
        var arrowRect = tether && arrowElement ? (0, $a0e1556813bf1a2c$export$2e2bcd8739ae039)(arrowElement) : {
            width: 0,
            height: 0
        };
        var arrowPaddingObject = state.modifiersData["arrow#persistent"] ? state.modifiersData["arrow#persistent"].padding : (0, $3280c556087f1c70$export$2e2bcd8739ae039)();
        var arrowPaddingMin = arrowPaddingObject[mainSide];
        var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
        // to include its full size in the calculation. If the reference is small
        // and near the edge of a boundary, the popper can overflow even if the
        // reference is not overflowing as well (e.g. virtual elements with no
        // width or height)
        var arrowLen = (0, $cc41d4b4de34d820$export$f28d906d67a997f3)(0, referenceRect[len], arrowRect[len]);
        var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
        var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
        var arrowOffsetParent = state.elements.arrow && (0, $35c8e64b545245be$export$2e2bcd8739ae039)(state.elements.arrow);
        var clientOffset = arrowOffsetParent ? mainAxis === "y" ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
        var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
        var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
        var tetherMax = offset + maxOffset - offsetModifierValue;
        var preventedOffset = (0, $cc41d4b4de34d820$export$f28d906d67a997f3)(tether ? (0, $0b86c7169394af9b$export$96ec731ed4dcb222)(min, tetherMin) : min, offset, tether ? (0, $0b86c7169394af9b$export$8960430cfd85939f)(max, tetherMax) : max);
        popperOffsets[mainAxis] = preventedOffset;
        data[mainAxis] = preventedOffset - offset;
    }
    if (checkAltAxis) {
        var _offsetModifierState$2;
        var _mainSide = mainAxis === "x" ? (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d) : (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4);
        var _altSide = mainAxis === "x" ? (0, $d33c9c04e83a0fb3$export$40e543e69a8b3fbb) : (0, $d33c9c04e83a0fb3$export$79ffe56a765070d2);
        var _offset = popperOffsets[altAxis];
        var _len = altAxis === "y" ? "height" : "width";
        var _min = _offset + overflow[_mainSide];
        var _max = _offset - overflow[_altSide];
        var isOriginSide = [
            (0, $d33c9c04e83a0fb3$export$1e95b668f3b82d),
            (0, $d33c9c04e83a0fb3$export$eabcd2c8791e7bf4)
        ].indexOf(basePlacement) !== -1;
        var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;
        var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;
        var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;
        var _preventedOffset = tether && isOriginSide ? (0, $cc41d4b4de34d820$export$86c8af6d3ef0b4a)(_tetherMin, _offset, _tetherMax) : (0, $cc41d4b4de34d820$export$f28d906d67a997f3)(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);
        popperOffsets[altAxis] = _preventedOffset;
        data[altAxis] = _preventedOffset - _offset;
    }
    state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules
var $671842b37ab05fc3$export$2e2bcd8739ae039 = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: $671842b37ab05fc3$var$preventOverflow,
    requiresIfExists: [
        "offset"
    ]
};








function $4c3b9b6a38678740$export$2e2bcd8739ae039(element) {
    return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
    };
}


function $1324f65f545676de$export$2e2bcd8739ae039(node) {
    if (node === (0, $049c3efc6be0b3a5$export$2e2bcd8739ae039)(node) || !(0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(node)) return (0, $1e1cb389447d4d11$export$2e2bcd8739ae039)(node);
    else return (0, $4c3b9b6a38678740$export$2e2bcd8739ae039)(node);
}








function $5dc83d2c5e53f266$var$isElementScaled(element) {
    var rect = element.getBoundingClientRect();
    var scaleX = (0, $0b86c7169394af9b$export$2077e0241d6afd3c)(rect.width) / element.offsetWidth || 1;
    var scaleY = (0, $0b86c7169394af9b$export$2077e0241d6afd3c)(rect.height) / element.offsetHeight || 1;
    return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
function $5dc83d2c5e53f266$export$2e2bcd8739ae039(elementOrVirtualElement, offsetParent, isFixed) {
    if (isFixed === void 0) isFixed = false;
    var isOffsetParentAnElement = (0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(offsetParent);
    var offsetParentIsScaled = (0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(offsetParent) && $5dc83d2c5e53f266$var$isElementScaled(offsetParent);
    var documentElement = (0, $ab16fca49e3372f0$export$2e2bcd8739ae039)(offsetParent);
    var rect = (0, $6aa05d202a8346dd$export$2e2bcd8739ae039)(elementOrVirtualElement, offsetParentIsScaled, isFixed);
    var scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    var offsets = {
        x: 0,
        y: 0
    };
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, $8aabccf3c156d7af$export$2e2bcd8739ae039)(offsetParent) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
        (0, $bae95fc42482ec2f$export$2e2bcd8739ae039)(documentElement)) scroll = (0, $1324f65f545676de$export$2e2bcd8739ae039)(offsetParent);
        if ((0, $eefe3e69c9d92426$export$1b3bfaa9684536aa)(offsetParent)) {
            offsets = (0, $6aa05d202a8346dd$export$2e2bcd8739ae039)(offsetParent, true);
            offsets.x += offsetParent.clientLeft;
            offsets.y += offsetParent.clientTop;
        } else if (documentElement) offsets.x = (0, $8b982d9d5f0c9244$export$2e2bcd8739ae039)(documentElement);
    }
    return {
        x: rect.left + scroll.scrollLeft - offsets.x,
        y: rect.top + scroll.scrollTop - offsets.y,
        width: rect.width,
        height: rect.height
    };
}






function $281a952d89382bf1$var$order(modifiers) {
    var map = new Map();
    var visited = new Set();
    var result = [];
    modifiers.forEach(function(modifier) {
        map.set(modifier.name, modifier);
    }); // On visiting object, check for its dependencies and visit them recursively
    function sort(modifier) {
        visited.add(modifier.name);
        var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
        requires.forEach(function(dep) {
            if (!visited.has(dep)) {
                var depModifier = map.get(dep);
                if (depModifier) sort(depModifier);
            }
        });
        result.push(modifier);
    }
    modifiers.forEach(function(modifier) {
        if (!visited.has(modifier.name)) // check for visited object
        sort(modifier);
    });
    return result;
}
function $281a952d89382bf1$export$2e2bcd8739ae039(modifiers) {
    // order based on dependencies
    var orderedModifiers = $281a952d89382bf1$var$order(modifiers); // order based on phase
    return (0, $d33c9c04e83a0fb3$export$d087d3878fdf71d5).reduce(function(acc, phase) {
        return acc.concat(orderedModifiers.filter(function(modifier) {
            return modifier.phase === phase;
        }));
    }, []);
}


function $99163a374b1eaf50$export$2e2bcd8739ae039(fn) {
    var pending;
    return function() {
        if (!pending) pending = new Promise(function(resolve) {
            Promise.resolve().then(function() {
                pending = undefined;
                resolve(fn());
            });
        });
        return pending;
    };
}


function $e5ceb015ff30ccab$export$2e2bcd8739ae039(modifiers) {
    var merged = modifiers.reduce(function(merged, current) {
        var existing = merged[current.name];
        merged[current.name] = existing ? Object.assign({}, existing, current, {
            options: Object.assign({}, existing.options, current.options),
            data: Object.assign({}, existing.data, current.data)
        }) : current;
        return merged;
    }, {}); // IE11 does not support Object.values
    return Object.keys(merged).map(function(key) {
        return merged[key];
    });
}




var $df51816adb601187$var$DEFAULT_OPTIONS = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
};
function $df51816adb601187$var$areValidElements() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
    return !args.some(function(element) {
        return !(element && typeof element.getBoundingClientRect === "function");
    });
}
function $df51816adb601187$export$ed5e13716264f202(generatorOptions) {
    if (generatorOptions === void 0) generatorOptions = {};
    var _generatorOptions = generatorOptions, _generatorOptions$def = _generatorOptions.defaultModifiers, defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def, _generatorOptions$def2 = _generatorOptions.defaultOptions, defaultOptions = _generatorOptions$def2 === void 0 ? $df51816adb601187$var$DEFAULT_OPTIONS : _generatorOptions$def2;
    return function createPopper(reference, popper, options) {
        if (options === void 0) options = defaultOptions;
        var state = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, $df51816adb601187$var$DEFAULT_OPTIONS, defaultOptions),
            modifiersData: {},
            elements: {
                reference: reference,
                popper: popper
            },
            attributes: {},
            styles: {}
        };
        var effectCleanupFns = [];
        var isDestroyed = false;
        var instance = {
            state: state,
            setOptions: function setOptions(setOptionsAction) {
                var options = typeof setOptionsAction === "function" ? setOptionsAction(state.options) : setOptionsAction;
                cleanupModifierEffects();
                state.options = Object.assign({}, defaultOptions, state.options, options);
                state.scrollParents = {
                    reference: (0, $eefe3e69c9d92426$export$45a5e7f76e0caa8d)(reference) ? (0, $326acd9f31c3f47e$export$2e2bcd8739ae039)(reference) : reference.contextElement ? (0, $326acd9f31c3f47e$export$2e2bcd8739ae039)(reference.contextElement) : [],
                    popper: (0, $326acd9f31c3f47e$export$2e2bcd8739ae039)(popper)
                }; // Orders the modifiers based on their dependencies and `phase`
                // properties
                var orderedModifiers = (0, $281a952d89382bf1$export$2e2bcd8739ae039)((0, $e5ceb015ff30ccab$export$2e2bcd8739ae039)([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers
                state.orderedModifiers = orderedModifiers.filter(function(m) {
                    return m.enabled;
                });
                runModifierEffects();
                return instance.update();
            },
            // Sync update – it will always be executed, even if not necessary. This
            // is useful for low frequency updates where sync behavior simplifies the
            // logic.
            // For high frequency updates (e.g. `resize` and `scroll` events), always
            // prefer the async Popper#update method
            forceUpdate: function forceUpdate() {
                if (isDestroyed) return;
                var _state$elements = state.elements, reference = _state$elements.reference, popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
                // anymore
                if (!$df51816adb601187$var$areValidElements(reference, popper)) return;
                 // Store the reference and popper rects to be read by modifiers
                state.rects = {
                    reference: (0, $5dc83d2c5e53f266$export$2e2bcd8739ae039)(reference, (0, $35c8e64b545245be$export$2e2bcd8739ae039)(popper), state.options.strategy === "fixed"),
                    popper: (0, $a0e1556813bf1a2c$export$2e2bcd8739ae039)(popper)
                }; // Modifiers have the ability to reset the current update cycle. The
                // most common use case for this is the `flip` modifier changing the
                // placement, which then needs to re-run all the modifiers, because the
                // logic was previously ran for the previous placement and is therefore
                // stale/incorrect
                state.reset = false;
                state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
                // is filled with the initial data specified by the modifier. This means
                // it doesn't persist and is fresh on each update.
                // To ensure persistent data, use `${name}#persistent`
                state.orderedModifiers.forEach(function(modifier) {
                    return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
                });
                for(var index = 0; index < state.orderedModifiers.length; index++){
                    if (state.reset === true) {
                        state.reset = false;
                        index = -1;
                        continue;
                    }
                    var _state$orderedModifie = state.orderedModifiers[index], fn = _state$orderedModifie.fn, _state$orderedModifie2 = _state$orderedModifie.options, _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2, name = _state$orderedModifie.name;
                    if (typeof fn === "function") state = fn({
                        state: state,
                        options: _options,
                        name: name,
                        instance: instance
                    }) || state;
                }
            },
            // Async and optimistically optimized update – it will not be executed if
            // not necessary (debounced to run at most once-per-tick)
            update: (0, $99163a374b1eaf50$export$2e2bcd8739ae039)(function() {
                return new Promise(function(resolve) {
                    instance.forceUpdate();
                    resolve(state);
                });
            }),
            destroy: function destroy() {
                cleanupModifierEffects();
                isDestroyed = true;
            }
        };
        if (!$df51816adb601187$var$areValidElements(reference, popper)) return instance;
        instance.setOptions(options).then(function(state) {
            if (!isDestroyed && options.onFirstUpdate) options.onFirstUpdate(state);
        }); // Modifiers have the ability to execute arbitrary code before the first
        // update cycle runs. They will be executed in the same order as the update
        // cycle. This is useful when a modifier adds some persistent data that
        // other modifiers need to use, but the modifier is run after the dependent
        // one.
        function runModifierEffects() {
            state.orderedModifiers.forEach(function(_ref) {
                var name = _ref.name, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, effect = _ref.effect;
                if (typeof effect === "function") {
                    var cleanupFn = effect({
                        state: state,
                        name: name,
                        instance: instance,
                        options: options
                    });
                    var noopFn = function noopFn() {};
                    effectCleanupFns.push(cleanupFn || noopFn);
                }
            });
        }
        function cleanupModifierEffects() {
            effectCleanupFns.forEach(function(fn) {
                return fn();
            });
            effectCleanupFns = [];
        }
        return instance;
    };
}
var $df51816adb601187$export$8f7491d57c8f97a9 = /*#__PURE__*/ $df51816adb601187$export$ed5e13716264f202(); // eslint-disable-next-line import/no-unused-modules














var $93be2f11a82496fa$export$d34966752335dd47 = [
    (0, $4b01034568a27423$export$2e2bcd8739ae039),
    (0, $d877008fcb6b0622$export$2e2bcd8739ae039),
    (0, $3b4ec12f7f30e6e9$export$2e2bcd8739ae039),
    (0, $241338cc8e5e4c60$export$2e2bcd8739ae039),
    (0, $cf1303c32e82a4d1$export$2e2bcd8739ae039),
    (0, $b8ee520e10aec899$export$2e2bcd8739ae039),
    (0, $671842b37ab05fc3$export$2e2bcd8739ae039),
    (0, $526b57b22d6d7642$export$2e2bcd8739ae039),
    (0, $7b42606e08d4f5d8$export$2e2bcd8739ae039)
];
var $93be2f11a82496fa$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $df51816adb601187$export$ed5e13716264f202)({
    defaultModifiers: $93be2f11a82496fa$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules







var $253fcb0e048ab9b2$export$d34966752335dd47 = [
    (0, $4b01034568a27423$export$2e2bcd8739ae039),
    (0, $d877008fcb6b0622$export$2e2bcd8739ae039),
    (0, $3b4ec12f7f30e6e9$export$2e2bcd8739ae039),
    (0, $241338cc8e5e4c60$export$2e2bcd8739ae039)
];
var $253fcb0e048ab9b2$export$8f7491d57c8f97a9 = /*#__PURE__*/ (0, $df51816adb601187$export$ed5e13716264f202)({
    defaultModifiers: $253fcb0e048ab9b2$export$d34966752335dd47
}); // eslint-disable-next-line import/no-unused-modules


$parcel$exportWildcard($864a452899cad2a6$exports, $d33c9c04e83a0fb3$exports);
$parcel$exportWildcard($864a452899cad2a6$exports, $15ca2fc00be1eccc$exports);


/**
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
 */ const $5b3598292f163e3e$var$VERSION = "5.3.3";
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
        selector = hrefAttribute && hrefAttribute !== "#" ? hrefAttribute.trim() : null;
    }
    return selector ? selector.split(",").map((sel)=>(0, $e210a887c6468aad$export$529769e360e2fa1b)(sel)).join(",") : null;
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
 */ const $fbab61ae9aa23ff0$var$NAME = "dropdown";
const $fbab61ae9aa23ff0$var$DATA_KEY = "bs.dropdown";
const $fbab61ae9aa23ff0$var$EVENT_KEY = `.${$fbab61ae9aa23ff0$var$DATA_KEY}`;
const $fbab61ae9aa23ff0$var$DATA_API_KEY = ".data-api";
const $fbab61ae9aa23ff0$var$ESCAPE_KEY = "Escape";
const $fbab61ae9aa23ff0$var$TAB_KEY = "Tab";
const $fbab61ae9aa23ff0$var$ARROW_UP_KEY = "ArrowUp";
const $fbab61ae9aa23ff0$var$ARROW_DOWN_KEY = "ArrowDown";
const $fbab61ae9aa23ff0$var$RIGHT_MOUSE_BUTTON = 2 // MouseEvent.button value for the secondary button, usually the right button
;
const $fbab61ae9aa23ff0$var$EVENT_HIDE = `hide${$fbab61ae9aa23ff0$var$EVENT_KEY}`;
const $fbab61ae9aa23ff0$var$EVENT_HIDDEN = `hidden${$fbab61ae9aa23ff0$var$EVENT_KEY}`;
const $fbab61ae9aa23ff0$var$EVENT_SHOW = `show${$fbab61ae9aa23ff0$var$EVENT_KEY}`;
const $fbab61ae9aa23ff0$var$EVENT_SHOWN = `shown${$fbab61ae9aa23ff0$var$EVENT_KEY}`;
const $fbab61ae9aa23ff0$var$EVENT_CLICK_DATA_API = `click${$fbab61ae9aa23ff0$var$EVENT_KEY}${$fbab61ae9aa23ff0$var$DATA_API_KEY}`;
const $fbab61ae9aa23ff0$var$EVENT_KEYDOWN_DATA_API = `keydown${$fbab61ae9aa23ff0$var$EVENT_KEY}${$fbab61ae9aa23ff0$var$DATA_API_KEY}`;
const $fbab61ae9aa23ff0$var$EVENT_KEYUP_DATA_API = `keyup${$fbab61ae9aa23ff0$var$EVENT_KEY}${$fbab61ae9aa23ff0$var$DATA_API_KEY}`;
const $fbab61ae9aa23ff0$var$CLASS_NAME_SHOW = "show";
const $fbab61ae9aa23ff0$var$CLASS_NAME_DROPUP = "dropup";
const $fbab61ae9aa23ff0$var$CLASS_NAME_DROPEND = "dropend";
const $fbab61ae9aa23ff0$var$CLASS_NAME_DROPSTART = "dropstart";
const $fbab61ae9aa23ff0$var$CLASS_NAME_DROPUP_CENTER = "dropup-center";
const $fbab61ae9aa23ff0$var$CLASS_NAME_DROPDOWN_CENTER = "dropdown-center";
const $fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)';
const $fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE_SHOWN = `${$fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE}.${$fbab61ae9aa23ff0$var$CLASS_NAME_SHOW}`;
const $fbab61ae9aa23ff0$var$SELECTOR_MENU = ".dropdown-menu";
const $fbab61ae9aa23ff0$var$SELECTOR_NAVBAR = ".navbar";
const $fbab61ae9aa23ff0$var$SELECTOR_NAVBAR_NAV = ".navbar-nav";
const $fbab61ae9aa23ff0$var$SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)";
const $fbab61ae9aa23ff0$var$PLACEMENT_TOP = (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "top-end" : "top-start";
const $fbab61ae9aa23ff0$var$PLACEMENT_TOPEND = (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "top-start" : "top-end";
const $fbab61ae9aa23ff0$var$PLACEMENT_BOTTOM = (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "bottom-end" : "bottom-start";
const $fbab61ae9aa23ff0$var$PLACEMENT_BOTTOMEND = (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "bottom-start" : "bottom-end";
const $fbab61ae9aa23ff0$var$PLACEMENT_RIGHT = (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "left-start" : "right-start";
const $fbab61ae9aa23ff0$var$PLACEMENT_LEFT = (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "right-start" : "left-start";
const $fbab61ae9aa23ff0$var$PLACEMENT_TOPCENTER = "top";
const $fbab61ae9aa23ff0$var$PLACEMENT_BOTTOMCENTER = "bottom";
const $fbab61ae9aa23ff0$var$Default = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [
        0,
        2
    ],
    popperConfig: null,
    reference: "toggle"
};
const $fbab61ae9aa23ff0$var$DefaultType = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
};
/**
 * Class definition
 */ class $fbab61ae9aa23ff0$var$Dropdown extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    constructor(element, config){
        super(element, config);
        this._popper = null;
        this._parent = this._element.parentNode // dropdown wrapper
        ;
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        this._menu = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).next(this._element, $fbab61ae9aa23ff0$var$SELECTOR_MENU)[0] || (0, $47e855298aebfbc4$export$2e2bcd8739ae039).prev(this._element, $fbab61ae9aa23ff0$var$SELECTOR_MENU)[0] || (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($fbab61ae9aa23ff0$var$SELECTOR_MENU, this._parent);
        this._inNavbar = this._detectNavbar();
    }
    // Getters
    static get Default() {
        return $fbab61ae9aa23ff0$var$Default;
    }
    static get DefaultType() {
        return $fbab61ae9aa23ff0$var$DefaultType;
    }
    static get NAME() {
        return $fbab61ae9aa23ff0$var$NAME;
    }
    // Public
    toggle() {
        return this._isShown() ? this.hide() : this.show();
    }
    show() {
        if ((0, $e210a887c6468aad$export$30e0dc115df457ed)(this._element) || this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        const showEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $fbab61ae9aa23ff0$var$EVENT_SHOW, relatedTarget);
        if (showEvent.defaultPrevented) return;
        this._createPopper();
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement && !this._parent.closest($fbab61ae9aa23ff0$var$SELECTOR_NAVBAR_NAV)) for (const element of [].concat(...document.body.children))(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(element, "mouseover", (0, $e210a887c6468aad$export$8793edee2d425525));
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add($fbab61ae9aa23ff0$var$CLASS_NAME_SHOW);
        this._element.classList.add($fbab61ae9aa23ff0$var$CLASS_NAME_SHOW);
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $fbab61ae9aa23ff0$var$EVENT_SHOWN, relatedTarget);
    }
    hide() {
        if ((0, $e210a887c6468aad$export$30e0dc115df457ed)(this._element) || !this._isShown()) return;
        const relatedTarget = {
            relatedTarget: this._element
        };
        this._completeHide(relatedTarget);
    }
    dispose() {
        if (this._popper) this._popper.destroy();
        super.dispose();
    }
    update() {
        this._inNavbar = this._detectNavbar();
        if (this._popper) this._popper.update();
    }
    // Private
    _completeHide(relatedTarget) {
        const hideEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $fbab61ae9aa23ff0$var$EVENT_HIDE, relatedTarget);
        if (hideEvent.defaultPrevented) return;
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))(0, $3426e80176c401dc$export$2e2bcd8739ae039).off(element, "mouseover", (0, $e210a887c6468aad$export$8793edee2d425525));
        if (this._popper) this._popper.destroy();
        this._menu.classList.remove($fbab61ae9aa23ff0$var$CLASS_NAME_SHOW);
        this._element.classList.remove($fbab61ae9aa23ff0$var$CLASS_NAME_SHOW);
        this._element.setAttribute("aria-expanded", "false");
        (0, $9f1bee617b265502$export$2e2bcd8739ae039).removeDataAttribute(this._menu, "popper");
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, $fbab61ae9aa23ff0$var$EVENT_HIDDEN, relatedTarget);
    }
    _getConfig(config) {
        config = super._getConfig(config);
        if (typeof config.reference === "object" && !(0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(config.reference) && typeof config.reference.getBoundingClientRect !== "function") // Popper virtual elements require a getBoundingClientRect method
        throw new TypeError(`${$fbab61ae9aa23ff0$var$NAME.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
        return config;
    }
    _createPopper() {
        if (typeof $864a452899cad2a6$exports === "undefined") throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
        let referenceElement = this._element;
        if (this._config.reference === "parent") referenceElement = this._parent;
        else if ((0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(this._config.reference)) referenceElement = (0, $e210a887c6468aad$export$d16800b7e59a8051)(this._config.reference);
        else if (typeof this._config.reference === "object") referenceElement = this._config.reference;
        const popperConfig = this._getPopperConfig();
        this._popper = $864a452899cad2a6$exports.createPopper(referenceElement, this._menu, popperConfig);
    }
    _isShown() {
        return this._menu.classList.contains($fbab61ae9aa23ff0$var$CLASS_NAME_SHOW);
    }
    _getPlacement() {
        const parentDropdown = this._parent;
        if (parentDropdown.classList.contains($fbab61ae9aa23ff0$var$CLASS_NAME_DROPEND)) return $fbab61ae9aa23ff0$var$PLACEMENT_RIGHT;
        if (parentDropdown.classList.contains($fbab61ae9aa23ff0$var$CLASS_NAME_DROPSTART)) return $fbab61ae9aa23ff0$var$PLACEMENT_LEFT;
        if (parentDropdown.classList.contains($fbab61ae9aa23ff0$var$CLASS_NAME_DROPUP_CENTER)) return $fbab61ae9aa23ff0$var$PLACEMENT_TOPCENTER;
        if (parentDropdown.classList.contains($fbab61ae9aa23ff0$var$CLASS_NAME_DROPDOWN_CENTER)) return $fbab61ae9aa23ff0$var$PLACEMENT_BOTTOMCENTER;
        // We need to trim the value because custom properties can also include spaces
        const isEnd = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
        if (parentDropdown.classList.contains($fbab61ae9aa23ff0$var$CLASS_NAME_DROPUP)) return isEnd ? $fbab61ae9aa23ff0$var$PLACEMENT_TOPEND : $fbab61ae9aa23ff0$var$PLACEMENT_TOP;
        return isEnd ? $fbab61ae9aa23ff0$var$PLACEMENT_BOTTOMEND : $fbab61ae9aa23ff0$var$PLACEMENT_BOTTOM;
    }
    _detectNavbar() {
        return this._element.closest($fbab61ae9aa23ff0$var$SELECTOR_NAVBAR) !== null;
    }
    _getOffset() {
        const { offset: offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _getPopperConfig() {
        const defaultBsPopperConfig = {
            placement: this._getPlacement(),
            modifiers: [
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }
            ]
        };
        // Disable Popper if we have a static display or Dropdown is in Navbar
        if (this._inNavbar || this._config.display === "static") {
            (0, $9f1bee617b265502$export$2e2bcd8739ae039).setDataAttribute(this._menu, "popper", "static") // TODO: v6 remove
            ;
            defaultBsPopperConfig.modifiers = [
                {
                    name: "applyStyles",
                    enabled: false
                }
            ];
        }
        return {
            ...defaultBsPopperConfig,
            ...(0, $e210a887c6468aad$export$51396ec711da548b)(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _selectMenuItem({ key: key, target: target }) {
        const items = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($fbab61ae9aa23ff0$var$SELECTOR_VISIBLE_ITEMS, this._menu).filter((element)=>(0, $e210a887c6468aad$export$795910f5f15a9633)(element));
        if (!items.length) return;
        // if target isn't included in items (e.g. when expanding the dropdown)
        // allow cycling to get the last item in case key equals ARROW_UP_KEY
        (0, $e210a887c6468aad$export$7bc25e2173fc3d1f)(items, target, key === $fbab61ae9aa23ff0$var$ARROW_DOWN_KEY, !items.includes(target)).focus();
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $fbab61ae9aa23ff0$var$Dropdown.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
    static clearMenus(event) {
        if (event.button === $fbab61ae9aa23ff0$var$RIGHT_MOUSE_BUTTON || event.type === "keyup" && event.key !== $fbab61ae9aa23ff0$var$TAB_KEY) return;
        const openToggles = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).find($fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE_SHOWN);
        for (const toggle of openToggles){
            const context = $fbab61ae9aa23ff0$var$Dropdown.getInstance(toggle);
            if (!context || context._config.autoClose === false) continue;
            const composedPath = event.composedPath();
            const isMenuTarget = composedPath.includes(context._menu);
            if (composedPath.includes(context._element) || context._config.autoClose === "inside" && !isMenuTarget || context._config.autoClose === "outside" && isMenuTarget) continue;
            // Tab navigation through the dropdown menu or events from contained inputs shouldn't close the menu
            if (context._menu.contains(event.target) && (event.type === "keyup" && event.key === $fbab61ae9aa23ff0$var$TAB_KEY || /input|select|option|textarea|form/i.test(event.target.tagName))) continue;
            const relatedTarget = {
                relatedTarget: context._element
            };
            if (event.type === "click") relatedTarget.clickEvent = event;
            context._completeHide(relatedTarget);
        }
    }
    static dataApiKeydownHandler(event) {
        // If not an UP | DOWN | ESCAPE key => not a dropdown command
        // If input/textarea && if key is other than ESCAPE => not a dropdown command
        const isInput = /input|textarea/i.test(event.target.tagName);
        const isEscapeEvent = event.key === $fbab61ae9aa23ff0$var$ESCAPE_KEY;
        const isUpOrDownEvent = [
            $fbab61ae9aa23ff0$var$ARROW_UP_KEY,
            $fbab61ae9aa23ff0$var$ARROW_DOWN_KEY
        ].includes(event.key);
        if (!isUpOrDownEvent && !isEscapeEvent) return;
        if (isInput && !isEscapeEvent) return;
        event.preventDefault();
        // TODO: v6 revert #37011 & change markup https://getbootstrap.com/docs/5.3/forms/input-group/
        const getToggleButton = this.matches($fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE) ? this : (0, $47e855298aebfbc4$export$2e2bcd8739ae039).prev(this, $fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE)[0] || (0, $47e855298aebfbc4$export$2e2bcd8739ae039).next(this, $fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE)[0] || (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne($fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE, event.delegateTarget.parentNode);
        const instance = $fbab61ae9aa23ff0$var$Dropdown.getOrCreateInstance(getToggleButton);
        if (isUpOrDownEvent) {
            event.stopPropagation();
            instance.show();
            instance._selectMenuItem(event);
            return;
        }
        if (instance._isShown()) {
            event.stopPropagation();
            instance.hide();
            getToggleButton.focus();
        }
    }
}
/**
 * Data API implementation
 */ (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $fbab61ae9aa23ff0$var$EVENT_KEYDOWN_DATA_API, $fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE, $fbab61ae9aa23ff0$var$Dropdown.dataApiKeydownHandler);
(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $fbab61ae9aa23ff0$var$EVENT_KEYDOWN_DATA_API, $fbab61ae9aa23ff0$var$SELECTOR_MENU, $fbab61ae9aa23ff0$var$Dropdown.dataApiKeydownHandler);
(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $fbab61ae9aa23ff0$var$EVENT_CLICK_DATA_API, $fbab61ae9aa23ff0$var$Dropdown.clearMenus);
(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $fbab61ae9aa23ff0$var$EVENT_KEYUP_DATA_API, $fbab61ae9aa23ff0$var$Dropdown.clearMenus);
(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(document, $fbab61ae9aa23ff0$var$EVENT_CLICK_DATA_API, $fbab61ae9aa23ff0$var$SELECTOR_DATA_TOGGLE, function(event) {
    event.preventDefault();
    $fbab61ae9aa23ff0$var$Dropdown.getOrCreateInstance(this).toggle();
});
/**
 * jQuery
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($fbab61ae9aa23ff0$var$Dropdown);
var $fbab61ae9aa23ff0$export$2e2bcd8739ae039 = $fbab61ae9aa23ff0$var$Dropdown;


/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 




/**
 * --------------------------------------------------------------------------
 * Bootstrap util/sanitizer.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ // js-docs-start allow-list
const $726eb3bc0084efc9$var$ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
const $726eb3bc0084efc9$export$693d4a86a87ccb92 = {
    // Global attributes allowed on any supplied element below.
    "*": [
        "class",
        "dir",
        "id",
        "lang",
        "role",
        $726eb3bc0084efc9$var$ARIA_ATTRIBUTE_PATTERN
    ],
    a: [
        "target",
        "href",
        "title",
        "rel"
    ],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    dd: [],
    div: [],
    dl: [],
    dt: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: [
        "src",
        "srcset",
        "alt",
        "title",
        "width",
        "height"
    ],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
};
// js-docs-end allow-list
const $726eb3bc0084efc9$var$uriAttributes = new Set([
    "background",
    "cite",
    "href",
    "itemtype",
    "longdesc",
    "poster",
    "src",
    "xlink:href"
]);
/**
 * A pattern that recognizes URLs that are safe wrt. XSS in URL navigation
 * contexts.
 *
 * Shout-out to Angular https://github.com/angular/angular/blob/15.2.8/packages/core/src/sanitization/url_sanitizer.ts#L38
 */ // eslint-disable-next-line unicorn/better-regex
const $726eb3bc0084efc9$var$SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i;
const $726eb3bc0084efc9$var$allowedAttribute = (attribute, allowedAttributeList)=>{
    const attributeName = attribute.nodeName.toLowerCase();
    if (allowedAttributeList.includes(attributeName)) {
        if ($726eb3bc0084efc9$var$uriAttributes.has(attributeName)) return Boolean($726eb3bc0084efc9$var$SAFE_URL_PATTERN.test(attribute.nodeValue));
        return true;
    }
    // Check if a regular expression validates the attribute.
    return allowedAttributeList.filter((attributeRegex)=>attributeRegex instanceof RegExp).some((regex)=>regex.test(attributeName));
};
function $726eb3bc0084efc9$export$c0fc46c8edd7094a(unsafeHtml, allowList, sanitizeFunction) {
    if (!unsafeHtml.length) return unsafeHtml;
    if (sanitizeFunction && typeof sanitizeFunction === "function") return sanitizeFunction(unsafeHtml);
    const domParser = new window.DOMParser();
    const createdDocument = domParser.parseFromString(unsafeHtml, "text/html");
    const elements = [].concat(...createdDocument.body.querySelectorAll("*"));
    for (const element of elements){
        const elementName = element.nodeName.toLowerCase();
        if (!Object.keys(allowList).includes(elementName)) {
            element.remove();
            continue;
        }
        const attributeList = [].concat(...element.attributes);
        const allowedAttributes = [].concat(allowList["*"] || [], allowList[elementName] || []);
        for (const attribute of attributeList)if (!$726eb3bc0084efc9$var$allowedAttribute(attribute, allowedAttributes)) element.removeAttribute(attribute.nodeName);
    }
    return createdDocument.body.innerHTML;
}


/**
 * --------------------------------------------------------------------------
 * Bootstrap util/template-factory.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 



/**
 * Constants
 */ const $14dd8d7f33b1de02$var$NAME = "TemplateFactory";
const $14dd8d7f33b1de02$var$Default = {
    allowList: (0, $726eb3bc0084efc9$export$693d4a86a87ccb92),
    content: {},
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
};
const $14dd8d7f33b1de02$var$DefaultType = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
};
const $14dd8d7f33b1de02$var$DefaultContentType = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
};
/**
 * Class definition
 */ class $14dd8d7f33b1de02$var$TemplateFactory extends (0, $5dbfd1c666377abf$export$2e2bcd8739ae039) {
    constructor(config){
        super();
        this._config = this._getConfig(config);
    }
    // Getters
    static get Default() {
        return $14dd8d7f33b1de02$var$Default;
    }
    static get DefaultType() {
        return $14dd8d7f33b1de02$var$DefaultType;
    }
    static get NAME() {
        return $14dd8d7f33b1de02$var$NAME;
    }
    // Public
    getContent() {
        return Object.values(this._config.content).map((config)=>this._resolvePossibleFunction(config)).filter(Boolean);
    }
    hasContent() {
        return this.getContent().length > 0;
    }
    changeContent(content) {
        this._checkContent(content);
        this._config.content = {
            ...this._config.content,
            ...content
        };
        return this;
    }
    toHtml() {
        const templateWrapper = document.createElement("div");
        templateWrapper.innerHTML = this._maybeSanitize(this._config.template);
        for (const [selector, text] of Object.entries(this._config.content))this._setContent(templateWrapper, text, selector);
        const template = templateWrapper.children[0];
        const extraClass = this._resolvePossibleFunction(this._config.extraClass);
        if (extraClass) template.classList.add(...extraClass.split(" "));
        return template;
    }
    // Private
    _typeCheckConfig(config) {
        super._typeCheckConfig(config);
        this._checkContent(config.content);
    }
    _checkContent(arg) {
        for (const [selector, content] of Object.entries(arg))super._typeCheckConfig({
            selector: selector,
            entry: content
        }, $14dd8d7f33b1de02$var$DefaultContentType);
    }
    _setContent(template, content, selector) {
        const templateElement = (0, $47e855298aebfbc4$export$2e2bcd8739ae039).findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if ((0, $e210a887c6468aad$export$45a5e7f76e0caa8d)(content)) {
            this._putElementInTemplate((0, $e210a887c6468aad$export$d16800b7e59a8051)(content), templateElement);
            return;
        }
        if (this._config.html) {
            templateElement.innerHTML = this._maybeSanitize(content);
            return;
        }
        templateElement.textContent = content;
    }
    _maybeSanitize(arg) {
        return this._config.sanitize ? (0, $726eb3bc0084efc9$export$c0fc46c8edd7094a)(arg, this._config.allowList, this._config.sanitizeFn) : arg;
    }
    _resolvePossibleFunction(arg) {
        return (0, $e210a887c6468aad$export$51396ec711da548b)(arg, [
            this
        ]);
    }
    _putElementInTemplate(element, templateElement) {
        if (this._config.html) {
            templateElement.innerHTML = "";
            templateElement.append(element);
            return;
        }
        templateElement.textContent = element.textContent;
    }
}
var $14dd8d7f33b1de02$export$2e2bcd8739ae039 = $14dd8d7f33b1de02$var$TemplateFactory;


/**
 * Constants
 */ const $73adddcf05fce0cb$var$NAME = "tooltip";
const $73adddcf05fce0cb$var$DISALLOWED_ATTRIBUTES = new Set([
    "sanitize",
    "allowList",
    "sanitizeFn"
]);
const $73adddcf05fce0cb$var$CLASS_NAME_FADE = "fade";
const $73adddcf05fce0cb$var$CLASS_NAME_MODAL = "modal";
const $73adddcf05fce0cb$var$CLASS_NAME_SHOW = "show";
const $73adddcf05fce0cb$var$SELECTOR_TOOLTIP_INNER = ".tooltip-inner";
const $73adddcf05fce0cb$var$SELECTOR_MODAL = `.${$73adddcf05fce0cb$var$CLASS_NAME_MODAL}`;
const $73adddcf05fce0cb$var$EVENT_MODAL_HIDE = "hide.bs.modal";
const $73adddcf05fce0cb$var$TRIGGER_HOVER = "hover";
const $73adddcf05fce0cb$var$TRIGGER_FOCUS = "focus";
const $73adddcf05fce0cb$var$TRIGGER_CLICK = "click";
const $73adddcf05fce0cb$var$TRIGGER_MANUAL = "manual";
const $73adddcf05fce0cb$var$EVENT_HIDE = "hide";
const $73adddcf05fce0cb$var$EVENT_HIDDEN = "hidden";
const $73adddcf05fce0cb$var$EVENT_SHOW = "show";
const $73adddcf05fce0cb$var$EVENT_SHOWN = "shown";
const $73adddcf05fce0cb$var$EVENT_INSERTED = "inserted";
const $73adddcf05fce0cb$var$EVENT_CLICK = "click";
const $73adddcf05fce0cb$var$EVENT_FOCUSIN = "focusin";
const $73adddcf05fce0cb$var$EVENT_FOCUSOUT = "focusout";
const $73adddcf05fce0cb$var$EVENT_MOUSEENTER = "mouseenter";
const $73adddcf05fce0cb$var$EVENT_MOUSELEAVE = "mouseleave";
const $73adddcf05fce0cb$var$AttachmentMap = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: (0, $e210a887c6468aad$export$702d680b21cbd764)() ? "right" : "left"
};
const $73adddcf05fce0cb$var$Default = {
    allowList: (0, $726eb3bc0084efc9$export$693d4a86a87ccb92),
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: [
        "top",
        "right",
        "bottom",
        "left"
    ],
    html: false,
    offset: [
        0,
        6
    ],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "",
    trigger: "hover focus"
};
const $73adddcf05fce0cb$var$DefaultType = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
};
/**
 * Class definition
 */ class $73adddcf05fce0cb$var$Tooltip extends (0, $5b3598292f163e3e$export$2e2bcd8739ae039) {
    constructor(element, config){
        if (typeof $864a452899cad2a6$exports === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
        super(element, config);
        // Private
        this._isEnabled = true;
        this._timeout = 0;
        this._isHovered = null;
        this._activeTrigger = {};
        this._popper = null;
        this._templateFactory = null;
        this._newContent = null;
        // Protected
        this.tip = null;
        this._setListeners();
        if (!this._config.selector) this._fixTitle();
    }
    // Getters
    static get Default() {
        return $73adddcf05fce0cb$var$Default;
    }
    static get DefaultType() {
        return $73adddcf05fce0cb$var$DefaultType;
    }
    static get NAME() {
        return $73adddcf05fce0cb$var$NAME;
    }
    // Public
    enable() {
        this._isEnabled = true;
    }
    disable() {
        this._isEnabled = false;
    }
    toggleEnabled() {
        this._isEnabled = !this._isEnabled;
    }
    toggle() {
        if (!this._isEnabled) return;
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
            this._leave();
            return;
        }
        this._enter();
    }
    dispose() {
        clearTimeout(this._timeout);
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).off(this._element.closest($73adddcf05fce0cb$var$SELECTOR_MODAL), $73adddcf05fce0cb$var$EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_SHOW));
        const shadowRoot = (0, $e210a887c6468aad$export$1a538cc28c24d2ec)(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
        // TODO: v6 remove this or make it optional
        this._disposePopper();
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container: container } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add($73adddcf05fce0cb$var$CLASS_NAME_SHOW);
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))(0, $3426e80176c401dc$export$2e2bcd8739ae039).on(element, "mouseover", (0, $e210a887c6468aad$export$8793edee2d425525));
        const complete = ()=>{
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_SHOWN));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_HIDE));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove($73adddcf05fce0cb$var$CLASS_NAME_SHOW);
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))(0, $3426e80176c401dc$export$2e2bcd8739ae039).off(element, "mouseover", (0, $e210a887c6468aad$export$8793edee2d425525));
        this._activeTrigger[$73adddcf05fce0cb$var$TRIGGER_CLICK] = false;
        this._activeTrigger[$73adddcf05fce0cb$var$TRIGGER_FOCUS] = false;
        this._activeTrigger[$73adddcf05fce0cb$var$TRIGGER_HOVER] = false;
        this._isHovered = null // it is a trick to support manual triggering
        ;
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) this._disposePopper();
            this._element.removeAttribute("aria-describedby");
            (0, $3426e80176c401dc$export$2e2bcd8739ae039).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_HIDDEN));
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    update() {
        if (this._popper) this._popper.update();
    }
    // Protected
    _isWithContent() {
        return Boolean(this._getTitle());
    }
    _getTipElement() {
        if (!this.tip) this.tip = this._createTipElement(this._newContent || this._getContentForTemplate());
        return this.tip;
    }
    _createTipElement(content) {
        const tip = this._getTemplateFactory(content).toHtml();
        // TODO: remove this check in v6
        if (!tip) return null;
        tip.classList.remove($73adddcf05fce0cb$var$CLASS_NAME_FADE, $73adddcf05fce0cb$var$CLASS_NAME_SHOW);
        // TODO: v6 the following can be achieved with CSS only
        tip.classList.add(`bs-${this.constructor.NAME}-auto`);
        const tipId = (0, $e210a887c6468aad$export$6d2b3473b0986646)(this.constructor.NAME).toString();
        tip.setAttribute("id", tipId);
        if (this._isAnimated()) tip.classList.add($73adddcf05fce0cb$var$CLASS_NAME_FADE);
        return tip;
    }
    setContent(content) {
        this._newContent = content;
        if (this._isShown()) {
            this._disposePopper();
            this.show();
        }
    }
    _getTemplateFactory(content) {
        if (this._templateFactory) this._templateFactory.changeContent(content);
        else this._templateFactory = new (0, $14dd8d7f33b1de02$export$2e2bcd8739ae039)({
            ...this._config,
            content: // the `content` var has to be after `this._config`
            // to override config.content in case of popover
            content,
            extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
        return this._templateFactory;
    }
    _getContentForTemplate() {
        return {
            [$73adddcf05fce0cb$var$SELECTOR_TOOLTIP_INNER]: this._getTitle()
        };
    }
    _getTitle() {
        return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    // Private
    _initializeOnDelegatedTarget(event) {
        return this.constructor.getOrCreateInstance(event.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
        return this._config.animation || this.tip && this.tip.classList.contains($73adddcf05fce0cb$var$CLASS_NAME_FADE);
    }
    _isShown() {
        return this.tip && this.tip.classList.contains($73adddcf05fce0cb$var$CLASS_NAME_SHOW);
    }
    _createPopper(tip) {
        const placement = (0, $e210a887c6468aad$export$51396ec711da548b)(this._config.placement, [
            this,
            tip,
            this._element
        ]);
        const attachment = $73adddcf05fce0cb$var$AttachmentMap[placement.toUpperCase()];
        return $864a452899cad2a6$exports.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset: offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return (0, $e210a887c6468aad$export$51396ec711da548b)(arg, [
            this._element
        ]);
    }
    _getPopperConfig(attachment) {
        const defaultBsPopperConfig = {
            placement: attachment,
            modifiers: [
                {
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                },
                {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                },
                {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                },
                {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                },
                {
                    name: "preSetPlacement",
                    enabled: true,
                    phase: "beforeMain",
                    fn: (data)=>{
                        // Pre-set Popper's placement attribute in order to read the arrow sizes properly.
                        // Otherwise, Popper mixes up the width and height dimensions since the initial arrow style is for top placement
                        this._getTipElement().setAttribute("data-popper-placement", data.state.placement);
                    }
                }
            ]
        };
        return {
            ...defaultBsPopperConfig,
            ...(0, $e210a887c6468aad$export$51396ec711da548b)(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_CLICK), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== $73adddcf05fce0cb$var$TRIGGER_MANUAL) {
                const eventIn = trigger === $73adddcf05fce0cb$var$TRIGGER_HOVER ? this.constructor.eventName($73adddcf05fce0cb$var$EVENT_MOUSEENTER) : this.constructor.eventName($73adddcf05fce0cb$var$EVENT_FOCUSIN);
                const eventOut = trigger === $73adddcf05fce0cb$var$TRIGGER_HOVER ? this.constructor.eventName($73adddcf05fce0cb$var$EVENT_MOUSELEAVE) : this.constructor.eventName($73adddcf05fce0cb$var$EVENT_FOCUSOUT);
                (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? $73adddcf05fce0cb$var$TRIGGER_FOCUS : $73adddcf05fce0cb$var$TRIGGER_HOVER] = true;
                    context._enter();
                });
                (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? $73adddcf05fce0cb$var$TRIGGER_FOCUS : $73adddcf05fce0cb$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        (0, $3426e80176c401dc$export$2e2bcd8739ae039).on(this._element.closest($73adddcf05fce0cb$var$SELECTOR_MODAL), $73adddcf05fce0cb$var$EVENT_MODAL_HIDE, this._hideModalHandler);
    }
    _fixTitle() {
        const title = this._element.getAttribute("title");
        if (!title) return;
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) this._element.setAttribute("aria-label", title);
        this._element.setAttribute("data-bs-original-title", title) // DO NOT USE IT. Is only for backwards compatibility
        ;
        this._element.removeAttribute("title");
    }
    _enter() {
        if (this._isShown() || this._isHovered) {
            this._isHovered = true;
            return;
        }
        this._isHovered = true;
        this._setTimeout(()=>{
            if (this._isHovered) this.show();
        }, this._config.delay.show);
    }
    _leave() {
        if (this._isWithActiveTrigger()) return;
        this._isHovered = false;
        this._setTimeout(()=>{
            if (!this._isHovered) this.hide();
        }, this._config.delay.hide);
    }
    _setTimeout(handler, timeout) {
        clearTimeout(this._timeout);
        this._timeout = setTimeout(handler, timeout);
    }
    _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(config) {
        const dataAttributes = (0, $9f1bee617b265502$export$2e2bcd8739ae039).getDataAttributes(this._element);
        for (const dataAttribute of Object.keys(dataAttributes))if ($73adddcf05fce0cb$var$DISALLOWED_ATTRIBUTES.has(dataAttribute)) delete dataAttributes[dataAttribute];
        config = {
            ...dataAttributes,
            ...typeof config === "object" && config ? config : {}
        };
        config = this._mergeConfigObj(config);
        config = this._configAfterMerge(config);
        this._typeCheckConfig(config);
        return config;
    }
    _configAfterMerge(config) {
        config.container = config.container === false ? document.body : (0, $e210a887c6468aad$export$d16800b7e59a8051)(config.container);
        if (typeof config.delay === "number") config.delay = {
            show: config.delay,
            hide: config.delay
        };
        if (typeof config.title === "number") config.title = config.title.toString();
        if (typeof config.content === "number") config.content = config.content.toString();
        return config;
    }
    _getDelegateConfig() {
        const config = {};
        for (const [key, value] of Object.entries(this._config))if (this.constructor.Default[key] !== value) config[key] = value;
        config.selector = false;
        config.trigger = "manual";
        // In the future can be replaced with:
        // const keysWithDifferentValues = Object.entries(this._config).filter(entry => this.constructor.Default[entry[0]] !== this._config[entry[0]])
        // `Object.fromEntries(keysWithDifferentValues)`
        return config;
    }
    _disposePopper() {
        if (this._popper) {
            this._popper.destroy();
            this._popper = null;
        }
        if (this.tip) {
            this.tip.remove();
            this.tip = null;
        }
    }
    // Static
    static jQueryInterface(config) {
        return this.each(function() {
            const data = $73adddcf05fce0cb$var$Tooltip.getOrCreateInstance(this, config);
            if (typeof config !== "string") return;
            if (typeof data[config] === "undefined") throw new TypeError(`No method named "${config}"`);
            data[config]();
        });
    }
}
/**
 * jQuery
 */ (0, $e210a887c6468aad$export$6be86de4be20ff32)($73adddcf05fce0cb$var$Tooltip);
var $73adddcf05fce0cb$export$2e2bcd8739ae039 = $73adddcf05fce0cb$var$Tooltip;


let $35afe3a62a785952$var$copyEl = document.querySelector(".copy-link");
let $35afe3a62a785952$var$toolTip = new (0, $73adddcf05fce0cb$export$2e2bcd8739ae039)($35afe3a62a785952$var$copyEl);
$35afe3a62a785952$var$copyEl.addEventListener("click", (e)=>{
    let link = location.href;
    navigator.clipboard.writeText(link).then(()=>{
        $35afe3a62a785952$var$copyEl.setAttribute("title", "Copied!");
        $35afe3a62a785952$var$copyEl.setAttribute("data-bs-original-title", "Copied!");
        $35afe3a62a785952$var$toolTip.show();
    });
});


