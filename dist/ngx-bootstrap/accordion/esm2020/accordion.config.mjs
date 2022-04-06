import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * Configuration service, provides default values for the AccordionComponent.
 */
export class AccordionConfig {
    constructor() {
        /** Whether the other panels should be closed when a panel is opened */
        this.closeOthers = false;
        /** turn on/off animation */
        this.isAnimated = false;
    }
}
AccordionConfig.ɵfac = function AccordionConfig_Factory(t) { return new (t || AccordionConfig)(); };
AccordionConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AccordionConfig, factory: AccordionConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLmNvbmZpZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQzs7R0FFRztBQUlILE1BQU0sT0FBTyxlQUFlO0lBSDVCO1FBSUUsdUVBQXVFO1FBQ3ZFLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLDRCQUE0QjtRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDO0tBQ3BCOzs4RUFMWSxlQUFlO3FFQUFmLGVBQWUsV0FBZixlQUFlLG1CQUZkLE1BQU07dUZBRVAsZUFBZTtjQUgzQixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQ29uZmlndXJhdGlvbiBzZXJ2aWNlLCBwcm92aWRlcyBkZWZhdWx0IHZhbHVlcyBmb3IgdGhlIEFjY29yZGlvbkNvbXBvbmVudC5cclxuICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvbkNvbmZpZyB7XHJcbiAgLyoqIFdoZXRoZXIgdGhlIG90aGVyIHBhbmVscyBzaG91bGQgYmUgY2xvc2VkIHdoZW4gYSBwYW5lbCBpcyBvcGVuZWQgKi9cclxuICBjbG9zZU90aGVycyA9IGZhbHNlO1xyXG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cclxuICBpc0FuaW1hdGVkID0gZmFsc2U7XHJcbn1cclxuIl19