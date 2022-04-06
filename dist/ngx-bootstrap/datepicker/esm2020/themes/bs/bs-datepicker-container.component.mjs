import { Component, ElementRef, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { TimepickerComponent } from 'ngx-bootstrap/timepicker';
import { datepickerAnimation } from '../../datepicker-animations';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
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
const _c0 = ["startTP"];
function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-days-calendar-view", 11);
    i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.dayHoverHandler($event); })("onHoverWeek", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.weekHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.daySelectHandler($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r9)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
} }
function BsDatepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "timepicker", null, 15);
} }
function BsDatepickerContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "timepicker", null, 13);
    i0.ɵɵtemplate(3, BsDatepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 0, "timepicker", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.isRangePicker);
} }
function BsDatepickerContainerComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, BsDatepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 6, "bs-days-calendar-view", 9);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BsDatepickerContainerComponent_div_0_ng_container_4_div_4_Template, 4, 1, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.withTimepicker);
} }
function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-month-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.monthHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.monthSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r20);
} }
function BsDatepickerContainerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
} }
function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-years-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.navigateTo($event); })("onViewMode", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(3); return ctx_r30.setViewMode($event); })("onHover", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.yearHoverHandler($event); })("onSelect", function BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.yearSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r27);
} }
function BsDatepickerContainerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
} }
function BsDatepickerContainerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵtext(2, "Apply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵtext(4, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function BsDatepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(3); return ctx_r35.setToday(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
} }
function BsDatepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDatepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.clearDate(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
} }
function BsDatepickerContainerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, BsDatepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 21);
    i0.ɵɵtemplate(2, BsDatepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
} }
function BsDatepickerContainerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "bs-custom-date-view", 27);
    i0.ɵɵlistener("onSelect", function BsDatepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.setRangeOnCalendar($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
} }
function BsDatepickerContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("@datepickerAnimation.done", function BsDatepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.positionServiceEnable(); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, BsDatepickerContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4);
    i0.ɵɵtemplate(5, BsDatepickerContainerComponent_div_0_div_5_Template, 3, 3, "div", 5);
    i0.ɵɵtemplate(6, BsDatepickerContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BsDatepickerContainerComponent_div_0_div_7_Template, 5, 0, "div", 6);
    i0.ɵɵtemplate(8, BsDatepickerContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, BsDatepickerContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
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
export class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this.isRangePicker = false;
        this._subs = [];
        this._effects = _effects;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    set value(value) {
        this._effects?.setValue(value);
    }
    ngOnInit() {
        this._positionService.setOptions({
            modifiers: {
                flip: {
                    enabled: this._config.adaptivePosition
                },
                preventOverflow: {
                    enabled: this._config.adaptivePosition
                }
            },
            allowedPositions: this._config.allowedPositions
        });
        this._positionService.event$?.pipe(take(1))
            .subscribe(() => {
            this._positionService.disable();
            if (this._config.isAnimated) {
                this.animationState = this.isTopPosition ? 'animated-up' : 'animated-down';
                return;
            }
            this.animationState = 'unanimated';
        });
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.containerClass = this._config.containerClass;
        this.showTodayBtn = this._config.showTodayButton;
        this.todayBtnLbl = this._config.todayButtonLabel;
        this.todayPos = this._config.todayPosition;
        this.showClearBtn = this._config.showClearButton;
        this.clearBtnLbl = this._config.clearButtonLabel;
        this.clearPos = this._config.clearPosition;
        this.customRangeBtnLbl = this._config.customRangeButtonLabel;
        this.withTimepicker = this._config.withTimepicker;
        this._effects?.init(this._store)
            // intial state options
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store.select((state) => state.selectedDate).subscribe((date) => this.valueChange.emit(date)));
        this._store.dispatch(this._actions.changeViewMode(this._config.startView));
    }
    ngAfterViewInit() {
        this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
            if (Array.isArray(val) && val.length >= 1) {
                this.startTimepicker?.writeValue(val[0]);
            }
        }));
        this.startTimepicker?.registerOnChange((val) => {
            this.timeSelectHandler(val, 0);
        });
    }
    get isTopPosition() {
        return this._element.nativeElement.classList.contains('top');
    }
    positionServiceEnable() {
        this._positionService.enable();
    }
    timeSelectHandler(date, index) {
        this._store.dispatch(this._actions.selectTime(date, index));
    }
    daySelectHandler(day) {
        if (!day) {
            return;
        }
        const isDisabled = this.isOtherMonthsActive ? day.isDisabled : (day.isOtherMonth || day.isDisabled);
        if (isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.select(day.date));
    }
    monthSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                month: getMonth(day.date),
                year: getFullYear(day.date)
            },
            viewMode: 'day'
        }));
    }
    yearSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        this._store.dispatch(this._actions.navigateTo({
            unit: {
                year: getFullYear(day.date)
            },
            viewMode: 'month'
        }));
    }
    setToday() {
        this._store.dispatch(this._actions.select(new Date()));
    }
    clearDate() {
        this._store.dispatch(this._actions.select(undefined));
    }
    ngOnDestroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        this.selectedTimeSub.unsubscribe();
        this._effects?.destroy();
    }
}
BsDatepickerContainerComponent.ɵfac = function BsDatepickerContainerComponent_Factory(t) { return new (t || BsDatepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i2.BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.BsDatepickerActions), i0.ɵɵdirectiveInject(i4.BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDatepickerContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerContainerComponent, selectors: [["bs-datepicker-container"]], viewQuery: function BsDatepickerContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.startTimepicker = _t.first);
    } }, hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"], hostBindings: function BsDatepickerContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDatepickerContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDatepickerContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDatepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, i7.BsDaysCalendarViewComponent, i8.TimepickerComponent, i9.BsMonthCalendarViewComponent, i10.BsYearsCalendarViewComponent, i11.BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-datepicker-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.BsDatepickerConfig }, { type: i2.BsDatepickerStore }, { type: i0.ElementRef }, { type: i3.BsDatepickerActions }, { type: i4.BsDatepickerEffects }, { type: i5.PositioningService }]; }, { startTimepicker: [{
            type: ViewChild,
            args: ['startTP']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBR1osU0FBUyxFQUNULFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEMsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUUvRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsNkJBQTZCLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUNuRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUVoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUMxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ2Q1RCxpREFTd0M7SUFKdEMsb1BBQWMsMEJBQWtCLElBQUMsdU9BQ25CLDJCQUFtQixJQURBLGlPQUV0QiwrQkFBdUIsSUFGRCx5T0FHbEIsZ0NBQXdC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eUJBQXlCLGFBQ3hCLENBQUMsaUJBQWlCLEVBQUUsbUJBQW1CLENBQUMsUUFFN0M7b0JBQ0osS0FBSyxFQUFFLFFBQVE7b0JBQ2YsU0FBUyxFQUFFLDBCQUEwQjtvQkFDckMsSUFBSSxFQUFFLFFBQVE7b0JBQ2QsWUFBWSxFQUFFLFVBQVU7aUJBQ3pCLGNBQ1csQ0FBQyxtQkFBbUIsQ0FBQzsyUEFlWCxlQUFlO2tCQUFwQyxTQUFTO21CQUFDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFZpZXdDaGlsZFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBnZXRGdWxsWWVhciwgZ2V0TW9udGggfSBmcm9tICduZ3gtYm9vdHN0cmFwL2Nocm9ub3MnO1xyXG5pbXBvcnQgeyBQb3NpdGlvbmluZ1NlcnZpY2UgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuaW1wb3J0IHsgVGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJ25neC1ib290c3RyYXAvdGltZXBpY2tlcic7XHJcblxyXG5pbXBvcnQgeyBkYXRlcGlja2VyQW5pbWF0aW9uIH0gZnJvbSAnLi4vLi4vZGF0ZXBpY2tlci1hbmltYXRpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnQgfSBmcm9tICcuLi8uLi9iYXNlL2JzLWRhdGVwaWNrZXItY29udGFpbmVyJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBDYWxlbmRhckNlbGxWaWV3TW9kZWwsIERheVZpZXdNb2RlbCB9IGZyb20gJy4uLy4uL21vZGVscyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckVmZmVjdHMgfSBmcm9tICcuLi8uLi9yZWR1Y2VyL2JzLWRhdGVwaWNrZXIuZWZmZWN0cyc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlclN0b3JlIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1jb250YWluZXInLFxyXG4gIHByb3ZpZGVyczogW0JzRGF0ZXBpY2tlclN0b3JlLCBCc0RhdGVwaWNrZXJFZmZlY3RzXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYm90dG9tJyxcclxuICAgICcoY2xpY2spJzogJ19zdG9wUHJvcGFnYXRpb24oJGV2ZW50KScsXHJcbiAgICByb2xlOiAnZGlhbG9nJyxcclxuICAgICdhcmlhLWxhYmVsJzogJ2NhbGVuZGFyJ1xyXG4gIH0sXHJcbiAgYW5pbWF0aW9uczogW2RhdGVwaWNrZXJBbmltYXRpb25dXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQgZXh0ZW5kcyBCc0RhdGVwaWNrZXJBYnN0cmFjdENvbXBvbmVudFxyXG4gIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IERhdGV8dW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLl9lZmZlY3RzPy5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERhdGU+ID0gbmV3IEV2ZW50RW1pdHRlcjxEYXRlPigpO1xyXG4gIGFuaW1hdGlvblN0YXRlID0gJ3ZvaWQnO1xyXG4gIG92ZXJyaWRlIGlzUmFuZ2VQaWNrZXIgPSBmYWxzZTtcclxuXHJcbiAgX3N1YnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ3N0YXJ0VFAnKSBzdGFydFRpbWVwaWNrZXI/OiBUaW1lcGlja2VyQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfY29uZmlnOiBCc0RhdGVwaWNrZXJDb25maWcsXHJcbiAgICBwcml2YXRlIF9zdG9yZTogQnNEYXRlcGlja2VyU3RvcmUsXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfYWN0aW9uczogQnNEYXRlcGlja2VyQWN0aW9ucyxcclxuICAgIF9lZmZlY3RzOiBCc0RhdGVwaWNrZXJFZmZlY3RzLFxyXG4gICAgcHJpdmF0ZSBfcG9zaXRpb25TZXJ2aWNlOiBQb3NpdGlvbmluZ1NlcnZpY2VcclxuICApIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICB0aGlzLl9lZmZlY3RzID0gX2VmZmVjdHM7XHJcblxyXG4gICAgX3JlbmRlcmVyLnNldFN0eWxlKF9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ2Jsb2NrJyk7XHJcbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5zZXRPcHRpb25zKHtcclxuICAgICAgbW9kaWZpZXJzOiB7XHJcbiAgICAgICAgZmxpcDoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmFkYXB0aXZlUG9zaXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHByZXZlbnRPdmVyZmxvdzoge1xyXG4gICAgICAgICAgZW5hYmxlZDogdGhpcy5fY29uZmlnLmFkYXB0aXZlUG9zaXRpb25cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGFsbG93ZWRQb3NpdGlvbnM6IHRoaXMuX2NvbmZpZy5hbGxvd2VkUG9zaXRpb25zXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZXZlbnQkPy5waXBlKHRha2UoMSkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5kaXNhYmxlKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jb25maWcuaXNBbmltYXRlZCkge1xyXG4gICAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9IHRoaXMuaXNUb3BQb3NpdGlvbiA/ICdhbmltYXRlZC11cCcgOiAnYW5pbWF0ZWQtZG93bic7XHJcblxyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGF0ZSA9ICd1bmFuaW1hdGVkJztcclxuICAgICAgfSk7XHJcblxyXG4gICAgdGhpcy5pc090aGVyTW9udGhzQWN0aXZlID0gdGhpcy5fY29uZmlnLnNlbGVjdEZyb21PdGhlck1vbnRoO1xyXG4gICAgdGhpcy5jb250YWluZXJDbGFzcyA9IHRoaXMuX2NvbmZpZy5jb250YWluZXJDbGFzcztcclxuICAgIHRoaXMuc2hvd1RvZGF5QnRuID0gdGhpcy5fY29uZmlnLnNob3dUb2RheUJ1dHRvbjtcclxuICAgIHRoaXMudG9kYXlCdG5MYmwgPSB0aGlzLl9jb25maWcudG9kYXlCdXR0b25MYWJlbDtcclxuICAgIHRoaXMudG9kYXlQb3MgPSB0aGlzLl9jb25maWcudG9kYXlQb3NpdGlvbjtcclxuICAgIHRoaXMuc2hvd0NsZWFyQnRuID0gdGhpcy5fY29uZmlnLnNob3dDbGVhckJ1dHRvbjtcclxuICAgIHRoaXMuY2xlYXJCdG5MYmwgPSB0aGlzLl9jb25maWcuY2xlYXJCdXR0b25MYWJlbDtcclxuICAgIHRoaXMuY2xlYXJQb3MgPSB0aGlzLl9jb25maWcuY2xlYXJQb3NpdGlvbjtcclxuICAgIHRoaXMuY3VzdG9tUmFuZ2VCdG5MYmwgPSB0aGlzLl9jb25maWcuY3VzdG9tUmFuZ2VCdXR0b25MYWJlbDtcclxuICAgIHRoaXMud2l0aFRpbWVwaWNrZXIgPSB0aGlzLl9jb25maWcud2l0aFRpbWVwaWNrZXI7XHJcbiAgICB0aGlzLl9lZmZlY3RzPy5pbml0KHRoaXMuX3N0b3JlKVxyXG4gICAgICAvLyBpbnRpYWwgc3RhdGUgb3B0aW9uc1xyXG4gICAgICAuc2V0T3B0aW9ucyh0aGlzLl9jb25maWcpXHJcbiAgICAgIC8vIGRhdGEgYmluZGluZyB2aWV3IC0tPiBtb2RlbFxyXG4gICAgICAuc2V0QmluZGluZ3ModGhpcylcclxuICAgICAgLy8gc2V0IGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgIC5zZXRFdmVudEhhbmRsZXJzKHRoaXMpXHJcbiAgICAgIC5yZWdpc3RlckRhdGVwaWNrZXJTaWRlRWZmZWN0cygpO1xyXG5cclxuICAgIC8vIHRvZG86IG1vdmUgaXQgc29tZXdoZXJlIGVsc2VcclxuICAgIC8vIG9uIHNlbGVjdGVkIGRhdGUgY2hhbmdlXHJcbiAgICB0aGlzLl9zdWJzLnB1c2goXHJcbiAgICAgIHRoaXMuX3N0b3JlLnNlbGVjdCgoc3RhdGU6IGFueSkgPT4gc3RhdGUuc2VsZWN0ZWREYXRlKS5zdWJzY3JpYmUoKGRhdGU6IGFueSkgPT4gdGhpcy52YWx1ZUNoYW5nZS5lbWl0KGRhdGUpKVxyXG4gICAgKTtcclxuXHJcblxyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5jaGFuZ2VWaWV3TW9kZSh0aGlzLl9jb25maWcuc3RhcnRWaWV3KSk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGltZVN1Yi5hZGQodGhpcy5zZWxlY3RlZFRpbWU/LnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVwaWNrZXI/LndyaXRlVmFsdWUodmFsWzBdKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5zdGFydFRpbWVwaWNrZXI/LnJlZ2lzdGVyT25DaGFuZ2UoKHZhbDogYW55KSA9PiB7XHJcbiAgICAgIHRoaXMudGltZVNlbGVjdEhhbmRsZXIodmFsLCAwKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVG9wUG9zaXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9wJyk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvblNlcnZpY2VFbmFibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB0aW1lU2VsZWN0SGFuZGxlcihkYXRlOiBEYXRlLCBpbmRleDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFRpbWUoZGF0ZSwgaW5kZXgpKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIGlmICghZGF5KSB7XHJcbiAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPyBkYXkuaXNEaXNhYmxlZCA6IChkYXkuaXNPdGhlck1vbnRoIHx8IGRheS5pc0Rpc2FibGVkKTtcclxuXHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QoZGF5LmRhdGUpKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIG1vbnRoU2VsZWN0SGFuZGxlcihkYXk6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgaWYgKCFkYXkgfHwgZGF5LmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxyXG4gICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVuaXQ6IHtcclxuICAgICAgICAgIG1vbnRoOiBnZXRNb250aChkYXkuZGF0ZSksXHJcbiAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihkYXkuZGF0ZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZpZXdNb2RlOiAnZGF5J1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHllYXJTZWxlY3RIYW5kbGVyKGRheTogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICBpZiAoIWRheSB8fCBkYXkuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgdW5pdDoge1xyXG4gICAgICAgICAgeWVhcjogZ2V0RnVsbFllYXIoZGF5LmRhdGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICB2aWV3TW9kZTogJ21vbnRoJ1xyXG4gICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHNldFRvZGF5KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QobmV3IERhdGUoKSkpO1xyXG4gIH1cclxuXHJcbiAgb3ZlcnJpZGUgY2xlYXJEYXRlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fYWN0aW9ucy5zZWxlY3QodW5kZWZpbmVkKSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnNlbGVjdGVkVGltZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgdGhpcy5fZWZmZWN0cz8uZGVzdHJveSgpO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIGRheXMgY2FsZW5kYXIgdmlldyBtb2RlIC0tPlxyXG48ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlclwiIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCIgKm5nSWY9XCJ2aWV3TW9kZSB8IGFzeW5jXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItY29udGFpbmVyXCJcclxuICAgIFtAZGF0ZXBpY2tlckFuaW1hdGlvbl09XCJhbmltYXRpb25TdGF0ZVwiXHJcbiAgICAoQGRhdGVwaWNrZXJBbmltYXRpb24uZG9uZSk9XCJwb3NpdGlvblNlcnZpY2VFbmFibGUoKVwiPlxyXG4gICAgPCEtLWNhbGVuZGFycy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWNhbGVuZGFyLWNvbnRhaW5lclwiIFtuZ1N3aXRjaF09XCJ2aWV3TW9kZSB8IGFzeW5jXCIgcm9sZT1cImFwcGxpY2F0aW9uXCI+XHJcbiAgICAgIDwhLS1kYXlzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkYXknXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJzLWRheXMtY2FsZW5kYXItdmlld1xyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgZGF5c0NhbGVuZGFyJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uVmlld01vZGUpPVwic2V0Vmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvbkhvdmVyKT1cImRheUhvdmVySGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uSG92ZXJXZWVrKT1cIndlZWtIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvblNlbGVjdCk9XCJkYXlTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICAgIDwvYnMtZGF5cy1jYWxlbmRhci12aWV3PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ3aXRoVGltZXBpY2tlclwiIGNsYXNzPVwiYnMtdGltZXBpY2tlci1pbi1kYXRlcGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHRpbWVwaWNrZXIgI3N0YXJ0VFA+PC90aW1lcGlja2VyPlxyXG4gICAgICAgICAgPHRpbWVwaWNrZXIgI2VuZFRQICpuZ0lmPVwiaXNSYW5nZVBpY2tlclwiPjwvdGltZXBpY2tlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8IS0tbW9udGhzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxicy1tb250aC1jYWxlbmRhci12aWV3XHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgbW9udGhzQ2FsZW5kYXIgfCBhc3luY1wiXHJcbiAgICAgICAgICBbY2xhc3MuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZV09XCJtdWx0aXBsZUNhbGVuZGFyc1wiXHJcbiAgICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAgIChvblZpZXdNb2RlKT1cInNldFZpZXdNb2RlKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uSG92ZXIpPVwibW9udGhIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25TZWxlY3QpPVwibW9udGhTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICA8L2JzLW1vbnRoLWNhbGVuZGFyLXZpZXc+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLXllYXJzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiIGNsYXNzPVwiYnMtbWVkaWEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJzLXllYXJzLWNhbGVuZGFyLXZpZXdcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjYWxlbmRhciBvZiB5ZWFyc0NhbGVuZGFyIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25WaWV3TW9kZSk9XCJzZXRWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgICAgIChvbkhvdmVyKT1cInllYXJIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25TZWxlY3QpPVwieWVhclNlbGVjdEhhbmRsZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvYnMteWVhcnMtY2FsZW5kYXItdmlldz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tYXBwbHljYW5jZWwgYnV0dG9ucy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYnV0dG9uc1wiICpuZ0lmPVwiZmFsc2VcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIj5BcHBseTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYnV0dG9uc1wiICpuZ0lmPVwic2hvd1RvZGF5QnRuIHx8IHNob3dDbGVhckJ0blwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvZGF5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1sZWZ0XT1cInRvZGF5UG9zID09PSAnbGVmdCdcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1yaWdodF09XCJ0b2RheVBvcyA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgICAgW2NsYXNzLnRvZGF5LWNlbnRlcl09XCJ0b2RheVBvcyA9PT0gJ2NlbnRlcidcIlxyXG4gICAgICAgICAgICpuZ0lmPVwic2hvd1RvZGF5QnRuXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJzZXRUb2RheSgpXCI+e3t0b2RheUJ0bkxibH19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNsZWFyLXdyYXBwZXJcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1sZWZ0XT1cImNsZWFyUG9zID09PSAnbGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1yaWdodF09XCJjbGVhclBvcyA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgW2NsYXNzLmNsZWFyLWNlbnRlcl09XCJjbGVhclBvcyA9PT0gJ2NlbnRlcidcIlxyXG4gICAgICAgICpuZ0lmPVwic2hvd0NsZWFyQnRuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImNsZWFyRGF0ZSgpXCI+e3tjbGVhckJ0bkxibH19PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS1jdXN0b20gZGF0ZXMgb3IgZGF0ZSByYW5nZXMgcGlja2VyLS0+XHJcbiAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlXCIgKm5nSWY9XCJjdXN0b21SYW5nZXMgJiYgY3VzdG9tUmFuZ2VzLmxlbmd0aCA+IDBcIj5cclxuICAgIDxicy1jdXN0b20tZGF0ZS12aWV3XHJcbiAgICAgIFtzZWxlY3RlZFJhbmdlXT1cImNob3NlblJhbmdlXCJcclxuICAgICAgW3Jhbmdlc109XCJjdXN0b21SYW5nZXNcIlxyXG4gICAgICBbY3VzdG9tUmFuZ2VMYWJlbF09XCJjdXN0b21SYW5nZUJ0bkxibFwiXHJcbiAgICAgIChvblNlbGVjdCk9XCJzZXRSYW5nZU9uQ2FsZW5kYXIoJGV2ZW50KVwiPlxyXG4gICAgPC9icy1jdXN0b20tZGF0ZS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19