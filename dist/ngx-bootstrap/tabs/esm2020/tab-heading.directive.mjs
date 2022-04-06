import { Directive, TemplateRef } from '@angular/core';
import { TabDirective } from './tab.directive';
import * as i0 from "@angular/core";
import * as i1 from "./tab.directive";
/** Should be used to mark <ng-template> element as a template for tab heading */
export class TabHeadingDirective {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.ɵfac = function TabHeadingDirective_Factory(t) { return new (t || TabHeadingDirective)(i0.ɵɵdirectiveInject(i0.TemplateRef), i0.ɵɵdirectiveInject(i1.TabDirective)); };
TabHeadingDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabHeadingDirective, selectors: [["", "tabHeading", ""]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabHeadingDirective, [{
        type: Directive,
        args: [{ selector: '[tabHeading]' }]
    }], function () { return [{ type: i0.TemplateRef }, { type: i1.TabDirective }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLWhlYWRpbmcuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3RhYnMvdGFiLWhlYWRpbmcuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXZELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBRS9DLGlGQUFpRjtBQUVqRixNQUFNLE9BQU8sbUJBQW1CO0lBSTlCLDhEQUE4RDtJQUM5RCxZQUFZLFdBQTZCLEVBQUUsR0FBaUI7UUFDMUQsR0FBRyxDQUFDLFVBQVUsR0FBRyxXQUFXLENBQUM7SUFDL0IsQ0FBQzs7c0ZBUFUsbUJBQW1CO3NFQUFuQixtQkFBbUI7dUZBQW5CLG1CQUFtQjtjQUQvQixTQUFTO2VBQUMsRUFBRSxRQUFRLEVBQUUsY0FBYyxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgVGFiRGlyZWN0aXZlIH0gZnJvbSAnLi90YWIuZGlyZWN0aXZlJztcclxuXHJcbi8qKiBTaG91bGQgYmUgdXNlZCB0byBtYXJrIDxuZy10ZW1wbGF0ZT4gZWxlbWVudCBhcyBhIHRlbXBsYXRlIGZvciB0YWIgaGVhZGluZyAqL1xyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICdbdGFiSGVhZGluZ10nIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJIZWFkaW5nRGlyZWN0aXZlIHtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gIHRlbXBsYXRlUmVmPzogVGVtcGxhdGVSZWY8YW55PjtcclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICBjb25zdHJ1Y3Rvcih0ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8YW55PiwgdGFiOiBUYWJEaXJlY3RpdmUpIHtcclxuICAgIHRhYi5oZWFkaW5nUmVmID0gdGVtcGxhdGVSZWY7XHJcbiAgfVxyXG59XHJcbiJdfQ==