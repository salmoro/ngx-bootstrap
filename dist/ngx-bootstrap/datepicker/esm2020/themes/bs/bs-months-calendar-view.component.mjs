import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "./bs-calendar-layout.component";
import * as i2 from "./bs-datepicker-navigation-view.component";
import * as i3 from "@angular/common";
function BsMonthCalendarViewComponent_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵlistener("click", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const month_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.viewMonth(month_r3); })("mouseenter", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const month_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.hoverMonth(month_r3, true); })("mouseleave", function BsMonthCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const month_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.hoverMonth(month_r3, false); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const month_r3 = ctx.$implicit;
    i0.ɵɵclassProp("disabled", month_r3.isDisabled)("is-highlighted", month_r3.isHovered);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected", month_r3.isSelected);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(month_r3.label);
} }
function BsMonthCalendarViewComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, BsMonthCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1);
} }
export class BsMonthCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    navigateTo(event) {
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step } });
    }
    viewMonth(month) {
        this.onSelect.emit(month);
    }
    hoverMonth(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsMonthCalendarViewComponent.ɵfac = function BsMonthCalendarViewComponent_Factory(t) { return new (t || BsMonthCalendarViewComponent)(); };
BsMonthCalendarViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsMonthCalendarViewComponent, selectors: [["bs-month-calendar-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover" }, decls: 5, vars: 2, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "months"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]], template: function BsMonthCalendarViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "bs-calendar-layout");
        i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
        i0.ɵɵlistener("onNavigate", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsMonthCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "table", 1);
        i0.ɵɵelementStart(3, "tbody");
        i0.ɵɵtemplate(4, BsMonthCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("calendar", ctx.calendar);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.months);
    } }, directives: [i1.BsCalendarLayoutComponent, i2.BsDatepickerNavigationViewComponent, i3.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsMonthCalendarViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-month-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="months">
        <tbody>
        <tr *ngFor="let row of calendar?.months">
          <td *ngFor="let month of row" role="gridcell"
              (click)="viewMonth(month)"
              (mouseenter)="hoverMonth(month, true)"
              (mouseleave)="hoverMonth(month, false)"
              [class.disabled]="month.isDisabled"
              [class.is-highlighted]="month.isHovered">
            <span [class.selected]="month.isSelected">{{ month.label }}</span>
          </td>
        </tr>
        </tbody>
      </table>
    </bs-calendar-layout>
  `
            }]
    }], null, { calendar: [{
            type: Input
        }], onNavigate: [{
            type: Output
        }], onViewMode: [{
            type: Output
        }], onSelect: [{
            type: Output
        }], onHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLW1vbnRocy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZFLE9BQU8sRUFFTCxxQkFBcUIsRUFLdEIsTUFBTSxjQUFjLENBQUM7Ozs7Ozs7SUFlWiw2QkFLNkM7SUFKekMsc09BQVMsMEJBQWdCLElBQUMsbU9BQ1osNEJBQWtCLElBQUksQ0FBQyxJQURYLG1PQUVaLDRCQUFrQixLQUFLLENBQUMsSUFGWjtJQUs1Qiw0QkFBMEM7SUFBQSxZQUFpQjtJQUFBLGlCQUFPO0lBQ3BFLGlCQUFLOzs7SUFIRCwrQ0FBbUMsc0NBQUE7SUFFL0IsZUFBbUM7SUFBbkMsK0NBQW1DO0lBQUMsZUFBaUI7SUFBakIsb0NBQWlCOzs7SUFQL0QsMEJBQXlDO0lBQ3ZDLGdGQU9LO0lBQ1AsaUJBQUs7OztJQVJtQixlQUFNO0lBQU4sZ0NBQU07O0FBY3RDLE1BQU0sT0FBTyw0QkFBNEI7SUEzQnpDO1FBOEJZLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFFdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ3JELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztLQWtCeEQ7SUFoQkMsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFFRCxTQUFTLENBQUMsS0FBNEI7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUIsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUEyQixFQUFFLFNBQWtCO1FBQ3hELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUEyQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUE2QixDQUFDLENBQUM7SUFDdEQsQ0FBQzs7d0dBeEJVLDRCQUE0QjsrRUFBNUIsNEJBQTRCO1FBeEJyQywwQ0FBb0I7UUFDbEIsd0RBSUM7UUFGQyxnSkFBYyxzQkFBa0IsSUFBQyxtSUFDbkIsMEJBQXNCLElBREg7UUFFbEMsaUJBQWdDO1FBRWpDLGdDQUFrQztRQUNoQyw2QkFBTztRQUNQLDJFQVNLO1FBQ0wsaUJBQVE7UUFDVixpQkFBUTtRQUNWLGlCQUFxQjs7UUFuQmpCLGVBQXFCO1FBQXJCLHVDQUFxQjtRQU9ELGVBQW1CO1FBQW5CLDJFQUFtQjs7dUZBZWxDLDRCQUE0QjtjQTNCeEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1QlQ7YUFDRjtnQkFFVSxRQUFRO2tCQUFoQixLQUFLO1lBRUksVUFBVTtrQkFBbkIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU07WUFFRyxRQUFRO2tCQUFqQixNQUFNO1lBQ0csT0FBTztrQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQnNEYXRlcGlja2VyVmlld01vZGUsXHJcbiAgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLFxyXG4gIEJzTmF2aWdhdGlvbkV2ZW50LFxyXG4gIENlbGxIb3ZlckV2ZW50LFxyXG4gIE1vbnRoc0NhbGVuZGFyVmlld01vZGVsLFxyXG4gIENhbGVuZGFyQ2VsbFZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLW1vbnRoLWNhbGVuZGFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcclxuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxyXG5cclxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJtb250aHNcIj5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyICpuZ0Zvcj1cImxldCByb3cgb2YgY2FsZW5kYXI/Lm1vbnRoc1wiPlxyXG4gICAgICAgICAgPHRkICpuZ0Zvcj1cImxldCBtb250aCBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3TW9udGgobW9udGgpXCJcclxuICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3Zlck1vbnRoKG1vbnRoLCB0cnVlKVwiXHJcbiAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJNb250aChtb250aCwgZmFsc2UpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwibW9udGguaXNEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmlzLWhpZ2hsaWdodGVkXT1cIm1vbnRoLmlzSG92ZXJlZFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBbY2xhc3Muc2VsZWN0ZWRdPVwibW9udGguaXNTZWxlY3RlZFwiPnt7IG1vbnRoLmxhYmVsIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2JzLWNhbGVuZGFyLWxheW91dD5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBjYWxlbmRhciE6IE1vbnRoc0NhbGVuZGFyVmlld01vZGVsO1xyXG5cclxuICBAT3V0cHV0KCkgb25OYXZpZ2F0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNOYXZpZ2F0aW9uRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIG9uVmlld01vZGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzRGF0ZXBpY2tlclZpZXdNb2RlPigpO1xyXG5cclxuICBAT3V0cHV0KCkgb25TZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPENhbGVuZGFyQ2VsbFZpZXdNb2RlbD4oKTtcclxuICBAT3V0cHV0KCkgb25Ib3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2VsbEhvdmVyRXZlbnQ+KCk7XHJcblxyXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RlcCA9IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOID09PSBldmVudCA/IC0xIDogMTtcclxuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyB5ZWFyOiBzdGVwIH0gfSk7XHJcbiAgfVxyXG5cclxuICB2aWV3TW9udGgobW9udGg6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCkge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KG1vbnRoKTtcclxuICB9XHJcblxyXG4gIGhvdmVyTW9udGgoY2VsbDogQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBpc0hvdmVyZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMub25Ib3Zlci5lbWl0KHsgY2VsbCwgaXNIb3ZlcmVkIH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCBhcyBCc0RhdGVwaWNrZXJWaWV3TW9kZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==