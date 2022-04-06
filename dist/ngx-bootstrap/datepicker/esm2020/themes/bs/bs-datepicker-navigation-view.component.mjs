import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BsNavigationDirection } from '../../models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function BsDatepickerNavigationViewComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " \u200B ");
    i0.ɵɵelementStart(2, "button", 2);
    i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_ng_container_3_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.view("month"); });
    i0.ɵɵelementStart(3, "span");
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.calendar.monthTitle);
} }
export class BsDatepickerNavigationViewComponent {
    constructor() {
        this.onNavigate = new EventEmitter();
        this.onViewMode = new EventEmitter();
    }
    navTo(down) {
        this.onNavigate.emit(down ? BsNavigationDirection.DOWN : BsNavigationDirection.UP);
    }
    view(viewMode) {
        this.onViewMode.emit(viewMode);
    }
}
BsDatepickerNavigationViewComponent.ɵfac = function BsDatepickerNavigationViewComponent_Factory(t) { return new (t || BsDatepickerNavigationViewComponent)(); };
BsDatepickerNavigationViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsDatepickerNavigationViewComponent, selectors: [["bs-datepicker-navigation-view"]], inputs: { calendar: "calendar" }, outputs: { onNavigate: "onNavigate", onViewMode: "onViewMode" }, decls: 12, vars: 8, consts: [["type", "button", 1, "previous", 3, "disabled", "click"], [4, "ngIf"], ["type", "button", 1, "current", 3, "click"], ["type", "button", 1, "next", 3, "disabled", "click"]], template: function BsDatepickerNavigationViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_0_listener() { return ctx.navTo(true); });
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵtext(2, "\u2039");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, BsDatepickerNavigationViewComponent_ng_container_3_Template, 5, 1, "ng-container", 1);
        i0.ɵɵtext(4, " \u200B ");
        i0.ɵɵelementStart(5, "button", 2);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_5_listener() { return ctx.view("year"); });
        i0.ɵɵelementStart(6, "span");
        i0.ɵɵtext(7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtext(8, " \u200B ");
        i0.ɵɵelementStart(9, "button", 3);
        i0.ɵɵlistener("click", function BsDatepickerNavigationViewComponent_Template_button_click_9_listener() { return ctx.navTo(false); });
        i0.ɵɵelementStart(10, "span");
        i0.ɵɵtext(11, "\u203A");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵstyleProp("visibility", ctx.calendar.hideLeftArrow ? "hidden" : "visible");
        i0.ɵɵproperty("disabled", ctx.calendar.disableLeftArrow);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.calendar && ctx.calendar.monthTitle);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate(ctx.calendar.yearTitle);
        i0.ɵɵadvance(2);
        i0.ɵɵstyleProp("visibility", ctx.calendar.hideRightArrow ? "hidden" : "visible");
        i0.ɵɵproperty("disabled", ctx.calendar.disableRightArrow);
    } }, directives: [i1.NgIf], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsDatepickerNavigationViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-datepicker-navigation-view',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <button class="previous"
            [disabled]="calendar.disableLeftArrow"
            [style.visibility]="calendar.hideLeftArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(true)">
      <span>&lsaquo;</span>
    </button>

    <ng-container *ngIf="calendar && calendar.monthTitle">
      &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

      <button class="current"
            type="button"
            (click)="view('month')"
      ><span>{{ calendar.monthTitle }}</span>
      </button>
    </ng-container>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="current" (click)="view('year')" type="button">
      <span>{{ calendar.yearTitle }}</span>
    </button>

    &#8203;  <!-- zero-width space needed for correct alignment
                  with preserveWhitespaces: false in Angular -->

    <button class="next"
            [disabled]="calendar.disableRightArrow"
            [style.visibility]="calendar.hideRightArrow ? 'hidden' : 'visible'"
            type="button"
            (click)="navTo(false)"><span>&rsaquo;</span>
    </button>
  `
            }]
    }], null, { calendar: [{
            type: Input
        }], onNavigate: [{
            type: Output
        }], onViewMode: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2RhdGVwaWNrZXIvdGhlbWVzL2JzL2JzLWRhdGVwaWNrZXItbmF2aWdhdGlvbi12aWV3LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hHLE9BQU8sRUFBd0IscUJBQXFCLEVBQXVCLE1BQU0sY0FBYyxDQUFDOzs7OztJQWM1Riw2QkFBc0Q7SUFDcEQsd0JBQVM7SUFHVCxpQ0FHQztJQURLLHlMQUFTLFlBQUssT0FBTyxDQUFDLElBQUM7SUFDNUIsNEJBQU07SUFBQSxZQUF5QjtJQUFBLGlCQUFPO0lBQ3ZDLGlCQUFTO0lBQ1gsMEJBQWU7OztJQUZOLGVBQXlCO0lBQXpCLGdEQUF5Qjs7QUFzQnRDLE1BQU0sT0FBTyxtQ0FBbUM7SUF6Q2hEO1FBNENZLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBeUIsQ0FBQztRQUN2RCxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQXdCLENBQUM7S0FXakU7SUFUQyxLQUFLLENBQUMsSUFBYTtRQUNqQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDbEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsQ0FDN0QsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUFJLENBQUMsUUFBOEI7UUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7c0hBZFUsbUNBQW1DO3NGQUFuQyxtQ0FBbUM7UUFyQzVDLGlDQUk4QjtRQUF0QixnSEFBUyxVQUFNLElBQUksQ0FBQyxJQUFDO1FBQzNCLDRCQUFNO1FBQUEsc0JBQVE7UUFBQSxpQkFBTztRQUN2QixpQkFBUztRQUVULHNHQVNlO1FBRWYsd0JBQVM7UUFHVCxpQ0FBNkQ7UUFBckMsZ0hBQVMsU0FBSyxNQUFNLENBQUMsSUFBQztRQUM1Qyw0QkFBTTtRQUFBLFlBQXdCO1FBQUEsaUJBQU87UUFDdkMsaUJBQVM7UUFFVCx3QkFBUztRQUdULGlDQUkrQjtRQUF2QixnSEFBUyxVQUFNLEtBQUssQ0FBQyxJQUFDO1FBQUMsNkJBQU07UUFBQSx1QkFBUTtRQUFBLGlCQUFPO1FBQ3BELGlCQUFTOztRQWhDRCwrRUFBa0U7UUFEbEUsd0RBQXNDO1FBTy9CLGVBQXFDO1FBQXJDLDhEQUFxQztRQWU1QyxlQUF3QjtRQUF4Qiw0Q0FBd0I7UUFReEIsZUFBbUU7UUFBbkUsZ0ZBQW1FO1FBRG5FLHlEQUF1Qzs7dUZBT3RDLG1DQUFtQztjQXpDL0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9DVDthQUNGO2dCQUVVLFFBQVE7a0JBQWhCLEtBQUs7WUFFSSxVQUFVO2tCQUFuQixNQUFNO1lBQ0csVUFBVTtrQkFBbkIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCc0RhdGVwaWNrZXJWaWV3TW9kZSwgQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLCBOYXZpZ2F0aW9uVmlld01vZGVsIH0gZnJvbSAnLi4vLi4vbW9kZWxzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXZpZXcnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwicHJldmlvdXNcIlxyXG4gICAgICAgICAgICBbZGlzYWJsZWRdPVwiY2FsZW5kYXIuZGlzYWJsZUxlZnRBcnJvd1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVMZWZ0QXJyb3cgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJ1wiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwibmF2VG8odHJ1ZSlcIj5cclxuICAgICAgPHNwYW4+JmxzYXF1bzs8L3NwYW4+XHJcbiAgICA8L2J1dHRvbj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2FsZW5kYXIgJiYgY2FsZW5kYXIubW9udGhUaXRsZVwiPlxyXG4gICAgICAmIzgyMDM7ICA8IS0tIHplcm8td2lkdGggc3BhY2UgbmVlZGVkIGZvciBjb3JyZWN0IGFsaWdubWVudFxyXG4gICAgICAgICAgICAgICAgICB3aXRoIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlIGluIEFuZ3VsYXIgLS0+XHJcblxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAoY2xpY2spPVwidmlldygnbW9udGgnKVwiXHJcbiAgICAgID48c3Bhbj57eyBjYWxlbmRhci5tb250aFRpdGxlIH19PC9zcGFuPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY3VycmVudFwiIChjbGljayk9XCJ2aWV3KCd5ZWFyJylcIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgIDxzcGFuPnt7IGNhbGVuZGFyLnllYXJUaXRsZSB9fTwvc3Bhbj5cclxuICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICYjODIwMzsgIDwhLS0gemVyby13aWR0aCBzcGFjZSBuZWVkZWQgZm9yIGNvcnJlY3QgYWxpZ25tZW50XHJcbiAgICAgICAgICAgICAgICAgIHdpdGggcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UgaW4gQW5ndWxhciAtLT5cclxuXHJcbiAgICA8YnV0dG9uIGNsYXNzPVwibmV4dFwiXHJcbiAgICAgICAgICAgIFtkaXNhYmxlZF09XCJjYWxlbmRhci5kaXNhYmxlUmlnaHRBcnJvd1wiXHJcbiAgICAgICAgICAgIFtzdHlsZS52aXNpYmlsaXR5XT1cImNhbGVuZGFyLmhpZGVSaWdodEFycm93ID8gJ2hpZGRlbicgOiAndmlzaWJsZSdcIlxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cIm5hdlRvKGZhbHNlKVwiPjxzcGFuPiZyc2FxdW87PC9zcGFuPlxyXG4gICAgPC9idXR0b24+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNEYXRlcGlja2VyTmF2aWdhdGlvblZpZXdDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIGNhbGVuZGFyITogTmF2aWdhdGlvblZpZXdNb2RlbDtcclxuXHJcbiAgQE91dHB1dCgpIG9uTmF2aWdhdGUgPSBuZXcgRXZlbnRFbWl0dGVyPEJzTmF2aWdhdGlvbkRpcmVjdGlvbj4oKTtcclxuICBAT3V0cHV0KCkgb25WaWV3TW9kZSA9IG5ldyBFdmVudEVtaXR0ZXI8QnNEYXRlcGlja2VyVmlld01vZGU+KCk7XHJcblxyXG4gIG5hdlRvKGRvd246IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMub25OYXZpZ2F0ZS5lbWl0KFxyXG4gICAgICBkb3duID8gQnNOYXZpZ2F0aW9uRGlyZWN0aW9uLkRPV04gOiBCc05hdmlnYXRpb25EaXJlY3Rpb24uVVBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICB2aWV3KHZpZXdNb2RlOiBCc0RhdGVwaWNrZXJWaWV3TW9kZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZpZXdNb2RlLmVtaXQodmlld01vZGUpO1xyXG4gIH1cclxufVxyXG4iXX0=