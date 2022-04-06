import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FocusTrapManager } from './focus-trap-manager';
import { InteractivityChecker } from './interactivity-checker';
import { FocusTrapDirective } from './focus-trap';
import { Platform } from './platform';
import * as i0 from "@angular/core";
export class FocusTrapModule {
    static forRoot() {
        return {
            ngModule: FocusTrapModule,
            providers: [
                FocusTrapManager,
                Platform,
                InteractivityChecker
            ]
        };
    }
}
FocusTrapModule.ɵfac = function FocusTrapModule_Factory(t) { return new (t || FocusTrapModule)(); };
FocusTrapModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: FocusTrapModule });
FocusTrapModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FocusTrapModule, [{
        type: NgModule,
        args: [{
                imports: [CommonModule],
                declarations: [FocusTrapDirective],
                exports: [FocusTrapDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(FocusTrapModule, { declarations: [FocusTrapDirective], imports: [CommonModule], exports: [FocusTrapDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9jdXMtdHJhcC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZm9jdXMtdHJhcC9mb2N1cy10cmFwLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sY0FBYyxDQUFDO0FBQ2xELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxZQUFZLENBQUM7O0FBT3RDLE1BQU0sT0FBTyxlQUFlO0lBQzFCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFNBQVMsRUFBRTtnQkFDVCxnQkFBZ0I7Z0JBQ2hCLFFBQVE7Z0JBQ1Isb0JBQW9CO2FBQ3JCO1NBQ0YsQ0FBQztJQUNKLENBQUM7OzhFQVZVLGVBQWU7aUVBQWYsZUFBZTtxRUFKakIsQ0FBQyxZQUFZLENBQUM7dUZBSVosZUFBZTtjQUwzQixRQUFRO2VBQUM7Z0JBQ1IsT0FBTyxFQUFFLENBQUMsWUFBWSxDQUFDO2dCQUN2QixZQUFZLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQztnQkFDbEMsT0FBTyxFQUFFLENBQUMsa0JBQWtCLENBQUM7YUFDOUI7O3dGQUNZLGVBQWUsbUJBSFgsa0JBQWtCLGFBRHZCLFlBQVksYUFFWixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgRm9jdXNUcmFwTWFuYWdlciB9IGZyb20gJy4vZm9jdXMtdHJhcC1tYW5hZ2VyJztcclxuaW1wb3J0IHsgSW50ZXJhY3Rpdml0eUNoZWNrZXIgfSBmcm9tICcuL2ludGVyYWN0aXZpdHktY2hlY2tlcic7XHJcbmltcG9ydCB7IEZvY3VzVHJhcERpcmVjdGl2ZSB9IGZyb20gJy4vZm9jdXMtdHJhcCc7XHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnLi9wbGF0Zm9ybSc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0ZvY3VzVHJhcERpcmVjdGl2ZV0sXHJcbiAgZXhwb3J0czogW0ZvY3VzVHJhcERpcmVjdGl2ZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEZvY3VzVHJhcE1vZHVsZSB7XHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVyczxGb2N1c1RyYXBNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBGb2N1c1RyYXBNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIEZvY3VzVHJhcE1hbmFnZXIsXHJcbiAgICAgICAgUGxhdGZvcm0sXHJcbiAgICAgICAgSW50ZXJhY3Rpdml0eUNoZWNrZXJcclxuICAgICAgXVxyXG4gICAgfTtcclxuICB9XHJcbn1cclxuIl19