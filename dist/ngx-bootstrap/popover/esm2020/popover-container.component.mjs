import { ChangeDetectionStrategy, Input, Component } from '@angular/core';
import { PopoverConfig } from './popover.config';
import { getBsVer } from 'ngx-bootstrap/utils';
import { PlacementForBs5, checkMargins } from 'ngx-bootstrap/positioning';
import * as i0 from "@angular/core";
import * as i1 from "./popover.config";
import * as i2 from "@angular/common";
function PopoverContainerComponent_h3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "h3", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.title);
} }
const _c0 = ["*"];
export class PopoverContainerComponent {
    constructor(config) {
        this._placement = 'top';
        Object.assign(this, config);
    }
    set placement(value) {
        if (!this._bsVersions.isBs5) {
            this._placement = value;
        }
        else {
            this._placement = PlacementForBs5[value];
        }
    }
    ;
    get _bsVersions() {
        return getBsVer();
    }
    checkMarginNecessity() {
        return checkMargins(this._placement);
    }
}
PopoverContainerComponent.ɵfac = function PopoverContainerComponent_Factory(t) { return new (t || PopoverContainerComponent)(i0.ɵɵdirectiveInject(i1.PopoverConfig)); };
PopoverContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: PopoverContainerComponent, selectors: [["popover-container"]], hostAttrs: ["role", "tooltip", 2, "display", "block"], hostVars: 7, hostBindings: function PopoverContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("id", ctx.popoverId);
        i0.ɵɵclassMap("popover in popover-" + ctx._placement + " " + "bs-popover-" + ctx._placement + " " + ctx._placement + " " + ctx.containerClass + " " + ctx.checkMarginNecessity());
        i0.ɵɵclassProp("show", !ctx._bsVersions.isBs3)("bs3", ctx._bsVersions.isBs3);
    } }, inputs: { placement: "placement", title: "title" }, ngContentSelectors: _c0, decls: 4, vars: 1, consts: [[1, "popover-arrow", "arrow"], ["class", "popover-title popover-header", 4, "ngIf"], [1, "popover-content", "popover-body"], [1, "popover-title", "popover-header"]], template: function PopoverContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵtemplate(1, PopoverContainerComponent_h3_1_Template, 2, 1, "h3", 1);
        i0.ɵɵelementStart(2, "div", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.title);
    } }, directives: [i2.NgIf], styles: [".bs3.popover-top[_nghost-%COMP%]{margin-bottom:10px}.bs3.popover.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.popover.top[_nghost-%COMP%]{margin-bottom:10px}.popover.bottom[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-4px}.bs3.bs-popover-left[_nghost-%COMP%]{margin-right:.5rem}.bs3.bs-popover-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-popover-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PopoverContainerComponent, [{
        type: Component,
        args: [{ selector: 'popover-container', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[attr.id]': 'popoverId',
                    '[class]': '"popover in popover-" + _placement + " " + "bs-popover-" + _placement + " " + _placement + " " + containerClass + " " + checkMarginNecessity()',
                    '[class.show]': '!_bsVersions.isBs3',
                    '[class.bs3]': '_bsVersions.isBs3',
                    role: 'tooltip',
                    style: 'display:block;'
                }, styles: [
                    `
    :host.bs3.popover-top {
      margin-bottom: 10px;
    }
    :host.bs3.popover.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.popover.top {
      margin-bottom: 10px;
    }
    :host.popover.bottom>.arrow {
      margin-left: -4px;
    }
    :host.bs3.bs-popover-left {
      margin-right: .5rem;
    }
    :host.bs3.bs-popover-right .arrow, :host.bs3.bs-popover-left .arrow{
      margin: .3rem 0;
    }
    `
                ], template: "<div class=\"popover-arrow arrow\"></div>\r\n<h3 class=\"popover-title popover-header\" *ngIf=\"title\">{{ title }}</h3>\r\n<div class=\"popover-content popover-body\">\r\n  <ng-content></ng-content>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.PopoverConfig }]; }, { placement: [{
            type: Input
        }], title: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL3BvcG92ZXIvcG9wb3Zlci1jb250YWluZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGtCQUFrQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxRQUFRLEVBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLFlBQVksRUFBdUIsTUFBTSwyQkFBMkIsQ0FBQzs7Ozs7SUNGL0YsNkJBQXVEO0lBQUEsWUFBVztJQUFBLGlCQUFLOzs7SUFBaEIsZUFBVztJQUFYLGtDQUFXOzs7QUR5Q2xFLE1BQU0sT0FBTyx5QkFBeUI7SUFtQnBDLFlBQVksTUFBcUI7UUFOakMsZUFBVSxHQUFHLEtBQUssQ0FBQztRQU9qQixNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBcEJELElBQWEsU0FBUyxDQUFDLEtBQTBCO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztTQUN6QjthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBSSxlQUFlLENBQUMsS0FBcUMsQ0FBQyxDQUFDO1NBQzNFO0lBQ0gsQ0FBQztJQUFBLENBQUM7SUFRRixJQUFJLFdBQVc7UUFDYixPQUFPLFFBQVEsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFNRCxvQkFBb0I7UUFDbEIsT0FBTyxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7O2tHQXpCVSx5QkFBeUI7NEVBQXpCLHlCQUF5Qjs7Ozs7O1FDMUN0Qyx5QkFBdUM7UUFDdkMsd0VBQXVFO1FBQ3ZFLDhCQUEwQztRQUN4QyxrQkFBeUI7UUFDM0IsaUJBQU07O1FBSG9DLGVBQVc7UUFBWCxnQ0FBVzs7dUZEeUN4Qyx5QkFBeUI7Y0FyQ3JDLFNBQVM7MkJBQ0UsbUJBQW1CLG1CQUNaLHVCQUF1QixDQUFDLE1BQU0sUUFFekM7b0JBQ0osV0FBVyxFQUFFLFdBQVc7b0JBQ3hCLFNBQVMsRUFDUCxnSkFBZ0o7b0JBQ2xKLGNBQWMsRUFBRSxvQkFBb0I7b0JBQ3BDLGFBQWEsRUFBRSxtQkFBbUI7b0JBQ2xDLElBQUksRUFBRSxTQUFTO29CQUNmLEtBQUssRUFBRSxnQkFBZ0I7aUJBQ3hCLFVBQ087b0JBQ047Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0FtQkM7aUJBQ0Y7Z0VBSVksU0FBUztrQkFBckIsS0FBSztZQVFHLEtBQUs7a0JBQWIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBJbnB1dCwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBvcG92ZXJDb25maWcgfSBmcm9tICcuL3BvcG92ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgZ2V0QnNWZXIsIElCc1ZlcnNpb24gfSBmcm9tICduZ3gtYm9vdHN0cmFwL3V0aWxzJztcclxuaW1wb3J0IHsgUGxhY2VtZW50Rm9yQnM1LCBjaGVja01hcmdpbnMsIEF2YWlsYmxlQlNQb3NpdGlvbnMgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncG9wb3Zlci1jb250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci5pZF0nOiAncG9wb3ZlcklkJyxcclxuICAgICdbY2xhc3NdJzpcclxuICAgICAgJ1wicG9wb3ZlciBpbiBwb3BvdmVyLVwiICsgX3BsYWNlbWVudCArIFwiIFwiICsgXCJicy1wb3BvdmVyLVwiICsgX3BsYWNlbWVudCArIFwiIFwiICsgX3BsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MgKyBcIiBcIiArIGNoZWNrTWFyZ2luTmVjZXNzaXR5KCknLFxyXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchX2JzVmVyc2lvbnMuaXNCczMnLFxyXG4gICAgJ1tjbGFzcy5iczNdJzogJ19ic1ZlcnNpb25zLmlzQnMzJyxcclxuICAgIHJvbGU6ICd0b29sdGlwJyxcclxuICAgIHN0eWxlOiAnZGlzcGxheTpibG9jazsnXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgIDpob3N0LmJzMy5wb3BvdmVyLXRvcCB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3A+LmFycm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC0ycHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMucG9wb3Zlci50b3Age1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgOmhvc3QucG9wb3Zlci5ib3R0b20+LmFycm93IHtcclxuICAgICAgbWFyZ2luLWxlZnQ6IC00cHg7XHJcbiAgICB9XHJcbiAgICA6aG9zdC5iczMuYnMtcG9wb3Zlci1sZWZ0IHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy1wb3BvdmVyLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXBvcG92ZXItbGVmdCAuYXJyb3d7XHJcbiAgICAgIG1hcmdpbjogLjNyZW0gMDtcclxuICAgIH1cclxuICAgIGBcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wb3BvdmVyLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHNldCBwbGFjZW1lbnQodmFsdWU6IEF2YWlsYmxlQlNQb3NpdGlvbnMpIHtcclxuICAgIGlmICghdGhpcy5fYnNWZXJzaW9ucy5pc0JzNSkge1xyXG4gICAgICB0aGlzLl9wbGFjZW1lbnQgPSB2YWx1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3BsYWNlbWVudCA9ICBQbGFjZW1lbnRGb3JCczVbdmFsdWUgYXMga2V5b2YgdHlwZW9mIFBsYWNlbWVudEZvckJzNV07XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIGNvbnRhaW5lckNsYXNzPzogc3RyaW5nO1xyXG4gIHBvcG92ZXJJZD86IHN0cmluZztcclxuICBfcGxhY2VtZW50ID0gJ3RvcCc7XHJcblxyXG4gIGdldCBfYnNWZXJzaW9ucygpOiBJQnNWZXJzaW9uIHtcclxuICAgIHJldHVybiBnZXRCc1ZlcigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBQb3BvdmVyQ29uZmlnKSB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICBjaGVja01hcmdpbk5lY2Vzc2l0eSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGNoZWNrTWFyZ2lucyh0aGlzLl9wbGFjZW1lbnQpO1xyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwicG9wb3Zlci1hcnJvdyBhcnJvd1wiPjwvZGl2PlxyXG48aDMgY2xhc3M9XCJwb3BvdmVyLXRpdGxlIHBvcG92ZXItaGVhZGVyXCIgKm5nSWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9oMz5cclxuPGRpdiBjbGFzcz1cInBvcG92ZXItY29udGVudCBwb3BvdmVyLWJvZHlcIj5cclxuICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbjwvZGl2PlxyXG4iXX0=