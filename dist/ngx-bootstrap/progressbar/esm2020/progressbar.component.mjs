import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ProgressbarConfig } from './progressbar.config';
import * as i0 from "@angular/core";
import * as i1 from "./progressbar.config";
import * as i2 from "@angular/common";
import * as i3 from "./bar.component";
function ProgressbarComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ProgressbarComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bar", 3);
    i0.ɵɵprojection(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("type", ctx_r2.type)("value", ctx_r2._value)("max", ctx_r2.max)("animate", ctx_r2.animate)("striped", ctx_r2.striped);
} }
function ProgressbarComponent_ng_template_3_bar_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "bar", 3);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("type", item_r6.type)("value", item_r6.value)("max", item_r6.max || ctx_r5.max)("animate", ctx_r5.animate)("striped", ctx_r5.striped);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(item_r6.label);
} }
function ProgressbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ProgressbarComponent_ng_template_3_bar_0_Template, 2, 6, "bar", 4);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngForOf", ctx_r4._values);
} }
const _c0 = ["*"];
export class ProgressbarComponent {
    constructor(config) {
        /** maximum total value of progress element */
        this.max = 100;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        this.isStacked = false;
        this._value = 0;
        Object.assign(this, config);
    }
    /** current value of progress bar. Could be a number or array of objects
     * like {"value":15,"type":"info","label":"15 %"}
     */
    set value(value) {
        this.isStacked = Array.isArray(value);
        if (typeof value === 'number') {
            this._value = value;
            this._values = void 0;
        }
        else {
            this._value = void 0;
            this._values = value;
        }
    }
}
ProgressbarComponent.ɵfac = function ProgressbarComponent_Factory(t) { return new (t || ProgressbarComponent)(i0.ɵɵdirectiveInject(i1.ProgressbarConfig)); };
ProgressbarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ProgressbarComponent, selectors: [["progressbar"]], hostVars: 3, hostBindings: function ProgressbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("max", ctx.max);
        i0.ɵɵclassProp("progress", true);
    } }, inputs: { max: "max", animate: "animate", striped: "striped", type: "type", value: "value" }, ngContentSelectors: _c0, decls: 5, vars: 3, consts: [[4, "ngIf", "ngIfThen", "ngIfElse"], ["NotStacked", ""], ["Stacked", ""], [3, "type", "value", "max", "animate", "striped"], [3, "type", "value", "max", "animate", "striped", 4, "ngFor", "ngForOf"]], template: function ProgressbarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, ProgressbarComponent_ng_container_0_Template, 1, 0, "ng-container", 0);
        i0.ɵɵtemplate(1, ProgressbarComponent_ng_template_1_Template, 2, 5, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵtemplate(3, ProgressbarComponent_ng_template_3_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        const _r1 = i0.ɵɵreference(2);
        const _r3 = i0.ɵɵreference(4);
        i0.ɵɵproperty("ngIf", !ctx.isStacked)("ngIfThen", _r1)("ngIfElse", _r3);
    } }, directives: [i2.NgIf, i3.BarComponent, i2.NgForOf], styles: ["[_nghost-%COMP%]{width:100%;display:flex}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ProgressbarComponent, [{
        type: Component,
        args: [{ selector: 'progressbar', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    '[class.progress]': 'true',
                    '[attr.max]': 'max'
                }, styles: [`
    :host {
      width: 100%;
      display: flex;
    } `], template: "<ng-container *ngIf=\"!isStacked then NotStacked else Stacked\"></ng-container>\r\n\r\n<ng-template #NotStacked>\r\n  <bar [type]=\"type\" [value]=\"_value\" [max]=\"max\" [animate]=\"animate\" [striped]=\"striped\">\r\n    <ng-content></ng-content>\r\n  </bar>\r\n</ng-template>\r\n\r\n<ng-template #Stacked>\r\n  <bar *ngFor=\"let item of _values\"\r\n       [type]=\"item.type\" [value]=\"item.value\" [max]=\"item.max || max\" [animate]=\"animate\" [striped]=\"striped\">{{ item.label }}</bar>\r\n</ng-template>\r\n" }]
    }], function () { return [{ type: i1.ProgressbarConfig }]; }, { max: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }], value: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3NiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3Byb2dyZXNzYmFyL3Byb2dyZXNzYmFyLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9wcm9ncmVzc2Jhci9wcm9ncmVzc2Jhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUxRSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7Ozs7O0lDRnpELHdCQUE2RTs7O0lBRzNFLDhCQUF3RjtJQUN0RixrQkFBeUI7SUFDM0IsaUJBQU07OztJQUZELGtDQUFhLHdCQUFBLG1CQUFBLDJCQUFBLDJCQUFBOzs7SUFNbEIsOEJBQzZHO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTTs7OztJQUE5SCxtQ0FBa0Isd0JBQUEsa0NBQUEsMkJBQUEsMkJBQUE7SUFBc0YsZUFBZ0I7SUFBaEIsbUNBQWdCOzs7SUFEN0gsbUZBQ21JOzs7SUFEN0csd0NBQVU7OztBRFVsQyxNQUFNLE9BQU8sb0JBQW9CO0lBZ0MvQixZQUFZLE1BQXlCO1FBL0JyQyw4Q0FBOEM7UUFDckMsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUVuQixnRUFBZ0U7UUFDdkQsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUV6Qiw2Q0FBNkM7UUFDcEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW9CekIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQUksQ0FBQyxDQUFDO1FBSVYsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQXJCRDs7T0FFRztJQUNILElBQ0ksS0FBSyxDQUFDLEtBQTBCO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN0QyxJQUFJLE9BQU8sS0FBSyxLQUFLLFFBQVEsRUFBRTtZQUM3QixJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQzs7d0ZBMUJVLG9CQUFvQjt1RUFBcEIsb0JBQW9COzs7OztRQ25CakMsdUZBQTZFO1FBRTdFLHNIQUljO1FBRWQsc0hBR2M7Ozs7UUFYQyxxQ0FBaUIsaUJBQUEsaUJBQUE7O3VGRG1CbkIsb0JBQW9CO2NBZmhDLFNBQVM7MkJBQ0UsYUFBYSxtQkFFTix1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO29CQUNKLGtCQUFrQixFQUFFLE1BQU07b0JBQzFCLFlBQVksRUFBRSxLQUFLO2lCQUNwQixVQUNPLENBQUM7Ozs7T0FJSixDQUFDO29FQUlHLEdBQUc7a0JBQVgsS0FBSztZQUdHLE9BQU87a0JBQWYsS0FBSztZQUdHLE9BQU87a0JBQWYsS0FBSztZQUdHLElBQUk7a0JBQVosS0FBSztZQU1GLEtBQUs7a0JBRFIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhclZhbHVlLCBQcm9ncmVzc2JhclR5cGUgfSBmcm9tICcuL3Byb2dyZXNzYmFyLXR5cGUuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NiYXJDb25maWcgfSBmcm9tICcuL3Byb2dyZXNzYmFyLmNvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3Byb2dyZXNzYmFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZ3Jlc3NiYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MucHJvZ3Jlc3NdJzogJ3RydWUnLFxyXG4gICAgJ1thdHRyLm1heF0nOiAnbWF4J1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3Qge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgIH0gYF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2dyZXNzYmFyQ29tcG9uZW50IHtcclxuICAvKiogbWF4aW11bSB0b3RhbCB2YWx1ZSBvZiBwcm9ncmVzcyBlbGVtZW50ICovXHJcbiAgQElucHV0KCkgbWF4ID0gMTAwO1xyXG5cclxuICAvKiogaWYgYHRydWVgIGNoYW5naW5nIHZhbHVlIG9mIHByb2dyZXNzIGJhciB3aWxsIGJlIGFuaW1hdGVkICovXHJcbiAgQElucHV0KCkgYW5pbWF0ZSA9IGZhbHNlO1xyXG5cclxuICAvKiogSWYgYHRydWVgLCBzdHJpcGVkIGNsYXNzZXMgYXJlIGFwcGxpZWQgKi9cclxuICBASW5wdXQoKSBzdHJpcGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBwcm92aWRlIG9uZSBvZiB0aGUgZm91ciBzdXBwb3J0ZWQgY29udGV4dHVhbCBjbGFzc2VzOiBgc3VjY2Vzc2AsIGBpbmZvYCwgYHdhcm5pbmdgLCBgZGFuZ2VyYCAqL1xyXG4gIEBJbnB1dCgpIHR5cGU/OiBQcm9ncmVzc2JhclR5cGU7XHJcblxyXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhci4gQ291bGQgYmUgYSBudW1iZXIgb3IgYXJyYXkgb2Ygb2JqZWN0c1xyXG4gICAqIGxpa2Uge1widmFsdWVcIjoxNSxcInR5cGVcIjpcImluZm9cIixcImxhYmVsXCI6XCIxNSAlXCJ9XHJcbiAgICovXHJcbiAgQElucHV0KClcclxuICBzZXQgdmFsdWUodmFsdWU6IG51bWJlciB8IEJhclZhbHVlW10pIHtcclxuICAgIHRoaXMuaXNTdGFja2VkID0gQXJyYXkuaXNBcnJheSh2YWx1ZSk7XHJcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJykge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLl92YWx1ZXMgPSB2b2lkIDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl92YWx1ZSA9IHZvaWQgMDtcclxuICAgICAgdGhpcy5fdmFsdWVzID0gdmFsdWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1N0YWNrZWQgPSBmYWxzZTtcclxuICBfdmFsdWU/ID0gMDtcclxuICBfdmFsdWVzPzogQmFyVmFsdWVbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBQcm9ncmVzc2JhckNvbmZpZykge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzU3RhY2tlZCB0aGVuIE5vdFN0YWNrZWQgZWxzZSBTdGFja2VkXCI+PC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI05vdFN0YWNrZWQ+XHJcbiAgPGJhciBbdHlwZV09XCJ0eXBlXCIgW3ZhbHVlXT1cIl92YWx1ZVwiIFttYXhdPVwibWF4XCIgW2FuaW1hdGVdPVwiYW5pbWF0ZVwiIFtzdHJpcGVkXT1cInN0cmlwZWRcIj5cclxuICAgIDxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuICA8L2Jhcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjU3RhY2tlZD5cclxuICA8YmFyICpuZ0Zvcj1cImxldCBpdGVtIG9mIF92YWx1ZXNcIlxyXG4gICAgICAgW3R5cGVdPVwiaXRlbS50eXBlXCIgW3ZhbHVlXT1cIml0ZW0udmFsdWVcIiBbbWF4XT1cIml0ZW0ubWF4IHx8IG1heFwiIFthbmltYXRlXT1cImFuaW1hdGVcIiBbc3RyaXBlZF09XCJzdHJpcGVkXCI+e3sgaXRlbS5sYWJlbCB9fTwvYmFyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=