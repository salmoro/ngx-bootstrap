import * as i0 from '@angular/core';
import { Injectable, forwardRef, EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

// todo: split
/** Provides default values for Pagination and pager components */
class PaginationConfig {
    constructor() {
        this.main = {
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
PaginationConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PaginationConfig, factory: PaginationConfig.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationConfig, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

const _c0$1 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
const _c1$1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PagerComponent),
    multi: true
};
class PagerComponent {
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** if `true` aligns each link to the sides of pager */
        this.align = false;
        /** if false first and last buttons will be hidden */
        this.boundaryLinks = false;
        /** if false previous and next buttons will be hidden */
        this.directionLinks = true;
        // labels
        /** first button text */
        this.firstText = 'First';
        /** previous button text */
        this.previousText = '« Previous';
        /** next button text */
        this.nextText = 'Next »';
        /** last button text */
        this.lastText = 'Last';
        /** if true current page will in the middle of pages list */
        this.rotate = true;
        // css
        /** add class to <code><li\></code> */
        this.pageBtnClass = '';
        /** if true pagination component will be disabled */
        this.disabled = false;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new EventEmitter();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to
         * object with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = '';
        this.inited = false;
        this._itemsPerPage = 15;
        this._totalItems = 0;
        this._totalPages = 0;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(Object.assign({}, paginationConfig.main, paginationConfig.pager));
        }
    }
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /** total number of items in all pages */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
        return this._totalPages;
    }
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    get page() {
        return this._page;
    }
    set page(value) {
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
        }
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this[`${key}Text`] || this.config[`${key}Text`];
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized && this.maxSize) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PaginationConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["pager"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [i0.ɵɵProvidersFeature([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵelementStart(1, "li", 1);
            i0.ɵɵelementStart(2, "a", 2);
            i0.ɵɵlistener("click", function PagerComponent_Template_a_click_2_listener($event) { return ctx.selectPage(ctx.page - 1, $event); });
            i0.ɵɵtext(3);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(4, "li", 1);
            i0.ɵɵelementStart(5, "a", 2);
            i0.ɵɵlistener("click", function PagerComponent_Template_a_click_5_listener($event) { return ctx.selectPage(ctx.page + 1, $event); });
            i0.ɵɵtext(6);
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx.pageBtnClass);
            i0.ɵɵclassProp("disabled", ctx.noPrevious())("previous", ctx.align);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c0$1, ctx.align, ctx.align));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getText("previous"));
            i0.ɵɵadvance(1);
            i0.ɵɵclassMap(ctx.pageBtnClass);
            i0.ɵɵclassProp("disabled", ctx.noNext())("next", ctx.align);
            i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(21, _c1$1, ctx.align, ctx.align));
            i0.ɵɵadvance(2);
            i0.ɵɵtextInterpolate(ctx.getText("next"));
        }
    }, directives: [i2.NgClass], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagerComponent, [{
            type: Component,
            args: [{ selector: 'pager', providers: [PAGER_CONTROL_VALUE_ACCESSOR], template: "<ul class=\"pager\">\r\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\r\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\r\n  </li>\r\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\r\n  </li>\r\n</ul>\r\n" }]
        }], function () { return [{ type: i0.ElementRef }, { type: PaginationConfig }, { type: i0.ChangeDetectorRef }]; }, { align: [{
                type: Input
            }], maxSize: [{
                type: Input
            }], boundaryLinks: [{
                type: Input
            }], directionLinks: [{
                type: Input
            }], firstText: [{
                type: Input
            }], previousText: [{
                type: Input
            }], nextText: [{
                type: Input
            }], lastText: [{
                type: Input
            }], rotate: [{
                type: Input
            }], pageBtnClass: [{
                type: Input
            }], disabled: [{
                type: Input
            }], numPages: [{
                type: Output
            }], pageChanged: [{
                type: Output
            }], itemsPerPage: [{
                type: Input
            }], totalItems: [{
                type: Input
            }] });
})();

