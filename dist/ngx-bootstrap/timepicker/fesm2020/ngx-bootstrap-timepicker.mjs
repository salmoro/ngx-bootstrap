import * as i0 from '@angular/core';
import { Injectable, forwardRef, EventEmitter, Component, ChangeDetectionStrategy, ViewEncapsulation, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import * as i4 from '@angular/common';
import { CommonModule } from '@angular/common';

class TimepickerActions {
    writeValue(value) {
        return {
            type: TimepickerActions.WRITE_VALUE,
            payload: value
        };
    }
    changeHours(event) {
        return {
            type: TimepickerActions.CHANGE_HOURS,
            payload: event
        };
    }
    changeMinutes(event) {
        return {
            type: TimepickerActions.CHANGE_MINUTES,
            payload: event
        };
    }
    changeSeconds(event) {
        return {
            type: TimepickerActions.CHANGE_SECONDS,
            payload: event
        };
    }
    setTime(value) {
        return {
            type: TimepickerActions.SET_TIME_UNIT,
            payload: value
        };
    }
    updateControls(value) {
        return {
            type: TimepickerActions.UPDATE_CONTROLS,
            payload: value
        };
    }
}
TimepickerActions.WRITE_VALUE = '[timepicker] write value from ng model';
TimepickerActions.CHANGE_HOURS = '[timepicker] change hours';
TimepickerActions.CHANGE_MINUTES = '[timepicker] change minutes';
TimepickerActions.CHANGE_SECONDS = '[timepicker] change seconds';
TimepickerActions.SET_TIME_UNIT = '[timepicker] set time unit';
TimepickerActions.UPDATE_CONTROLS = '[timepicker] update controls';
TimepickerActions.ɵfac = function TimepickerActions_Factory(t) { return new (t || TimepickerActions)(); };
TimepickerActions.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TimepickerActions, factory: TimepickerActions.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerActions, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], null, null); })();

const dex = 10;
const hoursPerDay = 24;
const hoursPerDayHalf = 12;
const minutesPerHour = 60;
const secondsPerMinute = 60;
function isValidDate(value) {
    if (!value) {
        return false;
    }
    if (value instanceof Date && isNaN(value.getHours())) {
        return false;
    }
    if (typeof value === 'string') {
        return isValidDate(new Date(value));
    }
    return true;
}
function isValidLimit(controls, newDate) {
    if (controls.min && newDate < controls.min) {
        return false;
    }
    if (controls.max && newDate > controls.max) {
        return false;
    }
    return true;
}
function toNumber(value) {
    if (typeof value === 'undefined') {
        return NaN;
    }
    if (typeof value === 'number') {
        return value;
    }
    return parseInt(value, dex);
}
function isNumber(value) {
    return !isNaN(toNumber(value));
}
function parseHours(value, isPM = false) {
    const hour = toNumber(value);
    if (isNaN(hour) ||
        hour < 0 ||
        hour > (isPM ? hoursPerDayHalf : hoursPerDay)) {
        return NaN;
    }
    return hour;
}
function parseMinutes(value) {
    const minute = toNumber(value);
    if (isNaN(minute) || minute < 0 || minute > minutesPerHour) {
        return NaN;
    }
    return minute;
}
function parseSeconds(value) {
    const seconds = toNumber(value);
    if (isNaN(seconds) || seconds < 0 || seconds > secondsPerMinute) {
        return NaN;
    }
    return seconds;
}
function parseTime(value) {
    if (typeof value === 'string') {
        return new Date(value);
    }
    return value;
}
function changeTime(value, diff) {
    if (!value) {
        return changeTime(createDate(new Date(), 0, 0, 0), diff);
    }
    if (!diff) {
        return value;
    }
    let hour = value.getHours();
    let minutes = value.getMinutes();
    let seconds = value.getSeconds();
    if (diff.hour) {
        hour = hour + toNumber(diff.hour);
    }
    if (diff.minute) {
        minutes = minutes + toNumber(diff.minute);
    }
    if (diff.seconds) {
        seconds = seconds + toNumber(diff.seconds);
    }
    return createDate(value, hour, minutes, seconds);
}
function setTime(value, opts) {
    let hour = parseHours(opts.hour);
    const minute = parseMinutes(opts.minute);
    const seconds = parseSeconds(opts.seconds) || 0;
    if (opts.isPM && hour !== 12) {
        hour += hoursPerDayHalf;
    }
    if (!value) {
        if (!isNaN(hour) && !isNaN(minute)) {
            return createDate(new Date(), hour, minute, seconds);
        }
        return value;
    }
    if (isNaN(hour) || isNaN(minute)) {
        return value;
    }
    return createDate(value, hour, minute, seconds);
}
function createDate(value, hours, minutes, seconds) {
    const newValue = new Date(value.getFullYear(), value.getMonth(), value.getDate(), hours, minutes, seconds, value.getMilliseconds());
    // #3139 ensure date part remains unchanged
    newValue.setFullYear(value.getFullYear());
    newValue.setMonth(value.getMonth());
    newValue.setDate(value.getDate());
    return newValue;
}
function padNumber(value) {
    const _value = value.toString();
    if (_value.length > 1) {
        return _value;
    }
    return `0${_value}`;
}
function isHourInputValid(hours, isPM) {
    return !isNaN(parseHours(hours, isPM));
}
function isMinuteInputValid(minutes) {
    return !isNaN(parseMinutes(minutes));
}
function isSecondInputValid(seconds) {
    return !isNaN(parseSeconds(seconds));
}
function isInputLimitValid(diff, max, min) {
    const newDate = setTime(new Date(), diff);
    if (!newDate) {
        return false;
    }
    if (max && newDate > max) {
        return false;
    }
    if (min && newDate < min) {
        return false;
    }
    return true;
}
function isOneOfDatesEmpty(hours, minutes, seconds) {
    return hours.length === 0 || minutes.length === 0 || seconds.length === 0;
}
function isInputValid(hours, minutes = '0', seconds = '0', isPM) {
    return isHourInputValid(hours, isPM)
        && isMinuteInputValid(minutes)
        && isSecondInputValid(seconds);
}

