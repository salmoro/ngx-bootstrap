import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/**
 * For date range picker there are `BsDaterangepickerConfig` which inherits all properties,
 * except `displayMonths`, for range picker it default to `2`
 */
export class BsDatepickerConfig {
    constructor() {
        /** sets use adaptive position */
        this.adaptivePosition = false;
        /** sets use UTC date time format */
        this.useUtc = false;
        /** turn on/off animation */
        this.isAnimated = false;
        /**
         * The view that the datepicker should start in
         */
        this.startView = 'day';
        /**
         * If true, returns focus to the datepicker / daterangepicker input after date selection
         */
        this.returnFocusToInput = false;
        /** CSS class which will be applied to datepicker container,
         * usually used to set color theme
         */
        this.containerClass = 'theme-green';
        // DatepickerRenderOptions
        this.displayMonths = 1;
        /**
         * Allows to hide week numbers in datepicker
         */
        this.showWeekNumbers = true;
        this.dateInputFormat = 'L';
        // range picker
        this.rangeSeparator = ' - ';
        /**
         * Date format for date range input field
         */
        this.rangeInputFormat = 'L';
        // DatepickerFormatOptions
        this.monthTitle = 'MMMM';
        this.yearTitle = 'YYYY';
        this.dayLabel = 'D';
        this.monthLabel = 'MMMM';
        this.yearLabel = 'YYYY';
        this.weekNumbers = 'w';
        /**
         * Shows 'today' button
         */
        this.showTodayButton = false;
        /**
         * Shows clear button
         */
        this.showClearButton = false;
        /**
         * Positioning of 'today' button
         */
        this.todayPosition = 'center';
        /**
         * Positioning of 'clear' button
         */
        this.clearPosition = 'right';
        /**
         * Label for 'today' button
         */
        this.todayButtonLabel = 'Today';
        /**
         * Label for 'clear' button
         */
        this.clearButtonLabel = 'Clear';
        /**
         * Label for 'custom range' button
         */
        this.customRangeButtonLabel = 'Custom Range';
        /**
         * Shows timepicker under datepicker
         */
        this.withTimepicker = false;
        /**
         * Set allowed positions of container.
         */
        this.allowedPositions = ['top', 'bottom'];
    }
}
BsDatepickerConfig.ɵfac = function BsDatepickerConfig_Factory(t) { return new (t || BsDatepickerConfig)(); };
BsDatepickerConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: BsDatepickerConfig, factory: BsDatepickerConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQVUzQzs7O0dBR0c7QUFJSCxNQUFNLE9BQU8sa0JBQWtCO0lBSC9CO1FBSUUsaUNBQWlDO1FBQ2pDLHFCQUFnQixHQUFHLEtBQUssQ0FBQztRQUN6QixvQ0FBb0M7UUFDcEMsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUNmLDRCQUE0QjtRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBV25COztXQUVHO1FBQ0gsY0FBUyxHQUF5QixLQUFLLENBQUM7UUE4RHhDOztXQUVHO1FBQ0gsdUJBQWtCLEdBQUcsS0FBSyxDQUFDO1FBRTNCOztXQUVHO1FBQ0gsbUJBQWMsR0FBRyxhQUFhLENBQUM7UUFFL0IsMEJBQTBCO1FBQzFCLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQ2xCOztXQUVHO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFdkIsb0JBQWUsR0FBRyxHQUFHLENBQUM7UUFDdEIsZUFBZTtRQUNmLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCOztXQUVHO1FBQ0gscUJBQWdCLEdBQUcsR0FBRyxDQUFDO1FBWXZCLDBCQUEwQjtRQUMxQixlQUFVLEdBQUcsTUFBTSxDQUFDO1FBQ3BCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsYUFBUSxHQUFHLEdBQUcsQ0FBQztRQUNmLGVBQVUsR0FBRyxNQUFNLENBQUM7UUFDcEIsY0FBUyxHQUFHLE1BQU0sQ0FBQztRQUNuQixnQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUVsQjs7V0FFRztRQUNILG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBRXhCOztXQUVHO1FBQ0gsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFFeEI7O1dBRUc7UUFDSCxrQkFBYSxHQUFHLFFBQVEsQ0FBQztRQUV6Qjs7V0FFRztRQUNILGtCQUFhLEdBQUcsT0FBTyxDQUFDO1FBRXhCOztXQUVHO1FBQ0gscUJBQWdCLEdBQUcsT0FBTyxDQUFDO1FBRTNCOztXQUVHO1FBQ0gscUJBQWdCLEdBQUcsT0FBTyxDQUFDO1FBRTNCOztXQUVHO1FBQ0gsMkJBQXNCLEdBQUcsY0FBYyxDQUFDO1FBRXhDOztXQUVHO1FBQ0gsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFLdkI7O1dBRUc7UUFDSCxxQkFBZ0IsR0FBRyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsQ0FBQztLQUN0Qzs7b0ZBNUtZLGtCQUFrQjt3RUFBbEIsa0JBQWtCLFdBQWxCLGtCQUFrQixtQkFGakIsTUFBTTt1RkFFUCxrQkFBa0I7Y0FIOUIsVUFBVTtlQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zLFxyXG4gIEJzRGF0ZXBpY2tlclZpZXdNb2RlLFxyXG4gIERhdGVwaWNrZXJEYXRlQ3VzdG9tQ2xhc3NlcyxcclxuICBEYXRlcGlja2VyRGF0ZVRvb2x0aXBUZXh0XHJcbn0gZnJvbSAnLi9tb2RlbHMnO1xyXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzIH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtY3VzdG9tLWRhdGVzLXZpZXcuY29tcG9uZW50JztcclxuXHJcblxyXG4vKipcclxuICogRm9yIGRhdGUgcmFuZ2UgcGlja2VyIHRoZXJlIGFyZSBgQnNEYXRlcmFuZ2VwaWNrZXJDb25maWdgIHdoaWNoIGluaGVyaXRzIGFsbCBwcm9wZXJ0aWVzLFxyXG4gKiBleGNlcHQgYGRpc3BsYXlNb250aHNgLCBmb3IgcmFuZ2UgcGlja2VyIGl0IGRlZmF1bHQgdG8gYDJgXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCc0RhdGVwaWNrZXJDb25maWcgaW1wbGVtZW50cyBEYXRlcGlja2VyUmVuZGVyT3B0aW9ucyB7XHJcbiAgLyoqIHNldHMgdXNlIGFkYXB0aXZlIHBvc2l0aW9uICovXHJcbiAgYWRhcHRpdmVQb3NpdGlvbiA9IGZhbHNlO1xyXG4gIC8qKiBzZXRzIHVzZSBVVEMgZGF0ZSB0aW1lIGZvcm1hdCAqL1xyXG4gIHVzZVV0YyA9IGZhbHNlO1xyXG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cclxuICBpc0FuaW1hdGVkID0gZmFsc2U7XHJcbiAgdmFsdWU/OiBEYXRlIHwgRGF0ZVtdO1xyXG4gIGlzRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgbWluIGRhdGUgZm9yIGFsbCBkYXRlL3JhbmdlIHBpY2tlcnNcclxuICAgKi9cclxuICBtaW5EYXRlPzogRGF0ZTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IG1heCBkYXRlIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgbWF4RGF0ZT86IERhdGU7XHJcbiAgLyoqXHJcbiAgICogVGhlIHZpZXcgdGhhdCB0aGUgZGF0ZXBpY2tlciBzaG91bGQgc3RhcnQgaW5cclxuICAgKi9cclxuICBzdGFydFZpZXc6IEJzRGF0ZXBpY2tlclZpZXdNb2RlID0gJ2RheSc7XHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBkYXRlIGN1c3RvbSBjbGFzc2VzIGZvciBhbGwgZGF0ZS9yYW5nZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgZGF0ZUN1c3RvbUNsYXNzZXM/OiBEYXRlcGlja2VyRGF0ZUN1c3RvbUNsYXNzZXNbXTtcclxuICAvKipcclxuICAgKiBEZWZhdWx0IHRvb2x0aXAgdGV4dCBmb3IgYWxsIGRhdGUvcmFuZ2UgcGlja2Vyc1xyXG4gICAqL1xyXG4gIGRhdGVUb29sdGlwVGV4dHM/OiBEYXRlcGlja2VyRGF0ZVRvb2x0aXBUZXh0W107XHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXlzLCBlLmcuIFswLDZdIHdpbGwgZGlzYWJsZSBhbGwgU2F0dXJkYXlzIGFuZCBTdW5kYXlzXHJcbiAgICovXHJcbiAgZGF5c0Rpc2FibGVkPzogbnVtYmVyW107XHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZSBzcGVjaWZpYyBkYXRlc1xyXG4gICAqL1xyXG4gIGRhdGVzRGlzYWJsZWQ/OiBEYXRlW107XHJcbiAgLyoqXHJcbiAgICogU2hvdyBvbmUgbW9udGhzIGZvciBzcGVjaWFsIGNhc2VzIChvbmx5IGZvciBkYXRlUmFuZ2VQaWNrZXIpXHJcbiAgICogMS4gbWF4RGF0ZSBpcyBlcXVhbCB0byB0b2RheSdzIGRhdGVcclxuICAgKiAyLiBtaW5EYXRlJ3MgbW9udGggaXMgZXF1YWwgdG8gbWF4RGF0ZSdzIG1vbnRoXHJcbiAgICovXHJcbiAgZGlzcGxheU9uZU1vbnRoUmFuZ2U/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBzcGVjaWZpYyBkYXRlc1xyXG4gICAqL1xyXG4gIGRhdGVzRW5hYmxlZD86IERhdGVbXTtcclxuICAvKipcclxuICAgKiBNYWtlcyBkYXRlcyBmcm9tIG90aGVyIG1vbnRocyBhY3RpdmVcclxuICAgKi9cclxuICBzZWxlY3RGcm9tT3RoZXJNb250aD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyBzZWxlY3QgZmlyc3QgZGF0ZSBvZiB0aGUgd2VlayBieSBjbGljayBvbiB3ZWVrIG51bWJlclxyXG4gICAqL1xyXG4gIHNlbGVjdFdlZWs/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3Mgc2VsZWN0IGRhdGVyYW5nZSBhcyBmaXJzdCBhbmQgbGFzdCBkYXkgb2Ygd2VlayBieSBjbGljayBvbiB3ZWVrIG51bWJlciAoZGF0ZVJhbmdlUGlja2VyIG9ubHkpXHJcbiAgICovXHJcbiAgc2VsZWN0V2Vla0RhdGVSYW5nZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIHByZXZpb3VzIGFuZCBjdXJyZW50IG1vbnRoLCBpbnN0ZWFkIG9mIGN1cnJlbnQgYW5kIG5leHQgKGRhdGVSYW5nZVBpY2tlciBvbmx5KVxyXG4gICAqL1xyXG4gIHNob3dQcmV2aW91c01vbnRoPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJldmVudHMgY2hhbmdlIHRvIG5leHQgbW9udGggZm9yIHJpZ2h0IGNhbGVuZGFyIGluIHR3byBjYWxlbmRhcnMgdmlldyAoZGF0ZVJhbmdlUGlja2VyIG9ubHkpXHJcbiAgICovXHJcbiAgcHJldmVudENoYW5nZVRvTmV4dE1vbnRoPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGNsYXNzIHRvIGN1cnJlbnQgZGF5XHJcbiAgICovXHJcbiAgY3VzdG9tVG9kYXlDbGFzcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVmYXVsdCBtb2RlIGZvciBhbGwgZGF0ZSBwaWNrZXJzXHJcbiAgICovXHJcbiAgbWluTW9kZT86IEJzRGF0ZXBpY2tlclZpZXdNb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB0cnVlLCByZXR1cm5zIGZvY3VzIHRvIHRoZSBkYXRlcGlja2VyIC8gZGF0ZXJhbmdlcGlja2VyIGlucHV0IGFmdGVyIGRhdGUgc2VsZWN0aW9uXHJcbiAgICovXHJcbiAgcmV0dXJuRm9jdXNUb0lucHV0ID0gZmFsc2U7XHJcblxyXG4gIC8qKiBDU1MgY2xhc3Mgd2hpY2ggd2lsbCBiZSBhcHBsaWVkIHRvIGRhdGVwaWNrZXIgY29udGFpbmVyLFxyXG4gICAqIHVzdWFsbHkgdXNlZCB0byBzZXQgY29sb3IgdGhlbWVcclxuICAgKi9cclxuICBjb250YWluZXJDbGFzcyA9ICd0aGVtZS1ncmVlbic7XHJcblxyXG4gIC8vIERhdGVwaWNrZXJSZW5kZXJPcHRpb25zXHJcbiAgZGlzcGxheU1vbnRocyA9IDE7XHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRvIGhpZGUgd2VlayBudW1iZXJzIGluIGRhdGVwaWNrZXJcclxuICAgKi9cclxuICBzaG93V2Vla051bWJlcnMgPSB0cnVlO1xyXG5cclxuICBkYXRlSW5wdXRGb3JtYXQgPSAnTCc7XHJcbiAgLy8gcmFuZ2UgcGlja2VyXHJcbiAgcmFuZ2VTZXBhcmF0b3IgPSAnIC0gJztcclxuICAvKipcclxuICAgKiBEYXRlIGZvcm1hdCBmb3IgZGF0ZSByYW5nZSBpbnB1dCBmaWVsZFxyXG4gICAqL1xyXG4gIHJhbmdlSW5wdXRGb3JtYXQgPSAnTCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZWRlZmluZWQgcmFuZ2VzXHJcbiAgICovXHJcbiAgcmFuZ2VzPzogQnNDdXN0b21EYXRlc1tdO1xyXG5cclxuICAvKipcclxuICAgKiBNYXggRGF0ZSBSYW5nZSBpbiBkYXlzXHJcbiAgICovXHJcbiAgbWF4RGF0ZVJhbmdlPzogbnVtYmVyO1xyXG5cclxuICAvLyBEYXRlcGlja2VyRm9ybWF0T3B0aW9uc1xyXG4gIG1vbnRoVGl0bGUgPSAnTU1NTSc7XHJcbiAgeWVhclRpdGxlID0gJ1lZWVknO1xyXG4gIGRheUxhYmVsID0gJ0QnO1xyXG4gIG1vbnRoTGFiZWwgPSAnTU1NTSc7XHJcbiAgeWVhckxhYmVsID0gJ1lZWVknO1xyXG4gIHdlZWtOdW1iZXJzID0gJ3cnO1xyXG5cclxuICAvKipcclxuICAgKiBTaG93cyAndG9kYXknIGJ1dHRvblxyXG4gICAqL1xyXG4gIHNob3dUb2RheUJ1dHRvbiA9IGZhbHNlO1xyXG5cclxuICAvKipcclxuICAgKiBTaG93cyBjbGVhciBidXR0b25cclxuICAgKi9cclxuICBzaG93Q2xlYXJCdXR0b24gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogUG9zaXRpb25pbmcgb2YgJ3RvZGF5JyBidXR0b25cclxuICAgKi9cclxuICB0b2RheVBvc2l0aW9uID0gJ2NlbnRlcic7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBvc2l0aW9uaW5nIG9mICdjbGVhcicgYnV0dG9uXHJcbiAgICovXHJcbiAgY2xlYXJQb3NpdGlvbiA9ICdyaWdodCc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExhYmVsIGZvciAndG9kYXknIGJ1dHRvblxyXG4gICAqL1xyXG4gIHRvZGF5QnV0dG9uTGFiZWwgPSAnVG9kYXknO1xyXG5cclxuICAvKipcclxuICAgKiBMYWJlbCBmb3IgJ2NsZWFyJyBidXR0b25cclxuICAgKi9cclxuICBjbGVhckJ1dHRvbkxhYmVsID0gJ0NsZWFyJztcclxuXHJcbiAgLyoqXHJcbiAgICogTGFiZWwgZm9yICdjdXN0b20gcmFuZ2UnIGJ1dHRvblxyXG4gICAqL1xyXG4gIGN1c3RvbVJhbmdlQnV0dG9uTGFiZWwgPSAnQ3VzdG9tIFJhbmdlJztcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgdGltZXBpY2tlciB1bmRlciBkYXRlcGlja2VyXHJcbiAgICovXHJcbiAgd2l0aFRpbWVwaWNrZXIgPSBmYWxzZTtcclxuICAvKipcclxuICAgKiBTZXQgY3VycmVudCBob3VycywgbWludXRlcywgc2Vjb25kcyBhbmQgbWlsbGlzZWNvbmRzIGZvciBic1ZhbHVlXHJcbiAgICovXHJcbiAgaW5pdEN1cnJlbnRUaW1lPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBTZXQgYWxsb3dlZCBwb3NpdGlvbnMgb2YgY29udGFpbmVyLlxyXG4gICAqL1xyXG4gIGFsbG93ZWRQb3NpdGlvbnMgPSBbJ3RvcCcsICdib3R0b20nXTtcclxufVxyXG4iXX0=