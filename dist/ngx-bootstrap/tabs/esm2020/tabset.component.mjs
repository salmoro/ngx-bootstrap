import { Component, HostBinding, Input, Renderer2, ElementRef } from '@angular/core';
import { TabsetConfig } from './tabset.config';
import * as i0 from "@angular/core";
import * as i1 from "./tabset.config";
import * as i2 from "@angular/common";
import * as i3 from "./ng-transclude.directive";
function TabsetComponent_li_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 7);
    i0.ɵɵlistener("click", function TabsetComponent_li_1_span_4_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r6); const tabz_r1 = i0.ɵɵnextContext().$implicit; const ctx_r4 = i0.ɵɵnextContext(); $event.preventDefault(); return ctx_r4.removeTab(tabz_r1); });
    i0.ɵɵtext(1, " \u274C");
    i0.ɵɵelementEnd();
} }
const _c0 = function (a1) { return ["nav-item", a1]; };
function TabsetComponent_li_1_Template(rf, ctx) { if (rf & 1) {
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
} if (rf & 2) {
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
} }
const _c1 = ["*"];
// todo: add active event to tab
// todo: fix? mixing static and dynamic tabs position tabs in order of creation
export class TabsetComponent {
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
TabsetComponent.ɵfac = function TabsetComponent_Factory(t) { return new (t || TabsetComponent)(i0.ɵɵdirectiveInject(i1.TabsetConfig), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef)); };
TabsetComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TabsetComponent, selectors: [["tabset"]], hostVars: 2, hostBindings: function TabsetComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("tab-container", ctx.clazz);
    } }, inputs: { vertical: "vertical", justified: "justified", type: "type" }, ngContentSelectors: _c1, decls: 4, vars: 3, consts: [["role", "tablist", 1, "nav", 3, "ngClass", "click"], [3, "ngClass", "active", "disabled", "keydown", 4, "ngFor", "ngForOf"], [1, "tab-content"], [3, "ngClass", "keydown"], ["href", "javascript:void(0);", "role", "tab", 1, "nav-link", 3, "click"], [3, "ngTransclude"], ["class", "bs-remove-tab", 3, "click", 4, "ngIf"], [1, "bs-remove-tab", 3, "click"]], template: function TabsetComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "ul", 0);
        i0.ɵɵlistener("click", function TabsetComponent_Template_ul_click_0_listener($event) { return $event.preventDefault(); });
        i0.ɵɵtemplate(1, TabsetComponent_li_1_Template, 5, 17, "li", 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.classMap);
        i0.ɵɵattribute("aria-label", ctx.ariaLabel);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.tabs);
    } }, directives: [i2.NgClass, i2.NgForOf, i3.NgTranscludeDirective, i2.NgIf], styles: ["[_nghost-%COMP%]   .nav-tabs[_ngcontent-%COMP%]   .nav-item.disabled[_ngcontent-%COMP%]   a.disabled[_ngcontent-%COMP%]{cursor:default}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabsetComponent, [{
        type: Component,
        args: [{ selector: 'tabset', template: "<ul class=\"nav\" [ngClass]=\"classMap\"\r\n    (click)=\"$event.preventDefault()\"\r\n    [attr.aria-label]=\"ariaLabel\"\r\n    role=\"tablist\">\r\n  <li *ngFor=\"let tabz of tabs; let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\"\r\n      [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (keydown)=\"keyNavActions($event, i)\">\r\n    <a href=\"javascript:void(0);\" class=\"nav-link\" role=\"tab\"\r\n       [attr.aria-controls]=\"tabz.id ? tabz.id : ''\"\r\n       [attr.aria-selected]=\"!!tabz.active\"\r\n       [attr.id]=\"tabz.id ? tabz.id + '-link' : ''\"\r\n       [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"\r\n       (click)=\"tabz.active = true\">\r\n      <span [ngTransclude]=\"tabz.headingRef\">{{ tabz.heading }}</span>\r\n      <span *ngIf=\"tabz.removable\" (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"bs-remove-tab\"> &#10060;</span>\r\n    </a>\r\n  </li>\r\n</ul>\r\n<div class=\"tab-content\">\r\n  <ng-content></ng-content>\r\n</div>\r\n", styles: [":host .nav-tabs .nav-item.disabled a.disabled{cursor:default}\n"] }]
    }], function () { return [{ type: i1.TabsetConfig }, { type: i0.Renderer2 }, { type: i0.ElementRef }]; }, { vertical: [{
            type: Input
        }], justified: [{
            type: Input
        }], type: [{
            type: Input
        }], clazz: [{
            type: HostBinding,
            args: ['class.tab-container']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFic2V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90YWJzL3RhYnNldC5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi9zcmMvdGFicy90YWJzZXQuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFhLFNBQVMsRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHaEcsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7O0lDVXpDLCtCQUF1RztJQUExRSw2TUFBUyx1QkFBdUIsU0FBRSx5QkFBZSxJQUFFO0lBQXdCLHVCQUFRO0lBQUEsaUJBQU87Ozs7O0lBVDNILDZCQUN1RztJQUFyQyxxTkFBVyxrQ0FBd0IsSUFBQztJQUNwRyw0QkFLZ0M7SUFBN0IsK0xBQXVCLElBQUksSUFBQztJQUM3QiwrQkFBdUM7SUFBQSxZQUFrQjtJQUFBLGlCQUFPO0lBQ2hFLHVFQUF1SDtJQUN6SCxpQkFBSTtJQUNOLGlCQUFLOzs7SUFWRCx3Q0FBNEIsOEJBQUE7SUFEYSxnRkFBZ0Q7SUFNeEYsZUFBNEI7SUFBNUIsd0NBQTRCLDhCQUFBO0lBSDVCLDZEQUE2QyxtQ0FBQSw4Q0FBQTtJQUt4QyxlQUFnQztJQUFoQyxpREFBZ0M7SUFBQyxlQUFrQjtJQUFsQixxQ0FBa0I7SUFDbEQsZUFBb0I7SUFBcEIsd0NBQW9COzs7QURUakMsZ0NBQWdDO0FBQ2hDLCtFQUErRTtBQU0vRSxNQUFNLE9BQU8sZUFBZTtJQXFEMUIsWUFDRSxNQUFvQixFQUNaLFFBQW1CLEVBQ25CLFVBQXNCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQWpCSSxVQUFLLEdBQUcsSUFBSSxDQUFDO1FBRWpELFNBQUksR0FBbUIsRUFBRSxDQUFDO1FBQzFCLGFBQVEsR0FB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QUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxLQUFLLEtBQUssRUFBRTtnQkFDekMsT0FBTyxJQUFJLENBQUM7YUFDYjtTQUNGO1FBRUQsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRVMsV0FBVztRQUNuQixJQUFJLENBQUMsUUFBUSxHQUFHO1lBQ2QsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRO1lBQzVCLGFBQWEsRUFBRSxJQUFJLENBQUMsUUFBUTtZQUM1QixlQUFlLEVBQUUsSUFBSSxDQUFDLFNBQVM7WUFDL0IsQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUk7U0FDM0IsQ0FBQztJQUNKLENBQUM7OzhFQXRQVSxlQUFlO2tFQUFmLGVBQWU7Ozs7UUNYNUIsNkJBR21CO1FBRmYsOEZBQVMsdUJBQXVCLElBQUM7UUFHbkMsK0RBV0s7UUFDUCxpQkFBSztRQUNMLDhCQUF5QjtRQUN2QixrQkFBeUI7UUFDM0IsaUJBQU07O1FBbkJVLHNDQUFvQjtRQUVoQywyQ0FBNkI7UUFFVixlQUFTO1FBQVQsa0NBQVM7O3VGRE9uQixlQUFlO2NBTDNCLFNBQVM7MkJBQ0UsUUFBUTtnSEFPZCxRQUFRO2tCQURYLEtBQUs7WUFXRixTQUFTO2tCQURaLEtBQUs7WUFXRixJQUFJO2tCQURQLEtBQUs7WUFpQjhCLEtBQUs7a0JBQXhDLFdBQVc7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBIb3N0QmluZGluZywgSW5wdXQsIE9uRGVzdHJveSwgUmVuZGVyZXIyLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBUYWJEaXJlY3RpdmUgfSBmcm9tICcuL3RhYi5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBUYWJzZXRDb25maWcgfSBmcm9tICcuL3RhYnNldC5jb25maWcnO1xyXG4vLyB0b2RvOiBhZGQgYWN0aXZlIGV2ZW50IHRvIHRhYlxyXG4vLyB0b2RvOiBmaXg/IG1peGluZyBzdGF0aWMgYW5kIGR5bmFtaWMgdGFicyBwb3NpdGlvbiB0YWJzIGluIG9yZGVyIG9mIGNyZWF0aW9uXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGFic2V0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vdGFic2V0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi90YWJzLnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgVGFic2V0Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICAvKiogaWYgdHJ1ZSB0YWJzIHdpbGwgYmUgcGxhY2VkIHZlcnRpY2FsbHkgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB2ZXJ0aWNhbCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcclxuICB9XHJcbiAgc2V0IHZlcnRpY2FsKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLl92ZXJ0aWNhbCA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIGlmIHRydWUgdGFicyBmaWxsIHRoZSBjb250YWluZXIgYW5kIGhhdmUgYSBjb25zaXN0ZW50IHdpZHRoICovXHJcbiAgQElucHV0KClcclxuICBnZXQganVzdGlmaWVkKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2p1c3RpZmllZDtcclxuICB9XHJcbiAgc2V0IGp1c3RpZmllZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fanVzdGlmaWVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvKiogbmF2aWdhdGlvbiBjb250ZXh0IGNsYXNzOiAndGFicycgb3IgJ3BpbGxzJyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLl90eXBlID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNLZXlzQWxsb3dlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9pc0tleXNBbGxvd2VkO1xyXG4gIH1cclxuXHJcbiAgc2V0IGlzS2V5c0FsbG93ZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuX2lzS2V5c0FsbG93ZWQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MudGFiLWNvbnRhaW5lcicpIGNsYXp6ID0gdHJ1ZTtcclxuXHJcbiAgdGFiczogVGFiRGlyZWN0aXZlW10gPSBbXTtcclxuICBjbGFzc01hcDogeyBba2V5OiBzdHJpbmddOiBib29sZWFuIH0gPSB7fTtcclxuXHJcbiAgLyoqIGFyaWEgbGFiZWwgZm9yIHRhYiBsaXN0ICovXHJcbiAgYXJpYUxhYmVsID0gJ1RhYnMnO1xyXG5cclxuICBwcm90ZWN0ZWQgaXNEZXN0cm95ZWQgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgX3ZlcnRpY2FsID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIF9qdXN0aWZpZWQgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQgX3R5cGUgPSAndGFicyc7XHJcbiAgcHJvdGVjdGVkIF9pc0tleXNBbGxvd2VkID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb25maWc6IFRhYnNldENvbmZpZyxcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZlxyXG4gICkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIGFkZFRhYih0YWI6IFRhYkRpcmVjdGl2ZSk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzLnB1c2godGFiKTtcclxuICAgIHRhYi5hY3RpdmUgPSB0aGlzLnRhYnMubGVuZ3RoID09PSAxICYmICF0YWIuYWN0aXZlO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlVGFiKFxyXG4gICAgdGFiOiBUYWJEaXJlY3RpdmUsXHJcbiAgICBvcHRpb25zID0geyByZXNlbGVjdDogdHJ1ZSwgZW1pdDogdHJ1ZSB9XHJcbiAgKTogdm9pZCB7XHJcbiAgICBjb25zdCBpbmRleCA9IHRoaXMudGFicy5pbmRleE9mKHRhYik7XHJcbiAgICBpZiAoaW5kZXggPT09IC0xIHx8IHRoaXMuaXNEZXN0cm95ZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgLy8gU2VsZWN0IGEgbmV3IHRhYiBpZiB0aGUgdGFiIHRvIGJlIHJlbW92ZWQgaXMgc2VsZWN0ZWQgYW5kIG5vdCBkZXN0cm95ZWRcclxuICAgIGlmIChvcHRpb25zLnJlc2VsZWN0ICYmIHRhYi5hY3RpdmUgJiYgdGhpcy5oYXNBdmFpbGFibGVUYWJzKGluZGV4KSkge1xyXG4gICAgICBjb25zdCBuZXdBY3RpdmVJbmRleCA9IHRoaXMuZ2V0Q2xvc2VzdFRhYkluZGV4KGluZGV4KTtcclxuICAgICAgdGhpcy50YWJzW25ld0FjdGl2ZUluZGV4XS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuZW1pdCkge1xyXG4gICAgICB0YWIucmVtb3ZlZC5lbWl0KHRhYik7XHJcbiAgICB9XHJcbiAgICB0aGlzLnRhYnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIGlmICh0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDaGlsZChcclxuICAgICAgICB0YWIuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUsXHJcbiAgICAgICAgdGFiLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgICBrZXlOYXZBY3Rpb25zKGV2ZW50OiBLZXlib2FyZEV2ZW50LCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuaXNLZXlzQWxsb3dlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBsaXN0OiBIVE1MRWxlbWVudFtdID0gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWxpbmsnKSk7XHJcbiAgICAvLyBjb25zdCBhY3RpdmVFbExpc3QgPSBsaXN0LmZpbHRlcigoZWw6IEhUTUxFbGVtZW50KSA9PiAhZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKTtcclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicgfHwgZXZlbnQua2V5Q29kZSA9PT0gMzIgfHwgZXZlbnQua2V5ID09PSAnU3BhY2UnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRUYWIgPSBsaXN0WyhpbmRleCkgJSBsaXN0Lmxlbmd0aF07XHJcbiAgICAgIGN1cnJlbnRUYWIuY2xpY2soKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzkgfHwgZXZlbnQua2V5ID09PSAnUmlnaHRBcnJvdycpIHtcclxuICAgICAgbGV0IG5leHRUYWI6IEhUTUxFbGVtZW50O1xyXG4gICAgICBsZXQgc2hpZnQgPSAxO1xyXG5cclxuICAgICAgZG8ge1xyXG4gICAgICAgIG5leHRUYWIgPSBsaXN0WyhpbmRleCArIHNoaWZ0KSAlIGxpc3QubGVuZ3RoXTtcclxuXHJcbiAgICAgICAgc2hpZnQrKztcclxuICAgICAgfSB3aGlsZSAobmV4dFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpO1xyXG5cclxuICAgICAgbmV4dFRhYi5mb2N1cygpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXkgPT09ICdMZWZ0QXJyb3cnKSB7XHJcbiAgICAgIGxldCBwcmV2aW91c1RhYjogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGxldCBzaGlmdCA9IDE7XHJcbiAgICAgIGxldCBpID0gaW5kZXg7XHJcblxyXG4gICAgICBkbyB7XHJcbiAgICAgICAgaWYgKChpIC0gc2hpZnQpIDwgMCkge1xyXG4gICAgICAgICAgaSA9IGxpc3QubGVuZ3RoIC0gMTtcclxuICAgICAgICAgIHByZXZpb3VzVGFiID0gbGlzdFtpXTtcclxuICAgICAgICAgIHNoaWZ0ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcHJldmlvdXNUYWIgPSBsaXN0W2kgLSBzaGlmdF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzaGlmdCsrO1xyXG4gICAgICB9IHdoaWxlIChwcmV2aW91c1RhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpO1xyXG5cclxuICAgICAgcHJldmlvdXNUYWIuZm9jdXMoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzYgfHwgZXZlbnQua2V5ID09PSAnSG9tZScpIHtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGxldCBmaXJzdFRhYjogSFRNTEVsZW1lbnQ7XHJcbiAgICAgIGxldCBzaGlmdCA9IDA7XHJcblxyXG4gICAgICBkbyB7XHJcbiAgICAgICAgZmlyc3RUYWIgPSBsaXN0W3NoaWZ0ICUgbGlzdC5sZW5ndGhdO1xyXG5cclxuICAgICAgICBzaGlmdCsrO1xyXG4gICAgICB9IHdoaWxlIChmaXJzdFRhYi5jbGFzc0xpc3QuY29udGFpbnMoJ2Rpc2FibGVkJykpO1xyXG5cclxuICAgICAgZmlyc3RUYWIuZm9jdXMoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMzUgfHwgZXZlbnQua2V5ID09PSAnRW5kJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgbGV0IGxhc3RUYWI6IEhUTUxFbGVtZW50O1xyXG4gICAgICBsZXQgc2hpZnQgPSAxO1xyXG4gICAgICBsZXQgaSA9IGluZGV4O1xyXG5cclxuICAgICAgZG8ge1xyXG4gICAgICAgIGlmICgoaSAtIHNoaWZ0KSA8IDApIHtcclxuICAgICAgICAgIGkgPSBsaXN0Lmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICBsYXN0VGFiID0gbGlzdFtpXTtcclxuICAgICAgICAgIHNoaWZ0ID0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGFzdFRhYiA9IGxpc3RbaSAtIHNoaWZ0XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNoaWZ0Kys7XHJcbiAgICAgIH0gd2hpbGUgKGxhc3RUYWIuY2xhc3NMaXN0LmNvbnRhaW5zKCdkaXNhYmxlZCcpKTtcclxuXHJcbiAgICAgIGxhc3RUYWIuZm9jdXMoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDYgfHwgZXZlbnQua2V5ID09PSAnRGVsZXRlJykge1xyXG4gICAgICBpZiAodGhpcy50YWJzW2luZGV4XS5yZW1vdmFibGUpIHtcclxuICAgICAgICB0aGlzLnJlbW92ZVRhYih0aGlzLnRhYnNbaW5kZXhdKTtcclxuXHJcbiAgICAgICAgaWYgKGxpc3RbaW5kZXggKyAxXSkge1xyXG4gICAgICAgICAgbGlzdFsoaW5kZXggKyAxKSAlIGxpc3QubGVuZ3RoXS5mb2N1cygpO1xyXG5cclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsaXN0W2xpc3QubGVuZ3RoIC0gMV0pIHtcclxuICAgICAgICAgIGxpc3RbMF0uZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBnZXRDbG9zZXN0VGFiSW5kZXgoaW5kZXg6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCB0YWJzTGVuZ3RoID0gdGhpcy50YWJzLmxlbmd0aDtcclxuICAgIGlmICghdGFic0xlbmd0aCkge1xyXG4gICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yIChsZXQgc3RlcCA9IDE7IHN0ZXAgPD0gdGFic0xlbmd0aDsgc3RlcCArPSAxKSB7XHJcbiAgICAgIGNvbnN0IHByZXZJbmRleCA9IGluZGV4IC0gc3RlcDtcclxuICAgICAgY29uc3QgbmV4dEluZGV4ID0gaW5kZXggKyBzdGVwO1xyXG4gICAgICBpZiAodGhpcy50YWJzW3ByZXZJbmRleF0gJiYgIXRoaXMudGFic1twcmV2SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXZJbmRleDtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy50YWJzW25leHRJbmRleF0gJiYgIXRoaXMudGFic1tuZXh0SW5kZXhdLmRpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIG5leHRJbmRleDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAtMTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXNBdmFpbGFibGVUYWJzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IHRhYnNMZW5ndGggPSB0aGlzLnRhYnMubGVuZ3RoO1xyXG4gICAgaWYgKCF0YWJzTGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhYnNMZW5ndGg7IGkgKz0gMSkge1xyXG4gICAgICBpZiAoIXRoaXMudGFic1tpXS5kaXNhYmxlZCAmJiBpICE9PSBpbmRleCkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHNldENsYXNzTWFwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHtcclxuICAgICAgJ25hdi1zdGFja2VkJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ2ZsZXgtY29sdW1uJzogdGhpcy52ZXJ0aWNhbCxcclxuICAgICAgJ25hdi1qdXN0aWZpZWQnOiB0aGlzLmp1c3RpZmllZCxcclxuICAgICAgW2BuYXYtJHt0aGlzLnR5cGV9YF06IHRydWVcclxuICAgIH07XHJcbiAgfVxyXG59XHJcbiIsIjx1bCBjbGFzcz1cIm5hdlwiIFtuZ0NsYXNzXT1cImNsYXNzTWFwXCJcclxuICAgIChjbGljayk9XCIkZXZlbnQucHJldmVudERlZmF1bHQoKVwiXHJcbiAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFyaWFMYWJlbFwiXHJcbiAgICByb2xlPVwidGFibGlzdFwiPlxyXG4gIDxsaSAqbmdGb3I9XCJsZXQgdGFieiBvZiB0YWJzOyBsZXQgaSA9IGluZGV4XCIgW25nQ2xhc3NdPVwiWyduYXYtaXRlbScsIHRhYnouY3VzdG9tQ2xhc3MgfHwgJyddXCJcclxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWJ6LmFjdGl2ZVwiIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWJ6LmRpc2FibGVkXCIgKGtleWRvd24pPVwia2V5TmF2QWN0aW9ucygkZXZlbnQsIGkpXCI+XHJcbiAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApO1wiIGNsYXNzPVwibmF2LWxpbmtcIiByb2xlPVwidGFiXCJcclxuICAgICAgIFthdHRyLmFyaWEtY29udHJvbHNdPVwidGFiei5pZCA/IHRhYnouaWQgOiAnJ1wiXHJcbiAgICAgICBbYXR0ci5hcmlhLXNlbGVjdGVkXT1cIiEhdGFiei5hY3RpdmVcIlxyXG4gICAgICAgW2F0dHIuaWRdPVwidGFiei5pZCA/IHRhYnouaWQgKyAnLWxpbmsnIDogJydcIlxyXG4gICAgICAgW2NsYXNzLmFjdGl2ZV09XCJ0YWJ6LmFjdGl2ZVwiIFtjbGFzcy5kaXNhYmxlZF09XCJ0YWJ6LmRpc2FibGVkXCJcclxuICAgICAgIChjbGljayk9XCJ0YWJ6LmFjdGl2ZSA9IHRydWVcIj5cclxuICAgICAgPHNwYW4gW25nVHJhbnNjbHVkZV09XCJ0YWJ6LmhlYWRpbmdSZWZcIj57eyB0YWJ6LmhlYWRpbmcgfX08L3NwYW4+XHJcbiAgICAgIDxzcGFuICpuZ0lmPVwidGFiei5yZW1vdmFibGVcIiAoY2xpY2spPVwiJGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IHJlbW92ZVRhYih0YWJ6KTtcIiBjbGFzcz1cImJzLXJlbW92ZS10YWJcIj4gJiMxMDA2MDs8L3NwYW4+XHJcbiAgICA8L2E+XHJcbiAgPC9saT5cclxuPC91bD5cclxuPGRpdiBjbGFzcz1cInRhYi1jb250ZW50XCI+XHJcbiAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG48L2Rpdj5cclxuIl19