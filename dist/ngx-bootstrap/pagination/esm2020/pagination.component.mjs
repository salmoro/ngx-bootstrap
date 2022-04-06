import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
import * as i0 from "@angular/core";
import * as i1 from "./pagination.config";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { disabled: a0, currentPage: a1 }; };
function PaginationComponent_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 11);
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function PaginationComponent_li_1_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.selectPage(1, $event); });
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    const _r11 = i0.ɵɵreference(13);
    i0.ɵɵclassProp("disabled", ctx_r0.noPrevious() || ctx_r0.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r0.customFirstTemplate || _r11)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r0.noPrevious() || ctx_r0.disabled, ctx_r0.page));
} }
function PaginationComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 14);
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function PaginationComponent_li_2_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.selectPage(ctx_r17.page - 1, $event); });
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const _r9 = i0.ɵɵreference(11);
    i0.ɵɵclassProp("disabled", ctx_r1.noPrevious() || ctx_r1.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.customPreviousTemplate || _r9)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r1.noPrevious() || ctx_r1.disabled, ctx_r1.page));
} }
const _c1 = function (a0, a1, a2) { return { disabled: a0, $implicit: a1, currentPage: a2 }; };
function PaginationComponent_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 15);
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function PaginationComponent_li_3_Template_a_click_1_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r21); const pg_r19 = restoredCtx.$implicit; const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.selectPage(pg_r19.number, $event); });
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pg_r19 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    const _r5 = i0.ɵɵreference(7);
    i0.ɵɵclassProp("active", pg_r19.active)("disabled", ctx_r2.disabled && !pg_r19.active);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r2.customPageTemplate || _r5)("ngTemplateOutletContext", i0.ɵɵpureFunction3(6, _c1, ctx_r2.disabled, pg_r19, ctx_r2.page));
} }
function PaginationComponent_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 16);
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function PaginationComponent_li_4_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.selectPage(ctx_r22.page + 1, $event); });
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r7 = i0.ɵɵreference(9);
    i0.ɵɵclassProp("disabled", ctx_r3.noNext() || ctx_r3.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r3.customNextTemplate || _r7)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r3.noNext() || ctx_r3.disabled, ctx_r3.page));
} }
function PaginationComponent_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 17);
    i0.ɵɵelementStart(1, "a", 12);
    i0.ɵɵlistener("click", function PaginationComponent_li_5_Template_a_click_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.selectPage(ctx_r24.totalPages, $event); });
    i0.ɵɵelementContainer(2, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const _r13 = i0.ɵɵreference(15);
    i0.ɵɵclassProp("disabled", ctx_r4.noNext() || ctx_r4.disabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r4.customLastTemplate || _r13)("ngTemplateOutletContext", i0.ɵɵpureFunction2(4, _c0, ctx_r4.noNext() || ctx_r4.disabled, ctx_r4.page));
} }
function PaginationComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const page_r26 = ctx.$implicit;
    i0.ɵɵtextInterpolate(page_r26.text);
} }
function PaginationComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(ctx_r8.getText("next"));
} }
function PaginationComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(ctx_r10.getText("previous"));
} }
function PaginationComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(ctx_r12.getText("first"));
} }
function PaginationComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    i0.ɵɵtextInterpolate(ctx_r14.getText("last"));
} }
export const PAGINATION_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PaginationComponent),
    multi: true
};
export class PaginationComponent {
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
        if (typeof window !== 'undefined') {
            this.classMap = this.elementRef.nativeElement.getAttribute('class') || '';
        }
        // watch for maxSize
        if (typeof this.maxSize === 'undefined') {
            this.maxSize = this.config?.maxSize || 0;
        }
        if (typeof this.rotate === 'undefined') {
            this.rotate = !!this.config?.rotate;
        }
        if (typeof this.boundaryLinks === 'undefined') {
            this.boundaryLinks = !!this.config?.boundaryLinks;
        }
        if (typeof this.directionLinks === 'undefined') {
            this.directionLinks = !!this.config?.directionLinks;
        }
        if (typeof this.pageBtnClass === 'undefined') {
            this.pageBtnClass = this.config?.pageBtnClass || '';
        }
        // base class
        if (typeof this.itemsPerPage === 'undefined') {
            this.itemsPerPage = this.config?.itemsPerPage || 0;
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
PaginationComponent.ɵfac = function PaginationComponent_Factory(t) { return new (t || PaginationComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PaginationConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PaginationComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PaginationComponent, selectors: [["pagination"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", customPageTemplate: "customPageTemplate", customNextTemplate: "customNextTemplate", customPreviousTemplate: "customPreviousTemplate", customFirstTemplate: "customFirstTemplate", customLastTemplate: "customLastTemplate", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [i0.ɵɵProvidersFeature([PAGINATION_CONTROL_VALUE_ACCESSOR])], decls: 16, vars: 6, consts: [[1, "pagination", 3, "ngClass"], ["class", "pagination-first page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-prev page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-page page-item", 3, "active", "disabled", 4, "ngFor", "ngForOf"], ["class", "pagination-next page-item", 3, "disabled", 4, "ngIf"], ["class", "pagination-last page-item", 3, "disabled", 4, "ngIf"], ["defaultPageTemplate", ""], ["defaultNextTemplate", ""], ["defaultPreviousTemplate", ""], ["defaultFirstTemplate", ""], ["defaultLastTemplate", ""], [1, "pagination-first", "page-item"], ["href", "", 1, "page-link", 3, "click"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "pagination-prev", "page-item"], [1, "pagination-page", "page-item"], [1, "pagination-next", "page-item"], [1, "pagination-last", "page-item"]], template: function PaginationComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
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
    } }, directives: [i2.NgClass, i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationComponent, [{
        type: Component,
        args: [{ selector: 'pagination', providers: [PAGINATION_CONTROL_VALUE_ACCESSOR], template: "<ul class=\"pagination\" [ngClass]=\"classMap\">\r\n  <li class=\"pagination-first page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noPrevious() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(1, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customFirstTemplate || defaultFirstTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"pagination-prev page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noPrevious() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page - 1, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customPreviousTemplate || defaultPreviousTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noPrevious() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li *ngFor=\"let pg of pages\"\r\n      [class.active]=\"pg.active\"\r\n      [class.disabled]=\"disabled && !pg.active\"\r\n      class=\"pagination-page page-item\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(pg.number, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customPageTemplate || defaultPageTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: disabled, $implicit: pg, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"pagination-next page-item\"\r\n      *ngIf=\"directionLinks\"\r\n      [class.disabled]=\"noNext() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(page + 1, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customNextTemplate || defaultNextTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n\r\n  <li class=\"pagination-last page-item\"\r\n      *ngIf=\"boundaryLinks\"\r\n      [class.disabled]=\"noNext() || disabled\">\r\n    <a class=\"page-link\" href (click)=\"selectPage(totalPages, $event)\">\r\n      <ng-container [ngTemplateOutlet]=\"customLastTemplate || defaultLastTemplate\"\r\n                   [ngTemplateOutletContext]=\"{disabled: noNext() || disabled, currentPage: page}\">\r\n      </ng-container>\r\n    </a>\r\n  </li>\r\n</ul>\r\n\r\n<ng-template #defaultPageTemplate let-page>{{ page.text }}</ng-template>\r\n\r\n<ng-template #defaultNextTemplate>{{ getText('next') }}</ng-template>\r\n\r\n<ng-template #defaultPreviousTemplate>{{ getText('previous') }}</ng-template>\r\n\r\n<ng-template #defaultFirstTemplate>{{ getText('first') }}</ng-template>\r\n\r\n<ng-template #defaultLastTemplate>{{ getText('last') }}</ng-template>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i1.PaginationConfig }, { type: i0.ChangeDetectorRef }]; }, { align: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9wYWdpbmF0aW9uL3BhZ2luYXRpb24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFFTixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7Ozs7O0lDZHJELDhCQUVnRDtJQUM5Qyw2QkFBMEQ7SUFBaEMsa0tBQVMsbUJBQVcsQ0FBQyxTQUFTLElBQUM7SUFDdkQsNEJBRWU7SUFDakIsaUJBQUk7SUFDTixpQkFBSzs7OztJQU5ELGtFQUEyQztJQUU3QixlQUFnRTtJQUFoRSxxRUFBZ0UsNEdBQUE7Ozs7SUFNbEYsOEJBRWdEO0lBQzlDLDZCQUFpRTtJQUF2QyxrS0FBUyxrQ0FBa0IsQ0FBQyxTQUFTLElBQUM7SUFDOUQsNEJBRWU7SUFDakIsaUJBQUk7SUFDTixpQkFBSzs7OztJQU5ELGtFQUEyQztJQUU3QixlQUFzRTtJQUF0RSx1RUFBc0UsNEdBQUE7Ozs7O0lBTXhGLDhCQUdzQztJQUNwQyw2QkFBa0U7SUFBeEMsNE5BQVMseUNBQTZCLElBQUM7SUFDL0QsNEJBRWU7SUFDakIsaUJBQUk7SUFDTixpQkFBSzs7Ozs7SUFSRCx1Q0FBMEIsK0NBQUE7SUFJWixlQUE4RDtJQUE5RCxtRUFBOEQsNkZBQUE7Ozs7SUFNaEYsOEJBRTRDO0lBQzFDLDZCQUFpRTtJQUF2QyxrS0FBUyxrQ0FBa0IsQ0FBQyxTQUFTLElB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S0FBSztZQUVHLG1CQUFtQjtrQkFBM0IsS0FBSztZQUVHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUdJLFFBQVE7a0JBQWpCLE1BQU07WUFJRyxXQUFXO2tCQUFwQixNQUFNO1lBc0JILFlBQVk7a0JBRGYsS0FBSztZQWNGLFVBQVU7a0JBRGIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIE91dHB1dCxcclxuICBQcm92aWRlcixcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbmZpZ01vZGVsLCBQYWdlc01vZGVsLCBQYWdpbmF0aW9uTGlua0NvbnRleHQsIFBhZ2luYXRpb25OdW1iZXJMaW5rQ29udGV4dCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGFnZUNoYW5nZWRFdmVudCB7XHJcbiAgaXRlbXNQZXJQYWdlOiBudW1iZXI7XHJcbiAgcGFnZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUEFHSU5BVElPTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdpbmF0aW9uQ29tcG9uZW50KSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdwYWdpbmF0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcGFnaW5hdGlvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbUEFHSU5BVElPTl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG4gIGNvbmZpZz86IFBhcnRpYWw8Q29uZmlnTW9kZWw+O1xyXG4gIC8qKiBpZiBgdHJ1ZWAgYWxpZ25zIGVhY2ggbGluayB0byB0aGUgc2lkZXMgb2YgcGFnZXIgKi9cclxuICBASW5wdXQoKSBhbGlnbiA9IHRydWU7XHJcbiAgLyoqIGxpbWl0IG51bWJlciBmb3IgcGFnZSBsaW5rcyBpbiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIG1heFNpemU/OiBudW1iZXI7XHJcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzID0gZmFsc2U7XHJcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rcyA9IHRydWU7XHJcbiAgLy8gbGFiZWxzXHJcbiAgLyoqIGZpcnN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgZmlyc3RUZXh0Pzogc3RyaW5nO1xyXG4gIC8qKiBwcmV2aW91cyBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIHByZXZpb3VzVGV4dD86IHN0cmluZztcclxuICAvKiogbmV4dCBidXR0b24gdGV4dCAqL1xyXG4gIEBJbnB1dCgpIG5leHRUZXh0Pzogc3RyaW5nO1xyXG4gIC8qKiBsYXN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbGFzdFRleHQ/OiBzdHJpbmc7XHJcbiAgLyoqIGlmIHRydWUgY3VycmVudCBwYWdlIHdpbGwgaW4gdGhlIG1pZGRsZSBvZiBwYWdlcyBsaXN0ICovXHJcbiAgQElucHV0KCkgcm90YXRlID0gdHJ1ZTtcclxuICAvLyBjc3NcclxuICAvKiogYWRkIGNsYXNzIHRvIDxjb2RlPjxsaVxcPjwvY29kZT4gKi9cclxuICBASW5wdXQoKSBwYWdlQnRuQ2xhc3MgPSAnJztcclxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBwYWdlIGxpbmsgKi9cclxuICBASW5wdXQoKSBjdXN0b21QYWdlVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTnVtYmVyTGlua0NvbnRleHQ+O1xyXG4gIC8qKiBjdXN0b20gdGVtcGxhdGUgZm9yIG5leHQgbGluayAqL1xyXG4gIEBJbnB1dCgpIGN1c3RvbU5leHRUZW1wbGF0ZT86IFRlbXBsYXRlUmVmPFBhZ2luYXRpb25MaW5rQ29udGV4dD47XHJcbiAgLyoqIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgcHJldmlvdXMgbGluayAqL1xyXG4gIEBJbnB1dCgpIGN1c3RvbVByZXZpb3VzVGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTGlua0NvbnRleHQ+O1xyXG4gIC8qKiBjdXN0b20gdGVtcGxhdGUgZm9yIGZpcnN0IGxpbmsgKi9cclxuICBASW5wdXQoKSBjdXN0b21GaXJzdFRlbXBsYXRlPzogVGVtcGxhdGVSZWY8UGFnaW5hdGlvbkxpbmtDb250ZXh0PjtcclxuICAvKiogY3VzdG9tIHRlbXBsYXRlIGZvciBsYXN0IGxpbmsgKi9cclxuICBASW5wdXQoKSBjdXN0b21MYXN0VGVtcGxhdGU/OiBUZW1wbGF0ZVJlZjxQYWdpbmF0aW9uTGlua0NvbnRleHQ+O1xyXG5cclxuICAvKiogZmlyZWQgd2hlbiB0b3RhbCBwYWdlcyBjb3VudCBjaGFuZ2VzLCAkZXZlbnQ6bnVtYmVyIGVxdWFscyB0byB0b3RhbCBwYWdlcyBjb3VudCAqL1xyXG4gIEBPdXRwdXQoKSBudW1QYWdlcyA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHBhZ2Ugd2FzIGNoYW5nZWQsICRldmVudDp7cGFnZSwgaXRlbXNQZXJQYWdlfSBlcXVhbHMgdG8gb2JqZWN0XHJcbiAgICogd2l0aCBjdXJyZW50IHBhZ2UgaW5kZXggYW5kIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZVxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgY2xhc3NNYXAgPSAnJztcclxuICBwYWdlcz86IFBhZ2VzTW9kZWxbXTtcclxuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcGFnaW5hdGlvbkNvbmZpZzogUGFnaW5hdGlvbkNvbmZpZyxcclxuICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICkge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKHBhZ2luYXRpb25Db25maWcubWFpbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX2l0ZW1zUGVyUGFnZSA9IDEwO1xyXG5cclxuICAvKiogbWF4aW11bSBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2UuIElmIHZhbHVlIGxlc3MgdGhhbiAxIHdpbGwgZGlzcGxheSBhbGwgaXRlbXMgb24gb25lIHBhZ2UgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpdGVtc1BlclBhZ2UoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9pdGVtc1BlclBhZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgaXRlbXNQZXJQYWdlKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5faXRlbXNQZXJQYWdlID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF90b3RhbEl0ZW1zID0gMDtcclxuXHJcbiAgLyoqIHRvdGFsIG51bWJlciBvZiBpdGVtcyBpbiBhbGwgcGFnZXMgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCB0b3RhbEl0ZW1zKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxJdGVtcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbEl0ZW1zKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxJdGVtcyA9IHY7XHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfdG90YWxQYWdlcyA9IDA7XHJcblxyXG4gIGdldCB0b3RhbFBhZ2VzKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fdG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHNldCB0b3RhbFBhZ2VzKHY6IG51bWJlcikge1xyXG4gICAgdGhpcy5fdG90YWxQYWdlcyA9IHY7XHJcbiAgICB0aGlzLm51bVBhZ2VzLmVtaXQodik7XHJcbiAgICBpZiAodGhpcy5pbml0ZWQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RQYWdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3BhZ2UgPSAxO1xyXG5cclxuICBnZXQgcGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX3BhZ2U7XHJcbiAgfVxyXG5cclxuICBzZXQgcGFnZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBfcHJldmlvdXMgPSB0aGlzLl9wYWdlO1xyXG4gICAgdGhpcy5fcGFnZSA9IHZhbHVlID4gdGhpcy50b3RhbFBhZ2VzID8gdGhpcy50b3RhbFBhZ2VzIDogdmFsdWUgfHwgMTtcclxuICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uLm1hcmtGb3JDaGVjaygpO1xyXG5cclxuICAgIGlmIChfcHJldmlvdXMgPT09IHRoaXMuX3BhZ2UgfHwgdHlwZW9mIF9wcmV2aW91cyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGFnZUNoYW5nZWQuZW1pdCh7XHJcbiAgICAgIHBhZ2U6IHRoaXMuX3BhZ2UsXHJcbiAgICAgIGl0ZW1zUGVyUGFnZTogdGhpcy5pdGVtc1BlclBhZ2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY29uZmlndXJlT3B0aW9ucyhjb25maWc6IFBhcnRpYWw8Q29uZmlnTW9kZWw+KTogdm9pZCB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmNsYXNzTWFwID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHdhdGNoIGZvciBtYXhTaXplXHJcbiAgICBpZiAodHlwZW9mIHRoaXMubWF4U2l6ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5tYXhTaXplID0gdGhpcy5jb25maWc/Lm1heFNpemUgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMucm90YXRlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLnJvdGF0ZSA9ICEhdGhpcy5jb25maWc/LnJvdGF0ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuYm91bmRhcnlMaW5rcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5ib3VuZGFyeUxpbmtzID0gISF0aGlzLmNvbmZpZz8uYm91bmRhcnlMaW5rcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmRpcmVjdGlvbkxpbmtzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbkxpbmtzID0gISF0aGlzLmNvbmZpZz8uZGlyZWN0aW9uTGlua3M7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnBhZ2VCdG5DbGFzcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5wYWdlQnRuQ2xhc3MgPSB0aGlzLmNvbmZpZz8ucGFnZUJ0bkNsYXNzIHx8ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGJhc2UgY2xhc3NcclxuICAgIGlmICh0eXBlb2YgdGhpcy5pdGVtc1BlclBhZ2UgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuaXRlbXNQZXJQYWdlID0gdGhpcy5jb25maWc/Lml0ZW1zUGVyUGFnZSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gICAgLy8gdGhpcyBjbGFzc1xyXG4gICAgdGhpcy5wYWdlcyA9IHRoaXMuZ2V0UGFnZXModGhpcy5wYWdlLCB0aGlzLnRvdGFsUGFnZXMpO1xyXG4gICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhZ2UgPSB2YWx1ZTtcclxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcclxuICB9XHJcblxyXG4gIGdldFRleHQoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgIHJldHVybiAodGhpcyBhcyBhbnkpW2Ake2tleX1UZXh0YF0gfHwgKHRoaXMgYXMgYW55KS5jb25maWdbYCR7a2V5fVRleHRgXTtcclxuICB9XHJcblxyXG4gIG5vUHJldmlvdXMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wYWdlID09PSAxO1xyXG4gIH1cclxuXHJcbiAgbm9OZXh0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gdGhpcy50b3RhbFBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZWxlY3RQYWdlKHBhZ2U6IG51bWJlciwgZXZlbnQ/OiBFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGV2ZW50KSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgIGlmIChldmVudCAmJiBldmVudC50YXJnZXQpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgIGNvbnN0IHRhcmdldDogYW55ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIHRhcmdldC5ibHVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53cml0ZVZhbHVlKHBhZ2UpO1xyXG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMucGFnZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDcmVhdGUgcGFnZSBvYmplY3QgdXNlZCBpbiB0ZW1wbGF0ZVxyXG4gIHByb3RlY3RlZCBtYWtlUGFnZShcclxuICAgIG51bTogbnVtYmVyLFxyXG4gICAgdGV4dDogc3RyaW5nLFxyXG4gICAgYWN0aXZlOiBib29sZWFuXHJcbiAgKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XHJcbiAgICByZXR1cm4geyB0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcclxuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXHJcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcclxuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xyXG5cclxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXHJcbiAgICBpZiAoaXNNYXhTaXplZCAmJiB0aGlzLm1heFNpemUpIHtcclxuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XHJcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcclxuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xyXG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcclxuICAgICAgICBzdGFydFBhZ2UgPVxyXG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcclxuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xyXG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXHJcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcclxuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICAvLyBiYXNlIGNsYXNzXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxyXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcclxuICAgICAgICA/IDFcclxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsIjx1bCBjbGFzcz1cInBhZ2luYXRpb25cIiBbbmdDbGFzc109XCJjbGFzc01hcFwiPlxyXG4gIDxsaSBjbGFzcz1cInBhZ2luYXRpb24tZmlyc3QgcGFnZS1pdGVtXCJcclxuICAgICAgKm5nSWY9XCJib3VuZGFyeUxpbmtzXCJcclxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIm5vUHJldmlvdXMoKSB8fCBkaXNhYmxlZFwiPlxyXG4gICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmIChjbGljayk9XCJzZWxlY3RQYWdlKDEsICRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21GaXJzdFRlbXBsYXRlIHx8IGRlZmF1bHRGaXJzdFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGlzYWJsZWQ6IG5vUHJldmlvdXMoKSB8fCBkaXNhYmxlZCwgY3VycmVudFBhZ2U6IHBhZ2V9XCI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9hPlxyXG4gIDwvbGk+XHJcblxyXG4gIDxsaSBjbGFzcz1cInBhZ2luYXRpb24tcHJldiBwYWdlLWl0ZW1cIlxyXG4gICAgICAqbmdJZj1cImRpcmVjdGlvbkxpbmtzXCJcclxuICAgICAgW2NsYXNzLmRpc2FibGVkXT1cIm5vUHJldmlvdXMoKSB8fCBkaXNhYmxlZFwiPlxyXG4gICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UgLSAxLCAkZXZlbnQpXCI+XHJcbiAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiY3VzdG9tUHJldmlvdXNUZW1wbGF0ZSB8fCBkZWZhdWx0UHJldmlvdXNUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2Rpc2FibGVkOiBub1ByZXZpb3VzKCkgfHwgZGlzYWJsZWQsIGN1cnJlbnRQYWdlOiBwYWdlfVwiPlxyXG4gICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvYT5cclxuICA8L2xpPlxyXG5cclxuICA8bGkgKm5nRm9yPVwibGV0IHBnIG9mIHBhZ2VzXCJcclxuICAgICAgW2NsYXNzLmFjdGl2ZV09XCJwZy5hY3RpdmVcIlxyXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiZGlzYWJsZWQgJiYgIXBnLmFjdGl2ZVwiXHJcbiAgICAgIGNsYXNzPVwicGFnaW5hdGlvbi1wYWdlIHBhZ2UtaXRlbVwiPlxyXG4gICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmIChjbGljayk9XCJzZWxlY3RQYWdlKHBnLm51bWJlciwgJGV2ZW50KVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbVBhZ2VUZW1wbGF0ZSB8fCBkZWZhdWx0UGFnZVRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGlzYWJsZWQ6IGRpc2FibGVkLCAkaW1wbGljaXQ6IHBnLCBjdXJyZW50UGFnZTogcGFnZX1cIj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2E+XHJcbiAgPC9saT5cclxuXHJcbiAgPGxpIGNsYXNzPVwicGFnaW5hdGlvbi1uZXh0IHBhZ2UtaXRlbVwiXHJcbiAgICAgICpuZ0lmPVwiZGlyZWN0aW9uTGlua3NcIlxyXG4gICAgICBbY2xhc3MuZGlzYWJsZWRdPVwibm9OZXh0KCkgfHwgZGlzYWJsZWRcIj5cclxuICAgIDxhIGNsYXNzPVwicGFnZS1saW5rXCIgaHJlZiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlICsgMSwgJGV2ZW50KVwiPlxyXG4gICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImN1c3RvbU5leHRUZW1wbGF0ZSB8fCBkZWZhdWx0TmV4dFRlbXBsYXRlXCJcclxuICAgICAgICAgICAgICAgICAgIFtuZ1RlbXBsYXRlT3V0bGV0Q29udGV4dF09XCJ7ZGlzYWJsZWQ6IG5vTmV4dCgpIHx8IGRpc2FibGVkLCBjdXJyZW50UGFnZTogcGFnZX1cIj5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2E+XHJcbiAgPC9saT5cclxuXHJcbiAgPGxpIGNsYXNzPVwicGFnaW5hdGlvbi1sYXN0IHBhZ2UtaXRlbVwiXHJcbiAgICAgICpuZ0lmPVwiYm91bmRhcnlMaW5rc1wiXHJcbiAgICAgIFtjbGFzcy5kaXNhYmxlZF09XCJub05leHQoKSB8fCBkaXNhYmxlZFwiPlxyXG4gICAgPGEgY2xhc3M9XCJwYWdlLWxpbmtcIiBocmVmIChjbGljayk9XCJzZWxlY3RQYWdlKHRvdGFsUGFnZXMsICRldmVudClcIj5cclxuICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJjdXN0b21MYXN0VGVtcGxhdGUgfHwgZGVmYXVsdExhc3RUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwie2Rpc2FibGVkOiBub05leHQoKSB8fCBkaXNhYmxlZCwgY3VycmVudFBhZ2U6IHBhZ2V9XCI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9hPlxyXG4gIDwvbGk+XHJcbjwvdWw+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRQYWdlVGVtcGxhdGUgbGV0LXBhZ2U+e3sgcGFnZS50ZXh0IH19PC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdE5leHRUZW1wbGF0ZT57eyBnZXRUZXh0KCduZXh0JykgfX08L25nLXRlbXBsYXRlPlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZhdWx0UHJldmlvdXNUZW1wbGF0ZT57eyBnZXRUZXh0KCdwcmV2aW91cycpIH19PC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjZGVmYXVsdEZpcnN0VGVtcGxhdGU+e3sgZ2V0VGV4dCgnZmlyc3QnKSB9fTwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2RlZmF1bHRMYXN0VGVtcGxhdGU+e3sgZ2V0VGV4dCgnbGFzdCcpIH19PC9uZy10ZW1wbGF0ZT5cclxuIl19