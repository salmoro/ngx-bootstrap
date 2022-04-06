import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TooltipConfig } from './tooltip.config';
import { getBsVer } from 'ngx-bootstrap/utils';
import { PlacementForBs5 } from 'ngx-bootstrap/positioning';
import * as i0 from "@angular/core";
import * as i1 from "./tooltip.config";
const _c0 = ["*"];
export class TooltipContainerComponent {
    constructor(config) {
        Object.assign(this, config);
    }
    get _bsVersions() {
        return getBsVer();
    }
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        if (this.placement) {
            if (this._bsVersions.isBs5) {
                this.placement = PlacementForBs5[this.placement];
            }
            this.classMap[this.placement] = true;
        }
        this.classMap[`tooltip-${this.placement}`] = true;
        this.classMap["in"] = true;
        if (this.animation) {
            this.classMap["fade"] = true;
        }
        if (this.containerClass) {
            this.classMap[this.containerClass] = true;
        }
    }
}
TooltipContainerComponent.ɵfac = function TooltipContainerComponent_Factory(t) { return new (t || TooltipContainerComponent)(i0.ɵɵdirectiveInject(i1.TooltipConfig)); };
TooltipContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TooltipContainerComponent, selectors: [["bs-tooltip-container"]], hostAttrs: ["role", "tooltip"], hostVars: 7, hostBindings: function TooltipContainerComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("id", ctx.id);
        i0.ɵɵclassMap("tooltip in tooltip-" + ctx.placement + " " + "bs-tooltip-" + ctx.placement + " " + ctx.placement + " " + ctx.containerClass);
        i0.ɵɵclassProp("show", !ctx._bsVersions.isBs3)("bs3", ctx._bsVersions.isBs3);
    } }, ngContentSelectors: _c0, decls: 3, vars: 0, consts: [[1, "tooltip-arrow", "arrow"], [1, "tooltip-inner"]], template: function TooltipContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelement(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
    } }, styles: [".tooltip[_nghost-%COMP%]{display:block;pointer-events:none}.bs3.tooltip.top[_nghost-%COMP%] > .arrow[_ngcontent-%COMP%]{margin-left:-2px}.bs3.tooltip.bottom[_nghost-%COMP%]{margin-top:0}.bs3.bs-tooltip-left[_nghost-%COMP%], .bs3.bs-tooltip-right[_nghost-%COMP%]{margin:0}.bs3.bs-tooltip-right[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%], .bs3.bs-tooltip-left[_nghost-%COMP%]   .arrow[_ngcontent-%COMP%]{margin:.3rem 0}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TooltipContainerComponent, [{
        type: Component,
        args: [{
                selector: 'bs-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class]': '"tooltip in tooltip-" + placement + " " + "bs-tooltip-" + placement + " " + placement + " " + containerClass',
                    '[class.show]': '!_bsVersions.isBs3',
                    '[class.bs3]': '_bsVersions.isBs3',
                    '[attr.id]': 'this.id',
                    role: 'tooltip'
                },
                styles: [
                    `
    :host.tooltip {
      display: block;
      pointer-events: none;
    }
    :host.bs3.tooltip.top>.arrow {
      margin-left: -2px;
    }
    :host.bs3.tooltip.bottom {
      margin-top: 0px;
    }
    :host.bs3.bs-tooltip-left, :host.bs3.bs-tooltip-right{
      margin: 0px;
    }
    :host.bs3.bs-tooltip-right .arrow, :host.bs3.bs-tooltip-left .arrow {
      margin: .3rem 0;
    }
  `
                ],
                template: `
    <div class="tooltip-arrow arrow"></div>
    <div class="tooltip-inner"><ng-content></ng-content></div>
    `
            }]
    }], function () { return [{ type: i1.TooltipConfig }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Rvb2x0aXAvdG9vbHRpcC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3hCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsUUFBUSxFQUFjLE1BQU0scUJBQXFCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLDJCQUEyQixDQUFDOzs7O0FBdUM1RCxNQUFNLE9BQU8seUJBQXlCO0lBV3BDLFlBQVksTUFBcUI7UUFDL0IsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQU5ELElBQUksV0FBVztRQUNiLE9BQU8sUUFBUSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQU1ELGVBQWU7UUFDYixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDM0MsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7Z0JBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUksZUFBZSxDQUFDLElBQUksQ0FBQyxTQUF5QyxDQUFDLENBQUM7YUFDbkY7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDdEM7UUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBRWxELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztTQUM5QjtRQUVELElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDM0M7SUFDSCxDQUFDOztrR0FsQ1UseUJBQXlCOzRFQUF6Qix5QkFBeUI7Ozs7OztRQUpsQyx5QkFBdUM7UUFDdkMsOEJBQTJCO1FBQUEsa0JBQXlCO1FBQUEsaUJBQU07O3VGQUdqRCx5QkFBeUI7Y0FyQ3JDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MscUVBQXFFO2dCQUNyRSxJQUFJLEVBQUU7b0JBQ0osU0FBUyxFQUNQLDhHQUE4RztvQkFDaEgsY0FBYyxFQUFFLG9CQUFvQjtvQkFDcEMsYUFBYSxFQUFFLG1CQUFtQjtvQkFDbEMsV0FBVyxFQUFFLFNBQVM7b0JBQ3RCLElBQUksRUFBRSxTQUFTO2lCQUNoQjtnQkFDRCxNQUFNLEVBQUU7b0JBQ047Ozs7Ozs7Ozs7Ozs7Ozs7O0dBaUJEO2lCQUNBO2dCQUNELFFBQVEsRUFBRTs7O0tBR1A7YUFDSiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQWZ0ZXJWaWV3SW5pdCxcclxuICBDb21wb25lbnQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3lcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVG9vbHRpcENvbmZpZyB9IGZyb20gJy4vdG9vbHRpcC5jb25maWcnO1xyXG5pbXBvcnQgeyBnZXRCc1ZlciwgSUJzVmVyc2lvbiB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5pbXBvcnQgeyBQbGFjZW1lbnRGb3JCczUgfSBmcm9tICduZ3gtYm9vdHN0cmFwL3Bvc2l0aW9uaW5nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtdG9vbHRpcC1jb250YWluZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3NdJzpcclxuICAgICAgJ1widG9vbHRpcCBpbiB0b29sdGlwLVwiICsgcGxhY2VtZW50ICsgXCIgXCIgKyBcImJzLXRvb2x0aXAtXCIgKyBwbGFjZW1lbnQgKyBcIiBcIiArIHBsYWNlbWVudCArIFwiIFwiICsgY29udGFpbmVyQ2xhc3MnLFxyXG4gICAgJ1tjbGFzcy5zaG93XSc6ICchX2JzVmVyc2lvbnMuaXNCczMnLFxyXG4gICAgJ1tjbGFzcy5iczNdJzogJ19ic1ZlcnNpb25zLmlzQnMzJyxcclxuICAgICdbYXR0ci5pZF0nOiAndGhpcy5pZCcsXHJcbiAgICByb2xlOiAndG9vbHRpcCdcclxuICB9LFxyXG4gIHN0eWxlczogW1xyXG4gICAgYFxyXG4gICAgOmhvc3QudG9vbHRpcCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy50b29sdGlwLnRvcD4uYXJyb3cge1xyXG4gICAgICBtYXJnaW4tbGVmdDogLTJweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy50b29sdGlwLmJvdHRvbSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy10b29sdGlwLWxlZnQsIDpob3N0LmJzMy5icy10b29sdGlwLXJpZ2h0e1xyXG4gICAgICBtYXJnaW46IDBweDtcclxuICAgIH1cclxuICAgIDpob3N0LmJzMy5icy10b29sdGlwLXJpZ2h0IC5hcnJvdywgOmhvc3QuYnMzLmJzLXRvb2x0aXAtbGVmdCAuYXJyb3cge1xyXG4gICAgICBtYXJnaW46IC4zcmVtIDA7XHJcbiAgICB9XHJcbiAgYFxyXG4gIF0sXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwLWFycm93IGFycm93XCI+PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcC1pbm5lclwiPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L2Rpdj5cclxuICAgIGBcclxufSlcclxuZXhwb3J0IGNsYXNzIFRvb2x0aXBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0IHtcclxuICBjbGFzc01hcD86IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xyXG4gIHBsYWNlbWVudD86IHN0cmluZztcclxuICBjb250YWluZXJDbGFzcz86IHN0cmluZztcclxuICBhbmltYXRpb24/OiBib29sZWFuO1xyXG4gIGlkPzogc3RyaW5nO1xyXG5cclxuICBnZXQgX2JzVmVyc2lvbnMoKTogSUJzVmVyc2lvbiB7XHJcbiAgICByZXR1cm4gZ2V0QnNWZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogVG9vbHRpcENvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jbGFzc01hcCA9IHsgaW46IGZhbHNlLCBmYWRlOiBmYWxzZSB9O1xyXG4gICAgaWYgKHRoaXMucGxhY2VtZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLl9ic1ZlcnNpb25zLmlzQnM1KSB7XHJcbiAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAgUGxhY2VtZW50Rm9yQnM1W3RoaXMucGxhY2VtZW50IGFzIGtleW9mIHR5cGVvZiBQbGFjZW1lbnRGb3JCczVdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNsYXNzTWFwW3RoaXMucGxhY2VtZW50XSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNsYXNzTWFwW2B0b29sdGlwLSR7dGhpcy5wbGFjZW1lbnR9YF0gPSB0cnVlO1xyXG5cclxuICAgIHRoaXMuY2xhc3NNYXBbXCJpblwiXSA9IHRydWU7XHJcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHtcclxuICAgICAgdGhpcy5jbGFzc01hcFtcImZhZGVcIl0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmNvbnRhaW5lckNsYXNzKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NNYXBbdGhpcy5jb250YWluZXJDbGFzc10gPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=