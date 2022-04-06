import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SortableComponent } from './sortable.component';
import { DraggableItemService } from './draggable-item.service';
import * as i0 from "@angular/core";
export class SortableModule {
    static forRoot() {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    }
}
SortableModule.ɵfac = function SortableModule_Factory(t) { return new (t || SortableModule)(); };
SortableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SortableModule });
SortableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortableModule, [{
        type: NgModule,
        args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortableModule, { declarations: [SortableComponent], imports: [CommonModule], exports: [SortableComponent] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NvcnRhYmxlL3NvcnRhYmxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDekQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBT2hFLE1BQU0sT0FBTyxjQUFjO0lBQ3pCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTyxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUMsRUFBRSxDQUFDO0lBQ3pFLENBQUM7OzRFQUhVLGNBQWM7Z0VBQWQsY0FBYztvRUFIaEIsQ0FBQyxZQUFZLENBQUM7dUZBR1osY0FBYztjQUwxQixRQUFRO2VBQUM7Z0JBQ1IsWUFBWSxFQUFFLENBQUMsaUJBQWlCLENBQUM7Z0JBQ2pDLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFLENBQUMsaUJBQWlCLENBQUM7YUFDN0I7O3dGQUNZLGNBQWMsbUJBSlYsaUJBQWlCLGFBQ3RCLFlBQVksYUFDWixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTW9kdWxlV2l0aFByb3ZpZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgU29ydGFibGVDb21wb25lbnQgfSBmcm9tICcuL3NvcnRhYmxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW1TZXJ2aWNlIH0gZnJvbSAnLi9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbU29ydGFibGVDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGV4cG9ydHM6IFtTb3J0YWJsZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlTW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPFNvcnRhYmxlTW9kdWxlPiB7XHJcbiAgICByZXR1cm4geyBuZ01vZHVsZTogU29ydGFibGVNb2R1bGUsIHByb3ZpZGVyczogW0RyYWdnYWJsZUl0ZW1TZXJ2aWNlXSB9O1xyXG4gIH1cclxufVxyXG4iXX0=