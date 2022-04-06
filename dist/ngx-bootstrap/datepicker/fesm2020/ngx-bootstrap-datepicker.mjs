import * as i0 from '@angular/core';
import { Injectable, Component, Input, EventEmitter, ChangeDetectionStrategy, Output, ViewChild, Directive, forwardRef, Host, NgModule } from '@angular/core';
import { filter, map, take, takeUntil, distinctUntilChanged } from 'rxjs/operators';
import { isFirstDayOfWeek, getDay, shiftDate, isBefore, endOf, isAfter, startOf, isArray, isSame, getFirstDayOfMonth, formatDate, getLocale, isSameMonth, isSameDay, isDisabledDay, isSameYear, isDateValid, setFullDate, getMonth, getFullYear, isDate, parseDate, utcAsLocal } from 'ngx-bootstrap/chronos';
import * as i5 from 'ngx-bootstrap/positioning';
import { PositioningService } from 'ngx-bootstrap/positioning';
import * as i8 from 'ngx-bootstrap/timepicker';
import { TimepickerActions, TimepickerModule } from 'ngx-bootstrap/timepicker';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Subscription, BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import * as i6 from '@angular/common';
import { CommonModule } from '@angular/common';
import * as i6$1 from 'ngx-bootstrap/tooltip';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import * as i2 from 'ngx-bootstrap/component-loader';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { NG_VALUE_ACCESSOR, NG_VALIDATORS } from '@angular/forms';

/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
class BsDatepickerConfig {
    constructor() {
        /** sets use adaptive position */
        this.adaptivePosition = false;
        /** sets use UTC date time format */
        this.useUtc = false;
        /** turn on/off animation */
        this.isAnimated = false;
        /**
         * The view that the datepicker should start in
         */
        this.startView = 'day';
        /**
         * If true, returns focus to the datepicker / daterangepicker input after date selection
         */
        this.returnFocusToInput = false;
        /** CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
        /**
         * Shows 'today' button
         */
        this.showTodayButton = false;
        /**
         * Shows clear button
         */
        this.showClearButton = false;
        /**
         * Positioning of 'today' button
         */
        this.todayPosition = 'center';
        /**
         * Positioning of 'clear' button
         */
        this.clearPosition = 'right';
        /**
         * Label for 'today' button
         */
        this.todayButtonLabel = 'Today';
        /**
         * Label for 'clear' button
         */
        this.clearButtonLabel = 'Clear';
        /**
         * Label for 'custom range' button
         */
        this.customRangeButtonLabel = 'Custom Range';
        /**
         * Shows timepicker under datepicker
         */
        this.withTimepicker = false;
        /**
         * Set allowed positions of container.
         */
        this.allowedPositions = ['top', 'bottom'];
    }
}
BsDatepickerConfig.ɵfac = function BsDatepickerConfig_Factory(t) { return new (t || BsDatepickerConfig)(); };
BsDatepickerConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDatepickerConfig, factory: BsDatepickerConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

const DATEPICKER_ANIMATION_TIMING = '220ms cubic-bezier(0, 0, 0.2, 1)';
const datepickerAnimation = trigger('datepickerAnimation', [
    state('animated-down', style({ height: '*', overflow: 'hidden' })),
    transition('* => animated-down', [
        style({ height: 0, overflow: 'hidden' }),
        animate(DATEPICKER_ANIMATION_TIMING)
    ]),
    state('animated-up', style({ height: '*', overflow: 'hidden' })),
    transition('* => animated-up', [
        style({ height: '*', overflow: 'hidden' }),
        animate(DATEPICKER_ANIMATION_TIMING)
    ]),
    transition('* => unanimated', animate('0s'))
]);

class BsDatepickerAbstractComponent {
    constructor() {
        this.containerClass = '';
        this.customRanges = [];
        this.chosenRange = [];
        this._daysCalendarSub = new Subscription();
        this.selectedTimeSub = new Subscription();
    }
    set minDate(value) {
        this._effects?.setMinDate(value);
    }
    set maxDate(value) {
        this._effects?.setMaxDate(value);
    }
    set daysDisabled(value) {
        this._effects?.setDaysDisabled(value);
    }
    set datesDisabled(value) {
        this._effects?.setDatesDisabled(value);
    }
    set datesEnabled(value) {
        this._effects?.setDatesEnabled(value);
    }
    set isDisabled(value) {
        this._effects?.setDisabled(value);
    }
    set dateCustomClasses(value) {
        this._effects?.setDateCustomClasses(value);
    }
    set dateTooltipTexts(value) {
        this._effects?.setDateTooltipTexts(value);
    }
    set daysCalendar$(value) {
        this._daysCalendar$ = value;
        this._daysCalendarSub.unsubscribe();
        this._daysCalendarSub.add(this._daysCalendar$.subscribe(value => {
            this.multipleCalendars = !!value && value.length > 1;
        }));
    }
    get daysCalendar$() {
        return this._daysCalendar$;
    }
    // todo: valorkin fix
    // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/no-empty-function
    setViewMode(event) { }
    // eslint-disable-next-line
    navigateTo(event) { }
    // eslint-disable-next-line
    dayHoverHandler(event) { }
    // eslint-disable-next-line
    weekHoverHandler(event) { }
    // eslint-disable-next-line
    monthHoverHandler(event) { }
    // eslint-disable-next-line
    yearHoverHandler(event) { }
    // eslint-disable-next-line
    timeSelectHandler(date, index) { }
    // eslint-disable-next-line
    daySelectHandler(day) { }
    // eslint-disable-next-line
    monthSelectHandler(event) { }
    // eslint-disable-next-line
    yearSelectHandler(event) { }
    // eslint-disable-next-line
    setRangeOnCalendar(dates) { }
    // eslint-disable-next-line
    setToday() { }
    // eslint-disable-next-line
    clearDate() { }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _stopPropagation(event) {
        event.stopPropagation();
    }
}

class BsDatepickerActions {
    calculate() {
        return { type: BsDatepickerActions.CALCULATE };
    }
    format() {
        return { type: BsDatepickerActions.FORMAT };
    }
    flag() {
        return { type: BsDatepickerActions.FLAG };
    }
    select(date) {
        return {
            type: BsDatepickerActions.SELECT,
            payload: date
        };
    }
    selectTime(date, index) {
        return {
            type: BsDatepickerActions.SELECT_TIME,
            payload: { date, index },
        };
    }
    changeViewMode(event) {
        return {
            type: BsDatepickerActions.CHANGE_VIEWMODE,
            payload: event
        };
    }
    navigateTo(event) {
        return {
            type: BsDatepickerActions.NAVIGATE_TO,
            payload: event
        };
    }
    navigateStep(step) {
        return {
            type: BsDatepickerActions.NAVIGATE_OFFSET,
            payload: step
        };
    }
    setOptions(options) {
        return {
            type: BsDatepickerActions.SET_OPTIONS,
            payload: options
        };
    }
    // date range picker
    selectRange(value) {
        return {
            type: BsDatepickerActions.SELECT_RANGE,
            payload: value
        };
    }
    hoverDay(event) {
        return {
            type: BsDatepickerActions.HOVER,
            payload: event.isHovered ? event.cell.date : null
        };
    }
    minDate(date) {
        return {
            type: BsDatepickerActions.SET_MIN_DATE,
            payload: date
        };
    }
    maxDate(date) {
        return {
            type: BsDatepickerActions.SET_MAX_DATE,
            payload: date
        };
    }
    daysDisabled(days) {
        return {
            type: BsDatepickerActions.SET_DAYSDISABLED,
            payload: days
        };
    }
    datesDisabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESDISABLED,
            payload: dates
        };
    }
    datesEnabled(dates) {
        return {
            type: BsDatepickerActions.SET_DATESENABLED,
            payload: dates
        };
    }
    isDisabled(value) {
        return {
            type: BsDatepickerActions.SET_IS_DISABLED,
            payload: value
        };
    }
    setDateCustomClasses(value) {
        return {
            type: BsDatepickerActions.SET_DATE_CUSTOM_CLASSES,
            payload: value
        };
    }
    setDateTooltipTexts(value) {
        return {
            type: BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS,
            payload: value
        };
    }
    setLocale(locale) {
        return {
            type: BsDatepickerActions.SET_LOCALE,
            payload: locale
        };
    }
}
BsDatepickerActions.CALCULATE = '[datepicker] calculate dates matrix';
BsDatepickerActions.FORMAT = '[datepicker] format datepicker values';
BsDatepickerActions.FLAG = '[datepicker] set flags';
BsDatepickerActions.SELECT = '[datepicker] select date';
BsDatepickerActions.NAVIGATE_OFFSET = '[datepicker] shift view date';
BsDatepickerActions.NAVIGATE_TO = '[datepicker] change view date';
BsDatepickerActions.SET_OPTIONS = '[datepicker] update render options';
BsDatepickerActions.HOVER = '[datepicker] hover date';
BsDatepickerActions.CHANGE_VIEWMODE = '[datepicker] switch view mode';
BsDatepickerActions.SET_MIN_DATE = '[datepicker] set min date';
BsDatepickerActions.SET_MAX_DATE = '[datepicker] set max date';
BsDatepickerActions.SET_DAYSDISABLED = '[datepicker] set days disabled';
BsDatepickerActions.SET_DATESDISABLED = '[datepicker] set dates disabled';
BsDatepickerActions.SET_DATESENABLED = '[datepicker] set dates enabled';
BsDatepickerActions.SET_IS_DISABLED = '[datepicker] set is disabled';
BsDatepickerActions.SET_DATE_CUSTOM_CLASSES = '[datepicker] set date custom classes';
BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS = '[datepicker] set date tooltip texts';
BsDatepickerActions.SET_LOCALE = '[datepicker] set datepicker locale';
BsDatepickerActions.SELECT_TIME = '[datepicker] select time';
BsDatepickerActions.SELECT_RANGE = '[daterangepicker] select dates range';
BsDatepickerActions.ɵfac = function BsDatepickerActions_Factory(t) { return new (t || BsDatepickerActions)(); };
BsDatepickerActions.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDatepickerActions, factory: BsDatepickerActions.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerActions, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], null, null); })();

class BsLocaleService {
    constructor() {
        this._defaultLocale = 'en';
        this._locale = new BehaviorSubject(this._defaultLocale);
        this._localeChange = this._locale.asObservable();
    }
    get locale() {
        return this._locale;
    }
    get localeChange() {
        return this._localeChange;
    }
    get currentLocale() {
        return this._locale.getValue();
    }
    use(locale) {
        if (locale === this.currentLocale) {
            return;
        }
        this._locale.next(locale);
    }
}
BsLocaleService.ɵfac = function BsLocaleService_Factory(t) { return new (t || BsLocaleService)(); };
BsLocaleService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsLocaleService, factory: BsLocaleService.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsLocaleService, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], null, null); })();

