import * as i0 from '@angular/core';
import { Injectable, Component, ChangeDetectionStrategy, Input, Directive, Output, NgModule } from '@angular/core';
import { getBsVer, parseTriggers } from 'ngx-bootstrap/utils';
import * as i3 from 'ngx-bootstrap/positioning';
import { PlacementForBs5, checkMargins, PositioningService } from 'ngx-bootstrap/positioning';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { timer } from 'rxjs';
import * as i2$1 from 'ngx-bootstrap/component-loader';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';

/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
class PopoverConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
PopoverConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PopoverConfig, factory: PopoverConfig.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverConfig, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

function PopoverContainerComponent_h3_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "h3", 3);
        i0.ɵɵtext(1);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate(ctx_r0.title);
    }
}
const _c0 = ["*"];
class PopoverContainerComponent {
    constructor(config) {
        this._placement = 'top';
        Object.assign(this, config);
    }
    set placement(value) {
        if (!this._bsVersions.isBs5) {
            this._placement = value;
        }
        else {
            this._placement = PlacementForBs5[value];
        }
    }
    ;
    get _bsVersions() {
        return getBsVer();
    }
    checkMarginNecessity() {
        return checkMargins(this._placement);
    }
}
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(i0.ɵɵdirectiveInject(PopoverConfig)); };
PopoverContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 7, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵattribute("id", ctx.popoverId);
            i0.ɵɵclassMap("popover in popover-" + ctx._placement + " " + "bs-popover-" + ctx._placement + " " + ctx._placement + " " + ctx.containerClass + " " + ctx.checkMarginNecessity());
            i0.ɵɵclassProp("show", !ctx._bsVersions.isBs3)("bs3", ctx._bsVersions.isBs3);
        }
    }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]], template: function PopoverContainerComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelement(0, "div", 0);
            i0.ɵɵtemplate(1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
            i0.ɵɵelementStart(2, "div", 2);
            i0.ɵɵprojection(3);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.title);
        }
    }, directives: [i2.NgIf], styles: [".bs3.popover-top[_nghost-%COMP%]{margin-bottom:10px}.bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.popover.top[_nghost-%COMP%]{margin-bottom:10px}.popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-4px}.bs3.bs-popover-left[_nghost-%COMP%]{margin-right:.5rem}.bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"], changeDetection: 0 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverContainerComponent, [{
            type: Component,
            args: [{ selector: 'popover-container', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                        '[attr.id]': 'popoverId',
                        '[class]': '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + " " + checkMarginNecessity()',
                        '[class.show]': '!_bsVersions.isBs3',
                        '[class.bs3]': '_bsVersions.isBs3',
                        role: 'tooltip',
                        style: 'display:block;'
                    }, styles: [
                        `
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `
                    ], template: "<div class=\"popover-arrow arrow\"></div>\r\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\r\n<div class=\"popover-content popover-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
        }], function () { return [{ type: PopoverConfig }]; }, { placement: [{
                type: Input
            }], title: [{
                type: Input
            }] });
})();

