import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { BsDatepickerConfig } from '../../bs-datepicker.config';
import * as i0 from "@angular/core";
import * as i1 from "../../bs-datepicker.config";
const _c0 = ["bsDatepickerDayDecorator", ""];
export class BsDatepickerDayDecoratorComponent {
    constructor(_config, _elRef, _renderer) {
        this._config = _config;
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.day = { date: new Date(), label: '' };
    }
    ngOnInit() {
        if (this.day?.isToday && this._config && this._config.customTodayClass) {
            this._renderer.addClass(this._elRef.nativeElement, this._config.customTodayClass);
        }
        if (typeof this.day?.customClasses === 'string') {
            this.day?.customClasses.split(' ')
                .filter((className) => className)
                .forEach((className) => {
                this._renderer.addClass(this._elRef.nativeElement, className);
            });
        }
    }
}
BsDatepickerDayDecoratorComponent.ɵfac = function BsDatepickerDayDecoratorComponent_Factory(t) { return new (t || BsDatepickerDayDecoratorComponent)(i0.ɵɵdirectiveInject(i1.BsDatepickerConfig), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
BsDatepickerDayDecoratorComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerDayDecoratorComponent, selectors: [["", "bsDatepickerDayDecorator", ""]], hostVars: 16, hostBindings: function BsDatepickerDayDecoratorComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("disabled", ctx.day.isDisabled)("is-highlighted", ctx.day.isHovered)("is-other-month", ctx.day.isOtherMonth)("is-active-other-month", ctx.day.isOtherMonthHovered)("in-range", ctx.day.isInRange)("select-start", ctx.day.isSelectionStart)("select-end", ctx.day.isSelectionEnd)("selected", ctx.day.isSelected);
    } }, inputs: { day: "day" }, attrs: _c0, decls: 1, vars: 1, template: function BsDatepickerDayDecoratorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtext(0);
    } if (rf & 2) {
        i0.ɵɵtextInterpolate(ctx.day && ctx.day.label || "");
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerDayDecoratorComponent, [{
        type: Component,
        args: [{
                selector: '[bsDatepickerDayDecorator]',
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    '[class.disabled]': 'day.isDisabled',
                    '[class.is-highlighted]': 'day.isHovered',
                    '[class.is-other-month]': 'day.isOtherMonth',
                    '[class.is-active-other-month]': 'day.isOtherMonthHovered',
                    '[class.in-range]': 'day.isInRange',
                    '[class.select-start]': 'day.isSelectionStart',
                    '[class.select-end]': 'day.isSelectionEnd',
                    '[class.selected]': 'day.isSelected'
                },
                template: `{{ day && day.label || '' }}`
            }]
    }], function () { return [{ type: i1.BsDatepickerConfig }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { day: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1kYXktZGVjb3JhdG9yLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWRheS1kZWNvcmF0b3IuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBRUwsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDRCQUE0QixDQUFDOzs7O0FBa0JoRSxNQUFNLE9BQU8saUNBQWlDO0lBRzVDLFlBQ1UsT0FBMkIsRUFDM0IsTUFBa0IsRUFDbEIsU0FBb0I7UUFGcEIsWUFBTyxHQUFQLE9BQU8sQ0FBb0I7UUFDM0IsV0FBTSxHQUFOLE1BQU0sQ0FBWTtRQUNsQixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBTHJCLFFBQUcsR0FBaUIsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFNekQsQ0FBQztJQUVMLFFBQVE7UUFFTixJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUN0RSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUM7U0FDbkY7UUFFRCxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxhQUFhLEtBQUssUUFBUSxFQUFFO1lBQy9DLElBQUksQ0FBQyxHQUFHLEVBQUUsYUFBYSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7aUJBQy9CLE1BQU0sQ0FBQyxDQUFDLFNBQWlCLEVBQUUsRUFBRSxDQUFDLFNBQVMsQ0FBQztpQkFDeEMsT0FBTyxDQUFDLENBQUMsU0FBaUIsRUFBRSxFQUFFO2dCQUM3QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztTQUNOO0lBQ0gsQ0FBQzs7a0hBdEJVLGlDQUFpQztvRkFBakMsaUNBQWlDOzs7UUFGakMsWUFBNEI7O1FBQTVCLG9EQUE0Qjs7dUZBRTVCLGlDQUFpQztjQWY3QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLElBQUksRUFBRTtvQkFDSixrQkFBa0IsRUFBRSxnQkFBZ0I7b0JBQ3BDLHdCQUF3QixFQUFFLGVBQWU7b0JBQ3pDLHdCQUF3QixFQUFFLGtCQUFrQjtvQkFDNUMsK0JBQStCLEVBQUUseUJBQXlCO29CQUMxRCxrQkFBa0IsRUFBRSxlQUFlO29CQUNuQyxzQkFBc0IsRUFBRSxzQkFBc0I7b0JBQzlDLG9CQUFvQixFQUFFLG9CQUFvQjtvQkFDMUMsa0JBQWtCLEVBQUUsZ0JBQWdCO2lCQUNyQztnQkFDRCxRQUFRLEVBQUUsOEJBQThCO2FBQ3pDO3NIQUVVLEdBQUc7a0JBQVgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgT25Jbml0LFxyXG4gIFJlbmRlcmVyMlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29uZmlnIH0gZnJvbSAnLi4vLi4vYnMtZGF0ZXBpY2tlci5jb25maWcnO1xyXG5pbXBvcnQgeyBEYXlWaWV3TW9kZWwgfSBmcm9tICcuLi8uLi9tb2RlbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbYnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yXScsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5kaXNhYmxlZF0nOiAnZGF5LmlzRGlzYWJsZWQnLFxyXG4gICAgJ1tjbGFzcy5pcy1oaWdobGlnaHRlZF0nOiAnZGF5LmlzSG92ZXJlZCcsXHJcbiAgICAnW2NsYXNzLmlzLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoJyxcclxuICAgICdbY2xhc3MuaXMtYWN0aXZlLW90aGVyLW1vbnRoXSc6ICdkYXkuaXNPdGhlck1vbnRoSG92ZXJlZCcsXHJcbiAgICAnW2NsYXNzLmluLXJhbmdlXSc6ICdkYXkuaXNJblJhbmdlJyxcclxuICAgICdbY2xhc3Muc2VsZWN0LXN0YXJ0XSc6ICdkYXkuaXNTZWxlY3Rpb25TdGFydCcsXHJcbiAgICAnW2NsYXNzLnNlbGVjdC1lbmRdJzogJ2RheS5pc1NlbGVjdGlvbkVuZCcsXHJcbiAgICAnW2NsYXNzLnNlbGVjdGVkXSc6ICdkYXkuaXNTZWxlY3RlZCdcclxuICB9LFxyXG4gIHRlbXBsYXRlOiBge3sgZGF5ICYmIGRheS5sYWJlbCB8fCAnJyB9fWBcclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgZGF5OiBEYXlWaWV3TW9kZWwgPSB7IGRhdGU6IG5ldyBEYXRlKCksIGxhYmVsOiAnJyB9O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2NvbmZpZzogQnNEYXRlcGlja2VyQ29uZmlnLFxyXG4gICAgcHJpdmF0ZSBfZWxSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMuZGF5Py5pc1RvZGF5ICYmIHRoaXMuX2NvbmZpZyAmJiB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcykge1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLl9jb25maWcuY3VzdG9tVG9kYXlDbGFzcyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmRheT8uY3VzdG9tQ2xhc3NlcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5kYXk/LmN1c3RvbUNsYXNzZXMuc3BsaXQoJyAnKVxyXG4gICAgICAgIC5maWx0ZXIoKGNsYXNzTmFtZTogc3RyaW5nKSA9PiBjbGFzc05hbWUpXHJcbiAgICAgICAgLmZvckVhY2goKGNsYXNzTmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=