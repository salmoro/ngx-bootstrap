import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
export class PopoverConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right", "auto"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
        this.outsideClick = false;
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
PopoverConfig.ɵfac = function PopoverConfig_Factory(t) { return new (t || PopoverConfig)(); };
PopoverConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PopoverConfig, factory: PopoverConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcG9wb3Zlci9wb3BvdmVyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7Ozs7R0FLRztBQUlILE1BQU0sT0FBTyxhQUFhO0lBSDFCO1FBSUUscUNBQXFDO1FBQ3JDLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4Qjs7V0FFRztRQUNILGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEI7OztXQUdHO1FBQ0gsYUFBUSxHQUFHLE9BQU8sQ0FBQztRQUVuQixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUtyQix1Q0FBdUM7UUFDdkMsVUFBSyxHQUFHLENBQUMsQ0FBQztLQUdYOzswRUF0QlksYUFBYTttRUFBYixhQUFhLFdBQWIsYUFBYSxtQkFGWixNQUFNO3VGQUVQLGFBQWE7Y0FIekIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIENvbmZpZ3VyYXRpb24gc2VydmljZSBmb3IgdGhlIFBvcG92ZXIgZGlyZWN0aXZlLlxyXG4gKiBZb3UgY2FuIGluamVjdCB0aGlzIHNlcnZpY2UsIHR5cGljYWxseSBpbiB5b3VyIHJvb3QgY29tcG9uZW50LCBhbmQgY3VzdG9taXplXHJcbiAqIHRoZSB2YWx1ZXMgb2YgaXRzIHByb3BlcnRpZXMgaW4gb3JkZXIgdG8gcHJvdmlkZSBkZWZhdWx0IHZhbHVlcyBmb3IgYWxsIHRoZVxyXG4gKiBwb3BvdmVycyB1c2VkIGluIHRoZSBhcHBsaWNhdGlvbi5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb25maWcge1xyXG4gIC8qKiBzZXRzIGRpc2FibGUgYWRhcHRpdmUgcG9zaXRpb24gKi9cclxuICBhZGFwdGl2ZVBvc2l0aW9uID0gdHJ1ZTtcclxuICAvKipcclxuICAgKiBQbGFjZW1lbnQgb2YgYSBwb3BvdmVyLiBBY2NlcHRzOiBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiLCBcImF1dG9cIlxyXG4gICAqL1xyXG4gIHBsYWNlbWVudCA9ICd0b3AnO1xyXG4gIC8qKlxyXG4gICAqIFNwZWNpZmllcyBldmVudHMgdGhhdCBzaG91bGQgdHJpZ2dlci4gU3VwcG9ydHMgYSBzcGFjZSBzZXBhcmF0ZWQgbGlzdCBvZlxyXG4gICAqIGV2ZW50IG5hbWVzLlxyXG4gICAqL1xyXG4gIHRyaWdnZXJzID0gJ2NsaWNrJztcclxuXHJcbiAgb3V0c2lkZUNsaWNrID0gZmFsc2U7XHJcbiAgLyoqXHJcbiAgICogQSBzZWxlY3RvciBzcGVjaWZ5aW5nIHRoZSBlbGVtZW50IHRoZSBwb3BvdmVyIHNob3VsZCBiZSBhcHBlbmRlZCB0by5cclxuICAgKi9cclxuICBjb250YWluZXI/OiBzdHJpbmc7XHJcbiAgLyoqIGRlbGF5IGJlZm9yZSBzaG93aW5nIHRoZSB0b29sdGlwICovXHJcbiAgZGVsYXkgPSAwO1xyXG5cclxuICBib3VuZGFyaWVzRWxlbWVudD86c3RyaW5nO1xyXG59XHJcbiJdfQ==