class BsDatepickerEffects {
    constructor(_actions, _localeService) {
        this._actions = _actions;
        this._localeService = _localeService;
        this._subs = [];
    }
    init(_bsDatepickerStore) {
        this._store = _bsDatepickerStore;
        return this;
    }
    /** setters */
    setValue(value) {
        this._store?.dispatch(this._actions.select(value));
    }
    setRangeValue(value) {
        this._store?.dispatch(this._actions.selectRange(value));
    }
    setMinDate(value) {
        this._store?.dispatch(this._actions.minDate(value));
        return this;
    }
    setMaxDate(value) {
        this._store?.dispatch(this._actions.maxDate(value));
        return this;
    }
    setDaysDisabled(value) {
        this._store?.dispatch(this._actions.daysDisabled(value));
        return this;
    }
    setDatesDisabled(value) {
        this._store?.dispatch(this._actions.datesDisabled(value));
        return this;
    }
    setDatesEnabled(value) {
        this._store?.dispatch(this._actions.datesEnabled(value));
        return this;
    }
    setDisabled(value) {
        this._store?.dispatch(this._actions.isDisabled(value));
        return this;
    }
    setDateCustomClasses(value) {
        this._store?.dispatch(this._actions.setDateCustomClasses(value));
        return this;
    }
    setDateTooltipTexts(value) {
        this._store?.dispatch(this._actions.setDateTooltipTexts(value));
        return this;
    }
    /* Set rendering options */
    setOptions(_config) {
        const _options = Object.assign({ locale: this._localeService.currentLocale }, _config);
        this._store?.dispatch(this._actions.setOptions(_options));
        return this;
    }
    /** view to mode bindings */
    setBindings(container) {
        if (!this._store) {
            return this;
        }
        container.selectedTime = this._store.select(state => state.selectedTime)
            .pipe(filter(times => !!times));
        container.daysCalendar$ = this._store.select(state => state.flaggedMonths)
            .pipe(filter(months => !!months));
        // month calendar
        container.monthsCalendar = this._store.select(state => state.flaggedMonthsCalendar)
            .pipe(filter(months => !!months));
        // year calendar
        container.yearsCalendar = this._store.select(state => state.yearsCalendarFlagged)
            .pipe(filter(years => !!years));
        container.viewMode = this._store.select(state => state.view?.mode);
        container.options$ = combineLatest([
            this._store.select(state => state.showWeekNumbers),
            this._store.select(state => state.displayMonths)
        ])
            .pipe(map((latest) => ({
            showWeekNumbers: latest[0],
            displayMonths: latest[1]
        })));
        return this;
    }
    /** event handlers */
    setEventHandlers(container) {
        container.setViewMode = (event) => {
            this._store?.dispatch(this._actions.changeViewMode(event));
        };
        container.navigateTo = (event) => {
            this._store?.dispatch(this._actions.navigateStep(event.step));
        };
        container.dayHoverHandler = (event) => {
            const _cell = event.cell;
            if (_cell.isOtherMonth || _cell.isDisabled) {
                return;
            }
            this._store?.dispatch(this._actions.hoverDay(event));
            _cell.isHovered = event.isHovered;
        };
        container.monthHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        container.yearHoverHandler = (event) => {
            event.cell.isHovered = event.isHovered;
        };
        return this;
    }
    registerDatepickerSideEffects() {
        if (!this._store) {
            return this;
        }
        this._subs.push(this._store.select(state => state.view).subscribe(() => {
            this._store?.dispatch(this._actions.calculate());
        }));
        // format calendar values on month model change
        this._subs.push(this._store
            .select(state => state.monthsModel)
            .pipe(filter(monthModel => !!monthModel))
            .subscribe(() => this._store?.dispatch(this._actions.format())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.formattedMonths)
            .pipe(filter(month => !!month))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // flag day values
        this._subs.push(this._store
            .select(state => state.selectedDate)
            .pipe(filter(selectedDate => !!selectedDate))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // flag for date range picker
        this._subs.push(this._store
            .select(state => state.selectedRange)
            .pipe(filter(selectedRange => !!selectedRange))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // monthsCalendar
        this._subs.push(this._store
            .select(state => state.monthsCalendar)
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // years calendar
        this._subs.push(this._store
            .select(state => state.yearsCalendarModel)
            .pipe(filter(state => !!state))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // on hover
        this._subs.push(this._store
            .select(state => state.hoveredDate)
            .pipe(filter(hoveredDate => !!hoveredDate))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // date custom classes
        this._subs.push(this._store
            .select(state => state.dateCustomClasses)
            .pipe(filter(dateCustomClasses => !!dateCustomClasses))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // date tooltip texts
        this._subs.push(this._store
            .select(state => state.dateTooltipTexts)
            .pipe(filter(dateTooltipTexts => !!dateTooltipTexts))
            .subscribe(() => this._store?.dispatch(this._actions.flag())));
        // on locale change
        this._subs.push(this._localeService.localeChange
            .subscribe(locale => this._store?.dispatch(this._actions.setLocale(locale))));
        return this;
    }
    destroy() {
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
    }
}
BsDatepickerEffects.ɵfac = function BsDatepickerEffects_Factory(t) { return new (t || BsDatepickerEffects)(i0.ɵɵinject(BsDatepickerActions), i0.ɵɵinject(BsLocaleService)); };
BsDatepickerEffects.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDatepickerEffects, factory: BsDatepickerEffects.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerEffects, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], function () { return [{ type: BsDatepickerActions }, { type: BsLocaleService }]; }, null); })();

const defaultMonthOptions = {
    width: 7,
    height: 6
};
const dayInMilliseconds = 24 * 60 * 60 * 1000;

class BsDatepickerState {
    constructor() {
        // DatepickerRenderOptions
        this.showWeekNumbers = true;
        this.displayMonths = 1;
    }
}
const _initialView = { date: new Date(), mode: 'day' };
const initialDatepickerState = Object.assign(new BsDatepickerConfig(), {
    locale: 'en',
    view: _initialView,
    selectedRange: [],
    selectedTime: [],
    monthViewOptions: defaultMonthOptions
});

function getStartingDayOfCalendar(date, options) {
    if (isFirstDayOfWeek(date, options.firstDayOfWeek)) {
        return date;
    }
    const weekDay = getDay(date);
    const offset = calculateDateOffset(weekDay, options.firstDayOfWeek);
    return shiftDate(date, { day: -offset });
}
function calculateDateOffset(weekday, startingDayOffset) {
    const _startingDayOffset = Number(startingDayOffset);
    if (isNaN(_startingDayOffset)) {
        return 0;
    }
    if (_startingDayOffset === 0) {
        return weekday;
    }
    const offset = weekday - _startingDayOffset % 7;
    return offset < 0 ? offset + 7 : offset;
}
function isMonthDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'month'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'month'), max, 'day');
    return minBound || maxBound || false;
}
function isYearDisabled(date, min, max) {
    const minBound = min && isBefore(endOf(date, 'year'), min, 'day');
    const maxBound = max && isAfter(startOf(date, 'year'), max, 'day');
    return minBound || maxBound || false;
}
function isDisabledDate(date, datesDisabled, unit) {
    if (!datesDisabled || !isArray(datesDisabled) || !datesDisabled.length) {
        return false;
    }
    if (unit && unit === 'year' && !datesDisabled[0].getDate()) {
        return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'year'));
    }
    return datesDisabled.some((dateDisabled) => isSame(date, dateDisabled, 'date'));
}
function isEnabledDate(date, datesEnabled, unit) {
    if (!datesEnabled || !isArray(datesEnabled) || !datesEnabled.length) {
        return false;
    }
    return !datesEnabled.some((enabledDate) => isSame(date, enabledDate, unit || 'date'));
}
function getYearsCalendarInitialDate(state, calendarIndex = 0) {
    const model = state && state.yearsCalendarModel && state.yearsCalendarModel[calendarIndex];
    return model?.years[0] && model.years[0][0] && model.years[0][0].date;
}
function checkRangesWithMaxDate(ranges, maxDate) {
    if (!ranges)
        return ranges;
    if (!maxDate)
        return ranges;
    if (!ranges.length && !ranges[0].value)
        return ranges;
    ranges.forEach((item) => {
        if (!item || !item.value)
            return ranges;
        if (item.value instanceof Date)
            return ranges;
        if (!(item.value instanceof Array && item.value.length))
            return ranges;
        item.value = compareDateWithMaxDateHelper(item.value, maxDate);
        return ranges;
    });
    return ranges;
}
function checkBsValue(date, maxDate) {
    if (!date)
        return date;
    if (!maxDate)
        return date;
    if (date instanceof Array && !date.length)
        return date;
    if (date instanceof Date)
        return date;
    return compareDateWithMaxDateHelper(date, maxDate);
}
function compareDateWithMaxDateHelper(date, maxDate) {
    if (date instanceof Array) {
        const editedValues = date.map(item => {
            if (!item)
                return item;
            if (isAfter(item, maxDate, 'date'))
                item = maxDate;
            return item;
        });
        return editedValues;
    }
    return date;
}
function setCurrentTimeOnDateSelect(value) {
    if (!value)
        return value;
    return setCurrentTimeHelper(value);
}
function setDateRangesCurrentTimeOnDateSelect(value) {
    if (!value?.length)
        return value;
    value.map((date) => {
        if (!date) {
            return date;
        }
        return setCurrentTimeHelper(date);
    });
    return value;
}
function setCurrentTimeHelper(date) {
    const now = new Date();
    date.setMilliseconds(now.getMilliseconds());
    date.setSeconds(now.getSeconds());
    date.setMinutes(now.getMinutes());
    date.setHours(now.getHours());
    return date;
}

function createMatrix(options, fn) {
    let prevValue = options.initialDate;
    const matrix = new Array(options.height);
    for (let i = 0; i < options.height; i++) {
        matrix[i] = new Array(options.width);
        for (let j = 0; j < options.width; j++) {
            matrix[i][j] = fn(prevValue);
            prevValue = shiftDate(prevValue, options.shift);
        }
    }
    return matrix;
}

// user and model input should handle parsing and validating input values
function calcDaysCalendar(startingDate, options) {
    const firstDay = getFirstDayOfMonth(startingDate);
    const initialDate = getStartingDayOfCalendar(firstDay, options);
    // todo test
    const matrixOptions = {
        width: options.width || 0,
        height: options.height || 0,
        initialDate,
        shift: { day: 1 }
    };
    const daysMatrix = createMatrix(matrixOptions, date => date);
    return {
        daysMatrix,
        month: firstDay
    };
}

function formatDaysCalendar(daysCalendar, formatOptions, monthIndex) {
    return {
        month: daysCalendar.month,
        monthTitle: formatDate(daysCalendar.month, formatOptions.monthTitle, formatOptions.locale),
        yearTitle: formatDate(daysCalendar.month, formatOptions.yearTitle, formatOptions.locale),
        weekNumbers: getWeekNumbers(daysCalendar.daysMatrix, formatOptions.weekNumbers, formatOptions.locale),
        weekdays: getShiftedWeekdays(formatOptions.locale),
        weeks: daysCalendar.daysMatrix.map((week, weekIndex) => ({
            days: week.map((date, dayIndex) => ({
                date,
                label: formatDate(date, formatOptions.dayLabel, formatOptions.locale),
                monthIndex,
                weekIndex,
                dayIndex
            }))
        })),
        hideLeftArrow: false,
        hideRightArrow: false,
        disableLeftArrow: false,
        disableRightArrow: false
    };
}
function getWeekNumbers(daysMatrix, format, locale) {
    return daysMatrix.map((days) => (days[0] ? formatDate(days[0], format, locale) : ''));
}
function getShiftedWeekdays(locale) {
    const _locale = getLocale(locale);
    const weekdays = _locale.weekdaysShort();
    const firstDayOfWeek = _locale.firstDayOfWeek();
    return [...weekdays.slice(firstDayOfWeek), ...weekdays.slice(0, firstDayOfWeek)];
}

