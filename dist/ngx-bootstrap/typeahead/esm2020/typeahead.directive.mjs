import { ChangeDetectorRef, Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';
import { NgControl } from '@angular/forms';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { EMPTY, from, isObservable } from 'rxjs';
import { debounceTime, filter, mergeMap, switchMap, tap, toArray } from 'rxjs/operators';
import { TypeaheadContainerComponent } from './typeahead-container.component';
import { TypeaheadMatch } from './typeahead-match.class';
import { getValueFromObject, latinize, tokenize } from './typeahead-utils';
import { TypeaheadConfig } from './typeahead.config';
import * as i0 from "@angular/core";
import * as i1 from "ngx-bootstrap/component-loader";
import * as i2 from "./typeahead.config";
import * as i3 from "@angular/forms";
export class TypeaheadDirective {
    constructor(cis, config, changeDetection, element, ngControl, renderer, viewContainerRef) {
        this.changeDetection = changeDetection;
        this.element = element;
        this.ngControl = ngControl;
        this.renderer = renderer;
        /** minimal no of characters that needs to be entered before
         * typeahead kicks-in. When set to 0, typeahead shows on focus with full
         * list of options (limited as normal by typeaheadOptionsLimit)
         */
        this.typeaheadMinLength = 1;
        /** sets use adaptive position */
        this.adaptivePosition = false;
        /** turn on/off animation */
        this.isAnimated = false;
        /** minimal wait time after last character typed before typeahead kicks-in */
        this.typeaheadWaitMs = 0;
        /** match latin symbols.
         * If true the word súper would match super and vice versa.
         */
        this.typeaheadLatinize = true;
        /** Can be use to search words by inserting a single white space between each characters
         *  for example 'C a l i f o r n i a' will match 'California'.
         */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to break words. Defaults to space.
         */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadMultipleSearch attribute is true.
         * Sets the multiple search delimiter to know when to start a new search. Defaults to comma.
         * If space needs to be used, then explicitly set typeaheadWordDelimiters to something else than space
         * because space is used by default OR set typeaheadSingleWords attribute to false if you don't need
         * to use it together with multiple search.
         */
        this.typeaheadMultipleSearchDelimiters = ',';
        /** should be used only in case typeaheadSingleWords attribute is true.
         * Sets the word delimiter to match exact phrase.
         * Defaults to simple and double quotes.
         */
        this.typeaheadPhraseDelimiters = '\'"';
        /** specifies if typeahead is scrollable  */
        this.typeaheadScrollable = false;
        /** specifies number of options to show in scroll view  */
        this.typeaheadOptionsInScrollableView = 5;
        /** fired when an options list was opened and the user clicked Tab
         * If a value equal true, it will be chosen first or active item in the list
         * If value equal false, it will be chosen an active item in the list or nothing
         */
        this.typeaheadSelectFirstItem = true;
        /** makes active first item in a list */
        this.typeaheadIsFirstItemActive = true;
        /** fired when 'busy' state of this component was changed,
         * fired on async mode only, returns boolean
         */
        this.typeaheadLoading = new EventEmitter();
        /** fired on every key event and returns true
         * in case of matches are not detected
         */
        this.typeaheadNoResults = new EventEmitter();
        /** fired when option was selected, return object with data of this option. */
        this.typeaheadOnSelect = new EventEmitter();
        /** fired when option was previewed, return object with data of this option. */
        this.typeaheadOnPreview = new EventEmitter();
        /** fired when blur event occurs. returns the active item */
        this.typeaheadOnBlur = new EventEmitter();
        /** This attribute indicates that the dropdown should be opened upwards */
        this.dropup = false;
        this.isOpen = false;
        this.list = 'list';
        this.isActiveItemChanged = false;
        this.isFocused = false;
        this.cancelRequestOnFocusLost = false;
        this.selectItemOnBlur = false;
        this.keyUpEventEmitter = new EventEmitter();
        this.placement = 'bottom left';
        this._matches = [];
        this._subscriptions = [];
        this._outsideClickListener = () => void 0;
        this._typeahead = cis.createLoader(element, viewContainerRef, renderer)
            .provide({ provide: TypeaheadConfig, useValue: config });
        Object.assign(this, {
            typeaheadHideResultsOnBlur: config.hideResultsOnBlur,
            cancelRequestOnFocusLost: config.cancelRequestOnFocusLost,
            typeaheadSelectFirstItem: config.selectFirstItem,
            typeaheadIsFirstItemActive: config.isFirstItemActive,
            typeaheadMinLength: config.minLength,
            adaptivePosition: config.adaptivePosition,
            isAnimated: config.isAnimated,
            selectItemOnBlur: config.selectItemOnBlur
        });
    }
    get matches() {
        return this._matches;
    }
    ngOnInit() {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength =
            this.typeaheadMinLength === void 0 ? 1 : this.typeaheadMinLength;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(isObservable(this.typeahead))) {
            this.typeaheadAsync = false;
        }
        if (isObservable(this.typeahead)) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
        this.checkDelimitersConflict();
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onInput(e) {
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`), use either
        // `textContent` or `innerText` (depending on which one is supported, i.e.
        // Firefox or IE).
        const value = e.target.value !== undefined
            ? e.target.value
            : e.target.textContent !== undefined
                ? e.target.textContent
                : e.target.innerText;
        if (value != null && value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    }
    onChange(event) {
        if (this._container) {
            // esc
            if (event.keyCode === 27 || event.key === 'Escape') {
                this.hide();
                return;
            }
            // up
            if (event.keyCode === 38 || event.key === 'ArrowUp') {
                this.isActiveItemChanged = true;
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (event.keyCode === 40 || event.key === 'ArrowDown') {
                this.isActiveItemChanged = true;
                this._container.nextActiveMatch();
                return;
            }
            // enter
            if (event.keyCode === 13 || event.key === 'Enter') {
                this._container.selectActiveMatch();
                return;
            }
        }
    }
    onFocus() {
        this.isFocused = true;
        // add setTimeout to fix issue #5251
        // to get and emit updated value if it's changed on focus
        setTimeout(() => {
            if (this.typeaheadMinLength === 0) {
                this.typeaheadLoading.emit(true);
                this.keyUpEventEmitter.emit(this.element.nativeElement.value || '');
            }
        }, 0);
    }
    onBlur() {
        this.isFocused = false;
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
        }
        if (!this.container && this._matches?.length === 0) {
            this.typeaheadOnBlur.emit(new TypeaheadMatch(this.element.nativeElement.value, this.element.nativeElement.value, false));
        }
    }
    onKeydown(event) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        if (event.keyCode === 9 || event.key === 'Tab') {
            this.onBlur();
        }
        if (event.keyCode === 9 || event.key === 'Tab' || event.keyCode === 13 || event.key === 'Enter') {
            event.preventDefault();
            if (this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch();
                return;
            }
            if (!this.typeaheadSelectFirstItem) {
                this._container.selectActiveMatch(this.isActiveItemChanged);
                this.isActiveItemChanged = false;
                this.hide();
            }
        }
    }
    changeModel(match) {
        if (!match) {
            return;
        }
        let valueStr;
        if (this.typeaheadMultipleSearch && this._allEnteredValue) {
            const tokens = this._allEnteredValue.split(new RegExp(`([${this.typeaheadMultipleSearchDelimiters}]+)`));
            this._allEnteredValue = tokens.slice(0, tokens.length - 1).concat(match.value).join('');
            valueStr = this._allEnteredValue;
        }
        else {
            valueStr = match.value;
        }
        this.ngControl.viewToModelUpdate(valueStr);
        this.ngControl.control?.setValue(valueStr);
        this.changeDetection.markForCheck();
        this.hide();
    }
    show() {
        this._typeahead
            .attach(TypeaheadContainerComponent)
            .to(this.container)
            .position({ attachment: `${this.dropup ? 'top' : 'bottom'} left` })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false,
            dropup: this.dropup
        });
        this._outsideClickListener = this.renderer
            .listen('document', 'click', (event) => {
            if (this.typeaheadMinLength === 0 && this.element.nativeElement.contains(event.target)) {
                return;
            }
            if (!this.typeaheadHideResultsOnBlur || this.element.nativeElement.contains(event.target)) {
                return;
            }
            this.onOutsideClick();
        });
        if (!this._typeahead.instance || !this.ngControl.control) {
            return;
        }
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        const normalizedQuery = (this.typeaheadLatinize
            ? latinize(this.ngControl.control.value)
            : this.ngControl.control.value)
            .toString()
            .toLowerCase();
        this._container.query = this.tokenizeQuery(normalizedQuery);
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
        this._container.activeChangeEvent.subscribe((activeId) => {
            this.activeDescendant = activeId;
            this.changeDetection.markForCheck();
        });
        this.isOpen = true;
    }
    hide() {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._outsideClickListener();
            this._container = void 0;
            this.isOpen = false;
            this.changeDetection.markForCheck();
        }
        this.typeaheadOnPreview.emit();
    }
    onOutsideClick() {
        if (this._container && !this._container.isFocused) {
            this.hide();
        }
    }
    ngOnDestroy() {
        // clean up subscriptions
        for (const sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._typeahead.dispose();
    }
    asyncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), tap(value => this._allEnteredValue = value), switchMap(() => {
            if (!this.typeahead) {
                return EMPTY;
            }
            return this.typeahead;
        }))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    syncActions() {
        this._subscriptions.push(this.keyUpEventEmitter
            .pipe(debounceTime(this.typeaheadWaitMs), mergeMap((value) => {
            this._allEnteredValue = value;
            const normalizedQuery = this.normalizeQuery(value);
            if (!this.typeahead) {
                return EMPTY;
            }
            const typeahead = isObservable(this.typeahead) ? this.typeahead : from(this.typeahead);
            return typeahead
                .pipe(filter((option) => {
                return !!option && this.testMatch(this.normalizeOption(option), normalizedQuery);
            }), toArray());
        }))
            .subscribe((matches) => {
            this.finalizeAsyncCall(matches);
        }));
    }
    normalizeOption(option) {
        const optionValue = getValueFromObject(option, this.typeaheadOptionField);
        const normalizedOption = this.typeaheadLatinize
            ? latinize(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    }
    tokenizeQuery(currentQuery) {
        let query = currentQuery;
        if (this.typeaheadMultipleSearch && this.typeaheadSingleWords) {
            if (!this.haveCommonCharacters(`${this.typeaheadPhraseDelimiters}${this.typeaheadWordDelimiters}`, this.typeaheadMultipleSearchDelimiters)) {
                // single words and multiple search delimiters are different, can be used together
                query = tokenize(query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters, this.typeaheadMultipleSearchDelimiters);
            }
        }
        else if (this.typeaheadSingleWords) {
            query = tokenize(query, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters);
        }
        else {
            // multiple searches
            query = tokenize(query, void 0, void 0, this.typeaheadMultipleSearchDelimiters);
        }
        return query;
    }
    normalizeQuery(value) {
        // If singleWords, break model here to not be doing extra work on each iteration
        let normalizedQuery = (this.typeaheadLatinize
            ? latinize(value)
            : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.tokenizeQuery(normalizedQuery);
        return normalizedQuery;
    }
    testMatch(match, test) {
        let spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (let i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        return match.indexOf(test) >= 0;
    }
    finalizeAsyncCall(matches) {
        this.prepareMatches(matches || []);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (!this.isFocused && this.cancelRequestOnFocusLost) {
            return;
        }
        if (this._container && this.ngControl.control) {
            // fix: remove usage of ngControl internals
            const _controlValue = (this.typeaheadLatinize
                ? latinize(this.ngControl.control.value)
                : this.ngControl.control.value) || '';
            // This improves the speed as it won't have to be done for each list item
            const normalizedQuery = _controlValue.toString().toLowerCase();
            this._container.query = this.tokenizeQuery(normalizedQuery);
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    }
    prepareMatches(options) {
        const limited = options.slice(0, this.typeaheadOptionsLimit);
        const sorted = !this.typeaheadOrderBy ? limited : this.orderMatches(limited);
        if (this.typeaheadGroupField) {
            let matches = [];
            // extract all group names
            const groups = sorted
                .map((option) => getValueFromObject(option, this.typeaheadGroupField))
                .filter((v, i, a) => a.indexOf(v) === i);
            groups.forEach((group) => {
                // add group header to array of matches
                matches.push(new TypeaheadMatch(group, group, true));
                // add each item of group to array of matches
                matches = matches.concat(sorted
                    .filter((option) => getValueFromObject(option, this.typeaheadGroupField) === group)
                    .map((option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField))));
            });
            this._matches = matches;
        }
        else {
            this._matches = sorted.map(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (option) => new TypeaheadMatch(option, getValueFromObject(option, this.typeaheadOptionField)));
        }
    }
    orderMatches(options) {
        if (!options.length) {
            return options;
        }
        if (this.typeaheadOrderBy !== null
            && this.typeaheadOrderBy !== undefined
            && typeof this.typeaheadOrderBy === 'object'
            && Object.keys(this.typeaheadOrderBy).length === 0) {
            console.error('Field and direction properties for typeaheadOrderBy have to be set according to documentation!');
            return options;
        }
        const { field, direction } = (this.typeaheadOrderBy || {});
        if (!direction || !(direction === 'asc' || direction === 'desc')) {
            console.error('typeaheadOrderBy direction has to equal "asc" or "desc". Please follow the documentation.');
            return options;
        }
        if (typeof options[0] === 'string') {
            return direction === 'asc' ? options.sort() : options.sort().reverse();
        }
        if (!field || typeof field !== 'string') {
            console.error('typeaheadOrderBy field has to set according to the documentation.');
            return options;
        }
        return options.sort((a, b) => {
            const stringA = getValueFromObject(a, field);
            const stringB = getValueFromObject(b, field);
            if (stringA < stringB) {
                return direction === 'asc' ? -1 : 1;
            }
            if (stringA > stringB) {
                return direction === 'asc' ? 1 : -1;
            }
            return 0;
        });
    }
    hasMatches() {
        return this._matches.length > 0;
    }
    checkDelimitersConflict() {
        if (this.typeaheadMultipleSearch && this.typeaheadSingleWords
            && (this.haveCommonCharacters(`${this.typeaheadPhraseDelimiters}${this.typeaheadWordDelimiters}`, this.typeaheadMultipleSearchDelimiters))) {
            throw new Error(`Delimiters used in typeaheadMultipleSearchDelimiters must be different
          from delimiters used in typeaheadWordDelimiters (current value: ${this.typeaheadWordDelimiters}) and
          typeaheadPhraseDelimiters (current value: ${this.typeaheadPhraseDelimiters}).
          Please refer to the documentation`);
        }
    }
    haveCommonCharacters(str1, str2) {
        for (let i = 0; i < str1.length; i++) {
            if (str1.charAt(i).indexOf(str2) > -1) {
                return true;
            }
        }
        return false;
    }
}
TypeaheadDirective.ɵfac = function TypeaheadDirective_Factory(t) { return new (t || TypeaheadDirective)(i0.ɵɵdirectiveInject(i1.ComponentLoaderFactory), i0.ɵɵdirectiveInject(i2.TypeaheadConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i3.NgControl), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); };
TypeaheadDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TypeaheadDirective, selectors: [["", "typeahead", ""]], hostVars: 4, hostBindings: function TypeaheadDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("input", function TypeaheadDirective_input_HostBindingHandler($event) { return ctx.onInput($event); })("keyup", function TypeaheadDirective_keyup_HostBindingHandler($event) { return ctx.onChange($event); })("click", function TypeaheadDirective_click_HostBindingHandler() { return ctx.onFocus(); })("focus", function TypeaheadDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function TypeaheadDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keydown", function TypeaheadDirective_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("aria-activedescendant", ctx.activeDescendant)("aria-owns", ctx.isOpen ? ctx._container.popupId : null)("aria-expanded", ctx.isOpen)("aria-autocomplete", ctx.list);
    } }, inputs: { typeahead: "typeahead", typeaheadMinLength: "typeaheadMinLength", adaptivePosition: "adaptivePosition", isAnimated: "isAnimated", typeaheadWaitMs: "typeaheadWaitMs", typeaheadOptionsLimit: "typeaheadOptionsLimit", typeaheadOptionField: "typeaheadOptionField", typeaheadGroupField: "typeaheadGroupField", typeaheadOrderBy: "typeaheadOrderBy", typeaheadAsync: "typeaheadAsync", typeaheadLatinize: "typeaheadLatinize", typeaheadSingleWords: "typeaheadSingleWords", typeaheadWordDelimiters: "typeaheadWordDelimiters", typeaheadMultipleSearch: "typeaheadMultipleSearch", typeaheadMultipleSearchDelimiters: "typeaheadMultipleSearchDelimiters", typeaheadPhraseDelimiters: "typeaheadPhraseDelimiters", typeaheadItemTemplate: "typeaheadItemTemplate", optionsListTemplate: "optionsListTemplate", typeaheadScrollable: "typeaheadScrollable", typeaheadOptionsInScrollableView: "typeaheadOptionsInScrollableView", typeaheadHideResultsOnBlur: "typeaheadHideResultsOnBlur", typeaheadSelectFirstItem: "typeaheadSelectFirstItem", typeaheadIsFirstItemActive: "typeaheadIsFirstItemActive", container: "container", dropup: "dropup" }, outputs: { typeaheadLoading: "typeaheadLoading", typeaheadNoResults: "typeaheadNoResults", typeaheadOnSelect: "typeaheadOnSelect", typeaheadOnPreview: "typeaheadOnPreview", typeaheadOnBlur: "typeaheadOnBlur" }, exportAs: ["bs-typeahead"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TypeaheadDirective, [{
        type: Directive,
        args: [{
                selector: '[typeahead]',
                exportAs: 'bs-typeahead',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-activedescendant]': 'activeDescendant',
                    '[attr.aria-owns]': 'isOpen ? this._container.popupId : null',
                    '[attr.aria-expanded]': 'isOpen',
                    '[attr.aria-autocomplete]': 'list'
                }
            }]
    }], function () { return [{ type: i1.ComponentLoaderFactory }, { type: i2.TypeaheadConfig }, { type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i3.NgControl }, { type: i0.Renderer2 }, { type: i0.ViewContainerRef }]; }, { typeahead: [{
            type: Input
        }], typeaheadMinLength: [{
            type: Input
        }], adaptivePosition: [{
            type: Input
        }], isAnimated: [{
            type: Input
        }], typeaheadWaitMs: [{
            type: Input
        }], typeaheadOptionsLimit: [{
            type: Input
        }], typeaheadOptionField: [{
            type: Input
        }], typeaheadGroupField: [{
            type: Input
        }], typeaheadOrderBy: [{
            type: Input
        }], typeaheadAsync: [{
            type: Input
        }], typeaheadLatinize: [{
            type: Input
        }], typeaheadSingleWords: [{
            type: Input
        }], typeaheadWordDelimiters: [{
            type: Input
        }], typeaheadMultipleSearch: [{
            type: Input
        }], typeaheadMultipleSearchDelimiters: [{
            type: Input
        }], typeaheadPhraseDelimiters: [{
            type: Input
        }], typeaheadItemTemplate: [{
            type: Input
        }], optionsListTemplate: [{
            type: Input
        }], typeaheadScrollable: [{
            type: Input
        }], typeaheadOptionsInScrollableView: [{
            type: Input
        }], typeaheadHideResultsOnBlur: [{
            type: Input
        }], typeaheadSelectFirstItem: [{
            type: Input
        }], typeaheadIsFirstItemActive: [{
            type: Input
        }], typeaheadLoading: [{
            type: Output
        }], typeaheadNoResults: [{
            type: Output
        }], typeaheadOnSelect: [{
            type: Output
        }], typeaheadOnPreview: [{
            type: Output
        }], typeaheadOnBlur: [{
            type: Output
        }], container: [{
            type: Input
        }], dropup: [{
            type: Input
        }], 
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onInput: [{
            type: HostListener,
            args: ['input', ['$event']]
        }], onChange: [{
            type: HostListener,
            args: ['keyup', ['$event']]
        }], onFocus: [{
            type: HostListener,
            args: ['click']
        }, {
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZWFoZWFkLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90eXBlYWhlYWQvdHlwZWFoZWFkLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFlBQVksRUFDWixLQUFLLEVBR0wsTUFBTSxFQUNOLFNBQVMsRUFDVCxXQUFXLEVBQ1gsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQW1CLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFekYsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUE0QixNQUFNLE1BQU0sQ0FBQztBQUMzRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd6RixPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7O0FBaUJyRCxNQUFNLE9BQU8sa0JBQWtCO0lBZ0o3QixZQUNFLEdBQTJCLEVBQzNCLE1BQXVCLEVBQ2YsZUFBa0MsRUFDbEMsT0FBbUIsRUFDbkIsU0FBb0IsRUFDcEIsUUFBbUIsRUFDM0IsZ0JBQWtDO1FBSjFCLG9CQUFlLEdBQWYsZUFBZSxDQUFtQjtRQUNsQyxZQUFPLEdBQVAsT0FBTyxDQUFZO1FBQ25C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dUI7a0JBQS9CLEtBQUs7WUFRRyx1QkFBdUI7a0JBQS9CLEtBQUs7WUFPRyxpQ0FBaUM7a0JBQXpDLEtBQUs7WUFLRyx5QkFBeUI7a0JBQWpDLEtBQUs7WUFJRyxxQkFBcUI7a0JBQTdCLEtBQUs7WUFJRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFFRyxtQkFBbUI7a0JBQTNCLEtBQUs7WUFFRyxnQ0FBZ0M7a0JBQXhDLEtBQUs7WUFFRywwQkFBMEI7a0JBQWxDLEtBQUs7WUFLRyx3QkFBd0I7a0JBQWhDLEtBQUs7WUFFRywwQkFBMEI7a0JBQWxDLEtBQUs7WUFJSSxnQkFBZ0I7a0JBQXpCLE1BQU07WUFJRyxrQkFBa0I7a0JBQTNCLE1BQU07WUFFRyxpQkFBaUI7a0JBQTFCLE1BQU07WUFFRyxrQkFBa0I7a0JBQTNCLE1BQU07WUFFRyxlQUFlO2tCQUF4QixNQUFNO1lBS0UsU0FBUztrQkFBakIsS0FBSztZQUdHLE1BQU07a0JBQWQsS0FBSzs7SUE2Rk4sOERBQThEO0lBQzlELE9BQU87a0JBRk4sWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUF5QmpDLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFxQ2pDLE9BQU87a0JBRk4sWUFBWTttQkFBQyxPQUFPOztrQkFDcEIsWUFBWTttQkFBQyxPQUFPO1lBY3JCLE1BQU07a0JBREwsWUFBWTttQkFBQyxNQUFNO1lBZ0JwQixTQUFTO2tCQURSLFlBQVk7bUJBQUMsU0FBUyxFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3Q29udGFpbmVyUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5nQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuXHJcbmltcG9ydCB7IEVNUFRZLCBmcm9tLCBpc09ic2VydmFibGUsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUsIGZpbHRlciwgbWVyZ2VNYXAsIHN3aXRjaE1hcCwgdGFwLCB0b0FycmF5IH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBUeXBlYWhlYWRPcHRpb25JdGVtQ29udGV4dCwgVHlwZWFoZWFkT3B0aW9uTGlzdENvbnRleHQgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5pbXBvcnQgeyBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3R5cGVhaGVhZC1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgVHlwZWFoZWFkTWF0Y2ggfSBmcm9tICcuL3R5cGVhaGVhZC1tYXRjaC5jbGFzcyc7XHJcbmltcG9ydCB7IFR5cGVhaGVhZE9yZGVyIH0gZnJvbSAnLi90eXBlYWhlYWQtb3JkZXIuY2xhc3MnO1xyXG5pbXBvcnQgeyBnZXRWYWx1ZUZyb21PYmplY3QsIGxhdGluaXplLCB0b2tlbml6ZSB9IGZyb20gJy4vdHlwZWFoZWFkLXV0aWxzJztcclxuaW1wb3J0IHsgVHlwZWFoZWFkQ29uZmlnIH0gZnJvbSAnLi90eXBlYWhlYWQuY29uZmlnJztcclxuXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG50eXBlIFR5cGVhaGVhZE9wdGlvbiA9IHN0cmluZyB8IFJlY29yZDxzdHJpbmcgfCBudW1iZXIsIGFueT47XHJcbnR5cGUgVHlwZWFoZWFkT3B0aW9uQXJyID0gVHlwZWFoZWFkT3B0aW9uW10gfCBPYnNlcnZhYmxlPFR5cGVhaGVhZE9wdGlvbltdPjtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3R5cGVhaGVhZF0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtdHlwZWFoZWFkJyxcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQGFuZ3VsYXItZXNsaW50L25vLWhvc3QtbWV0YWRhdGEtcHJvcGVydHlcclxuICBob3N0OiB7XHJcbiAgICAnW2F0dHIuYXJpYS1hY3RpdmVkZXNjZW5kYW50XSc6ICdhY3RpdmVEZXNjZW5kYW50JyxcclxuICAgICdbYXR0ci5hcmlhLW93bnNdJzogJ2lzT3BlbiA/IHRoaXMuX2NvbnRhaW5lci5wb3B1cElkIDogbnVsbCcsXHJcbiAgICAnW2F0dHIuYXJpYS1leHBhbmRlZF0nOiAnaXNPcGVuJyxcclxuICAgICdbYXR0ci5hcmlhLWF1dG9jb21wbGV0ZV0nOiAnbGlzdCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUeXBlYWhlYWREaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIG9wdGlvbnMgc291cmNlLCBjYW4gYmUgQXJyYXkgb2Ygc3RyaW5ncywgb2JqZWN0cyBvclxyXG4gICAqIGFuIE9ic2VydmFibGUgZm9yIGV4dGVybmFsIG1hdGNoaW5nIHByb2Nlc3NcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWQ/OiBUeXBlYWhlYWRPcHRpb25BcnI7XHJcbiAgLyoqIG1pbmltYWwgbm8gb2YgY2hhcmFjdGVycyB0aGF0IG5lZWRzIHRvIGJlIGVudGVyZWQgYmVmb3JlXHJcbiAgICogdHlwZWFoZWFkIGtpY2tzLWluLiBXaGVuIHNldCB0byAwLCB0eXBlYWhlYWQgc2hvd3Mgb24gZm9jdXMgd2l0aCBmdWxsXHJcbiAgICogbGlzdCBvZiBvcHRpb25zIChsaW1pdGVkIGFzIG5vcm1hbCBieSB0eXBlYWhlYWRPcHRpb25zTGltaXQpXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkTWluTGVuZ3RoID0gMTtcclxuICAvKiogc2V0cyB1c2UgYWRhcHRpdmUgcG9zaXRpb24gKi9cclxuICBASW5wdXQoKSBhZGFwdGl2ZVBvc2l0aW9uID0gZmFsc2U7XHJcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xyXG4gIEBJbnB1dCgpIGlzQW5pbWF0ZWQgPSBmYWxzZTtcclxuICAvKiogbWluaW1hbCB3YWl0IHRpbWUgYWZ0ZXIgbGFzdCBjaGFyYWN0ZXIgdHlwZWQgYmVmb3JlIHR5cGVhaGVhZCBraWNrcy1pbiAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFdhaXRNcyA9IDA7XHJcbiAgLyoqIG1heGltdW0gbGVuZ3RoIG9mIG9wdGlvbnMgaXRlbXMgbGlzdC4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgMjAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zTGltaXQ/OiBudW1iZXI7XHJcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGRcclxuICAgKiB0aGF0IGNvbnRhaW5zIHRoZSBvcHRpb25zIHZhbHVlLCB3ZSB1c2UgYXJyYXkgaXRlbSBhcyBvcHRpb24gaW4gY2FzZVxyXG4gICAqIG9mIHRoaXMgZmllbGQgaXMgbWlzc2luZy4gU3VwcG9ydHMgbmVzdGVkIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkT3B0aW9uRmllbGQ/OiBzdHJpbmc7XHJcbiAgLyoqIHdoZW4gb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlIG5hbWUgb2YgZmllbGQgdGhhdFxyXG4gICAqIGNvbnRhaW5zIHRoZSBncm91cCB2YWx1ZSwgbWF0Y2hlcyBhcmUgZ3JvdXBlZCBieSB0aGlzIGZpZWxkIHdoZW4gc2V0LlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEdyb3VwRmllbGQ/OiBzdHJpbmc7XHJcbiAgLyoqIFVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBvcmRlciBvZiBtYXRjaGVzLiBXaGVuIG9wdGlvbnMgc291cmNlIGlzIGFuIGFycmF5IG9mIG9iamVjdHNcclxuICAgKiBhIGZpZWxkIGZvciBzb3J0aW5nIGhhcyB0byBiZSBzZXQgdXAuIEluIGNhc2Ugb2Ygb3B0aW9ucyBzb3VyY2UgaXMgYW4gYXJyYXkgb2Ygc3RyaW5nLFxyXG4gICAqIGEgZmllbGQgZm9yIHNvcnRpbmcgaXMgYWJzZW50LiBUaGUgb3JkZXJpbmcgZGlyZWN0aW9uIGNvdWxkIGJlIGNoYW5nZWQgdG8gYXNjZW5kaW5nIG9yIGRlc2NlbmRpbmcuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkT3JkZXJCeT86IFR5cGVhaGVhZE9yZGVyO1xyXG4gIC8qKiBzaG91bGQgYmUgdXNlZCBvbmx5IGluIGNhc2Ugb2YgdHlwZWFoZWFkIGF0dHJpYnV0ZSBpcyBPYnNlcnZhYmxlIG9mIGFycmF5LlxyXG4gICAqIElmIHRydWUgLSBsb2FkaW5nIG9mIG9wdGlvbnMgd2lsbCBiZSBhc3luYywgb3RoZXJ3aXNlIC0gc3luYy5cclxuICAgKiB0cnVlIG1ha2Ugc2Vuc2UgaWYgb3B0aW9ucyBhcnJheSBpcyBsYXJnZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRBc3luYz86IGJvb2xlYW47XHJcbiAgLyoqIG1hdGNoIGxhdGluIHN5bWJvbHMuXHJcbiAgICogSWYgdHJ1ZSB0aGUgd29yZCBzw7pwZXIgd291bGQgbWF0Y2ggc3VwZXIgYW5kIHZpY2UgdmVyc2EuXHJcbiAgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkTGF0aW5pemUgPSB0cnVlO1xyXG4gIC8qKiBDYW4gYmUgdXNlIHRvIHNlYXJjaCB3b3JkcyBieSBpbnNlcnRpbmcgYSBzaW5nbGUgd2hpdGUgc3BhY2UgYmV0d2VlbiBlYWNoIGNoYXJhY3RlcnNcclxuICAgKiAgZm9yIGV4YW1wbGUgJ0MgYSBsIGkgZiBvIHIgbiBpIGEnIHdpbGwgbWF0Y2ggJ0NhbGlmb3JuaWEnLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFNpbmdsZVdvcmRzID0gdHJ1ZTtcclxuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSBpcyB0cnVlLlxyXG4gICAqIFNldHMgdGhlIHdvcmQgZGVsaW1pdGVyIHRvIGJyZWFrIHdvcmRzLiBEZWZhdWx0cyB0byBzcGFjZS5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyA9ICcgJztcclxuICAvKiogQ2FuIGJlIHVzZWQgdG8gY29uZHVjdCBhIHNlYXJjaCBvZiBtdWx0aXBsZSBpdGVtcyBhbmQgaGF2ZSBzdWdnZXN0aW9uIG5vdCBmb3IgdGhlXHJcbiAgICogd2hvbGUgdmFsdWUgb2YgdGhlIGlucHV0IGJ1dCBmb3IgdGhlIHZhbHVlIHRoYXQgY29tZXMgYWZ0ZXIgYSBkZWxpbWl0ZXIgcHJvdmlkZWQgdmlhXHJcbiAgICogdHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzIGF0dHJpYnV0ZS4gVGhpcyBvcHRpb24gY2FuIG9ubHkgYmUgdXNlZCB0b2dldGhlciB3aXRoXHJcbiAgICogdHlwZWFoZWFkU2luZ2xlV29yZHMgb3B0aW9uIGlmIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzIGFuZCB0eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXHJcbiAgICogYXJlIGRpZmZlcmVudCBmcm9tIHR5cGVhaGVhZE11bHRpcGxlU2VhcmNoRGVsaW1pdGVycyB0byBhdm9pZCBjb25mbGljdCBpbiBkZXRlcm1pbmluZ1xyXG4gICAqIHdoZW4gdG8gZGVsaW1pdCBtdWx0aXBsZSBzZWFyY2hlcyBhbmQgd2hlbiBhIHNpbmdsZSB3b3JkLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZE11bHRpcGxlU2VhcmNoPzogYm9vbGVhbjtcclxuICAvKiogc2hvdWxkIGJlIHVzZWQgb25seSBpbiBjYXNlIHR5cGVhaGVhZE11bHRpcGxlU2VhcmNoIGF0dHJpYnV0ZSBpcyB0cnVlLlxyXG4gICAqIFNldHMgdGhlIG11bHRpcGxlIHNlYXJjaCBkZWxpbWl0ZXIgdG8ga25vdyB3aGVuIHRvIHN0YXJ0IGEgbmV3IHNlYXJjaC4gRGVmYXVsdHMgdG8gY29tbWEuXHJcbiAgICogSWYgc3BhY2UgbmVlZHMgdG8gYmUgdXNlZCwgdGhlbiBleHBsaWNpdGx5IHNldCB0eXBlYWhlYWRXb3JkRGVsaW1pdGVycyB0byBzb21ldGhpbmcgZWxzZSB0aGFuIHNwYWNlXHJcbiAgICogYmVjYXVzZSBzcGFjZSBpcyB1c2VkIGJ5IGRlZmF1bHQgT1Igc2V0IHR5cGVhaGVhZFNpbmdsZVdvcmRzIGF0dHJpYnV0ZSB0byBmYWxzZSBpZiB5b3UgZG9uJ3QgbmVlZFxyXG4gICAqIHRvIHVzZSBpdCB0b2dldGhlciB3aXRoIG11bHRpcGxlIHNlYXJjaC5cclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMgPSAnLCc7XHJcbiAgLyoqIHNob3VsZCBiZSB1c2VkIG9ubHkgaW4gY2FzZSB0eXBlYWhlYWRTaW5nbGVXb3JkcyBhdHRyaWJ1dGUgaXMgdHJ1ZS5cclxuICAgKiBTZXRzIHRoZSB3b3JkIGRlbGltaXRlciB0byBtYXRjaCBleGFjdCBwaHJhc2UuXHJcbiAgICogRGVmYXVsdHMgdG8gc2ltcGxlIGFuZCBkb3VibGUgcXVvdGVzLlxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgPSAnXFwnXCInO1xyXG4gIC8qKiB1c2VkIHRvIHNwZWNpZnkgYSBjdXN0b20gaXRlbSB0ZW1wbGF0ZS5cclxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXMgZXhwb3NlZCBhcmUgY2FsbGVkIGl0ZW0gYW5kIGluZGV4O1xyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEl0ZW1UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPFR5cGVhaGVhZE9wdGlvbkl0ZW1Db250ZXh0PjtcclxuICAvKiogdXNlZCB0byBzcGVjaWZ5IGEgY3VzdG9tIG9wdGlvbnMgbGlzdCB0ZW1wbGF0ZS5cclxuICAgKiBUZW1wbGF0ZSB2YXJpYWJsZXM6IG1hdGNoZXMsIGl0ZW1UZW1wbGF0ZSwgcXVlcnlcclxuICAgKi9cclxuICBASW5wdXQoKSBvcHRpb25zTGlzdFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8VHlwZWFoZWFkT3B0aW9uTGlzdENvbnRleHQ+O1xyXG4gIC8qKiBzcGVjaWZpZXMgaWYgdHlwZWFoZWFkIGlzIHNjcm9sbGFibGUgICovXHJcbiAgQElucHV0KCkgdHlwZWFoZWFkU2Nyb2xsYWJsZSA9IGZhbHNlO1xyXG4gIC8qKiBzcGVjaWZpZXMgbnVtYmVyIG9mIG9wdGlvbnMgdG8gc2hvdyBpbiBzY3JvbGwgdmlldyAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRPcHRpb25zSW5TY3JvbGxhYmxlVmlldyA9IDU7XHJcbiAgLyoqIHVzZWQgdG8gaGlkZSByZXN1bHQgb24gYmx1ciAqL1xyXG4gIEBJbnB1dCgpIHR5cGVhaGVhZEhpZGVSZXN1bHRzT25CbHVyPzogYm9vbGVhbjtcclxuICAvKiogZmlyZWQgd2hlbiBhbiBvcHRpb25zIGxpc3Qgd2FzIG9wZW5lZCBhbmQgdGhlIHVzZXIgY2xpY2tlZCBUYWJcclxuICAgKiBJZiBhIHZhbHVlIGVxdWFsIHRydWUsIGl0IHdpbGwgYmUgY2hvc2VuIGZpcnN0IG9yIGFjdGl2ZSBpdGVtIGluIHRoZSBsaXN0XHJcbiAgICogSWYgdmFsdWUgZXF1YWwgZmFsc2UsIGl0IHdpbGwgYmUgY2hvc2VuIGFuIGFjdGl2ZSBpdGVtIGluIHRoZSBsaXN0IG9yIG5vdGhpbmdcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0gPSB0cnVlO1xyXG4gIC8qKiBtYWtlcyBhY3RpdmUgZmlyc3QgaXRlbSBpbiBhIGxpc3QgKi9cclxuICBASW5wdXQoKSB0eXBlYWhlYWRJc0ZpcnN0SXRlbUFjdGl2ZSA9IHRydWU7XHJcbiAgLyoqIGZpcmVkIHdoZW4gJ2J1c3knIHN0YXRlIG9mIHRoaXMgY29tcG9uZW50IHdhcyBjaGFuZ2VkLFxyXG4gICAqIGZpcmVkIG9uIGFzeW5jIG1vZGUgb25seSwgcmV0dXJucyBib29sZWFuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIHR5cGVhaGVhZExvYWRpbmcgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgLyoqIGZpcmVkIG9uIGV2ZXJ5IGtleSBldmVudCBhbmQgcmV0dXJucyB0cnVlXHJcbiAgICogaW4gY2FzZSBvZiBtYXRjaGVzIGFyZSBub3QgZGV0ZWN0ZWRcclxuICAgKi9cclxuICBAT3V0cHV0KCkgdHlwZWFoZWFkTm9SZXN1bHRzID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIG9wdGlvbiB3YXMgc2VsZWN0ZWQsIHJldHVybiBvYmplY3Qgd2l0aCBkYXRhIG9mIHRoaXMgb3B0aW9uLiAqL1xyXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPblNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8VHlwZWFoZWFkTWF0Y2g+KCk7XHJcbiAgLyoqIGZpcmVkIHdoZW4gb3B0aW9uIHdhcyBwcmV2aWV3ZWQsIHJldHVybiBvYmplY3Qgd2l0aCBkYXRhIG9mIHRoaXMgb3B0aW9uLiAqL1xyXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPblByZXZpZXcgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE1hdGNoPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIGJsdXIgZXZlbnQgb2NjdXJzLiByZXR1cm5zIHRoZSBhY3RpdmUgaXRlbSAqL1xyXG4gIEBPdXRwdXQoKSB0eXBlYWhlYWRPbkJsdXIgPSBuZXcgRXZlbnRFbWl0dGVyPFR5cGVhaGVhZE1hdGNoPigpO1xyXG5cclxuICAvKipcclxuICAgKiBBIHNlbGVjdG9yIHNwZWNpZnlpbmcgdGhlIGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uXHJcbiAgICovXHJcbiAgQElucHV0KCkgY29udGFpbmVyPzogc3RyaW5nO1xyXG5cclxuICAvKiogVGhpcyBhdHRyaWJ1dGUgaW5kaWNhdGVzIHRoYXQgdGhlIGRyb3Bkb3duIHNob3VsZCBiZSBvcGVuZWQgdXB3YXJkcyAqL1xyXG4gIEBJbnB1dCgpIGRyb3B1cCA9IGZhbHNlO1xyXG5cclxuICAvLyBub3QgeWV0IGltcGxlbWVudGVkXHJcbiAgLyoqIGlmIGZhbHNlIHJlc3RyaWN0IG1vZGVsIHZhbHVlcyB0byB0aGUgb25lcyBzZWxlY3RlZCBmcm9tIHRoZSBwb3B1cCBvbmx5IHdpbGwgYmUgcHJvdmlkZWQgKi9cclxuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkRWRpdGFibGU6Ym9vbGVhbjtcclxuICAvKiogaWYgZmFsc2UgdGhlIGZpcnN0IG1hdGNoIGF1dG9tYXRpY2FsbHkgd2lsbCBub3QgYmUgZm9jdXNlZCBhcyB5b3UgdHlwZSAqL1xyXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRGb2N1c0ZpcnN0OmJvb2xlYW47XHJcbiAgLyoqIGZvcm1hdCB0aGUgbmctbW9kZWwgcmVzdWx0IGFmdGVyIHNlbGVjdGlvbiAqL1xyXG4gIC8vIEBJbnB1dCgpIHByb3RlY3RlZCB0eXBlYWhlYWRJbnB1dEZvcm1hdHRlcjphbnk7XHJcbiAgLyoqIGlmIHRydWUgYXV0b21hdGljYWxseSBzZWxlY3QgYW4gaXRlbSB3aGVuIHRoZXJlIGlzIG9uZSBvcHRpb24gdGhhdCBleGFjdGx5IG1hdGNoZXMgdGhlIHVzZXIgaW5wdXQgKi9cclxuICAvLyBASW5wdXQoKSBwcm90ZWN0ZWQgdHlwZWFoZWFkU2VsZWN0T25FeGFjdDpib29sZWFuO1xyXG4gIC8qKiAgaWYgdHJ1ZSBzZWxlY3QgdGhlIGN1cnJlbnRseSBoaWdobGlnaHRlZCBtYXRjaCBvbiBibHVyICovXHJcbiAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZFNlbGVjdE9uQmx1cjpib29sZWFuO1xyXG4gIC8qKiAgaWYgZmFsc2UgZG9uJ3QgZm9jdXMgdGhlIGlucHV0IGVsZW1lbnQgdGhlIHR5cGVhaGVhZCBkaXJlY3RpdmUgaXMgYXNzb2NpYXRlZCB3aXRoIG9uIHNlbGVjdGlvbiAqL1xyXG4gICAgLy8gQElucHV0KCkgcHJvdGVjdGVkIHR5cGVhaGVhZEZvY3VzT25TZWxlY3Q6Ym9vbGVhbjtcclxuXHJcbiAgYWN0aXZlRGVzY2VuZGFudD86IHN0cmluZztcclxuICBpc09wZW4gPSBmYWxzZTtcclxuICBsaXN0ID0gJ2xpc3QnO1xyXG4gIF9jb250YWluZXI/OiBUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ7XHJcbiAgaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IGZhbHNlO1xyXG4gIGlzRm9jdXNlZCA9IGZhbHNlO1xyXG4gIGNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdCA9IGZhbHNlO1xyXG4gIHNlbGVjdEl0ZW1PbkJsdXIgPSBmYWxzZTtcclxuICBwcm90ZWN0ZWQga2V5VXBFdmVudEVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBwcm90ZWN0ZWQgcGxhY2VtZW50ID0gJ2JvdHRvbSBsZWZ0JztcclxuICBwcm90ZWN0ZWQgX21hdGNoZXM6IFR5cGVhaGVhZE1hdGNoW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBfdHlwZWFoZWFkOiBDb21wb25lbnRMb2FkZXI8VHlwZWFoZWFkQ29udGFpbmVyQ29tcG9uZW50PjtcclxuICBwcml2YXRlIF9zdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xyXG4gIHByaXZhdGUgX2FsbEVudGVyZWRWYWx1ZT86IHN0cmluZztcclxuICBwcml2YXRlIF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcjogKCkgPT4gdm9pZCA9ICgpID0+IHZvaWQgMDtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjaXM6IENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICBjb25maWc6IFR5cGVhaGVhZENvbmZpZyxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgZWxlbWVudDogRWxlbWVudFJlZixcclxuICAgIHByaXZhdGUgbmdDb250cm9sOiBOZ0NvbnRyb2wsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICB2aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmXHJcbiAgKSB7XHJcblxyXG4gICAgdGhpcy5fdHlwZWFoZWFkID0gY2lzLmNyZWF0ZUxvYWRlcjxUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQ+KFxyXG4gICAgICBlbGVtZW50LFxyXG4gICAgICB2aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICByZW5kZXJlclxyXG4gICAgKVxyXG4gICAgICAucHJvdmlkZSh7IHByb3ZpZGU6IFR5cGVhaGVhZENvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9KTtcclxuXHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsXHJcbiAgICAgIHtcclxuICAgICAgICB0eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1cjogY29uZmlnLmhpZGVSZXN1bHRzT25CbHVyLFxyXG4gICAgICAgIGNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdDogY29uZmlnLmNhbmNlbFJlcXVlc3RPbkZvY3VzTG9zdCxcclxuICAgICAgICB0eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW06IGNvbmZpZy5zZWxlY3RGaXJzdEl0ZW0sXHJcbiAgICAgICAgdHlwZWFoZWFkSXNGaXJzdEl0ZW1BY3RpdmU6IGNvbmZpZy5pc0ZpcnN0SXRlbUFjdGl2ZSxcclxuICAgICAgICB0eXBlYWhlYWRNaW5MZW5ndGg6IGNvbmZpZy5taW5MZW5ndGgsXHJcbiAgICAgICAgYWRhcHRpdmVQb3NpdGlvbjogY29uZmlnLmFkYXB0aXZlUG9zaXRpb24sXHJcbiAgICAgICAgaXNBbmltYXRlZDogY29uZmlnLmlzQW5pbWF0ZWQsXHJcbiAgICAgICAgc2VsZWN0SXRlbU9uQmx1cjogY29uZmlnLnNlbGVjdEl0ZW1PbkJsdXJcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGdldCBtYXRjaGVzKCk6IFR5cGVhaGVhZE1hdGNoW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX21hdGNoZXM7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0ID0gdGhpcy50eXBlYWhlYWRPcHRpb25zTGltaXQgfHwgMjA7XHJcblxyXG4gICAgdGhpcy50eXBlYWhlYWRNaW5MZW5ndGggPVxyXG4gICAgICB0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gdm9pZCAwID8gMSA6IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoO1xyXG5cclxuICAgIC8vIGFzeW5jIHNob3VsZCBiZSBmYWxzZSBpbiBjYXNlIG9mIGFycmF5XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRBc3luYyA9PT0gdW5kZWZpbmVkICYmICEoaXNPYnNlcnZhYmxlKHRoaXMudHlwZWFoZWFkKSkpIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRBc3luYyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChpc09ic2VydmFibGUodGhpcy50eXBlYWhlYWQpKSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkQXN5bmMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZEFzeW5jKSB7XHJcbiAgICAgIHRoaXMuYXN5bmNBY3Rpb25zKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnN5bmNBY3Rpb25zKCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jaGVja0RlbGltaXRlcnNDb25mbGljdCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnLCBbJyRldmVudCddKVxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgb25JbnB1dChlOiBhbnkpOiB2b2lkIHtcclxuICAgIC8vIEZvciBgPGlucHV0PmBzLCB1c2UgdGhlIGB2YWx1ZWAgcHJvcGVydHkuIEZvciBvdGhlcnMgdGhhdCBkb24ndCBoYXZlIGFcclxuICAgIC8vIGB2YWx1ZWAgKHN1Y2ggYXMgYDxzcGFuIGNvbnRlbnRlZGl0YWJsZT1cInRydWVcIj5gKSwgdXNlIGVpdGhlclxyXG4gICAgLy8gYHRleHRDb250ZW50YCBvciBgaW5uZXJUZXh0YCAoZGVwZW5kaW5nIG9uIHdoaWNoIG9uZSBpcyBzdXBwb3J0ZWQsIGkuZS5cclxuICAgIC8vIEZpcmVmb3ggb3IgSUUpLlxyXG4gICAgY29uc3QgdmFsdWUgPVxyXG4gICAgICBlLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgPyBlLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIDogZS50YXJnZXQudGV4dENvbnRlbnQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgID8gZS50YXJnZXQudGV4dENvbnRlbnRcclxuICAgICAgICA6IGUudGFyZ2V0LmlubmVyVGV4dDtcclxuXHJcbiAgICBpZiAodmFsdWUgIT0gbnVsbCAmJiB2YWx1ZS50cmltKCkubGVuZ3RoID49IHRoaXMudHlwZWFoZWFkTWluTGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xyXG4gICAgICB0aGlzLmtleVVwRXZlbnRFbWl0dGVyLmVtaXQoZS50YXJnZXQudmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRMb2FkaW5nLmVtaXQoZmFsc2UpO1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KGZhbHNlKTtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXl1cCcsIFsnJGV2ZW50J10pXHJcbiAgb25DaGFuZ2UoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9jb250YWluZXIpIHtcclxuICAgICAgLy8gZXNjXHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gdXBcclxuICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDM4IHx8IGV2ZW50LmtleSA9PT0gJ0Fycm93VXAnKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIucHJldkFjdGl2ZU1hdGNoKCk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gZG93blxyXG4gICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gNDAgfHwgZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJykge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLm5leHRBY3RpdmVNYXRjaCgpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIGVudGVyXHJcbiAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMyB8fCBldmVudC5rZXkgPT09ICdFbnRlcicpIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2goKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycpXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxyXG4gIG9uRm9jdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmlzRm9jdXNlZCA9IHRydWU7XHJcbiAgICAvLyBhZGQgc2V0VGltZW91dCB0byBmaXggaXNzdWUgIzUyNTFcclxuICAgIC8vIHRvIGdldCBhbmQgZW1pdCB1cGRhdGVkIHZhbHVlIGlmIGl0J3MgY2hhbmdlZCBvbiBmb2N1c1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkTG9hZGluZy5lbWl0KHRydWUpO1xyXG4gICAgICAgIHRoaXMua2V5VXBFdmVudEVtaXR0ZXIuZW1pdCh0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSB8fCAnJyk7XHJcbiAgICAgIH1cclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgb25CbHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5pc0ZvY3VzZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy50eXBlYWhlYWRPbkJsdXIuZW1pdCh0aGlzLl9jb250YWluZXIuYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuY29udGFpbmVyICYmIHRoaXMuX21hdGNoZXM/Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICB0aGlzLnR5cGVhaGVhZE9uQmx1ci5lbWl0KG5ldyBUeXBlYWhlYWRNYXRjaChcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSxcclxuICAgICAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC52YWx1ZSxcclxuICAgICAgICBmYWxzZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25LZXlkb3duKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyBubyBjb250YWluZXIgLSBubyBwcm9ibGVtc1xyXG4gICAgaWYgKCF0aGlzLl9jb250YWluZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSA5IHx8IGV2ZW50LmtleSA9PT0gJ1RhYicpIHtcclxuICAgICAgdGhpcy5vbkJsdXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gOSB8fCBldmVudC5rZXkgPT09ICdUYWInIHx8IGV2ZW50LmtleUNvZGUgPT09IDEzIHx8IGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBpZiAodGhpcy50eXBlYWhlYWRTZWxlY3RGaXJzdEl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIuc2VsZWN0QWN0aXZlTWF0Y2goKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIXRoaXMudHlwZWFoZWFkU2VsZWN0Rmlyc3RJdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fY29udGFpbmVyLnNlbGVjdEFjdGl2ZU1hdGNoKHRoaXMuaXNBY3RpdmVJdGVtQ2hhbmdlZCk7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZUl0ZW1DaGFuZ2VkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZU1vZGVsKG1hdGNoPzogVHlwZWFoZWFkTWF0Y2gpOiB2b2lkIHtcclxuICAgIGlmICghbWF0Y2gpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IHZhbHVlU3RyOiBzdHJpbmc7XHJcbiAgICBpZiAodGhpcy50eXBlYWhlYWRNdWx0aXBsZVNlYXJjaCAmJiB0aGlzLl9hbGxFbnRlcmVkVmFsdWUpIHtcclxuICAgICAgY29uc3QgdG9rZW5zID0gdGhpcy5fYWxsRW50ZXJlZFZhbHVlLnNwbGl0KG5ldyBSZWdFeHAoYChbJHt0aGlzLnR5cGVhaGVhZE11bHRpcGxlU2VhcmNoRGVsaW1pdGVyc31dKylgKSk7XHJcbiAgICAgIHRoaXMuX2FsbEVudGVyZWRWYWx1ZSA9IHRva2Vucy5zbGljZSgwLCB0b2tlbnMubGVuZ3RoIC0gMSkuY29uY2F0KG1hdGNoLnZhbHVlKS5qb2luKCcnKTtcclxuICAgICAgdmFsdWVTdHIgPSB0aGlzLl9hbGxFbnRlcmVkVmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB2YWx1ZVN0ciA9IG1hdGNoLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5uZ0NvbnRyb2wudmlld1RvTW9kZWxVcGRhdGUodmFsdWVTdHIpO1xyXG4gICAgdGhpcy5uZ0NvbnRyb2wuY29udHJvbD8uc2V0VmFsdWUodmFsdWVTdHIpO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB0aGlzLmhpZGUoKTtcclxuICB9XHJcblxyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLl90eXBlYWhlYWRcclxuICAgICAgLmF0dGFjaChUeXBlYWhlYWRDb250YWluZXJDb21wb25lbnQpXHJcbiAgICAgIC50byh0aGlzLmNvbnRhaW5lcilcclxuICAgICAgLnBvc2l0aW9uKHsgYXR0YWNobWVudDogYCR7dGhpcy5kcm9wdXAgPyAndG9wJyA6ICdib3R0b20nfSBsZWZ0YCB9KVxyXG4gICAgICAuc2hvdyh7XHJcbiAgICAgICAgdHlwZWFoZWFkUmVmOiB0aGlzLFxyXG4gICAgICAgIHBsYWNlbWVudDogdGhpcy5wbGFjZW1lbnQsXHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICBkcm9wdXA6IHRoaXMuZHJvcHVwXHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5yZW5kZXJlclxyXG4gICAgICAubGlzdGVuKCdkb2N1bWVudCcsICdjbGljaycsIChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGVhaGVhZE1pbkxlbmd0aCA9PT0gMCAmJiB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy50eXBlYWhlYWRIaWRlUmVzdWx0c09uQmx1ciB8fCB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25PdXRzaWRlQ2xpY2soKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLl90eXBlYWhlYWQuaW5zdGFuY2UgfHwgIXRoaXMubmdDb250cm9sLmNvbnRyb2wpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2NvbnRhaW5lciA9IHRoaXMuX3R5cGVhaGVhZC5pbnN0YW5jZTtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5wYXJlbnQgPSB0aGlzO1xyXG4gICAgLy8gVGhpcyBpbXByb3ZlcyB0aGUgc3BlZWQgYXMgaXQgd29uJ3QgaGF2ZSB0byBiZSBkb25lIGZvciBlYWNoIGxpc3QgaXRlbVxyXG5cclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9ICh0aGlzLnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUodGhpcy5uZ0NvbnRyb2wuY29udHJvbC52YWx1ZSlcclxuICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKVxyXG4gICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIucXVlcnkgPSB0aGlzLnRva2VuaXplUXVlcnkobm9ybWFsaXplZFF1ZXJ5KTtcclxuXHJcbiAgICB0aGlzLl9jb250YWluZXIubWF0Y2hlcyA9IHRoaXMuX21hdGNoZXM7XHJcbiAgICB0aGlzLmVsZW1lbnQubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgIHRoaXMuX2NvbnRhaW5lci5hY3RpdmVDaGFuZ2VFdmVudC5zdWJzY3JpYmUoKGFjdGl2ZUlkOiBzdHJpbmcpID0+IHtcclxuICAgICAgdGhpcy5hY3RpdmVEZXNjZW5kYW50ID0gYWN0aXZlSWQ7XHJcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLmlzT3BlbiA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBoaWRlKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3R5cGVhaGVhZC5pc1Nob3duKSB7XHJcbiAgICAgIHRoaXMuX3R5cGVhaGVhZC5oaWRlKCk7XHJcbiAgICAgIHRoaXMuX291dHNpZGVDbGlja0xpc3RlbmVyKCk7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lciA9IHZvaWQgMDtcclxuICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnR5cGVhaGVhZE9uUHJldmlldy5lbWl0KCk7XHJcbiAgfVxyXG5cclxuICBvbk91dHNpZGVDbGljaygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLl9jb250YWluZXIgJiYgIXRoaXMuX2NvbnRhaW5lci5pc0ZvY3VzZWQpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIGNsZWFuIHVwIHN1YnNjcmlwdGlvbnNcclxuICAgIGZvciAoY29uc3Qgc3ViIG9mIHRoaXMuX3N1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLl90eXBlYWhlYWQuZGlzcG9zZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGFzeW5jQWN0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lPHN0cmluZz4odGhpcy50eXBlYWhlYWRXYWl0TXMpLFxyXG4gICAgICAgICAgdGFwKHZhbHVlID0+IHRoaXMuX2FsbEVudGVyZWRWYWx1ZSA9IHZhbHVlKSxcclxuICAgICAgICAgIHN3aXRjaE1hcCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy50eXBlYWhlYWQpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gRU1QVFk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZWFoZWFkO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlcykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maW5hbGl6ZUFzeW5jQ2FsbChtYXRjaGVzKTtcclxuICAgICAgICB9KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBzeW5jQWN0aW9ucygpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMucHVzaChcclxuICAgICAgdGhpcy5rZXlVcEV2ZW50RW1pdHRlclxyXG4gICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgZGVib3VuY2VUaW1lPHN0cmluZz4odGhpcy50eXBlYWhlYWRXYWl0TXMpLFxyXG4gICAgICAgICAgbWVyZ2VNYXAoKHZhbHVlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fYWxsRW50ZXJlZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRRdWVyeSA9IHRoaXMubm9ybWFsaXplUXVlcnkodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnR5cGVhaGVhZCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiBFTVBUWTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgdHlwZWFoZWFkID0gaXNPYnNlcnZhYmxlKHRoaXMudHlwZWFoZWFkKSA/IHRoaXMudHlwZWFoZWFkIDogZnJvbSh0aGlzLnR5cGVhaGVhZCk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHlwZWFoZWFkXHJcbiAgICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXIoKG9wdGlvbjogVHlwZWFoZWFkT3B0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAhIW9wdGlvbiAmJiB0aGlzLnRlc3RNYXRjaCh0aGlzLm5vcm1hbGl6ZU9wdGlvbihvcHRpb24pLCBub3JtYWxpemVkUXVlcnkpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICB0b0FycmF5KClcclxuICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICApXHJcbiAgICAgICAgLnN1YnNjcmliZSgobWF0Y2hlczogVHlwZWFoZWFkT3B0aW9uW10pID0+IHtcclxuICAgICAgICAgIHRoaXMuZmluYWxpemVBc3luY0NhbGwobWF0Y2hlcyk7XHJcbiAgICAgICAgfSlcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgbm9ybWFsaXplT3B0aW9uKG9wdGlvbjogVHlwZWFoZWFkT3B0aW9uKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IG9wdGlvblZhbHVlOiBzdHJpbmcgPSBnZXRWYWx1ZUZyb21PYmplY3QoXHJcbiAgICAgIG9wdGlvbixcclxuICAgICAgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZFxyXG4gICAgKTtcclxuICAgIGNvbnN0IG5vcm1hbGl6ZWRPcHRpb24gPSB0aGlzLnR5cGVhaGVhZExhdGluaXplXHJcbiAgICAgID8gbGF0aW5pemUob3B0aW9uVmFsdWUpXHJcbiAgICAgIDogb3B0aW9uVmFsdWU7XHJcblxyXG4gICAgcmV0dXJuIG5vcm1hbGl6ZWRPcHRpb24udG9Mb3dlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCB0b2tlbml6ZVF1ZXJ5KGN1cnJlbnRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10pOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcblxyXG4gICAgbGV0IHF1ZXJ5ID0gY3VycmVudFF1ZXJ5O1xyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2ggJiYgdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkcykge1xyXG4gICAgICBpZiAoIXRoaXMuaGF2ZUNvbW1vbkNoYXJhY3RlcnMoYCR7dGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzfSR7dGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVyc31gLFxyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzKSkge1xyXG4gICAgICAgIC8vIHNpbmdsZSB3b3JkcyBhbmQgbXVsdGlwbGUgc2VhcmNoIGRlbGltaXRlcnMgYXJlIGRpZmZlcmVudCwgY2FuIGJlIHVzZWQgdG9nZXRoZXJcclxuICAgICAgICBxdWVyeSA9IHRva2VuaXplKFxyXG4gICAgICAgICAgcXVlcnkgYXMgc3RyaW5nLFxyXG4gICAgICAgICAgdGhpcy50eXBlYWhlYWRXb3JkRGVsaW1pdGVycyxcclxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkUGhyYXNlRGVsaW1pdGVycyxcclxuICAgICAgICAgIHRoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGVhaGVhZFNpbmdsZVdvcmRzKSB7XHJcbiAgICAgIHF1ZXJ5ID0gdG9rZW5pemUoXHJcbiAgICAgICAgcXVlcnkgYXMgc3RyaW5nLFxyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnMsXHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzXHJcbiAgICAgICk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBtdWx0aXBsZSBzZWFyY2hlc1xyXG4gICAgICBxdWVyeSA9IHRva2VuaXplKFxyXG4gICAgICAgIHF1ZXJ5IGFzIHN0cmluZyxcclxuICAgICAgICB2b2lkIDAsXHJcbiAgICAgICAgdm9pZCAwLFxyXG4gICAgICAgIHRoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2hEZWxpbWl0ZXJzXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIG5vcm1hbGl6ZVF1ZXJ5KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcgfCBzdHJpbmdbXSB7XHJcbiAgICAvLyBJZiBzaW5nbGVXb3JkcywgYnJlYWsgbW9kZWwgaGVyZSB0byBub3QgYmUgZG9pbmcgZXh0cmEgd29yayBvbiBlYWNoIGl0ZXJhdGlvblxyXG4gICAgbGV0IG5vcm1hbGl6ZWRRdWVyeTogc3RyaW5nIHwgc3RyaW5nW10gPSAodGhpcy50eXBlYWhlYWRMYXRpbml6ZVxyXG4gICAgICA/IGxhdGluaXplKHZhbHVlKVxyXG4gICAgICA6IHZhbHVlKVxyXG4gICAgICAudG9TdHJpbmcoKVxyXG4gICAgICAudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICBub3JtYWxpemVkUXVlcnkgPSB0aGlzLnRva2VuaXplUXVlcnkobm9ybWFsaXplZFF1ZXJ5KTtcclxuXHJcbiAgICByZXR1cm4gbm9ybWFsaXplZFF1ZXJ5O1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIHRlc3RNYXRjaChtYXRjaDogc3RyaW5nLCB0ZXN0OiBzdHJpbmdbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgbGV0IHNwYWNlTGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0ZXN0ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICBzcGFjZUxlbmd0aCA9IHRlc3QubGVuZ3RoO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNwYWNlTGVuZ3RoOyBpICs9IDEpIHtcclxuICAgICAgICBpZiAodGVzdFtpXS5sZW5ndGggPiAwICYmIG1hdGNoLmluZGV4T2YodGVzdFtpXSkgPCAwKSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWF0Y2guaW5kZXhPZih0ZXN0KSA+PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGZpbmFsaXplQXN5bmNDYWxsKG1hdGNoZXM/OiBUeXBlYWhlYWRPcHRpb24gfCBUeXBlYWhlYWRPcHRpb25bXSk6IHZvaWQge1xyXG4gICAgdGhpcy5wcmVwYXJlTWF0Y2hlcyhtYXRjaGVzIHx8IFtdKTtcclxuXHJcbiAgICB0aGlzLnR5cGVhaGVhZExvYWRpbmcuZW1pdChmYWxzZSk7XHJcbiAgICB0aGlzLnR5cGVhaGVhZE5vUmVzdWx0cy5lbWl0KCF0aGlzLmhhc01hdGNoZXMoKSk7XHJcblxyXG4gICAgaWYgKCF0aGlzLmhhc01hdGNoZXMoKSkge1xyXG4gICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNGb2N1c2VkICYmIHRoaXMuY2FuY2VsUmVxdWVzdE9uRm9jdXNMb3N0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fY29udGFpbmVyICYmIHRoaXMubmdDb250cm9sLmNvbnRyb2wpIHtcclxuICAgICAgLy8gZml4OiByZW1vdmUgdXNhZ2Ugb2YgbmdDb250cm9sIGludGVybmFsc1xyXG4gICAgICBjb25zdCBfY29udHJvbFZhbHVlID0gKHRoaXMudHlwZWFoZWFkTGF0aW5pemVcclxuICAgICAgICA/IGxhdGluaXplKHRoaXMubmdDb250cm9sLmNvbnRyb2wudmFsdWUpXHJcbiAgICAgICAgOiB0aGlzLm5nQ29udHJvbC5jb250cm9sLnZhbHVlKSB8fCAnJztcclxuXHJcbiAgICAgIC8vIFRoaXMgaW1wcm92ZXMgdGhlIHNwZWVkIGFzIGl0IHdvbid0IGhhdmUgdG8gYmUgZG9uZSBmb3IgZWFjaCBsaXN0IGl0ZW1cclxuICAgICAgY29uc3Qgbm9ybWFsaXplZFF1ZXJ5ID0gX2NvbnRyb2xWYWx1ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICB0aGlzLl9jb250YWluZXIucXVlcnkgPSB0aGlzLnRva2VuaXplUXVlcnkobm9ybWFsaXplZFF1ZXJ5KTtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLm1hdGNoZXMgPSB0aGlzLl9tYXRjaGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgcHJlcGFyZU1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkT3B0aW9uIHwgVHlwZWFoZWFkT3B0aW9uW10pOiB2b2lkIHtcclxuICAgIGNvbnN0IGxpbWl0ZWQgPSBvcHRpb25zLnNsaWNlKDAsIHRoaXMudHlwZWFoZWFkT3B0aW9uc0xpbWl0KTtcclxuICAgIGNvbnN0IHNvcnRlZCA9ICF0aGlzLnR5cGVhaGVhZE9yZGVyQnkgPyBsaW1pdGVkIDogdGhpcy5vcmRlck1hdGNoZXMobGltaXRlZCk7XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkge1xyXG4gICAgICBsZXQgbWF0Y2hlczogVHlwZWFoZWFkTWF0Y2hbXSA9IFtdO1xyXG5cclxuICAgICAgLy8gZXh0cmFjdCBhbGwgZ3JvdXAgbmFtZXNcclxuICAgICAgY29uc3QgZ3JvdXBzID0gc29ydGVkXHJcbiAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pID0+XHJcbiAgICAgICAgICBnZXRWYWx1ZUZyb21PYmplY3Qob3B0aW9uLCB0aGlzLnR5cGVhaGVhZEdyb3VwRmllbGQpXHJcbiAgICAgICAgKVxyXG4gICAgICAgIC5maWx0ZXIoKHY6IHN0cmluZywgaTogbnVtYmVyLCBhOiBzdHJpbmdbXSkgPT4gYS5pbmRleE9mKHYpID09PSBpKTtcclxuXHJcbiAgICAgIGdyb3Vwcy5mb3JFYWNoKChncm91cDogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgLy8gYWRkIGdyb3VwIGhlYWRlciB0byBhcnJheSBvZiBtYXRjaGVzXHJcbiAgICAgICAgbWF0Y2hlcy5wdXNoKG5ldyBUeXBlYWhlYWRNYXRjaChncm91cCwgZ3JvdXAsIHRydWUpKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGVhY2ggaXRlbSBvZiBncm91cCB0byBhcnJheSBvZiBtYXRjaGVzXHJcbiAgICAgICAgbWF0Y2hlcyA9IG1hdGNoZXMuY29uY2F0KFxyXG4gICAgICAgICAgc29ydGVkXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG9wdGlvbjogVHlwZWFoZWFkT3B0aW9uKSA9PlxyXG4gICAgICAgICAgICAgIGdldFZhbHVlRnJvbU9iamVjdChvcHRpb24sIHRoaXMudHlwZWFoZWFkR3JvdXBGaWVsZCkgPT09IGdyb3VwXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLm1hcCgob3B0aW9uOiBUeXBlYWhlYWRPcHRpb24pID0+XHJcbiAgICAgICAgICAgICAgbmV3IFR5cGVhaGVhZE1hdGNoKFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uLFxyXG4gICAgICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcclxuICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuX21hdGNoZXMgPSBtYXRjaGVzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fbWF0Y2hlcyA9IHNvcnRlZC5tYXAoXHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAob3B0aW9uOiBhbnkpID0+XHJcbiAgICAgICAgICBuZXcgVHlwZWFoZWFkTWF0Y2goXHJcbiAgICAgICAgICAgIG9wdGlvbixcclxuICAgICAgICAgICAgZ2V0VmFsdWVGcm9tT2JqZWN0KG9wdGlvbiwgdGhpcy50eXBlYWhlYWRPcHRpb25GaWVsZClcclxuICAgICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBvcmRlck1hdGNoZXMob3B0aW9uczogVHlwZWFoZWFkT3B0aW9uW10pOiBUeXBlYWhlYWRPcHRpb25bXSB7XHJcbiAgICBpZiAoIW9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgIHJldHVybiBvcHRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnR5cGVhaGVhZE9yZGVyQnkgIT09IG51bGxcclxuICAgICAgJiYgdGhpcy50eXBlYWhlYWRPcmRlckJ5ICE9PSB1bmRlZmluZWRcclxuICAgICAgJiYgdHlwZW9mIHRoaXMudHlwZWFoZWFkT3JkZXJCeSA9PT0gJ29iamVjdCdcclxuICAgICAgJiYgT2JqZWN0LmtleXModGhpcy50eXBlYWhlYWRPcmRlckJ5KS5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRmllbGQgYW5kIGRpcmVjdGlvbiBwcm9wZXJ0aWVzIGZvciB0eXBlYWhlYWRPcmRlckJ5IGhhdmUgdG8gYmUgc2V0IGFjY29yZGluZyB0byBkb2N1bWVudGF0aW9uIScpO1xyXG5cclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBmaWVsZCwgZGlyZWN0aW9uIH0gPSAodGhpcy50eXBlYWhlYWRPcmRlckJ5IHx8IHt9KTtcclxuXHJcbiAgICBpZiAoIWRpcmVjdGlvbiB8fCAhKGRpcmVjdGlvbiA9PT0gJ2FzYycgfHwgZGlyZWN0aW9uID09PSAnZGVzYycpKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3R5cGVhaGVhZE9yZGVyQnkgZGlyZWN0aW9uIGhhcyB0byBlcXVhbCBcImFzY1wiIG9yIFwiZGVzY1wiLiBQbGVhc2UgZm9sbG93IHRoZSBkb2N1bWVudGF0aW9uLicpO1xyXG5cclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiBvcHRpb25zWzBdID09PSAnc3RyaW5nJykge1xyXG4gICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnYXNjJyA/IG9wdGlvbnMuc29ydCgpIDogb3B0aW9ucy5zb3J0KCkucmV2ZXJzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghZmllbGQgfHwgdHlwZW9mIGZpZWxkICE9PSAnc3RyaW5nJykge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCd0eXBlYWhlYWRPcmRlckJ5IGZpZWxkIGhhcyB0byBzZXQgYWNjb3JkaW5nIHRvIHRoZSBkb2N1bWVudGF0aW9uLicpO1xyXG5cclxuICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG9wdGlvbnMuc29ydCgoYTogVHlwZWFoZWFkT3B0aW9uLCBiOiBUeXBlYWhlYWRPcHRpb24pID0+IHtcclxuICAgICAgY29uc3Qgc3RyaW5nQSA9IGdldFZhbHVlRnJvbU9iamVjdChhLCBmaWVsZCk7XHJcbiAgICAgIGNvbnN0IHN0cmluZ0IgPSBnZXRWYWx1ZUZyb21PYmplY3QoYiwgZmllbGQpO1xyXG5cclxuICAgICAgaWYgKHN0cmluZ0EgPCBzdHJpbmdCKSB7XHJcbiAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzYycgPyAtMSA6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChzdHJpbmdBID4gc3RyaW5nQikge1xyXG4gICAgICAgIHJldHVybiBkaXJlY3Rpb24gPT09ICdhc2MnID8gMSA6IC0xO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gMDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGhhc01hdGNoZXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fbWF0Y2hlcy5sZW5ndGggPiAwO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGNoZWNrRGVsaW1pdGVyc0NvbmZsaWN0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudHlwZWFoZWFkTXVsdGlwbGVTZWFyY2ggJiYgdGhpcy50eXBlYWhlYWRTaW5nbGVXb3Jkc1xyXG4gICAgICAmJiAodGhpcy5oYXZlQ29tbW9uQ2hhcmFjdGVycyhgJHt0aGlzLnR5cGVhaGVhZFBocmFzZURlbGltaXRlcnN9JHt0aGlzLnR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzfWAsXHJcbiAgICAgICAgdGhpcy50eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMpKSkge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYERlbGltaXRlcnMgdXNlZCBpbiB0eXBlYWhlYWRNdWx0aXBsZVNlYXJjaERlbGltaXRlcnMgbXVzdCBiZSBkaWZmZXJlbnRcclxuICAgICAgICAgIGZyb20gZGVsaW1pdGVycyB1c2VkIGluIHR5cGVhaGVhZFdvcmREZWxpbWl0ZXJzIChjdXJyZW50IHZhbHVlOiAke3RoaXMudHlwZWFoZWFkV29yZERlbGltaXRlcnN9KSBhbmRcclxuICAgICAgICAgIHR5cGVhaGVhZFBocmFzZURlbGltaXRlcnMgKGN1cnJlbnQgdmFsdWU6ICR7dGhpcy50eXBlYWhlYWRQaHJhc2VEZWxpbWl0ZXJzfSkuXHJcbiAgICAgICAgICBQbGVhc2UgcmVmZXIgdG8gdGhlIGRvY3VtZW50YXRpb25gKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBoYXZlQ29tbW9uQ2hhcmFjdGVycyhzdHIxOiBzdHJpbmcsIHN0cjI6IHN0cmluZykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHIxLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChzdHIxLmNoYXJBdChpKS5pbmRleE9mKHN0cjIpID4gLTEpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19