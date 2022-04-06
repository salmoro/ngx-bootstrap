import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PagerComponent } from './pager.component';
import { PaginationComponent } from './pagination.component';
import * as i0 from "@angular/core";
export class PaginationModule {
    static forRoot() {
        return { ngModule: PaginationModule, providers: [] };
    }
}
PaginationModule.ɵfac = function PaginationModule_Factory(t) { return new (t || PaginationModule)(); };
PaginationModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: PaginationModule });
PaginationModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [PagerComponent, PaginationComponent],
                exports: [PagerComponent, PaginationComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(PaginationModule, { declarations: [PagerComponent, PaginationComponent], imports: [CommonModule], exports: [PagerComponent, PaginationComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBdUIsTUFBTSxlQUFlLENBQUM7QUFFOUQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHdCQUF3QixDQUFDOztBQU83RCxNQUFNLE9BQU8sZ0JBQWdCO0lBQzNCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDdkQsQ0FBQzs7Z0ZBSFUsZ0JBQWdCO2tFQUFoQixnQkFBZ0I7c0VBSmxCLENBQUMsWUFBWSxDQUFDO3VGQUlaLGdCQUFnQjtjQUw1QixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxjQUFjLEVBQUUsbUJBQW1CLENBQUM7Z0JBQ25ELE9BQU8sRUFBRSxDQUFDLGNBQWMsRUFBRSxtQkFBbUIsQ0FBQzthQUMvQzs7d0ZBQ1ksZ0JBQWdCLG1CQUhaLGNBQWMsRUFBRSxtQkFBbUIsYUFEeEMsWUFBWSxhQUVaLGNBQWMsRUFBRSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgUGFnZXJDb21wb25lbnQgfSBmcm9tICcuL3BhZ2VyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFBhZ2luYXRpb25Db21wb25lbnQgfSBmcm9tICcuL3BhZ2luYXRpb24uY29tcG9uZW50JztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbUGFnZXJDb21wb25lbnQsIFBhZ2luYXRpb25Db21wb25lbnRdLFxyXG4gIGV4cG9ydHM6IFtQYWdlckNvbXBvbmVudCwgUGFnaW5hdGlvbkNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFBhZ2luYXRpb25Nb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8UGFnaW5hdGlvbk1vZHVsZT4ge1xyXG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IFBhZ2luYXRpb25Nb2R1bGUsIHByb3ZpZGVyczogW10gfTtcclxuICB9XHJcbn1cclxuIl19