function flagDaysCalendar(formattedMonth, options) {
    formattedMonth.weeks.forEach((week) => {
        week.days.forEach((day, dayIndex) => {
            // datepicker
            const isOtherMonth = !isSameMonth(day.date, formattedMonth.month);
            const isHovered = !isOtherMonth && isSameDay(day.date, options.hoveredDate);
            // date range picker
            const isSelectionStart = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[0]);
            const isSelectionEnd = !isOtherMonth &&
                options.selectedRange &&
                isSameDay(day.date, options.selectedRange[1]);
            const isSelected = (!isOtherMonth && isSameDay(day.date, options.selectedDate)) ||
                isSelectionStart ||
                isSelectionEnd;
            const isInRange = !isOtherMonth &&
                options.selectedRange &&
                isDateInRange(day.date, options.selectedRange, options.hoveredDate);
            const isDisabled = options.isDisabled ||
                isBefore(day.date, options.minDate, 'day') ||
                isAfter(day.date, options.maxDate, 'day') ||
                isDisabledDay(day.date, options.daysDisabled) ||
                isDisabledDate(day.date, options.datesDisabled) ||
                isEnabledDate(day.date, options.datesEnabled);
            const currentDate = new Date();
            const isToday = !isOtherMonth && isSameDay(day.date, currentDate);
            const customClasses = options.dateCustomClasses && options.dateCustomClasses
                .map(dcc => isSameDay(day.date, dcc.date) ? dcc.classes : [])
                .reduce((previousValue, currentValue) => previousValue.concat(currentValue), [])
                .join(' ')
                || '';
            const tooltipText = options.dateTooltipTexts && options.dateTooltipTexts
                .map(tt => isSameDay(day.date, tt.date) ? tt.tooltipText : '')
                .reduce((previousValue, currentValue) => {
                previousValue.push(currentValue);
                return previousValue;
            }, [])
                .join(' ')
                || '';
            // decide update or not
            const newDay = Object.assign({}, day, {
                isOtherMonth,
                isHovered,
                isSelected,
                isSelectionStart,
                isSelectionEnd,
                isInRange,
                isDisabled,
                isToday,
                customClasses,
                tooltipText
            });
            if (day.isOtherMonth !== newDay.isOtherMonth ||
                day.isHovered !== newDay.isHovered ||
                day.isSelected !== newDay.isSelected ||
                day.isSelectionStart !== newDay.isSelectionStart ||
                day.isSelectionEnd !== newDay.isSelectionEnd ||
                day.isDisabled !== newDay.isDisabled ||
                day.isInRange !== newDay.isInRange ||
                day.customClasses !== newDay.customClasses ||
                day.tooltipText !== newDay.tooltipText) {
                week.days[dayIndex] = newDay;
            }
        });
    });
    // todo: add check for linked calendars
    formattedMonth.hideLeftArrow =
        options.isDisabled ||
            (!!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths);
    formattedMonth.hideRightArrow =
        options.isDisabled ||
            ((!!options.monthIndex || options.monthIndex === 0) && !!options.displayMonths && options.monthIndex < options.displayMonths &&
                options.monthIndex + 1 !== options.displayMonths);
    formattedMonth.disableLeftArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: -1 }), options.minDate, options.maxDate);
    formattedMonth.disableRightArrow = isMonthDisabled(shiftDate(formattedMonth.month, { month: 1 }), options.minDate, options.maxDate);
    return formattedMonth;
}
function isDateInRange(date, selectedRange, hoveredDate) {
    if (!date || !selectedRange || !selectedRange[0]) {
        return false;
    }
    if (selectedRange[1]) {
        return date > selectedRange[0] && date <= selectedRange[1];
    }
    if (hoveredDate) {
        return date > selectedRange[0] && date <= hoveredDate;
    }
    return false;
}

function canSwitchMode(mode, minMode) {
    return minMode ? mode >= minMode : true;
}

const height$1 = 4;
const width$1 = 3;
const shift$1 = { month: 1 };
function formatMonthsCalendar(viewDate, formatOptions) {
    const initialDate = startOf(viewDate, 'year');
    const matrixOptions = { width: width$1, height: height$1, initialDate, shift: shift$1 };
    const monthMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.monthLabel, formatOptions.locale)
    }));
    return {
        months: monthMatrix,
        monthTitle: '',
        yearTitle: formatDate(viewDate, formatOptions.yearTitle, formatOptions.locale),
        hideRightArrow: false,
        hideLeftArrow: false,
        disableRightArrow: false,
        disableLeftArrow: false
    };
}

function flagMonthsCalendar(monthCalendar, options) {
    monthCalendar.months.forEach((months, rowIndex) => {
        months.forEach((month, monthIndex) => {
            let isSelected;
            const isHovered = isSameMonth(month.date, options.hoveredMonth);
            const isDisabled = options.isDisabled ||
                isDisabledDate(month.date, options.datesDisabled) ||
                isEnabledDate(month.date, options.datesEnabled, 'month') ||
                isMonthDisabled(month.date, options.minDate, options.maxDate);
            if (!options.selectedDate && options.selectedRange) {
                isSelected = isSameMonth(month.date, options.selectedRange[0]);
                if (!isSelected) {
                    isSelected = isSameMonth(month.date, options.selectedRange[1]);
                }
            }
            else {
                isSelected = isSameMonth(month.date, options.selectedDate);
            }
            const newMonth = Object.assign(/*{},*/ month, {
                isHovered,
                isDisabled,
                isSelected
            });
            if (month.isHovered !== newMonth.isHovered ||
                month.isDisabled !== newMonth.isDisabled ||
                month.isSelected !== newMonth.isSelected) {
                monthCalendar.months[rowIndex][monthIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    monthCalendar.hideLeftArrow =
        !!options.monthIndex && options.monthIndex > 0 && options.monthIndex !== options.displayMonths;
    monthCalendar.hideRightArrow =
        (!!options.monthIndex || options.monthIndex === 0)
            && (!!options.displayMonths || options.displayMonths === 0)
            && options.monthIndex < options.displayMonths
            && options.monthIndex + 1 !== options.displayMonths;
    monthCalendar.disableLeftArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    monthCalendar.disableRightArrow = isYearDisabled(shiftDate(monthCalendar.months[0][0].date, { year: 1 }), options.minDate, options.maxDate);
    return monthCalendar;
}

const height = 4;
const width = 4;
const yearsPerCalendar = height * width;
const initialYearShift = (Math.floor(yearsPerCalendar / 2) - 1) * -1;
const shift = { year: 1 };
function formatYearsCalendar(viewDate, formatOptions, previousInitialDate) {
    const initialDate = calculateInitialDate(viewDate, previousInitialDate);
    const matrixOptions = { width, height, initialDate, shift };
    const yearsMatrix = createMatrix(matrixOptions, date => ({
        date,
        label: formatDate(date, formatOptions.yearLabel, formatOptions.locale)
    }));
    const yearTitle = formatYearRangeTitle(yearsMatrix, formatOptions);
    return {
        years: yearsMatrix,
        monthTitle: '',
        yearTitle,
        hideLeftArrow: false,
        hideRightArrow: false,
        disableLeftArrow: false,
        disableRightArrow: false
    };
}
function calculateInitialDate(viewDate, previousInitialDate) {
    if (previousInitialDate
        && viewDate.getFullYear() >= previousInitialDate.getFullYear()
        && viewDate.getFullYear() < previousInitialDate.getFullYear() + yearsPerCalendar) {
        return previousInitialDate;
    }
    return shiftDate(viewDate, { year: initialYearShift });
}
function formatYearRangeTitle(yearsMatrix, formatOptions) {
    const from = formatDate(yearsMatrix[0][0].date, formatOptions.yearTitle, formatOptions.locale);
    const to = formatDate(yearsMatrix[height - 1][width - 1].date, formatOptions.yearTitle, formatOptions.locale);
    return `${from} - ${to}`;
}

function flagYearsCalendar(yearsCalendar, options) {
    yearsCalendar.years.forEach((years, rowIndex) => {
        years.forEach((year, yearIndex) => {
            let isSelected;
            const isHovered = isSameYear(year.date, options.hoveredYear);
            const isDisabled = options.isDisabled ||
                isDisabledDate(year.date, options.datesDisabled, 'year') ||
                isEnabledDate(year.date, options.datesEnabled, 'year') ||
                isYearDisabled(year.date, options.minDate, options.maxDate);
            if (!options.selectedDate && options.selectedRange) {
                isSelected = isSameYear(year.date, options.selectedRange[0]);
                if (!isSelected) {
                    isSelected = isSameYear(year.date, options.selectedRange[1]);
                }
            }
            else {
                isSelected = isSameYear(year.date, options.selectedDate);
            }
            const newMonth = Object.assign(/*{},*/ year, { isHovered, isDisabled, isSelected });
            if (year.isHovered !== newMonth.isHovered ||
                year.isDisabled !== newMonth.isDisabled ||
                year.isSelected !== newMonth.isSelected) {
                yearsCalendar.years[rowIndex][yearIndex] = newMonth;
            }
        });
    });
    // todo: add check for linked calendars
    yearsCalendar.hideLeftArrow =
        !!options.yearIndex && options.yearIndex > 0 && options.yearIndex !== options.displayMonths;
    yearsCalendar.hideRightArrow =
        !!options.yearIndex && !!options.displayMonths &&
            options.yearIndex < options.displayMonths &&
            options.yearIndex + 1 !== options.displayMonths;
    yearsCalendar.disableLeftArrow = isYearDisabled(shiftDate(yearsCalendar.years[0][0].date, { year: -1 }), options.minDate, options.maxDate);
    const i = yearsCalendar.years.length - 1;
    const j = yearsCalendar.years[i].length - 1;
    yearsCalendar.disableRightArrow = isYearDisabled(shiftDate(yearsCalendar.years[i][j].date, { year: 1 }), options.minDate, options.maxDate);
    return yearsCalendar;
}

function copyTime(sourceDate, time) {
    if (!sourceDate || !isNaN(sourceDate.getTime())) {
        return;
    }
    sourceDate.setHours(time.getHours());
    sourceDate.setMinutes(time.getMinutes());
    sourceDate.setSeconds(time.getSeconds());
    sourceDate.setMilliseconds(time.getMilliseconds());
}

function bsDatepickerReducer(state = initialDatepickerState, action) {
    switch (action.type) {
        case BsDatepickerActions.CALCULATE: {
            return calculateReducer(state);
        }
        case BsDatepickerActions.FORMAT: {
            return formatReducer(state);
        }
        case BsDatepickerActions.FLAG: {
            return flagReducer(state);
        }
        case BsDatepickerActions.NAVIGATE_OFFSET: {
            return navigateOffsetReducer(state, action);
        }
        case BsDatepickerActions.NAVIGATE_TO: {
            const payload = action.payload;
            if (!state.view || !payload.unit) {
                return state;
            }
            const date = setFullDate(state.view.date, payload.unit);
            let newState;
            let mode;
            if (canSwitchMode(payload.viewMode, state.minMode)) {
                mode = payload.viewMode;
                newState = { view: { date, mode } };
            }
            else {
                mode = state.view.mode;
                newState = { selectedDate: date, view: { date, mode } };
            }
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.CHANGE_VIEWMODE: {
            if (!canSwitchMode(action.payload, state.minMode) || !state.view) {
                return state;
            }
            const date = state.view.date;
            const mode = action.payload;
            const newState = { view: { date, mode } };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.HOVER: {
            return Object.assign({}, state, { hoveredDate: action.payload });
        }
        case BsDatepickerActions.SELECT: {
            if (!state.view) {
                return state;
            }
            const newState = {
                selectedDate: action.payload,
                view: state.view
            };
            if (Array.isArray(state.selectedTime)) {
                const _time = state.selectedTime[0];
                if (newState.selectedDate && _time) {
                    copyTime(newState.selectedDate, _time);
                }
            }
            const mode = state.view.mode;
            const _date = action.payload || state.view.date;
            const date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SELECT_TIME: {
            const { date, index } = action.payload;
            const selectedTime = state.selectedTime ? [...state.selectedTime] : [];
            selectedTime[index] = date;
            return Object.assign({}, state, { selectedTime });
        }
        case BsDatepickerActions.SET_OPTIONS: {
            if (!state.view) {
                return state;
            }
            const newState = action.payload;
            // preserve view mode
            const mode = newState.minMode ? newState.minMode : state.view.mode;
            const _viewDate = isDateValid(newState.value) && newState.value
                || isArray(newState.value) && isDateValid(newState.value[0]) && newState.value[0]
                || state.view.date;
            const date = getViewDate(_viewDate, newState.minDate, newState.maxDate);
            newState.view = { mode, date };
            // update selected value
            if (newState.value) {
                // if new value is array we work with date range
                if (isArray(newState.value)) {
                    newState.selectedRange = newState.value;
                    newState.selectedTime = newState.value.map((i) => i);
                }
                // if new value is a date -> datepicker
                if (newState.value instanceof Date) {
                    newState.selectedDate = newState.value;
                    newState.selectedTime = [newState.value];
                }
                // provided value is not supported :)
                // need to report it somehow
            }
            return Object.assign({}, state, newState);
        }
        // date range picker
        case BsDatepickerActions.SELECT_RANGE: {
            if (!state.view) {
                return state;
            }
            const newState = {
                selectedRange: action.payload,
                view: state.view
            };
            newState.selectedRange?.forEach((dte, index) => {
                if (Array.isArray(state.selectedTime)) {
                    const _time = state.selectedTime[index];
                    if (_time) {
                        copyTime(dte, _time);
                    }
                }
            });
            const mode = state.view.mode;
            const _date = action.payload && action.payload[0] || state.view.date;
            const date = getViewDate(_date, state.minDate, state.maxDate);
            newState.view = { mode, date };
            return Object.assign({}, state, newState);
        }
        case BsDatepickerActions.SET_MIN_DATE: {
            return Object.assign({}, state, {
                minDate: action.payload
            });
        }
        case BsDatepickerActions.SET_MAX_DATE: {
            return Object.assign({}, state, {
                maxDate: action.payload
            });
        }
        case BsDatepickerActions.SET_IS_DISABLED: {
            return Object.assign({}, state, {
                isDisabled: action.payload
            });
        }
        case BsDatepickerActions.SET_DATE_CUSTOM_CLASSES: {
            return Object.assign({}, state, {
                dateCustomClasses: action.payload
            });
        }
        case BsDatepickerActions.SET_DATE_TOOLTIP_TEXTS: {
            return Object.assign({}, state, {
                dateTooltipTexts: action.payload
            });
        }
        default:
            return state;
    }
}
function calculateReducer(state) {
    if (!state.view) {
        return state;
    }
    // how many calendars
    let displayMonths;
    if (state.displayOneMonthRange &&
        isDisplayOneMonth(state.view.date, state.minDate, state.maxDate)) {
        displayMonths = 1;
    }
    else {
        displayMonths = state.displayMonths || 1;
    }
    // use selected date on initial rendering if set
    let viewDate = state.view.date;
    if (state.view.mode === 'day' && state.monthViewOptions) {
        if (state.showPreviousMonth && state.selectedRange && state.selectedRange.length === 0) {
            viewDate = shiftDate(viewDate, { month: -1 });
        }
        state.monthViewOptions.firstDayOfWeek = getLocale(state.locale).firstDayOfWeek();
        let monthsModel = new Array(displayMonths);
        for (let monthIndex = 0; monthIndex < displayMonths; monthIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsModel[monthIndex] = calcDaysCalendar(viewDate, state.monthViewOptions);
            viewDate = shiftDate(viewDate, { month: 1 });
        }
        // Check if parameter enabled and check if it's not months navigation event
        if (state.preventChangeToNextMonth && state.flaggedMonths && state.hoveredDate) {
            const viewMonth = calcDaysCalendar(state.view.date, state.monthViewOptions);
            // Check if viewed right month same as in flaggedMonths state, then override months model with flaggedMonths
            if (state.flaggedMonths.length && state.flaggedMonths[1].month.getMonth() === viewMonth.month.getMonth()) {
                monthsModel = state.flaggedMonths
                    .map(item => {
                    if (state.monthViewOptions) {
                        return calcDaysCalendar(item.month, state.monthViewOptions);
                    }
                    return null;
                })
                    .filter(item => item !== null);
            }
        }
        return Object.assign({}, state, { monthsModel });
    }
    if (state.view.mode === 'month') {
        const monthsCalendar = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        const yearsCalendarModel = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state), state.minMode === 'year' ? getYearsCalendarInitialDate(state, calendarIndex) : undefined);
            viewDate = shiftDate(viewDate, { year: yearsPerCalendar });
        }
        return Object.assign({}, state, { yearsCalendarModel });
    }
    return state;
}
function formatReducer(state) {
    if (!state.view) {
        return state;
    }
    if (state.view.mode === 'day' && state.monthsModel) {
        const formattedMonths = state.monthsModel.map((month, monthIndex) => formatDaysCalendar(month, getFormatOptions(state), monthIndex));
        return Object.assign({}, state, { formattedMonths });
    }
    // how many calendars
    const displayMonths = state.displayMonths || 1;
    // check initial rendering
    // use selected date on initial rendering if set
    let viewDate = state.view.date;
    if (state.view.mode === 'month') {
        const monthsCalendar = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            monthsCalendar[calendarIndex] = formatMonthsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 1 });
        }
        return Object.assign({}, state, { monthsCalendar });
    }
    if (state.view.mode === 'year') {
        const yearsCalendarModel = new Array(displayMonths);
        for (let calendarIndex = 0; calendarIndex < displayMonths; calendarIndex++) {
            // todo: for unlinked calendars it will be harder
            yearsCalendarModel[calendarIndex] = formatYearsCalendar(viewDate, getFormatOptions(state));
            viewDate = shiftDate(viewDate, { year: 16 });
        }
        return Object.assign({}, state, { yearsCalendarModel });
    }
    return state;
}
function flagReducer(state) {
    if (!state.view) {
        return state;
    }
    const displayMonths = isDisplayOneMonth(state.view.date, state.minDate, state.maxDate) ? 1 : state.displayMonths;
    if (state.formattedMonths && state.view.mode === 'day') {
        const flaggedMonths = state.formattedMonths.map((formattedMonth, monthIndex) => flagDaysCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            daysDisabled: state.daysDisabled,
            datesDisabled: state.datesDisabled,
            datesEnabled: state.datesEnabled,
            hoveredDate: state.hoveredDate,
            selectedDate: state.selectedDate,
            selectedRange: state.selectedRange,
            displayMonths,
            dateCustomClasses: state.dateCustomClasses,
            dateTooltipTexts: state.dateTooltipTexts,
            monthIndex
        }));
        return Object.assign({}, state, { flaggedMonths });
    }
    if (state.view.mode === 'month' && state.monthsCalendar) {
        const flaggedMonthsCalendar = state.monthsCalendar.map((formattedMonth, monthIndex) => flagMonthsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredMonth: state.hoveredMonth,
            selectedDate: state.selectedDate,
            datesDisabled: state.datesDisabled,
            datesEnabled: state.datesEnabled,
            selectedRange: state.selectedRange,
            displayMonths,
            monthIndex
        }));
        return Object.assign({}, state, { flaggedMonthsCalendar });
    }
    if (state.view.mode === 'year' && state.yearsCalendarModel) {
        const yearsCalendarFlagged = state.yearsCalendarModel.map((formattedMonth, yearIndex) => flagYearsCalendar(formattedMonth, {
            isDisabled: state.isDisabled,
            minDate: state.minDate,
            maxDate: state.maxDate,
            hoveredYear: state.hoveredYear,
            selectedDate: state.selectedDate,
            datesDisabled: state.datesDisabled,
            datesEnabled: state.datesEnabled,
            selectedRange: state.selectedRange,
            displayMonths,
            yearIndex
        }));
        return Object.assign({}, state, { yearsCalendarFlagged });
    }
    return state;
}
function navigateOffsetReducer(state, action) {
    if (!state.view) {
        return state;
    }
    const date = shiftViewDate(state, action);
    if (!date) {
        return state;
    }
    const newState = {
        view: {
            mode: state.view.mode,
            date
        }
    };
    return Object.assign({}, state, newState);
}
function shiftViewDate(state, action) {
    if (!state.view) {
        return undefined;
    }
    if (state.view.mode === 'year' && state.minMode === 'year') {
        const initialDate = getYearsCalendarInitialDate(state, 0);
        if (initialDate) {
            const middleDate = shiftDate(initialDate, { year: -initialYearShift });
            return shiftDate(middleDate, action.payload);
        }
    }
    return shiftDate(startOf(state.view.date, 'month'), action.payload);
}
function getFormatOptions(state) {
    return {
        locale: state.locale,
        monthTitle: state.monthTitle,
        yearTitle: state.yearTitle,
        dayLabel: state.dayLabel,
        monthLabel: state.monthLabel,
        yearLabel: state.yearLabel,
        weekNumbers: state.weekNumbers
    };
}
/**
 * if view date is provided (bsValue|ngModel) it should be shown
 * if view date is not provider:
 * if minDate>currentDate (default view value), show minDate
 * if maxDate<currentDate(default view value) show maxDate
 */
