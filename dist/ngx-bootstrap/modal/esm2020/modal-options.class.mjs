import { Injectable, InjectionToken } from '@angular/core';
import * as i0 from "@angular/core";
export class ModalOptions {
}
ModalOptions.ɵfac = function ModalOptions_Factory(t) { return new (t || ModalOptions)(); };
ModalOptions.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ModalOptions, factory: ModalOptions.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalOptions, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], null, null); })();
export const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true,
    initialState: {},
    closeInterceptor: void 0
};
export const MODAL_CONFIG_DEFAULT_OVERRIDE = new InjectionToken('override-default-config');
export const CLASS_NAME = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    SHOW: 'show' // bs4
};
export const SELECTOR = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
export const TRANSITION_DURATIONS = {
    MODAL: 300,
    BACKDROP: 150
};
export const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc',
    BACK: 'browser-back-navigation-clicked'
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtb3B0aW9ucy5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RhbC9tb2RhbC1vcHRpb25zLmNsYXNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQWtCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0UsTUFBTSxPQUFPLFlBQVk7O3dFQUFaLFlBQVk7a0VBQVosWUFBWSxXQUFaLFlBQVksbUJBREEsVUFBVTt1RkFDdEIsWUFBWTtjQUR4QixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDOztBQXVEcEMsTUFBTSxDQUFDLE1BQU0sbUJBQW1CLEdBQWlCO0lBQy9DLFFBQVEsRUFBRSxJQUFJO0lBQ2QsUUFBUSxFQUFFLElBQUk7SUFDZCxLQUFLLEVBQUUsSUFBSTtJQUNYLElBQUksRUFBRSxLQUFLO0lBQ1gsbUJBQW1CLEVBQUUsS0FBSztJQUMxQixLQUFLLEVBQUUsRUFBRTtJQUNULFFBQVEsRUFBRSxJQUFJO0lBQ2QsWUFBWSxFQUFFLEVBQUU7SUFDaEIsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDO0NBQ3pCLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSw2QkFBNkIsR0FDeEMsSUFBSSxjQUFjLENBQWUseUJBQXlCLENBQUMsQ0FBQztBQUU5RCxNQUFNLENBQUMsTUFBTSxVQUFVLEdBQWM7SUFDbkMsa0JBQWtCLEVBQUUseUJBQXlCO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsSUFBSSxFQUFFLFlBQVk7SUFDbEIsSUFBSSxFQUFFLE1BQU07SUFDWixFQUFFLEVBQUUsSUFBSTtJQUNSLElBQUksRUFBRSxNQUFNLENBQUMsTUFBTTtDQUNwQixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFhO0lBQ2hDLE1BQU0sRUFBRSxlQUFlO0lBQ3ZCLFdBQVcsRUFBRSx1QkFBdUI7SUFDcEMsWUFBWSxFQUFFLHdCQUF3QjtJQUN0QyxhQUFhLEVBQUUsb0RBQW9EO0NBQ3BFLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxvQkFBb0IsR0FBd0I7SUFDdkQsS0FBSyxFQUFFLEdBQUc7SUFDVixRQUFRLEVBQUUsR0FBRztDQUNkLENBQUM7QUFFRixNQUFNLENBQUMsTUFBTSxlQUFlLEdBQW1CO0lBQzdDLFFBQVEsRUFBRSxnQkFBZ0I7SUFDMUIsR0FBRyxFQUFFLEtBQUs7SUFDVixJQUFJLEVBQUUsaUNBQWlDO0NBQ3hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBTdGF0aWNQcm92aWRlciwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2xhc3NOYW1lLCBDbG9zZUludGVyY2VwdG9yRm4sIERpc21pc3NSZWFzb25zLCBTZWxlY3RvciwgVHJhbnNpdGlvbkR1cmF0aW9ucyB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncGxhdGZvcm0nfSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsT3B0aW9uczxUID0gUmVjb3JkPHN0cmluZywgdW5rbm93bj4+IHtcclxuICAvKipcclxuICAgKiAgQWxsb3cgdXNlciB0byBJRCBmb3IgdGhlIG1vZGFsLiBPdGhlcndpc2UsIGEgdW5pcXVlIG51bWJlciB3aWxsIGJlIGdpdmVuXHJcbiAgICovXHJcbiAgaWQ/OiBudW1iZXIgfCBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogIEluY2x1ZGVzIGEgbW9kYWwtYmFja2Ryb3AgZWxlbWVudC4gQWx0ZXJuYXRpdmVseSxcclxuICAgKiAgc3BlY2lmeSBzdGF0aWMgZm9yIGEgYmFja2Ryb3Agd2hpY2ggZG9lc24ndCBjbG9zZSB0aGUgbW9kYWwgb24gY2xpY2suXHJcbiAgICovXHJcbiAgYmFja2Ryb3A/OiBib29sZWFuIHwgJ3N0YXRpYyc7XHJcbiAgLyoqXHJcbiAgICogQ2xvc2VzIHRoZSBtb2RhbCB3aGVuIGVzY2FwZSBrZXkgaXMgcHJlc3NlZC5cclxuICAgKi9cclxuICBrZXlib2FyZD86IGJvb2xlYW47XHJcblxyXG4gIGZvY3VzPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgbW9kYWwgd2hlbiBpbml0aWFsaXplZC5cclxuICAgKi9cclxuICBzaG93PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBJZ25vcmUgdGhlIGJhY2tkcm9wIGNsaWNrXHJcbiAgICovXHJcbiAgaWdub3JlQmFja2Ryb3BDbGljaz86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ3NzIGNsYXNzIGZvciBvcGVuZWQgbW9kYWxcclxuICAgKi9cclxuICBjbGFzcz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBUb2dnbGUgYW5pbWF0aW9uXHJcbiAgICovXHJcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1vZGFsIGRhdGFcclxuICAgKi9cclxuICBpbml0aWFsU3RhdGU/OiBQYXJ0aWFsPFQ+O1xyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHRvIGludGVyY2VwdCB0aGUgY2xvc3VyZVxyXG4gICAqL1xyXG4gIGNsb3NlSW50ZXJjZXB0b3I/OiBDbG9zZUludGVyY2VwdG9yRm47XHJcbiAgLyoqXHJcbiAgICogTW9kYWwgcHJvdmlkZXJzXHJcbiAgICovXHJcbiAgcHJvdmlkZXJzPzogU3RhdGljUHJvdmlkZXJbXTtcclxuICAvKipcclxuICAgKiBhcmlhLWxhYmVsbGVkYnkgYXR0cmlidXRlIHZhbHVlIHRvIHNldCBvbiB0aGUgbW9kYWwgd2luZG93XHJcbiAgICovXHJcbiAgYXJpYUxhYmVsbGVkQnk/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYXJpYS1kZXNjcmliZWRieSBhdHRyaWJ1dGUgdmFsdWUgdG8gc2V0IG9uIHRoZSBtb2RhbCB3aW5kb3dcclxuICAgKi9cclxuICBhcmlhRGVzY3JpYmVkYnk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBtb2RhbENvbmZpZ0RlZmF1bHRzOiBNb2RhbE9wdGlvbnMgPSB7XHJcbiAgYmFja2Ryb3A6IHRydWUsXHJcbiAga2V5Ym9hcmQ6IHRydWUsXHJcbiAgZm9jdXM6IHRydWUsXHJcbiAgc2hvdzogZmFsc2UsXHJcbiAgaWdub3JlQmFja2Ryb3BDbGljazogZmFsc2UsXHJcbiAgY2xhc3M6ICcnLFxyXG4gIGFuaW1hdGVkOiB0cnVlLFxyXG4gIGluaXRpYWxTdGF0ZToge30sXHJcbiAgY2xvc2VJbnRlcmNlcHRvcjogdm9pZCAwXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgTU9EQUxfQ09ORklHX0RFRkFVTFRfT1ZFUlJJREU6IEluamVjdGlvblRva2VuPE1vZGFsT3B0aW9ucz4gPVxyXG4gIG5ldyBJbmplY3Rpb25Ub2tlbjxNb2RhbE9wdGlvbnM+KCdvdmVycmlkZS1kZWZhdWx0LWNvbmZpZycpO1xyXG5cclxuZXhwb3J0IGNvbnN0IENMQVNTX05BTUU6IENsYXNzTmFtZSA9IHtcclxuICBTQ1JPTExCQVJfTUVBU1VSRVI6ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZScsXHJcbiAgQkFDS0RST1A6ICdtb2RhbC1iYWNrZHJvcCcsXHJcbiAgT1BFTjogJ21vZGFsLW9wZW4nLFxyXG4gIEZBREU6ICdmYWRlJyxcclxuICBJTjogJ2luJywgLy8gYnMzXHJcbiAgU0hPVzogJ3Nob3cnIC8vIGJzNFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFNFTEVDVE9SOiBTZWxlY3RvciA9IHtcclxuICBESUFMT0c6ICcubW9kYWwtZGlhbG9nJyxcclxuICBEQVRBX1RPR0dMRTogJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJyxcclxuICBEQVRBX0RJU01JU1M6ICdbZGF0YS1kaXNtaXNzPVwibW9kYWxcIl0nLFxyXG4gIEZJWEVEX0NPTlRFTlQ6ICcubmF2YmFyLWZpeGVkLXRvcCwgLm5hdmJhci1maXhlZC1ib3R0b20sIC5pcy1maXhlZCdcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBUUkFOU0lUSU9OX0RVUkFUSU9OUzogVHJhbnNpdGlvbkR1cmF0aW9ucyA9IHtcclxuICBNT0RBTDogMzAwLFxyXG4gIEJBQ0tEUk9QOiAxNTBcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNNSVNTX1JFQVNPTlM6IERpc21pc3NSZWFzb25zID0ge1xyXG4gIEJBQ0tSRE9QOiAnYmFja2Ryb3AtY2xpY2snLFxyXG4gIEVTQzogJ2VzYycsXHJcbiAgQkFDSzogJ2Jyb3dzZXItYmFjay1uYXZpZ2F0aW9uLWNsaWNrZWQnXHJcbn07XHJcbiJdfQ==