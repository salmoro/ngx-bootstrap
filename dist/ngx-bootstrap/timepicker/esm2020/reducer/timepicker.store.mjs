import { Injectable } from '@angular/core';
import { timepickerReducer, initialState } from './timepicker.reducer';
import { BehaviorSubject } from 'rxjs';
import { MiniStore, MiniState } from 'ngx-bootstrap/mini-ngrx';
import * as i0 from "@angular/core";
export class TimepickerStore extends MiniStore {
    constructor() {
        const _dispatcher = new BehaviorSubject({
            type: '[mini-ngrx] dispatcher init'
        });
        const state = new MiniState(initialState, _dispatcher, timepickerReducer);
        super(_dispatcher, timepickerReducer, state);
    }
}
TimepickerStore.ɵfac = function TimepickerStore_Factory(t) { return new (t || TimepickerStore)(); };
TimepickerStore.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TimepickerStore, factory: TimepickerStore.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerStore, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5zdG9yZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy90aW1lcGlja2VyL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFDTCxpQkFBaUIsRUFFakIsWUFBWSxFQUNiLE1BQU0sc0JBQXNCLENBQUM7QUFDOUIsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUV2QyxPQUFPLEVBQVUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDOztBQUd2RSxNQUFNLE9BQU8sZUFBZ0IsU0FBUSxTQUEwQjtJQUM3RDtRQUNFLE1BQU0sV0FBVyxHQUFHLElBQUksZUFBZSxDQUFTO1lBQzlDLElBQUksRUFBRSw2QkFBNkI7U0FDcEMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxLQUFLLEdBQUcsSUFBSSxTQUFTLENBQ3pCLFlBQVksRUFDWixXQUFXLEVBQ1gsaUJBQWlCLENBQ2xCLENBQUM7UUFDRixLQUFLLENBQUMsV0FBVyxFQUFFLGlCQUFpQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7OzhFQVhVLGVBQWU7cUVBQWYsZUFBZSxXQUFmLGVBQWUsbUJBREgsVUFBVTt1RkFDdEIsZUFBZTtjQUQzQixVQUFVO2VBQUMsRUFBQyxVQUFVLEVBQUUsVUFBVSxFQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIHRpbWVwaWNrZXJSZWR1Y2VyLFxyXG4gIFRpbWVwaWNrZXJTdGF0ZSxcclxuICBpbml0aWFsU3RhdGVcclxufSBmcm9tICcuL3RpbWVwaWNrZXIucmVkdWNlcic7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgQWN0aW9uLCBNaW5pU3RvcmUsIE1pbmlTdGF0ZSB9IGZyb20gJ25neC1ib290c3RyYXAvbWluaS1uZ3J4JztcclxuXHJcbkBJbmplY3RhYmxlKHtwcm92aWRlZEluOiAncGxhdGZvcm0nfSlcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJTdG9yZSBleHRlbmRzIE1pbmlTdG9yZTxUaW1lcGlja2VyU3RhdGU+IHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGNvbnN0IF9kaXNwYXRjaGVyID0gbmV3IEJlaGF2aW9yU3ViamVjdDxBY3Rpb24+KHtcclxuICAgICAgdHlwZTogJ1ttaW5pLW5ncnhdIGRpc3BhdGNoZXIgaW5pdCdcclxuICAgIH0pO1xyXG4gICAgY29uc3Qgc3RhdGUgPSBuZXcgTWluaVN0YXRlPFRpbWVwaWNrZXJTdGF0ZT4oXHJcbiAgICAgIGluaXRpYWxTdGF0ZSxcclxuICAgICAgX2Rpc3BhdGNoZXIsXHJcbiAgICAgIHRpbWVwaWNrZXJSZWR1Y2VyXHJcbiAgICApO1xyXG4gICAgc3VwZXIoX2Rpc3BhdGNoZXIsIHRpbWVwaWNrZXJSZWR1Y2VyLCBzdGF0ZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==