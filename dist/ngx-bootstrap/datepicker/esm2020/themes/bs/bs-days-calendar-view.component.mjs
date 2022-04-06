import { Component, EventEmitter, Input, Output } from '@angular/core';
import { isSameDay } from 'ngx-bootstrap/chronos';
import { BsNavigationDirection } from '../../models';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import * as i0 from "@angular/core";
import * as i1 from "../../bs-datepicker.config";
import * as i2 from "./bs-calendar-layout.component";
import * as i3 from "./bs-datepicker-navigation-view.component";
import * as i4 from "@angular/common";
import * as i5 from "./bs-datepicker-day-decorator.directive";
import * as i6 from "ngx-bootstrap/tooltip";
function BsDaysCalendarViewComponent_th_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th");
} }
function BsDaysCalendarViewComponent_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 5);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r1.calendar.weekdays[i_r4], " ");
} }
function BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 11);
    i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r13); const week_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.selectWeek(week_r5); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext(2).index;
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r9.calendar.weekNumbers[i_r6]);
} }
function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r17); const week_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectWeek(week_r5); })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r17); const week_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.weekHoverHandler(week_r5, true); })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r17); const week_r5 = i0.ɵɵnextContext(2).$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.weekHoverHandler(week_r5, false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = i0.ɵɵnextContext(2).index;
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r10.calendar.weekNumbers[i_r6]);
} }
function BsDaysCalendarViewComponent_tr_8_td_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 8);
    i0.ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_1_span_1_Template, 2, 1, "span", 9);
    i0.ɵɵtemplate(2, BsDaysCalendarViewComponent_tr_8_td_1_span_2_Template, 2, 1, "span", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active-week", ctx_r7.isWeekHovered);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r7.isiOS);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r7.isiOS);
} }
function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r29); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r27 = i0.ɵɵnextContext(2); return ctx_r27.selectDay(day_r23); })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r29); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r30 = i0.ɵɵnextContext(2); return ctx_r30.hoverDay(day_r23, true); })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r29); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r32 = i0.ɵɵnextContext(2); return ctx_r32.hoverDay(day_r23, false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵpropertyInterpolate("tooltip", day_r23.tooltipText);
    i0.ɵɵproperty("day", day_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", day_r23.label, " 3");
} }
function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 18);
    i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r37); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r35 = i0.ɵɵnextContext(2); return ctx_r35.selectDay(day_r23); })("mouseenter", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_mouseenter_0_listener() { i0.ɵɵrestoreView(_r37); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r38 = i0.ɵɵnextContext(2); return ctx_r38.hoverDay(day_r23, true); })("mouseleave", function BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template_span_mouseleave_0_listener() { i0.ɵɵrestoreView(_r37); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r40 = i0.ɵɵnextContext(2); return ctx_r40.hoverDay(day_r23, false); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("day", day_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", day_r23.label, " 2");
} }
function BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵlistener("click", function BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r45); const day_r23 = i0.ɵɵnextContext().$implicit; const ctx_r43 = i0.ɵɵnextContext(2); return ctx_r43.selectDay(day_r23); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const day_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("day", day_r23);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", day_r23.label, " 1");
} }
function BsDaysCalendarViewComponent_tr_8_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 13);
    i0.ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_2_span_1_Template, 2, 3, "span", 14);
    i0.ɵɵtemplate(2, BsDaysCalendarViewComponent_tr_8_td_2_span_2_Template, 2, 2, "span", 15);
    i0.ɵɵtemplate(3, BsDaysCalendarViewComponent_tr_8_td_2_span_3_Template, 2, 2, "span", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.isiOS && ctx_r8.isShowTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r8.isiOS && !ctx_r8.isShowTooltip);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r8.isiOS);
} }
function BsDaysCalendarViewComponent_tr_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "tr");
    i0.ɵɵtemplate(1, BsDaysCalendarViewComponent_tr_8_td_1_Template, 3, 4, "td", 6);
    i0.ɵɵtemplate(2, BsDaysCalendarViewComponent_tr_8_td_2_Template, 4, 3, "td", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.options && ctx_r2.options.showWeekNumbers);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", week_r5.days);
} }
export class BsDaysCalendarViewComponent {
    constructor(_config) {
        this._config = _config;
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
        this.onSelect = new EventEmitter();
        this.onHover = new EventEmitter();
        this.onHoverWeek = new EventEmitter();
        this.isiOS = (/iPad|iPhone|iPod/.test(navigator.platform) ||
            (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1));
        if (this._config.dateTooltipTexts && this._config.dateTooltipTexts.length > 0) {
            this.isShowTooltip = true;
        }
    }
    navigateTo(event) {
        const step = BsNavigationDirection.DOWN === event ? -1 : 1;
        this.onNavigate.emit({ step: { month: step } });
    }
    changeViewMode(event) {
        this.onViewMode.emit(event);
    }
    selectDay(event) {
        this.onSelect.emit(event);
    }
    selectWeek(week) {
        if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
            return;
        }
        if (week.days.length === 0) {
            return;
        }
        if (this._config.selectWeek && week.days[0]
            && !week.days[0].isDisabled
            && this._config.selectFromOtherMonth) {
            this.onSelect.emit(week.days[0]);
            return;
        }
        const selectedDay = week.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        this.onSelect.emit(selectedDay);
        if (this._config.selectWeekDateRange) {
            const days = week.days.slice(0);
            const lastDayOfRange = days.reverse().find((day) => {
                return this._config.selectFromOtherMonth
                    ? !day.isDisabled
                    : !day.isOtherMonth && !day.isDisabled;
            });
            this.onSelect.emit(lastDayOfRange);
        }
    }
    weekHoverHandler(cell, isHovered) {
        if (!this._config.selectWeek && !this._config.selectWeekDateRange) {
            return;
        }
        const hasActiveDays = cell.days.find((day) => {
            return this._config.selectFromOtherMonth
                ? !day.isDisabled
                : !day.isOtherMonth && !day.isDisabled;
        });
        if (hasActiveDays) {
            cell.isHovered = isHovered;
            this.isWeekHovered = isHovered;
            this.onHoverWeek.emit(cell);
        }
    }
    hoverDay(cell, isHovered) {
        if (this._config.selectFromOtherMonth && cell.isOtherMonth) {
            cell.isOtherMonthHovered = isHovered;
        }
        if (this._config.dateTooltipTexts) {
            cell.tooltipText = '';
            this._config.dateTooltipTexts.forEach((dateData) => {
                if (isSameDay(dateData.date, cell.date)) {
                    cell.tooltipText = dateData.tooltipText;
                    return;
                }
            });
        }
        this.onHover.emit({ cell, isHovered });
    }
}
BsDaysCalendarViewComponent.ɵfac = function BsDaysCalendarViewComponent_Factory(t) { return new (t || BsDaysCalendarViewComponent)(i0.ɵɵdirectiveInject(i1.BsDatepickerConfig)); };
BsDaysCalendarViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDaysCalendarViewComponent, selectors: [["bs-days-calendar-view"]], inputs: { calendar: "calendar", options: "options" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode", onSelect: "onSelect", onHover: "onHover", onHoverWeek: "onHoverWeek" }, decls: 9, vars: 4, consts: [[3, "calendar", "onNavigate", "onViewMode"], ["role", "grid", 1, "days", "weeks"], [4, "ngIf"], ["aria-label", "weekday", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["aria-label", "weekday"], ["class", "week", 3, "active-week", 4, "ngIf"], ["role", "gridcell", 4, "ngFor", "ngForOf"], [1, "week"], [3, "click", 4, "ngIf"], [3, "click", "mouseenter", "mouseleave", 4, "ngIf"], [3, "click"], [3, "click", "mouseenter", "mouseleave"], ["role", "gridcell"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "click", 4, "ngIf"], ["bsDatepickerDayDecorator", "", 3, "day", "tooltip", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click", "mouseenter", "mouseleave"], ["bsDatepickerDayDecorator", "", 3, "day", "click"]], template: function BsDaysCalendarViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "bs-calendar-layout");
        i0.ɵɵelementStart(1, "bs-datepicker-navigation-view", 0);
        i0.ɵɵlistener("onNavigate", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onNavigate_1_listener($event) { return ctx.navigateTo($event); })("onViewMode", function BsDaysCalendarViewComponent_Template_bs_datepicker_navigation_view_onViewMode_1_listener($event) { return ctx.changeViewMode($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "table", 1);
        i0.ɵɵelementStart(3, "thead");
        i0.ɵɵelementStart(4, "tr");
        i0.ɵɵtemplate(5, BsDaysCalendarViewComponent_th_5_Template, 1, 0, "th", 2);
        i0.ɵɵtemplate(6, BsDaysCalendarViewComponent_th_6_Template, 2, 1, "th", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "tbody");
        i0.ɵɵtemplate(8, BsDaysCalendarViewComponent_tr_8_Template, 3, 2, "tr", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("calendar", ctx.calendar);
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngIf", ctx.options && ctx.options.showWeekNumbers);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.calendar.weekdays);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.calendar.weeks);
    } }, directives: [i2.BsCalendarLayoutComponent, i3.BsDatepickerNavigationViewComponent, i4.NgIf, i4.NgForOf, i5.BsDatepickerDayDecoratorComponent, i6.TooltipDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaysCalendarViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-days-calendar-view',
                // changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <bs-calendar-layout>
      <bs-datepicker-navigation-view
        [calendar]="calendar"
        (onNavigate)="navigateTo($event)"
        (onViewMode)="changeViewMode($event)"
      ></bs-datepicker-navigation-view>
      <!--days matrix-->
      <table role="grid" class="days weeks">
        <thead>
        <tr>
          <!--if show weeks-->
          <th *ngIf="options && options.showWeekNumbers"></th>
          <th *ngFor="let weekday of calendar.weekdays; let i = index"
              aria-label="weekday">{{ calendar.weekdays[i] }}
          </th>
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let week of calendar.weeks; let i = index">
          <td class="week" [class.active-week]="isWeekHovered"  *ngIf="options && options.showWeekNumbers">
            <span *ngIf="isiOS" (click)="selectWeek(week)">{{ calendar.weekNumbers[i] }}</span>
            <span *ngIf="!isiOS"
                (click)="selectWeek(week)"
                (mouseenter)="weekHoverHandler(week, true)"
                (mouseleave)="weekHoverHandler(week, false)">{{ calendar.weekNumbers[i] }}</span>
          </td>
          <td *ngFor="let day of week.days" role="gridcell">

            <!-- When we want to show tooltips for dates -->
            <span *ngIf="!isiOS && isShowTooltip" bsDatepickerDayDecorator
                [day]="day"
                (click)="selectDay(day)"
                tooltip="{{day.tooltipText}}"
                (mouseenter)="hoverDay(day, true)"
                (mouseleave)="hoverDay(day, false)">{{ day.label }} 3</span>
            <!-- When tooltips for dates are disabled -->
            <span *ngIf="!isiOS && !isShowTooltip" bsDatepickerDayDecorator
                  [day]="day"
                  (click)="selectDay(day)"
                  (mouseenter)="hoverDay(day, true)"
                  (mouseleave)="hoverDay(day, false)">{{ day.label }} 2</span>

            <!-- For mobile iOS view, tooltips are not needed -->
            <span *ngIf="isiOS" bsDatepickerDayDecorator
                  [day]="day"
                  (click)="selectDay(day)">{{ day.label }} 1</span>
          </td>
        </tr>
        </tbody>
      </table>

    </bs-calendar-layout>
  `
            }]
    }], function () { return [{ type: i1.BsDatepickerConfig }]; }, { calendar: [{
            type: Input
        }], options: [{
            type: Input
        }], onNavigate: [{
            type: Output
        }], onViewMode: [{
            type: Output
        }], onSelect: [{
            type: Output
        }], onHover: [{
            type: Output
        }], onHoverWeek: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF5cy1jYWxlbmRhci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXlzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFDTCxNQUFNLEVBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRWxELE9BQU8sRUFFTCxxQkFBcUIsRUFNdEIsTUFBTSxjQUFjLENBQUM7QUFFdEIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7OztJQWlCdEQscUJBQW9EOzs7SUFDcEQsNkJBQ3lCO0lBQUEsWUFDekI7SUFBQSxpQkFBSzs7OztJQURvQixlQUN6QjtJQUR5Qiw4REFDekI7Ozs7SUFNRSxnQ0FBK0M7SUFBM0Isa09BQVMsMkJBQWdCLElBQUM7SUFBQyxZQUE2QjtJQUFBLGlCQUFPOzs7O0lBQXBDLGVBQTZCO0lBQTdCLHVEQUE2Qjs7OztJQUM1RSxnQ0FHaUQ7SUFGN0Msa09BQVMsMkJBQWdCLElBQUMsK05BQ1osa0NBQXVCLElBQUksQ0FBQyxJQURoQiwrTkFFWixrQ0FBdUIsS0FBSyxDQUFDLElBRmpCO0lBRW1CLFlBQTZCO0lBQUEsaUJBQU87Ozs7SUFBcEMsZUFBNkI7SUFBN0Isd0RBQTZCOzs7SUFMaEYsNkJBQWlHO0lBQy9GLHdGQUFtRjtJQUNuRix5RkFHcUY7SUFDdkYsaUJBQUs7OztJQU5ZLG1EQUFtQztJQUMzQyxlQUFXO0lBQVgsbUNBQVc7SUFDWCxlQUFZO0lBQVosb0NBQVk7Ozs7SUFRbkIsZ0NBS3dDO0lBSHBDLGtPQUFTLDBCQUFjLElBQUMsK05BRVYsMEJBQWMsSUFBSSxDQUFDLElBRlQsK05BR1YsMEJB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QyxPQUFPO2lCQUNSO1lBQ0gsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDekMsQ0FBQzs7c0dBOUdVLDJCQUEyQjs4RUFBM0IsMkJBQTJCO1FBdERwQywwQ0FBb0I7UUFDbEIsd0RBSUM7UUFGQywrSUFBYyxzQkFBa0IsSUFBQyxrSUFDbkIsMEJBQXNCLElBREg7UUFFbEMsaUJBQWdDO1FBRWpDLGdDQUFzQztRQUNwQyw2QkFBTztRQUNQLDBCQUFJO1FBRUYsMEVBQW9EO1FBQ3BELDBFQUVLO1FBQ1AsaUJBQUs7UUFDTCxpQkFBUTtRQUNSLDZCQUFPO1FBQ1AsMEVBNkJLO1FBQ0wsaUJBQVE7UUFDVixpQkFBUTtRQUVWLGlCQUFxQjs7UUFqRGpCLGVBQXFCO1FBQXJCLHVDQUFxQjtRQVNkLGVBQXdDO1FBQXhDLGlFQUF3QztRQUNyQixlQUFzQjtRQUF0QiwrQ0FBc0I7UUFNM0IsZUFBbUI7UUFBbkIsNENBQW1COzt1RkFvQ25DLDJCQUEyQjtjQTFEdkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLG1EQUFtRDtnQkFDbkQsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFEVDthQUNGO3FFQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFFSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTTtZQUVHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0csV0FBVztrQkFBcEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzU2FtZURheSB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIEJzTmF2aWdhdGlvbkRpcmVjdGlvbixcclxuICBCc05hdmlnYXRpb25FdmVudCxcclxuICBDZWxsSG92ZXJFdmVudCwgRGF0ZXBpY2tlckRhdGVUb29sdGlwVGV4dCxcclxuICBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyxcclxuICBEYXlzQ2FsZW5kYXJWaWV3TW9kZWwsXHJcbiAgRGF5Vmlld01vZGVsLCBXZWVrVmlld01vZGVsXHJcbn0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF5cy1jYWxlbmRhci12aWV3JyxcclxuICAvLyBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJzLWNhbGVuZGFyLWxheW91dD5cclxuICAgICAgPGJzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3XHJcbiAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxyXG4gICAgICAgIChvblZpZXdNb2RlKT1cImNoYW5nZVZpZXdNb2RlKCRldmVudClcIlxyXG4gICAgICA+PC9icy1kYXRlcGlja2VyLW5hdmlnYXRpb24tdmlldz5cclxuICAgICAgPCEtLWRheXMgbWF0cml4LS0+XHJcbiAgICAgIDx0YWJsZSByb2xlPVwiZ3JpZFwiIGNsYXNzPVwiZGF5cyB3ZWVrc1wiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICA8dHI+XHJcbiAgICAgICAgICA8IS0taWYgc2hvdyB3ZWVrcy0tPlxyXG4gICAgICAgICAgPHRoICpuZ0lmPVwib3B0aW9ucyAmJiBvcHRpb25zLnNob3dXZWVrTnVtYmVyc1wiPjwvdGg+XHJcbiAgICAgICAgICA8dGggKm5nRm9yPVwibGV0IHdlZWtkYXkgb2YgY2FsZW5kYXIud2Vla2RheXM7IGxldCBpID0gaW5kZXhcIlxyXG4gICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJ3ZWVrZGF5XCI+e3sgY2FsZW5kYXIud2Vla2RheXNbaV0gfX1cclxuICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgKm5nRm9yPVwibGV0IHdlZWsgb2YgY2FsZW5kYXIud2Vla3M7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgIDx0ZCBjbGFzcz1cIndlZWtcIiBbY2xhc3MuYWN0aXZlLXdlZWtdPVwiaXNXZWVrSG92ZXJlZFwiICAqbmdJZj1cIm9wdGlvbnMgJiYgb3B0aW9ucy5zaG93V2Vla051bWJlcnNcIj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc2lPU1wiIChjbGljayk9XCJzZWxlY3RXZWVrKHdlZWspXCI+e3sgY2FsZW5kYXIud2Vla051bWJlcnNbaV0gfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWlzaU9TXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzZWxlY3RXZWVrKHdlZWspXCJcclxuICAgICAgICAgICAgICAgIChtb3VzZWVudGVyKT1cIndlZWtIb3ZlckhhbmRsZXIod2VlaywgdHJ1ZSlcIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwid2Vla0hvdmVySGFuZGxlcih3ZWVrLCBmYWxzZSlcIj57eyBjYWxlbmRhci53ZWVrTnVtYmVyc1tpXSB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICA8dGQgKm5nRm9yPVwibGV0IGRheSBvZiB3ZWVrLmRheXNcIiByb2xlPVwiZ3JpZGNlbGxcIj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gV2hlbiB3ZSB3YW50IHRvIHNob3cgdG9vbHRpcHMgZm9yIGRhdGVzIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc2lPUyAmJiBpc1Nob3dUb29sdGlwXCIgYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXHJcbiAgICAgICAgICAgICAgICBbZGF5XT1cImRheVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0RGF5KGRheSlcIlxyXG4gICAgICAgICAgICAgICAgdG9vbHRpcD1cInt7ZGF5LnRvb2x0aXBUZXh0fX1cIlxyXG4gICAgICAgICAgICAgICAgKG1vdXNlZW50ZXIpPVwiaG92ZXJEYXkoZGF5LCB0cnVlKVwiXHJcbiAgICAgICAgICAgICAgICAobW91c2VsZWF2ZSk9XCJob3ZlckRheShkYXksIGZhbHNlKVwiPnt7IGRheS5sYWJlbCB9fSAzPC9zcGFuPlxyXG4gICAgICAgICAgICA8IS0tIFdoZW4gdG9vbHRpcHMgZm9yIGRhdGVzIGFyZSBkaXNhYmxlZCAtLT5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhaXNpT1MgJiYgIWlzU2hvd1Rvb2x0aXBcIiBic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JcclxuICAgICAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0RGF5KGRheSlcIlxyXG4gICAgICAgICAgICAgICAgICAobW91c2VlbnRlcik9XCJob3ZlckRheShkYXksIHRydWUpXCJcclxuICAgICAgICAgICAgICAgICAgKG1vdXNlbGVhdmUpPVwiaG92ZXJEYXkoZGF5LCBmYWxzZSlcIj57eyBkYXkubGFiZWwgfX0gMjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gRm9yIG1vYmlsZSBpT1MgdmlldywgdG9vbHRpcHMgYXJlIG5vdCBuZWVkZWQgLS0+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNpT1NcIiBic0RhdGVwaWNrZXJEYXlEZWNvcmF0b3JcclxuICAgICAgICAgICAgICAgICAgW2RheV09XCJkYXlcIlxyXG4gICAgICAgICAgICAgICAgICAoY2xpY2spPVwic2VsZWN0RGF5KGRheSlcIj57eyBkYXkubGFiZWwgfX0gMTwvc3Bhbj5cclxuICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG5cclxuICAgIDwvYnMtY2FsZW5kYXItbGF5b3V0PlxyXG4gIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCAge1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyITogRGF5c0NhbGVuZGFyVmlld01vZGVsO1xyXG4gIEBJbnB1dCgpIG9wdGlvbnM/OiBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB8IG51bGw7XHJcblxyXG4gIEBPdXRwdXQoKSBvbk5hdmlnYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxCc05hdmlnYXRpb25FdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBvblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8RGF5Vmlld01vZGVsPigpO1xyXG4gIEBPdXRwdXQoKSBvbkhvdmVyID0gbmV3IEV2ZW50RW1pdHRlcjxDZWxsSG92ZXJFdmVudD4oKTtcclxuICBAT3V0cHV0KCkgb25Ib3ZlcldlZWsgPSBuZXcgRXZlbnRFbWl0dGVyPFdlZWtWaWV3TW9kZWw+KCk7XHJcblxyXG4gIGlzV2Vla0hvdmVyZWQ/OiBib29sZWFuO1xyXG4gIGlzaU9TOiBib29sZWFuO1xyXG4gIGlzU2hvd1Rvb2x0aXA/OiBib29sZWFuO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZykge1xyXG4gICAgdGhpcy5pc2lPUyA9ICgvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pIHx8XHJcbiAgICAgIChuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMSkpO1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kYXRlVG9vbHRpcFRleHRzICYmIHRoaXMuX2NvbmZpZy5kYXRlVG9vbHRpcFRleHRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5pc1Nob3dUb29sdGlwID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5hdmlnYXRlVG8oZXZlbnQ6IEJzTmF2aWdhdGlvbkRpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3Qgc3RlcCA9IEJzTmF2aWdhdGlvbkRpcmVjdGlvbi5ET1dOID09PSBldmVudCA/IC0xIDogMTtcclxuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KHsgc3RlcDogeyBtb250aDogc3RlcCB9IH0pO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlVmlld01vZGUoZXZlbnQ6IEJzRGF0ZXBpY2tlclZpZXdNb2RlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVmlld01vZGUuZW1pdChldmVudCk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3REYXkoZXZlbnQ6IERheVZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblNlbGVjdC5lbWl0KGV2ZW50KTtcclxuICB9XHJcblxyXG4gIHNlbGVjdFdlZWsod2VlazogV2Vla1ZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2VlayAmJiAhdGhpcy5fY29uZmlnLnNlbGVjdFdlZWtEYXRlUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh3ZWVrLmRheXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLnNlbGVjdFdlZWsgJiYgd2Vlay5kYXlzWzBdXHJcbiAgICAgICAgJiYgIXdlZWsuZGF5c1swXS5pc0Rpc2FibGVkXHJcbiAgICAgICAgJiYgdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoKSB7XHJcblxyXG4gICAgICAgIHRoaXMub25TZWxlY3QuZW1pdCh3ZWVrLmRheXNbMF0pO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXkgPSB3ZWVrLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxyXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXHJcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uU2VsZWN0LmVtaXQoc2VsZWN0ZWREYXkpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jb25maWcuc2VsZWN0V2Vla0RhdGVSYW5nZSkge1xyXG4gICAgICBjb25zdCBkYXlzID0gd2Vlay5kYXlzLnNsaWNlKDApO1xyXG4gICAgICBjb25zdCBsYXN0RGF5T2ZSYW5nZSA9IGRheXMucmV2ZXJzZSgpLmZpbmQoKGRheTogRGF5Vmlld01vZGVsKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxyXG4gICAgICAgICAgPyAhZGF5LmlzRGlzYWJsZWRcclxuICAgICAgICAgIDogIWRheS5pc090aGVyTW9udGggJiYgIWRheS5pc0Rpc2FibGVkO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMub25TZWxlY3QuZW1pdChsYXN0RGF5T2ZSYW5nZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB3ZWVrSG92ZXJIYW5kbGVyKGNlbGw6IFdlZWtWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jb25maWcuc2VsZWN0V2VlayAmJiAhdGhpcy5fY29uZmlnLnNlbGVjdFdlZWtEYXRlUmFuZ2UpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGhhc0FjdGl2ZURheXMgPSBjZWxsLmRheXMuZmluZCgoZGF5OiBEYXlWaWV3TW9kZWwpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aFxyXG4gICAgICAgID8gIWRheS5pc0Rpc2FibGVkXHJcbiAgICAgICAgOiAhZGF5LmlzT3RoZXJNb250aCAmJiAhZGF5LmlzRGlzYWJsZWQ7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoaGFzQWN0aXZlRGF5cykge1xyXG4gICAgICBjZWxsLmlzSG92ZXJlZCA9IGlzSG92ZXJlZDtcclxuICAgICAgdGhpcy5pc1dlZWtIb3ZlcmVkID0gaXNIb3ZlcmVkO1xyXG4gICAgICB0aGlzLm9uSG92ZXJXZWVrLmVtaXQoY2VsbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBob3ZlckRheShjZWxsOiBEYXlWaWV3TW9kZWwsIGlzSG92ZXJlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5zZWxlY3RGcm9tT3RoZXJNb250aCAmJiBjZWxsLmlzT3RoZXJNb250aCkge1xyXG4gICAgICBjZWxsLmlzT3RoZXJNb250aEhvdmVyZWQgPSBpc0hvdmVyZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5kYXRlVG9vbHRpcFRleHRzKSB7XHJcbiAgICAgIGNlbGwudG9vbHRpcFRleHQgPSAnJztcclxuICAgICAgdGhpcy5fY29uZmlnLmRhdGVUb29sdGlwVGV4dHMuZm9yRWFjaCgoZGF0ZURhdGE6IERhdGVwaWNrZXJEYXRlVG9vbHRpcFRleHQpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGlzU2FtZURheShkYXRlRGF0YS5kYXRlLCBjZWxsLmRhdGUpKSB7XHJcbiAgICAgICAgICBjZWxsLnRvb2x0aXBUZXh0ID0gZGF0ZURhdGEudG9vbHRpcFRleHQ7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5vbkhvdmVyLmVtaXQoeyBjZWxsLCBpc0hvdmVyZWQgfSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==