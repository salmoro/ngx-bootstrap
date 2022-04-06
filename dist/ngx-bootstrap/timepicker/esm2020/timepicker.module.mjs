import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimepickerComponent } from './timepicker.component';
import { TimepickerActions } from './reducer/timepicker.actions';
import { TimepickerStore } from './reducer/timepicker.store';
import * as i0 from "@angular/core";
export class TimepickerModule {
    static forRoot() {
        return {
            ngModule: TimepickerModule,
            providers: [TimepickerActions, TimepickerStore]
        };
    }
}
TimepickerModule.ɵfac = function TimepickerModule_Factory(t) { return new (t || TimepickerModule)(); };
TimepickerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: TimepickerModule });
TimepickerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ providers: [TimepickerStore], imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TimepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [TimepickerComponent],
                exports: [TimepickerComponent],
                providers: [TimepickerStore]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(TimepickerModule, { declarations: [TimepickerComponent], imports: [CommonModule], exports: [TimepickerComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvdGltZXBpY2tlci90aW1lcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDakUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDRCQUE0QixDQUFDOztBQVE3RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsU0FBUyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsZUFBZSxDQUFDO1NBQ2hELENBQUM7SUFDSixDQUFDOztnRkFOVSxnQkFBZ0I7a0VBQWhCLGdCQUFnQjt1RUFGakIsQ0FBQyxlQUFlLENBQUMsWUFIbEIsQ0FBQyxZQUFZLENBQUM7dUZBS1osZ0JBQWdCO2NBTjVCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQ3ZCLFlBQVksRUFBRSxDQUFDLG1CQUFtQixDQUFDO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQztnQkFDOUIsU0FBUyxFQUFDLENBQUMsZUFBZSxDQUFDO2FBQzVCOzt3RkFDWSxnQkFBZ0IsbUJBSlosbUJBQW1CLGFBRHhCLFlBQVksYUFFWixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgVGltZXBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4vdGltZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyQWN0aW9ucyB9IGZyb20gJy4vcmVkdWNlci90aW1lcGlja2VyLmFjdGlvbnMnO1xyXG5pbXBvcnQgeyBUaW1lcGlja2VyU3RvcmUgfSBmcm9tICcuL3JlZHVjZXIvdGltZXBpY2tlci5zdG9yZSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW1RpbWVwaWNrZXJDb21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtUaW1lcGlja2VyQ29tcG9uZW50XSxcclxuICBwcm92aWRlcnM6W1RpbWVwaWNrZXJTdG9yZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRpbWVwaWNrZXJNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8VGltZXBpY2tlck1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IFRpbWVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1RpbWVwaWNrZXJBY3Rpb25zLCBUaW1lcGlja2VyU3RvcmVdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=