function getViewDate(viewDate, minDate, maxDate) {
    const _date = Array.isArray(viewDate) ? viewDate[0] : viewDate;
    if (minDate && isAfter(minDate, _date, 'day')) {
        return minDate;
    }
    if (maxDate && isBefore(maxDate, _date, 'day')) {
        return maxDate;
    }
    return _date;
}
function isDisplayOneMonth(viewDate, minDate, maxDate) {
    if (maxDate && isSame(maxDate, viewDate, 'day')) {
        return true;
    }
    return minDate && maxDate && minDate.getMonth() === maxDate.getMonth();
}

class BsDatepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[datepicker] dispatcher init'
        });
        const state = new MiniState(initialDatepickerState, _dispatcher, bsDatepickerReducer);
        super(_dispatcher, bsDatepickerReducer, state);
    }
}
BsDatepickerStore.ɵfac = function BsDatepickerStore_Factory(t) { return new (t || BsDatepickerStore)(); };
BsDatepickerStore.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDatepickerStore, factory: BsDatepickerStore.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerStore, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], function () { return []; }, null); })();

/** *************** */
// events
/** *************** */
var BsNavigationDirection;
(function (BsNavigationDirection) {
    BsNavigationDirection[BsNavigationDirection["UP"] = 0] = "UP";
    BsNavigationDirection[BsNavigationDirection["DOWN"] = 1] = "DOWN";
})(BsNavigationDirection || (BsNavigationDirection = {}));

class BsCurrentDateViewComponent {
}
BsCurrentDateViewComponent.ɵfac = function BsCurrentDateViewComponent_Factory(t) { return new (t || BsCurrentDateViewComponent)(); };
BsCurrentDateViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsCurrentDateViewComponent, selectors: [["bs-current-date"]], inputs: { title: "title" }, decls: 3, vars: 1, consts: [[1, "current-timedate"]], template: function BsCurrentDateViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.title);
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCurrentDateViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-current-date',
                template: `<div class="current-timedate"><span>{{ title }}</span></div>`
            }]
    }], null, { title: [{
            type: Input
        }] }); })();

class BsTimepickerViewComponent {
    constructor() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
}
BsTimepickerViewComponent.ɵfac = function BsTimepickerViewComponent_Factory(t) { return new (t || BsTimepickerViewComponent)(); };
BsTimepickerViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsTimepickerViewComponent, selectors: [["bs-timepicker"]], decls: 16, vars: 3, consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]], template: function BsTimepickerViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵtext(3, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 3);
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵtext(6, "+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵtext(9, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 3);
        i0.ɵɵelementStart(11, "button", 4);
        i0.ɵɵtext(12, "+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 5);
        i0.ɵɵtext(14);
        i0.ɵɵelement(15, "img", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", ctx.hours);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("value", ctx.minutes);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.ampm, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsTimepickerViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-timepicker',
                template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
            }]
    }], null, null); })();

function BsCalendarLayoutComponent_bs_current_date_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bs-current-date", 4);
} }
function BsCalendarLayoutComponent_bs_timepicker_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "bs-timepicker");
} }
const _c0$3 = [[["bs-datepicker-navigation-view"]], "*"];
const _c1$1 = ["bs-datepicker-navigation-view", "*"];
class BsCalendarLayoutComponent {
}
BsCalendarLayoutComponent.ɵfac = function BsCalendarLayoutComponent_Factory(t) { return new (t || BsCalendarLayoutComponent)(); };
BsCalendarLayoutComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsCalendarLayoutComponent, selectors: [["bs-calendar-layout"]], ngContentSelectors: _c1$1, decls: 6, vars: 2, consts: [["title", "hey there", 4, "ngIf"], [1, "bs-datepicker-head"], [1, "bs-datepicker-body"], [4, "ngIf"], ["title", "hey there"]], template: function BsCalendarLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c0$3);
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
    } }, directives: [i6.NgIf, BsCurrentDateViewComponent, BsTimepickerViewComponent], encapsulation: 2 });
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

function BsDatepickerNavigationViewComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u200B ");
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.view("month"); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.calendar.monthTitle);
} }
class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
}
BsDatepickerNavigationViewComponent.ɵfac = function BsDatepickerNavigationViewComponent_Factory(t) { return new (t || BsDatepickerNavigationViewComponent)(); };
BsDatepickerNavigationViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerNavigationViewComponent, selectors: [["bs-datepicker-navigation-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode" }, decls: 12, vars: 8, consts: [["type", "button", 1, "previous", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", 1, "current", 3, "click"], ["type", "button", 1, "next", 3, "disabled", "click"]], template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() { return ctx.navTo(true); });
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, "\u2039");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, BsDatepickerNavigationViewComponent_ng_container_3_Template, 5, 1, "ng-container", 1);
        i0.ɵɵtext(4, " \u200B ");
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() { return ctx.view("year"); });
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(8, " \u200B ");
        i0.ɵɵelementStart(9, "button", 3);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() { return ctx.navTo(false); });
        i0.ɵɵelementStart(10, "span");
        i0.ɵɵtext(11, "\u203A");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
        i0.ɵɵproperty("disabled", ctx.calendar.disableLeftArrow);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.calendar && ctx.calendar.monthTitle);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.calendar.yearTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
        i0.ɵɵproperty("disabled", ctx.calendar.disableRightArrow);
    } }, directives: [i6.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerNavigationViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-datepicker-navigation-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>

    <ng-container *ngIf="calendar && calendar.monthTitle">
      &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

      <button class="current"
            type="button"
            (click)="view('month')"
      ><span>{{ calendar.monthTitle }}</span>
      </button>
    </ng-container>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="current" (click)="view('year')" type="button">
      <span>{{ calendar.yearTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
            }]
    }], null, { calendar: [{
            type: Input
        }], onNavigate: [{
            type: Output
        }], onViewMode: [{
            type: Output
        }] }); })();

