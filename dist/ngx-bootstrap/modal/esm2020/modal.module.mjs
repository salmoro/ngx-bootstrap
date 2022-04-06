import { NgModule } from '@angular/core';
import { PositioningService } from 'ngx-bootstrap/positioning';
import { ComponentLoaderFactory } from 'ngx-bootstrap/component-loader';
import { FocusTrapModule } from 'ngx-bootstrap/focus-trap';
import { ModalBackdropComponent } from './modal-backdrop.component';
import { ModalDirective } from './modal.directive';
import { ModalContainerComponent } from './modal-container.component';
import { BsModalService } from './bs-modal.service';
import * as i0 from "@angular/core";
export const focusTrapModule = FocusTrapModule.forRoot();
export class ModalModule {
    static forRoot() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
    static forChild() {
        return {
            ngModule: ModalModule,
            providers: [BsModalService, ComponentLoaderFactory, PositioningService]
        };
    }
}
ModalModule.ɵfac = function ModalModule_Factory(t) { return new (t || ModalModule)(); };
ModalModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: ModalModule });
ModalModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[FocusTrapModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalModule, [{
        type: NgModule,
        args: [{
                imports: [FocusTrapModule],
                declarations: [
                    ModalBackdropComponent,
                    ModalDirective,
                    ModalContainerComponent
                ],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ModalModule, { declarations: [ModalBackdropComponent,
        ModalDirective,
        ModalContainerComponent], imports: [FocusTrapModule], exports: [ModalBackdropComponent, ModalDirective] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL21vZGFsL21vZGFsLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsUUFBUSxFQUF1QixNQUFNLGVBQWUsQ0FBQztBQUU5RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUN4RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFM0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBQ3RFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQzs7QUFFcEQsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztBQVl6RCxNQUFNLE9BQU8sV0FBVztJQUN0QixNQUFNLENBQUMsT0FBTztRQUNaLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUM7U0FDeEUsQ0FBQztJQUNKLENBQUM7SUFDRCxNQUFNLENBQUMsUUFBUTtRQUNiLE9BQU87WUFDTCxRQUFRLEVBQUUsV0FBVztZQUNyQixTQUFTLEVBQUUsQ0FBQyxjQUFjLEVBQUUsc0JBQXNCLEVBQUUsa0JBQWtCLENBQUM7U0FDeEUsQ0FBQztJQUNKLENBQUM7O3NFQVpVLFdBQVc7NkRBQVgsV0FBVztpRUFUYixDQUFDLGVBQWUsQ0FBQzt1RkFTZixXQUFXO2NBVnZCLFFBQVE7ZUFBQztnQkFDUixPQUFPLEVBQUUsQ0FBQyxlQUFlLENBQUM7Z0JBQzFCLFlBQVksRUFBRTtvQkFDWixzQkFBc0I7b0JBQ3RCLGNBQWM7b0JBQ2QsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLENBQUM7Z0JBQ2pELGVBQWUsRUFBRSxDQUFDLHNCQUFzQixFQUFFLHVCQUF1QixDQUFDO2FBQ25FOzt3RkFDWSxXQUFXLG1CQVBwQixzQkFBc0I7UUFDdEIsY0FBYztRQUNkLHVCQUF1QixhQUpmLGVBQWUsYUFNZixzQkFBc0IsRUFBRSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE1vZHVsZVdpdGhQcm92aWRlcnMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFBvc2l0aW9uaW5nU2VydmljZSB9IGZyb20gJ25neC1ib290c3RyYXAvcG9zaXRpb25pbmcnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRMb2FkZXJGYWN0b3J5IH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9jb21wb25lbnQtbG9hZGVyJztcclxuaW1wb3J0IHsgRm9jdXNUcmFwTW9kdWxlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC9mb2N1cy10cmFwJztcclxuXHJcbmltcG9ydCB7IE1vZGFsQmFja2Ryb3BDb21wb25lbnQgfSBmcm9tICcuL21vZGFsLWJhY2tkcm9wLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1vZGFsRGlyZWN0aXZlIH0gZnJvbSAnLi9tb2RhbC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vbW9kYWwtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJzTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi9icy1tb2RhbC5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCBjb25zdCBmb2N1c1RyYXBNb2R1bGUgPSBGb2N1c1RyYXBNb2R1bGUuZm9yUm9vdCgpO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbRm9jdXNUcmFwTW9kdWxlXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIE1vZGFsQmFja2Ryb3BDb21wb25lbnQsXHJcbiAgICBNb2RhbERpcmVjdGl2ZSxcclxuICAgIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XHJcbiAgXSxcclxuICBleHBvcnRzOiBbTW9kYWxCYWNrZHJvcENvbXBvbmVudCwgTW9kYWxEaXJlY3RpdmVdLFxyXG4gIGVudHJ5Q29tcG9uZW50czogW01vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTW9kYWxNb2R1bGUge1xyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnM8TW9kYWxNb2R1bGU+IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG5nTW9kdWxlOiBNb2RhbE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbQnNNb2RhbFNlcnZpY2UsIENvbXBvbmVudExvYWRlckZhY3RvcnksIFBvc2l0aW9uaW5nU2VydmljZV1cclxuICAgIH07XHJcbiAgfVxyXG4gIHN0YXRpYyBmb3JDaGlsZCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1vZGFsTW9kdWxlPiB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTW9kYWxNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW0JzTW9kYWxTZXJ2aWNlLCBDb21wb25lbnRMb2FkZXJGYWN0b3J5LCBQb3NpdGlvbmluZ1NlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG4iXX0=