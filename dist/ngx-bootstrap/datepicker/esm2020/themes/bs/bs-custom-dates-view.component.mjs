import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BsCustomDatesViewComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function BsCustomDatesViewComponent_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const range_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectFromRanges(range_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const range_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", range_r1.value === ctx_r0.selectedRange);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", range_r1.label, " ");
} }
export class BsCustomDatesViewComponent {
    constructor() {
        this.onSelect = new EventEmitter();
    }
    selectFromRanges(range) {
        this.onSelect.emit(range);
    }
}
BsCustomDatesViewComponent.ɵfac = function BsCustomDatesViewComponent_Factory(t) { return new (t || BsCustomDatesViewComponent)(); };
BsCustomDatesViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsCustomDatesViewComponent, selectors: [["bs-custom-date-view"]], inputs: { ranges: "ranges", selectedRange: "selectedRange", customRangeLabel: "customRangeLabel" }, outputs: { onSelect: "onSelect" }, decls: 2, vars: 1, consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", "class", "btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"]], template: function BsCustomDatesViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BsCustomDatesViewComponent_button_1_Template, 2, 3, "button", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ranges);
    } }, directives: [i1.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCustomDatesViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { ranges: [{
            type: Input
        }], selectedRange: [{
            type: Input
        }], customRangeLabel: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7OztJQVcxRixpQ0FJbUQ7SUFEakQsc09BQVMsaUNBQXVCLElBQUM7SUFFakMsWUFDRjtJQUFBLGlCQUFTOzs7O0lBRlAsbUVBQWdEO0lBQ2hELGVBQ0Y7SUFERSwrQ0FDRjs7QUFLTixNQUFNLE9BQU8sMEJBQTBCO0lBZnZDO1FBbUJZLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBaUIsQ0FBQztLQUt4RDtJQUhDLGdCQUFnQixDQUFDLEtBQXFCO1FBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzVCLENBQUM7O29HQVJVLDBCQUEwQjs2RUFBMUIsMEJBQTBCO1FBWm5DLDhCQUEyQztRQUN6QyxpRkFNUztRQUNYLGlCQUFNOztRQVBzQixlQUFTO1FBQVQsb0NBQVM7O3VGQVc1QiwwQkFBMEI7Y0FmdEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxxQkFBcUI7Z0JBQy9CLFFBQVEsRUFBRTs7Ozs7Ozs7OztHQVVUO2dCQUNELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEO2dCQUVVLE1BQU07a0JBQWQsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDSSxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJzQ3VzdG9tRGF0ZXMge1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgdmFsdWU6IERhdGUgfCBEYXRlW107XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtY3VzdG9tLWRhdGUtdmlldycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLXByZWRlZmluZWQtYnRuc1wiPlxyXG4gICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCByYW5nZSBvZiByYW5nZXNcIlxyXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuXCJcclxuICAgICAgICAoY2xpY2spPVwic2VsZWN0RnJvbVJhbmdlcyhyYW5nZSlcIlxyXG4gICAgICAgIFtjbGFzcy5zZWxlY3RlZF09XCJyYW5nZS52YWx1ZSA9PT0gc2VsZWN0ZWRSYW5nZVwiPlxyXG4gICAgICAgIHt7IHJhbmdlLmxhYmVsIH19XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgYCxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNDdXN0b21EYXRlc1ZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHJhbmdlcz86IEJzQ3VzdG9tRGF0ZXNbXTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFJhbmdlPzogRGF0ZVtdO1xyXG4gIEBJbnB1dCgpIGN1c3RvbVJhbmdlTGFiZWw/OiBzdHJpbmc7XHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxCc0N1c3RvbURhdGVzPigpO1xyXG5cclxuICBzZWxlY3RGcm9tUmFuZ2VzKHJhbmdlPzogQnNDdXN0b21EYXRlcykge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHJhbmdlKTtcclxuICB9XHJcbn1cclxuIl19