const _c0$2 = ["bsDatepickerDayDecorator", ""];
class BsDatepickerDayDecoratorComponent {
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.day = { date: new Date(), label: '' };
    }
    ngOnInit() {
        if (this.day?.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
        if (typeof this.day?.customClasses === 'string') {
            this.day?.customClasses.split(' ')
                .filter((className) => className)
                .forEach((className) => {
                this._renderer.addClass(this._elRef.nativeElement, className);
            });
        }
    }
}
BsDatepickerDayDecoratorComponent.ɵfac = function BsDatepickerDayDecoratorComponent_Factory(t) { return new (t || BsDatepickerDayDecoratorComponent)(i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
BsDatepickerDayDecoratorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerDayDecoratorComponent, selectors: [["", "bsDatepickerDayDecorator", ""]], hostVars: 16, hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
    } }, inputs: { day: "day" }, attrs: _c0$2, decls: 1, vars: 1, template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate(ctx.day && ctx.day.label || "");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerDayDecoratorComponent, [{
        type: Component,
        args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day && day.label || '' }}`
            }]
    }], function () { return [{ type: BsDatepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { day: [{
            type: Input
        }] }); })();

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
class BsDaysCalendarViewComponent {
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
BsDaysCalendarViewComponent.ɵfac = function BsDaysCalendarViewComponent_Factory(t) { return new (t || BsDaysCalendarViewComponent)(i0.ɵɵdirectiveInject(BsDatepickerConfig)); };
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
    } }, directives: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, i6.NgIf, i6.NgForOf, BsDatepickerDayDecoratorComponent, i6$1.TooltipDirective], encapsulation: 2 });
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
    }], function () { return [{ type: BsDatepickerConfig }]; }, { calendar: [{
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
class BsMonthCalendarViewComponent {
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
    } }, directives: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, i6.NgForOf], encapsulation: 2 });
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
class BsYearsCalendarViewComponent {
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
    } }, directives: [BsCalendarLayoutComponent, BsDatepickerNavigationViewComponent, i6.NgForOf], encapsulation: 2 });
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

function BsCustomDatesViewComponent_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function BsCustomDatesViewComponent_button_1_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r3); const range_r1 = restoredCtx.$implicit; const ctx_r2 = i0.ɵɵnextContext(); return ctx_r2.selectFromRanges(range_r1); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const range_r1 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("selected", range_r1.value === ctx_r0.selectedRange);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", range_r1.label, " ");
} }
class BsCustomDatesViewComponent {
    constructor() {
        this.onSelect = new EventEmitter();
    }
    selectFromRanges(range) {
        this.onSelect.emit(range);
    }
}
BsCustomDatesViewComponent.ɵfac = function BsCustomDatesViewComponent_Factory(t) { return new (t || BsCustomDatesViewComponent)(); };
BsCustomDatesViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsCustomDatesViewComponent, selectors: [["bs-custom-date-view"]], inputs: { ranges: "ranges", selectedRange: "selectedRange", customRangeLabel: "customRangeLabel" }, outputs: { onSelect: "onSelect" }, decls: 2, vars: 1, consts: [[1, "bs-datepicker-predefined-btns"], ["type", "button", "class", "btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", 3, "click"]], template: function BsCustomDatesViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵtemplate(1, BsCustomDatesViewComponent_button_1_Template, 2, 3, "button", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.ranges);
    } }, directives: [i6.NgForOf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsCustomDatesViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-custom-date-view',
                template: `
    <div class="bs-datepicker-predefined-btns">
      <button *ngFor="let range of ranges"
        type="button"
        class="btn"
        (click)="selectFromRanges(range)"
        [class.selected]="range.value === selectedRange">
        {{ range.label }}
      </button>
    </div>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], null, { ranges: [{
            type: Input
        }], selectedRange: [{
            type: Input
        }], customRangeLabel: [{
            type: Input
        }], onSelect: [{
            type: Output
        }] }); })();

const _c0$1 = ["startTP"];
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
class BsDatepickerContainerComponent extends BsDatepickerAbstractComponent {
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
BsDatepickerContainerComponent.ɵfac = function BsDatepickerContainerComponent_Factory(t) { return new (t || BsDatepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDatepickerContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerContainerComponent, selectors: [["bs-datepicker-container"]], viewQuery: function BsDatepickerContainerComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0$1, 5);
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
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, i8.TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-datepicker-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, { startTimepicker: [{
            type: ViewChild,
            args: ['startTP']
        }] }); })();

class BsDatepickerDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a datepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close datepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the datepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        this.isDestroy$ = new Subject();
        /**
         * Indicates whether datepicker's content is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._dateInputFormat$ = new Subject();
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new BehaviorSubject(this.isOpen);
    }
    /**
     * Returns whether or not the datepicker is currently being shown
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    set isOpen(value) {
        this.isOpen$.next(value);
    }
    /**
     * Initial value of datepicker
     */
    set bsValue(value) {
        if (this._bsValue && value && this._bsValue.getTime() === value.getTime()) {
            return;
        }
        if (!this._bsValue && value && !this._config.withTimepicker) {
            const now = new Date();
            copyTime(value, now);
        }
        if (value && this.bsConfig?.initCurrentTime) {
            value = setCurrentTimeOnDateSelect(value);
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    get dateInputFormat$() {
        return this._dateInputFormat$;
    }
    ngOnInit() {
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    ngOnChanges(changes) {
        if (changes["bsConfig"]) {
            if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
                this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
                this.bsValueChange.emit(this._bsValue);
            }
            this.setConfig();
            this._dateInputFormat$.next(this.bsConfig && this.bsConfig.dateInputFormat);
        }
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["datesEnabled"]) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes["isDisabled"]) {
            if (this._elementRef?.nativeElement) {
                this._elementRef.nativeElement.setAttribute('readonly', this.isDisabled);
            }
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes["dateCustomClasses"]) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
        if (changes["dateTooltipTexts"]) {
            this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
        }
    }
    initSubscribes() {
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            if (this._datepickerRef) {
                this._datepickerRef.instance.value = value;
            }
        }));
        // if date changes from picker (view -> model)
        if (this._datepickerRef) {
            this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
                this.bsValue = value;
                this.hide();
            }));
        }
    }
    ngAfterViewInit() {
        this.isOpen$.pipe(filter(isOpen => isOpen !== this.isOpen), takeUntil(this.isDestroy$))
            .subscribe(() => this.toggle());
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    show() {
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        this.initSubscribes();
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        if (this._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Set config for datepicker
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            minMode: this.minMode || this.bsConfig && this.bsConfig.minMode,
            initCurrentTime: this.bsConfig?.initCurrentTime
        });
    }
    unsubscribeSubscriptions() {
        if (this._subs?.length) {
            this._subs.map(sub => sub.unsubscribe());
            this._subs.length = 0;
        }
    }
    ngOnDestroy() {
        this._datepicker.dispose();
        this.isOpen$.next(false);
        if (this.isDestroy$) {
            this.isDestroy$.next(null);
            this.isDestroy$.complete();
        }
        this.unsubscribeSubscriptions();
    }
}
BsDatepickerDirective.ɵfac = function BsDatepickerDirective_Factory(t) { return new (t || BsDatepickerDirective)(i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
BsDatepickerDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDatepickerDirective, selectors: [["", "bsDatepicker", ""]], inputs: { placement: "placement", triggers: "triggers", outsideClick: "outsideClick", container: "container", outsideEsc: "outsideEsc", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", minMode: "minMode", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled", dateCustomClasses: "dateCustomClasses", dateTooltipTexts: "dateTooltipTexts", isOpen: "isOpen", bsValue: "bsValue", bsConfig: "bsConfig" }, outputs: { onShown: "onShown", onHidden: "onHidden", bsValueChange: "bsValueChange" }, exportAs: ["bsDatepicker"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDatepicker]',
                exportAs: 'bsDatepicker'
            }]
    }], function () { return [{ type: BsDatepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], outsideClick: [{
            type: Input
        }], container: [{
            type: Input
        }], outsideEsc: [{
            type: Input
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], isDisabled: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], minMode: [{
            type: Input
        }], daysDisabled: [{
            type: Input
        }], datesDisabled: [{
            type: Input
        }], datesEnabled: [{
            type: Input
        }], dateCustomClasses: [{
            type: Input
        }], dateTooltipTexts: [{
            type: Input
        }], bsValueChange: [{
            type: Output
        }], isOpen: [{
            type: Input
        }], bsValue: [{
            type: Input
        }], bsConfig: [{
            type: Input
        }] }); })();

class BsDatepickerInlineConfig extends BsDatepickerConfig {
}
BsDatepickerInlineConfig.ɵfac = /*@__PURE__*/ function () { let ɵBsDatepickerInlineConfig_BaseFactory; return function BsDatepickerInlineConfig_Factory(t) { return (ɵBsDatepickerInlineConfig_BaseFactory || (ɵBsDatepickerInlineConfig_BaseFactory = i0.ɵɵgetInheritedFactory(BsDatepickerInlineConfig)))(t || BsDatepickerInlineConfig); }; }();
BsDatepickerInlineConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDatepickerInlineConfig, factory: BsDatepickerInlineConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

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
class BsDatepickerInlineContainerComponent extends BsDatepickerContainerComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
    }
}
BsDatepickerInlineContainerComponent.ɵfac = function BsDatepickerInlineContainerComponent_Factory(t) { return new (t || BsDatepickerInlineContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDatepickerInlineContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerInlineContainerComponent, selectors: [["bs-datepicker-inline-container"]], hostBindings: function BsDatepickerInlineContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDatepickerInlineContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDatepickerInlineContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDatepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, i8.TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-datepicker-inline-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    '(click)': '_stopPropagation($event)'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, null); })();

class BsDatepickerInlineDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Indicates whether datepicker is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when datepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    /**
     * Initial value of datepicker
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        if (!this._bsValue && value && !this._config.withTimepicker) {
            const now = new Date();
            copyTime(value, now);
        }
        if (value && this.bsConfig?.initCurrentTime) {
            value = setCurrentTimeOnDateSelect(value);
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    ngOnInit() {
        this.setConfig();
        this.initSubscribes();
    }
    initSubscribes() {
        this.unsubscribeSubscriptions();
        this._subs.push(this.bsValueChange.subscribe((value) => {
            if (this._datepickerRef) {
                this._datepickerRef.instance.value = value;
            }
        }));
        if (this._datepickerRef) {
            this._subs.push(this._datepickerRef.instance.valueChange.subscribe((value) => {
                this.bsValue = value;
            }));
        }
    }
    unsubscribeSubscriptions() {
        if (this._subs?.length) {
            this._subs.map(sub => sub.unsubscribe());
            this._subs.length = 0;
        }
    }
    ngOnChanges(changes) {
        if (changes["bsConfig"]) {
            if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
                this._bsValue = setCurrentTimeOnDateSelect(this._bsValue);
                this.bsValueChange.emit(this._bsValue);
            }
        }
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["datesEnabled"]) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes["dateCustomClasses"]) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
        if (changes["dateTooltipTexts"]) {
            this._datepickerRef.instance.dateTooltipTexts = this.dateTooltipTexts;
        }
        this.setConfig();
    }
    /**
     * Set config for datepicker
     */
    setConfig() {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            dateTooltipTexts: this.dateTooltipTexts || this.bsConfig && this.bsConfig.dateTooltipTexts,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            initCurrentTime: this.bsConfig?.initCurrentTime
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDatepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        this.initSubscribes();
    }
    ngOnDestroy() {
        this._datepicker.dispose();
        this.unsubscribeSubscriptions();
    }
}
BsDatepickerInlineDirective.ɵfac = function BsDatepickerInlineDirective_Factory(t) { return new (t || BsDatepickerInlineDirective)(i0.ɵɵdirectiveInject(BsDatepickerInlineConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
BsDatepickerInlineDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDatepickerInlineDirective, selectors: [["bs-datepicker-inline"]], inputs: { bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", dateTooltipTexts: "dateTooltipTexts", datesEnabled: "datesEnabled", datesDisabled: "datesDisabled", bsValue: "bsValue" }, outputs: { bsValueChange: "bsValueChange" }, exportAs: ["bsDatepickerInline"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInlineDirective, [{
        type: Directive,
        args: [{
                selector: 'bs-datepicker-inline',
                exportAs: 'bsDatepickerInline'
            }]
    }], function () { return [{ type: BsDatepickerInlineConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { bsConfig: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateCustomClasses: [{
            type: Input
        }], dateTooltipTexts: [{
            type: Input
        }], datesEnabled: [{
            type: Input
        }], datesDisabled: [{
            type: Input
        }], bsValueChange: [{
            type: Output
        }], bsValue: [{
            type: Input
        }] }); })();

class BsDaterangepickerInlineConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
BsDaterangepickerInlineConfig.ɵfac = /*@__PURE__*/ function () { let ɵBsDaterangepickerInlineConfig_BaseFactory; return function BsDaterangepickerInlineConfig_Factory(t) { return (ɵBsDaterangepickerInlineConfig_BaseFactory || (ɵBsDaterangepickerInlineConfig_BaseFactory = i0.ɵɵgetInheritedFactory(BsDaterangepickerInlineConfig)))(t || BsDaterangepickerInlineConfig); }; }();
BsDaterangepickerInlineConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDaterangepickerInlineConfig, factory: BsDaterangepickerInlineConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

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
class BsDaterangepickerContainerComponent extends BsDatepickerAbstractComponent {
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
BsDaterangepickerContainerComponent.ɵfac = function BsDaterangepickerContainerComponent_Factory(t) { return new (t || BsDaterangepickerContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
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
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, i8.TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-daterangepicker-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    class: 'bottom',
                    '(click)': '_stopPropagation($event)',
                    role: 'dialog',
                    'aria-label': 'calendar'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, { startTimepicker: [{
            type: ViewChild,
            args: ['startTP']
        }], endTimepicker: [{
            type: ViewChild,
            args: ['endTP']
        }] }); })();

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
class BsDaterangepickerInlineContainerComponent extends BsDaterangepickerContainerComponent {
    constructor(_renderer, _config, _store, _element, _actions, _effects, _positioningService) {
        super(_renderer, _config, _store, _element, _actions, _effects, _positioningService);
        _renderer.setStyle(_element.nativeElement, 'display', 'inline-block');
        _renderer.setStyle(_element.nativeElement, 'position', 'static');
    }
}
BsDaterangepickerInlineContainerComponent.ɵfac = function BsDaterangepickerInlineContainerComponent_Factory(t) { return new (t || BsDaterangepickerInlineContainerComponent)(i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(BsDatepickerConfig), i0.ɵɵdirectiveInject(BsDatepickerStore), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(BsDatepickerActions), i0.ɵɵdirectiveInject(BsDatepickerEffects), i0.ɵɵdirectiveInject(i5.PositioningService)); };
BsDaterangepickerInlineContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDaterangepickerInlineContainerComponent, selectors: [["bs-daterangepicker-inline-container"]], hostBindings: function BsDaterangepickerInlineContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function BsDaterangepickerInlineContainerComponent_click_HostBindingHandler($event) { return ctx._stopPropagation($event); });
    } }, features: [i0.ɵɵProvidersFeature([BsDatepickerStore, BsDatepickerEffects]), i0.ɵɵInheritDefinitionFeature], decls: 2, vars: 3, consts: [["class", "bs-datepicker", 3, "ngClass", 4, "ngIf"], [1, "bs-datepicker", 3, "ngClass"], [1, "bs-datepicker-container"], ["role", "application", 1, "bs-calendar-container", 3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "bs-media-container", 4, "ngSwitchCase"], ["class", "bs-datepicker-buttons", 4, "ngIf"], ["class", "bs-datepicker-custom-range", 4, "ngIf"], [1, "bs-media-container"], [3, "bs-datepicker-multiple", "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect", 4, "ngFor", "ngForOf"], ["class", "bs-timepicker-in-datepicker-container", 4, "ngIf"], [3, "calendar", "options", "onNavigate", "onViewMode", "onHover", "onHoverWeek", "onSelect"], [1, "bs-timepicker-in-datepicker-container"], ["startTP", ""], [4, "ngIf"], ["endTP", ""], [3, "bs-datepicker-multiple", "calendar", "onNavigate", "onViewMode", "onHover", "onSelect", 4, "ngFor", "ngForOf"], [3, "calendar", "onNavigate", "onViewMode", "onHover", "onSelect"], [1, "bs-datepicker-buttons"], ["type", "button", 1, "btn", "btn-success"], ["type", "button", 1, "btn", "btn-default"], ["class", "btn-today-wrapper", 3, "today-left", "today-right", "today-center", 4, "ngIf"], ["class", "btn-clear-wrapper", 3, "clear-left", "clear-right", "clear-center", 4, "ngIf"], [1, "btn-today-wrapper"], [1, "btn", "btn-success", 3, "click"], [1, "btn-clear-wrapper"], [1, "bs-datepicker-custom-range"], [3, "selectedRange", "ranges", "customRangeLabel", "onSelect"]], template: function BsDaterangepickerInlineContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, BsDaterangepickerInlineContainerComponent_div_0_Template, 10, 11, "div", 0);
        i0.ɵɵpipe(1, "async");
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", i0.ɵɵpipeBind1(1, 1, ctx.viewMode));
    } }, directives: [i6.NgIf, i6.NgClass, i6.NgSwitch, i6.NgSwitchCase, i6.NgForOf, BsDaysCalendarViewComponent, i8.TimepickerComponent, BsMonthCalendarViewComponent, BsYearsCalendarViewComponent, BsCustomDatesViewComponent], pipes: [i6.AsyncPipe], encapsulation: 2, data: { animation: [datepickerAnimation] } });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineContainerComponent, [{
        type: Component,
        args: [{ selector: 'bs-daterangepicker-inline-container', providers: [BsDatepickerStore, BsDatepickerEffects], host: {
                    '(click)': '_stopPropagation($event)'
                }, animations: [datepickerAnimation], template: "<!-- days calendar view mode -->\r\n<div class=\"bs-datepicker\" [ngClass]=\"containerClass\" *ngIf=\"viewMode | async\">\r\n  <div class=\"bs-datepicker-container\"\r\n    [@datepickerAnimation]=\"animationState\"\r\n    (@datepickerAnimation.done)=\"positionServiceEnable()\">\r\n    <!--calendars-->\r\n    <div class=\"bs-calendar-container\" [ngSwitch]=\"viewMode | async\" role=\"application\">\r\n      <!--days calendar-->\r\n      <ng-container *ngSwitchCase=\"'day'\">\r\n        <div class=\"bs-media-container\">\r\n          <bs-days-calendar-view\r\n            *ngFor=\"let calendar of daysCalendar$ | async\"\r\n            [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n            [calendar]=\"calendar\"\r\n            [options]=\"options$ | async\"\r\n            (onNavigate)=\"navigateTo($event)\"\r\n            (onViewMode)=\"setViewMode($event)\"\r\n            (onHover)=\"dayHoverHandler($event)\"\r\n            (onHoverWeek)=\"weekHoverHandler($event)\"\r\n            (onSelect)=\"daySelectHandler($event)\">\r\n          </bs-days-calendar-view>\r\n        </div>\r\n        <div *ngIf=\"withTimepicker\" class=\"bs-timepicker-in-datepicker-container\">\r\n          <timepicker #startTP></timepicker>\r\n          <timepicker #endTP *ngIf=\"isRangePicker\"></timepicker>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <!--months calendar-->\r\n      <div *ngSwitchCase=\"'month'\" class=\"bs-media-container\">\r\n        <bs-month-calendar-view\r\n          *ngFor=\"let calendar of monthsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"monthHoverHandler($event)\"\r\n          (onSelect)=\"monthSelectHandler($event)\">\r\n        </bs-month-calendar-view>\r\n      </div>\r\n\r\n      <!--years calendar-->\r\n      <div *ngSwitchCase=\"'year'\" class=\"bs-media-container\">\r\n        <bs-years-calendar-view\r\n          *ngFor=\"let calendar of yearsCalendar | async\"\r\n          [class.bs-datepicker-multiple]=\"multipleCalendars\"\r\n          [calendar]=\"calendar\"\r\n          (onNavigate)=\"navigateTo($event)\"\r\n          (onViewMode)=\"setViewMode($event)\"\r\n          (onHover)=\"yearHoverHandler($event)\"\r\n          (onSelect)=\"yearSelectHandler($event)\">\r\n        </bs-years-calendar-view>\r\n      </div>\r\n    </div>\r\n\r\n    <!--applycancel buttons-->\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"false\">\r\n      <button class=\"btn btn-success\" type=\"button\">Apply</button>\r\n      <button class=\"btn btn-default\" type=\"button\">Cancel</button>\r\n    </div>\r\n\r\n    <div class=\"bs-datepicker-buttons\" *ngIf=\"showTodayBtn || showClearBtn\">\r\n      <div class=\"btn-today-wrapper\"\r\n           [class.today-left]=\"todayPos === 'left'\"\r\n           [class.today-right]=\"todayPos === 'right'\"\r\n           [class.today-center]=\"todayPos === 'center'\"\r\n           *ngIf=\"showTodayBtn\">\r\n        <button class=\"btn btn-success\" (click)=\"setToday()\">{{todayBtnLbl}}</button>\r\n      </div>\r\n\r\n        <div class=\"btn-clear-wrapper\"\r\n        [class.clear-left]=\"clearPos === 'left'\"\r\n        [class.clear-right]=\"clearPos === 'right'\"\r\n        [class.clear-center]=\"clearPos === 'center'\"\r\n        *ngIf=\"showClearBtn\">\r\n          <button class=\"btn btn-success\" (click)=\"clearDate()\">{{clearBtnLbl}}</button>\r\n        </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!--custom dates or date ranges picker-->\r\n  <div class=\"bs-datepicker-custom-range\" *ngIf=\"customRanges && customRanges.length > 0\">\r\n    <bs-custom-date-view\r\n      [selectedRange]=\"chosenRange\"\r\n      [ranges]=\"customRanges\"\r\n      [customRangeLabel]=\"customRangeBtnLbl\"\r\n      (onSelect)=\"setRangeOnCalendar($event)\">\r\n    </bs-custom-date-view>\r\n  </div>\r\n</div>\r\n" }]
    }], function () { return [{ type: i0.Renderer2 }, { type: BsDatepickerConfig }, { type: BsDatepickerStore }, { type: i0.ElementRef }, { type: BsDatepickerActions }, { type: BsDatepickerEffects }, { type: i5.PositioningService }]; }, null); })();

class BsDaterangepickerInlineDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        /**
         * Indicates whether datepicker is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        // todo: assign only subset of fields
        Object.assign(this, this._config);
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
    }
    /**
     * Initial value of datepicker
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        if (value && this.bsConfig?.initCurrentTime) {
            value = setDateRangesCurrentTimeOnDateSelect(value);
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    ngOnInit() {
        this.setConfig();
        this.initSubscribes();
    }
    ngOnChanges(changes) {
        if (changes["bsConfig"]) {
            if (changes["bsConfig"].currentValue.initCurrentTime && changes["bsConfig"].currentValue.initCurrentTime !== changes["bsConfig"].previousValue.initCurrentTime && this._bsValue) {
                this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
                this.bsValueChange.emit(this._bsValue);
            }
        }
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesEnabled"]) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
            this._datepickerRef.instance.value = this._bsValue;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes["isDisabled"]) {
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes["dateCustomClasses"]) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
        this.setConfig();
    }
    /**
     * Set config for datepicker
     */
    setConfig() {
        if (this._datepicker) {
            this._datepicker.hide();
        }
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
            maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
            initCurrentTime: this.bsConfig?.initCurrentTime
        });
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerInlineContainerComponent)
            .to(this._elementRef)
            .show();
        this.initSubscribes();
    }
    initSubscribes() {
        this.unsubscribeSubscriptions();
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            if (this._datepickerRef) {
                this._datepickerRef.instance.value = value;
            }
        }));
        // if date changes from picker (view -> model)
        if (this._datepickerRef) {
            this._subs.push(this._datepickerRef.instance.valueChange
                .pipe(filter((range) => range && range[0] && !!range[1]))
                .subscribe((value) => {
                this.bsValue = value;
            }));
        }
    }
    unsubscribeSubscriptions() {
        if (this._subs?.length) {
            this._subs.map(sub => sub.unsubscribe());
            this._subs.length = 0;
        }
    }
    ngOnDestroy() {
        this._datepicker.dispose();
        this.unsubscribeSubscriptions();
    }
}
BsDaterangepickerInlineDirective.ɵfac = function BsDaterangepickerInlineDirective_Factory(t) { return new (t || BsDaterangepickerInlineDirective)(i0.ɵɵdirectiveInject(BsDaterangepickerInlineConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
BsDaterangepickerInlineDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDaterangepickerInlineDirective, selectors: [["bs-daterangepicker-inline"]], inputs: { bsValue: "bsValue", bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled" }, outputs: { bsValueChange: "bsValueChange" }, exportAs: ["bsDaterangepickerInline"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInlineDirective, [{
        type: Directive,
        args: [{
                selector: 'bs-daterangepicker-inline',
                exportAs: 'bsDaterangepickerInline'
            }]
    }], function () { return [{ type: BsDaterangepickerInlineConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { bsValue: [{
            type: Input
        }], bsConfig: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateCustomClasses: [{
            type: Input
        }], daysDisabled: [{
            type: Input
        }], datesDisabled: [{
            type: Input
        }], datesEnabled: [{
            type: Input
        }], bsValueChange: [{
            type: Output
        }] }); })();

const BS_DATEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
const BS_DATEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => BsDatepickerInputDirective),
    multi: true
};
class BsDatepickerInputDirective {
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this._subs = new Subscription();
    }
    ngOnInit() {
        const setBsValue = (value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        };
        // if value set via [bsValue] it will not get into value change
        if (this._picker._bsValue) {
            setBsValue(this._picker._bsValue);
        }
        // update input value on datepicker value update
        this._subs.add(this._picker.bsValueChange.subscribe(setBsValue));
        // update input value on locale change
        this._subs.add(this._localeService.localeChange.subscribe(() => {
            this._setInputValue(this._value);
        }));
        this._subs.add(this._picker.dateInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
            this._setInputValue(this._value);
        }));
    }
    ngOnDestroy() {
        this._subs.unsubscribe();
    }
    onKeydownEvent(event) {
        if (event.keyCode === 13 || event.code === 'Enter') {
            this.hide();
        }
    }
    _setInputValue(value) {
        const initialDate = !value ? ''
            : formatDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
        this._renderer.setProperty(this._elRef.nativeElement, 'value', initialDate);
    }
    onChange(event) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.writeValue(event.target.value);
        this._onChange(this._value);
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
        this._onTouched();
    }
    validate(c) {
        const _value = c.value;
        if (_value === null || _value === undefined || _value === '') {
            return null;
        }
        if (isDate(_value)) {
            const _isDateValid = isDateValid(_value);
            if (!_isDateValid) {
                return { bsDate: { invalid: _value } };
            }
            if (this._picker && this._picker.minDate && isBefore(_value, this._picker.minDate, 'date')) {
                this.writeValue(this._picker.minDate);
                return { bsDate: { minDate: this._picker.minDate } };
            }
            if (this._picker && this._picker.maxDate && isAfter(_value, this._picker.maxDate, 'date')) {
                this.writeValue(this._picker.maxDate);
                return { bsDate: { maxDate: this._picker.maxDate } };
            }
        }
        return null;
    }
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    writeValue(value) {
        if (!value) {
            this._value = void 0;
        }
        else {
            const _localeKey = this._localeService.currentLocale;
            const _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            this._value = parseDate(value, this._picker._config.dateInputFormat, this._localeService.currentLocale);
            if (this._picker._config.useUtc) {
                this._value = utcAsLocal(this._value);
            }
        }
        this._picker.bsValue = this._value;
    }
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    registerOnChange(fn) {
        this._onChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    onBlur() {
        this._onTouched();
    }
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
    }
}
BsDatepickerInputDirective.ɵfac = function BsDatepickerInputDirective_Factory(t) { return new (t || BsDatepickerInputDirective)(i0.ɵɵdirectiveInject(BsDatepickerDirective, 1), i0.ɵɵdirectiveInject(BsLocaleService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
BsDatepickerInputDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDatepickerInputDirective, selectors: [["input", "bsDatepicker", ""]], hostBindings: function BsDatepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("change", function BsDatepickerInputDirective_change_HostBindingHandler($event) { return ctx.onChange($event); })("keyup.esc", function BsDatepickerInputDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("keydown", function BsDatepickerInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeydownEvent($event); })("blur", function BsDatepickerInputDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [i0.ɵɵProvidersFeature([BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: `input[bsDatepicker]`,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(keydown)': 'onKeydownEvent($event)',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATEPICKER_VALUE_ACCESSOR, BS_DATEPICKER_VALIDATOR]
            }]
    }], function () { return [{ type: BsDatepickerDirective, decorators: [{
                type: Host
            }] }, { type: BsLocaleService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();

class BsDaterangepickerConfig extends BsDatepickerConfig {
    constructor() {
        super(...arguments);
        // DatepickerRenderOptions
        this.displayMonths = 2;
    }
}
BsDaterangepickerConfig.ɵfac = /*@__PURE__*/ function () { let ɵBsDaterangepickerConfig_BaseFactory; return function BsDaterangepickerConfig_Factory(t) { return (ɵBsDaterangepickerConfig_BaseFactory || (ɵBsDaterangepickerConfig_BaseFactory = i0.ɵɵgetInheritedFactory(BsDaterangepickerConfig)))(t || BsDaterangepickerConfig); }; }();
BsDaterangepickerConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDaterangepickerConfig, factory: BsDaterangepickerConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();

class BsDaterangepickerDirective {
    constructor(_config, _elementRef, _renderer, _viewContainerRef, cis) {
        this._config = _config;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * Placement of a daterangepicker. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'bottom';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        /**
         * Close daterangepicker on outside click
         */
        this.outsideClick = true;
        /**
         * A selector specifying the element the daterangepicker should be appended to.
         */
        this.container = 'body';
        this.outsideEsc = true;
        this.isDestroy$ = new Subject();
        /**
         * Indicates whether daterangepicker's content is enabled or not
         */
        this.isDisabled = false;
        /**
         * Emits when daterangepicker value has been changed
         */
        this.bsValueChange = new EventEmitter();
        this._subs = [];
        this._rangeInputFormat$ = new Subject();
        this._datepicker = cis.createLoader(_elementRef, _viewContainerRef, _renderer);
        Object.assign(this, _config);
        this.onShown = this._datepicker.onShown;
        this.onHidden = this._datepicker.onHidden;
        this.isOpen$ = new BehaviorSubject(this.isOpen);
    }
    /**
     * Returns whether or not the daterangepicker is currently being shown
     */
    get isOpen() {
        return this._datepicker.isShown;
    }
    set isOpen(value) {
        this.isOpen$.next(value);
    }
    /**
     * Initial value of daterangepicker
     */
    set bsValue(value) {
        if (this._bsValue === value) {
            return;
        }
        if (value && this.bsConfig?.initCurrentTime) {
            value = setDateRangesCurrentTimeOnDateSelect(value);
        }
        this._bsValue = value;
        this.bsValueChange.emit(value);
    }
    get rangeInputFormat$() {
        return this._rangeInputFormat$;
    }
    ngOnInit() {
        this.isDestroy$ = new Subject();
        this._datepicker.listen({
            outsideClick: this.outsideClick,
            outsideEsc: this.outsideEsc,
            triggers: this.triggers,
            show: () => this.show()
        });
        this.setConfig();
    }
    ngOnChanges(changes) {
        if (changes["bsConfig"]) {
            if (changes["bsConfig"].currentValue?.initCurrentTime && changes["bsConfig"].currentValue?.initCurrentTime !== changes["bsConfig"].previousValue?.initCurrentTime && this._bsValue) {
                this._bsValue = setDateRangesCurrentTimeOnDateSelect(this._bsValue);
                this.bsValueChange.emit(this._bsValue);
            }
            this.setConfig();
            this._rangeInputFormat$.next(changes["bsConfig"].currentValue && changes["bsConfig"].currentValue.rangeInputFormat);
        }
        if (!this._datepickerRef || !this._datepickerRef.instance) {
            return;
        }
        if (changes["minDate"]) {
            this._datepickerRef.instance.minDate = this.minDate;
        }
        if (changes["maxDate"]) {
            this._datepickerRef.instance.maxDate = this.maxDate;
        }
        if (changes["datesDisabled"]) {
            this._datepickerRef.instance.datesDisabled = this.datesDisabled;
        }
        if (changes["datesEnabled"]) {
            this._datepickerRef.instance.datesEnabled = this.datesEnabled;
        }
        if (changes["daysDisabled"]) {
            this._datepickerRef.instance.daysDisabled = this.daysDisabled;
        }
        if (changes["isDisabled"]) {
            if (this._elementRef?.nativeElement) {
                this._elementRef.nativeElement.setAttribute('readonly', this.isDisabled);
            }
            this._datepickerRef.instance.isDisabled = this.isDisabled;
        }
        if (changes["dateCustomClasses"]) {
            this._datepickerRef.instance.dateCustomClasses = this.dateCustomClasses;
        }
    }
    ngAfterViewInit() {
        this.isOpen$.pipe(filter(isOpen => isOpen !== this.isOpen), takeUntil(this.isDestroy$))
            .subscribe(() => this.toggle());
    }
    /**
     * Opens an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    show() {
        if (this._datepicker.isShown) {
            return;
        }
        this.setConfig();
        this._datepickerRef = this._datepicker
            .provide({ provide: BsDatepickerConfig, useValue: this._config })
            .attach(BsDaterangepickerContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({ placement: this.placement });
        this.initSubscribes();
    }
    initSubscribes() {
        // if date changes from external source (model -> view)
        this._subs.push(this.bsValueChange.subscribe((value) => {
            if (this._datepickerRef) {
                this._datepickerRef.instance.value = value;
            }
        }));
        // if date changes from picker (view -> model)
        if (this._datepickerRef) {
            this._subs.push(this._datepickerRef.instance.valueChange
                .pipe(filter((range) => range && range[0] && !!range[1]))
                .subscribe((value) => {
                this.bsValue = value;
                this.hide();
            }));
        }
    }
    /**
     * Set config for daterangepicker
     */
    setConfig() {
        this._config = Object.assign({}, this._config, this.bsConfig, {
            value: checkBsValue(this._bsValue, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
            isDisabled: this.isDisabled,
            minDate: this.minDate || this.bsConfig && this.bsConfig.minDate,
            maxDate: this.maxDate || this.bsConfig && this.bsConfig.maxDate,
            daysDisabled: this.daysDisabled || this.bsConfig && this.bsConfig.daysDisabled,
            dateCustomClasses: this.dateCustomClasses || this.bsConfig && this.bsConfig.dateCustomClasses,
            datesDisabled: this.datesDisabled || this.bsConfig && this.bsConfig.datesDisabled,
            datesEnabled: this.datesEnabled || this.bsConfig && this.bsConfig.datesEnabled,
            ranges: checkRangesWithMaxDate(this.bsConfig && this.bsConfig.ranges, this.maxDate || this.bsConfig && this.bsConfig.maxDate),
            maxDateRange: this.bsConfig && this.bsConfig.maxDateRange,
            initCurrentTime: this.bsConfig?.initCurrentTime
        });
    }
    /**
     * Closes an element’s datepicker. This is considered a “manual” triggering of
     * the datepicker.
     */
    hide() {
        if (this.isOpen) {
            this._datepicker.hide();
        }
        for (const sub of this._subs) {
            sub.unsubscribe();
        }
        if (this._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elementRef.nativeElement).focus();
        }
    }
    /**
     * Toggles an element’s datepicker. This is considered a “manual” triggering
     * of the datepicker.
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    unsubscribeSubscriptions() {
        if (this._subs?.length) {
            this._subs.map(sub => sub.unsubscribe());
            this._subs.length = 0;
        }
    }
    ngOnDestroy() {
        this._datepicker.dispose();
        this.isOpen$.next(false);
        if (this.isDestroy$) {
            this.isDestroy$.next(null);
            this.isDestroy$.complete();
        }
        this.unsubscribeSubscriptions();
    }
}
BsDaterangepickerDirective.ɵfac = function BsDaterangepickerDirective_Factory(t) { return new (t || BsDaterangepickerDirective)(i0.ɵɵdirectiveInject(BsDaterangepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.ComponentLoaderFactory)); };
BsDaterangepickerDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDaterangepickerDirective, selectors: [["", "bsDaterangepicker", ""]], inputs: { placement: "placement", triggers: "triggers", outsideClick: "outsideClick", container: "container", outsideEsc: "outsideEsc", isOpen: "isOpen", bsValue: "bsValue", bsConfig: "bsConfig", isDisabled: "isDisabled", minDate: "minDate", maxDate: "maxDate", dateCustomClasses: "dateCustomClasses", daysDisabled: "daysDisabled", datesDisabled: "datesDisabled", datesEnabled: "datesEnabled" }, outputs: { onShown: "onShown", onHidden: "onHidden", bsValueChange: "bsValueChange" }, exportAs: ["bsDaterangepicker"], features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDaterangepicker]',
                exportAs: 'bsDaterangepicker'
            }]
    }], function () { return [{ type: BsDaterangepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }, { type: i2.ComponentLoaderFactory }]; }, { placement: [{
            type: Input
        }], triggers: [{
            type: Input
        }], outsideClick: [{
            type: Input
        }], container: [{
            type: Input
        }], outsideEsc: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], onShown: [{
            type: Output
        }], onHidden: [{
            type: Output
        }], bsValue: [{
            type: Input
        }], bsConfig: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], minDate: [{
            type: Input
        }], maxDate: [{
            type: Input
        }], dateCustomClasses: [{
            type: Input
        }], daysDisabled: [{
            type: Input
        }], datesDisabled: [{
            type: Input
        }], datesEnabled: [{
            type: Input
        }], bsValueChange: [{
            type: Output
        }] }); })();

const BS_DATERANGEPICKER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BsDaterangepickerInputDirective),
    multi: true
};
const BS_DATERANGEPICKER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => BsDaterangepickerInputDirective),
    multi: true
};
class BsDaterangepickerInputDirective {
    constructor(_picker, _localeService, _renderer, _elRef, changeDetection) {
        this._picker = _picker;
        this._localeService = _localeService;
        this._renderer = _renderer;
        this._elRef = _elRef;
        this.changeDetection = changeDetection;
        this._onChange = Function.prototype;
        this._onTouched = Function.prototype;
        this._validatorChange = Function.prototype;
        this._subs = new Subscription();
    }
    ngOnInit() {
        const setBsValue = (value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        };
        // if value set via [bsValue] it will not get into value change
        if (this._picker._bsValue) {
            setBsValue(this._picker._bsValue);
        }
        // update input value on datepicker value update
        this._subs.add(this._picker.bsValueChange.subscribe((value) => {
            this._setInputValue(value);
            if (this._value !== value) {
                this._value = value;
                this._onChange(value);
                this._onTouched();
            }
            this.changeDetection.markForCheck();
        }));
        // update input value on locale change
        this._subs.add(this._localeService.localeChange.subscribe(() => {
            this._setInputValue(this._value);
        }));
        this._subs.add(
        // update input value on format change
        this._picker.rangeInputFormat$.pipe(distinctUntilChanged()).subscribe(() => {
            this._setInputValue(this._value);
        }));
    }
    ngOnDestroy() {
        this._subs.unsubscribe();
    }
    onKeydownEvent(event) {
        if (event.keyCode === 13 || event.code === 'Enter') {
            this.hide();
        }
    }
    _setInputValue(date) {
        let range = '';
        if (date) {
            const start = !date[0] ? ''
                : formatDate(date[0], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            const end = !date[1] ? ''
                : formatDate(date[1], this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            range = (start && end) ? start + this._picker._config.rangeSeparator + end : '';
        }
        this._renderer.setProperty(this._elRef.nativeElement, 'value', range);
    }
    onChange(event) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.writeValue(event.target.value);
        this._onChange(this._value);
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
        this._onTouched();
    }
    validate(c) {
        let _value = c.value;
        const errors = [];
        if (_value === null || _value === undefined || !isArray(_value)) {
            return null;
        }
        _value = _value.slice().sort((a, b) => a.getTime() - b.getTime());
        const _isFirstDateValid = isDateValid(_value[0]);
        const _isSecondDateValid = isDateValid(_value[1]);
        if (!_isFirstDateValid) {
            return { bsDate: { invalid: _value[0] } };
        }
        if (!_isSecondDateValid) {
            return { bsDate: { invalid: _value[1] } };
        }
        if (this._picker && this._picker.minDate && isBefore(_value[0], this._picker.minDate, 'date')) {
            _value[0] = this._picker.minDate;
            errors.push({ bsDate: { minDate: this._picker.minDate } });
        }
        if (this._picker && this._picker.maxDate && isAfter(_value[1], this._picker.maxDate, 'date')) {
            _value[1] = this._picker.maxDate;
            errors.push({ bsDate: { maxDate: this._picker.maxDate } });
        }
        if (errors.length > 0) {
            this.writeValue(_value);
            return errors;
        }
        return null;
    }
    registerOnValidatorChange(fn) {
        this._validatorChange = fn;
    }
    writeValue(value) {
        if (!value) {
            this._value = void 0;
        }
        else {
            const _localeKey = this._localeService.currentLocale;
            const _locale = getLocale(_localeKey);
            if (!_locale) {
                throw new Error(`Locale "${_localeKey}" is not defined, please add it with "defineLocale(...)"`);
            }
            let _input = [];
            if (typeof value === 'string') {
                const trimmedSeparator = this._picker._config.rangeSeparator.trim();
                if (value.replace(/[^-]/g, '').length > 1) {
                    _input = value.split(this._picker._config.rangeSeparator);
                }
                else {
                    _input = value
                        .split(trimmedSeparator.length > 0 ? trimmedSeparator : this._picker._config.rangeSeparator)
                        .map(_val => _val.trim());
                }
            }
            if (Array.isArray(value)) {
                _input = value;
            }
            this._value = _input
                .map((_val) => {
                if (this._picker._config.useUtc) {
                    return utcAsLocal(parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale));
                }
                return parseDate(_val, this._picker._config.rangeInputFormat, this._localeService.currentLocale);
            })
                .map((date) => (isNaN(date.valueOf()) ? void 0 : date));
        }
        this._picker.bsValue = this._value;
    }
    setDisabledState(isDisabled) {
        this._picker.isDisabled = isDisabled;
        if (isDisabled) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'disabled', 'disabled');
            return;
        }
        this._renderer.removeAttribute(this._elRef.nativeElement, 'disabled');
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registerOnChange(fn) {
        this._onChange = fn;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    onBlur() {
        this._onTouched();
    }
    hide() {
        this._picker.hide();
        this._renderer.selectRootElement(this._elRef.nativeElement).blur();
        if (this._picker._config.returnFocusToInput) {
            this._renderer.selectRootElement(this._elRef.nativeElement).focus();
        }
    }
}
BsDaterangepickerInputDirective.ɵfac = function BsDaterangepickerInputDirective_Factory(t) { return new (t || BsDaterangepickerInputDirective)(i0.ɵɵdirectiveInject(BsDaterangepickerDirective, 1), i0.ɵɵdirectiveInject(BsLocaleService), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
BsDaterangepickerInputDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDaterangepickerInputDirective, selectors: [["input", "bsDaterangepicker", ""]], hostBindings: function BsDaterangepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("change", function BsDaterangepickerInputDirective_change_HostBindingHandler($event) { return ctx.onChange($event); })("keyup.esc", function BsDaterangepickerInputDirective_keyup_esc_HostBindingHandler() { return ctx.hide(); })("keydown", function BsDaterangepickerInputDirective_keydown_HostBindingHandler($event) { return ctx.onKeydownEvent($event); })("blur", function BsDaterangepickerInputDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [i0.ɵɵProvidersFeature([BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDaterangepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: `input[bsDaterangepicker]`,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '(change)': 'onChange($event)',
                    '(keyup.esc)': 'hide()',
                    '(keydown)': 'onKeydownEvent($event)',
                    '(blur)': 'onBlur()'
                },
                providers: [BS_DATERANGEPICKER_VALUE_ACCESSOR, BS_DATERANGEPICKER_VALIDATOR]
            }]
    }], function () { return [{ type: BsDaterangepickerDirective, decorators: [{
                type: Host
            }] }, { type: BsLocaleService }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i0.ChangeDetectorRef }]; }, null); })();

class BsDatepickerModule {
    static forRoot() {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerEffects,
                BsLocaleService,
                TimepickerActions
            ]
        };
    }
}
BsDatepickerModule.ɵfac = function BsDatepickerModule_Factory(t) { return new (t || BsDatepickerModule)(); };
BsDatepickerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BsDatepickerModule });
BsDatepickerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, TooltipModule, TimepickerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TooltipModule, TimepickerModule],
                declarations: [
                    BsCalendarLayoutComponent,
                    BsCurrentDateViewComponent,
                    BsCustomDatesViewComponent,
                    BsDatepickerDayDecoratorComponent,
                    BsDatepickerNavigationViewComponent,
                    BsDaysCalendarViewComponent,
                    BsMonthCalendarViewComponent,
                    BsTimepickerViewComponent,
                    BsYearsCalendarViewComponent,
                    BsDatepickerContainerComponent,
                    BsDatepickerDirective,
                    BsDatepickerInlineContainerComponent,
                    BsDatepickerInlineDirective,
                    BsDatepickerInputDirective,
                    BsDaterangepickerContainerComponent,
                    BsDaterangepickerDirective,
                    BsDaterangepickerInlineContainerComponent,
                    BsDaterangepickerInlineDirective,
                    BsDaterangepickerInputDirective
                ],
                entryComponents: [
                    BsDatepickerContainerComponent,
                    BsDaterangepickerContainerComponent,
                    BsDatepickerInlineContainerComponent,
                    BsDaterangepickerInlineContainerComponent
                ],
                exports: [
                    BsDatepickerContainerComponent,
                    BsDatepickerDirective,
                    BsDatepickerInlineContainerComponent,
                    BsDatepickerInlineDirective,
                    BsDatepickerInputDirective,
                    BsDaterangepickerContainerComponent,
                    BsDaterangepickerDirective,
                    BsDaterangepickerInlineContainerComponent,
                    BsDaterangepickerInlineDirective,
                    BsDaterangepickerInputDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BsDatepickerModule, { declarations: [BsCalendarLayoutComponent,
        BsCurrentDateViewComponent,
        BsCustomDatesViewComponent,
        BsDatepickerDayDecoratorComponent,
        BsDatepickerNavigationViewComponent,
        BsDaysCalendarViewComponent,
        BsMonthCalendarViewComponent,
        BsTimepickerViewComponent,
        BsYearsCalendarViewComponent,
        BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective], imports: [CommonModule, TooltipModule, TimepickerModule], exports: [BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { BsDatepickerConfig, BsDatepickerContainerComponent, BsDatepickerDirective, BsDatepickerInlineConfig, BsDatepickerInlineContainerComponent, BsDatepickerInlineDirective, BsDatepickerInputDirective, BsDatepickerModule, BsDaterangepickerConfig, BsDaterangepickerContainerComponent, BsDaterangepickerDirective, BsDaterangepickerInlineConfig, BsDaterangepickerInlineContainerComponent, BsDaterangepickerInlineDirective, BsDaterangepickerInputDirective, BsLocaleService };
//# sourceMappingURL=ngx-bootstrap-datepicker.mjs.map
