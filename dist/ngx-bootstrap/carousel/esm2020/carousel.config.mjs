import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
          of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
CarouselConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CarouselConfig, factory: CarouselConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL2Nhcm91c2VsLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUszQyxNQUFNLE9BQU8sY0FBYztJQUgzQjtRQUlFLGlEQUFpRDtRQUNqRCxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBRWhCLHNEQUFzRDtRQUN0RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLHlEQUF5RDtRQUN6RCxXQUFNLEdBQUcsS0FBSyxDQUFDO1FBRWYsOEJBQThCO1FBQzlCLG1CQUFjLEdBQUcsSUFBSSxDQUFDO1FBRXRCLG1DQUFtQztRQUNuQyxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUVyQixvR0FBb0c7UUFDcEcsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRTFCLDZEQUE2RDtRQUM3RCxrQkFBYSxHQUFHLENBQUMsQ0FBQztRQUVsQjtzREFDOEM7UUFDOUMsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO0tBQzNCOzs0RUF6QlksY0FBYztvRUFBZCxjQUFjLFdBQWQsY0FBYyxtQkFGYixNQUFNO3VGQUVQLGNBQWM7Y0FIMUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxDb25maWcge1xyXG4gIC8qIERlZmF1bHQgaW50ZXJ2YWwgb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgKi9cclxuICBpbnRlcnZhbCA9IDUwMDA7XHJcblxyXG4gIC8qIElzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXMgY2FuIGJlIHBhdXNlZCAqL1xyXG4gIG5vUGF1c2UgPSBmYWxzZTtcclxuXHJcbiAgLyogSXMgc2xpZGVzIGNhbiB3cmFwIGZyb20gdGhlIGxhc3QgdG8gdGhlIGZpcnN0IHNsaWRlICovXHJcbiAgbm9XcmFwID0gZmFsc2U7XHJcblxyXG4gIC8qIFNob3cgY2Fyb3VzZWwtaW5kaWNhdG9ycyAqL1xyXG4gIHNob3dJbmRpY2F0b3JzID0gdHJ1ZTtcclxuXHJcbiAgLyogU2xpZGVzIGNhbiBiZSBwYXVzZWQgb24gZm9jdXMgKi9cclxuICBwYXVzZU9uRm9jdXMgPSBmYWxzZTtcclxuXHJcbiAgLyogSWYgYHRydWVgIC0gY2Fyb3VzZWwgaW5kaWNhdG9ycyBpbmRpY2F0ZSBzbGlkZXMgY2h1bmtzIHdvcmtzIE9OTFkgaWYgc2luZ2xlU2xpZGVPZmZzZXQgPSBGQUxTRSAqL1xyXG4gIGluZGljYXRvcnNCeUNodW5rID0gZmFsc2U7XHJcblxyXG4gIC8qIElmIHZhbHVlIG1vcmUgdGhlbiAxIOKAlCBjYXJvdXNlbCB3b3JrcyBpbiBtdWx0aWxpc3QgbW9kZSAqL1xyXG4gIGl0ZW1zUGVyU2xpZGUgPSAxO1xyXG5cclxuICAvKiBJZiBgdHJ1ZWAg4oCUIGNhcm91c2VsIHNoaWZ0cyBieSBvbmUgZWxlbWVudC4gQnkgZGVmYXVsdCBjYXJvdXNlbCBzaGlmdHMgYnkgbnVtYmVyXHJcbiAgICBvZiB2aXNpYmxlIGVsZW1lbnRzIChpdGVtc1BlclNsaWRlIGZpZWxkKSAqL1xyXG4gIHNpbmdsZVNsaWRlT2Zmc2V0ID0gZmFsc2U7XHJcbn1cclxuIl19