let id = 0;
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis, _positionService) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._positionService = _positionService;
        /** unique id popover - use for aria-describedby */
        this.popoverId = id++;
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Close popover on outside click
         */
        this.outsideClick = false;
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Css class for popover container
         */
        this.containerClass = '';
        /**
         * Delay before showing the tooltip
         */
        this.delay = 0;
        this._isInited = false;
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
        // fix: no focus on button on Mac OS #1795
        if (typeof window !== 'undefined') {
            _elementRef.nativeElement.addEventListener('click', function () {
                try {
                    _elementRef.nativeElement.focus();
                }
                catch (err) {
                    return;
                }
            });
        }
    }
    /**
     * Returns whether or not the popover is currently being shown
     */
    get isOpen() {
        return this._popover.isShown;
    }
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Set attribute aria-describedBy for element directive and
     * set id for the popover
     */
    setAriaDescribedBy() {
        this._ariaDescribedby = this.isOpen ? `ngx-popover-${this.popoverId}` : void 0;
        if (this._ariaDescribedby) {
            if (this._popover.instance) {
                this._popover.instance.popoverId = this._ariaDescribedby;
            }
            this._renderer.setAttribute(this._elementRef.nativeElement, 'aria-describedby', this._ariaDescribedby);
        }
        else {
            this._renderer.removeAttribute(this._elementRef.nativeElement, 'aria-describedby');
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    show() {
        if (this._popover.isShown || !this.popover || this._delayTimeoutId) {
            return;
        }
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this.adaptivePosition
                },
                preventOverflow: {
                    enabled: this.adaptivePosition,
                    boundariesElement: this.boundariesElement || 'scrollParent'
                }
            }
        });
        const showPopover = () => {
            if (this._delayTimeoutId) {
                this._delayTimeoutId = undefined;
            }
            this._popover
                .attach(PopoverContainerComponent)
                .to(this.container)
                .position({ attachment: this.placement })
                .show({
                content: this.popover,
                context: this.popoverContext,
                placement: this.placement,
                title: this.popoverTitle,
                containerClass: this.containerClass
            });
            if (!this.adaptivePosition && this._popover._componentRef) {
                this._positionService.calcPosition();
                this._positionService.deletePositionElement(this._popover._componentRef.location);
            }
            this.isOpen = true;
            this.setAriaDescribedBy();
        };
        const cancelDelayedTooltipShowing = () => {
            if (this._popoverCancelShowFn) {
                this._popoverCancelShowFn();
            }
        };
        if (this.delay) {
            const _timer = timer(this.delay).subscribe(() => {
                showPopover();
                cancelDelayedTooltipShowing();
            });
            if (this.triggers) {
                parseTriggers(this.triggers)
                    .forEach((trigger) => {
                    if (!trigger.close) {
                        return;
                    }
                    this._popoverCancelShowFn = this._renderer.listen(this._elementRef.nativeElement, trigger.close, () => {
                        _timer.unsubscribe();
                        cancelDelayedTooltipShowing();
                    });
                });
            }
        }
        else {
            showPopover();
        }
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (this.isOpen) {
            this._popover.hide();
            this.setAriaDescribedBy();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._popover.listen({
            triggers: this.triggers,
            outsideClick: this.outsideClick,
            show: () => this.show(),
            hide: () => this.hide()
        });
    }
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.ɵfac = function PopoverDirective_Factory(t) { return new (t || PopoverDirective)(i0.ɵɵdirectiveInject(PopoverConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2$1.ComponentLoaderFactory), i0.ɵɵdirectiveInject(i3.PositioningService)); };
PopoverDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: PopoverDirective, selectors: [["", "popover", ""]], inputs: { adaptivePosition: "adaptivePosition", boundariesElement: "boundariesElement", popover: "popover", popoverContext: "popoverContext", popoverTitle: "popoverTitle", placement: "placement", outsideClick: "outsideClick", triggers: "triggers", container: "container", containerClass: "containerClass", isOpen: "isOpen", delay: "delay" }, outputs: { onShown: "onShown", onHidden: "onHidden" }, exportAs: ["bs-popover"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverDirective, [{
            type: Directive,
            args: [{ selector: '[popover]', exportAs: 'bs-popover' }]
        }], function () { return [{ type: PopoverConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2$1.ComponentLoaderFactory }, { type: i3.PositioningService }]; }, { adaptivePosition: [{
                type: Input
            }], boundariesElement: [{
                type: Input
            }], popover: [{
                type: Input
            }], popoverContext: [{
                type: Input
            }], popoverTitle: [{
                type: Input
            }], placement: [{
                type: Input
            }], outsideClick: [{
                type: Input
            }], triggers: [{
                type: Input
            }], container: [{
                type: Input
            }], containerClass: [{
                type: Input
            }], isOpen: [{
                type: Input
            }], delay: [{
                type: Input
            }], onShown: [{
                type: Output
            }], onHidden: [{
                type: Output
            }] });
})();

class PopoverModule {
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [ComponentLoaderFactory, PositioningService]
        };
    }
}
PopoverModule.ɵfac = function PopoverModule_Factory(t) { return new (t || PopoverModule)(); };
PopoverModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PopoverModule });
PopoverModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [PopoverDirective, PopoverContainerComponent],
                    exports: [PopoverDirective],
                    entryComponents: [PopoverContainerComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PopoverModule, { declarations: [PopoverDirective, PopoverContainerComponent], imports: [CommonModule], exports: [PopoverDirective] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PopoverConfig, PopoverContainerComponent, PopoverDirective, PopoverModule };
//# sourceMappingURL=ngx-bootstrap-popover.mjs.map
