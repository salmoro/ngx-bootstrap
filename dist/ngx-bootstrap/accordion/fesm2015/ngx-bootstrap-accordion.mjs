import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, Inject, Output, HostBinding, NgModule } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i1 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i2 from 'ngx-bootstrap/collapse';
import { CollapseModule } from 'ngx-bootstrap/collapse';

/**
 * Configuration service, provides default values for the AccordionComponent.
 */
class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
AccordionConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AccordionConfig, factory: AccordionConfig.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionConfig, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

const _c0$1 = ["*"];
/** Displays collapsible content panels for presenting information in a limited amount of space. */
class AccordionComponent {
    constructor(config) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** if `true` expanding one item will close all others */
        this.closeOthers = false;
        this.groups = [];
        Object.assign(this, config);
    }
    closeOtherPanels(openGroup) {
        if (!this.closeOthers) {
            return;
        }
        this.groups.forEach((group) => {
            if (group !== openGroup) {
                group.isOpen = false;
            }
        });
    }
    addGroup(group) {
        group.isAnimated = this.isAnimated;
        this.groups.push(group);
    }
    removeGroup(group) {
        const index = this.groups.indexOf(group);
        if (index !== -1) {
            this.groups.splice(index, 1);
        }
    }
}
AccordionComponent.ɵfac = function AccordionComponent_Factory(t) { return new (t || AccordionComponent)(i0.ɵɵdirectiveInject(AccordionConfig)); };
AccordionComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionComponent, selectors: [["accordion"]], hostAttrs: ["role", "tablist", 1, "panel-group", 2, "display", "block"], hostVars: 1, hostBindings: function AccordionComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵattribute("aria-multiselectable", ctx.closeOthers);
        }
    }, inputs: { isAnimated: "isAnimated", closeOthers: "closeOthers" }, ngContentSelectors: _c0$1, decls: 1, vars: 0, template: function AccordionComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        }
    }, encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionComponent, [{
            type: Component,
            args: [{
                    selector: 'accordion',
                    template: `<ng-content></ng-content>`,
                    // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                    host: {
                        '[attr.aria-multiselectable]': 'closeOthers',
                        role: 'tablist',
                        class: 'panel-group',
                        style: 'display: block'
                    }
                }]
        }], function () { return [{ type: AccordionConfig }]; }, { isAnimated: [{
                type: Input
            }], closeOthers: [{
                type: Input
            }] });
})();

const _c0 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_button_4_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 7);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.isDisabled));
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
    }
}
const _c1 = [[["", "accordion-heading", ""]], "*"];
const _c2 = ["[accordion-heading]", "*"];
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
class AccordionPanelComponent {
    constructor(accordion) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** Provides an ability to use Bootstrap's contextual panel classes
         * (`panel-primary`, `panel-success`, `panel-info`, etc...).
         * List of all available classes [available here]
         * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
         */
        this.panelClass = 'panel-default';
        /** if <code>true</code> — disables accordion group */
        this.isDisabled = false;
        /** Emits when the opened state changes */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /** Is accordion group open or closed. This property supports two-way binding */
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null)
                .then(() => {
                this.isOpenChange.emit(value);
            });
        }
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.accordion.addGroup(this);
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(i0.ɵɵdirectiveInject(AccordionComponent)); };
AccordionPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵclassProp("panel-open", ctx.isOpen);
        }
    }, inputs: { heading: "heading", panelClass: "panelClass", isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef(_c1);
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelementStart(1, "div", 1);
            i0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.toggleOpen(); });
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵelementStart(3, "div", 3);
            i0.ɵɵtemplate(4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
            i0.ɵɵprojection(5);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(6, "div", 5);
            i0.ɵɵelementStart(7, "div", 6);
            i0.ɵɵprojection(8, 1);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.panelClass);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
            i0.ɵɵadvance(2);
            i0.ɵɵattribute("aria-expanded", ctx.isOpen);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.heading);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
        }
    }, directives: [i1.NgClass, i1.NgIf, i2.CollapseDirective], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionPanelComponent, [{
            type: Component,
            args: [{ selector: 'accordion-group, accordion-panel', host: {
                        class: 'panel',
                        style: 'display: block'
                    }, template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\r\n  <div\r\n    class=\"panel-heading card-header\"\r\n    role=\"tab\"\r\n    (click)=\"toggleOpen()\"\r\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\r\n  >\r\n    <div class=\"panel-title\">\r\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\r\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\r\n          {{ heading }}\r\n        </button>\r\n        <ng-content select=\"[accordion-heading]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\r\n    <div class=\"panel-body card-block card-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}\n"] }]
        }], function () {
        return [{ type: AccordionComponent, decorators: [{
                        type: Inject,
                        args: [AccordionComponent]
                    }] }];
    }, { heading: [{
                type: Input
            }], panelClass: [{
                type: Input
            }], isDisabled: [{
                type: Input
            }], isOpenChange: [{
                type: Output
            }], isOpen: [{
                type: HostBinding,
                args: ['class.panel-open']
            }, {
                type: Input
            }] });
})();

class AccordionModule {
    static forRoot() {
        return { ngModule: AccordionModule, providers: [] };
    }
}
AccordionModule.ɵfac = function AccordionModule_Factory(t) { return new (t || AccordionModule)(); };
AccordionModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: AccordionModule });
AccordionModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, CollapseModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule, CollapseModule],
                    declarations: [AccordionComponent, AccordionPanelComponent],
                    exports: [AccordionComponent, AccordionPanelComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(AccordionModule, { declarations: [AccordionComponent, AccordionPanelComponent], imports: [CommonModule, CollapseModule], exports: [AccordionComponent, AccordionPanelComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { AccordionComponent, AccordionConfig, AccordionModule, AccordionPanelComponent };
//# sourceMappingURL=ngx-bootstrap-accordion.mjs.map
