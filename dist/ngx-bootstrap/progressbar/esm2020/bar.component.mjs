import { ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2 } from '@angular/core';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
const _c0 = ["*"];
export class BarComponent {
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        /** maximum total value of progress element */
        this.max = 100;
        /** current value of progress bar */
        this.value = 0;
        /** if `true` changing value of progress bar will be animated */
        this.animate = false;
        /** If `true`, striped classes are applied */
        this.striped = false;
        /** provide one of the four supported contextual classes: `success`, `info`, `warning`, `danger` */
        this.type = 'info';
        this.percent = 100;
    }
    get isBs3() {
        return isBs3();
    }
    ngOnChanges(changes) {
        if (changes["value"] || changes["max"]) {
            this.percent = 100 * (Number(changes["value"]?.currentValue || this.value)
                / Number((changes["max"]?.currentValue || this.max) || 100));
        }
        if (changes["type"]) {
            this.applyTypeClasses();
        }
    }
    applyTypeClasses() {
        if (this._prevType) {
            const barTypeClass = `progress-bar-${this._prevType}`;
            const bgClass = `bg-${this._prevType}`;
            this.renderer.removeClass(this.el.nativeElement, barTypeClass);
            this.renderer.removeClass(this.el.nativeElement, bgClass);
            this._prevType = void 0;
        }
        if (this.type) {
            const barTypeClass = `progress-bar-${this.type}`;
            const bgClass = `bg-${this.type}`;
            this.renderer.addClass(this.el.nativeElement, barTypeClass);
            this.renderer.addClass(this.el.nativeElement, bgClass);
            this._prevType = this.type;
        }
    }
}
BarComponent.ɵfac = function BarComponent_Factory(t) { return new (t || BarComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
BarComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BarComponent, selectors: [["bar"]], hostAttrs: ["role", "progressbar", "aria-valuemin", "0"], hostVars: 15, hostBindings: function BarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-valuenow", ctx.value)("aria-valuetext", ctx.percent ? ctx.percent.toFixed(0) + "%" : "")("aria-valuemax", ctx.max);
        i0.ɵɵstyleProp("height", "100", "%")("width", ctx.percent, "%");
        i0.ɵɵclassProp("progress-bar", true)("progress-bar-animated", !ctx.isBs3 && ctx.animate)("progress-bar-striped", ctx.striped)("active", ctx.isBs3 && ctx.animate);
    } }, inputs: { max: "max", value: "value", animate: "animate", striped: "striped", type: "type" }, features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 1, vars: 0, template: function BarComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BarComponent, [{
        type: Component,
        args: [{ selector: 'bar', changeDetection: ChangeDetectionStrategy.OnPush, host: {
                    role: 'progressbar',
                    'aria-valuemin': '0',
                    '[class.progress-bar]': 'true',
                    '[class.progress-bar-animated]': '!isBs3 && animate',
                    '[class.progress-bar-striped]': 'striped',
                    '[class.active]': 'isBs3 && animate',
                    '[attr.aria-valuenow]': 'value',
                    '[attr.aria-valuetext]': 'percent ? percent.toFixed(0) + "%" : ""',
                    '[attr.aria-valuemax]': 'max',
                    '[style.height.%]': '"100"',
                    '[style.width.%]': 'percent'
                }, template: "<ng-content></ng-content>\r\n" }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { max: [{
            type: Input
        }], value: [{
            type: Input
        }], animate: [{
            type: Input
        }], striped: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9wcm9ncmVzc2Jhci9iYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vc3JjL3Byb2dyZXNzYmFyL2Jhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUVMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0scUJBQXFCLENBQUM7OztBQXNCNUMsTUFBTSxPQUFPLFlBQVk7SUF3QnZCLFlBQ1UsRUFBYyxFQUNkLFFBQW1CO1FBRG5CLE9BQUUsR0FBRixFQUFFLENBQVk7UUFDZCxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBekI3Qiw4Q0FBOEM7UUFDckMsUUFBRyxHQUFHLEdBQUcsQ0FBQztRQUVuQixvQ0FBb0M7UUFDM0IsVUFBSyxHQUFJLENBQUMsQ0FBQztRQUVwQixnRUFBZ0U7UUFDdkQsWUFBTyxHQUFJLEtBQUssQ0FBQztRQUUxQiw2Q0FBNkM7UUFDcEMsWUFBTyxHQUFJLEtBQUssQ0FBQztRQUUxQixtR0FBbUc7UUFDMUYsU0FBSSxHQUFxQixNQUFNLENBQUM7UUFFekMsWUFBTyxHQUFHLEdBQUcsQ0FBQztJQVdYLENBQUM7SUFUSixJQUFJLEtBQUs7UUFDUCxPQUFPLEtBQUssRUFBRSxDQUFDO0lBQ2pCLENBQUM7SUFTRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxZQUFZLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztrQkFDdEUsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLFlBQVksSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNoRTtRQUVELElBQUksT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDbEIsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN0RCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO1NBQ3pCO1FBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNqRCxNQUFNLE9BQU8sR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxZQUFZLENBQUMsQ0FBQztZQUM1RCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUN2RCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDOzt3RUF4RFUsWUFBWTsrREFBWixZQUFZOzs7Ozs7UUNoQ3pCLGtCQUF5Qjs7dUZEZ0NaLFlBQVk7Y0FuQnhCLFNBQVM7MkJBQ0UsS0FBSyxtQkFFRSx1QkFBdUIsQ0FBQyxNQUFNLFFBRXpDO29CQUNKLElBQUksRUFBRSxhQUFhO29CQUNuQixlQUFlLEVBQUUsR0FBRztvQkFDcEIsc0JBQXNCLEVBQUUsTUFBTTtvQkFDOUIsK0JBQStCLEVBQUUsbUJBQW1CO29CQUNwRCw4QkFBOEIsRUFBRSxTQUFTO29CQUN6QyxnQkFBZ0IsRUFBRSxrQkFBa0I7b0JBQ3BDLHNCQUFzQixFQUFFLE9BQU87b0JBQy9CLHVCQUF1QixFQUFFLHlDQUF5QztvQkFDbEUsc0JBQXNCLEVBQUUsS0FBSztvQkFDN0Isa0JBQWtCLEVBQUUsT0FBTztvQkFDM0IsaUJBQWlCLEVBQUUsU0FBUztpQkFDN0I7cUZBSVEsR0FBRztrQkFBWCxLQUFLO1lBR0csS0FBSztrQkFBYixLQUFLO1lBR0csT0FBTztrQkFBZixLQUFLO1lBR0csT0FBTztrQkFBZixLQUFLO1lBR0csSUFBSTtrQkFBWixLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFNpbXBsZUNoYW5nZXNcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGlzQnMzIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IFByb2dyZXNzYmFyVHlwZSB9IGZyb20gJy4vcHJvZ3Jlc3NiYXItdHlwZS5pbnRlcmZhY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdiYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgIHJvbGU6ICdwcm9ncmVzc2JhcicsXHJcbiAgICAnYXJpYS12YWx1ZW1pbic6ICcwJyxcclxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyXSc6ICd0cnVlJyxcclxuICAgICdbY2xhc3MucHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXSc6ICchaXNCczMgJiYgYW5pbWF0ZScsXHJcbiAgICAnW2NsYXNzLnByb2dyZXNzLWJhci1zdHJpcGVkXSc6ICdzdHJpcGVkJyxcclxuICAgICdbY2xhc3MuYWN0aXZlXSc6ICdpc0JzMyAmJiBhbmltYXRlJyxcclxuICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXHJcbiAgICAnW2F0dHIuYXJpYS12YWx1ZXRleHRdJzogJ3BlcmNlbnQgPyBwZXJjZW50LnRvRml4ZWQoMCkgKyBcIiVcIiA6IFwiXCInLFxyXG4gICAgJ1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ21heCcsXHJcbiAgICAnW3N0eWxlLmhlaWdodC4lXSc6ICdcIjEwMFwiJyxcclxuICAgICdbc3R5bGUud2lkdGguJV0nOiAncGVyY2VudCdcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xyXG4gIC8qKiBtYXhpbXVtIHRvdGFsIHZhbHVlIG9mIHByb2dyZXNzIGVsZW1lbnQgKi9cclxuICBASW5wdXQoKSBtYXggPSAxMDA7XHJcblxyXG4gIC8qKiBjdXJyZW50IHZhbHVlIG9mIHByb2dyZXNzIGJhciAqL1xyXG4gIEBJbnB1dCgpIHZhbHVlPyA9IDA7XHJcblxyXG4gIC8qKiBpZiBgdHJ1ZWAgY2hhbmdpbmcgdmFsdWUgb2YgcHJvZ3Jlc3MgYmFyIHdpbGwgYmUgYW5pbWF0ZWQgKi9cclxuICBASW5wdXQoKSBhbmltYXRlPyA9IGZhbHNlO1xyXG5cclxuICAvKiogSWYgYHRydWVgLCBzdHJpcGVkIGNsYXNzZXMgYXJlIGFwcGxpZWQgKi9cclxuICBASW5wdXQoKSBzdHJpcGVkPyA9IGZhbHNlO1xyXG5cclxuICAvKiogcHJvdmlkZSBvbmUgb2YgdGhlIGZvdXIgc3VwcG9ydGVkIGNvbnRleHR1YWwgY2xhc3NlczogYHN1Y2Nlc3NgLCBgaW5mb2AsIGB3YXJuaW5nYCwgYGRhbmdlcmAgKi9cclxuICBASW5wdXQoKSB0eXBlPzogUHJvZ3Jlc3NiYXJUeXBlID0gJ2luZm8nO1xyXG5cclxuICBwZXJjZW50ID0gMTAwO1xyXG5cclxuICBnZXQgaXNCczMoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaXNCczMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3ByZXZUeXBlPzogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjJcclxuICApIHt9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzW1widmFsdWVcIl0gfHwgY2hhbmdlc1tcIm1heFwiXSkge1xyXG4gICAgICB0aGlzLnBlcmNlbnQgPSAxMDAgKiAoTnVtYmVyKGNoYW5nZXNbXCJ2YWx1ZVwiXT8uY3VycmVudFZhbHVlIHx8IHRoaXMudmFsdWUpXHJcbiAgICAgICAgLyBOdW1iZXIoKGNoYW5nZXNbXCJtYXhcIl0/LmN1cnJlbnRWYWx1ZSB8fCB0aGlzLm1heCkgfHwgMTAwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoYW5nZXNbXCJ0eXBlXCJdKSB7XHJcbiAgICAgIHRoaXMuYXBwbHlUeXBlQ2xhc3NlcygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhcHBseVR5cGVDbGFzc2VzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuX3ByZXZUeXBlKSB7XHJcbiAgICAgIGNvbnN0IGJhclR5cGVDbGFzcyA9IGBwcm9ncmVzcy1iYXItJHt0aGlzLl9wcmV2VHlwZX1gO1xyXG4gICAgICBjb25zdCBiZ0NsYXNzID0gYGJnLSR7dGhpcy5fcHJldlR5cGV9YDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGJhclR5cGVDbGFzcyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBiZ0NsYXNzKTtcclxuICAgICAgdGhpcy5fcHJldlR5cGUgPSB2b2lkIDA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudHlwZSkge1xyXG4gICAgICBjb25zdCBiYXJUeXBlQ2xhc3MgPSBgcHJvZ3Jlc3MtYmFyLSR7dGhpcy50eXBlfWA7XHJcbiAgICAgIGNvbnN0IGJnQ2xhc3MgPSBgYmctJHt0aGlzLnR5cGV9YDtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIGJhclR5cGVDbGFzcyk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbC5uYXRpdmVFbGVtZW50LCBiZ0NsYXNzKTtcclxuICAgICAgdGhpcy5fcHJldlR5cGUgPSB0aGlzLnR5cGU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIjxuZy1jb250ZW50PjwvbmctY29udGVudD5cclxuIl19