import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, HostListener, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { RatingConfig } from './rating.config';
import * as i0 from "@angular/core";
import * as i1 from "./rating.config";
import * as i2 from "@angular/common";
function RatingComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const value_r3 = ctx.value;
    const index_r4 = ctx.index;
    i0.ɵɵtextInterpolate(index_r4 < value_r3 ? "\u2605" : "\u2606");
} }
function RatingComponent_ng_template_3_ng_template_3_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return { index: a0, value: a1 }; };
function RatingComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 4);
    i0.ɵɵlistener("mouseenter", function RatingComponent_ng_template_3_Template_span_mouseenter_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const index_r6 = restoredCtx.index; const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.enter(index_r6 + 1); })("click", function RatingComponent_ng_template_3_Template_span_click_2_listener() { const restoredCtx = i0.ɵɵrestoreView(_r9); const index_r6 = restoredCtx.index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.rate(index_r6 + 1); });
    i0.ɵɵtemplate(3, RatingComponent_ng_template_3_ng_template_3_Template, 0, 0, "ng-template", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const r_r5 = ctx.$implicit;
    const index_r6 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("(", index_r6 < ctx_r2.value ? "*" : " ", ")");
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("cursor", ctx_r2.readonly ? "default" : "pointer");
    i0.ɵɵclassProp("active", index_r6 < ctx_r2.value);
    i0.ɵɵproperty("title", r_r5.title);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customTemplate || _r0)("ngTemplateOutletContext", i0.ɵɵpureFunction2(8, _c0, index_r6, ctx_r2.value));
} }
export const RATING_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
};
export class RatingComponent {
    constructor(changeDetection, config) {
        this.changeDetection = changeDetection;
        /** number of icons */
        this.max = 5;
        /** if true will not react on any user events */
        this.readonly = false;
        /** array of icons titles, default: (["one", "two", "three", "four", "five"]) */
        this.titles = [];
        /** fired when icon selected, $event:number equals to selected rating */
        this.onHover = new EventEmitter();
        /** fired when icon selected, $event:number equals to previous rating value */
        this.onLeave = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        /** aria label for rating */
        this.ariaLabel = 'rating';
        this.range = [];
        this.value = 0;
        Object.assign(this, config);
    }
    onKeydown(event) {
        if ([37, 38, 39, 40].indexOf(event.which) === -1) {
            return;
        }
        event.preventDefault();
        event.stopPropagation();
        const sign = event.which === 38 || event.which === 39 ? 1 : -1;
        this.rate(this.value + sign);
    }
    ngOnInit() {
        this.max = this.max || 5;
        this.titles =
            typeof this.titles !== 'undefined' && this.titles.length > 0
                ? this.titles
                : [];
        this.range = this.buildTemplateObjects(this.max);
    }
    // model -> view
    writeValue(value) {
        if (value % 1 !== value) {
            this.value = Math.round(value);
            this.preValue = value;
            this.changeDetection.markForCheck();
            return;
        }
        this.preValue = value;
        this.value = value;
        this.changeDetection.markForCheck();
    }
    enter(value) {
        if (!this.readonly) {
            this.value = value;
            this.changeDetection.markForCheck();
            this.onHover.emit(value);
        }
    }
    reset() {
        if (typeof this.preValue === 'number') {
            this.value = Math.round(this.preValue);
            this.changeDetection.markForCheck();
            this.onLeave.emit(this.value);
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    rate(value) {
        if (!this.readonly && this.range
            && value >= 0 && value <= this.range.length) {
            this.writeValue(value);
            this.onChange(value);
        }
    }
    buildTemplateObjects(max) {
        const result = [];
        for (let i = 0; i < max; i++) {
            result.push({
                index: i,
                title: this.titles[i] || i + 1
            });
        }
        return result;
    }
}
RatingComponent.ɵfac = function RatingComponent_Factory(t) { return new (t || RatingComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.RatingConfig)); };
RatingComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RatingComponent, selectors: [["rating"]], hostBindings: function RatingComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function RatingComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } }, inputs: { max: "max", readonly: "readonly", titles: "titles", customTemplate: "customTemplate" }, outputs: { onHover: "onHover", onLeave: "onLeave" }, features: [i0.ɵɵProvidersFeature([RATING_CONTROL_VALUE_ACCESSOR])], decls: 4, vars: 4, consts: [["tabindex", "0", "role", "slider", "aria-valuemin", "0", 3, "mouseleave", "keydown"], ["star", ""], ["ngFor", "", 3, "ngForOf"], [1, "sr-only", "visually-hidden"], [1, "bs-rating-star", 3, "title", "mouseenter", "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function RatingComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 0);
        i0.ɵɵlistener("mouseleave", function RatingComponent_Template_span_mouseleave_0_listener() { return ctx.reset(); })("keydown", function RatingComponent_Template_span_keydown_0_listener($event) { return ctx.onKeydown($event); });
        i0.ɵɵtemplate(1, RatingComponent_ng_template_1_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, RatingComponent_ng_template_3_Template, 4, 11, "ng-template", 2);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵattribute("aria-label", ctx.ariaLabel)("aria-valuemax", ctx.range.length)("aria-valuenow", ctx.value);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.range);
    } }, directives: [i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RatingComponent, [{
        type: Component,
        args: [{ selector: 'rating', providers: [RATING_CONTROL_VALUE_ACCESSOR], changeDetection: ChangeDetectionStrategy.OnPush, template: "<span (mouseleave)=\"reset()\" (keydown)=\"onKeydown($event)\" tabindex=\"0\"\r\n      role=\"slider\" aria-valuemin=\"0\"\r\n      [attr.aria-label]=\"ariaLabel\"\r\n      [attr.aria-valuemax]=\"range.length\"\r\n      [attr.aria-valuenow]=\"value\">\r\n  <ng-template #star let-value=\"value\" let-index=\"index\">{{ index < value ? '&#9733;' : '&#9734;' }}</ng-template>\r\n  <ng-template ngFor let-r [ngForOf]=\"range\" let-index=\"index\">\r\n    <span class=\"sr-only visually-hidden\">({{ index < value ? '*' : ' ' }})</span>\r\n    <span class=\"bs-rating-star\"\r\n          (mouseenter)=\"enter(index + 1)\"\r\n          (click)=\"rate(index + 1)\"\r\n          [title]=\"r.title\"\r\n          [style.cursor]=\"readonly ? 'default' : 'pointer'\"\r\n          [class.active]=\"index < value\">\r\n      <ng-template [ngTemplateOutlet]=\"customTemplate || star\"\r\n                   [ngTemplateOutletContext]=\"{index: index, value: value}\">\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</span>\r\n" }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.RatingConfig }]; }, { max: [{
            type: Input
        }], readonly: [{
            type: Input
        }], titles: [{
            type: Input
        }], customTemplate: [{
            type: Input
        }], onHover: [{
            type: Output
        }], onLeave: [{
            type: Output
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmF0aW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUVOLFdBQVcsRUFDWixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7OztJQ1ZVLFlBQTJDOzs7O0lBQTNDLCtEQUEyQzs7Ozs7O0lBRWhHLCtCQUFzQztJQUFBLFlBQWlDO0lBQUEsaUJBQU87SUFDOUUsK0JBS3FDO0lBSi9CLG9PQUFjLHdCQUFjLENBQUMsQ0FBQyxJQUFDLDhNQUN0Qix3QkFBYSxDQUFDLENBQUMsSUFETztJQUtuQyw4RkFFYztJQUNoQixpQkFBTzs7Ozs7O0lBVitCLGVBQWlDO0lBQWpDLG9FQUFpQztJQUtqRSxlQUFpRDtJQUFqRCxpRUFBaUQ7SUFDakQsaURBQThCO0lBRjlCLGtDQUFpQjtJQUdSLGVBQTJDO0lBQTNDLCtEQUEyQywrRUFBQTs7QURHOUQsTUFBTSxDQUFDLE1BQU0sNkJBQTZCLEdBQWE7SUFDckQsT0FBTyxFQUFFLGlCQUFpQjtJQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQztJQUM5QyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFRRixNQUFNLE9BQU8sZUFBZTtJQXVCMUIsWUFBb0IsZUFBa0MsRUFBRSxNQUFvQjtRQUF4RCxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUF0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Qyx1RkFBWSxxQkFBaUIsSUFBN0I7UUFLMUIsaUhBQWdIO1FBQ2hILGlGQVljO1FBQ2hCLGlCQUFPOztRQWpCRCwyQ0FBNkIsbUNBQUEsNEJBQUE7UUFJUixlQUFpQjtRQUFqQixtQ0FBaUI7O3VGRHVCL0IsZUFBZTtjQU4zQixTQUFTOzJCQUNFLFFBQVEsYUFFUCxDQUFDLDZCQUE2QixDQUFDLG1CQUN6Qix1QkFBdUIsQ0FBQyxNQUFNOytGQUl0QyxHQUFHO2tCQUFYLEtBQUs7WUFFRyxRQUFRO2tCQUFoQixLQUFLO1lBRUcsTUFBTTtrQkFBZCxLQUFLO1lBR0csY0FBYztrQkFBdEIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07WUFFRyxPQUFPO2tCQUFoQixNQUFNO1lBZVAsU0FBUztrQkFEUixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbnB1dCxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFByb3ZpZGVyLFxyXG4gIFRlbXBsYXRlUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgUmF0aW5nUmVzdWx0cyB9IGZyb20gJy4vbW9kZWxzJztcclxuaW1wb3J0IHsgUmF0aW5nQ29uZmlnIH0gZnJvbSAnLi9yYXRpbmcuY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBSQVRJTkdfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gUmF0aW5nQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyYXRpbmcnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9yYXRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1JBVElOR19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmF0aW5nQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgLyoqIG51bWJlciBvZiBpY29ucyAqL1xyXG4gIEBJbnB1dCgpIG1heCA9IDU7XHJcbiAgLyoqIGlmIHRydWUgd2lsbCBub3QgcmVhY3Qgb24gYW55IHVzZXIgZXZlbnRzICovXHJcbiAgQElucHV0KCkgcmVhZG9ubHkgPSBmYWxzZTtcclxuICAvKiogYXJyYXkgb2YgaWNvbnMgdGl0bGVzLCBkZWZhdWx0OiAoW1wib25lXCIsIFwidHdvXCIsIFwidGhyZWVcIiwgXCJmb3VyXCIsIFwiZml2ZVwiXSkgKi9cclxuICBASW5wdXQoKSB0aXRsZXM6IHN0cmluZ1tdID0gW107XHJcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgaWNvbnMgKi9cclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgQElucHV0KCkgY3VzdG9tVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIC8qKiBmaXJlZCB3aGVuIGljb24gc2VsZWN0ZWQsICRldmVudDpudW1iZXIgZXF1YWxzIHRvIHNlbGVjdGVkIHJhdGluZyAqL1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gaWNvbiBzZWxlY3RlZCwgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gcHJldmlvdXMgcmF0aW5nIHZhbHVlICovXHJcbiAgQE91dHB1dCgpIG9uTGVhdmUgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgb25DaGFuZ2UgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgb25Ub3VjaGVkID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIC8qKiBhcmlhIGxhYmVsIGZvciByYXRpbmcgKi9cclxuICBhcmlhTGFiZWwgPSAncmF0aW5nJztcclxuICByYW5nZTogUmF0aW5nUmVzdWx0c1tdID0gW107XHJcbiAgdmFsdWUgPSAwO1xyXG4gIHByb3RlY3RlZCBwcmVWYWx1ZT86IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdG9yUmVmLCBjb25maWc6IFJhdGluZ0NvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICBpZiAoWzM3LCAzOCwgMzksIDQwXS5pbmRleE9mKGV2ZW50LndoaWNoKSA9PT0gLTEpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnN0IHNpZ24gPSBldmVudC53aGljaCA9PT0gMzggfHwgZXZlbnQud2hpY2ggPT09IDM5ID8gMSA6IC0xO1xyXG4gICAgdGhpcy5yYXRlKHRoaXMudmFsdWUgKyBzaWduKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXggPSB0aGlzLm1heCB8fCA1O1xyXG4gICAgdGhpcy50aXRsZXMgPVxyXG4gICAgICB0eXBlb2YgdGhpcy50aXRsZXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMudGl0bGVzLmxlbmd0aCA+IDBcclxuICAgICAgICA/IHRoaXMudGl0bGVzXHJcbiAgICAgICAgOiBbXTtcclxuICAgIHRoaXMucmFuZ2UgPSB0aGlzLmJ1aWxkVGVtcGxhdGVPYmplY3RzKHRoaXMubWF4KTtcclxuICB9XHJcblxyXG4gIC8vIG1vZGVsIC0+IHZpZXdcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICh2YWx1ZSAlIDEgIT09IHZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBNYXRoLnJvdW5kKHZhbHVlKTtcclxuICAgICAgdGhpcy5wcmVWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnByZVZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIGVudGVyKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5yZWFkb25seSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLm9uSG92ZXIuZW1pdCh2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5wcmVWYWx1ZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IE1hdGgucm91bmQodGhpcy5wcmVWYWx1ZSk7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB0aGlzLm9uTGVhdmUuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IChfOiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmF0ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMucmVhZG9ubHkgJiYgdGhpcy5yYW5nZVxyXG4gICAgICAmJiB2YWx1ZSA+PSAwICYmIHZhbHVlIDw9IHRoaXMucmFuZ2UubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGJ1aWxkVGVtcGxhdGVPYmplY3RzKG1heDogbnVtYmVyKTogUmF0aW5nUmVzdWx0c1tdIHtcclxuICAgIGNvbnN0IHJlc3VsdDogUmF0aW5nUmVzdWx0c1tdID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXg7IGkrKykge1xyXG4gICAgICByZXN1bHQucHVzaCh7XHJcbiAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgdGl0bGU6IHRoaXMudGl0bGVzW2ldIHx8IGkgKyAxXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbiAgfVxyXG59XHJcbiIsIjxzcGFuIChtb3VzZWxlYXZlKT1cInJlc2V0KClcIiAoa2V5ZG93bik9XCJvbktleWRvd24oJGV2ZW50KVwiIHRhYmluZGV4PVwiMFwiXHJcbiAgICAgIHJvbGU9XCJzbGlkZXJcIiBhcmlhLXZhbHVlbWluPVwiMFwiXHJcbiAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYXJpYUxhYmVsXCJcclxuICAgICAgW2F0dHIuYXJpYS12YWx1ZW1heF09XCJyYW5nZS5sZW5ndGhcIlxyXG4gICAgICBbYXR0ci5hcmlhLXZhbHVlbm93XT1cInZhbHVlXCI+XHJcbiAgPG5nLXRlbXBsYXRlICNzdGFyIGxldC12YWx1ZT1cInZhbHVlXCIgbGV0LWluZGV4PVwiaW5kZXhcIj57eyBpbmRleCA8IHZhbHVlID8gJyYjOTczMzsnIDogJyYjOTczNDsnIH19PC9uZy10ZW1wbGF0ZT5cclxuICA8bmctdGVtcGxhdGUgbmdGb3IgbGV0LXIgW25nRm9yT2ZdPVwicmFuZ2VcIiBsZXQtaW5kZXg9XCJpbmRleFwiPlxyXG4gICAgPHNwYW4gY2xhc3M9XCJzci1vbmx5IHZpc3VhbGx5LWhpZGRlblwiPih7eyBpbmRleCA8IHZhbHVlID8gJyonIDogJyAnIH19KTwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwiYnMtcmF0aW5nLXN0YXJcIlxyXG4gICAgICAgICAgKG1vdXNlZW50ZXIpPVwiZW50ZXIoaW5kZXggKyAxKVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwicmF0ZShpbmRleCArIDEpXCJcclxuICAgICAgICAgIFt0aXRsZV09XCJyLnRpdGxlXCJcclxuICAgICAgICAgIFtzdHlsZS5jdXJzb3JdPVwicmVhZG9ubHkgPyAnZGVmYXVsdCcgOiAncG9pbnRlcidcIlxyXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJpbmRleCA8IHZhbHVlXCI+XHJcbiAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21UZW1wbGF0ZSB8fCBzdGFyXCJcclxuICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7aW5kZXg6IGluZGV4LCB2YWx1ZTogdmFsdWV9XCI+XHJcbiAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9uZy10ZW1wbGF0ZT5cclxuPC9zcGFuPlxyXG4iXX0=