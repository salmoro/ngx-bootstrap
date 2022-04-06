import { Component, ElementRef, Renderer2 } from '@angular/core';
import { BsDatepickerContainerComponent } from './bs-datepicker-container.component';
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
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-days-calendar-view", 11);
    i0.ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.navigateTo($event); })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.setViewMode($event); })("onHover", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.dayHoverHandler($event); })("onHoverWeek", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.weekHoverHandler($event); })("onSelect", function BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.daySelectHandler($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r9)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
} }
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "timepicker", null, 15);
} }
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "timepicker", null, 13);
    i0.ɵɵtemplate(3, BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 0, "timepicker", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.isRangePicker);
} }
function BsDatepickerInlineContainerComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, BsDatepickerInlineContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 6, "bs-days-calendar-view", 9);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BsDatepickerInlineContainerComponent_div_0_ng_container_4_div_4_Template, 4, 1, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.withTimepicker);
} }
function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-month-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.navigateTo($event); })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.setViewMode($event); })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.monthHoverHandler($event); })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.monthSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r20);
} }
function BsDatepickerInlineContainerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
} }
function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-years-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.navigateTo($event); })("onViewMode", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(3); return ctx_r30.setViewMode($event); })("onHover", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.yearHoverHandler($event); })("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.yearSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r27);
} }
function BsDatepickerInlineContainerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
} }
function BsDatepickerInlineContainerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵtext(2, "Apply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵtext(4, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(3); return ctx_r35.setToday(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
} }
function BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.clearDate(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
} }
function BsDatepickerInlineContainerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, BsDatepickerInlineContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 21);
    i0.ɵɵtemplate(2, BsDatepickerInlineContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
} }
function BsDatepickerInlineContainerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "bs-custom-date-view", 27);
    i0.ɵɵlistener("onSelect", function BsDatepickerInlineContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.setRangeOnCalendar($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
} }
function BsDatepickerInlineContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("@datepickerAnimation.done", function BsDatepickerInlineContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.positionServiceEnable(); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, BsDatepickerInlineContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4);
    i0.ɵɵtemplate(5, BsDatepickerInlineContainerComponent_div_0_div_5_Template, 3, 3, "div", 5);
    i0.ɵɵtemplate(6, BsDatepickerInlineContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BsDatepickerInlineContainerComponent_div_0_div_7_Template, 5, 0, "div", 6);
    i0.ɵɵtemplate(8, BsDatepickerInlineContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, BsDatepickerInlineContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
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
export class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
    }
}
BsDatepickerInlineContainerComponent.ɵfac = function BsDatepickerInlineContainerComponent_Factory(t) { return new (t || BsDatepickerInlineContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i2.BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.BsDatepickerActions), i0.ɵɵdirectiveInject(i4.BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDatepickerInlineContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerInlineContainerComponent, selectors: [["bs-datepicker-inline-container"]], hostBindings: function BsDatepickerInlineContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDatepickerInlineContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDatepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, i7.BsDaysCalendarViewComponent, i8.TimepickerComponent, i9.BsMonthCalendarViewComponent, i10.BsYearsCalendarViewComponent, i11.BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-datepicker-inline-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    '(click)': '_stopPropagation($event)'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.BsDatepickerConfig }, { type: i2.BsDatepickerStore }, { type: i0.ElementRef }, { type: i3.BsDatepickerActions }, { type: i4.BsDatepickerEffects }, { type: i5.PositioningService }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1pbmxpbmUtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItdmlldy5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFxQixTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDcEYsT0FBTyxFQUFFLDhCQUE4QixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFFckYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFFdEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQ0N4RCxpREFTd0M7SUFKdEMsMFBBQWMsMEJBQWtCLElBQUMsNk9BQ25CLDJCQUFtQixJQURBLHVPQUV0QiwrQkFBdUIsSUFGRCwrT0FHbEIsZ0NBQXdCLElBSE4seU9BSXJCLGdDQUF3QixJQUpIOztJQUtuQyxpQkFBd0I7Ozs7SUFSdEIsa0VBQWtEO0lBQ2xELHNDQUFxQixrREFBQTs7O0lBV3ZCLHVDQUFzRDs7O0lBRnhELCtCQUEwRTtJQUN4RSx1Q0FBa0M7SUFDbEMsK0hBQXNEO0lBQ3hELGlCQUFNOzs7SUFEZ0IsZUFBbUI7SUFBbkIsMkNBQW1COzs7SUFoQjNDLDZCQUFvQztJQUNsQyw4QkFBZ0M7SUFDOUIsOElBVXdCOztJQUMxQixpQkFBTTtJQUNOLDJHQUdNO0lBQ1IsMEJBQWU7OztJQWZZLGVBQXdCO0lBQXhCLG9FQUF3QjtJQVczQyxlQUFvQjtJQUFwQiw0Q0FBb0I7Ozs7SUFRMUIsa0RBTzBDO0lBSHhDLG1QQUFjLDBCQUFrQixJQUFDLHNPQUNuQiwyQkFBbUIsSUFEQSxnT0FFdEIsaUNBQXlCLElBRkgsa09BR3JCLGtDQUEwQixJQUhMO0lBSW5DLGlCQUF5Qjs7OztJQU52QixtRUFBa0Q7SUFDbEQsdUNBQXFCOzs7SUFKekIsOEJBQXdEO0lBQ3RELHdJQVF5Qjs7SUFDM0IsaUJBQU07OztJQVJtQixlQUF5QjtJQUF6QixxRUFBeUI7Ozs7SUFZaEQsa0RBT3lDO0lBSHZDLG1QQUFjLDBCQUFrQixJQUFDLHNPQUNuQiwyQkFBbUIsSUFEQSxnT0FFdEIsZ0NBQXdCLElBRkYsa09BR3JCLGlDQUF5QixJQUhKO0lBSW5DLGlCQUF5Qjs7OztJQU52QixtRUFBa0Q7SUFDbEQsdUNBQXFCOzs7SUFKekIsOEJBQXVEO0lBQ3JELHdJQVF5Qjs7SUFDM0IsaUJBQU07OztJQVJtQixlQUF3QjtJQUF4QixvRUFBd0I7OztJQVluRCwrQkFBaUQ7SUFDL0Msa0NBQThDO0lBQUEscUJBQUs7SUFBQSxpQkFBUztJQUM1RCxrQ0FBOEM7SUFBQSxzQkFBTTtJQUFBLGlCQUFTO0lBQy9ELGlCQUFNOzs7O0lBR0osK0JBSTBCO0lBQ3hCLGtDQUFxRDtJQUFyQixnTUFBUyxrQkFBVSxJQUFDO0lBQUMsWUFBZTtJQUFBLGlCQUFTO0lBQy9FLGlCQUFNOzs7SUFMRCx5REFBd0MsNkNBQUEsK0NBQUE7SUFJVSxlQUFlO0lBQWYseUNBQWU7Ozs7SUFHcEUsK0JBSXFCO0lBQ25CLGtDQUFzRDtJQUF0QixnTUFBUyxtQkFBVyxJQUFDO0lBQUMsWUFBZTtJQUFBLGlCQUFTO0lBQ2hGLGlCQUFNOzs7SUFMTix5REFBd0MsNkNBQUEsK0NBQUE7SUFJZ0IsZUFBZTtJQUFmLHlDQUFlOzs7SUFkM0UsK0JBQXdFO0lBQ3RFLGtHQU1NO0lBRUosa0dBTU07SUFDVixpQkFBTTs7O0lBWEUsZUFBa0I7SUFBbEIsMENBQWtCO0lBUXJCLGVBQWtCO0lBQWxCLDBDQUFrQjs7OztJQVF6QiwrQkFBd0Y7SUFDdEYsK0NBSTBDO0lBQXhDLG1OQUFZLGtDQUEwQixJQUFDO0lBQ3pDLGlCQUFzQjtJQUN4QixpQkFBTTs7O0lBTEYsZUFBNkI7SUFBN0Isa0RBQTZCLCtCQUFBLDhDQUFBOzs7O0lBbkZuQyw4QkFBK0U7SUFDN0UsOEJBRXdEO0lBQXRELGlPQUE2QiwrQkFBdUIsSUFBQztJQUVyRCw4QkFBb0Y7O0lBRWxGLDZHQWtCZTtJQUdmLDJGQVVNO0lBR04sMkZBVU07SUFDUixpQkFBTTtJQUdOLDJGQUdNO0lBRU4sMkZBZ0JNO0lBRVIsaUJBQU07SUFHTiwyRkFPTTtJQUNSLGlCQUFNOzs7SUF6RnFCLCtDQUEwQjtJQUVqRCxlQUF1QztJQUF2Qyw0REFBdUM7SUFHSixlQUE2QjtJQUE3QixnRUFBNkI7SUFFL0MsZUFBbUI7SUFBbkIsb0NBQW1CO0lBcUI1QixlQUFxQjtJQUFyQixzQ0FBcUI7SUFhckIsZUFBb0I7SUFBcEIscUNBQW9CO0lBY1EsZUFBVztJQUFYLDRCQUFXO0lBS1gsZUFBa0M7SUFBbEMsaUVBQWtDO0lBcUIvQixlQUE2QztJQUE3Qyw0RUFBNkM7O0FEOUR4RixNQUFNLE9BQU8sb0NBQXFDLFNBQVEsOEJBQThCO0lBR3RGLFlBQ0UsU0FBb0IsRUFDcEIsT0FBMkIsRUFDM0IsTUFBeUIsRUFDekIsUUFBb0IsRUFDcEIsUUFBNkIsRUFDN0IsUUFBNkIsRUFDN0IsbUJBQXVDO1FBRXZDLEtBQUssQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO1FBRXJGLFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDdEUsU0FBUyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLFVBQVUsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNuRSxDQUFDOzt3SEFoQlUsb0NBQW9DO3VGQUFwQyxvQ0FBb0M7dUhBQXBDLDRCQUF3QjswQ0FQeEIsQ0FBQyxpQkFBaUIsRUFBRSxtQkFBbUIsQ0FBQztRQ1pyRCx1RkF5Rk07OztRQXpGaUQseURBQXNCOzZTRGlCL0QsQ0FBQyxtQkFBbUIsQ0FBQzt1RkFFdEIsb0NBQW9DO2NBVGhELFNBQVM7MkJBQ0UsZ0NBQWdDLGFBQy9CLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsUUFFN0M7b0JBQ0osU0FBUyxFQUFFLDBCQUEwQjtpQkFDdEMsY0FDVyxDQUFDLG1CQUFtQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5lZmZlY3RzJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyU3RvcmUgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuc3RvcmUnO1xyXG5cclxuaW1wb3J0IHsgUG9zaXRpb25pbmdTZXJ2aWNlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9wb3NpdGlvbmluZyc7XHJcbmltcG9ydCB7IGRhdGVwaWNrZXJBbmltYXRpb24gfSBmcm9tICcuLi8uLi9kYXRlcGlja2VyLWFuaW1hdGlvbnMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXInLFxyXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KSdcclxuICB9LFxyXG4gIGFuaW1hdGlvbnM6IFtkYXRlcGlja2VyQW5pbWF0aW9uXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgX2VsZW1lbnQ6IEVsZW1lbnRSZWYsXHJcbiAgICBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcclxuICAgIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzLFxyXG4gICAgX3Bvc2l0aW9uaW5nU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcihfcmVuZGVyZXIsIF9jb25maWcsIF9zdG9yZSwgX2VsZW1lbnQsIF9hY3Rpb25zLCBfZWZmZWN0cywgX3Bvc2l0aW9uaW5nU2VydmljZSk7XHJcblxyXG4gICAgX3JlbmRlcmVyLnNldFN0eWxlKF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2lubGluZS1ibG9jaycpO1xyXG4gICAgX3JlbmRlcmVyLnNldFN0eWxlKF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdwb3NpdGlvbicsICdzdGF0aWMnKTtcclxuICB9XHJcbn1cclxuIiwiPCEtLSBkYXlzIGNhbGVuZGFyIHZpZXcgbW9kZSAtLT5cclxuPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXJcIiBbbmdDbGFzc109XCJjb250YWluZXJDbGFzc1wiICpuZ0lmPVwidmlld01vZGUgfCBhc3luY1wiPlxyXG4gIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWNvbnRhaW5lclwiXHJcbiAgICBbQGRhdGVwaWNrZXJBbmltYXRpb25dPVwiYW5pbWF0aW9uU3RhdGVcIlxyXG4gICAgKEBkYXRlcGlja2VyQW5pbWF0aW9uLmRvbmUpPVwicG9zaXRpb25TZXJ2aWNlRW5hYmxlKClcIj5cclxuICAgIDwhLS1jYWxlbmRhcnMtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJicy1jYWxlbmRhci1jb250YWluZXJcIiBbbmdTd2l0Y2hdPVwidmlld01vZGUgfCBhc3luY1wiIHJvbGU9XCJhcHBsaWNhdGlvblwiPlxyXG4gICAgICA8IS0tZGF5cyBjYWxlbmRhci0tPlxyXG4gICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF5J1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJicy1tZWRpYS1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxicy1kYXlzLWNhbGVuZGFyLXZpZXdcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGNhbGVuZGFyIG9mIGRheXNDYWxlbmRhciQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgIFtjbGFzcy5icy1kYXRlcGlja2VyLW11bHRpcGxlXT1cIm11bHRpcGxlQ2FsZW5kYXJzXCJcclxuICAgICAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAgICAgW29wdGlvbnNdPVwib3B0aW9ucyQgfCBhc3luY1wiXHJcbiAgICAgICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvblZpZXdNb2RlKT1cInNldFZpZXdNb2RlKCRldmVudClcIlxyXG4gICAgICAgICAgICAob25Ib3Zlcik9XCJkYXlIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvbkhvdmVyV2Vlayk9XCJ3ZWVrSG92ZXJIYW5kbGVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAob25TZWxlY3QpPVwiZGF5U2VsZWN0SGFuZGxlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgICA8L2JzLWRheXMtY2FsZW5kYXItdmlldz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2ICpuZ0lmPVwid2l0aFRpbWVwaWNrZXJcIiBjbGFzcz1cImJzLXRpbWVwaWNrZXItaW4tZGF0ZXBpY2tlci1jb250YWluZXJcIj5cclxuICAgICAgICAgIDx0aW1lcGlja2VyICNzdGFydFRQPjwvdGltZXBpY2tlcj5cclxuICAgICAgICAgIDx0aW1lcGlja2VyICNlbmRUUCAqbmdJZj1cImlzUmFuZ2VQaWNrZXJcIj48L3RpbWVwaWNrZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgPCEtLW1vbnRocyBjYWxlbmRhci0tPlxyXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCIgY2xhc3M9XCJicy1tZWRpYS1jb250YWluZXJcIj5cclxuICAgICAgICA8YnMtbW9udGgtY2FsZW5kYXItdmlld1xyXG4gICAgICAgICAgKm5nRm9yPVwibGV0IGNhbGVuZGFyIG9mIG1vbnRoc0NhbGVuZGFyIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25WaWV3TW9kZSk9XCJzZXRWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgICAgIChvbkhvdmVyKT1cIm1vbnRoSG92ZXJIYW5kbGVyKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uU2VsZWN0KT1cIm1vbnRoU2VsZWN0SGFuZGxlcigkZXZlbnQpXCI+XHJcbiAgICAgICAgPC9icy1tb250aC1jYWxlbmRhci12aWV3PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS15ZWFycyBjYWxlbmRhci0tPlxyXG4gICAgICA8ZGl2ICpuZ1N3aXRjaENhc2U9XCIneWVhcidcIiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxicy15ZWFycy1jYWxlbmRhci12aWV3XHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgeWVhcnNDYWxlbmRhciB8IGFzeW5jXCJcclxuICAgICAgICAgIFtjbGFzcy5icy1kYXRlcGlja2VyLW11bHRpcGxlXT1cIm11bHRpcGxlQ2FsZW5kYXJzXCJcclxuICAgICAgICAgIFtjYWxlbmRhcl09XCJjYWxlbmRhclwiXHJcbiAgICAgICAgICAob25OYXZpZ2F0ZSk9XCJuYXZpZ2F0ZVRvKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uVmlld01vZGUpPVwic2V0Vmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25Ib3Zlcik9XCJ5ZWFySG92ZXJIYW5kbGVyKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uU2VsZWN0KT1cInllYXJTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICA8L2JzLXllYXJzLWNhbGVuZGFyLXZpZXc+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLWFwcGx5Y2FuY2VsIGJ1dHRvbnMtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWJ1dHRvbnNcIiAqbmdJZj1cImZhbHNlXCI+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiB0eXBlPVwiYnV0dG9uXCI+QXBwbHk8L2J1dHRvbj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdFwiIHR5cGU9XCJidXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWJ1dHRvbnNcIiAqbmdJZj1cInNob3dUb2RheUJ0biB8fCBzaG93Q2xlYXJCdG5cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJ0bi10b2RheS13cmFwcGVyXCJcclxuICAgICAgICAgICBbY2xhc3MudG9kYXktbGVmdF09XCJ0b2RheVBvcyA9PT0gJ2xlZnQnXCJcclxuICAgICAgICAgICBbY2xhc3MudG9kYXktcmlnaHRdPVwidG9kYXlQb3MgPT09ICdyaWdodCdcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1jZW50ZXJdPVwidG9kYXlQb3MgPT09ICdjZW50ZXInXCJcclxuICAgICAgICAgICAqbmdJZj1cInNob3dUb2RheUJ0blwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLXN1Y2Nlc3NcIiAoY2xpY2spPVwic2V0VG9kYXkoKVwiPnt7dG9kYXlCdG5MYmx9fTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJ0bi1jbGVhci13cmFwcGVyXCJcclxuICAgICAgICBbY2xhc3MuY2xlYXItbGVmdF09XCJjbGVhclBvcyA9PT0gJ2xlZnQnXCJcclxuICAgICAgICBbY2xhc3MuY2xlYXItcmlnaHRdPVwiY2xlYXJQb3MgPT09ICdyaWdodCdcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1jZW50ZXJdPVwiY2xlYXJQb3MgPT09ICdjZW50ZXInXCJcclxuICAgICAgICAqbmdJZj1cInNob3dDbGVhckJ0blwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJjbGVhckRhdGUoKVwiPnt7Y2xlYXJCdG5MYmx9fTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG5cclxuICA8IS0tY3VzdG9tIGRhdGVzIG9yIGRhdGUgcmFuZ2VzIHBpY2tlci0tPlxyXG4gIDxkaXYgY2xhc3M9XCJicy1kYXRlcGlja2VyLWN1c3RvbS1yYW5nZVwiICpuZ0lmPVwiY3VzdG9tUmFuZ2VzICYmIGN1c3RvbVJhbmdlcy5sZW5ndGggPiAwXCI+XHJcbiAgICA8YnMtY3VzdG9tLWRhdGUtdmlld1xyXG4gICAgICBbc2VsZWN0ZWRSYW5nZV09XCJjaG9zZW5SYW5nZVwiXHJcbiAgICAgIFtyYW5nZXNdPVwiY3VzdG9tUmFuZ2VzXCJcclxuICAgICAgW2N1c3RvbVJhbmdlTGFiZWxdPVwiY3VzdG9tUmFuZ2VCdG5MYmxcIlxyXG4gICAgICAob25TZWxlY3QpPVwic2V0UmFuZ2VPbkNhbGVuZGFyKCRldmVudClcIj5cclxuICAgIDwvYnMtY3VzdG9tLWRhdGUtdmlldz5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==