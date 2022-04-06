import { __decorate, __metadata } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output } from '@angular/core';
import { AlertConfig } from './alert.config';
import { OnChange } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
import * as i1 from "./alert.config";
import * as i2 from "@angular/common";
function AlertComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 2);
    i0.ɵɵlistener("click", function AlertComponent_ng_template_0_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r2 = i0.ɵɵnextContext(2); return ctx_r2.close(); });
    i0.ɵɵelementStart(1, "span", 3);
    i0.ɵɵtext(2, "\u00D7");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "span", 4);
    i0.ɵɵtext(4, "Close");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} }
function AlertComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵtemplate(1, AlertComponent_ng_template_0_ng_template_1_Template, 5, 0, "ng-template", 0);
    i0.ɵɵprojection(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap("alert alert-" + ctx_r0.type);
    i0.ɵɵproperty("ngClass", ctx_r0.classes);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r0.dismissible);
} }
const _c0 = ["*"];
export class AlertComponent {
    constructor(_config, changeDetection) {
        this.changeDetection = changeDetection;
        /** Alert type.
         * Provides one of four bootstrap supported contextual classes:
         * `success`, `info`, `warning` and `danger`
         */
        this.type = 'warning';
        /** If set, displays an inline "Close" button */
        this.dismissible = false;
        /** Is alert visible */
        this.isOpen = true;
        /** This event fires immediately after close instance method is called,
         * $event is an instance of Alert component.
         */
        this.onClose = new EventEmitter();
        /** This event fires when alert closed, $event is an instance of Alert component */
        this.onClosed = new EventEmitter();
        this.classes = '';
        this.dismissibleChange = new EventEmitter();
        Object.assign(this, _config);
        this.dismissibleChange.subscribe(( /*dismissible: boolean*/) => {
            this.classes = this.dismissible ? 'alert-dismissible' : '';
            this.changeDetection.markForCheck();
        });
    }
    ngOnInit() {
        if (this.dismissOnTimeout) {
            // if dismissOnTimeout used as attr without binding, it will be a string
            setTimeout(() => this.close(), parseInt(this.dismissOnTimeout, 10));
        }
    }
    // todo: animation ` If the .fade and .in classes are present on the element,
    // the alert will fade out before it is removed`
    /**
     * Closes an alert by removing it from the DOM.
     */
    close() {
        if (!this.isOpen) {
            return;
        }
        this.onClose.emit(this);
        this.isOpen = false;
        this.changeDetection.markForCheck();
        this.onClosed.emit(this);
    }
}
AlertComponent.ɵfac = function AlertComponent_Factory(t) { return new (t || AlertComponent)(i0.ɵɵdirectiveInject(i1.AlertConfig), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
AlertComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertComponent, selectors: [["alert"], ["bs-alert"]], inputs: { type: "type", dismissible: "dismissible", dismissOnTimeout: "dismissOnTimeout", isOpen: "isOpen" }, outputs: { onClose: "onClose", onClosed: "onClosed" }, ngContentSelectors: _c0, decls: 1, vars: 1, consts: [[3, "ngIf"], ["role", "alert", 3, "ngClass"], ["type", "button", "aria-label", "Close", 1, "close", "btn-close", 3, "click"], ["aria-hidden", "true", 1, "visually-hidden"], [1, "sr-only", "visually-hidden"]], template: function AlertComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, AlertComponent_ng_template_0_Template, 3, 4, "ng-template", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.isOpen);
    } }, directives: [i2.NgIf, i2.NgClass], encapsulation: 2, changeDetection: 0 });
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], AlertComponent.prototype, "dismissible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertComponent, [{
        type: Component,
        args: [{ selector: 'alert,bs-alert', changeDetection: ChangeDetectionStrategy.OnPush, template: "<ng-template [ngIf]=\"isOpen\">\r\n  <div [class]=\"'alert alert-' + type\" role=\"alert\" [ngClass]=\"classes\">\r\n    <ng-template [ngIf]=\"dismissible\">\r\n      <button type=\"button\" class=\"close btn-close\" aria-label=\"Close\" (click)=\"close()\">\r\n        <span aria-hidden=\"true\" class=\"visually-hidden\">&times;</span>\r\n        <span class=\"sr-only visually-hidden\">Close</span>\r\n      </button>\r\n    </ng-template>\r\n    <ng-content></ng-content>\r\n  </div>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.AlertConfig }, { type: i0.ChangeDetectorRef }]; }, { type: [{
            type: Input
        }], dismissible: [{
            type: Input
        }], dismissOnTimeout: [{
            type: Input
        }], isOpen: [{
            type: Input
        }], onClose: [{
            type: Output
        }], onClosed: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FsZXJ0L2FsZXJ0LmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9hbGVydC9hbGVydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBRUwsTUFBTSxFQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0scUJBQXFCLENBQUM7Ozs7OztJQ1B6QyxpQ0FBbUY7SUFBbEIsa0xBQVMsY0FBTyxJQUFDO0lBQ2hGLCtCQUFpRDtJQUFBLHNCQUFPO0lBQUEsaUJBQU87SUFDL0QsK0JBQXNDO0lBQUEscUJBQUs7SUFBQSxpQkFBTztJQUNwRCxpQkFBUzs7O0lBTGIsOEJBQXNFO0lBQ3BFLDZGQUtjO0lBQ2Qsa0JBQXlCO0lBQzNCLGlCQUFNOzs7SUFSRCwyQ0FBK0I7SUFBYyx3Q0FBbUI7SUFDdEQsZUFBb0I7SUFBcEIseUNBQW9COzs7QURlckMsTUFBTSxPQUFPLGNBQWM7SUF5QnpCLFlBQVksT0FBb0IsRUFBVSxlQUFrQztRQUFsQyxvQkFBZSxHQUFmLGVBQWUsQ0FBbUI7UUF4QjVFOzs7V0FHRztRQUNNLFNBQUksR0FBRyxTQUFTLENBQUM7UUFDMUIsZ0RBQWdEO1FBQ3ZCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBSTdDLHVCQUF1QjtRQUNkLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFFdkI7O1dBRUc7UUFDTyxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQWtCLENBQUM7UUFDdkQsbUZBQW1GO1FBQ3pFLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBa0IsQ0FBQztRQUd4RCxZQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2Isc0JBQWlCLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUc5QyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLEVBQUMsd0JBQXdCLEVBQUUsRUFBRTtZQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDM0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDekIsd0VBQXdFO1lBQ3hFLFVBQVUsQ0FDUixHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEVBQ2xCLFFBQVEsQ0FBQyxJQUFJLENBQUMsZ0JBQTBCLEVBQUUsRUFBRSxDQUFDLENBQzlDLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRCw2RUFBNkU7SUFDN0UsZ0RBQWdEO0lBQ2hEOztPQUVHO0lBQ0gsS0FBSztRQUNILElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2hCLE9BQU87U0FDUjtRQUVELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxlQUFlLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7NEVBekRVLGNBQWM7aUVBQWQsY0FBYzs7UUNqQjNCLCtFQVVjOztRQVZELGlDQUFlOztBRHdCRDtJQUF4QixRQUFRLEVBQUU7O21EQUFrQzt1RkFQbEMsY0FBYztjQUwxQixTQUFTOzJCQUNFLGdCQUFnQixtQkFFVCx1QkFBdUIsQ0FBQyxNQUFNOzhGQU90QyxJQUFJO2tCQUFaLEtBQUs7WUFFbUIsV0FBVztrQkFBckIsS0FBSztZQUVYLGdCQUFnQjtrQkFBeEIsS0FBSztZQUdHLE1BQU07a0JBQWQsS0FBSztZQUtJLE9BQU87a0JBQWhCLE1BQU07WUFFRyxRQUFRO2tCQUFqQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWxlcnRDb25maWcgfSBmcm9tICcuL2FsZXJ0LmNvbmZpZyc7XHJcbmltcG9ydCB7IE9uQ2hhbmdlIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FsZXJ0LGJzLWFsZXJ0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgLyoqIEFsZXJ0IHR5cGUuXHJcbiAgICogUHJvdmlkZXMgb25lIG9mIGZvdXIgYm9vdHN0cmFwIHN1cHBvcnRlZCBjb250ZXh0dWFsIGNsYXNzZXM6XHJcbiAgICogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCBhbmQgYGRhbmdlcmBcclxuICAgKi9cclxuICBASW5wdXQoKSB0eXBlID0gJ3dhcm5pbmcnO1xyXG4gIC8qKiBJZiBzZXQsIGRpc3BsYXlzIGFuIGlubGluZSBcIkNsb3NlXCIgYnV0dG9uICovXHJcbiAgQE9uQ2hhbmdlKCkgICBASW5wdXQoKSAgIGRpc21pc3NpYmxlID0gZmFsc2U7XHJcbiAgLyoqIE51bWJlciBpbiBtaWxsaXNlY29uZHMsIGFmdGVyIHdoaWNoIGFsZXJ0IHdpbGwgYmUgY2xvc2VkICovXHJcbiAgQElucHV0KCkgZGlzbWlzc09uVGltZW91dD86IG51bWJlciB8IHN0cmluZztcclxuXHJcbiAgLyoqIElzIGFsZXJ0IHZpc2libGUgKi9cclxuICBASW5wdXQoKSBpc09wZW4gPSB0cnVlO1xyXG5cclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBpbW1lZGlhdGVseSBhZnRlciBjbG9zZSBpbnN0YW5jZSBtZXRob2QgaXMgY2FsbGVkLFxyXG4gICAqICRldmVudCBpcyBhbiBpbnN0YW5jZSBvZiBBbGVydCBjb21wb25lbnQuXHJcbiAgICovXHJcbiAgQE91dHB1dCgpIG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPEFsZXJ0Q29tcG9uZW50PigpO1xyXG4gIC8qKiBUaGlzIGV2ZW50IGZpcmVzIHdoZW4gYWxlcnQgY2xvc2VkLCAkZXZlbnQgaXMgYW4gaW5zdGFuY2Ugb2YgQWxlcnQgY29tcG9uZW50ICovXHJcbiAgQE91dHB1dCgpIG9uQ2xvc2VkID0gbmV3IEV2ZW50RW1pdHRlcjxBbGVydENvbXBvbmVudD4oKTtcclxuXHJcblxyXG4gIGNsYXNzZXMgPSAnJztcclxuICBkaXNtaXNzaWJsZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoX2NvbmZpZzogQWxlcnRDb25maWcsIHByaXZhdGUgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBfY29uZmlnKTtcclxuICAgIHRoaXMuZGlzbWlzc2libGVDaGFuZ2Uuc3Vic2NyaWJlKCgvKmRpc21pc3NpYmxlOiBib29sZWFuKi8pID0+IHtcclxuICAgICAgdGhpcy5jbGFzc2VzID0gdGhpcy5kaXNtaXNzaWJsZSA/ICdhbGVydC1kaXNtaXNzaWJsZScgOiAnJztcclxuICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb24ubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZGlzbWlzc09uVGltZW91dCkge1xyXG4gICAgICAvLyBpZiBkaXNtaXNzT25UaW1lb3V0IHVzZWQgYXMgYXR0ciB3aXRob3V0IGJpbmRpbmcsIGl0IHdpbGwgYmUgYSBzdHJpbmdcclxuICAgICAgc2V0VGltZW91dChcclxuICAgICAgICAoKSA9PiB0aGlzLmNsb3NlKCksXHJcbiAgICAgICAgcGFyc2VJbnQodGhpcy5kaXNtaXNzT25UaW1lb3V0IGFzIHN0cmluZywgMTApXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyB0b2RvOiBhbmltYXRpb24gYCBJZiB0aGUgLmZhZGUgYW5kIC5pbiBjbGFzc2VzIGFyZSBwcmVzZW50IG9uIHRoZSBlbGVtZW50LFxyXG4gIC8vIHRoZSBhbGVydCB3aWxsIGZhZGUgb3V0IGJlZm9yZSBpdCBpcyByZW1vdmVkYFxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyBhbiBhbGVydCBieSByZW1vdmluZyBpdCBmcm9tIHRoZSBET00uXHJcbiAgICovXHJcbiAgY2xvc2UoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNPcGVuKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XHJcbiAgICB0aGlzLmNoYW5nZURldGVjdGlvbi5tYXJrRm9yQ2hlY2soKTtcclxuICAgIHRoaXMub25DbG9zZWQuZW1pdCh0aGlzKTtcclxuICB9XHJcbn1cclxuIiwiPG5nLXRlbXBsYXRlIFtuZ0lmXT1cImlzT3BlblwiPlxyXG4gIDxkaXYgW2NsYXNzXT1cIidhbGVydCBhbGVydC0nICsgdHlwZVwiIHJvbGU9XCJhbGVydFwiIFtuZ0NsYXNzXT1cImNsYXNzZXNcIj5cclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCJkaXNtaXNzaWJsZVwiPlxyXG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlIGJ0bi1jbG9zZVwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIChjbGljayk9XCJjbG9zZSgpXCI+XHJcbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCIgY2xhc3M9XCJ2aXN1YWxseS1oaWRkZW5cIj4mdGltZXM7PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3Itb25seSB2aXN1YWxseS1oaWRkZW5cIj5DbG9zZTwvc3Bhbj5cclxuICAgICAgPC9idXR0b24+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=