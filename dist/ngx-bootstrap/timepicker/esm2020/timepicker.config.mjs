import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Provides default configuration values for timepicker */
export class TimepickerConfig {
    constructor() {
        /** hours change step */
        this.hourStep = 1;
        /** minutes change step */
        this.minuteStep = 5;
        /** seconds changes step */
        this.secondsStep = 10;
        /** if true works in 12H mode and displays AM/PM. If false works in 24H mode and hides AM/PM */
        this.showMeridian = true;
        /** meridian labels based on locale */
        this.meridians = ['AM', 'PM'];
        /** if true hours and minutes fields will be readonly */
        this.readonlyInput = false;
        /** if true hours and minutes fields will be disabled */
        this.disabled = false;
        /** if true emptyTime is not marked as invalid */
        this.allowEmptyTime = false;
        /** if true scroll inside hours and minutes inputs will change time */
        this.mousewheel = true;
        /** if true the values of hours and minutes can be changed using the up/down arrow keys on the keyboard */
        this.arrowkeys = true;
        /** if true spinner arrows above and below the inputs will be shown */
        this.showSpinners = true;
        /** show seconds in timepicker */
        this.showSeconds = false;
        /** show minutes in timepicker */
        this.showMinutes = true;
        /** placeholder for hours field in timepicker */
        this.hoursPlaceholder = 'HH';
        /** placeholder for minutes field in timepicker */
        this.minutesPlaceholder = 'MM';
        /** placeholder for seconds field in timepicker */
        this.secondsPlaceholder = 'SS';
        /** hours aria label */
        this.ariaLabelHours = 'hours';
        /** minutes aria label */
        this.ariaLabelMinutes = 'minutes';
        /** seconds aria label */
        this.ariaLabelSeconds = 'seconds';
    }
}
TimepickerConfig.ɵfac = function TimepickerConfig_Factory(t) { return new (t || TimepickerConfig)(); };
TimepickerConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: TimepickerConfig, factory: TimepickerConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdGltZXBpY2tlci90aW1lcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQUUzQywyREFBMkQ7QUFJM0QsTUFBTSxPQUFPLGdCQUFnQjtJQUg3QjtRQUlFLHdCQUF3QjtRQUN4QixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsMEJBQTBCO1FBQzFCLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZiwyQkFBMkI7UUFDM0IsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsK0ZBQStGO1FBQy9GLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLHNDQUFzQztRQUN0QyxjQUFTLEdBQUcsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekIsd0RBQXdEO1FBQ3hELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLHdEQUF3RDtRQUN4RCxhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ2pCLGlEQUFpRDtRQUNqRCxtQkFBYyxHQUFHLEtBQUssQ0FBQztRQUN2QixzRUFBc0U7UUFDdEUsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNsQiwwR0FBMEc7UUFDMUcsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNqQixzRUFBc0U7UUFDdEUsaUJBQVksR0FBRyxJQUFJLENBQUM7UUFDcEIsaUNBQWlDO1FBQ2pDLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLGlDQUFpQztRQUNqQyxnQkFBVyxHQUFHLElBQUksQ0FBQztRQUtuQixnREFBZ0Q7UUFDaEQscUJBQWdCLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLGtEQUFrRDtRQUNsRCx1QkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDMUIsa0RBQWtEO1FBQ2xELHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQix1QkFBdUI7UUFDdkIsbUJBQWMsR0FBRyxPQUFPLENBQUM7UUFDekIseUJBQXlCO1FBQ3pCLHFCQUFnQixHQUFHLFNBQVMsQ0FBQztRQUM3Qix5QkFBeUI7UUFDekIscUJBQWdCLEdBQUcsU0FBUyxDQUFDO0tBQzlCOztnRkEzQ1ksZ0JBQWdCO3NFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCLG1CQUZmLE1BQU07dUZBRVAsZ0JBQWdCO2NBSDVCLFVBQVU7ZUFBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbi8qKiBQcm92aWRlcyBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gdmFsdWVzIGZvciB0aW1lcGlja2VyICovXHJcbkBJbmplY3RhYmxlKHtcclxuICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJDb25maWcge1xyXG4gIC8qKiBob3VycyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIGhvdXJTdGVwID0gMTtcclxuICAvKiogbWludXRlcyBjaGFuZ2Ugc3RlcCAqL1xyXG4gIG1pbnV0ZVN0ZXAgPSA1O1xyXG4gIC8qKiBzZWNvbmRzIGNoYW5nZXMgc3RlcCAqL1xyXG4gIHNlY29uZHNTdGVwID0gMTA7XHJcbiAgLyoqIGlmIHRydWUgd29ya3MgaW4gMTJIIG1vZGUgYW5kIGRpc3BsYXlzIEFNL1BNLiBJZiBmYWxzZSB3b3JrcyBpbiAyNEggbW9kZSBhbmQgaGlkZXMgQU0vUE0gKi9cclxuICBzaG93TWVyaWRpYW4gPSB0cnVlO1xyXG4gIC8qKiBtZXJpZGlhbiBsYWJlbHMgYmFzZWQgb24gbG9jYWxlICovXHJcbiAgbWVyaWRpYW5zID0gWydBTScsICdQTSddO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIHJlYWRvbmx5ICovXHJcbiAgcmVhZG9ubHlJbnB1dCA9IGZhbHNlO1xyXG4gIC8qKiBpZiB0cnVlIGhvdXJzIGFuZCBtaW51dGVzIGZpZWxkcyB3aWxsIGJlIGRpc2FibGVkICovXHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvKiogaWYgdHJ1ZSBlbXB0eVRpbWUgaXMgbm90IG1hcmtlZCBhcyBpbnZhbGlkICovXHJcbiAgYWxsb3dFbXB0eVRpbWUgPSBmYWxzZTtcclxuICAvKiogaWYgdHJ1ZSBzY3JvbGwgaW5zaWRlIGhvdXJzIGFuZCBtaW51dGVzIGlucHV0cyB3aWxsIGNoYW5nZSB0aW1lICovXHJcbiAgbW91c2V3aGVlbCA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgdGhlIHZhbHVlcyBvZiBob3VycyBhbmQgbWludXRlcyBjYW4gYmUgY2hhbmdlZCB1c2luZyB0aGUgdXAvZG93biBhcnJvdyBrZXlzIG9uIHRoZSBrZXlib2FyZCAqL1xyXG4gIGFycm93a2V5cyA9IHRydWU7XHJcbiAgLyoqIGlmIHRydWUgc3Bpbm5lciBhcnJvd3MgYWJvdmUgYW5kIGJlbG93IHRoZSBpbnB1dHMgd2lsbCBiZSBzaG93biAqL1xyXG4gIHNob3dTcGlubmVycyA9IHRydWU7XHJcbiAgLyoqIHNob3cgc2Vjb25kcyBpbiB0aW1lcGlja2VyICovXHJcbiAgc2hvd1NlY29uZHMgPSBmYWxzZTtcclxuICAvKiogc2hvdyBtaW51dGVzIGluIHRpbWVwaWNrZXIgKi9cclxuICBzaG93TWludXRlcyA9IHRydWU7XHJcbiAgLyoqIG1pbmltdW0gdGltZSB1c2VyIGNhbiBzZWxlY3QgKi9cclxuICBtaW4/OiBEYXRlO1xyXG4gIC8qKiBtYXhpbXVtIHRpbWUgdXNlciBjYW4gc2VsZWN0ICovXHJcbiAgbWF4PzogRGF0ZTtcclxuICAvKiogcGxhY2Vob2xkZXIgZm9yIGhvdXJzIGZpZWxkIGluIHRpbWVwaWNrZXIgKi9cclxuICBob3Vyc1BsYWNlaG9sZGVyID0gJ0hIJztcclxuICAvKiogcGxhY2Vob2xkZXIgZm9yIG1pbnV0ZXMgZmllbGQgaW4gdGltZXBpY2tlciAqL1xyXG4gIG1pbnV0ZXNQbGFjZWhvbGRlciA9ICdNTSc7XHJcbiAgLyoqIHBsYWNlaG9sZGVyIGZvciBzZWNvbmRzIGZpZWxkIGluIHRpbWVwaWNrZXIgKi9cclxuICBzZWNvbmRzUGxhY2Vob2xkZXIgPSAnU1MnO1xyXG4gIC8qKiBob3VycyBhcmlhIGxhYmVsICovXHJcbiAgYXJpYUxhYmVsSG91cnMgPSAnaG91cnMnO1xyXG4gIC8qKiBtaW51dGVzIGFyaWEgbGFiZWwgKi9cclxuICBhcmlhTGFiZWxNaW51dGVzID0gJ21pbnV0ZXMnO1xyXG4gIC8qKiBzZWNvbmRzIGFyaWEgbGFiZWwgKi9cclxuICBhcmlhTGFiZWxTZWNvbmRzID0gJ3NlY29uZHMnO1xyXG59XHJcbiJdfQ==