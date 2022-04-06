/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/* eslint-disable */
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import * as i0 from "@angular/core";
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
let hasV8BreakIterator;
// We need a try/catch around the reference to `Intl`, because accessing it in some cases can
// cause IE to throw. These cases are tied to particular versions of Windows and can happen if
// the consumer is providing a polyfilled `Map`. See:
// https://github.com/Microsoft/ChakraCore/issues/3189
// https://github.com/angular/components/issues/15687
try {
    hasV8BreakIterator = (typeof Intl !== 'undefined' && Intl.v8BreakIterator);
}
catch {
    hasV8BreakIterator = false;
}
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
export class Platform {
    constructor(_platformId) {
        this._platformId = _platformId;
        // We want to use the Angular platform check because if the Document is shimmed
        // without the navigator, the following checks will fail. This is preferred because
        // sometimes the Document may be shimmed without the user's knowledge or intention
        /** Whether the Angular application is being rendered in the browser. */
        this.isBrowser = this._platformId ?
            isPlatformBrowser(this._platformId) : typeof document === 'object' && !!document;
        /** Whether the current browser is Microsoft Edge. */
        this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent);
        /** Whether the current rendering engine is Microsoft Trident. */
        this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to be excluded from this check.
        /** Whether the current rendering engine is Blink. */
        this.BLINK = this.isBrowser && (!!(window.chrome || hasV8BreakIterator) &&
            typeof CSS !== 'undefined' && !this.EDGE && !this.TRIDENT);
        // Webkit is part of the userAgent in EdgeHTML, Blink and Trident. Therefore we need to
        // ensure that Webkit runs standalone and is not used as another engine's base.
        /** Whether the current rendering engine is WebKit. */
        this.WEBKIT = this.isBrowser &&
            /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Whether the current platform is Apple iOS. */
        this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) &&
            !('MSStream' in window);
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        /** Whether the current browser is Firefox. */
        this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent);
        /** Whether the current platform is Android. */
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT;
        // Safari browsers will include the Safari keyword in their userAgent. Some browsers may fake
        // this and just place the Safari keyword in the userAgent. To be more safe about Safari every
        // Safari browser should also use Webkit as its layout engine.
        /** Whether the current browser is Safari. */
        this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT;
    }
}
Platform.ɵfac = function Platform_Factory(t) { return new (t || Platform)(i0.ɵɵinject(PLATFORM_ID)); };
Platform.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: Platform, factory: Platform.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(Platform, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: Object, decorators: [{
                type: Inject,
                args: [PLATFORM_ID]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZm9jdXMtdHJhcC9wbGF0Zm9ybS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxvQkFBb0I7QUFFcEIsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlCQUFpQixDQUFDOztBQUVwRCw0RUFBNEU7QUFDNUUsbURBQW1EO0FBQ25ELElBQUksa0JBQTJCLENBQUM7QUFFaEMsNkZBQTZGO0FBQzdGLDhGQUE4RjtBQUM5RixxREFBcUQ7QUFDckQsc0RBQXNEO0FBQ3RELHFEQUFxRDtBQUNyRCxJQUFJO0lBQ0Ysa0JBQWtCLEdBQUcsQ0FBQyxPQUFPLElBQUksS0FBSyxXQUFXLElBQUssSUFBWSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0NBQ3JGO0FBQUMsTUFBTTtJQUNOLGtCQUFrQixHQUFHLEtBQUssQ0FBQztDQUM1QjtBQUVEOzs7R0FHRztBQUVILE1BQU0sT0FBTyxRQUFRO0lBOENuQixZQUF5QyxXQUFtQjtRQUFuQixnQkFBVyxHQUFYLFdBQVcsQ0FBUTtRQTdDNUQsK0VBQStFO1FBQy9FLG1GQUFtRjtRQUNuRixrRkFBa0Y7UUFDbEYsd0VBQXdFO1FBQ3hFLGNBQVMsR0FBWSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDckMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLFFBQVEsS0FBSyxRQUFRLElBQUksQ0FBQyxDQUFDLFFBQVEsQ0FBQztRQUVuRixxREFBcUQ7UUFDckQsU0FBSSxHQUFZLElBQUksQ0FBQyxTQUFTLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFdEUsaUVBQWlFO1FBQ2pFLFlBQU8sR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFakYsMkZBQTJGO1FBQzNGLHFEQUFxRDtRQUNyRCxVQUFLLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFFLE1BQWMsQ0FBQyxNQUFNLElBQUksa0JBQWtCLENBQUM7WUFDbEYsT0FBTyxHQUFHLEtBQUssV0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU3RCx1RkFBdUY7UUFDdkYsK0VBQStFO1FBQy9FLHNEQUFzRDtRQUN0RCxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVM7WUFDOUIsY0FBYyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFekYsaURBQWlEO1FBQ2pELFFBQUcsR0FBWSxJQUFJLENBQUMsU0FBUyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1lBQzNFLENBQUMsQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLENBQUM7UUFFMUIseUZBQXlGO1FBQ3pGLGlGQUFpRjtRQUNqRixpRkFBaUY7UUFDakYsaURBQWlEO1FBQ2pELDhDQUE4QztRQUM5QyxZQUFPLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXRGLCtDQUErQztRQUM3QyxvRkFBb0Y7UUFDdEYsWUFBTyxHQUFZLElBQUksQ0FBQyxTQUFTLElBQUksVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRTNGLDZGQUE2RjtRQUM3Riw4RkFBOEY7UUFDOUYsOERBQThEO1FBQzlELDZDQUE2QztRQUM3QyxXQUFNLEdBQVksSUFBSSxDQUFDLFNBQVMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBR3ZGLENBQUM7O2dFQS9DVSxRQUFRLGNBOENDLFdBQVc7OERBOUNwQixRQUFRLFdBQVIsUUFBUSxtQkFESyxNQUFNO3VGQUNuQixRQUFRO2NBRHBCLFVBQVU7ZUFBQyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUU7c0NBK0NzQixNQUFNO3NCQUEvQyxNQUFNO3VCQUFDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4gKi9cclxuXHJcbi8qIGVzbGludC1kaXNhYmxlICovXHJcblxyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIFBMQVRGT1JNX0lEIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuXHJcbi8vIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gc3VwcG9ydHMgdGhlIFY4IEJyZWFrIEl0ZXJhdG9yLiBUaGUgVjggY2hlY2tcclxuLy8gaXMgbmVjZXNzYXJ5IHRvIGRldGVjdCBhbGwgQmxpbmsgYmFzZWQgYnJvd3NlcnMuXHJcbmxldCBoYXNWOEJyZWFrSXRlcmF0b3I6IGJvb2xlYW47XHJcblxyXG4vLyBXZSBuZWVkIGEgdHJ5L2NhdGNoIGFyb3VuZCB0aGUgcmVmZXJlbmNlIHRvIGBJbnRsYCwgYmVjYXVzZSBhY2Nlc3NpbmcgaXQgaW4gc29tZSBjYXNlcyBjYW5cclxuLy8gY2F1c2UgSUUgdG8gdGhyb3cuIFRoZXNlIGNhc2VzIGFyZSB0aWVkIHRvIHBhcnRpY3VsYXIgdmVyc2lvbnMgb2YgV2luZG93cyBhbmQgY2FuIGhhcHBlbiBpZlxyXG4vLyB0aGUgY29uc3VtZXIgaXMgcHJvdmlkaW5nIGEgcG9seWZpbGxlZCBgTWFwYC4gU2VlOlxyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L0NoYWtyYUNvcmUvaXNzdWVzLzMxODlcclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvY29tcG9uZW50cy9pc3N1ZXMvMTU2ODdcclxudHJ5IHtcclxuICBoYXNWOEJyZWFrSXRlcmF0b3IgPSAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmIChJbnRsIGFzIGFueSkudjhCcmVha0l0ZXJhdG9yKTtcclxufSBjYXRjaCB7XHJcbiAgaGFzVjhCcmVha0l0ZXJhdG9yID0gZmFsc2U7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBTZXJ2aWNlIHRvIGRldGVjdCB0aGUgY3VycmVudCBwbGF0Zm9ybSBieSBjb21wYXJpbmcgdGhlIHVzZXJBZ2VudCBzdHJpbmdzIGFuZFxyXG4gKiBjaGVja2luZyBicm93c2VyLXNwZWNpZmljIGdsb2JhbCBwcm9wZXJ0aWVzLlxyXG4gKi9cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIFBsYXRmb3JtIHtcclxuICAvLyBXZSB3YW50IHRvIHVzZSB0aGUgQW5ndWxhciBwbGF0Zm9ybSBjaGVjayBiZWNhdXNlIGlmIHRoZSBEb2N1bWVudCBpcyBzaGltbWVkXHJcbiAgLy8gd2l0aG91dCB0aGUgbmF2aWdhdG9yLCB0aGUgZm9sbG93aW5nIGNoZWNrcyB3aWxsIGZhaWwuIFRoaXMgaXMgcHJlZmVycmVkIGJlY2F1c2VcclxuICAvLyBzb21ldGltZXMgdGhlIERvY3VtZW50IG1heSBiZSBzaGltbWVkIHdpdGhvdXQgdGhlIHVzZXIncyBrbm93bGVkZ2Ugb3IgaW50ZW50aW9uXHJcbiAgLyoqIFdoZXRoZXIgdGhlIEFuZ3VsYXIgYXBwbGljYXRpb24gaXMgYmVpbmcgcmVuZGVyZWQgaW4gdGhlIGJyb3dzZXIuICovXHJcbiAgaXNCcm93c2VyOiBib29sZWFuID0gdGhpcy5fcGxhdGZvcm1JZCA/XHJcbiAgICBpc1BsYXRmb3JtQnJvd3Nlcih0aGlzLl9wbGF0Zm9ybUlkKSA6IHR5cGVvZiBkb2N1bWVudCA9PT0gJ29iamVjdCcgJiYgISFkb2N1bWVudDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBNaWNyb3NvZnQgRWRnZS4gKi9cclxuICBFREdFOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgLyhlZGdlKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgTWljcm9zb2Z0IFRyaWRlbnQuICovXHJcbiAgVFJJREVOVDogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC8obXNpZXx0cmlkZW50KS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8vIEVkZ2VIVE1MIGFuZCBUcmlkZW50IG1vY2sgQmxpbmsgc3BlY2lmaWMgdGhpbmdzIGFuZCBuZWVkIHRvIGJlIGV4Y2x1ZGVkIGZyb20gdGhpcyBjaGVjay5cclxuICAvKiogV2hldGhlciB0aGUgY3VycmVudCByZW5kZXJpbmcgZW5naW5lIGlzIEJsaW5rLiAqL1xyXG4gIEJMSU5LOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgKCEhKCh3aW5kb3cgYXMgYW55KS5jaHJvbWUgfHwgaGFzVjhCcmVha0l0ZXJhdG9yKSAmJlxyXG4gICAgdHlwZW9mIENTUyAhPT0gJ3VuZGVmaW5lZCcgJiYgIXRoaXMuRURHRSAmJiAhdGhpcy5UUklERU5UKTtcclxuXHJcbiAgLy8gV2Via2l0IGlzIHBhcnQgb2YgdGhlIHVzZXJBZ2VudCBpbiBFZGdlSFRNTCwgQmxpbmsgYW5kIFRyaWRlbnQuIFRoZXJlZm9yZSB3ZSBuZWVkIHRvXHJcbiAgLy8gZW5zdXJlIHRoYXQgV2Via2l0IHJ1bnMgc3RhbmRhbG9uZSBhbmQgaXMgbm90IHVzZWQgYXMgYW5vdGhlciBlbmdpbmUncyBiYXNlLlxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHJlbmRlcmluZyBlbmdpbmUgaXMgV2ViS2l0LiAqL1xyXG4gIFdFQktJVDogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmXHJcbiAgICAvQXBwbGVXZWJLaXQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLkJMSU5LICYmICF0aGlzLkVER0UgJiYgIXRoaXMuVFJJREVOVDtcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgcGxhdGZvcm0gaXMgQXBwbGUgaU9TLiAqL1xyXG4gIElPUzogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmXHJcbiAgICAhKCdNU1N0cmVhbScgaW4gd2luZG93KTtcclxuXHJcbiAgLy8gSXQncyBkaWZmaWN1bHQgdG8gZGV0ZWN0IHRoZSBwbGFpbiBHZWNrbyBlbmdpbmUsIGJlY2F1c2UgbW9zdCBvZiB0aGUgYnJvd3NlcnMgaWRlbnRpZnlcclxuICAvLyB0aGVtIHNlbGYgYXMgR2Vja28tbGlrZSBicm93c2VycyBhbmQgbW9kaWZ5IHRoZSB1c2VyQWdlbnQncyBhY2NvcmRpbmcgdG8gdGhhdC5cclxuICAvLyBTaW5jZSB3ZSBvbmx5IGNvdmVyIG9uZSBleHBsaWNpdCBGaXJlZm94IGNhc2UsIHdlIGNhbiBzaW1wbHkgY2hlY2sgZm9yIEZpcmVmb3hcclxuICAvLyBpbnN0ZWFkIG9mIGhhdmluZyBhbiB1bnN0YWJsZSBjaGVjayBmb3IgR2Vja28uXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBGaXJlZm94LiAqL1xyXG4gIEZJUkVGT1g6IGJvb2xlYW4gPSB0aGlzLmlzQnJvd3NlciAmJiAvKGZpcmVmb3h8bWluZWZpZWxkKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IHBsYXRmb3JtIGlzIEFuZHJvaWQuICovXHJcbiAgICAvLyBUcmlkZW50IG9uIG1vYmlsZSBhZGRzIHRoZSBhbmRyb2lkIHBsYXRmb3JtIHRvIHRoZSB1c2VyQWdlbnQgdG8gdHJpY2sgZGV0ZWN0aW9ucy5cclxuICBBTkRST0lEOiBib29sZWFuID0gdGhpcy5pc0Jyb3dzZXIgJiYgL2FuZHJvaWQvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF0aGlzLlRSSURFTlQ7XHJcblxyXG4gIC8vIFNhZmFyaSBicm93c2VycyB3aWxsIGluY2x1ZGUgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZWlyIHVzZXJBZ2VudC4gU29tZSBicm93c2VycyBtYXkgZmFrZVxyXG4gIC8vIHRoaXMgYW5kIGp1c3QgcGxhY2UgdGhlIFNhZmFyaSBrZXl3b3JkIGluIHRoZSB1c2VyQWdlbnQuIFRvIGJlIG1vcmUgc2FmZSBhYm91dCBTYWZhcmkgZXZlcnlcclxuICAvLyBTYWZhcmkgYnJvd3NlciBzaG91bGQgYWxzbyB1c2UgV2Via2l0IGFzIGl0cyBsYXlvdXQgZW5naW5lLlxyXG4gIC8qKiBXaGV0aGVyIHRoZSBjdXJyZW50IGJyb3dzZXIgaXMgU2FmYXJpLiAqL1xyXG4gIFNBRkFSSTogYm9vbGVhbiA9IHRoaXMuaXNCcm93c2VyICYmIC9zYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmIHRoaXMuV0VCS0lUO1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFBMQVRGT1JNX0lEKSBwcml2YXRlIF9wbGF0Zm9ybUlkOiBPYmplY3QpIHtcclxuICB9XHJcbn1cclxuIl19