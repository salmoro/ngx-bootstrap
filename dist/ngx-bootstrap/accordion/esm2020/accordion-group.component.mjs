import { Component, HostBinding, Inject, Input, Output, EventEmitter } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import { AccordionComponent } from './accordion.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "ngx-bootstrap/collapse";
import * as i3 from "./accordion.component";
const _c0 = function (a0) { return { "text-muted": a0 }; };
function AccordionPanelComponent_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(2, _c0, ctx_r0.isDisabled));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.heading, " ");
} }
const _c1 = [[["", "accordion-heading", ""]], "*"];
const _c2 = ["[accordion-heading]", "*"];
/**
 * ### Accordion heading
 * Instead of using `heading` attribute on the `accordion-group`, you can use
 * an `accordion-heading` attribute on `any` element inside of a group that
 * will be used as group's header template.
 */
export class AccordionPanelComponent {
    constructor(accordion) {
        /** turn on/off animation */
        this.isAnimated = false;
        /** Provides an ability to use Bootstrap's contextual panel classes
         * (`panel-primary`, `panel-success`, `panel-info`, etc...).
         * List of all available classes [available here]
         * (https://getbootstrap.com/docs/3.3/components/#panels-alternatives)
         */
        this.panelClass = 'panel-default';
        /** if <code>true</code> — disables accordion group */
        this.isDisabled = false;
        /** Emits when the opened state changes */
        this.isOpenChange = new EventEmitter();
        this._isOpen = false;
        this.accordion = accordion;
    }
    // Questionable, maybe .panel-open should be on child div.panel element?
    /** Is accordion group open or closed. This property supports two-way binding */
    get isOpen() {
        return this._isOpen;
    }
    set isOpen(value) {
        if (value !== this.isOpen) {
            if (value) {
                this.accordion.closeOtherPanels(this);
            }
            this._isOpen = value;
            Promise.resolve(null)
                .then(() => {
                this.isOpenChange.emit(value);
            });
        }
    }
    get isBs3() {
        return isBs3();
    }
    ngOnInit() {
        this.accordion.addGroup(this);
    }
    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }
    toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        }
    }
}
AccordionPanelComponent.ɵfac = function AccordionPanelComponent_Factory(t) { return new (t || AccordionPanelComponent)(i0.ɵɵdirectiveInject(AccordionComponent)); };
AccordionPanelComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionPanelComponent, selectors: [["accordion-group"], ["accordion-panel"]], hostAttrs: [1, "panel", 2, "display", "block"], hostVars: 2, hostBindings: function AccordionPanelComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵclassProp("panel-open", ctx.isOpen);
    } }, inputs: { heading: "heading", panelClass: "panelClass", isDisabled: "isDisabled", isOpen: "isOpen" }, outputs: { isOpenChange: "isOpenChange" }, ngContentSelectors: _c2, decls: 9, vars: 6, consts: [[1, "panel", "card", 3, "ngClass"], ["role", "tab", 1, "panel-heading", "card-header", 3, "ngClass", "click"], [1, "panel-title"], ["role", "button", 1, "accordion-toggle"], ["class", "btn btn-link", "type", "button", 3, "ngClass", 4, "ngIf"], ["role", "tabpanel", 1, "panel-collapse", "collapse", 3, "collapse", "isAnimated"], [1, "panel-body", "card-block", "card-body"], ["type", "button", 1, "btn", "btn-link", 3, "ngClass"]], template: function AccordionPanelComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵlistener("click", function AccordionPanelComponent_Template_div_click_1_listener() { return ctx.toggleOpen(); });
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, AccordionPanelComponent_button_4_Template, 2, 4, "button", 4);
        i0.ɵɵprojection(5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 5);
        i0.ɵɵelementStart(7, "div", 6);
        i0.ɵɵprojection(8, 1);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.panelClass);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngClass", ctx.isDisabled ? "panel-disabled" : "panel-enabled");
        i0.ɵɵadvance(2);
        i0.ɵɵattribute("aria-expanded", ctx.isOpen);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.heading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("collapse", !ctx.isOpen)("isAnimated", ctx.isAnimated);
    } }, directives: [i1.NgClass, i1.NgIf, i2.CollapseDirective], styles: ["[_nghost-%COMP%]   .card-header.panel-enabled[_ngcontent-%COMP%]{cursor:pointer}[_nghost-%COMP%]   .card-header.panel-disabled[_ngcontent-%COMP%]   .btn.btn-link[_ngcontent-%COMP%]{cursor:default;text-decoration:none}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionPanelComponent, [{
        type: Component,
        args: [{ selector: 'accordion-group, accordion-panel', host: {
                    class: 'panel',
                    style: 'display: block'
                }, template: "<div class=\"panel card\" [ngClass]=\"panelClass\">\r\n  <div\r\n    class=\"panel-heading card-header\"\r\n    role=\"tab\"\r\n    (click)=\"toggleOpen()\"\r\n    [ngClass]=\"isDisabled ? 'panel-disabled' : 'panel-enabled'\"\r\n  >\r\n    <div class=\"panel-title\">\r\n      <div role=\"button\" class=\"accordion-toggle\" [attr.aria-expanded]=\"isOpen\">\r\n        <button class=\"btn btn-link\" *ngIf=\"heading\" [ngClass]=\"{ 'text-muted': isDisabled }\" type=\"button\">\r\n          {{ heading }}\r\n        </button>\r\n        <ng-content select=\"[accordion-heading]\"></ng-content>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel-collapse collapse\" role=\"tabpanel\" [collapse]=\"!isOpen\" [isAnimated]=\"isAnimated\">\r\n    <div class=\"panel-body card-block card-body\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n", styles: [":host .card-header.panel-enabled{cursor:pointer}:host .card-header.panel-disabled .btn.btn-link{cursor:default;text-decoration:none}\n"] }]
    }], function () { return [{ type: i3.AccordionComponent, decorators: [{
                type: Inject,
                args: [AccordionComponent]
            }] }]; }, { heading: [{
            type: Input
        }], panelClass: [{
            type: Input
        }], isDisabled: [{
            type: Input
        }], isOpenChange: [{
            type: Output
        }], isOpen: [{
            type: HostBinding,
            args: ['class.panel-open']
        }, {
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9hY2NvcmRpb24vYWNjb3JkaW9uLWdyb3VwLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQXFCLE1BQU0sRUFBRSxZQUFZLEVBQy9FLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUM1QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQzs7Ozs7OztJQ0tuRCxpQ0FBb0c7SUFDbEcsWUFDRjtJQUFBLGlCQUFTOzs7SUFGb0MsdUVBQXdDO0lBQ25GLGVBQ0Y7SUFERSwrQ0FDRjs7OztBRExSOzs7OztHQUtHO0FBV0gsTUFBTSxPQUFPLHVCQUF1QjtJQTRDbEMsWUFBd0MsU0FBNkI7UUEzQ3JFLDRCQUE0QjtRQUM1QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBR25COzs7O1dBSUc7UUFDTSxlQUFVLEdBQUcsZUFBZSxDQUFDO1FBQ3RDLHNEQUFzRDtRQUM3QyxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQzVCLDBDQUEwQztRQUNoQyxpQkFBWSxHQUEwQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBMkJ6RCxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBSXhCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUE5QkQsd0VBQXdFO0lBQ3hFLGdGQUFnRjtJQUNoRixJQUVJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQztJQUVELElBQUksTUFBTSxDQUFDLEtBQWM7UUFDdkIsSUFBSSxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZDO1lBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7WUFDckIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7aUJBQ3BCLElBQUksQ0FBQyxHQUFHLEVBQUU7Z0JBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFTRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OEZBNURVLHVCQUF1Qix1QkE0Q2Qsa0JBQWtCOzBFQTVDM0IsdUJBQXVCOzs7O1FDdEJwQyw4QkFBK0M7UUFDN0MsOEJBS0M7UUFGQyxpR0FBUyxnQkFBWSxJQUFDO1FBR3RCLDhCQUF5QjtRQUN2Qiw4QkFBMEU7UUFDeEUsOEVBRVM7UUFDVCxrQkFBc0Q7UUFDeEQsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sOEJBQW9HO1FBQ2xHLDhCQUE2QztRQUMzQyxxQkFBeUI7UUFDM0IsaUJBQU07UUFDUixpQkFBTTtRQUNSLGlCQUFNOztRQXJCa0Isd0NBQXNCO1FBSzFDLGVBQTJEO1FBQTNELDZFQUEyRDtRQUdiLGVBQTZCO1FBQTdCLDJDQUE2QjtRQUN6QyxlQUFhO1FBQWIsa0NBQWE7UUFPSSxlQUFvQjtRQUFwQixzQ0FBb0IsOEJBQUE7O3VGRE05RCx1QkFBdUI7Y0FWbkMsU0FBUzsyQkFDRSxrQ0FBa0MsUUFHdEM7b0JBQ0osS0FBSyxFQUFFLE9BQU87b0JBQ2QsS0FBSyxFQUFFLGdCQUFnQjtpQkFDeEI7O3NCQStDWSxNQUFNO3VCQUFDLGtCQUFrQjt3QkF4QzdCLE9BQU87a0JBQWYsS0FBSztZQU1HLFVBQVU7a0JBQWxCLEtBQUs7WUFFRyxVQUFVO2tCQUFsQixLQUFLO1lBRUksWUFBWTtrQkFBckIsTUFBTTtZQU1ILE1BQU07a0JBRlQsV0FBVzttQkFBQyxrQkFBa0I7O2tCQUM5QixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIEhvc3RCaW5kaW5nLCBJbmplY3QsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNCczMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uQ29tcG9uZW50IH0gZnJvbSAnLi9hY2NvcmRpb24uY29tcG9uZW50JztcclxuXHJcbi8qKlxyXG4gKiAjIyMgQWNjb3JkaW9uIGhlYWRpbmdcclxuICogSW5zdGVhZCBvZiB1c2luZyBgaGVhZGluZ2AgYXR0cmlidXRlIG9uIHRoZSBgYWNjb3JkaW9uLWdyb3VwYCwgeW91IGNhbiB1c2VcclxuICogYW4gYGFjY29yZGlvbi1oZWFkaW5nYCBhdHRyaWJ1dGUgb24gYGFueWAgZWxlbWVudCBpbnNpZGUgb2YgYSBncm91cCB0aGF0XHJcbiAqIHdpbGwgYmUgdXNlZCBhcyBncm91cCdzIGhlYWRlciB0ZW1wbGF0ZS5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYWNjb3JkaW9uLWdyb3VwLCBhY2NvcmRpb24tcGFuZWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hY2NvcmRpb24tZ3JvdXAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAncGFuZWwnLFxyXG4gICAgc3R5bGU6ICdkaXNwbGF5OiBibG9jaydcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2FjY29yZGlvbi5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIEFjY29yZGlvblBhbmVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIC8qKiB0dXJuIG9uL29mZiBhbmltYXRpb24gKi9cclxuICBpc0FuaW1hdGVkID0gZmFsc2U7XHJcbiAgLyoqIENsaWNrYWJsZSB0ZXh0IGluIGFjY29yZGlvbidzIGdyb3VwIGhlYWRlciwgY2hlY2sgYGFjY29yZGlvbiBoZWFkaW5nYCBiZWxvdyBmb3IgdXNpbmcgaHRtbCBpbiBoZWFkZXIgKi9cclxuICBASW5wdXQoKSBoZWFkaW5nITogc3RyaW5nO1xyXG4gIC8qKiBQcm92aWRlcyBhbiBhYmlsaXR5IHRvIHVzZSBCb290c3RyYXAncyBjb250ZXh0dWFsIHBhbmVsIGNsYXNzZXNcclxuICAgKiAoYHBhbmVsLXByaW1hcnlgLCBgcGFuZWwtc3VjY2Vzc2AsIGBwYW5lbC1pbmZvYCwgZXRjLi4uKS5cclxuICAgKiBMaXN0IG9mIGFsbCBhdmFpbGFibGUgY2xhc3NlcyBbYXZhaWxhYmxlIGhlcmVdXHJcbiAgICogKGh0dHBzOi8vZ2V0Ym9vdHN0cmFwLmNvbS9kb2NzLzMuMy9jb21wb25lbnRzLyNwYW5lbHMtYWx0ZXJuYXRpdmVzKVxyXG4gICAqL1xyXG4gIEBJbnB1dCgpIHBhbmVsQ2xhc3MgPSAncGFuZWwtZGVmYXVsdCc7XHJcbiAgLyoqIGlmIDxjb2RlPnRydWU8L2NvZGU+IOKAlCBkaXNhYmxlcyBhY2NvcmRpb24gZ3JvdXAgKi9cclxuICBASW5wdXQoKSBpc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgLyoqIEVtaXRzIHdoZW4gdGhlIG9wZW5lZCBzdGF0ZSBjaGFuZ2VzICovXHJcbiAgQE91dHB1dCgpIGlzT3BlbkNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICAvLyBRdWVzdGlvbmFibGUsIG1heWJlIC5wYW5lbC1vcGVuIHNob3VsZCBiZSBvbiBjaGlsZCBkaXYucGFuZWwgZWxlbWVudD9cclxuICAvKiogSXMgYWNjb3JkaW9uIGdyb3VwIG9wZW4gb3IgY2xvc2VkLiBUaGlzIHByb3BlcnR5IHN1cHBvcnRzIHR3by13YXkgYmluZGluZyAqL1xyXG4gIEBIb3N0QmluZGluZygnY2xhc3MucGFuZWwtb3BlbicpXHJcbiAgQElucHV0KClcclxuICBnZXQgaXNPcGVuKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcclxuICB9XHJcblxyXG4gIHNldCBpc09wZW4odmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5pc09wZW4pIHtcclxuICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5hY2NvcmRpb24uY2xvc2VPdGhlclBhbmVscyh0aGlzKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcclxuICAgICAgUHJvbWlzZS5yZXNvbHZlKG51bGwpXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICB0aGlzLmlzT3BlbkNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfaXNPcGVuID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGFjY29yZGlvbjogQWNjb3JkaW9uQ29tcG9uZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEFjY29yZGlvbkNvbXBvbmVudCkgYWNjb3JkaW9uOiBBY2NvcmRpb25Db21wb25lbnQpIHtcclxuICAgIHRoaXMuYWNjb3JkaW9uID0gYWNjb3JkaW9uO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjY29yZGlvbi5hZGRHcm91cCh0aGlzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5hY2NvcmRpb24ucmVtb3ZlR3JvdXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICB0b2dnbGVPcGVuKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJwYW5lbCBjYXJkXCIgW25nQ2xhc3NdPVwicGFuZWxDbGFzc1wiPlxyXG4gIDxkaXZcclxuICAgIGNsYXNzPVwicGFuZWwtaGVhZGluZyBjYXJkLWhlYWRlclwiXHJcbiAgICByb2xlPVwidGFiXCJcclxuICAgIChjbGljayk9XCJ0b2dnbGVPcGVuKClcIlxyXG4gICAgW25nQ2xhc3NdPVwiaXNEaXNhYmxlZCA/ICdwYW5lbC1kaXNhYmxlZCcgOiAncGFuZWwtZW5hYmxlZCdcIlxyXG4gID5cclxuICAgIDxkaXYgY2xhc3M9XCJwYW5lbC10aXRsZVwiPlxyXG4gICAgICA8ZGl2IHJvbGU9XCJidXR0b25cIiBjbGFzcz1cImFjY29yZGlvbi10b2dnbGVcIiBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImlzT3BlblwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJidG4gYnRuLWxpbmtcIiAqbmdJZj1cImhlYWRpbmdcIiBbbmdDbGFzc109XCJ7ICd0ZXh0LW11dGVkJzogaXNEaXNhYmxlZCB9XCIgdHlwZT1cImJ1dHRvblwiPlxyXG4gICAgICAgICAge3sgaGVhZGluZyB9fVxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDxuZy1jb250ZW50IHNlbGVjdD1cIlthY2NvcmRpb24taGVhZGluZ11cIj48L25nLWNvbnRlbnQ+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgPGRpdiBjbGFzcz1cInBhbmVsLWNvbGxhcHNlIGNvbGxhcHNlXCIgcm9sZT1cInRhYnBhbmVsXCIgW2NvbGxhcHNlXT1cIiFpc09wZW5cIiBbaXNBbmltYXRlZF09XCJpc0FuaW1hdGVkXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicGFuZWwtYm9keSBjYXJkLWJsb2NrIGNhcmQtYm9keVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==