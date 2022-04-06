import { Component, ElementRef, EventEmitter, Renderer2, ViewChild } from '@angular/core';
import { take } from 'rxjs/operators';
import { getFullYear, getMonth } from 'ngx-bootstrap/chronos';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { TimepickerComponent } from 'ngx-bootstrap/timepicker';
import { BsDatepickerAbstractComponent } from '../../base/bs-datepicker-container';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import { BsDatepickerActions } from '../../reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from '../../reducer/bs-datepicker.effects';
import { BsDatepickerStore } from '../../reducer/bs-datepicker.store';
import { datepickerAnimation } from '../../datepicker-animations';
import { dayInMilliseconds } from '../../reducer/_defaults';
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
const _c1 = ["endTP"];
function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-days-calendar-view", 11);
    i0.ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(3); return ctx_r10.navigateTo($event); })("onViewMode", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(3); return ctx_r12.setViewMode($event); })("onHover", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(3); return ctx_r13.dayHoverHandler($event); })("onHoverWeek", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onHoverWeek_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(3); return ctx_r14.weekHoverHandler($event); })("onSelect", function BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template_bs_days_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(3); return ctx_r15.daySelectHandler($event); });
    i0.ɵɵpipe(1, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r9 = ctx.$implicit;
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r7.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r9)("options", i0.ɵɵpipeBind1(1, 4, ctx_r7.options$));
} }
function BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "timepicker", null, 15);
} }
function BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12);
    i0.ɵɵelement(1, "timepicker", null, 13);
    i0.ɵɵtemplate(3, BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_timepicker_3_Template, 2, 0, "timepicker", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r8.isRangePicker);
} }
function BsDaterangepickerContainerComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 8);
    i0.ɵɵtemplate(2, BsDaterangepickerContainerComponent_div_0_ng_container_4_bs_days_calendar_view_2_Template, 2, 6, "bs-days-calendar-view", 9);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, BsDaterangepickerContainerComponent_div_0_ng_container_4_div_4_Template, 4, 1, "div", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(3, 2, ctx_r1.daysCalendar$));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.withTimepicker);
} }
function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-month-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r21 = i0.ɵɵnextContext(3); return ctx_r21.navigateTo($event); })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r23 = i0.ɵɵnextContext(3); return ctx_r23.setViewMode($event); })("onHover", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r24 = i0.ɵɵnextContext(3); return ctx_r24.monthHoverHandler($event); })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template_bs_month_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r22); const ctx_r25 = i0.ɵɵnextContext(3); return ctx_r25.monthSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r20 = ctx.$implicit;
    const ctx_r19 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r19.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r20);
} }
function BsDaterangepickerContainerComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_5_bs_month_calendar_view_1_Template, 1, 3, "bs-month-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r2.monthsCalendar));
} }
function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "bs-years-calendar-view", 17);
    i0.ɵɵlistener("onNavigate", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onNavigate_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(3); return ctx_r28.navigateTo($event); })("onViewMode", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onViewMode_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r30 = i0.ɵɵnextContext(3); return ctx_r30.setViewMode($event); })("onHover", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onHover_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r31 = i0.ɵɵnextContext(3); return ctx_r31.yearHoverHandler($event); })("onSelect", function BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template_bs_years_calendar_view_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r32 = i0.ɵɵnextContext(3); return ctx_r32.yearSelectHandler($event); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendar_r27 = ctx.$implicit;
    const ctx_r26 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("bs-datepicker-multiple", ctx_r26.multipleCalendars);
    i0.ɵɵproperty("calendar", calendar_r27);
} }
function BsDaterangepickerContainerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_6_bs_years_calendar_view_1_Template, 1, 3, "bs-years-calendar-view", 16);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r3.yearsCalendar));
} }
function BsDaterangepickerContainerComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵelementStart(1, "button", 19);
    i0.ɵɵtext(2, "Apply");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 20);
    i0.ɵɵtext(4, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r36); const ctx_r35 = i0.ɵɵnextContext(3); return ctx_r35.setToday(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r33 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("today-left", ctx_r33.todayPos === "left")("today-right", ctx_r33.todayPos === "right")("today-center", ctx_r33.todayPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r33.todayBtnLbl);
} }
function BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵelementStart(1, "button", 24);
    i0.ɵɵlistener("click", function BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r38); const ctx_r37 = i0.ɵɵnextContext(3); return ctx_r37.clearDate(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r34 = i0.ɵɵnextContext(3);
    i0.ɵɵclassProp("clear-left", ctx_r34.clearPos === "left")("clear-right", ctx_r34.clearPos === "right")("clear-center", ctx_r34.clearPos === "center");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r34.clearBtnLbl);
} }
function BsDaterangepickerContainerComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, BsDaterangepickerContainerComponent_div_0_div_8_div_1_Template, 3, 7, "div", 21);
    i0.ɵɵtemplate(2, BsDaterangepickerContainerComponent_div_0_div_8_div_2_Template, 3, 7, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showTodayBtn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r5.showClearBtn);
} }
function BsDaterangepickerContainerComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵelementStart(1, "bs-custom-date-view", 27);
    i0.ɵɵlistener("onSelect", function BsDaterangepickerContainerComponent_div_0_div_9_Template_bs_custom_date_view_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r39 = i0.ɵɵnextContext(2); return ctx_r39.setRangeOnCalendar($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("selectedRange", ctx_r6.chosenRange)("ranges", ctx_r6.customRanges)("customRangeLabel", ctx_r6.customRangeBtnLbl);
} }
function BsDaterangepickerContainerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵlistener("@datepickerAnimation.done", function BsDaterangepickerContainerComponent_div_0_Template_div_animation_datepickerAnimation_done_1_listener() { i0.ɵɵrestoreView(_r42); const ctx_r41 = i0.ɵɵnextContext(); return ctx_r41.positionServiceEnable(); });
    i0.ɵɵelementStart(2, "div", 3);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵtemplate(4, BsDaterangepickerContainerComponent_div_0_ng_container_4_Template, 5, 4, "ng-container", 4);
    i0.ɵɵtemplate(5, BsDaterangepickerContainerComponent_div_0_div_5_Template, 3, 3, "div", 5);
    i0.ɵɵtemplate(6, BsDaterangepickerContainerComponent_div_0_div_6_Template, 3, 3, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, BsDaterangepickerContainerComponent_div_0_div_7_Template, 5, 0, "div", 6);
    i0.ɵɵtemplate(8, BsDaterangepickerContainerComponent_div_0_div_8_Template, 3, 2, "div", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, BsDaterangepickerContainerComponent_div_0_div_9_Template, 2, 3, "div", 7);
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
export class BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positionService) {
        super();
        this._config = _config;
        this._store = _store;
        this._element = _element;
        this._actions = _actions;
        this._positionService = _positionService;
        this.valueChange = new EventEmitter();
        this.animationState = 'void';
        this._rangeStack = [];
        this.chosenRange = [];
        this._subs = [];
        this.isRangePicker = true;
        this._effects = _effects;
        this.customRanges = this._config.ranges || [];
        this.customRangeBtnLbl = this._config.customRangeButtonLabel;
        _renderer.setStyle(_element.nativeElement, 'display', 'block');
        _renderer.setStyle(_element.nativeElement, 'position', 'absolute');
    }
    set value(value) {
        this._effects?.setRangeValue(value);
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
        this.containerClass = this._config.containerClass;
        this.isOtherMonthsActive = this._config.selectFromOtherMonth;
        this.withTimepicker = this._config.withTimepicker;
        this._effects?.init(this._store)
            // intial state options
            // todo: fix this, split configs
            .setOptions(this._config)
            // data binding view --> model
            .setBindings(this)
            // set event handlers
            .setEventHandlers(this)
            .registerDatepickerSideEffects();
        // todo: move it somewhere else
        // on selected date change
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .subscribe(dateRange => {
            this.valueChange.emit(dateRange);
            this.chosenRange = dateRange || [];
        }));
    }
    ngAfterViewInit() {
        this.selectedTimeSub.add(this.selectedTime?.subscribe((val) => {
            if (Array.isArray(val) && val.length >= 2) {
                this.startTimepicker?.writeValue(val[0]);
                this.endTimepicker?.writeValue(val[1]);
            }
        }));
        this.startTimepicker?.registerOnChange((val) => {
            this.timeSelectHandler(val, 0);
        });
        this.endTimepicker?.registerOnChange((val) => {
            this.timeSelectHandler(val, 1);
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
        this.rangesProcessing(day);
    }
    monthSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        day.isSelected = true;
        if (this._config.minMode !== 'month') {
            if (day.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    month: getMonth(day.date),
                    year: getFullYear(day.date)
                },
                viewMode: 'day'
            }));
            return;
        }
        this.rangesProcessing(day);
    }
    yearSelectHandler(day) {
        if (!day || day.isDisabled) {
            return;
        }
        day.isSelected = true;
        if (this._config.minMode !== 'year') {
            if (day.isDisabled) {
                return;
            }
            this._store.dispatch(this._actions.navigateTo({
                unit: {
                    year: getFullYear(day.date)
                },
                viewMode: 'month'
            }));
            return;
        }
        this.rangesProcessing(day);
    }
    rangesProcessing(day) {
        // if only one date is already selected
        // and user clicks on previous date
        // start selection from new date
        // but if new date is after initial one
        // than finish selection
        if (this._rangeStack.length === 1) {
            this._rangeStack =
                day.date >= this._rangeStack[0]
                    ? [this._rangeStack[0], day.date]
                    : [day.date];
        }
        if (this._config.maxDateRange) {
            this.setMaxDateRangeOnCalendar(day.date);
        }
        if (this._rangeStack.length === 0) {
            this._rangeStack = [day.date];
            if (this._config.maxDateRange) {
                this.setMaxDateRangeOnCalendar(day.date);
            }
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
        if (this._rangeStack.length === 2) {
            this._rangeStack = [];
        }
    }
    ngOnDestroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        this.selectedTimeSub.unsubscribe();
        this._effects?.destroy();
    }
    setRangeOnCalendar(dates) {
        if (dates) {
            this._rangeStack = dates.value instanceof Date ? [dates.value] : dates.value;
        }
        this._store.dispatch(this._actions.selectRange(this._rangeStack));
    }
    setMaxDateRangeOnCalendar(currentSelection) {
        let maxDateRange = new Date(currentSelection);
        if (this._config.maxDate) {
            const maxDateValueInMilliseconds = this._config.maxDate.getTime();
            const maxDateRangeInMilliseconds = currentSelection.getTime() + ((this._config.maxDateRange || 0) * dayInMilliseconds);
            maxDateRange = maxDateRangeInMilliseconds > maxDateValueInMilliseconds ?
                new Date(this._config.maxDate) :
                new Date(maxDateRangeInMilliseconds);
        }
        else {
            maxDateRange.setDate(currentSelection.getDate() + (this._config.maxDateRange || 0));
        }
        this._effects?.setMaxDate(maxDateRange);
    }
}
BsDaterangepickerContainerComponent.ɵfac = function BsDaterangepickerContainerComponent_Factory(t) { return new (t || BsDaterangepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i2.BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.BsDatepickerActions), i0.ɵɵdirectiveInject(i4.BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDaterangepickerContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDaterangepickerContainerComponent, selectors: [["bs-daterangepicker-container"]], viewQuery: function BsDaterangepickerContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 5);
        i0.ɵɵviewQuery(_c1, 5);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.startTimepicker = _t.first);
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.endTimepicker = _t.first);
    } }, hostAttrs: ["role", "dialog", "aria-label", "calendar", 1, "bottom"], hostBindings: function BsDaterangepickerContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDaterangepickerContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDaterangepickerContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDaterangepickerContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, i7.BsDaysCalendarViewComponent, i8.TimepickerComponent, i9.BsMonthCalendarViewComponent, i10.BsYearsCalendarViewComponent, i11.BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-daterangepicker-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: i1.BsDatepickerConfig }, { type: i2.BsDatepickerStore }, { type: i0.ElementRef }, { type: i3.BsDatepickerActions }, { type: i4.BsDatepickerEffects }, { type: i5.PositioningService }]; }, { startTimepicker: [{
            type: ViewChild,
            args: ['startTP']
        }], endTimepicker: [{
            type: ViewChild,
            args: ['endTP']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lci5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci12aWV3Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE9BQU8sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDL0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFL0QsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sb0NBQW9DLENBQUM7QUFDbkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFFaEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDdEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFFbEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDaEJsRCxpREFTd0M7SUFKdEMseVBBQWMsMEJBQWtC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QztRQzdCckQsc0ZBeUZNOzs7UUF6RmlELHlEQUFzQjs2U0RxQy9ELENBQUMsbUJBQW1CLENBQUM7dUZBRXRCLG1DQUFtQztjQVovQyxTQUFTOzJCQUNFLDhCQUE4QixhQUM3QixDQUFDLGlCQUFpQixFQUFFLG1CQUFtQixDQUFDLFFBRTdDO29CQUNKLEtBQUssRUFBRSxRQUFRO29CQUNmLFNBQVMsRUFBRSwwQkFBMEI7b0JBQ3JDLElBQUksRUFBRSxRQUFRO29CQUNkLFlBQVksRUFBRSxVQUFVO2lCQUN6QixjQUNXLENBQUMsbUJBQW1CLENBQUM7MlBBaUJYLGVBQWU7a0JBQXBDLFNBQVM7bUJBQUMsU0FBUztZQUNBLGFBQWE7a0JBQWhDLFNBQVM7bUJBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0NoaWxkXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IGdldEZ1bGxZZWFyLCBnZXRNb250aCB9IGZyb20gJ25neC1ib290c3RyYXAvY2hyb25vcyc7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyQ29tcG9uZW50IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFic3RyYWN0Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vYmFzZS9icy1kYXRlcGlja2VyLWNvbnRhaW5lcic7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJy4uLy4uL2JzLWRhdGVwaWNrZXIuY29uZmlnJztcclxuaW1wb3J0IHsgQ2FsZW5kYXJDZWxsVmlld01vZGVsLCBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJFZmZlY3RzIH0gZnJvbSAnLi4vLi4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4uLy4uL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5zdG9yZSc7XHJcbmltcG9ydCB7IGRhdGVwaWNrZXJBbmltYXRpb24gfSBmcm9tICcuLi8uLi9kYXRlcGlja2VyLWFuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi9icy1jdXN0b20tZGF0ZXMtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBkYXlJbk1pbGxpc2Vjb25kcyB9IGZyb20gJy4uLy4uL3JlZHVjZXIvX2RlZmF1bHRzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXJhbmdlcGlja2VyLWNvbnRhaW5lcicsXHJcbiAgcHJvdmlkZXJzOiBbQnNEYXRlcGlja2VyU3RvcmUsIEJzRGF0ZXBpY2tlckVmZmVjdHNdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9icy1kYXRlcGlja2VyLXZpZXcuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdib3R0b20nLFxyXG4gICAgJyhjbGljayknOiAnX3N0b3BQcm9wYWdhdGlvbigkZXZlbnQpJyxcclxuICAgIHJvbGU6ICdkaWFsb2cnLFxyXG4gICAgJ2FyaWEtbGFiZWwnOiAnY2FsZW5kYXInXHJcbiAgfSxcclxuICBhbmltYXRpb25zOiBbZGF0ZXBpY2tlckFuaW1hdGlvbl1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgQnNEYXRlcGlja2VyQWJzdHJhY3RDb21wb25lbnRcclxuICBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgc2V0IHZhbHVlKHZhbHVlOiAoRGF0ZXx1bmRlZmluZWQpW10gfCB1bmRlZmluZWQpIHtcclxuICAgIHRoaXMuX2VmZmVjdHM/LnNldFJhbmdlVmFsdWUodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPERhdGVbXT4oKTtcclxuICBhbmltYXRpb25TdGF0ZSA9ICd2b2lkJztcclxuXHJcbiAgX3JhbmdlU3RhY2s6IERhdGVbXSA9IFtdO1xyXG4gIG92ZXJyaWRlIGNob3NlblJhbmdlOiBEYXRlW10gPSBbXTtcclxuICBfc3ViczogU3Vic2NyaXB0aW9uW10gPSBbXTtcclxuICBvdmVycmlkZSBpc1JhbmdlUGlja2VyID0gdHJ1ZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnc3RhcnRUUCcpIHN0YXJ0VGltZXBpY2tlcj86IFRpbWVwaWNrZXJDb21wb25lbnQ7XHJcbiAgQFZpZXdDaGlsZCgnZW5kVFAnKSBlbmRUaW1lcGlja2VyPzogVGltZXBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfc3RvcmU6IEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgcHJpdmF0ZSBfZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgX2FjdGlvbnM6IEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICBfZWZmZWN0czogQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uU2VydmljZTogUG9zaXRpb25pbmdTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5fZWZmZWN0cyA9IF9lZmZlY3RzO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tUmFuZ2VzID0gdGhpcy5fY29uZmlnLnJhbmdlcyB8fCBbXTtcclxuICAgIHRoaXMuY3VzdG9tUmFuZ2VCdG5MYmwgPSB0aGlzLl9jb25maWcuY3VzdG9tUmFuZ2VCdXR0b25MYWJlbDtcclxuXHJcbiAgICBfcmVuZGVyZXIuc2V0U3R5bGUoX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnYmxvY2snKTtcclxuICAgIF9yZW5kZXJlci5zZXRTdHlsZShfZWxlbWVudC5uYXRpdmVFbGVtZW50LCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLnNldE9wdGlvbnMoe1xyXG4gICAgICBtb2RpZmllcnM6IHtcclxuICAgICAgICBmbGlwOiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuYWRhcHRpdmVQb3NpdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJldmVudE92ZXJmbG93OiB7XHJcbiAgICAgICAgICBlbmFibGVkOiB0aGlzLl9jb25maWcuYWRhcHRpdmVQb3NpdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYWxsb3dlZFBvc2l0aW9uczogdGhpcy5fY29uZmlnLmFsbG93ZWRQb3NpdGlvbnNcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX3Bvc2l0aW9uU2VydmljZS5ldmVudCQ/LnBpcGUodGFrZSgxKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb25TZXJ2aWNlLmRpc2FibGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2NvbmZpZy5pc0FuaW1hdGVkKSB7XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gdGhpcy5pc1RvcFBvc2l0aW9uID8gJ2FuaW1hdGVkLXVwJyA6ICdhbmltYXRlZC1kb3duJztcclxuXHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0YXRlID0gJ3VuYW5pbWF0ZWQnO1xyXG4gICAgICB9KTtcclxuICAgIHRoaXMuY29udGFpbmVyQ2xhc3MgPSB0aGlzLl9jb25maWcuY29udGFpbmVyQ2xhc3M7XHJcbiAgICB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPSB0aGlzLl9jb25maWcuc2VsZWN0RnJvbU90aGVyTW9udGg7XHJcbiAgICB0aGlzLndpdGhUaW1lcGlja2VyID0gdGhpcy5fY29uZmlnLndpdGhUaW1lcGlja2VyO1xyXG4gICAgdGhpcy5fZWZmZWN0cz8uaW5pdCh0aGlzLl9zdG9yZSlcclxuICAgICAgLy8gaW50aWFsIHN0YXRlIG9wdGlvbnNcclxuICAgICAgLy8gdG9kbzogZml4IHRoaXMsIHNwbGl0IGNvbmZpZ3NcclxuICAgICAgLnNldE9wdGlvbnModGhpcy5fY29uZmlnKVxyXG4gICAgICAvLyBkYXRhIGJpbmRpbmcgdmlldyAtLT4gbW9kZWxcclxuICAgICAgLnNldEJpbmRpbmdzKHRoaXMpXHJcbiAgICAgIC8vIHNldCBldmVudCBoYW5kbGVyc1xyXG4gICAgICAuc2V0RXZlbnRIYW5kbGVycyh0aGlzKVxyXG4gICAgICAucmVnaXN0ZXJEYXRlcGlja2VyU2lkZUVmZmVjdHMoKTtcclxuXHJcbiAgICAvLyB0b2RvOiBtb3ZlIGl0IHNvbWV3aGVyZSBlbHNlXHJcbiAgICAvLyBvbiBzZWxlY3RlZCBkYXRlIGNoYW5nZVxyXG4gICAgdGhpcy5fc3Vicy5wdXNoKFxyXG4gICAgICB0aGlzLl9zdG9yZVxyXG4gICAgICAgIC5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUuc2VsZWN0ZWRSYW5nZSlcclxuICAgICAgICAuc3Vic2NyaWJlKGRhdGVSYW5nZSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQoZGF0ZVJhbmdlKTtcclxuICAgICAgICAgIHRoaXMuY2hvc2VuUmFuZ2UgPSBkYXRlUmFuZ2UgfHwgW107XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkVGltZVN1Yi5hZGQodGhpcy5zZWxlY3RlZFRpbWU/LnN1YnNjcmliZSgodmFsKSA9PiB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkgJiYgdmFsLmxlbmd0aCA+PSAyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWVwaWNrZXI/LndyaXRlVmFsdWUodmFsWzBdKTtcclxuICAgICAgICB0aGlzLmVuZFRpbWVwaWNrZXI/LndyaXRlVmFsdWUodmFsWzFdKTtcclxuICAgICAgfVxyXG4gICAgfSkpO1xyXG4gICAgdGhpcy5zdGFydFRpbWVwaWNrZXI/LnJlZ2lzdGVyT25DaGFuZ2UoKHZhbCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbWVTZWxlY3RIYW5kbGVyKHZhbCwgMCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZW5kVGltZXBpY2tlcj8ucmVnaXN0ZXJPbkNoYW5nZSgodmFsKSA9PiB7XHJcbiAgICAgIHRoaXMudGltZVNlbGVjdEhhbmRsZXIodmFsLCAxKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzVG9wUG9zaXRpb24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndG9wJyk7XHJcbiAgfVxyXG5cclxuICBwb3NpdGlvblNlcnZpY2VFbmFibGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9wb3NpdGlvblNlcnZpY2UuZW5hYmxlKCk7XHJcbiAgfVxyXG5cclxuICBvdmVycmlkZSB0aW1lU2VsZWN0SGFuZGxlcihkYXRlOiBEYXRlLCBpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFRpbWUoZGF0ZSwgaW5kZXgpKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIGRheVNlbGVjdEhhbmRsZXIoZGF5OiBEYXlWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIGlmICghZGF5KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSB0aGlzLmlzT3RoZXJNb250aHNBY3RpdmUgPyBkYXkuaXNEaXNhYmxlZCA6IChkYXkuaXNPdGhlck1vbnRoIHx8IGRheS5pc0Rpc2FibGVkKTtcclxuXHJcbiAgICBpZiAoaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhbmdlc1Byb2Nlc3NpbmcoZGF5KTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIG1vbnRoU2VsZWN0SGFuZGxlcihkYXk6IENhbGVuZGFyQ2VsbFZpZXdNb2RlbCk6IHZvaWQge1xyXG4gICAgaWYgKCFkYXkgfHwgZGF5LmlzRGlzYWJsZWQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGRheS5pc1NlbGVjdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fY29uZmlnLm1pbk1vZGUgIT09ICdtb250aCcpIHtcclxuICAgICAgaWYgKGRheS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKFxyXG4gICAgICAgIHRoaXMuX2FjdGlvbnMubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1bml0OiB7XHJcbiAgICAgICAgICAgIG1vbnRoOiBnZXRNb250aChkYXkuZGF0ZSksXHJcbiAgICAgICAgICAgIHllYXI6IGdldEZ1bGxZZWFyKGRheS5kYXRlKVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZpZXdNb2RlOiAnZGF5J1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhbmdlc1Byb2Nlc3NpbmcoZGF5KTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHllYXJTZWxlY3RIYW5kbGVyKGRheTogQ2FsZW5kYXJDZWxsVmlld01vZGVsKTogdm9pZCB7XHJcbiAgICBpZiAoIWRheSB8fCBkYXkuaXNEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZGF5LmlzU2VsZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9jb25maWcubWluTW9kZSAhPT0gJ3llYXInKSB7XHJcbiAgICAgIGlmIChkYXkuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICB0aGlzLl9hY3Rpb25zLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdW5pdDoge1xyXG4gICAgICAgICAgICB5ZWFyOiBnZXRGdWxsWWVhcihkYXkuZGF0ZSlcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2aWV3TW9kZTogJ21vbnRoJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJhbmdlc1Byb2Nlc3NpbmcoZGF5KTtcclxuICB9XHJcblxyXG4gIHJhbmdlc1Byb2Nlc3NpbmcoZGF5OiBDYWxlbmRhckNlbGxWaWV3TW9kZWwpOiB2b2lkIHtcclxuICAgIC8vIGlmIG9ubHkgb25lIGRhdGUgaXMgYWxyZWFkeSBzZWxlY3RlZFxyXG4gICAgLy8gYW5kIHVzZXIgY2xpY2tzIG9uIHByZXZpb3VzIGRhdGVcclxuICAgIC8vIHN0YXJ0IHNlbGVjdGlvbiBmcm9tIG5ldyBkYXRlXHJcbiAgICAvLyBidXQgaWYgbmV3IGRhdGUgaXMgYWZ0ZXIgaW5pdGlhbCBvbmVcclxuICAgIC8vIHRoYW4gZmluaXNoIHNlbGVjdGlvblxyXG5cclxuICAgIGlmICh0aGlzLl9yYW5nZVN0YWNrLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICB0aGlzLl9yYW5nZVN0YWNrID1cclxuICAgICAgICBkYXkuZGF0ZSA+PSB0aGlzLl9yYW5nZVN0YWNrWzBdXHJcbiAgICAgICAgICA/IFt0aGlzLl9yYW5nZVN0YWNrWzBdLCBkYXkuZGF0ZV1cclxuICAgICAgICAgIDogIFtkYXkuZGF0ZV07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2NvbmZpZy5tYXhEYXRlUmFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRNYXhEYXRlUmFuZ2VPbkNhbGVuZGFyKGRheS5kYXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtkYXkuZGF0ZV07XHJcblxyXG4gICAgICBpZiAodGhpcy5fY29uZmlnLm1heERhdGVSYW5nZSkge1xyXG4gICAgICAgIHRoaXMuc2V0TWF4RGF0ZVJhbmdlT25DYWxlbmRhcihkYXkuZGF0ZSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHRoaXMuX3JhbmdlU3RhY2spKTtcclxuXHJcbiAgICBpZiAodGhpcy5fcmFuZ2VTdGFjay5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5fcmFuZ2VTdGFjayA9IFtdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICBmb3IgKGNvbnN0IHN1YiBvZiB0aGlzLl9zdWJzKSB7XHJcbiAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RlZFRpbWVTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuX2VmZmVjdHM/LmRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG92ZXJyaWRlIHNldFJhbmdlT25DYWxlbmRhcihkYXRlczogQnNDdXN0b21EYXRlcyk6IHZvaWQge1xyXG4gICAgaWYgKGRhdGVzKSB7XHJcbiAgICAgIHRoaXMuX3JhbmdlU3RhY2sgPSBkYXRlcy52YWx1ZSBpbnN0YW5jZW9mIERhdGUgPyBbZGF0ZXMudmFsdWVdIDogZGF0ZXMudmFsdWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaCh0aGlzLl9hY3Rpb25zLnNlbGVjdFJhbmdlKHRoaXMuX3JhbmdlU3RhY2spKTtcclxuICB9XHJcblxyXG4gIHNldE1heERhdGVSYW5nZU9uQ2FsZW5kYXIoY3VycmVudFNlbGVjdGlvbjogRGF0ZSk6IHZvaWQge1xyXG4gICAgbGV0IG1heERhdGVSYW5nZSA9IG5ldyBEYXRlKGN1cnJlbnRTZWxlY3Rpb24pO1xyXG5cclxuICAgIGlmICh0aGlzLl9jb25maWcubWF4RGF0ZSkge1xyXG4gICAgICBjb25zdCBtYXhEYXRlVmFsdWVJbk1pbGxpc2Vjb25kcyA9IHRoaXMuX2NvbmZpZy5tYXhEYXRlLmdldFRpbWUoKTtcclxuICAgICAgY29uc3QgbWF4RGF0ZVJhbmdlSW5NaWxsaXNlY29uZHMgPSBjdXJyZW50U2VsZWN0aW9uLmdldFRpbWUoKSArICgodGhpcy5fY29uZmlnLm1heERhdGVSYW5nZSB8fCAwKSAqIGRheUluTWlsbGlzZWNvbmRzICk7XHJcbiAgICAgIG1heERhdGVSYW5nZSA9IG1heERhdGVSYW5nZUluTWlsbGlzZWNvbmRzID4gbWF4RGF0ZVZhbHVlSW5NaWxsaXNlY29uZHMgP1xyXG4gICAgICAgIG5ldyBEYXRlKHRoaXMuX2NvbmZpZy5tYXhEYXRlKSA6XHJcbiAgICAgICAgbmV3IERhdGUobWF4RGF0ZVJhbmdlSW5NaWxsaXNlY29uZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWF4RGF0ZVJhbmdlLnNldERhdGUoY3VycmVudFNlbGVjdGlvbi5nZXREYXRlKCkgKyAodGhpcy5fY29uZmlnLm1heERhdGVSYW5nZSB8fCAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fZWZmZWN0cz8uc2V0TWF4RGF0ZShtYXhEYXRlUmFuZ2UpO1xyXG4gIH1cclxufVxyXG4iLCI8IS0tIGRheXMgY2FsZW5kYXIgdmlldyBtb2RlIC0tPlxyXG48ZGl2IGNsYXNzPVwiYnMtZGF0ZXBpY2tlclwiIFtuZ0NsYXNzXT1cImNvbnRhaW5lckNsYXNzXCIgKm5nSWY9XCJ2aWV3TW9kZSB8IGFzeW5jXCI+XHJcbiAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItY29udGFpbmVyXCJcclxuICAgIFtAZGF0ZXBpY2tlckFuaW1hdGlvbl09XCJhbmltYXRpb25TdGF0ZVwiXHJcbiAgICAoQGRhdGVwaWNrZXJBbmltYXRpb24uZG9uZSk9XCJwb3NpdGlvblNlcnZpY2VFbmFibGUoKVwiPlxyXG4gICAgPCEtLWNhbGVuZGFycy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWNhbGVuZGFyLWNvbnRhaW5lclwiIFtuZ1N3aXRjaF09XCJ2aWV3TW9kZSB8IGFzeW5jXCIgcm9sZT1cImFwcGxpY2F0aW9uXCI+XHJcbiAgICAgIDwhLS1kYXlzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkYXknXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPGJzLWRheXMtY2FsZW5kYXItdmlld1xyXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgZGF5c0NhbGVuZGFyJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgICBbb3B0aW9uc109XCJvcHRpb25zJCB8IGFzeW5jXCJcclxuICAgICAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uVmlld01vZGUpPVwic2V0Vmlld01vZGUoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvbkhvdmVyKT1cImRheUhvdmVySGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgKG9uSG92ZXJXZWVrKT1cIndlZWtIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgIChvblNlbGVjdCk9XCJkYXlTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICAgIDwvYnMtZGF5cy1jYWxlbmRhci12aWV3PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJ3aXRoVGltZXBpY2tlclwiIGNsYXNzPVwiYnMtdGltZXBpY2tlci1pbi1kYXRlcGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPHRpbWVwaWNrZXIgI3N0YXJ0VFA+PC90aW1lcGlja2VyPlxyXG4gICAgICAgICAgPHRpbWVwaWNrZXIgI2VuZFRQICpuZ0lmPVwiaXNSYW5nZVBpY2tlclwiPjwvdGltZXBpY2tlcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICA8IS0tbW9udGhzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIiBjbGFzcz1cImJzLW1lZGlhLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxicy1tb250aC1jYWxlbmRhci12aWV3XHJcbiAgICAgICAgICAqbmdGb3I9XCJsZXQgY2FsZW5kYXIgb2YgbW9udGhzQ2FsZW5kYXIgfCBhc3luY1wiXHJcbiAgICAgICAgICBbY2xhc3MuYnMtZGF0ZXBpY2tlci1tdWx0aXBsZV09XCJtdWx0aXBsZUNhbGVuZGFyc1wiXHJcbiAgICAgICAgICBbY2FsZW5kYXJdPVwiY2FsZW5kYXJcIlxyXG4gICAgICAgICAgKG9uTmF2aWdhdGUpPVwibmF2aWdhdGVUbygkZXZlbnQpXCJcclxuICAgICAgICAgIChvblZpZXdNb2RlKT1cInNldFZpZXdNb2RlKCRldmVudClcIlxyXG4gICAgICAgICAgKG9uSG92ZXIpPVwibW9udGhIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25TZWxlY3QpPVwibW9udGhTZWxlY3RIYW5kbGVyKCRldmVudClcIj5cclxuICAgICAgICA8L2JzLW1vbnRoLWNhbGVuZGFyLXZpZXc+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPCEtLXllYXJzIGNhbGVuZGFyLS0+XHJcbiAgICAgIDxkaXYgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiIGNsYXNzPVwiYnMtbWVkaWEtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGJzLXllYXJzLWNhbGVuZGFyLXZpZXdcclxuICAgICAgICAgICpuZ0Zvcj1cImxldCBjYWxlbmRhciBvZiB5ZWFyc0NhbGVuZGFyIHwgYXN5bmNcIlxyXG4gICAgICAgICAgW2NsYXNzLmJzLWRhdGVwaWNrZXItbXVsdGlwbGVdPVwibXVsdGlwbGVDYWxlbmRhcnNcIlxyXG4gICAgICAgICAgW2NhbGVuZGFyXT1cImNhbGVuZGFyXCJcclxuICAgICAgICAgIChvbk5hdmlnYXRlKT1cIm5hdmlnYXRlVG8oJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25WaWV3TW9kZSk9XCJzZXRWaWV3TW9kZSgkZXZlbnQpXCJcclxuICAgICAgICAgIChvbkhvdmVyKT1cInllYXJIb3ZlckhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAob25TZWxlY3QpPVwieWVhclNlbGVjdEhhbmRsZXIoJGV2ZW50KVwiPlxyXG4gICAgICAgIDwvYnMteWVhcnMtY2FsZW5kYXItdmlldz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tYXBwbHljYW5jZWwgYnV0dG9ucy0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYnV0dG9uc1wiICpuZ0lmPVwiZmFsc2VcIj5cclxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIHR5cGU9XCJidXR0b25cIj5BcHBseTwvYnV0dG9uPlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1kZWZhdWx0XCIgdHlwZT1cImJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItYnV0dG9uc1wiICpuZ0lmPVwic2hvd1RvZGF5QnRuIHx8IHNob3dDbGVhckJ0blwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnRuLXRvZGF5LXdyYXBwZXJcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1sZWZ0XT1cInRvZGF5UG9zID09PSAnbGVmdCdcIlxyXG4gICAgICAgICAgIFtjbGFzcy50b2RheS1yaWdodF09XCJ0b2RheVBvcyA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgICAgW2NsYXNzLnRvZGF5LWNlbnRlcl09XCJ0b2RheVBvcyA9PT0gJ2NlbnRlcidcIlxyXG4gICAgICAgICAgICpuZ0lmPVwic2hvd1RvZGF5QnRuXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tc3VjY2Vzc1wiIChjbGljayk9XCJzZXRUb2RheSgpXCI+e3t0b2RheUJ0bkxibH19PC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuLWNsZWFyLXdyYXBwZXJcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1sZWZ0XT1cImNsZWFyUG9zID09PSAnbGVmdCdcIlxyXG4gICAgICAgIFtjbGFzcy5jbGVhci1yaWdodF09XCJjbGVhclBvcyA9PT0gJ3JpZ2h0J1wiXHJcbiAgICAgICAgW2NsYXNzLmNsZWFyLWNlbnRlcl09XCJjbGVhclBvcyA9PT0gJ2NlbnRlcidcIlxyXG4gICAgICAgICpuZ0lmPVwic2hvd0NsZWFyQnRuXCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1zdWNjZXNzXCIgKGNsaWNrKT1cImNsZWFyRGF0ZSgpXCI+e3tjbGVhckJ0bkxibH19PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcblxyXG4gIDwhLS1jdXN0b20gZGF0ZXMgb3IgZGF0ZSByYW5nZXMgcGlja2VyLS0+XHJcbiAgPGRpdiBjbGFzcz1cImJzLWRhdGVwaWNrZXItY3VzdG9tLXJhbmdlXCIgKm5nSWY9XCJjdXN0b21SYW5nZXMgJiYgY3VzdG9tUmFuZ2VzLmxlbmd0aCA+IDBcIj5cclxuICAgIDxicy1jdXN0b20tZGF0ZS12aWV3XHJcbiAgICAgIFtzZWxlY3RlZFJhbmdlXT1cImNob3NlblJhbmdlXCJcclxuICAgICAgW3Jhbmdlc109XCJjdXN0b21SYW5nZXNcIlxyXG4gICAgICBbY3VzdG9tUmFuZ2VMYWJlbF09XCJjdXN0b21SYW5nZUJ0bkxibFwiXHJcbiAgICAgIChvblNlbGVjdCk9XCJzZXRSYW5nZU9uQ2FsZW5kYXIoJGV2ZW50KVwiPlxyXG4gICAgPC9icy1jdXN0b20tZGF0ZS12aWV3PlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19