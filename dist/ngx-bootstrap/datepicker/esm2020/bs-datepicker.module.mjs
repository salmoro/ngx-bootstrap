import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { TimepickerModule, TimepickerActions } from 'ngx-bootstrap/timepicker';
import { BsDatepickerInputDirective } from './bs-datepicker-input.directive';
import { BsDatepickerDirective } from './bs-datepicker.component';
import { BsDaterangepickerInputDirective } from './bs-daterangepicker-input.directive';
import { BsDaterangepickerDirective } from './bs-daterangepicker.component';
import { BsDatepickerInlineDirective } from './bs-datepicker-inline.component';
import { BsLocaleService } from './bs-locale.service';
import { BsDatepickerActions } from './reducer/bs-datepicker.actions';
import { BsDatepickerEffects } from './reducer/bs-datepicker.effects';
import { BsDatepickerStore } from './reducer/bs-datepicker.store';
import { BsDatepickerContainerComponent } from './themes/bs/bs-datepicker-container.component';
import { BsDaterangepickerContainerComponent } from './themes/bs/bs-daterangepicker-container.component';
import { BsDatepickerInlineContainerComponent } from './themes/bs/bs-datepicker-inline-container.component';
import { BsDaterangepickerInlineContainerComponent } from './themes/bs/bs-daterangepicker-inline-container.component';
import { BsDaterangepickerInlineDirective } from './bs-daterangepicker-inline.component';
import { BsCalendarLayoutComponent } from './themes/bs/bs-calendar-layout.component';
import { BsCurrentDateViewComponent } from './themes/bs/bs-current-date-view.component';
import { BsCustomDatesViewComponent } from './themes/bs/bs-custom-dates-view.component';
import { BsDatepickerDayDecoratorComponent } from './themes/bs/bs-datepicker-day-decorator.directive';
import { BsDatepickerNavigationViewComponent } from './themes/bs/bs-datepicker-navigation-view.component';
import { BsDaysCalendarViewComponent } from './themes/bs/bs-days-calendar-view.component';
import { BsMonthCalendarViewComponent } from './themes/bs/bs-months-calendar-view.component';
import { BsTimepickerViewComponent } from './themes/bs/bs-timepicker-view.component';
import { BsYearsCalendarViewComponent } from './themes/bs/bs-years-calendar-view.component';
import * as i0 from "@angular/core";
export class BsDatepickerModule {
    static forRoot() {
        return {
            ngModule: BsDatepickerModule,
            providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDatepickerStore,
                BsDatepickerActions,
                BsDatepickerEffects,
                BsLocaleService,
                TimepickerActions
            ]
        };
    }
}
BsDatepickerModule.ɵfac = function BsDatepickerModule_Factory(t) { return new (t || BsDatepickerModule)(); };
BsDatepickerModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: BsDatepickerModule });
BsDatepickerModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule, TooltipModule, TimepickerModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule, TooltipModule, TimepickerModule],
                declarations: [
                    BsCalendarLayoutComponent,
                    BsCurrentDateViewComponent,
                    BsCustomDatesViewComponent,
                    BsDatepickerDayDecoratorComponent,
                    BsDatepickerNavigationViewComponent,
                    BsDaysCalendarViewComponent,
                    BsMonthCalendarViewComponent,
                    BsTimepickerViewComponent,
                    BsYearsCalendarViewComponent,
                    BsDatepickerContainerComponent,
                    BsDatepickerDirective,
                    BsDatepickerInlineContainerComponent,
                    BsDatepickerInlineDirective,
                    BsDatepickerInputDirective,
                    BsDaterangepickerContainerComponent,
                    BsDaterangepickerDirective,
                    BsDaterangepickerInlineContainerComponent,
                    BsDaterangepickerInlineDirective,
                    BsDaterangepickerInputDirective
                ],
                entryComponents: [
                    BsDatepickerContainerComponent,
                    BsDaterangepickerContainerComponent,
                    BsDatepickerInlineContainerComponent,
                    BsDaterangepickerInlineContainerComponent
                ],
                exports: [
                    BsDatepickerContainerComponent,
                    BsDatepickerDirective,
                    BsDatepickerInlineContainerComponent,
                    BsDatepickerInlineDirective,
                    BsDatepickerInputDirective,
                    BsDaterangepickerContainerComponent,
                    BsDaterangepickerDirective,
                    BsDaterangepickerInlineContainerComponent,
                    BsDaterangepickerInlineDirective,
                    BsDaterangepickerInputDirective
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(BsDatepickerModule, { declarations: [BsCalendarLayoutComponent,
        BsCurrentDateViewComponent,
        BsCustomDatesViewComponent,
        BsDatepickerDayDecoratorComponent,
        BsDatepickerNavigationViewComponent,
        BsDaysCalendarViewComponent,
        BsMonthCalendarViewComponent,
        BsTimepickerViewComponent,
        BsYearsCalendarViewComponent,
        BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective], imports: [CommonModule, TooltipModule, TimepickerModule], exports: [BsDatepickerContainerComponent,
        BsDatepickerDirective,
        BsDatepickerInlineContainerComponent,
        BsDatepickerInlineDirective,
        BsDatepickerInputDirective,
        BsDaterangepickerContainerComponent,
        BsDaterangepickerDirective,
        BsDaterangepickerInlineContainerComponent,
        BsDaterangepickerInlineDirective,
        BsDaterangepickerInputDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZGF0ZXBpY2tlci9icy1kYXRlcGlja2VyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUF1QixRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDOUQsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFL0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBRS9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQzdFLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRS9FLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUN0RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUMvRixPQUFPLEVBQUUsbUNBQW1DLEVBQUUs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UUFDcEMsMkJBQTJCO1FBQzNCLDBCQUEwQjtRQUMxQixtQ0FBbUM7UUFDbkMsMEJBQTBCO1FBQzFCLHlDQUF5QztRQUN6QyxnQ0FBZ0M7UUFDaEMsK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tcG9uZW50TG9hZGVyRmFjdG9yeSB9IGZyb20gJ25neC1ib290c3RyYXAvY29tcG9uZW50LWxvYWRlcic7XHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5cclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJ25neC1ib290c3RyYXAvdG9vbHRpcCc7XHJcbmltcG9ydCB7IFRpbWVwaWNrZXJNb2R1bGUsIFRpbWVwaWNrZXJBY3Rpb25zIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC90aW1lcGlja2VyJztcclxuXHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRpcmVjdGl2ZSB9IGZyb20gJy4vYnMtZGF0ZXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0RhdGVyYW5nZXBpY2tlcklucHV0RGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcmFuZ2VwaWNrZXItaW5wdXQuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcGlja2VySW5saW5lRGlyZWN0aXZlIH0gZnJvbSAnLi9icy1kYXRlcGlja2VyLWlubGluZS5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQnNMb2NhbGVTZXJ2aWNlIH0gZnJvbSAnLi9icy1sb2NhbGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckFjdGlvbnMgfSBmcm9tICcuL3JlZHVjZXIvYnMtZGF0ZXBpY2tlci5hY3Rpb25zJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyRWZmZWN0cyB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLmVmZmVjdHMnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJTdG9yZSB9IGZyb20gJy4vcmVkdWNlci9icy1kYXRlcGlja2VyLnN0b3JlJztcclxuaW1wb3J0IHsgQnNEYXRlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtZGF0ZXBpY2tlci1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItY29udGFpbmVyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcGlja2VyLWlubGluZS1jb250YWluZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1kYXRlcmFuZ2VwaWNrZXItaW5saW5lLWNvbnRhaW5lci5jb21wb25lbnQnO1xyXG5cclxuaW1wb3J0IHsgQnNEYXRlcmFuZ2VwaWNrZXJJbmxpbmVEaXJlY3RpdmUgfSBmcm9tICcuL2JzLWRhdGVyYW5nZXBpY2tlci1pbmxpbmUuY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jYWxlbmRhci1sYXlvdXQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNDdXJyZW50RGF0ZVZpZXdDb21wb25lbnQgfSBmcm9tICcuL3RoZW1lcy9icy9icy1jdXJyZW50LWRhdGUtdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc0N1c3RvbURhdGVzVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWN1c3RvbS1kYXRlcy12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF0ZXBpY2tlckRheURlY29yYXRvckNvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItZGF5LWRlY29yYXRvci5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJOYXZpZ2F0aW9uVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzRGF5c0NhbGVuZGFyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLWRheXMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMtbW9udGhzLWNhbGVuZGFyLXZpZXcuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB9IGZyb20gJy4vdGhlbWVzL2JzL2JzLXRpbWVwaWNrZXItdmlldy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCc1llYXJzQ2FsZW5kYXJWaWV3Q29tcG9uZW50IH0gZnJvbSAnLi90aGVtZXMvYnMvYnMteWVhcnMtY2FsZW5kYXItdmlldy5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlLCBUaW1lcGlja2VyTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEJzQ2FsZW5kYXJMYXlvdXRDb21wb25lbnQsXHJcbiAgICBCc0N1cnJlbnREYXRlVmlld0NvbXBvbmVudCxcclxuICAgIEJzQ3VzdG9tRGF0ZXNWaWV3Q29tcG9uZW50LFxyXG4gICAgQnNEYXRlcGlja2VyRGF5RGVjb3JhdG9yQ29tcG9uZW50LFxyXG4gICAgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQsXHJcbiAgICBCc0RheXNDYWxlbmRhclZpZXdDb21wb25lbnQsXHJcbiAgICBCc01vbnRoQ2FsZW5kYXJWaWV3Q29tcG9uZW50LFxyXG4gICAgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCxcclxuICAgIEJzWWVhcnNDYWxlbmRhclZpZXdDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUsXHJcbiAgICBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcclxuICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICBCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEJzRGF0ZXJhbmdlcGlja2VySW5saW5lRGlyZWN0aXZlLFxyXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZW50cnlDb21wb25lbnRzOiBbXHJcbiAgICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVyYW5nZXBpY2tlckNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEJzRGF0ZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEJzRGF0ZXJhbmdlcGlja2VySW5saW5lQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBCc0RhdGVwaWNrZXJDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVDb250YWluZXJDb21wb25lbnQsXHJcbiAgICBCc0RhdGVwaWNrZXJJbmxpbmVEaXJlY3RpdmUsXHJcbiAgICBCc0RhdGVwaWNrZXJJbnB1dERpcmVjdGl2ZSxcclxuICAgIEJzRGF0ZXJhbmdlcGlja2VyQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJEaXJlY3RpdmUsXHJcbiAgICBCc0RhdGVyYW5nZXBpY2tlcklubGluZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICAgIEJzRGF0ZXJhbmdlcGlja2VySW5saW5lRGlyZWN0aXZlLFxyXG4gICAgQnNEYXRlcmFuZ2VwaWNrZXJJbnB1dERpcmVjdGl2ZVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJzRGF0ZXBpY2tlck1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxCc0RhdGVwaWNrZXJNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBCc0RhdGVwaWNrZXJNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENvbXBvbmVudExvYWRlckZhY3RvcnksXHJcbiAgICAgICAgUG9zaXRpb25pbmdTZXJ2aWNlLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlclN0b3JlLFxyXG4gICAgICAgIEJzRGF0ZXBpY2tlckFjdGlvbnMsXHJcbiAgICAgICAgQnNEYXRlcGlja2VyRWZmZWN0cyxcclxuICAgICAgICBCc0xvY2FsZVNlcnZpY2UsXHJcbiAgICAgICAgVGltZXBpY2tlckFjdGlvbnNcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19