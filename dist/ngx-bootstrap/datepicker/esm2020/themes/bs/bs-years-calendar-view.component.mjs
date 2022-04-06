import { Component, EventEmitter, Input, Output } from '@angular/core';
import { yearsPerCalendar } from '../../engine/format-years-calendar';
import { BsNavigationDirection } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "./bs-calendar-layout.component";
import * as i2 from "./bs-datepicker-navigation-view.component";
import * as i3 from "@angular/common";
function BsYearsCalendarViewComponent_tr_4_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵlistener("click", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const year_r3 = restoredCtx.$implicit; const ctx_r4 = i0.ɵɵnextContext(2); return ctx_r4.viewYear(year_r3); })("mouseenter", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseenter_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const year_r3 = restoredCtx.$implicit; const ctx_r6 = i0.ɵɵnextContext(2); return ctx_r6.hoverYear(year_r3, true); })("mouseleave", function BsYearsCalendarViewComponent_tr_4_td_1_Template_td_mouseleave_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r5); const year_r3 = restoredCtx.$implicit; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.hoverYear(year_r3, false); });
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const year_r3 = ctx.$implicit;
    i0.ɵɵclassProp("disabled", year_r3.isDisabled)("is-highlighted", year_r3.isHovered);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("selected", year_r3.isSelected);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(year_r3.label);
} }
function BsYearsCalendarViewComponent_tr_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, BsYearsCalendarViewComponent_tr_4_td_1_Template, 3, 7, "td", 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r1 = ctx.$implicit;
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", row_r1);
} }
export class BsYearsCalendarViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
    }
    navigateTo(event) {
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { year: step * yearsPerCalendar } });
    }
    viewYear(year) {
        this.onSelect.emit(year);
    }
    hoverYear(cell, isHovered) {
        this.onHover.emit({ cell, isHovered });
    }
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
}
BsYearsCalendarViewComponent.ɵfac = function BsYearsCalendarViewComponent_Factory(t) { return new (t || BsYearsCalendarViewComponent)(); };
BsYearsCalendarViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsYearsCalendarViewComponent, selectors: [["bs-years-calendar-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover" }, decls: 5, vars: 2, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "years"], [4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "disabled", "is-highlighted", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["role", "gridcell", 3, "click", "mouseenter", "mouseleave"]], template: function BsYearsCalendarViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "bs-calendar-layout");
        i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
        i0.ɵɵlistener("onNavigate", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsYearsCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "table", 1);
        i0.ɵɵelementStart(3, "tbody");
        i0.ɵɵtemplate(4, BsYearsCalendarViewComponent_tr_4_Template, 2, 1, "tr", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("calendar", ctx.calendar);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngForOf", ctx.calendar == null ? null : ctx.calendar.years);
    } }, directives: [i1.BsCalendarLayoutComponent, i2.BsDatepickerNavigationViewComponent, i3.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsYearsCalendarViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-years-calendar-view',
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>

      <table role="grid" class="years">
        <tbody>
        <tr *ngFor="let row of calendar?.years">
          <td *ngFor="let year of row" role="gridcell"
              (click)="viewYear(year)"
              (mouseenter)="hoverYear(year, true)"
              (mouseleave)="hoverYear(year, false)"
              [class.disabled]="year.isDisabled"
              [class.is-highlighted]="year.isHovered">
            <span [class.selected]="year.isSelected">{{ year.label }}</span>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUN0RSxPQUFPLEVBRUwscUJBQXFCLEVBS3RCLE1BQU0sY0FBYyxDQUFDOzs7Ozs7O0lBZVosNkJBSzRDO0lBSnhDLHFPQUFTLHdCQUFjLElBQUMsa09BQ1YsMEJBQWdCLElBQUksQ0FBQyxJQURYLGtPQUVWLDBCQUFnQixLQUFLLENBQUMsSUFGWjtJQUsxQiw0QkFBeUM7SUFBQSxZQUFnQjtJQUFBLGlCQUFPO0lBQ2xFLGlCQUFLOzs7SUFIRCw4Q0FBa0MscUNBQUE7SUFFOUIsZUFBa0M7SUFBbEMsOENBQWtDO0lBQUMsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7SUFQN0QsMEJBQXdDO0lBQ3RDLGdGQU9LO0lBQ1AsaUJBQUs7OztJQVJrQixlQUFNO0lBQU4sZ0NBQU07O0FBY3JDLE1BQU0sT0FBTyw0QkFBNEI7SUEzQnpDO1FBOEJZLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBcUIsQ0FBQztRQUNuRCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7UUFFdEQsYUFBUSxHQUFHLElBQUksWUFBWSxFQUF5QixDQUFDO1FBQ3JELFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztLQWtCeEQ7SUFoQkMsVUFBVSxDQUFDLEtBQTRCO1FBQ3JDLE1BQU0sSUFBSSxHQUFHLHFCQUFxQixDQUFDLElBQUksS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFRCxRQUFRLENBQUMsSUFBMkI7UUFDbEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVMsQ0FBQyxJQUEyQixFQUFFLFNBQWtCO1FBQ3ZELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELGNBQWMsQ0FBQyxLQUEyQjtRQUN4QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixDQUFDOzt3R0F4QlUsNEJBQTRCOytFQUE1Qiw0QkFBNEI7UUF4QnJDLDBDQUFvQjtRQUNsQix3REFJQztRQUZDLGdKQUFjLHNCQUFrQixJQUFDLG1JQUNuQiwwQkFBc0IsSUFESDtRQUVsQyxpQkFBZ0M7UUFFakMsZ0NBQWlDO1FBQy9CLDZCQUFPO1FBQ1AsMkVBU0s7UUFDTCxpQkFBUTtRQUNWLGlCQUFRO1FBQ1YsaUJBQXFCOztRQW5CakIsZUFBcUI7UUFBckIsdUNBQXFCO1FBT0QsZUFBa0I7UUFBbEIsMEVBQWtCOzt1RkFlakMsNEJBQTRCO2NBM0J4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXVCVDthQUNGO2dCQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUVHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPdXRwdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgeWVhcnNQZXJDYWxlbmRhciB9IGZyb20gJy4uLy4uL2VuZ2luZS9mb3JtYXQteWVhcnMtY2FsZW5kYXInO1xyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDYWxlbmRhckNlbGxWaWV3TW9kZWwsXHJcbiAgQ2VsbEhvdmVyRXZlbnQsXHJcbiAgWWVhcnNDYWxlbmRhclZpZXdNb2RlbFxyXG59IGZyb20gJy4uLy4uL21vZGVscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLXllYXJzLWNhbGVuZGFyLXZpZXcnLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gICAgICA8YnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXdcclxuICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgKG9uVmlld01vZGUpPVwiY2hhbmdlVmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgID48L2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3PlxyXG5cclxuICAgICAgPHRhYmxlIHJvbGU9XCJncmlkXCIgY2xhc3M9XCJ5ZWFyc1wiPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHJvdyBvZiBjYWxlbmRhcj8ueWVhcnNcIj5cclxuICAgICAgICAgIDx0ZCAqbmdGb3I9XCJsZXQgeWVhciBvZiByb3dcIiByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICAgICAgIChjbGljayk9XCJ2aWV3WWVhcih5ZWFyKVwiXHJcbiAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJZZWFyKHllYXIsIHRydWUpXCJcclxuICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlclllYXIoeWVhciwgZmFsc2UpXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuZGlzYWJsZWRdPVwieWVhci5pc0Rpc2FibGVkXCJcclxuICAgICAgICAgICAgICBbY2xhc3MuaXMtaGlnaGxpZ2h0ZWRdPVwieWVhci5pc0hvdmVyZWRcIj5cclxuICAgICAgICAgICAgPHNwYW4gW2NsYXNzLnNlbGVjdGVkXT1cInllYXIuaXNTZWxlY3RlZFwiPnt7IHllYXIubGFiZWwgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90Ym9keT5cclxuICAgICAgPC90YWJsZT5cclxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyITogWWVhcnNDYWxlbmRhclZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkV2ZW50PigpO1xyXG4gIEBPdXRwdXQoKSBvblZpZXdNb2RlID0gbmV3IEV2ZW50RW1pdHRlcjxCc0RhdGVwaWNrZXJWaWV3TW9kZT4oKTtcclxuXHJcbiAgQE91dHB1dCgpIG9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjxDYWxlbmRhckNlbGxWaWV3TW9kZWw+KCk7XHJcbiAgQE91dHB1dCgpIG9uSG92ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPENlbGxIb3ZlckV2ZW50PigpO1xyXG5cclxuICBuYXZpZ2F0ZVRvKGV2ZW50OiBCc05hdmlnYXRpb25EaXJlY3Rpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHN0ZXAgPSBCc05hdmlnYXRpb25EaXJlY3Rpb24uRE9XTiA9PT0gZXZlbnQgPyAtMSA6IDE7XHJcbiAgICB0aGlzLm9uTmF2aWdhdGUuZW1pdCh7IHN0ZXA6IHsgeWVhcjogc3RlcCAqIHllYXJzUGVyQ2FsZW5kYXIgfSB9KTtcclxuICB9XHJcblxyXG4gIHZpZXdZZWFyKHllYXI6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCkge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KHllYXIpO1xyXG4gIH1cclxuXHJcbiAgaG92ZXJZZWFyKGNlbGw6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCwgaXNIb3ZlcmVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9uSG92ZXIuZW1pdCh7IGNlbGwsIGlzSG92ZXJlZCB9KTtcclxuICB9XHJcblxyXG4gIGNoYW5nZVZpZXdNb2RlKGV2ZW50OiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQoZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=