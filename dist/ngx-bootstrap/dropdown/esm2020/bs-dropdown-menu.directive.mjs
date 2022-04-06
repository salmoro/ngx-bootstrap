import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { BsDropdownState } from './bs-dropdown.state';
import * as i0 from "@angular/core";
import * as i1 from "./bs-dropdown.state";
export class BsDropdownMenuDirective {
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.ɵfac = function BsDropdownMenuDirective_Factory(t) { return new (t || BsDropdownMenuDirective)(i0.ɵɵdirectiveInject(i1.BsDropdownState), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.TemplateRef)); };
BsDropdownMenuDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BsDropdownMenuDirective, selectors: [["", "bsDropdownMenu", ""], ["", "dropdownMenu", ""]], exportAs: ["bs-dropdown-menu"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDropdownMenuDirective, [{
        type: Directive,
        args: [{
                selector: '[bsDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            }]
    }], function () { return [{ type: i1.BsDropdownState }, { type: i0.ViewContainerRef }, { type: i0.TemplateRef }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZHJvcGRvd24vYnMtZHJvcGRvd24tbWVudS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHFCQUFxQixDQUFDOzs7QUFNdEQsTUFBTSxPQUFPLHVCQUF1QjtJQUNsQyxZQUNFLE1BQXVCLEVBQ3ZCLGNBQWdDLEVBQ2hDLFlBQWtEO1FBRWxELE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUN6QixXQUFXLEVBQUUsWUFBWTtZQUN6QixhQUFhLEVBQUUsY0FBYztTQUM5QixDQUFDLENBQUM7SUFDTCxDQUFDOzs4RkFWVSx1QkFBdUI7MEVBQXZCLHVCQUF1Qjt1RkFBdkIsdUJBQXVCO2NBSm5DLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsaUNBQWlDO2dCQUMzQyxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBUZW1wbGF0ZVJlZiwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0Ryb3Bkb3duU3RhdGUgfSBmcm9tICcuL2JzLWRyb3Bkb3duLnN0YXRlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2JzRHJvcGRvd25NZW51XSxbZHJvcGRvd25NZW51XScsXHJcbiAgZXhwb3J0QXM6ICdicy1kcm9wZG93bi1tZW51J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEcm9wZG93bk1lbnVEaXJlY3RpdmUge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgX3N0YXRlOiBCc0Ryb3Bkb3duU3RhdGUsXHJcbiAgICBfdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZixcclxuICAgIF90ZW1wbGF0ZVJlZjogVGVtcGxhdGVSZWY8QnNEcm9wZG93bk1lbnVEaXJlY3RpdmU+XHJcbiAgKSB7XHJcbiAgICBfc3RhdGUucmVzb2x2ZURyb3Bkb3duTWVudSh7XHJcbiAgICAgIHRlbXBsYXRlUmVmOiBfdGVtcGxhdGVSZWYsXHJcbiAgICAgIHZpZXdDb250YWluZXI6IF92aWV3Q29udGFpbmVyXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19