function canChangeValue(state, event) {
    if (state.readonlyInput || state.disabled) {
        return false;
    }
    if (event) {
        if (event.source === 'wheel' && !state.mousewheel) {
            return false;
        }
        if (event.source === 'key' && !state.arrowkeys) {
            return false;
        }
    }
    return true;
}
function canChangeHours(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementHours) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementHours) {
        return false;
    }
    return true;
}
function canChangeMinutes(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementMinutes) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementMinutes) {
        return false;
    }
    return true;
}
function canChangeSeconds(event, controls) {
    if (!event.step) {
        return false;
    }
    if (event.step > 0 && !controls.canIncrementSeconds) {
        return false;
    }
    if (event.step < 0 && !controls.canDecrementSeconds) {
        return false;
    }
    return true;
}
function getControlsValue(state) {
    const { hourStep, minuteStep, secondsStep, readonlyInput, disabled, mousewheel, arrowkeys, showSpinners, showMeridian, showSeconds, meridians, min, max } = state;
    return {
        hourStep,
        minuteStep,
        secondsStep,
        readonlyInput,
        disabled,
        mousewheel,
        arrowkeys,
        showSpinners,
        showMeridian,
        showSeconds,
        meridians,
        min,
        max
    };
}
function timepickerControls(value, state) {
    const hoursPerDay = 24;
    const hoursPerDayHalf = 12;
    const { min, max, hourStep, minuteStep, secondsStep, showSeconds } = state;
    const res = {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    };
    if (!value) {
        return res;
    }
    // compare dates
    if (max) {
        const _newHour = changeTime(value, { hour: hourStep });
        res.canIncrementHours = max > _newHour && (value.getHours() + hourStep) < hoursPerDay;
        if (!res.canIncrementHours) {
            const _newMinutes = changeTime(value, { minute: minuteStep });
            res.canIncrementMinutes = showSeconds
                ? max > _newMinutes
                : max >= _newMinutes;
        }
        if (!res.canIncrementMinutes) {
            const _newSeconds = changeTime(value, { seconds: secondsStep });
            res.canIncrementSeconds = max >= _newSeconds;
        }
        if (value.getHours() < hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: hoursPerDayHalf }) < max;
        }
    }
    if (min) {
        const _newHour = changeTime(value, { hour: -hourStep });
        res.canDecrementHours = min < _newHour;
        if (!res.canDecrementHours) {
            const _newMinutes = changeTime(value, { minute: -minuteStep });
            res.canDecrementMinutes = showSeconds
                ? min < _newMinutes
                : min <= _newMinutes;
        }
        if (!res.canDecrementMinutes) {
            const _newSeconds = changeTime(value, { seconds: -secondsStep });
            res.canDecrementSeconds = min <= _newSeconds;
        }
        if (value.getHours() >= hoursPerDayHalf) {
            res.canToggleMeridian = changeTime(value, { hour: -hoursPerDayHalf }) > min;
        }
    }
    return res;
}

