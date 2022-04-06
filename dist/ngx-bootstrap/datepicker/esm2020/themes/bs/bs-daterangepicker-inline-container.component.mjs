import { ElementRef, Component, Renderer2 } from '@angular/core';
import { BsDaterangepickerContainerComponent } from './bs-daterangepicker-container.component';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { datepickerAnimation } from '../../datepicker-animations';
import * as i0 from "@angular/core";
import * as i1 from "../../bs-datepicker.config";
import * as i2 from "../../reducer/bs-datepicker.store";
import * as i3 from "../../reducer/bs-datepicker.actions";
import * as i4 from "../../reducer/bs-datepicker.effects";
import * as i5 from "ngx-bootstrap/positioning";
import * as i6 from "@angular/common";
import * as i7 from "./bs-days-calendar-view.component";
import * as i8 from "ngx-bootstrap/timepicker";
import * as i9 from "./bs-months-calendar-view.component";
import * as i10 from "./bs-years-calendar-view.component";
import * as i11 from "./bs-custom-dates-view.component";
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-days-calendar-view", 11);
    i0.ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.navigateTo($event); })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.setViewMode($event); })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.dayHoverHandler($event); })("onHoverWeek", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.weekHoverHandler($event); })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.daySelectHandler($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r9)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
} }
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "timepicker", null, 15);
} }
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "timepicker", null, 13);
    i0.ɵɵtemplate(3, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 0, "timepicker", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.isRangePicker);
} }
function BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 6, "bs-days-calendar-view", 9);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template, 4, 1, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.withTimepicker);
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-month-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.navigateTo($event); })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.setViewMode($event); })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.monthHoverHandler($event); })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.monthSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r20);
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-years-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.navigateTo($event); })("onViewMode", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(3); return ctx_r30.setViewMode($event); })("onHover", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.yearHoverHandler($event); })("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.yearSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r27);
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵtext(2, "Apply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵtext(4, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(3); return ctx_r35.setToday(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.clearDate(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, BsDaterangepickerInlineContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 21);
    i0.ɵɵtemplate(2, BsDaterangepickerInlineContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
} }
function BsDaterangepickerInlineContainerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "bs-custom-date-view", 27);
    i0.ɵɵlistener("onSelect", function BsDaterangepickerInlineContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.setRangeOnCalendar($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
} }
function BsDaterangepickerInlineContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("@datepickerAnimation.done", function BsDaterangepickerInlineContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.positionServiceEnable(); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, BsDaterangepickerInlineContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4);
    i0.ɵɵtemplate(5, BsDaterangepickerInlineContainerComponent_div_0_div_5_Template, 3, 3, "div", 5);
    i0.ɵɵtemplate(6, BsDaterangepickerInlineContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BsDaterangepickerInlineContainerComponent_div_0_div_7_Template, 5, 0, "div", 6);
    i0.ɵɵtemplate(8, BsDaterangepickerInlineContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, BsDaterangepickerInlineContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.containerClass);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("@datepickerAnimation", ctx_r0.animationState);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitch", i0.ɵɵpipeBind1(3, 9, ctx_r0.viewMode));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitchCase", "day");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "month");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngSwitchCase", "year");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", false);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.showTodayBtn || ctx_r0.showClearBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.customRanges && ctx_r0.customRanges.length > 0);
} }
export class BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
    }
}
BsDaterangepickerInlineContainerComponent.ɵfac = function BsDaterangepickerInlineContainerComponent_Factory(t) { return new (t || BsDaterangepickerInlineContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i2.BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.BsDatepickerActions), i0.ɵɵdirectiveInject(i4.BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDaterangepickerInlineContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDaterangepickerInlineContainerComponent, selectors: [["bs-daterangepicker-inline-container"]], hostBindings: function BsDaterangepickerInlineContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDaterangepickerInlineContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDaterangepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, i7.BsDaysCalendarViewComponent, i8.TimepickerComponent, i9.BsMonthCalendarViewComponent, i10.BsYearsCalendarViewComponent, i11.BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-daterangepicker-inline-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    '(click)': '_stopPropagation($event)'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.BsDatepickerConfig }, { type: i2.BsDatepickerStore }, { type: i0.ElementRef }, { type: i3.BsDatepickerActions }, { type: i4.BsDatepickerEffects }, { type: i5.PositioningService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXFCLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxtQ0FBbUMsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBRS9GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHFDQUFxQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBRXRFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQy9ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUNDeEQsaURBU3dDO0lBSnRDLCtQQUFjLDBCQUFrQixJQUFDLGtQQUNuQiwyQkFBbUIsSUFEQSw0T0FFdEIsK0JBQXVCLElBRkQsb1BBR2xCLGdDQUF3QixJQUhOLDhPQUlyQixnQ0FBd0IsSUFKSDs7SUFLbkMsaUJBQXdCOzs7O0lBUnRCLGtFQUFrRDtJQUNsRCxzQ0FBcUIsa0RBQUE7OztJQVd2Qix1Q0FBc0Q7OztJQUZ4RCwrQkFBMEU7SUFDeEUsdUNBQWtDO0lBQ2xDLG9JQUFzRDtJQUN4RCxp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U0FBUyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3RFLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxVQUFVLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7a0lBaEJVLHlDQUF5Qzs0RkFBekMseUNBQXlDOzRIQUF6Qyw0QkFBd0I7MENBUHhCLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUM7UUNackQsNEZBeUZNOzs7UUF6RmlELHlEQUFzQjs2U0RpQi9ELENBQUMsbUJBQW1CLENBQUM7dUZBRXRCLHlDQUF5QztjQVRyRCxTQUFTOzJCQUNFLHFDQUFxQyxhQUNwQyxDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLFFBRTdDO29CQUNKLFNBQVMsRUFBRSwwQkFBMEI7aUJBQ3RDLGNBQ1csQ0FBQyxtQkFBbUIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uSW5pdCwgT25EZXN0cm95LCBFbGVtZW50UmVmLCBDb21wb25lbnQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWN0aW9ucyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XHJcblxyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuaW1wb3J0IHsgZGF0ZXBpY2tlckFuaW1hdGlvbiB9IGZyb20gJy4uLy4uL2RhdGVwaWNrZXItYW5pbWF0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUtY29udGFpbmVyJyxcclxuICBwcm92aWRlcnM6IFtCc0RhdGVwaWNrZXJTdG9yZSwgQnNEYXRlcGlja2VyRWZmZWN0c10sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2JzLWRhdGVwaWNrZXItdmlldy5odG1sJyxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdfc3RvcFByb3BhZ2F0aW9uKCRldmVudCknXHJcbiAgfSxcclxuICBhbmltYXRpb25zOiBbZGF0ZXBpY2tlckFuaW1hdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIF9jb25maWc6IEJzRGF0ZXBpY2tlckNvbmZpZyxcclxuICAgIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXHJcbiAgICBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIF9hY3Rpb25zOiBCc0RhdGVwaWNrZXJBY3Rpb25zLFxyXG4gICAgX2VmZmVjdHM6IEJzRGF0ZXBpY2tlckVmZmVjdHMsXHJcbiAgICBfcG9zaXRpb25pbmdTZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKF9yZW5kZXJlciwgX2NvbmZpZywgX3N0b3JlLCBfZWxlbWVudCwgX2FjdGlvbnMsIF9lZmZlY3RzLCBfcG9zaXRpb25pbmdTZXJ2aWNlKTtcclxuXHJcbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnaW5saW5lLWJsb2NrJyk7XHJcbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ3N0YXRpYycpO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIGRheXMgY2FsZW5kYXIgdmlldyBtb2RlIC0tPlxyXG48ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlclwiIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCIgKm5nSWY9XCJ2aWV3TW9kZSB8IGFzeW5jXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItY29udGFpbmVyXCJcclxuICAgIFtAZGF0ZXBpY2tlckFuaW1hdGlvbl09XCJhbmltYXRpb25TdGF0ZVwiXHJcbiAgICAoQGRhdGVwaWNrZXJBbmltYXRpb24uZG9uZSk9XCJwb3NpdGlvblNlcnZpY2VFbmFibGUoKVwiPlxyXG4gICAgPCEtLWNhbGVuZGFycy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWNhbGVuZGFyLWNvbnRhaW5lclwiIFtuZ1N3aXRjaF09XCJ2aWV3TW9kZSB8IGFzeW5jXCIgcm9sZT1cImFwcGxpY2F0aW9uXCI+XHJcbiAgICAgIDwhLS1kYXlzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkYXknXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJzLWRheXMtY2FsZW5kYXItdmlld1xyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgZGF5c0NhbGVuZGFyJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uVmlld01vZGUpPVwic2V0Vmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvbkhvdmVyKT1cImRheUhvdmVySGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uSG92ZXJXZWVrKT1cIndlZWtIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvblNlbGVjdCk9XCJkYXlTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICAgIDwvYnMtZGF5cy1jYWxlbmRhci12aWV3PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ3aXRoVGltZXBpY2tlclwiIGNsYXNzPVwiYnMtdGltZXBpY2tlci1pbi1kYXRlcGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHRpbWVwaWNrZXIgI3N0YXJ0VFA+PC90aW1lcGlja2VyPlxyXG4gICAgICAgICAgPHRpbWVwaWNrZXIgI2VuZFRQICpuZ0lmPVwiaXNSYW5nZVBpY2tlclwiPjwvdGltZXBpY2tlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8IS0tbW9udGhzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxicy1tb250aC1jYWxlbmRhci12aWV3XHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgbW9udGhzQ2FsZW5kYXIgfCBhc3luY1wiXHJcbiAgICAgICAgICBbY2xhc3MuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZV09XCJtdWx0aXBsZUNhbGVuZGFyc1wiXHJcbiAgICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAgIChvblZpZXdNb2RlKT1cInNldFZpZXdNb2RlKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uSG92ZXIpPVwibW9udGhIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25TZWxlY3QpPVwibW9udGhTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICA8L2JzLW1vbnRoLWNhbGVuZGFyLXZpZXc+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLXllYXJzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiIGNsYXNzPVwiYnMtbWVkaWEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJzLXllYXJzLWNhbGVuZGFyLXZpZXdcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjYWxlbmRhciBvZiB5ZWFyc0NhbGVuZGFyIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25WaWV3TW9kZSk9XCJzZXRWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgICAgIChvbkhvdmVyKT1cInllYXJIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25TZWxlY3QpPVwieWVhclNlbGVjdEhhbmRsZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvYnMteWVhcnMtY2FsZW5kYXItdmlldz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tYXBwbHljYW5jZWwgYnV0dG9ucy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYnV0dG9uc1wiICpuZ0lmPVwiZmFsc2VcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIj5BcHBseTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYnV0dG9uc1wiICpuZ0lmPVwic2hvd1RvZGF5QnRuIHx8IHNob3dDbGVhckJ0blwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvZGF5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1sZWZ0XT1cInRvZGF5UG9zID09PSAnbGVmdCdcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1yaWdodF09XCJ0b2RheVBvcyA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgICAgW2NsYXNzLnRvZGF5LWNlbnRlcl09XCJ0b2RheVBvcyA9PT0gJ2NlbnRlcidcIlxyXG4gICAgICAgICAgICpuZ0lmPVwic2hvd1RvZGF5QnRuXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJzZXRUb2RheSgpXCI+e3t0b2RheUJ0bkxibH19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNsZWFyLXdyYXBwZXJcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1sZWZ0XT1cImNsZWFyUG9zID09PSAnbGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1yaWdodF09XCJjbGVhclBvcyA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgW2NsYXNzLmNsZWFyLWNlbnRlcl09XCJjbGVhclBvcyA9PT0gJ2NlbnRlcidcIlxyXG4gICAgICAgICpuZ0lmPVwic2hvd0NsZWFyQnRuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImNsZWFyRGF0ZSgpXCI+e3tjbGVhckJ0bkxibH19PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS1jdXN0b20gZGF0ZXMgb3IgZGF0ZSByYW5nZXMgcGlja2VyLS0+XHJcbiAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlXCIgKm5nSWY9XCJjdXN0b21SYW5nZXMgJiYgY3VzdG9tUmFuZ2VzLmxlbmd0aCA+IDBcIj5cclxuICAgIDxicy1jdXN0b20tZGF0ZS12aWV3XHJcbiAgICAgIFtzZWxlY3RlZFJhbmdlXT1cImNob3NlblJhbmdlXCJcclxuICAgICAgW3Jhbmdlc109XCJjdXN0b21SYW5nZXNcIlxyXG4gICAgICBbY3VzdG9tUmFuZ2VMYWJlbF09XCJjdXN0b21SYW5nZUJ0bkxibFwiXHJcbiAgICAgIChvblNlbGVjdCk9XCJzZXRSYW5nZU9uQ2FsZW5kYXIoJGV2ZW50KVwiPlxyXG4gICAgPC9icy1jdXN0b20tZGF0ZS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19