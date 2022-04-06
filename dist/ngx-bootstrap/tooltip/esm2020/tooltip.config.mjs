import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Default values provider for tooltip */
export class TooltipConfig {
    constructor() {
        /** sets disable adaptive position */
        this.adaptivePosition = true;
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
        /** delay before showing the tooltip */
        this.delay = 0;
    }
}
TooltipConfig.ɵfac = function TooltipConfig_Factory(t) { return new (t || TooltipConfig)(); };
TooltipConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TooltipConfig, factory: TooltipConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipConfig, [{
        type: Injectable,
        args: [{ providedIn: 'root' }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdG9vbHRpcC90b29sdGlwLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQywwQ0FBMEM7QUFFMUMsTUFBTSxPQUFPLGFBQWE7SUFEMUI7UUFFRSxxQ0FBcUM7UUFDckMscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLCtFQUErRTtRQUMvRSxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLDBEQUEwRDtRQUMxRCxhQUFRLEdBQUcsYUFBYSxDQUFDO1FBR3pCLHVDQUF1QztRQUN2QyxVQUFLLEdBQUcsQ0FBQyxDQUFDO0tBQ1g7OzBFQVhZLGFBQWE7bUVBQWIsYUFBYSxXQUFiLGFBQWEsbUJBREEsTUFBTTt1RkFDbkIsYUFBYTtjQUR6QixVQUFVO2VBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqIERlZmF1bHQgdmFsdWVzIHByb3ZpZGVyIGZvciB0b29sdGlwICovXHJcbkBJbmplY3RhYmxlKHsgcHJvdmlkZWRJbjogJ3Jvb3QnIH0pXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwQ29uZmlnIHtcclxuICAvKiogc2V0cyBkaXNhYmxlIGFkYXB0aXZlIHBvc2l0aW9uICovXHJcbiAgYWRhcHRpdmVQb3NpdGlvbiA9IHRydWU7XHJcbiAgLyoqIHRvb2x0aXAgcGxhY2VtZW50LCBzdXBwb3J0ZWQgcG9zaXRpb25zOiAndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0JyAqL1xyXG4gIHBsYWNlbWVudCA9ICd0b3AnO1xyXG4gIC8qKiBhcnJheSBvZiBldmVudCBuYW1lcyB3aGljaCB0cmlnZ2VycyB0b29sdGlwIG9wZW5pbmcgKi9cclxuICB0cmlnZ2VycyA9ICdob3ZlciBmb2N1cyc7XHJcbiAgLyoqIGEgc2VsZWN0b3Igc3BlY2lmeWluZyB0aGUgZWxlbWVudCB0aGUgdG9vbHRpcCBzaG91bGQgYmUgYXBwZW5kZWQgdG8uICovXHJcbiAgY29udGFpbmVyPzogc3RyaW5nO1xyXG4gIC8qKiBkZWxheSBiZWZvcmUgc2hvd2luZyB0aGUgdG9vbHRpcCAqL1xyXG4gIGRlbGF5ID0gMDtcclxufVxyXG4iXX0=