/** Provides default configuration values for timepicker */
class TimepickerConfig {
    constructor() {
        /** hours change step */
        this.hourStep = 1;
        /** minutes change step */
        this.minuteStep = 5;
        /** seconds changes step */
        this.secondsStep = 10;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true hours and minutes fields will be disabled */
        this.disabled = false;
        /** if true emptyTime is not marked as invalid */
        this.allowEmptyTime = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
        /** show minutes in timepicker */
        this.showMinutes = true;
        /** placeholder for hours field in timepicker */
        this.hoursPlaceholder = 'HH';
        /** placeholder for minutes field in timepicker */
        this.minutesPlaceholder = 'MM';
        /** placeholder for seconds field in timepicker */
        this.secondsPlaceholder = 'SS';
        /** hours aria label */
        this.ariaLabelHours = 'hours';
        /** minutes aria label */
        this.ariaLabelMinutes = 'minutes';
        /** seconds aria label */
        this.ariaLabelSeconds = 'seconds';
    }
}
TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
TimepickerConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TimepickerConfig, factory: TimepickerConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

const initialState = {
    value: void 0,
    config: new TimepickerConfig(),
    controls: {
        canIncrementHours: true,
        canIncrementMinutes: true,
        canIncrementSeconds: true,
        canDecrementHours: true,
        canDecrementMinutes: true,
        canDecrementSeconds: true,
        canToggleMeridian: true
    }
};
function timepickerReducer(state = initialState, action) {
    switch (action.type) {
        case TimepickerActions.WRITE_VALUE: {
            return Object.assign({}, state, { value: action.payload });
        }
        case TimepickerActions.CHANGE_HOURS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeHours(action.payload, state.controls)) {
                return state;
            }
            const _newTime = changeTime(state.value, { hour: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_MINUTES: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeMinutes(action.payload, state.controls)) {
                return state;
            }
            const _newTime = changeTime(state.value, { minute: action.payload.step });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.CHANGE_SECONDS: {
            if (!canChangeValue(state.config, action.payload) ||
                !canChangeSeconds(action.payload, state.controls)) {
                return state;
            }
            const _newTime = changeTime(state.value, {
                seconds: action.payload.step
            });
            if ((state.config.max || state.config.min) && !isValidLimit(state.config, _newTime)) {
                return state;
            }
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.SET_TIME_UNIT: {
            if (!canChangeValue(state.config)) {
                return state;
            }
            const _newTime = setTime(state.value, action.payload);
            return Object.assign({}, state, { value: _newTime });
        }
        case TimepickerActions.UPDATE_CONTROLS: {
            const _newControlsState = timepickerControls(state.value, action.payload);
            const _newState = {
                value: state.value,
                config: action.payload,
                controls: _newControlsState
            };
            if (state.config.showMeridian !== _newState.config.showMeridian) {
                if (state.value) {
                    _newState.value = new Date(state.value);
                }
            }
            return Object.assign({}, state, _newState);
        }
        default:
            return state;
    }
}

class TimepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        const state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.ɵfac = function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); };
TimepickerStore.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TimepickerStore, factory: TimepickerStore.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerStore, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], function () { return []; }, null); })();

