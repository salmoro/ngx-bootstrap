import * as i0 from '@angular/core';
import { Directive, Input, Injectable, Component, HostBinding, EventEmitter, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

class NgTranscludeDirective {
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    set ngTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    get ngTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.ɵfac = function NgTranscludeDirective_Factory(t) { return new (t || NgTranscludeDirective)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
NgTranscludeDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: NgTranscludeDirective, selectors: [["", "ngTransclude", ""]], inputs: { ngTransclude: "ngTransclude" } });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NgTranscludeDirective, [{
            type: Directive,
            args: [{
                    selector: '[ngTransclude]'
                }]
        }], function () { return [{ type: i0.ViewContainerRef }]; }, { ngTransclude: [{
                type: Input
            }] });
})();

class TabsetConfig {
    constructor() {
        /** provides default navigation context class: 'tabs' or 'pills' */
        this.type = 'tabs';
        /** provides possibility to set keyNavigations enable or disable, by default is enable */
        this.isKeysAllowed = true;
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
    }
}
TabsetConfig.ɵfac = function TabsetConfig_Factory(t) { return new (t || TabsetConfig)(); };
TabsetConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TabsetConfig, factory: TabsetConfig.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsetConfig, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

function TabsetComponent_li_1_span_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r6 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "span", 7);
        i0.ɵɵlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const tabz_r1 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r4.removeTab(tabz_r1); });
        i0.ɵɵtext(1, " \u274C");
        i0.ɵɵelementEnd();
    }
}
const _c0 = function (a1) { return ["nav-item", a1]; };
function TabsetComponent_li_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 3);
        i0.ɵɵlistener("keydown", function TabsetComponent_li_1_Template_li_keydown_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r2 = restoredCtx.index; const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.keyNavActions($event, i_r2); });
        i0.ɵɵelementStart(1, "a", 4);
        i0.ɵɵlistener("click", function TabsetComponent_li_1_Template_a_click_1_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const tabz_r1 = restoredCtx.$implicit; return tabz_r1.active = true; });
        i0.ɵɵelementStart(2, "span", 5);
        i0.ɵɵtext(3);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(4, TabsetComponent_li_1_span_4_Template, 2, 0, "span", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const tabz_r1 = ctx.$implicit;
        i0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(15, _c0, tabz_r1.customClass || ""));
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("active", tabz_r1.active)("disabled", tabz_r1.disabled);
        i0.ɵɵattribute("aria-controls", tabz_r1.id ? tabz_r1.id : "")("aria-selected", !!tabz_r1.active)("id", tabz_r1.id ? tabz_r1.id + "-link" : "");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngTransclude", tabz_r1.headingRef);
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(tabz_r1.heading);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", tabz_r1.removable);
    }
}
const _c1 = ["*"];
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
class TabsetComponent {
    constructor(config, renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.clazz = true;
        this.tabs = [];
        this.classMap = {};
        /** aria label for tab list */
        this.ariaLabel = 'Tabs';
        this.isDestroyed = false;
        this._vertical = false;
        this._justified = false;
        this._type = 'tabs';
        this._isKeysAllowed = true;
        Object.assign(this, config);
    }
    /** if true tabs will be placed vertically */
    get vertical() {
        return this._vertical;
    }
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /** if true tabs fill the container and have a consistent width */
    get justified() {
        return this._justified;
    }
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /** navigation context class: 'tabs' or 'pills' */
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    get isKeysAllowed() {
        return this._isKeysAllowed;
    }
    set isKeysAllowed(value) {
        this._isKeysAllowed = value;
    }
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    addTab(tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && !tab.active;
    }
    removeTab(tab, options = { reselect: true, emit: true }) {
        const index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (options.reselect && tab.active && this.hasAvailableTabs(index)) {
            const newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        if (options.emit) {
            tab.removed.emit(tab);
        }
        this.tabs.splice(index, 1);
        if (tab.elementRef.nativeElement.parentNode) {
            this.renderer.removeChild(tab.elementRef.nativeElement.parentNode, tab.elementRef.nativeElement);
        }
    }
    keyNavActions(event, index) {
        if (!this.isKeysAllowed) {
            return;
        }
        const list = Array.from(this.elementRef.nativeElement.querySelectorAll('.nav-link'));
        // const activeElList = list.filter((el: HTMLElement) => !el.classList.contains('disabled'));
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            event.preventDefault();
            const currentTab = list[(index) % list.length];
            currentTab.click();
            return;
        }
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            let nextTab;
            let shift = 1;
            do {
                nextTab = list[(index + shift) % list.length];
                shift++;
            } while (nextTab.classList.contains('disabled'));
            nextTab.focus();
            return;
        }
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            let previousTab;
            let shift = 1;
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    previousTab = list[i];
                    shift = 0;
                }
                else {
                    previousTab = list[i - shift];
                }
                shift++;
            } while (previousTab.classList.contains('disabled'));
            previousTab.focus();
            return;
        }
        if (event.keyCode === 36 || event.key === 'Home') {
            event.preventDefault();
            let firstTab;
            let shift = 0;
            do {
                firstTab = list[shift % list.length];
                shift++;
            } while (firstTab.classList.contains('disabled'));
            firstTab.focus();
            return;
        }
        if (event.keyCode === 35 || event.key === 'End') {
            event.preventDefault();
            let lastTab;
            let shift = 1;
            let i = index;
            do {
                if ((i - shift) < 0) {
                    i = list.length - 1;
                    lastTab = list[i];
                    shift = 0;
                }
                else {
                    lastTab = list[i - shift];
                }
                shift++;
            } while (lastTab.classList.contains('disabled'));
            lastTab.focus();
            return;
        }
        if (event.keyCode === 46 || event.key === 'Delete') {
            if (this.tabs[index].removable) {
                this.removeTab(this.tabs[index]);
                if (list[index + 1]) {
                    list[(index + 1) % list.length].focus();
                    return;
                }
                if (list[list.length - 1]) {
                    list[0].focus();
                }
            }
        }
    }
    getClosestTabIndex(index) {
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let step = 1; step <= tabsLength; step += 1) {
            const prevIndex = index - step;
            const nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    hasAvailableTabs(index) {
        const tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'flex-column': this.vertical,
            'nav-justified': this.justified,
            [`nav-${this.type}`]: true
        };
    }
}
TabsetComponent.ɵfac = function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(i0.ɵɵdirectiveInject(TabsetConfig), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
TabsetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabsetComponent, selectors: [["tabset"]], hostVars: 2, hostBindings: function TabsetComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵclassProp("tab-container", ctx.clazz);
        }
    }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [["role", "tablist", 1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]], template: function TabsetComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
            i0.ɵɵtemplate(1, TabsetComponent_li_1_Template, 5, 17, "li", 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.classMap);
            i0.ɵɵattribute("aria-label", ctx.ariaLabel);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.tabs);
        }
    }, directives: [i2.NgClass, i2.NgForOf, NgTranscludeDirective, i2.NgIf], styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsetComponent, [{
            type: Component,
            args: [{ selector: 'tabset', template: "<ul class=\"nav\" [ngClass]=\"classMap\"\r\n    (click)=\"$event.preventDefault()\"\r\n    [attr.aria-label]=\"ariaLabel\"\r\n    role=\"tablist\">\r\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\r\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\r\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\r\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\r\n       [attr.aria-selected]=\"!!tabz.active\"\r\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\r\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\r\n       (click)=\"tabz.active = true\">\r\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\r\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}\n"] }]
        }], function () { return [{ type: TabsetConfig }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { vertical: [{
                type: Input
            }], justified: [{
                type: Input
            }], type: [{
                type: Input
            }], clazz: [{
                type: HostBinding,
                args: ['class.tab-container']
            }] });
})();

