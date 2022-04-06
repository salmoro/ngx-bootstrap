import { ChangeDetectorRef, Component, ElementRef, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { PaginationConfig } from './pagination.config';
import * as i0 from "@angular/core";
import * as i1 from "./pagination.config";
import * as i2 from "@angular/common";
const _c0 = function (a0, a1) { return { "pull-left": a0, "float-left": a1 }; };
const _c1 = function (a0, a1) { return { "pull-right": a0, "float-right": a1 }; };
export const PAGER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => PagerComponent),
    multi: true
};
export class PagerComponent {
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
PagerComponent.ɵfac = function PagerComponent_Factory(t) { return new (t || PagerComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.PaginationConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
PagerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PagerComponent, selectors: [["pager"]], inputs: { align: "align", maxSize: "maxSize", boundaryLinks: "boundaryLinks", directionLinks: "directionLinks", firstText: "firstText", previousText: "previousText", nextText: "nextText", lastText: "lastText", rotate: "rotate", pageBtnClass: "pageBtnClass", disabled: "disabled", itemsPerPage: "itemsPerPage", totalItems: "totalItems" }, outputs: { numPages: "numPages", pageChanged: "pageChanged" }, features: [i0.ɵɵProvidersFeature([PAGER_CONTROL_VALUE_ACCESSOR])], decls: 7, vars: 24, consts: [[1, "pager"], [3, "ngClass"], ["href", "", 3, "click"]], template: function PagerComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.pageBtnClass);
        i0.ɵɵclassProp("disabled", ctx.noPrevious())("previous", ctx.align);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(18, _c0, ctx.align, ctx.align));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.getText("previous"));
        i0.ɵɵadvance(1);
        i0.ɵɵclassMap(ctx.pageBtnClass);
        i0.ɵɵclassProp("disabled", ctx.noNext())("next", ctx.align);
        i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(21, _c1, ctx.align, ctx.align));
        i0.ɵɵadvance(2);
        i0.ɵɵtextInterpolate(ctx.getText("next"));
    } }, directives: [i2.NgClass], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PagerComponent, [{
        type: Component,
        args: [{ selector: 'pager', providers: [PAGER_CONTROL_VALUE_ACCESSOR], template: "<ul class=\"pager\">\r\n  <li [class.disabled]=\"noPrevious()\" [class.previous]=\"align\"\r\n      [ngClass]=\"{'pull-left': align, 'float-left': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page - 1, $event)\">{{ getText('previous') }}</a>\r\n  </li>\r\n  <li [class.disabled]=\"noNext()\" [class.next]=\"align\"\r\n      [ngClass]=\"{'pull-right': align, 'float-right': align}\"\r\n      class=\"{{ pageBtnClass }}\">\r\n    <a href (click)=\"selectPage(page + 1, $event)\">{{ getText('next') }}</a>\r\n  </li>\r\n</ul>\r\n" }]
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
        }], numPages: [{
            type: Output
        }], pageChanged: [{
            type: Output
        }], itemsPerPage: [{
            type: Input
        }], totalItems: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BhZ2luYXRpb24vcGFnZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL3BhZ2luYXRpb24vcGFnZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixVQUFVLEVBQ1YsS0FBSyxFQUVMLE1BQU0sRUFFUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLekUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztBQUV2RCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBYTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQzdDLEtBQUssRUFBRSxJQUFJO0NBQ1osQ0FBQztBQU9GLE1BQU0sT0FBTyxjQUFjO0lBeUN6QixZQUFvQixVQUFzQixFQUM5QixnQkFBa0MsRUFDMUIsZUFBa0M7UUFGbEMsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUV0QixvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUF6Q3RELHVEQUF1RDtRQUM5QyxVQUFLLEdBQUcsS0FBSyxDQUFDO1FBR3ZCLHFEQUFxRDtRQUM1QyxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUMvQix3REFBd0Q7UUFDL0MsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDL0IsU0FBUztRQUNULHdCQUF3QjtRQUNmLGNBQVMsR0FBRyxPQUFPLENBQUM7UUFDN0IsMkJBQTJCO1FBQ2xCLGlCQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLHVCQUF1QjtRQUNkLGFBQVEsR0FBRyxRQUFRLENBQUM7UUFDN0IsdUJB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TyxhQUVOLENBQUMsNEJBQTRCLENBQUM7NEhBS2hDLEtBQUs7a0JBQWIsS0FBSztZQUVHLE9BQU87a0JBQWYsS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFFRyxjQUFjO2tCQUF0QixLQUFLO1lBR0csU0FBUztrQkFBakIsS0FBSztZQUVHLFlBQVk7a0JBQXBCLEtBQUs7WUFFRyxRQUFRO2tCQUFoQixLQUFLO1lBRUcsUUFBUTtrQkFBaEIsS0FBSztZQUVHLE1BQU07a0JBQWQsS0FBSztZQUdHLFlBQVk7a0JBQXBCLEtBQUs7WUFHRyxRQUFRO2tCQUFoQixLQUFLO1lBR0ksUUFBUTtrQkFBakIsTUFBTTtZQUtQLFdBQVc7a0JBRFYsTUFBTTtZQXVCSCxZQUFZO2tCQURmLEtBQUs7WUFjRixVQUFVO2tCQURiLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgUHJvdmlkZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgQ29uZmlnTW9kZWwsIFBhZ2VzTW9kZWwgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5pbXBvcnQgeyBQYWdlQ2hhbmdlZEV2ZW50IH0gZnJvbSAnLi9wYWdpbmF0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db25maWcgfSBmcm9tICcuL3BhZ2luYXRpb24uY29uZmlnJztcclxuXHJcbmV4cG9ydCBjb25zdCBQQUdFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBQYWdlckNvbXBvbmVudCksXHJcbiAgbXVsdGk6IHRydWVcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncGFnZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbUEFHRVJfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2VyQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcbiAgY29uZmlnPzogUGFydGlhbDxDb25maWdNb2RlbD47XHJcbiAgLyoqIGlmIGB0cnVlYCBhbGlnbnMgZWFjaCBsaW5rIHRvIHRoZSBzaWRlcyBvZiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIGFsaWduID0gZmFsc2U7XHJcbiAgLyoqIGxpbWl0IG51bWJlciBmb3IgcGFnZSBsaW5rcyBpbiBwYWdlciAqL1xyXG4gIEBJbnB1dCgpIG1heFNpemU/OiBudW1iZXI7XHJcbiAgLyoqIGlmIGZhbHNlIGZpcnN0IGFuZCBsYXN0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBib3VuZGFyeUxpbmtzID0gZmFsc2U7XHJcbiAgLyoqIGlmIGZhbHNlIHByZXZpb3VzIGFuZCBuZXh0IGJ1dHRvbnMgd2lsbCBiZSBoaWRkZW4gKi9cclxuICBASW5wdXQoKSBkaXJlY3Rpb25MaW5rcyA9IHRydWU7XHJcbiAgLy8gbGFiZWxzXHJcbiAgLyoqIGZpcnN0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgZmlyc3RUZXh0ID0gJ0ZpcnN0JztcclxuICAvKiogcHJldmlvdXMgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBwcmV2aW91c1RleHQgPSAnwqsgUHJldmlvdXMnO1xyXG4gIC8qKiBuZXh0IGJ1dHRvbiB0ZXh0ICovXHJcbiAgQElucHV0KCkgbmV4dFRleHQgPSAnTmV4dCDCuyc7XHJcbiAgLyoqIGxhc3QgYnV0dG9uIHRleHQgKi9cclxuICBASW5wdXQoKSBsYXN0VGV4dCA9ICdMYXN0JztcclxuICAvKiogaWYgdHJ1ZSBjdXJyZW50IHBhZ2Ugd2lsbCBpbiB0aGUgbWlkZGxlIG9mIHBhZ2VzIGxpc3QgKi9cclxuICBASW5wdXQoKSByb3RhdGUgPSB0cnVlO1xyXG4gIC8vIGNzc1xyXG4gIC8qKiBhZGQgY2xhc3MgdG8gPGNvZGU+PGxpXFw+PC9jb2RlPiAqL1xyXG4gIEBJbnB1dCgpIHBhZ2VCdG5DbGFzcyA9ICcnO1xyXG5cclxuICAvKiogaWYgdHJ1ZSBwYWdpbmF0aW9uIGNvbXBvbmVudCB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIGZpcmVkIHdoZW4gdG90YWwgcGFnZXMgY291bnQgY2hhbmdlcywgJGV2ZW50Om51bWJlciBlcXVhbHMgdG8gdG90YWwgcGFnZXMgY291bnQgKi9cclxuICBAT3V0cHV0KCkgbnVtUGFnZXMgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuICAvKiogZmlyZWQgd2hlbiBwYWdlIHdhcyBjaGFuZ2VkLCAkZXZlbnQ6e3BhZ2UsIGl0ZW1zUGVyUGFnZX0gZXF1YWxzIHRvXHJcbiAgICogb2JqZWN0IHdpdGggY3VycmVudCBwYWdlIGluZGV4IGFuZCBudW1iZXIgb2YgaXRlbXMgcGVyIHBhZ2VcclxuICAgKi9cclxuICBAT3V0cHV0KClcclxuICBwYWdlQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8UGFnZUNoYW5nZWRFdmVudD4oKTtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcbiAgY2xhc3NNYXAgPSAnJztcclxuICBwYWdlcz86IFBhZ2VzTW9kZWxbXTtcclxuICBwcm90ZWN0ZWQgaW5pdGVkID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICAgICAgICBwYWdpbmF0aW9uQ29uZmlnOiBQYWdpbmF0aW9uQ29uZmlnLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmID0gZWxlbWVudFJlZjtcclxuICAgIGlmICghdGhpcy5jb25maWcpIHtcclxuICAgICAgdGhpcy5jb25maWd1cmVPcHRpb25zKFxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhZ2luYXRpb25Db25maWcubWFpbiwgcGFnaW5hdGlvbkNvbmZpZy5wYWdlcilcclxuICAgICAgKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfaXRlbXNQZXJQYWdlID0gMTU7XHJcblxyXG4gIC8qKiBtYXhpbXVtIG51bWJlciBvZiBpdGVtcyBwZXIgcGFnZS4gSWYgdmFsdWUgbGVzcyB0aGFuIDEgd2lsbCBkaXNwbGF5IGFsbCBpdGVtcyBvbiBvbmUgcGFnZSAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IGl0ZW1zUGVyUGFnZSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zUGVyUGFnZTtcclxuICB9XHJcblxyXG4gIHNldCBpdGVtc1BlclBhZ2UodjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9pdGVtc1BlclBhZ2UgPSB2O1xyXG4gICAgdGhpcy50b3RhbFBhZ2VzID0gdGhpcy5jYWxjdWxhdGVUb3RhbFBhZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgX3RvdGFsSXRlbXMgPSAwO1xyXG5cclxuICAvKiogdG90YWwgbnVtYmVyIG9mIGl0ZW1zIGluIGFsbCBwYWdlcyAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHRvdGFsSXRlbXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbEl0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdGFsSXRlbXModjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl90b3RhbEl0ZW1zID0gdjtcclxuICAgIHRoaXMudG90YWxQYWdlcyA9IHRoaXMuY2FsY3VsYXRlVG90YWxQYWdlcygpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIF90b3RhbFBhZ2VzID0gMDtcclxuXHJcbiAgZ2V0IHRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl90b3RhbFBhZ2VzO1xyXG4gIH1cclxuXHJcbiAgc2V0IHRvdGFsUGFnZXModjogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl90b3RhbFBhZ2VzID0gdjtcclxuICAgIHRoaXMubnVtUGFnZXMuZW1pdCh2KTtcclxuICAgIGlmICh0aGlzLmluaXRlZCkge1xyXG4gICAgICB0aGlzLnNlbGVjdFBhZ2UodGhpcy5wYWdlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfcGFnZSA9IDE7XHJcblxyXG4gIGdldCBwYWdlKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fcGFnZTtcclxuICB9XHJcblxyXG4gIHNldCBwYWdlKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGNvbnN0IF9wcmV2aW91cyA9IHRoaXMuX3BhZ2U7XHJcbiAgICB0aGlzLl9wYWdlID0gdmFsdWUgPiB0aGlzLnRvdGFsUGFnZXMgPyB0aGlzLnRvdGFsUGFnZXMgOiB2YWx1ZSB8fCAxO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcblxyXG4gICAgaWYgKF9wcmV2aW91cyA9PT0gdGhpcy5fcGFnZSB8fCB0eXBlb2YgX3ByZXZpb3VzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wYWdlQ2hhbmdlZC5lbWl0KHtcclxuICAgICAgcGFnZTogdGhpcy5fcGFnZSxcclxuICAgICAgaXRlbXNQZXJQYWdlOiB0aGlzLml0ZW1zUGVyUGFnZVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25maWd1cmVPcHRpb25zKGNvbmZpZzogUGFydGlhbDxDb25maWdNb2RlbD4pOiB2b2lkIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXAgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2NsYXNzJykgfHwgJyc7XHJcbiAgICB9XHJcbiAgICAvLyB3YXRjaCBmb3IgbWF4U2l6ZVxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm1heFNpemUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMubWF4U2l6ZSA9IHRoaXMuY29uZmlnPy5tYXhTaXplIHx8IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnJvdGF0ZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5yb3RhdGUgPSAhIXRoaXMuY29uZmlnPy5yb3RhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmJvdW5kYXJ5TGlua3MgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMuYm91bmRhcnlMaW5rcyA9ICEhdGhpcy5jb25maWc/LmJvdW5kYXJ5TGlua3M7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5kaXJlY3Rpb25MaW5rcyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5kaXJlY3Rpb25MaW5rcyA9ICEhdGhpcy5jb25maWc/LmRpcmVjdGlvbkxpbmtzO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdGhpcy5wYWdlQnRuQ2xhc3MgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIHRoaXMucGFnZUJ0bkNsYXNzID0gdGhpcy5jb25maWc/LnBhZ2VCdG5DbGFzcyB8fCAnJztcclxuICAgIH1cclxuXHJcbiAgICAvLyBiYXNlIGNsYXNzXHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaXRlbXNQZXJQYWdlID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA9IHRoaXMuY29uZmlnPy5pdGVtc1BlclBhZ2UgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnRvdGFsUGFnZXMgPSB0aGlzLmNhbGN1bGF0ZVRvdGFsUGFnZXMoKTtcclxuICAgIC8vIHRoaXMgY2xhc3NcclxuICAgIHRoaXMucGFnZXMgPSB0aGlzLmdldFBhZ2VzKHRoaXMucGFnZSwgdGhpcy50b3RhbFBhZ2VzKTtcclxuICAgIHRoaXMuaW5pdGVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5wYWdlID0gdmFsdWU7XHJcbiAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZXRQYWdlcyh0aGlzLnBhZ2UsIHRoaXMudG90YWxQYWdlcyk7XHJcbiAgfVxyXG5cclxuICBnZXRUZXh0KGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgICByZXR1cm4gKHRoaXMgYXMgYW55KVtgJHtrZXl9VGV4dGBdIHx8ICh0aGlzIGFzIGFueSkuY29uZmlnW2Ake2tleX1UZXh0YF07XHJcbiAgfVxyXG5cclxuICBub1ByZXZpb3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucGFnZSA9PT0gMTtcclxuICB9XHJcblxyXG4gIG5vTmV4dCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBhZ2UgPT09IHRoaXMudG90YWxQYWdlcztcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0UGFnZShwYWdlOiBudW1iZXIsIGV2ZW50PzogRXZlbnQpOiB2b2lkIHtcclxuICAgIGlmIChldmVudCkge1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xyXG4gICAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICBjb25zdCB0YXJnZXQ6IGFueSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICB0YXJnZXQuYmx1cigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud3JpdGVWYWx1ZShwYWdlKTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLnBhZ2UpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gQ3JlYXRlIHBhZ2Ugb2JqZWN0IHVzZWQgaW4gdGVtcGxhdGVcclxuICBwcm90ZWN0ZWQgbWFrZVBhZ2UobnVtOiBudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBib29sZWFuKTogeyBudW1iZXI6IG51bWJlcjsgdGV4dDogc3RyaW5nOyBhY3RpdmU6IGJvb2xlYW4gfSB7XHJcbiAgICByZXR1cm4geyB0ZXh0LCBudW1iZXI6IG51bSwgYWN0aXZlIH07XHJcbiAgfVxyXG5cclxuICBwcm90ZWN0ZWQgZ2V0UGFnZXMoY3VycmVudFBhZ2U6IG51bWJlciwgdG90YWxQYWdlczogbnVtYmVyKTogUGFnZXNNb2RlbFtdIHtcclxuICAgIGNvbnN0IHBhZ2VzOiBQYWdlc01vZGVsW10gPSBbXTtcclxuXHJcbiAgICAvLyBEZWZhdWx0IHBhZ2UgbGltaXRzXHJcbiAgICBsZXQgc3RhcnRQYWdlID0gMTtcclxuICAgIGxldCBlbmRQYWdlID0gdG90YWxQYWdlcztcclxuICAgIGNvbnN0IGlzTWF4U2l6ZWQgPVxyXG4gICAgICB0eXBlb2YgdGhpcy5tYXhTaXplICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLm1heFNpemUgPCB0b3RhbFBhZ2VzO1xyXG5cclxuICAgIC8vIHJlY29tcHV0ZSBpZiBtYXhTaXplXHJcbiAgICBpZiAoaXNNYXhTaXplZCAmJiB0aGlzLm1heFNpemUpIHtcclxuICAgICAgaWYgKHRoaXMucm90YXRlKSB7XHJcbiAgICAgICAgLy8gQ3VycmVudCBwYWdlIGlzIGRpc3BsYXllZCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB2aXNpYmxlIG9uZXNcclxuICAgICAgICBzdGFydFBhZ2UgPSBNYXRoLm1heChjdXJyZW50UGFnZSAtIE1hdGguZmxvb3IodGhpcy5tYXhTaXplIC8gMiksIDEpO1xyXG4gICAgICAgIGVuZFBhZ2UgPSBzdGFydFBhZ2UgKyB0aGlzLm1heFNpemUgLSAxO1xyXG5cclxuICAgICAgICAvLyBBZGp1c3QgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBpZiAoZW5kUGFnZSA+IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgIGVuZFBhZ2UgPSB0b3RhbFBhZ2VzO1xyXG4gICAgICAgICAgc3RhcnRQYWdlID0gZW5kUGFnZSAtIHRoaXMubWF4U2l6ZSArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIFZpc2libGUgcGFnZXMgYXJlIHBhZ2luYXRlZCB3aXRoIG1heFNpemVcclxuICAgICAgICBzdGFydFBhZ2UgPVxyXG4gICAgICAgICAgKE1hdGguY2VpbChjdXJyZW50UGFnZSAvIHRoaXMubWF4U2l6ZSkgLSAxKSAqIHRoaXMubWF4U2l6ZSArIDE7XHJcblxyXG4gICAgICAgIC8vIEFkanVzdCBsYXN0IHBhZ2UgaWYgbGltaXQgaXMgZXhjZWVkZWRcclxuICAgICAgICBlbmRQYWdlID0gTWF0aC5taW4oc3RhcnRQYWdlICsgdGhpcy5tYXhTaXplIC0gMSwgdG90YWxQYWdlcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBBZGQgcGFnZSBudW1iZXIgbGlua3NcclxuICAgIGZvciAobGV0IG51bSA9IHN0YXJ0UGFnZTsgbnVtIDw9IGVuZFBhZ2U7IG51bSsrKSB7XHJcbiAgICAgIGNvbnN0IHBhZ2UgPSB0aGlzLm1ha2VQYWdlKG51bSwgbnVtLnRvU3RyaW5nKCksIG51bSA9PT0gY3VycmVudFBhZ2UpO1xyXG4gICAgICBwYWdlcy5wdXNoKHBhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEFkZCBsaW5rcyB0byBtb3ZlIGJldHdlZW4gcGFnZSBzZXRzXHJcbiAgICBpZiAoaXNNYXhTaXplZCAmJiAhdGhpcy5yb3RhdGUpIHtcclxuICAgICAgaWYgKHN0YXJ0UGFnZSA+IDEpIHtcclxuICAgICAgICBjb25zdCBwcmV2aW91c1BhZ2VTZXQgPSB0aGlzLm1ha2VQYWdlKHN0YXJ0UGFnZSAtIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMudW5zaGlmdChwcmV2aW91c1BhZ2VTZXQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW5kUGFnZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICBjb25zdCBuZXh0UGFnZVNldCA9IHRoaXMubWFrZVBhZ2UoZW5kUGFnZSArIDEsICcuLi4nLCBmYWxzZSk7XHJcbiAgICAgICAgcGFnZXMucHVzaChuZXh0UGFnZVNldCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFnZXM7XHJcbiAgfVxyXG5cclxuICAvLyBiYXNlIGNsYXNzXHJcbiAgcHJvdGVjdGVkIGNhbGN1bGF0ZVRvdGFsUGFnZXMoKTogbnVtYmVyIHtcclxuICAgIGNvbnN0IHRvdGFsUGFnZXMgPVxyXG4gICAgICB0aGlzLml0ZW1zUGVyUGFnZSA8IDFcclxuICAgICAgICA/IDFcclxuICAgICAgICA6IE1hdGguY2VpbCh0aGlzLnRvdGFsSXRlbXMgLyB0aGlzLml0ZW1zUGVyUGFnZSk7XHJcblxyXG4gICAgcmV0dXJuIE1hdGgubWF4KHRvdGFsUGFnZXMgfHwgMCwgMSk7XHJcbiAgfVxyXG59XHJcbiIsIjx1bCBjbGFzcz1cInBhZ2VyXCI+XHJcbiAgPGxpIFtjbGFzcy5kaXNhYmxlZF09XCJub1ByZXZpb3VzKClcIiBbY2xhc3MucHJldmlvdXNdPVwiYWxpZ25cIlxyXG4gICAgICBbbmdDbGFzc109XCJ7J3B1bGwtbGVmdCc6IGFsaWduLCAnZmxvYXQtbGVmdCc6IGFsaWdufVwiXHJcbiAgICAgIGNsYXNzPVwie3sgcGFnZUJ0bkNsYXNzIH19XCI+XHJcbiAgICA8YSBocmVmIChjbGljayk9XCJzZWxlY3RQYWdlKHBhZ2UgLSAxLCAkZXZlbnQpXCI+e3sgZ2V0VGV4dCgncHJldmlvdXMnKSB9fTwvYT5cclxuICA8L2xpPlxyXG4gIDxsaSBbY2xhc3MuZGlzYWJsZWRdPVwibm9OZXh0KClcIiBbY2xhc3MubmV4dF09XCJhbGlnblwiXHJcbiAgICAgIFtuZ0NsYXNzXT1cInsncHVsbC1yaWdodCc6IGFsaWduLCAnZmxvYXQtcmlnaHQnOiBhbGlnbn1cIlxyXG4gICAgICBjbGFzcz1cInt7IHBhZ2VCdG5DbGFzcyB9fVwiPlxyXG4gICAgPGEgaHJlZiAoY2xpY2spPVwic2VsZWN0UGFnZShwYWdlICsgMSwgJGV2ZW50KVwiPnt7IGdldFRleHQoJ25leHQnKSB9fTwvYT5cclxuICA8L2xpPlxyXG48L3VsPlxyXG4iXX0=