function TimepickerComponent_td_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_7_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_7_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r19); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.changeMinutes(ctx_r18.minuteStep); });
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r1.canIncrementMinutes || !ctx_r1.isEditable);
} }
function TimepickerComponent_td_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_9_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_9_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r21); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.changeSeconds(ctx_r20.secondsStep); });
    i0.ɵɵelement(2, "span", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r3.canIncrementSeconds || !ctx_r3.isEditable);
} }
function TimepickerComponent_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
function TimepickerComponent_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0:\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_16_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵelementStart(1, "input", 5);
    i0.ɵɵlistener("wheel", function TimepickerComponent_td_16_Template_input_wheel_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); ctx_r22.prevDef($event); return ctx_r22.changeMinutes(ctx_r22.minuteStep * ctx_r22.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_16_Template_input_keydown_ArrowUp_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.changeMinutes(ctx_r24.minuteStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_16_Template_input_keydown_ArrowDown_1_listener() { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.changeMinutes(-ctx_r25.minuteStep, "key"); })("change", function TimepickerComponent_td_16_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.updateMinutes($event.target); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("has-error", ctx_r7.invalidMinutes);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-invalid", ctx_r7.invalidMinutes);
    i0.ɵɵproperty("placeholder", ctx_r7.minutesPlaceholder)("readonly", ctx_r7.readonlyInput)("disabled", ctx_r7.disabled)("value", ctx_r7.minutes);
    i0.ɵɵattribute("aria-label", ctx_r7.labelMinutes);
} }
function TimepickerComponent_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0:\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_18_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 4);
    i0.ɵɵelementStart(1, "input", 5);
    i0.ɵɵlistener("wheel", function TimepickerComponent_td_18_Template_input_wheel_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r27 = i0.ɵɵnextContext(); ctx_r27.prevDef($event); return ctx_r27.changeSeconds(ctx_r27.secondsStep * ctx_r27.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_td_18_Template_input_keydown_ArrowUp_1_listener() { i0.ɵɵrestoreView(_r28); const ctx_r29 = i0.ɵɵnextContext(); return ctx_r29.changeSeconds(ctx_r29.secondsStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_td_18_Template_input_keydown_ArrowDown_1_listener() { i0.ɵɵrestoreView(_r28); const ctx_r30 = i0.ɵɵnextContext(); return ctx_r30.changeSeconds(-ctx_r30.secondsStep, "key"); })("change", function TimepickerComponent_td_18_Template_input_change_1_listener($event) { i0.ɵɵrestoreView(_r28); const ctx_r31 = i0.ɵɵnextContext(); return ctx_r31.updateSeconds($event.target); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("has-error", ctx_r9.invalidSeconds);
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("is-invalid", ctx_r9.invalidSeconds);
    i0.ɵɵproperty("placeholder", ctx_r9.secondsPlaceholder)("readonly", ctx_r9.readonlyInput)("disabled", ctx_r9.disabled)("value", ctx_r9.seconds);
    i0.ɵɵattribute("aria-label", ctx_r9.labelSeconds);
} }
function TimepickerComponent_td_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_20_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "button", 8);
    i0.ɵɵlistener("click", function TimepickerComponent_td_20_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r33); const ctx_r32 = i0.ɵɵnextContext(); return ctx_r32.toggleMeridian(); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    i0.ɵɵproperty("disabled", !ctx_r11.isEditable || !ctx_r11.canToggleMeridian);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1("", ctx_r11.meridian, " ");
} }
function TimepickerComponent_td_25_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_26_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_26_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r35); const ctx_r34 = i0.ɵɵnextContext(); return ctx_r34.changeMinutes(-ctx_r34.minuteStep); });
    i0.ɵɵelement(2, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r13.canDecrementMinutes || !ctx_r13.isEditable);
} }
function TimepickerComponent_td_27_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵelementStart(1, "a", 1);
    i0.ɵɵlistener("click", function TimepickerComponent_td_28_Template_a_click_1_listener() { i0.ɵɵrestoreView(_r37); const ctx_r36 = i0.ɵɵnextContext(); return ctx_r36.changeSeconds(-ctx_r36.secondsStep); });
    i0.ɵɵelement(2, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵclassProp("disabled", !ctx_r15.canDecrementSeconds || !ctx_r15.isEditable);
} }
function TimepickerComponent_td_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td");
    i0.ɵɵtext(1, "\u00A0\u00A0\u00A0");
    i0.ɵɵelementEnd();
} }
function TimepickerComponent_td_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "td");
} }
const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimepickerComponent),
    multi: true
};
class TimepickerComponent {
    constructor(_config, _cd, _store, _timepickerActions) {
        this._cd = _cd;
        this._store = _store;
        this._timepickerActions = _timepickerActions;
        /** hours change step */
        this.hourStep = 1;
        /** minutes change step */
        this.minuteStep = 5;
        /** seconds change step */
        this.secondsStep = 10;
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true hours and minutes fields will be disabled */
        this.disabled = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** if true meridian button will be shown */
        this.showMeridian = true;
        /** show minutes in timepicker */
        this.showMinutes = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** placeholder for hours field in timepicker */
        this.hoursPlaceholder = 'HH';
        /** placeholder for minutes field in timepicker */
        this.minutesPlaceholder = 'MM';
        /** placeholder for seconds field in timepicker */
        this.secondsPlaceholder = 'SS';
        /** emits true if value is a valid date */
        this.isValid = new EventEmitter();
        /** emits value of meridian*/
        this.meridianChange = new EventEmitter();
        // ui variables
        this.hours = '';
        this.minutes = '';
        this.seconds = '';
        this.meridian = '';
        // min\max validation for input fields
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
        // aria-label variables
        this.labelHours = 'hours';
        this.labelMinutes = 'minutes';
        this.labelSeconds = 'seconds';
        // time picker controls state
        this.canIncrementHours = true;
        this.canIncrementMinutes = true;
        this.canIncrementSeconds = true;
        this.canDecrementHours = true;
        this.canDecrementMinutes = true;
        this.canDecrementSeconds = true;
        this.canToggleMeridian = true;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChange = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        this.config = _config;
        Object.assign(this, this.config);
        this.timepickerSub = _store.select(state => state.value)
            .subscribe((value) => {
            // update UI values if date changed
            this._renderTime(value);
            this.onChange(value);
            this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
        });
        _store.select(state => state.controls)
            .subscribe((controlsState) => {
            const isTimepickerInputValid = isInputValid(this.hours, this.minutes, this.seconds, this.isPM());
            const isValid = this.config.allowEmptyTime ?
                this.isOneOfDatesIsEmpty() || isTimepickerInputValid
                : isTimepickerInputValid;
            this.isValid.emit(isValid);
            Object.assign(this, controlsState);
            _cd.markForCheck();
        });
    }
    /** @deprecated - please use `isEditable` instead */
    get isSpinnersVisible() {
        return this.showSpinners && !this.readonlyInput;
    }
    get isEditable() {
        return !(this.readonlyInput || this.disabled);
    }
    resetValidation() {
        this.invalidHours = false;
        this.invalidMinutes = false;
        this.invalidSeconds = false;
    }
    isPM() {
        return this.showMeridian && this.meridian === this.meridians[1];
    }
    prevDef($event) {
        $event.preventDefault();
    }
    wheelSign($event) {
        return Math.sign($event.deltaY || 0) * -1;
    }
    ngOnChanges() {
        this._store.dispatch(this._timepickerActions.updateControls(getControlsValue(this)));
    }
    changeHours(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeHours({ step, source }));
    }
    changeMinutes(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeMinutes({ step, source }));
    }
    changeSeconds(step, source = '') {
        this.resetValidation();
        this._store.dispatch(this._timepickerActions.changeSeconds({ step, source }));
    }
    updateHours(target) {
        this.resetValidation();
        this.hours = target.value;
        const isTimepickerInputValid = isHourInputValid(this.hours, this.isPM()) && this.isValidLimit();
        const isValid = this.config.allowEmptyTime ?
            this.isOneOfDatesIsEmpty() || isTimepickerInputValid
            : isTimepickerInputValid;
        if (!isValid) {
            this.invalidHours = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    updateMinutes(target) {
        this.resetValidation();
        this.minutes = target.value;
        const isTimepickerInputValid = isMinuteInputValid(this.minutes) && this.isValidLimit();
        const isValid = this.config.allowEmptyTime ?
            this.isOneOfDatesIsEmpty() || isTimepickerInputValid
            : isTimepickerInputValid;
        if (!isValid) {
            this.invalidMinutes = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    updateSeconds(target) {
        this.resetValidation();
        this.seconds = target.value;
        const isTimepickerInputValid = isSecondInputValid(this.seconds) && this.isValidLimit();
        const isValid = this.config.allowEmptyTime ?
            this.isOneOfDatesIsEmpty() || isTimepickerInputValid
            : isTimepickerInputValid;
        if (!isValid) {
            this.invalidSeconds = true;
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._updateTime();
    }
    isValidLimit() {
        return isInputLimitValid({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }, this.max, this.min);
    }
    isOneOfDatesIsEmpty() {
        return isOneOfDatesEmpty(this.hours, this.minutes, this.seconds);
    }
    _updateTime() {
        const _seconds = this.showSeconds ? this.seconds : void 0;
        const _minutes = this.showMinutes ? this.minutes : void 0;
        const isTimepickerInputValid = isInputValid(this.hours, _minutes, _seconds, this.isPM());
        const isValid = this.config.allowEmptyTime ?
            this.isOneOfDatesIsEmpty() || isTimepickerInputValid
            : isTimepickerInputValid;
        if (!isValid) {
            this.isValid.emit(false);
            this.onChange(null);
            return;
        }
        this._store.dispatch(this._timepickerActions.setTime({
            hour: this.hours,
            minute: this.minutes,
            seconds: this.seconds,
            isPM: this.isPM()
        }));
    }
    toggleMeridian() {
        if (!this.showMeridian || !this.isEditable) {
            return;
        }
        const _hoursPerDayHalf = 12;
        this._store.dispatch(this._timepickerActions.changeHours({
            step: _hoursPerDayHalf,
            source: ''
        }));
    }
    /**
     * Write a new value to the element.
     */
    writeValue(obj) {
        if (isValidDate(obj)) {
            this.resetValidation();
            this._store.dispatch(this._timepickerActions.writeValue(parseTime(obj)));
        }
        else if (obj == null) {
            this._store.dispatch(this._timepickerActions.writeValue());
        }
    }
    /**
     * Set the function to be called when the control receives a change event.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * Set the function to be called when the control receives a touch event.
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * This function is called when the control status changes to or from "disabled".
     * Depending on the value, it will enable or disable the appropriate DOM element.
     *
     * @param isDisabled
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
        this._cd.markForCheck();
    }
    ngOnDestroy() {
        this.timepickerSub?.unsubscribe();
    }
    _renderTime(value) {
        if (!value || !isValidDate(value)) {
            this.hours = '';
            this.minutes = '';
            this.seconds = '';
            this.meridian = this.meridians[0];
            this.meridianChange.emit(this.meridian);
            return;
        }
        const _value = parseTime(value);
        if (!_value) {
            return;
        }
        const _hoursPerDayHalf = 12;
        let _hours = _value.getHours();
        if (this.showMeridian) {
            this.meridian = this.meridians[_hours >= _hoursPerDayHalf ? 1 : 0];
            this.meridianChange.emit(this.meridian);
            _hours = _hours % _hoursPerDayHalf;
            // should be 12 PM, not 00 PM
            if (_hours === 0) {
                _hours = _hoursPerDayHalf;
            }
        }
        this.hours = padNumber(_hours);
        this.minutes = padNumber(_value.getMinutes());
        this.seconds = padNumber(_value.getUTCSeconds());
    }
}
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(i0.ɵɵdirectiveInject(TimepickerConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(TimepickerStore), i0.ɵɵdirectiveInject(TimepickerActions)); };
TimepickerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TimepickerComponent, selectors: [["timepicker"]], inputs: { hourStep: "hourStep", minuteStep: "minuteStep", secondsStep: "secondsStep", readonlyInput: "readonlyInput", disabled: "disabled", mousewheel: "mousewheel", arrowkeys: "arrowkeys", showSpinners: "showSpinners", showMeridian: "showMeridian", showMinutes: "showMinutes", showSeconds: "showSeconds", meridians: "meridians", min: "min", max: "max", hoursPlaceholder: "hoursPlaceholder", minutesPlaceholder: "minutesPlaceholder", secondsPlaceholder: "secondsPlaceholder" }, outputs: { isValid: "isValid", meridianChange: "meridianChange" }, features: [i0.ɵɵProvidersFeature([TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore]), i0.ɵɵNgOnChangesFeature], decls: 31, vars: 33, consts: [[1, "text-center", 3, "hidden"], [1, "btn", "btn-link", 3, "click"], [1, "bs-chevron", "bs-chevron-up"], [4, "ngIf"], [1, "form-group", "mb-3"], ["type", "text", "maxlength", "2", 1, "form-control", "text-center", "bs-timepicker-field", 3, "placeholder", "readonly", "disabled", "value", "wheel", "keydown.ArrowUp", "keydown.ArrowDown", "change"], ["class", "form-group mb-3", 3, "has-error", 4, "ngIf"], [1, "bs-chevron", "bs-chevron-down"], ["type", "button", 1, "btn", "btn-default", "text-center", 3, "disabled", "click"]], template: function TimepickerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "table");
        i0.ɵɵelementStart(1, "tbody");
        i0.ɵɵelementStart(2, "tr", 0);
        i0.ɵɵelementStart(3, "td");
        i0.ɵɵelementStart(4, "a", 1);
        i0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_4_listener() { return ctx.changeHours(ctx.hourStep); });
        i0.ɵɵelement(5, "span", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(6, TimepickerComponent_td_6_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(7, TimepickerComponent_td_7_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(8, TimepickerComponent_td_8_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(9, TimepickerComponent_td_9_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(10, TimepickerComponent_td_10_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(11, TimepickerComponent_td_11_Template, 1, 0, "td", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(12, "tr");
        i0.ɵɵelementStart(13, "td", 4);
        i0.ɵɵelementStart(14, "input", 5);
        i0.ɵɵlistener("wheel", function TimepickerComponent_Template_input_wheel_14_listener($event) { ctx.prevDef($event); return ctx.changeHours(ctx.hourStep * ctx.wheelSign($event), "wheel"); })("keydown.ArrowUp", function TimepickerComponent_Template_input_keydown_ArrowUp_14_listener() { return ctx.changeHours(ctx.hourStep, "key"); })("keydown.ArrowDown", function TimepickerComponent_Template_input_keydown_ArrowDown_14_listener() { return ctx.changeHours(-ctx.hourStep, "key"); })("change", function TimepickerComponent_Template_input_change_14_listener($event) { return ctx.updateHours($event.target); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(15, TimepickerComponent_td_15_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(16, TimepickerComponent_td_16_Template, 2, 9, "td", 6);
        i0.ɵɵtemplate(17, TimepickerComponent_td_17_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(18, TimepickerComponent_td_18_Template, 2, 9, "td", 6);
        i0.ɵɵtemplate(19, TimepickerComponent_td_19_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(20, TimepickerComponent_td_20_Template, 3, 4, "td", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(21, "tr", 0);
        i0.ɵɵelementStart(22, "td");
        i0.ɵɵelementStart(23, "a", 1);
        i0.ɵɵlistener("click", function TimepickerComponent_Template_a_click_23_listener() { return ctx.changeHours(-ctx.hourStep); });
        i0.ɵɵelement(24, "span", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(25, TimepickerComponent_td_25_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(26, TimepickerComponent_td_26_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(27, TimepickerComponent_td_27_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(28, TimepickerComponent_td_28_Template, 3, 2, "td", 3);
        i0.ɵɵtemplate(29, TimepickerComponent_td_29_Template, 2, 0, "td", 3);
        i0.ɵɵtemplate(30, TimepickerComponent_td_30_Template, 1, 0, "td", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("hidden", !ctx.showSpinners);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("disabled", !ctx.canIncrementHours || !ctx.isEditable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("has-error", ctx.invalidHours);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("is-invalid", ctx.invalidHours);
        i0.ɵɵproperty("placeholder", ctx.hoursPlaceholder)("readonly", ctx.readonlyInput)("disabled", ctx.disabled)("value", ctx.hours);
        i0.ɵɵattribute("aria-label", ctx.labelHours);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("hidden", !ctx.showSpinners);
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("disabled", !ctx.canDecrementHours || !ctx.isEditable);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMinutes);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showSeconds);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showMeridian);
    } }, directives: [i4.NgIf], styles: [".bs-chevron{border-style:solid;display:block;width:9px;height:9px;position:relative;border-width:3px 0px 0 3px}.bs-chevron-up{transform:rotate(45deg);top:2px}.bs-chevron-down{transform:rotate(-135deg);top:-2px}.bs-timepicker-field{width:65px;padding:.375rem .55rem}\n"], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerComponent, [{
        type: Component,
        args: [{ selector: 'timepicker', changeDetection: ChangeDetectionStrategy.OnPush, providers: [TIMEPICKER_CONTROL_VALUE_ACCESSOR, TimepickerStore], styles: [`
    .bs-chevron {
      border-style: solid;
      display: block;
      width: 9px;
      height: 9px;
      position: relative;
      border-width: 3px 0px 0 3px;
    }

    .bs-chevron-up {
      -webkit-transform: rotate(45deg);
      transform: rotate(45deg);
      top: 2px;
    }

    .bs-chevron-down {
      -webkit-transform: rotate(-135deg);
      transform: rotate(-135deg);
      top: -2px;
    }

    .bs-timepicker-field {
      width: 65px;
      padding: .375rem .55rem;
    }
  `], encapsulation: ViewEncapsulation.None, template: "<table>\r\n  <tbody>\r\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\r\n    <!-- increment hours button-->\r\n    <td>\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementHours || !isEditable\"\r\n         (click)=\"changeHours(hourStep)\"\r\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- increment minutes button -->\r\n    <td *ngIf=\"showMinutes\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementMinutes || !isEditable\"\r\n         (click)=\"changeMinutes(minuteStep)\"\r\n      ><span class=\"bs-chevron bs-chevron-up\"></span></a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\r\n    <!-- increment seconds button -->\r\n    <td *ngIf=\"showSeconds\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canIncrementSeconds || !isEditable\"\r\n         (click)=\"changeSeconds(secondsStep)\">\r\n        <span class=\"bs-chevron bs-chevron-up\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian placeholder-->\r\n    <td *ngIf=\"showMeridian\"></td>\r\n  </tr>\r\n  <tr>\r\n    <!-- hours -->\r\n    <td class=\"form-group mb-3\" [class.has-error]=\"invalidHours\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidHours\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             [placeholder]=\"hoursPlaceholder\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"hours\"\r\n             (wheel)=\"prevDef($event);changeHours(hourStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeHours(hourStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeHours(-hourStep, 'key')\"\r\n             (change)=\"updateHours($event.target)\" [attr.aria-label]=\"labelHours\"></td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;:&nbsp;</td>\r\n    <!-- minutes -->\r\n    <td class=\"form-group mb-3\" *ngIf=\"showMinutes\" [class.has-error]=\"invalidMinutes\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidMinutes\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             [placeholder]=\"minutesPlaceholder\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"minutes\"\r\n             (wheel)=\"prevDef($event);changeMinutes(minuteStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeMinutes(minuteStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeMinutes(-minuteStep, 'key')\"\r\n             (change)=\"updateMinutes($event.target)\" [attr.aria-label]=\"labelMinutes\">\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;:&nbsp;</td>\r\n    <!-- seconds -->\r\n    <td class=\"form-group mb-3\" *ngIf=\"showSeconds\" [class.has-error]=\"invalidSeconds\">\r\n      <input type=\"text\" [class.is-invalid]=\"invalidSeconds\"\r\n             class=\"form-control text-center bs-timepicker-field\"\r\n             [placeholder]=\"secondsPlaceholder\"\r\n             maxlength=\"2\"\r\n             [readonly]=\"readonlyInput\"\r\n             [disabled]=\"disabled\"\r\n             [value]=\"seconds\"\r\n             (wheel)=\"prevDef($event);changeSeconds(secondsStep * wheelSign($event), 'wheel')\"\r\n             (keydown.ArrowUp)=\"changeSeconds(secondsStep, 'key')\"\r\n             (keydown.ArrowDown)=\"changeSeconds(-secondsStep, 'key')\"\r\n             (change)=\"updateSeconds($event.target)\" [attr.aria-label]=\"labelSeconds\">\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian -->\r\n    <td *ngIf=\"showMeridian\">\r\n      <button type=\"button\" class=\"btn btn-default text-center\"\r\n              [disabled]=\"!isEditable || !canToggleMeridian\"\r\n              [class.disabled]=\"!isEditable || !canToggleMeridian\"\r\n              (click)=\"toggleMeridian()\"\r\n      >{{ meridian }}\r\n      </button>\r\n    </td>\r\n  </tr>\r\n  <tr class=\"text-center\" [hidden]=\"!showSpinners\">\r\n    <!-- decrement hours button-->\r\n    <td>\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementHours || !isEditable\"\r\n         (click)=\"changeHours(-hourStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showMinutes\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- decrement minutes button-->\r\n    <td *ngIf=\"showMinutes\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementMinutes || !isEditable\"\r\n         (click)=\"changeMinutes(-minuteStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- divider -->\r\n    <td *ngIf=\"showSeconds\">&nbsp;</td>\r\n    <!-- decrement seconds button-->\r\n    <td *ngIf=\"showSeconds\">\r\n      <a class=\"btn btn-link\" [class.disabled]=\"!canDecrementSeconds || !isEditable\"\r\n         (click)=\"changeSeconds(-secondsStep)\">\r\n        <span class=\"bs-chevron bs-chevron-down\"></span>\r\n      </a>\r\n    </td>\r\n    <!-- space between -->\r\n    <td *ngIf=\"showMeridian\">&nbsp;&nbsp;&nbsp;</td>\r\n    <!-- meridian placeholder-->\r\n    <td *ngIf=\"showMeridian\"></td>\r\n  </tr>\r\n  </tbody>\r\n</table>\r\n" }]
    }], function () { return [{ type: TimepickerConfig }, { type: i0.ChangeDetectorRef }, { type: TimepickerStore }, { type: TimepickerActions }]; }, { hourStep: [{
            type: Input
        }], minuteStep: [{
            type: Input
        }], secondsStep: [{
            type: Input
        }], readonlyInput: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mousewheel: [{
            type: Input
        }], arrowkeys: [{
            type: Input
        }], showSpinners: [{
            type: Input
        }], showMeridian: [{
            type: Input
        }], showMinutes: [{
            type: Input
        }], showSeconds: [{
            type: Input
        }], meridians: [{
            type: Input
        }], min: [{
            type: Input
        }], max: [{
            type: Input
        }], hoursPlaceholder: [{
            type: Input
        }], minutesPlaceholder: [{
            type: Input
        }], secondsPlaceholder: [{
            type: Input
        }], isValid: [{
            type: Output
        }], meridianChange: [{
            type: Output
        }] }); })();

class TimepickerModule {
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.ɵfac = function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); };
TimepickerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TimepickerModule });
TimepickerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TimepickerStore], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent],
                providers: [TimepickerStore]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: [TimepickerComponent], imports: [CommonModule], exports: [TimepickerComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { TimepickerActions, TimepickerComponent, TimepickerConfig, TimepickerModule, TimepickerStore };
//# sourceMappingURL=ngx-bootstrap-timepicker.mjs.map