class TabDirective {
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** if true tab can not be activated */
        this.disabled = false;
        /** if true tab can be removable, additional button will appear */
        this.removable = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.selectTab = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this._active = false;
        this._customClass = '';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass() {
        return this._customClass;
    }
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : '';
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    ngOnInit() {
        this.removable = !!this.removable;
    }
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(i0.ɵɵdirectiveInject(TabsetComponent), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
TabDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], hostVars: 7, hostBindings: function TabDirective_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵattribute("id", ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby);
            i0.ɵɵclassProp("active", ctx.active)("tab-pane", ctx.addClass);
        }
    }, inputs: { heading: "heading", id: "id", disabled: "disabled", removable: "removable", customClass: "customClass", active: "active" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" }, exportAs: ["tab"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabDirective, [{
            type: Directive,
            args: [{ selector: 'tab, [tab]', exportAs: 'tab' }]
        }], function () { return [{ type: TabsetComponent }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { heading: [{
                type: Input
            }], id: [{
                type: HostBinding,
                args: ['attr.id']
            }, {
                type: Input
            }], disabled: [{
                type: Input
            }], removable: [{
                type: Input
            }], customClass: [{
                type: Input
            }], active: [{
                type: HostBinding,
                args: ['class.active']
            }, {
                type: Input
            }], selectTab: [{
                type: Output
            }], deselect: [{
                type: Output
            }], removed: [{
                type: Output
            }], addClass: [{
                type: HostBinding,
                args: ['class.tab-pane']
            }], role: [{
                type: HostBinding,
                args: ['attr.role']
            }], ariaLabelledby: [{
                type: HostBinding,
                args: ['attr.aria-labelledby']
            }] });
})();

/** Should be used to mark <ng-template> element as a template for tab heading */
class TabHeadingDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(TabDirective)); };
TabHeadingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabHeadingDirective, [{
            type: Directive,
            args: [{ selector: '[tabHeading]' }]
        }], function () { return [{ type: i0.TemplateRef }, { type: TabDirective }]; }, null);
})();

class TabsModule {
    static forRoot() {
        return {
            ngModule: TabsModule,
            providers: []
        };
    }
}
TabsModule.ɵfac = function TabsModule_Factory(t) { return new (t || TabsModule)(); };
TabsModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TabsModule });
TabsModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [
                        NgTranscludeDirective,
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective
                    ],
                    exports: [
                        TabDirective,
                        TabsetComponent,
                        TabHeadingDirective,
                        NgTranscludeDirective
                    ]
                }]
        }], null, null);
})();
(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TabsModule, { declarations: [NgTranscludeDirective,
            TabDirective,
            TabsetComponent,
            TabHeadingDirective], imports: [CommonModule], exports: [TabDirective,
            TabsetComponent,
            TabHeadingDirective,
            NgTranscludeDirective] });
})();

/**
 * Generated bundle index. Do not edit.
 */

export { NgTranscludeDirective, TabDirective, TabHeadingDirective, TabsModule, TabsetComponent, TabsetConfig };
//# sourceMappingURL=ngx-bootstrap-tabs.mjs.map