const _c0 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 11);
        i0.ɵɵelementStart(1, "a", 12);
        i0.ɵɵlistener("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectPage(1, $event); });
        i0.ɵɵelementContainer(2, 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        const _r11 = i0.ɵɵreference(13);
        i0.ɵɵclassProp("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
    }
}
function PaginationComponent_li_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 14);
        i0.ɵɵelementStart(1, "a", 12);
        i0.ɵɵlistener("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
        i0.ɵɵelementContainer(2, 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        const _r9 = i0.ɵɵreference(11);
        i0.ɵɵclassProp("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
    }
}
const _c1 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function PaginationComponent_li_3_Template(rf, ctx) {
    if (rf & 1) {
        const _r21 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 15);
        i0.ɵɵelementStart(1, "a", 12);
        i0.ɵɵlistener("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r21); const pg_r19 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.selectPage(pg_r19.number, $event); });
        i0.ɵɵelementContainer(2, 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const pg_r19 = ctx.$implicit;
        const ctx_r2 = i0.ɵɵnextContext();
        const _r5 = i0.ɵɵreference(7);
        i0.ɵɵclassProp("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c1, ctx_r2.disabled, pg_r19, ctx_r2.page));
    }
}
function PaginationComponent_li_4_Template(rf, ctx) {
    if (rf & 1) {
        const _r23 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 16);
        i0.ɵɵelementStart(1, "a", 12);
        i0.ɵɵlistener("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
        i0.ɵɵelementContainer(2, 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        const _r7 = i0.ɵɵreference(9);
        i0.ɵɵclassProp("disabled", ctx_r3.noNext() || ctx_r3.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
    }
}
function PaginationComponent_li_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r25 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 17);
        i0.ɵɵelementStart(1, "a", 12);
        i0.ɵɵlistener("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
        i0.ɵɵelementContainer(2, 13);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r4 = i0.ɵɵnextContext();
        const _r13 = i0.ɵɵreference(15);
        i0.ɵɵclassProp("disabled", ctx_r4.noNext() || ctx_r4.disabled);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
    }
}
function PaginationComponent_ng_template_6_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtext(0);
    }
    if (rf & 2) {
        const page_r26 = ctx.$implicit;
        i0.ɵɵtextInterpolate(page_r26.text);
    }
}
function PaginationComponent_ng_template_8_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtext(0);
    }
    if (rf & 2) {
        const ctx_r8 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate(ctx_r8.getText("next"));
    }
}
function PaginationComponent_ng_template_10_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtext(0);
    }
    if (rf & 2) {
        const ctx_r10 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate(ctx_r10.getText("previous"));
    }
}
function PaginationComponent_ng_template_12_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtext(0);
    }
    if (rf & 2) {
        const ctx_r12 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate(ctx_r12.getText("first"));
    }
}
function PaginationComponent_ng_template_14_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵtext(0);
    }
    if (rf & 2) {
        const ctx_r14 = i0.ɵɵnextContext();
        i0.ɵɵtextInterpolate(ctx_r14.getText("last"));
    }
}
const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
};
class PaginationComponent {
    constructor(elementRef, paginationConfig, changeDetection) {
        this.elementRef = elementRef;
        this.changeDetection = changeDetection;
        /** if `true` aligns each link to the sides of pager */
        this.align = true;
        /** if false first and last buttons will be hidden */
        this.boundaryLinks = false;
        /** if false previous and next buttons will be hidden */
        this.directionLinks = true;
        /** if true current page will in the middle of pages list */
        this.rotate = true;
        // css
        /** add class to <code><li\></code> */
        this.pageBtnClass = '';
        /** if true pagination component will be disabled */
        this.disabled = false;
        /** fired when total pages count changes, $event:number equals to total pages count */
        this.numPages = new EventEmitter();
        /** fired when page was changed, $event:{page, itemsPerPage} equals to object
         * with current page index and number of items per page
         */
        this.pageChanged = new EventEmitter();
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.classMap = '';
        this.inited = false;
        this._itemsPerPage = 10;
        this._totalItems = 0;
        this._totalPages = 0;
        this._page = 1;
        this.elementRef = elementRef;
        if (!this.config) {
            this.configureOptions(paginationConfig.main);
        }
    }
    /** maximum number of items per page. If value less than 1 will display all items on one page */
    get itemsPerPage() {
        return this._itemsPerPage;
    }
    set itemsPerPage(v) {
        this._itemsPerPage = v;
        this.totalPages = this.calculateTotalPages();
    }
    /** total number of items in all pages */
    get totalItems() {
        return this._totalItems;
    }
    set totalItems(v) {
        this._totalItems = v;
        this.totalPages = this.calculateTotalPages();
    }
    get totalPages() {
        return this._totalPages;
    }
    set totalPages(v) {
        this._totalPages = v;
        this.numPages.emit(v);
        if (this.inited) {
            this.selectPage(this.page);
        }
    }
    get page() {
        return this._page;
    }
    set page(value) {
        const _previous = this._page;
        this._page = value > this.totalPages ? this.totalPages : value || 1;
        this.changeDetection.markForCheck();
        if (_previous === this._page || typeof _previous === 'undefined') {
            return;
        }
        this.pageChanged.emit({
            page: this._page,
            itemsPerPage: this.itemsPerPage
        });
    }
    configureOptions(config) {
        this.config = Object.assign({}, config);
    }
    ngOnInit() {
        var _a, _b, _c, _d, _e, _f;
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = ((_a = this.config) === null || _a === void 0 ? void 0 : _a.maxSize) || 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = !!((_b = this.config) === null || _b === void 0 ? void 0 : _b.rotate);
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = !!((_c = this.config) === null || _c === void 0 ? void 0 : _c.boundaryLinks);
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = !!((_d = this.config) === null || _d === void 0 ? void 0 : _d.directionLinks);
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = ((_e = this.config) === null || _e === void 0 ? void 0 : _e.pageBtnClass) || '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = ((_f = this.config) === null || _f === void 0 ? void 0 : _f.itemsPerPage) || 0;
        }
        this.totalPages = this.calculateTotalPages();
        // this class
        this.pages = this.getPages(this.page, this.totalPages);
        this.inited = true;
    }
    writeValue(value) {
        this.page = value;
        this.pages = this.getPages(this.page, this.totalPages);
    }
    getText(key) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return this[`${key}Text`] || this.config[`${key}Text`];
    }
    noPrevious() {
        return this.page === 1;
    }
    noNext() {
        return this.page === this.totalPages;
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    selectPage(page, event) {
        if (event) {
            event.preventDefault();
        }
        if (!this.disabled) {
            if (event && event.target) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const target = event.target;
                target.blur();
            }
            this.writeValue(page);
            this.onChange(this.page);
        }
    }
    // Create page object used in template
    makePage(num, text, active) {
        return { text, number: num, active };
    }
    getPages(currentPage, totalPages) {
        const pages = [];
        // Default page limits
        let startPage = 1;
        let endPage = totalPages;
        const isMaxSized = typeof this.maxSize !== 'undefined' && this.maxSize < totalPages;
        // recompute if maxSize
        if (isMaxSized && this.maxSize) {
            if (this.rotate) {
                // Current page is displayed in the middle of the visible ones
                startPage = Math.max(currentPage - Math.floor(this.maxSize / 2), 1);
                endPage = startPage + this.maxSize - 1;
                // Adjust if limit is exceeded
                if (endPage > totalPages) {
                    endPage = totalPages;
                    startPage = endPage - this.maxSize + 1;
                }
            }
            else {
                // Visible pages are paginated with maxSize
                startPage =
                    (Math.ceil(currentPage / this.maxSize) - 1) * this.maxSize + 1;
                // Adjust last page if limit is exceeded
                endPage = Math.min(startPage + this.maxSize - 1, totalPages);
            }
        }
        // Add page number links
        for (let num = startPage; num <= endPage; num++) {
            const page = this.makePage(num, num.toString(), num === currentPage);
            pages.push(page);
        }
        // Add links to move between page sets
        if (isMaxSized && !this.rotate) {
            if (startPage > 1) {
                const previousPageSet = this.makePage(startPage - 1, '...', false);
                pages.unshift(previousPageSet);
            }
            if (endPage < totalPages) {
                const nextPageSet = this.makePage(endPage + 1, '...', false);
                pages.push(nextPageSet);
            }
        }
        return pages;
    }
    // base class
    calculateTotalPages() {
        const totalPages = this.itemsPerPage < 1
            ? 1
            : Math.ceil(this.totalItems / this.itemsPerPage);
        return Math.max(totalPages || 0, 1);
    }
}
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(PaginationConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PaginationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["pagination"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [i0.ɵɵProvidersFeature([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "ul", 0);
            i0.ɵɵtemplate(1, PaginationComponent_li_1_Template, 3, 7, "li", 1);
            i0.ɵɵtemplate(2, PaginationComponent_li_2_Template, 3, 7, "li", 2);
            i0.ɵɵtemplate(3, PaginationComponent_li_3_Template, 3, 10, "li", 3);
            i0.ɵɵtemplate(4, PaginationComponent_li_4_Template, 3, 7, "li", 4);
            i0.ɵɵtemplate(5, PaginationComponent_li_5_Template, 3, 7, "li", 5);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(6, PaginationComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(8, PaginationComponent_ng_template_8_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(10, PaginationComponent_ng_template_10_Template, 1, 1, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(12, PaginationComponent_ng_template_12_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor);
            i0.ɵɵtemplate(14, PaginationComponent_ng_template_14_Template, 1, 1, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor);
        }
        if (rf & 2) {
            i0.ɵɵproperty("ngClass", ctx.classMap);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.boundaryLinks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.directionLinks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.pages);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.directionLinks);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.boundaryLinks);
        }
    }, directives: [i2.NgClass, i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
            type: Component,
            args: [{ selector: 'pagination', providers: [PAGINATION_CONTROL_VALUE_ACCESSOR], template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\r\n  <li class=\"pagination-first page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noPrevious() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"pagination-prev page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noPrevious() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li *ngFor=\"let pg of pages\"\r\n      [class.active]=\"pg.active\"\r\n      [class.disabled]=\"disabled && !pg.active\"\r\n      class=\"pagination-page page-item\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"pagination-next page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noNext() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"pagination-last page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noNext() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\r\n\r\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\r\n\r\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\r\n\r\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\r\n\r\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\r\n" }]
        }], function () { return [{ type: i0.ElementRef }, { type: PaginationConfig }, { type: i0.ChangeDetectorRef }]; }, { align: [{
                type: Input
            }], maxSize: [{
                type: Input
            }], boundaryLinks: [{
                type: Input
            }], directionLinks: [{
                type: Input
            }], firstText: [{
                type: Input
            }], previousText: [{
                type: Input
            }], nextText: [{
                type: Input
            }], lastText: [{
                type: Input
            }], rotate: [{
                type: Input
            }], pageBtnClass: [{
                type: Input
            }], disabled: [{
                type: Input
            }], customPageTemplate: [{
                type: Input
            }], customNextTemplate: [{
                type: Input
            }], customPreviousTemplate: [{
                type: Input
            }], customFirstTemplate: [{
                type: Input
            }], customLastTemplate: [{
                type: Input
            }], numPages: [{
                type: Output
            }], pageChanged: [{
                type: Output
            }], itemsPerPage: [{
                type: Input
            }], totalItems: [{
                type: Input
            }] });
})();

class PaginationModule {
    static forRoot() {
        return { ngModule: PaginationModule, providers: [] };
    }
}
PaginationModule.ɵfac = function PaginationModule_Factory(t) { return new (t || PaginationModule)(); };
PaginationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PaginationModule });
PaginationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [PagerComponent, PaginationComponent],
                    exports: [PagerComponent, PaginationComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginationModule, { declarations: [PagerComponent, PaginationComponent], imports: [CommonModule], exports: [PagerComponent, PaginationComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { PagerComponent, PaginationComponent, PaginationConfig, PaginationModule };
//# sourceMappingURL=ngx-bootstrap-pagination.mjs.map
