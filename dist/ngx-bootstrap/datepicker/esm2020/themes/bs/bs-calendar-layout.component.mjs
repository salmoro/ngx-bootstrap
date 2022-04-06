import { Component } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./bs-current-date-view.component";
import * as i3 from "./bs-timepicker-view.component";
function BsCalendarLayoutComponent_bs_current_date_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bs-current-date", 4);
} }
function BsCalendarLayoutComponent_bs_timepicker_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bs-timepicker");
} }
const _c0 = [[["bs-datepicker-navigation-view"]], "*"];
const _c1 = ["bs-datepicker-navigation-view", "*"];
export class BsCalendarLayoutComponent {
}
BsCalendarLayoutComponent.ɵfac = function BsCalendarLayoutComponent_Factory(t) { return new (t || BsCalendarLayoutComponent)(); };
BsCalendarLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsCalendarLayoutComponent, selectors: [["bs-calendar-layout"]], ngContentSelectors: _c1, decls: 6, vars: 2, consts: [["title", "hey there", 4, "ngIf"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"], [4, "ngIf"], ["title", "hey there"]], template: function BsCalendarLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0);
        i0.ɵɵtemplate(0, BsCalendarLayoutComponent_bs_current_date_0_Template, 1, 0, "bs-current-date", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 2);
        i0.ɵɵprojection(4, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(5, BsCalendarLayoutComponent_bs_timepicker_5_Template, 1, 0, "bs-timepicker", 3);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", false);
        i0.ɵɵadvance(5);
        i0.ɵɵproperty("ngIf", false);
    } }, directives: [i1.NgIf, i2.BsCurrentDateViewComponent, i3.BsTimepickerViewComponent], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCalendarLayoutComponent, [{
        type: Component,
        args: [{
                selector: 'bs-calendar-layout',
                template: `
    <!-- current date, will be added in nearest releases -->
    <bs-current-date title="hey there" *ngIf="false"></bs-current-date>

    <!--navigation-->
    <div class="bs-datepicker-head">
      <ng-content select="bs-datepicker-navigation-view"></ng-content>
    </div>

    <div class="bs-datepicker-body">
      <ng-content></ng-content>
    </div>

    <!--timepicker-->
    <bs-timepicker *ngIf="false"></bs-timepicker>
  `
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtY2FsZW5kYXItbGF5b3V0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1jYWxlbmRhci1sYXlvdXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7OztJQU10QyxxQ0FBbUU7OztJQVluRSxnQ0FBNkM7Ozs7QUFHakQsTUFBTSxPQUFPLHlCQUF5Qjs7a0dBQXpCLHlCQUF5Qjs0RUFBekIseUJBQXlCOztRQWZsQyxrR0FBbUU7UUFHbkUsOEJBQWdDO1FBQzlCLGtCQUFnRTtRQUNsRSxpQkFBTTtRQUVOLDhCQUFnQztRQUM5QixxQkFBeUI7UUFDM0IsaUJBQU07UUFHTiw4RkFBNkM7O1FBWlQsNEJBQVc7UUFZL0IsZUFBVztRQUFYLDRCQUFXOzt1RkFHbEIseUJBQXlCO2NBbkJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLG9CQUFvQjtnQkFDOUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7R0FlVDthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWNhbGVuZGFyLWxheW91dCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDwhLS0gY3VycmVudCBkYXRlLCB3aWxsIGJlIGFkZGVkIGluIG5lYXJlc3QgcmVsZWFzZXMgLS0+XHJcbiAgICA8YnMtY3VycmVudC1kYXRlIHRpdGxlPVwiaGV5IHRoZXJlXCIgKm5nSWY9XCJmYWxzZVwiPjwvYnMtY3VycmVudC1kYXRlPlxyXG5cclxuICAgIDwhLS1uYXZpZ2F0aW9uLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlci1oZWFkXCI+XHJcbiAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cImJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XCI+PC9uZy1jb250ZW50PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYm9keVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tdGltZXBpY2tlci0tPlxyXG4gICAgPGJzLXRpbWVwaWNrZXIgKm5nSWY9XCJmYWxzZVwiPjwvYnMtdGltZXBpY2tlcj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0NhbGVuZGFyTGF5b3V0Q29tcG9uZW50IHt9XHJcbiJdfQ==