import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, forwardRef, Input, Output, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import { getControlsValue } from './timepicker-controls.util';
import { TimepickerConfig } from './timepicker.config';
import { isHourInputValid, isInputLimitValid, isInputValid, isMinuteInputValid, isOneOfDatesEmpty, isSecondInputValid, isValidDate, padNumber, parseTime } from './timepicker.utils';
import * as i0 from "@angular/core";
import * as i1 from "./timepicker.config";
import * as i2 from "./reducer/timepicker.store";
import * as i3 from "./reducer/timepicker.actions";
import * as i4 from "@angular/common";
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
export const TIMEPICKER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => TimepickerComponent),
    multi: true
};
export class TimepickerComponent {
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
TimepickerComponent.ɵfac = function TimepickerComponent_Factory(t) { return new (t || TimepickerComponent)(i0.ɵɵdirectiveInject(i1.TimepickerConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.TimepickerStore), i0.ɵɵdirectiveInject(i3.TimepickerActions)); };
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
    }], function () { return [{ type: i1.TimepickerConfig }, { type: i0.ChangeDetectorRef }, { type: i2.TimepickerStore }, { type: i3.TimepickerActions }]; }, { hourStep: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUdMLE1BQU0sRUFDTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTXpFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUl2RCxPQUFPLEVBQ0wsZ0JBQWdCLEVBQ2hCLGlCQUFpQixFQUNqQixZQUFZLEVBQ1osa0JBQWtCLEVBQ2xCLGlCQUFpQixFQUNqQixrQkFBa0IsRUFDbEIsV0FBVyxFQUNYLFNBQVMsRUFDVCxTQUFTLEVBQ1YsTUFBTSxvQkFBb0IsQ0FBQzs7Ozs7OztJQzFCeEIsMEJBQXdCO0lBQUEsa0NBQWtCO0lBQUEsaUJBQUs7Ozs7SUFFL0MsMEJBQXdCO0lBQ3RCLDRCQUVDO0lBREUsNEpBQVMseUNBQXlCLElBQUM7SUFDckMsMEJBQThDO0lBQUEsaUJBQUk7SUFDckQsaUJBQUs7OztJQUhxQixlQUFzRDtJQUF0RCw2RUFBc0Q7OztJQUtoRiwwQkFBd0I7SUFBQSxzQkFBTTtJQUFBLGlCQUFLOzs7O0lBRW5DLDBCQUF3QjtJQUN0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QUc7a0JBQVgsS0FBSztZQUVHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUVHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUVHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUVJLE9BQU87a0JBQWhCLE1BQU07WUFFRyxjQUFjO2tCQUF2QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPdXRwdXQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuXHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3JNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnLi9yZWR1Y2VyL3RpbWVwaWNrZXIuYWN0aW9ucyc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgZ2V0Q29udHJvbHNWYWx1ZSB9IGZyb20gJy4vdGltZXBpY2tlci1jb250cm9scy51dGlsJztcclxuaW1wb3J0IHsgVGltZXBpY2tlckNvbmZpZyB9IGZyb20gJy4vdGltZXBpY2tlci5jb25maWcnO1xyXG5cclxuaW1wb3J0IHsgVGltZUNoYW5nZVNvdXJjZSwgVGltZXBpY2tlckNvbXBvbmVudFN0YXRlLCBUaW1lcGlja2VyQ29udHJvbHMgfSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWxzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgaXNIb3VySW5wdXRWYWxpZCxcclxuICBpc0lucHV0TGltaXRWYWxpZCxcclxuICBpc0lucHV0VmFsaWQsXHJcbiAgaXNNaW51dGVJbnB1dFZhbGlkLFxyXG4gIGlzT25lT2ZEYXRlc0VtcHR5LFxyXG4gIGlzU2Vjb25kSW5wdXRWYWxpZCxcclxuICBpc1ZhbGlkRGF0ZSxcclxuICBwYWROdW1iZXIsXHJcbiAgcGFyc2VUaW1lXHJcbn0gZnJvbSAnLi90aW1lcGlja2VyLnV0aWxzJztcclxuXHJcbmV4cG9ydCBjb25zdCBUSU1FUElDS0VSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IENvbnRyb2xWYWx1ZUFjY2Vzc29yTW9kZWwgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gVGltZXBpY2tlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAndGltZXBpY2tlcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgcHJvdmlkZXJzOiBbVElNRVBJQ0tFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLCBUaW1lcGlja2VyU3RvcmVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFtgXHJcbiAgICAuYnMtY2hldnJvbiB7XHJcbiAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICB3aWR0aDogOXB4O1xyXG4gICAgICBoZWlnaHQ6IDlweDtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBib3JkZXItd2lkdGg6IDNweCAwcHggMCAzcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJzLWNoZXZyb24tdXAge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgICB0b3A6IDJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnMtY2hldnJvbi1kb3duIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbiAgICAgIHRvcDogLTJweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnMtdGltZXBpY2tlci1maWVsZCB7XHJcbiAgICAgIHdpZHRoOiA2NXB4O1xyXG4gICAgICBwYWRkaW5nOiAuMzc1cmVtIC41NXJlbTtcclxuICAgIH1cclxuICBgXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUaW1lcGlja2VyQ29tcG9uZW50XHJcbiAgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvcixcclxuICAgIFRpbWVwaWNrZXJDb21wb25lbnRTdGF0ZSxcclxuICAgIFRpbWVwaWNrZXJDb250cm9scyxcclxuICAgIE9uQ2hhbmdlcyxcclxuICAgIE9uRGVzdHJveSB7XHJcbiAgLyoqIGhvdXJzIGNoYW5nZSBzdGVwICovXHJcbiAgQElucHV0KCkgaG91clN0ZXAgPSAxO1xyXG4gIC8qKiBtaW51dGVzIGNoYW5nZSBzdGVwICovXHJcbiAgQElucHV0KCkgbWludXRlU3RlcCA9IDU7XHJcbiAgLyoqIHNlY29uZHMgY2hhbmdlIHN0ZXAgKi9cclxuICBASW5wdXQoKSBzZWNvbmRzU3RlcCA9IDEwO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXHJcbiAgQElucHV0KCkgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXHJcbiAgQElucHV0KCkgbW91c2V3aGVlbCA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xyXG4gIEBJbnB1dCgpIGFycm93a2V5cyA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgc3Bpbm5lciBhcnJvd3MgYWJvdmUgYW5kIGJlbG93IHRoZSBpbnB1dHMgd2lsbCBiZSBzaG93biAqL1xyXG4gIEBJbnB1dCgpIHNob3dTcGlubmVycyA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgbWVyaWRpYW4gYnV0dG9uIHdpbGwgYmUgc2hvd24gKi9cclxuICBASW5wdXQoKSBzaG93TWVyaWRpYW4gPSB0cnVlO1xyXG4gIC8qKiBzaG93IG1pbnV0ZXMgaW4gdGltZXBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHNob3dNaW51dGVzID0gdHJ1ZTtcclxuICAvKiogc2hvdyBzZWNvbmRzIGluIHRpbWVwaWNrZXIgKi9cclxuICBASW5wdXQoKSBzaG93U2Vjb25kcyA9IGZhbHNlO1xyXG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXHJcbiAgQElucHV0KCkgbWVyaWRpYW5zOiBzdHJpbmdbXSA9IFsnQU0nLCAnUE0nXTtcclxuICAvKiogbWluaW11bSB0aW1lIHVzZXIgY2FuIHNlbGVjdCAqL1xyXG4gIEBJbnB1dCgpIG1pbj86IERhdGU7XHJcbiAgLyoqIG1heGltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cclxuICBASW5wdXQoKSBtYXg/OiBEYXRlO1xyXG4gIC8qKiBwbGFjZWhvbGRlciBmb3IgaG91cnMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIGhvdXJzUGxhY2Vob2xkZXIgPSAnSEgnO1xyXG4gIC8qKiBwbGFjZWhvbGRlciBmb3IgbWludXRlcyBmaWVsZCBpbiB0aW1lcGlja2VyICovXHJcbiAgQElucHV0KCkgbWludXRlc1BsYWNlaG9sZGVyID0gJ01NJztcclxuICAvKiogcGxhY2Vob2xkZXIgZm9yIHNlY29uZHMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xyXG4gIEBJbnB1dCgpIHNlY29uZHNQbGFjZWhvbGRlciA9ICdTUyc7XHJcbiAgLyoqIGVtaXRzIHRydWUgaWYgdmFsdWUgaXMgYSB2YWxpZCBkYXRlICovXHJcbiAgQE91dHB1dCgpIGlzVmFsaWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgLyoqIGVtaXRzIHZhbHVlIG9mIG1lcmlkaWFuKi9cclxuICBAT3V0cHV0KCkgbWVyaWRpYW5DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAvLyB1aSB2YXJpYWJsZXNcclxuICBob3VycyA9ICcnO1xyXG4gIG1pbnV0ZXMgPSAnJztcclxuICBzZWNvbmRzID0gJyc7XHJcbiAgbWVyaWRpYW4gPSAnJztcclxuICAvLyBtaW5cXG1heCB2YWxpZGF0aW9uIGZvciBpbnB1dCBmaWVsZHNcclxuICBpbnZhbGlkSG91cnMgPSBmYWxzZTtcclxuICBpbnZhbGlkTWludXRlcyA9IGZhbHNlO1xyXG4gIGludmFsaWRTZWNvbmRzID0gZmFsc2U7XHJcbiAgLy8gYXJpYS1sYWJlbCB2YXJpYWJsZXNcclxuICBsYWJlbEhvdXJzID0gJ2hvdXJzJztcclxuICBsYWJlbE1pbnV0ZXMgPSAnbWludXRlcyc7XHJcbiAgbGFiZWxTZWNvbmRzID0gJ3NlY29uZHMnO1xyXG4gIC8vIHRpbWUgcGlja2VyIGNvbnRyb2xzIHN0YXRlXHJcbiAgY2FuSW5jcmVtZW50SG91cnMgPSB0cnVlO1xyXG4gIGNhbkluY3JlbWVudE1pbnV0ZXMgPSB0cnVlO1xyXG4gIGNhbkluY3JlbWVudFNlY29uZHMgPSB0cnVlO1xyXG4gIGNhbkRlY3JlbWVudEhvdXJzID0gdHJ1ZTtcclxuICBjYW5EZWNyZW1lbnRNaW51dGVzID0gdHJ1ZTtcclxuICBjYW5EZWNyZW1lbnRTZWNvbmRzID0gdHJ1ZTtcclxuICBjYW5Ub2dnbGVNZXJpZGlhbiA9IHRydWU7XHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgY29uZmlnOiBUaW1lcGlja2VyQ29uZmlnO1xyXG5cclxuICAvLyBjb250cm9sIHZhbHVlIGFjY2Vzc29yIG1ldGhvZHNcclxuICB0aW1lcGlja2VyU3ViPzogU3Vic2NyaXB0aW9uO1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX2NvbmZpZzogVGltZXBpY2tlckNvbmZpZyxcclxuICAgIHByaXZhdGUgX2NkOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgX3N0b3JlOiBUaW1lcGlja2VyU3RvcmUsXHJcbiAgICBwcml2YXRlIF90aW1lcGlja2VyQWN0aW9uczogVGltZXBpY2tlckFjdGlvbnNcclxuICApIHtcclxuICAgIHRoaXMuY29uZmlnID0gX2NvbmZpZztcclxuICAgIE9iamVjdC5hc3NpZ24odGhpcywgdGhpcy5jb25maWcpO1xyXG4gICAgdGhpcy50aW1lcGlja2VyU3ViID0gX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS52YWx1ZSlcclxuICAgICAgLnN1YnNjcmliZSgodmFsdWU6IERhdGUgfCB1bmRlZmluZWQpID0+IHtcclxuICAgICAgICAvLyB1cGRhdGUgVUkgdmFsdWVzIGlmIGRhdGUgY2hhbmdlZFxyXG4gICAgICAgIHRoaXMuX3JlbmRlclRpbWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLnVwZGF0ZUNvbnRyb2xzKGdldENvbnRyb2xzVmFsdWUodGhpcykpXHJcbiAgICAgICAgKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgX3N0b3JlLnNlbGVjdChzdGF0ZSA9PiBzdGF0ZS5jb250cm9scylcclxuICAgICAgLnN1YnNjcmliZSgoY29udHJvbHNTdGF0ZTogVGltZXBpY2tlckNvbnRyb2xzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaXNUaW1lcGlja2VySW5wdXRWYWxpZCA9IGlzSW5wdXRWYWxpZCh0aGlzLmhvdXJzLCB0aGlzLm1pbnV0ZXMsIHRoaXMuc2Vjb25kcywgdGhpcy5pc1BNKCkpO1xyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmNvbmZpZy5hbGxvd0VtcHR5VGltZT9cclxuICAgICAgICAgIHRoaXMuaXNPbmVPZkRhdGVzSXNFbXB0eSgpIHx8IGlzVGltZXBpY2tlcklucHV0VmFsaWRcclxuICAgICAgICAgIDogaXNUaW1lcGlja2VySW5wdXRWYWxpZDtcclxuICAgICAgICB0aGlzLmlzVmFsaWQuZW1pdChpc1ZhbGlkKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbnRyb2xzU3RhdGUpO1xyXG4gICAgICAgIF9jZC5tYXJrRm9yQ2hlY2soKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQGRlcHJlY2F0ZWQgLSBwbGVhc2UgdXNlIGBpc0VkaXRhYmxlYCBpbnN0ZWFkICovXHJcbiAgZ2V0IGlzU3Bpbm5lcnNWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd1NwaW5uZXJzICYmICF0aGlzLnJlYWRvbmx5SW5wdXQ7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNFZGl0YWJsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhKHRoaXMucmVhZG9ubHlJbnB1dCB8fCB0aGlzLmRpc2FibGVkKTtcclxuICB9XHJcblxyXG4gIHJlc2V0VmFsaWRhdGlvbigpOiB2b2lkIHtcclxuICAgIHRoaXMuaW52YWxpZEhvdXJzID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRNaW51dGVzID0gZmFsc2U7XHJcbiAgICB0aGlzLmludmFsaWRTZWNvbmRzID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBpc1BNKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2hvd01lcmlkaWFuICYmIHRoaXMubWVyaWRpYW4gPT09IHRoaXMubWVyaWRpYW5zWzFdO1xyXG4gIH1cclxuXHJcbiAgcHJldkRlZigkZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHdoZWVsU2lnbigkZXZlbnQ6IFdoZWVsRXZlbnRJbml0KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBNYXRoLnNpZ24oJGV2ZW50LmRlbHRhWSB8fCAwKSAqIC0xO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMudXBkYXRlQ29udHJvbHMoZ2V0Q29udHJvbHNWYWx1ZSh0aGlzKSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VIb3VycyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlSG91cnMoeyBzdGVwLCBzb3VyY2UgfSkpO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlTWludXRlcyhzdGVwOiBudW1iZXIsIHNvdXJjZTogVGltZUNoYW5nZVNvdXJjZSA9ICcnKTogdm9pZCB7XHJcbiAgICB0aGlzLnJlc2V0VmFsaWRhdGlvbigpO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZU1pbnV0ZXMoeyBzdGVwLCBzb3VyY2UgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VTZWNvbmRzKHN0ZXA6IG51bWJlciwgc291cmNlOiBUaW1lQ2hhbmdlU291cmNlID0gJycpOiB2b2lkIHtcclxuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuY2hhbmdlU2Vjb25kcyh7IHN0ZXAsIHNvdXJjZSB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUhvdXJzKHRhcmdldD86IFBhcnRpYWw8RXZlbnRUYXJnZXQ+IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHRoaXMuaG91cnMgPSAodGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGlzVGltZXBpY2tlcklucHV0VmFsaWQgPSBpc0hvdXJJbnB1dFZhbGlkKHRoaXMuaG91cnMsIHRoaXMuaXNQTSgpKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuY29uZmlnLmFsbG93RW1wdHlUaW1lID9cclxuICAgICAgdGhpcy5pc09uZU9mRGF0ZXNJc0VtcHR5KCkgfHwgaXNUaW1lcGlja2VySW5wdXRWYWxpZFxyXG4gICAgICA6IGlzVGltZXBpY2tlcklucHV0VmFsaWQ7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZEhvdXJzID0gdHJ1ZTtcclxuICAgICAgdGhpcy5pc1ZhbGlkLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKG51bGwpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3VwZGF0ZVRpbWUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZU1pbnV0ZXModGFyZ2V0OiBQYXJ0aWFsPEV2ZW50VGFyZ2V0PiB8IG51bGwpIHtcclxuICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICB0aGlzLm1pbnV0ZXMgPSAodGFyZ2V0IGFzIEhUTUxJbnB1dEVsZW1lbnQpLnZhbHVlO1xyXG5cclxuICAgIGNvbnN0IGlzVGltZXBpY2tlcklucHV0VmFsaWQgPSBpc01pbnV0ZUlucHV0VmFsaWQodGhpcy5taW51dGVzKSAmJiB0aGlzLmlzVmFsaWRMaW1pdCgpO1xyXG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMuY29uZmlnLmFsbG93RW1wdHlUaW1lID9cclxuICAgICAgdGhpcy5pc09uZU9mRGF0ZXNJc0VtcHR5KCkgfHwgaXNUaW1lcGlja2VySW5wdXRWYWxpZFxyXG4gICAgICA6IGlzVGltZXBpY2tlcklucHV0VmFsaWQ7XHJcblxyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaW52YWxpZE1pbnV0ZXMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmlzVmFsaWQuZW1pdChmYWxzZSk7XHJcbiAgICAgIHRoaXMub25DaGFuZ2UobnVsbCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fdXBkYXRlVGltZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU2Vjb25kcyh0YXJnZXQ6IFBhcnRpYWw8RXZlbnRUYXJnZXQ+IHwgbnVsbCkge1xyXG4gICAgdGhpcy5yZXNldFZhbGlkYXRpb24oKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9ICh0YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcblxyXG4gICAgY29uc3QgaXNUaW1lcGlja2VySW5wdXRWYWxpZCA9IGlzU2Vjb25kSW5wdXRWYWxpZCh0aGlzLnNlY29uZHMpICYmIHRoaXMuaXNWYWxpZExpbWl0KCk7XHJcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5jb25maWcuYWxsb3dFbXB0eVRpbWUgP1xyXG4gICAgICB0aGlzLmlzT25lT2ZEYXRlc0lzRW1wdHkoKSB8fCBpc1RpbWVwaWNrZXJJbnB1dFZhbGlkXHJcbiAgICAgIDogaXNUaW1lcGlja2VySW5wdXRWYWxpZDtcclxuXHJcbiAgICBpZiAoIWlzVmFsaWQpIHtcclxuICAgICAgdGhpcy5pbnZhbGlkU2Vjb25kcyA9IHRydWU7XHJcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl91cGRhdGVUaW1lKCk7XHJcbiAgfVxyXG5cclxuICBpc1ZhbGlkTGltaXQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNJbnB1dExpbWl0VmFsaWQoe1xyXG4gICAgICBob3VyOiB0aGlzLmhvdXJzLFxyXG4gICAgICBtaW51dGU6IHRoaXMubWludXRlcyxcclxuICAgICAgc2Vjb25kczogdGhpcy5zZWNvbmRzLFxyXG4gICAgICBpc1BNOiB0aGlzLmlzUE0oKVxyXG4gICAgfSwgdGhpcy5tYXgsIHRoaXMubWluKTtcclxuICB9XHJcblxyXG4gIGlzT25lT2ZEYXRlc0lzRW1wdHkoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNPbmVPZkRhdGVzRW1wdHkoXHJcbiAgICAgIHRoaXMuaG91cnMsXHJcbiAgICAgIHRoaXMubWludXRlcyxcclxuICAgICAgdGhpcy5zZWNvbmRzKTtcclxuICB9XHJcblxyXG4gIF91cGRhdGVUaW1lKCkge1xyXG4gICAgY29uc3QgX3NlY29uZHMgPSB0aGlzLnNob3dTZWNvbmRzID8gdGhpcy5zZWNvbmRzIDogdm9pZCAwO1xyXG4gICAgY29uc3QgX21pbnV0ZXMgPSB0aGlzLnNob3dNaW51dGVzID8gdGhpcy5taW51dGVzIDogdm9pZCAwO1xyXG4gICAgY29uc3QgaXNUaW1lcGlja2VySW5wdXRWYWxpZCA9IGlzSW5wdXRWYWxpZCh0aGlzLmhvdXJzLCBfbWludXRlcywgX3NlY29uZHMsIHRoaXMuaXNQTSgpKTtcclxuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmNvbmZpZy5hbGxvd0VtcHR5VGltZSA/XHJcbiAgICAgIHRoaXMuaXNPbmVPZkRhdGVzSXNFbXB0eSgpIHx8IGlzVGltZXBpY2tlcklucHV0VmFsaWRcclxuICAgICAgOiBpc1RpbWVwaWNrZXJJbnB1dFZhbGlkO1xyXG4gICAgaWYgKCFpc1ZhbGlkKSB7XHJcbiAgICAgIHRoaXMuaXNWYWxpZC5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZShudWxsKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9zdG9yZS5kaXNwYXRjaChcclxuICAgICAgdGhpcy5fdGltZXBpY2tlckFjdGlvbnMuc2V0VGltZSh7XHJcbiAgICAgICAgaG91cjogdGhpcy5ob3VycyxcclxuICAgICAgICBtaW51dGU6IHRoaXMubWludXRlcyxcclxuICAgICAgICBzZWNvbmRzOiB0aGlzLnNlY29uZHMsXHJcbiAgICAgICAgaXNQTTogdGhpcy5pc1BNKClcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVNZXJpZGlhbigpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5zaG93TWVyaWRpYW4gfHwgIXRoaXMuaXNFZGl0YWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX2hvdXJzUGVyRGF5SGFsZiA9IDEyO1xyXG4gICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2goXHJcbiAgICAgIHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLmNoYW5nZUhvdXJzKHtcclxuICAgICAgICBzdGVwOiBfaG91cnNQZXJEYXlIYWxmLFxyXG4gICAgICAgIHNvdXJjZTogJydcclxuICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBhIG5ldyB2YWx1ZSB0byB0aGUgZWxlbWVudC5cclxuICAgKi9cclxuICB3cml0ZVZhbHVlKG9iaj86IHN0cmluZyB8IERhdGUpOiB2b2lkIHtcclxuICAgIGlmIChpc1ZhbGlkRGF0ZShvYmopKSB7XHJcbiAgICAgIHRoaXMucmVzZXRWYWxpZGF0aW9uKCk7XHJcbiAgICAgIHRoaXMuX3N0b3JlLmRpc3BhdGNoKHRoaXMuX3RpbWVwaWNrZXJBY3Rpb25zLndyaXRlVmFsdWUocGFyc2VUaW1lKG9iaikpKTtcclxuICAgIH0gZWxzZSBpZiAob2JqID09IG51bGwpIHtcclxuICAgICAgdGhpcy5fc3RvcmUuZGlzcGF0Y2godGhpcy5fdGltZXBpY2tlckFjdGlvbnMud3JpdGVWYWx1ZSgpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGNvbnRyb2wgcmVjZWl2ZXMgYSBjaGFuZ2UgZXZlbnQuXHJcbiAgICovXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAoXzogYW55KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHJlY2VpdmVzIGEgdG91Y2ggZXZlbnQuXHJcbiAgICovXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGlzIGNhbGxlZCB3aGVuIHRoZSBjb250cm9sIHN0YXR1cyBjaGFuZ2VzIHRvIG9yIGZyb20gXCJkaXNhYmxlZFwiLlxyXG4gICAqIERlcGVuZGluZyBvbiB0aGUgdmFsdWUsIGl0IHdpbGwgZW5hYmxlIG9yIGRpc2FibGUgdGhlIGFwcHJvcHJpYXRlIERPTSBlbGVtZW50LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlzRGlzYWJsZWRcclxuICAgKi9cclxuICBzZXREaXNhYmxlZFN0YXRlKGlzRGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xyXG4gICAgdGhpcy5fY2QubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMudGltZXBpY2tlclN1Yj8udW5zdWJzY3JpYmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlbmRlclRpbWUodmFsdWU/OiBzdHJpbmcgfCBEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAoIXZhbHVlIHx8ICFpc1ZhbGlkRGF0ZSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5ob3VycyA9ICcnO1xyXG4gICAgICB0aGlzLm1pbnV0ZXMgPSAnJztcclxuICAgICAgdGhpcy5zZWNvbmRzID0gJyc7XHJcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1swXTtcclxuICAgICAgdGhpcy5tZXJpZGlhbkNoYW5nZS5lbWl0KHRoaXMubWVyaWRpYW4pO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgX3ZhbHVlID0gcGFyc2VUaW1lKHZhbHVlKTtcclxuICAgIGlmICghX3ZhbHVlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBfaG91cnNQZXJEYXlIYWxmID0gMTI7XHJcbiAgICBsZXQgX2hvdXJzID0gX3ZhbHVlLmdldEhvdXJzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2hvd01lcmlkaWFuKSB7XHJcbiAgICAgIHRoaXMubWVyaWRpYW4gPSB0aGlzLm1lcmlkaWFuc1tfaG91cnMgPj0gX2hvdXJzUGVyRGF5SGFsZiA/IDEgOiAwXTtcclxuICAgICAgdGhpcy5tZXJpZGlhbkNoYW5nZS5lbWl0KHRoaXMubWVyaWRpYW4pO1xyXG4gICAgICBfaG91cnMgPSBfaG91cnMgJSBfaG91cnNQZXJEYXlIYWxmO1xyXG4gICAgICAvLyBzaG91bGQgYmUgMTIgUE0sIG5vdCAwMCBQTVxyXG4gICAgICBpZiAoX2hvdXJzID09PSAwKSB7XHJcbiAgICAgICAgX2hvdXJzID0gX2hvdXJzUGVyRGF5SGFsZjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaG91cnMgPSBwYWROdW1iZXIoX2hvdXJzKTtcclxuICAgIHRoaXMubWludXRlcyA9IHBhZE51bWJlcihfdmFsdWUuZ2V0TWludXRlcygpKTtcclxuICAgIHRoaXMuc2Vjb25kcyA9IHBhZE51bWJlcihfdmFsdWUuZ2V0VVRDU2Vjb25kcygpKTtcclxuICB9XHJcbn1cclxuIiwiPHRhYmxlPlxyXG4gIDx0Ym9keT5cclxuICA8dHIgY2xhc3M9XCJ0ZXh0LWNlbnRlclwiIFtoaWRkZW5dPVwiIXNob3dTcGlubmVyc1wiPlxyXG4gICAgPCEtLSBpbmNyZW1lbnQgaG91cnMgYnV0dG9uLS0+XHJcbiAgICA8dGQ+XHJcbiAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFjYW5JbmNyZW1lbnRIb3VycyB8fCAhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgIChjbGljayk9XCJjaGFuZ2VIb3Vycyhob3VyU3RlcClcIlxyXG4gICAgICA+PHNwYW4gY2xhc3M9XCJicy1jaGV2cm9uIGJzLWNoZXZyb24tdXBcIj48L3NwYW4+PC9hPlxyXG4gICAgPC90ZD5cclxuICAgIDwhLS0gZGl2aWRlciAtLT5cclxuICAgIDx0ZCAqbmdJZj1cInNob3dNaW51dGVzXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7PC90ZD5cclxuICAgIDwhLS0gaW5jcmVtZW50IG1pbnV0ZXMgYnV0dG9uIC0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd01pbnV0ZXNcIj5cclxuICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWNhbkluY3JlbWVudE1pbnV0ZXMgfHwgIWlzRWRpdGFibGVcIlxyXG4gICAgICAgICAoY2xpY2spPVwiY2hhbmdlTWludXRlcyhtaW51dGVTdGVwKVwiXHJcbiAgICAgID48c3BhbiBjbGFzcz1cImJzLWNoZXZyb24gYnMtY2hldnJvbi11cFwiPjwvc3Bhbj48L2E+XHJcbiAgICA8L3RkPlxyXG4gICAgPCEtLSBkaXZpZGVyIC0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd1NlY29uZHNcIj4mbmJzcDs8L3RkPlxyXG4gICAgPCEtLSBpbmNyZW1lbnQgc2Vjb25kcyBidXR0b24gLS0+XHJcbiAgICA8dGQgKm5nSWY9XCJzaG93U2Vjb25kc1wiPlxyXG4gICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGlua1wiIFtjbGFzcy5kaXNhYmxlZF09XCIhY2FuSW5jcmVtZW50U2Vjb25kcyB8fCAhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgIChjbGljayk9XCJjaGFuZ2VTZWNvbmRzKHNlY29uZHNTdGVwKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnMtY2hldnJvbiBicy1jaGV2cm9uLXVwXCI+PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3RkPlxyXG4gICAgPCEtLSBzcGFjZSBiZXR3ZWVuIC0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd01lcmlkaWFuXCI+Jm5ic3A7Jm5ic3A7Jm5ic3A7PC90ZD5cclxuICAgIDwhLS0gbWVyaWRpYW4gcGxhY2Vob2xkZXItLT5cclxuICAgIDx0ZCAqbmdJZj1cInNob3dNZXJpZGlhblwiPjwvdGQ+XHJcbiAgPC90cj5cclxuICA8dHI+XHJcbiAgICA8IS0tIGhvdXJzIC0tPlxyXG4gICAgPHRkIGNsYXNzPVwiZm9ybS1ncm91cCBtYi0zXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJpbnZhbGlkSG91cnNcIj5cclxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW2NsYXNzLmlzLWludmFsaWRdPVwiaW52YWxpZEhvdXJzXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyIGJzLXRpbWVwaWNrZXItZmllbGRcIlxyXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImhvdXJzUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXHJcbiAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlJbnB1dFwiXHJcbiAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgW3ZhbHVlXT1cImhvdXJzXCJcclxuICAgICAgICAgICAgICh3aGVlbCk9XCJwcmV2RGVmKCRldmVudCk7Y2hhbmdlSG91cnMoaG91clN0ZXAgKiB3aGVlbFNpZ24oJGV2ZW50KSwgJ3doZWVsJylcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJjaGFuZ2VIb3Vycyhob3VyU3RlcCwgJ2tleScpXCJcclxuICAgICAgICAgICAgIChrZXlkb3duLkFycm93RG93bik9XCJjaGFuZ2VIb3VycygtaG91clN0ZXAsICdrZXknKVwiXHJcbiAgICAgICAgICAgICAoY2hhbmdlKT1cInVwZGF0ZUhvdXJzKCRldmVudC50YXJnZXQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbEhvdXJzXCI+PC90ZD5cclxuICAgIDwhLS0gZGl2aWRlciAtLT5cclxuICAgIDx0ZCAqbmdJZj1cInNob3dNaW51dGVzXCI+Jm5ic3A7OiZuYnNwOzwvdGQ+XHJcbiAgICA8IS0tIG1pbnV0ZXMgLS0+XHJcbiAgICA8dGQgY2xhc3M9XCJmb3JtLWdyb3VwIG1iLTNcIiAqbmdJZj1cInNob3dNaW51dGVzXCIgW2NsYXNzLmhhcy1lcnJvcl09XCJpbnZhbGlkTWludXRlc1wiPlxyXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBbY2xhc3MuaXMtaW52YWxpZF09XCJpbnZhbGlkTWludXRlc1wiXHJcbiAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB0ZXh0LWNlbnRlciBicy10aW1lcGlja2VyLWZpZWxkXCJcclxuICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJtaW51dGVzUGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXHJcbiAgICAgICAgICAgICBbcmVhZG9ubHldPVwicmVhZG9ubHlJbnB1dFwiXHJcbiAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgW3ZhbHVlXT1cIm1pbnV0ZXNcIlxyXG4gICAgICAgICAgICAgKHdoZWVsKT1cInByZXZEZWYoJGV2ZW50KTtjaGFuZ2VNaW51dGVzKG1pbnV0ZVN0ZXAgKiB3aGVlbFNpZ24oJGV2ZW50KSwgJ3doZWVsJylcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJjaGFuZ2VNaW51dGVzKG1pbnV0ZVN0ZXAsICdrZXknKVwiXHJcbiAgICAgICAgICAgICAoa2V5ZG93bi5BcnJvd0Rvd24pPVwiY2hhbmdlTWludXRlcygtbWludXRlU3RlcCwgJ2tleScpXCJcclxuICAgICAgICAgICAgIChjaGFuZ2UpPVwidXBkYXRlTWludXRlcygkZXZlbnQudGFyZ2V0KVwiIFthdHRyLmFyaWEtbGFiZWxdPVwibGFiZWxNaW51dGVzXCI+XHJcbiAgICA8L3RkPlxyXG4gICAgPCEtLSBkaXZpZGVyIC0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd1NlY29uZHNcIj4mbmJzcDs6Jm5ic3A7PC90ZD5cclxuICAgIDwhLS0gc2Vjb25kcyAtLT5cclxuICAgIDx0ZCBjbGFzcz1cImZvcm0tZ3JvdXAgbWItM1wiICpuZ0lmPVwic2hvd1NlY29uZHNcIiBbY2xhc3MuaGFzLWVycm9yXT1cImludmFsaWRTZWNvbmRzXCI+XHJcbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFtjbGFzcy5pcy1pbnZhbGlkXT1cImludmFsaWRTZWNvbmRzXCJcclxuICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHRleHQtY2VudGVyIGJzLXRpbWVwaWNrZXItZmllbGRcIlxyXG4gICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cInNlY29uZHNQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcclxuICAgICAgICAgICAgIFtyZWFkb25seV09XCJyZWFkb25seUlucHV0XCJcclxuICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICBbdmFsdWVdPVwic2Vjb25kc1wiXHJcbiAgICAgICAgICAgICAod2hlZWwpPVwicHJldkRlZigkZXZlbnQpO2NoYW5nZVNlY29uZHMoc2Vjb25kc1N0ZXAgKiB3aGVlbFNpZ24oJGV2ZW50KSwgJ3doZWVsJylcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24uQXJyb3dVcCk9XCJjaGFuZ2VTZWNvbmRzKHNlY29uZHNTdGVwLCAna2V5JylcIlxyXG4gICAgICAgICAgICAgKGtleWRvd24uQXJyb3dEb3duKT1cImNoYW5nZVNlY29uZHMoLXNlY29uZHNTdGVwLCAna2V5JylcIlxyXG4gICAgICAgICAgICAgKGNoYW5nZSk9XCJ1cGRhdGVTZWNvbmRzKCRldmVudC50YXJnZXQpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJsYWJlbFNlY29uZHNcIj5cclxuICAgIDwvdGQ+XHJcbiAgICA8IS0tIHNwYWNlIGJldHdlZW4gLS0+XHJcbiAgICA8dGQgKm5nSWY9XCJzaG93TWVyaWRpYW5cIj4mbmJzcDsmbmJzcDsmbmJzcDs8L3RkPlxyXG4gICAgPCEtLSBtZXJpZGlhbiAtLT5cclxuICAgIDx0ZCAqbmdJZj1cInNob3dNZXJpZGlhblwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tZGVmYXVsdCB0ZXh0LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlIHx8ICFjYW5Ub2dnbGVNZXJpZGlhblwiXHJcbiAgICAgICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIiFpc0VkaXRhYmxlIHx8ICFjYW5Ub2dnbGVNZXJpZGlhblwiXHJcbiAgICAgICAgICAgICAgKGNsaWNrKT1cInRvZ2dsZU1lcmlkaWFuKClcIlxyXG4gICAgICA+e3sgbWVyaWRpYW4gfX1cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L3RkPlxyXG4gIDwvdHI+XHJcbiAgPHRyIGNsYXNzPVwidGV4dC1jZW50ZXJcIiBbaGlkZGVuXT1cIiFzaG93U3Bpbm5lcnNcIj5cclxuICAgIDwhLS0gZGVjcmVtZW50IGhvdXJzIGJ1dHRvbi0tPlxyXG4gICAgPHRkPlxyXG4gICAgICA8YSBjbGFzcz1cImJ0biBidG4tbGlua1wiIFtjbGFzcy5kaXNhYmxlZF09XCIhY2FuRGVjcmVtZW50SG91cnMgfHwgIWlzRWRpdGFibGVcIlxyXG4gICAgICAgICAoY2xpY2spPVwiY2hhbmdlSG91cnMoLWhvdXJTdGVwKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnMtY2hldnJvbiBicy1jaGV2cm9uLWRvd25cIj48L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvdGQ+XHJcbiAgICA8IS0tIGRpdmlkZXIgLS0+XHJcbiAgICA8dGQgKm5nSWY9XCJzaG93TWludXRlc1wiPiZuYnNwOyZuYnNwOyZuYnNwOzwvdGQ+XHJcbiAgICA8IS0tIGRlY3JlbWVudCBtaW51dGVzIGJ1dHRvbi0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd01pbnV0ZXNcIj5cclxuICAgICAgPGEgY2xhc3M9XCJidG4gYnRuLWxpbmtcIiBbY2xhc3MuZGlzYWJsZWRdPVwiIWNhbkRlY3JlbWVudE1pbnV0ZXMgfHwgIWlzRWRpdGFibGVcIlxyXG4gICAgICAgICAoY2xpY2spPVwiY2hhbmdlTWludXRlcygtbWludXRlU3RlcClcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJzLWNoZXZyb24gYnMtY2hldnJvbi1kb3duXCI+PC9zcGFuPlxyXG4gICAgICA8L2E+XHJcbiAgICA8L3RkPlxyXG4gICAgPCEtLSBkaXZpZGVyIC0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd1NlY29uZHNcIj4mbmJzcDs8L3RkPlxyXG4gICAgPCEtLSBkZWNyZW1lbnQgc2Vjb25kcyBidXR0b24tLT5cclxuICAgIDx0ZCAqbmdJZj1cInNob3dTZWNvbmRzXCI+XHJcbiAgICAgIDxhIGNsYXNzPVwiYnRuIGJ0bi1saW5rXCIgW2NsYXNzLmRpc2FibGVkXT1cIiFjYW5EZWNyZW1lbnRTZWNvbmRzIHx8ICFpc0VkaXRhYmxlXCJcclxuICAgICAgICAgKGNsaWNrKT1cImNoYW5nZVNlY29uZHMoLXNlY29uZHNTdGVwKVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYnMtY2hldnJvbiBicy1jaGV2cm9uLWRvd25cIj48L3NwYW4+XHJcbiAgICAgIDwvYT5cclxuICAgIDwvdGQ+XHJcbiAgICA8IS0tIHNwYWNlIGJldHdlZW4gLS0+XHJcbiAgICA8dGQgKm5nSWY9XCJzaG93TWVyaWRpYW5cIj4mbmJzcDsmbmJzcDsmbmJzcDs8L3RkPlxyXG4gICAgPCEtLSBtZXJpZGlhbiBwbGFjZWhvbGRlci0tPlxyXG4gICAgPHRkICpuZ0lmPVwic2hvd01lcmlkaWFuXCI+PC90ZD5cclxuICA8L3RyPlxyXG4gIDwvdGJvZHk+XHJcbjwvdGFibGU+XHJcbiJdfQ==