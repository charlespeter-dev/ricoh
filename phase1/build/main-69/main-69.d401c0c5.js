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
parcelRequire("lBD67");
/**
 * --------------------------------------------------------------------------
 * Bootstrap tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */ 
var $bwP2a = parcelRequire("bwP2a");

var $7Pvka = parcelRequire("7Pvka");

var $4tBqP = parcelRequire("4tBqP");

var $dEVUr = parcelRequire("dEVUr");

var $jpl1o = parcelRequire("jpl1o");
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
    div: [],
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
var $6aLfT = parcelRequire("6aLfT");

var $831ze = parcelRequire("831ze");


var $jpl1o = parcelRequire("jpl1o");
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
 */ class $14dd8d7f33b1de02$var$TemplateFactory extends (0, $831ze.default) {
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
        const templateElement = (0, $6aLfT.default).findOne(selector, template);
        if (!templateElement) return;
        content = this._resolvePossibleFunction(content);
        if (!content) {
            templateElement.remove();
            return;
        }
        if ((0, $jpl1o.isElement)(content)) {
            this._putElementInTemplate((0, $jpl1o.getElement)(content), templateElement);
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
        return (0, $jpl1o.execute)(arg, [
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
    RIGHT: (0, $jpl1o.isRTL)() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: (0, $jpl1o.isRTL)() ? "right" : "left"
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
 */ class $73adddcf05fce0cb$var$Tooltip extends (0, $7Pvka.default) {
    constructor(element, config){
        if (typeof $bwP2a === "undefined") throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
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
        (0, $4tBqP.default).off(this._element.closest($73adddcf05fce0cb$var$SELECTOR_MODAL), $73adddcf05fce0cb$var$EVENT_MODAL_HIDE, this._hideModalHandler);
        if (this._element.getAttribute("data-bs-original-title")) this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
        this._disposePopper();
        super.dispose();
    }
    show() {
        if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
        if (!(this._isWithContent() && this._isEnabled)) return;
        const showEvent = (0, $4tBqP.default).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_SHOW));
        const shadowRoot = (0, $jpl1o.findShadowRoot)(this._element);
        const isInTheDom = (shadowRoot || this._element.ownerDocument.documentElement).contains(this._element);
        if (showEvent.defaultPrevented || !isInTheDom) return;
        // TODO: v6 remove this or make it optional
        this._disposePopper();
        const tip = this._getTipElement();
        this._element.setAttribute("aria-describedby", tip.getAttribute("id"));
        const { container: container } = this._config;
        if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
            container.append(tip);
            (0, $4tBqP.default).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_INSERTED));
        }
        this._popper = this._createPopper(tip);
        tip.classList.add($73adddcf05fce0cb$var$CLASS_NAME_SHOW);
        // If this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))(0, $4tBqP.default).on(element, "mouseover", (0, $jpl1o.noop));
        const complete = ()=>{
            (0, $4tBqP.default).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_SHOWN));
            if (this._isHovered === false) this._leave();
            this._isHovered = false;
        };
        this._queueCallback(complete, this.tip, this._isAnimated());
    }
    hide() {
        if (!this._isShown()) return;
        const hideEvent = (0, $4tBqP.default).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_HIDE));
        if (hideEvent.defaultPrevented) return;
        const tip = this._getTipElement();
        tip.classList.remove($73adddcf05fce0cb$var$CLASS_NAME_SHOW);
        // If this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support
        if ("ontouchstart" in document.documentElement) for (const element of [].concat(...document.body.children))(0, $4tBqP.default).off(element, "mouseover", (0, $jpl1o.noop));
        this._activeTrigger[$73adddcf05fce0cb$var$TRIGGER_CLICK] = false;
        this._activeTrigger[$73adddcf05fce0cb$var$TRIGGER_FOCUS] = false;
        this._activeTrigger[$73adddcf05fce0cb$var$TRIGGER_HOVER] = false;
        this._isHovered = null // it is a trick to support manual triggering
        ;
        const complete = ()=>{
            if (this._isWithActiveTrigger()) return;
            if (!this._isHovered) this._disposePopper();
            this._element.removeAttribute("aria-describedby");
            (0, $4tBqP.default).trigger(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_HIDDEN));
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
        const tipId = (0, $jpl1o.getUID)(this.constructor.NAME).toString();
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
        const placement = (0, $jpl1o.execute)(this._config.placement, [
            this,
            tip,
            this._element
        ]);
        const attachment = $73adddcf05fce0cb$var$AttachmentMap[placement.toUpperCase()];
        return $bwP2a.createPopper(this._element, tip, this._getPopperConfig(attachment));
    }
    _getOffset() {
        const { offset: offset } = this._config;
        if (typeof offset === "string") return offset.split(",").map((value)=>Number.parseInt(value, 10));
        if (typeof offset === "function") return (popperData)=>offset(popperData, this._element);
        return offset;
    }
    _resolvePossibleFunction(arg) {
        return (0, $jpl1o.execute)(arg, [
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
            ...(0, $jpl1o.execute)(this._config.popperConfig, [
                defaultBsPopperConfig
            ])
        };
    }
    _setListeners() {
        const triggers = this._config.trigger.split(" ");
        for (const trigger of triggers){
            if (trigger === "click") (0, $4tBqP.default).on(this._element, this.constructor.eventName($73adddcf05fce0cb$var$EVENT_CLICK), this._config.selector, (event)=>{
                const context = this._initializeOnDelegatedTarget(event);
                context.toggle();
            });
            else if (trigger !== $73adddcf05fce0cb$var$TRIGGER_MANUAL) {
                const eventIn = trigger === $73adddcf05fce0cb$var$TRIGGER_HOVER ? this.constructor.eventName($73adddcf05fce0cb$var$EVENT_MOUSEENTER) : this.constructor.eventName($73adddcf05fce0cb$var$EVENT_FOCUSIN);
                const eventOut = trigger === $73adddcf05fce0cb$var$TRIGGER_HOVER ? this.constructor.eventName($73adddcf05fce0cb$var$EVENT_MOUSELEAVE) : this.constructor.eventName($73adddcf05fce0cb$var$EVENT_FOCUSOUT);
                (0, $4tBqP.default).on(this._element, eventIn, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusin" ? $73adddcf05fce0cb$var$TRIGGER_FOCUS : $73adddcf05fce0cb$var$TRIGGER_HOVER] = true;
                    context._enter();
                });
                (0, $4tBqP.default).on(this._element, eventOut, this._config.selector, (event)=>{
                    const context = this._initializeOnDelegatedTarget(event);
                    context._activeTrigger[event.type === "focusout" ? $73adddcf05fce0cb$var$TRIGGER_FOCUS : $73adddcf05fce0cb$var$TRIGGER_HOVER] = context._element.contains(event.relatedTarget);
                    context._leave();
                });
            }
        }
        this._hideModalHandler = ()=>{
            if (this._element) this.hide();
        };
        (0, $4tBqP.default).on(this._element.closest($73adddcf05fce0cb$var$SELECTOR_MODAL), $73adddcf05fce0cb$var$EVENT_MODAL_HIDE, this._hideModalHandler);
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
        const dataAttributes = (0, $dEVUr.default).getDataAttributes(this._element);
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
        config.container = config.container === false ? document.body : (0, $jpl1o.getElement)(config.container);
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
 */ (0, $jpl1o.defineJQueryPlugin)($73adddcf05fce0cb$var$Tooltip);
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


