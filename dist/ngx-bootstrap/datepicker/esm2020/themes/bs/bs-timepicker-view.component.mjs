import { Component } from '@angular/core';
import * as i0 from "@angular/core";
export class BsTimepickerViewComponent {
    constructor() {
        this.ampm = 'ok';
        this.hours = 0;
        this.minutes = 0;
    }
}
BsTimepickerViewComponent.ɵfac = function BsTimepickerViewComponent_Factory(t) { return new (t || BsTimepickerViewComponent)(); };
BsTimepickerViewComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BsTimepickerViewComponent, selectors: [["bs-timepicker"]], decls: 16, vars: 3, consts: [[1, "bs-timepicker-container"], [1, "bs-timepicker-controls"], ["type", "button", 1, "bs-decrease"], ["type", "text", "placeholder", "00", 3, "value"], ["type", "button", 1, "bs-increase"], ["type", "button", 1, "switch-time-format"], ["src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg==", "alt", ""]], template: function BsTimepickerViewComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "button", 2);
        i0.ɵɵtext(3, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(4, "input", 3);
        i0.ɵɵelementStart(5, "button", 4);
        i0.ɵɵtext(6, "+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "div", 1);
        i0.ɵɵelementStart(8, "button", 2);
        i0.ɵɵtext(9, "-");
        i0.ɵɵelementEnd();
        i0.ɵɵelement(10, "input", 3);
        i0.ɵɵelementStart(11, "button", 4);
        i0.ɵɵtext(12, "+");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(13, "button", 5);
        i0.ɵɵtext(14);
        i0.ɵɵelement(15, "img", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("value", ctx.hours);
        i0.ɵɵadvance(6);
        i0.ɵɵproperty("value", ctx.minutes);
        i0.ɵɵadvance(4);
        i0.ɵɵtextInterpolate1("", ctx.ampm, " ");
    } }, encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BsTimepickerViewComponent, [{
        type: Component,
        args: [{
                selector: 'bs-timepicker',
                template: `
    <div class="bs-timepicker-container">
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="hours" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <div class="bs-timepicker-controls">
        <button class="bs-decrease" type="button">-</button>
        <input type="text" [value]="minutes" placeholder="00">
        <button class="bs-increase" type="button">+</button>
      </div>
      <button class="switch-time-format" type="button">{{ ampm }}
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAABSElEQVQYV3XQPUvDUBQG4HNuagtVqc6KgouCv6GIuIntYBLB9hcIQpLStCAIV7DYmpTcRWcXqZio3Vwc/UCc/QEqfgyKGbr0I7nS1EiHeqYzPO/h5SD0jaxUZjmSLCB+OFb+UFINFwASAEAdpu9gaGXVyAHHFQBkHpKHc6a9dzECvADyY9sqlAMsK9W0jzxDXqeytr3mhQckxSji27TJJ5/rPmIpwJJq3HrtduriYOurv1a4i1p5HnhkG9OFymi0ReoO05cGwb+ayv4dysVygjeFmsP05f8wpZQ8fsdvfmuY9zjWSNqUtgYFVnOVReILYoBFzdQI5/GGFzNHhGbeZnopDGU29sZbscgldmC99w35VOATTycIMMcBXIfpSVGzZhA6C8hh00conln6VQ9TGgV32OEAKQC4DrBq7CJwd0ggR7Vq/rPrfgB+C3sGypY5DAAAAABJRU5ErkJggg=="
          alt="">
      </button>
    </div>
  `
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnMtdGltZXBpY2tlci12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9kYXRlcGlja2VyL3RoZW1lcy9icy9icy10aW1lcGlja2VyLXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7O0FBd0IxQyxNQUFNLE9BQU8seUJBQXlCO0lBdEJ0QztRQXVCRSxTQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNWLFlBQU8sR0FBRyxDQUFDLENBQUM7S0FDYjs7a0dBSlkseUJBQXlCOzRFQUF6Qix5QkFBeUI7UUFuQmxDLDhCQUFxQztRQUNuQyw4QkFBb0M7UUFDbEMsaUNBQTBDO1FBQUEsaUJBQUM7UUFBQSxpQkFBUztRQUNwRCwyQkFBb0Q7UUFDcEQsaUNBQTBDO1FBQUEsaUJBQUM7UUFBQSxpQkFBUztRQUN0RCxpQkFBTTtRQUNOLDhCQUFvQztRQUNsQyxpQ0FBMEM7UUFBQSxpQkFBQztRQUFBLGlCQUFTO1FBQ3BELDRCQUFzRDtRQUN0RCxrQ0FBMEM7UUFBQSxrQkFBQztRQUFBLGlCQUFTO1FBQ3RELGlCQUFNO1FBQ04sa0NBQWlEO1FBQUEsYUFDL0M7UUFBQSwwQkFFUztRQUNYLGlCQUFTO1FBQ1gsaUJBQU07O1FBYmlCLGVBQWU7UUFBZixpQ0FBZTtRQUtmLGVBQWlCO1FBQWpCLG1DQUFpQjtRQUdXLGVBQy9DO1FBRCtDLHdDQUMvQzs7dUZBT0sseUJBQXlCO2NBdEJyQyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBa0JUO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYnMtdGltZXBpY2tlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgY2xhc3M9XCJicy10aW1lcGlja2VyLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiIHR5cGU9XCJidXR0b25cIj4tPC9idXR0b24+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cImhvdXJzXCIgcGxhY2Vob2xkZXI9XCIwMFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1pbmNyZWFzZVwiIHR5cGU9XCJidXR0b25cIj4rPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYnMtdGltZXBpY2tlci1jb250cm9sc1wiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJicy1kZWNyZWFzZVwiIHR5cGU9XCJidXR0b25cIj4tPC9idXR0b24+XHJcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgW3ZhbHVlXT1cIm1pbnV0ZXNcIiBwbGFjZWhvbGRlcj1cIjAwXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJzLWluY3JlYXNlXCIgdHlwZT1cImJ1dHRvblwiPis8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxidXR0b24gY2xhc3M9XCJzd2l0Y2gtdGltZS1mb3JtYXRcIiB0eXBlPVwiYnV0dG9uXCI+e3sgYW1wbSB9fVxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz1cImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBS0NBWUFBQUJpOEtTREFBQUJTRWxFUVZRWVYzWFFQVXZEVUJRRzRITnVhZ3RWcWM2S2dvdUN2NkdJdUludFlCTEI5aGNJUXBMU3RDQUlWN0RZbXBUY1JXY1hxWmlvM1Z3Yy9VQ2MvUUVxZmd5S0dicjBJN25TMUVpSGVxWXpQTy9oNVNEMGpheFVaam1TTENCK09GYitVRklORndBU0FFQWRwdTlnYUdYVnlBSEhGUUJrSHBLSGM2YTlkekVDdkFEeVk5c3FsQU1zSzlXMGp6eERYcWV5dHIzbWhRY2t4U2ppMjdUSko1L3JQbUlwd0pKcTNIcnRkdXJpWU91cnYxYTRpMXA1SG5oa0c5T0Z5bWkwUmVvTzA1Y0d3YitheXY0ZHlzVnlnamVGbXNQMDVmOHdwWlE4ZnNkdmZtdVk5empXU05xVXRnWUZWbk9WUmVJTFlvQkZ6ZFFJNS9HR0Z6TkhoR2JlWm5vcERHVTI5c1pic2NnbGRtQzk5dzM1Vk9BVFR5Y0lNTWNCWElmcFNWR3paaEE2QzhoaDAwY29ubG42VlE5VEdnVjMyT0VBS1FDNERyQnE3Q0p3ZDBnZ1I3VnEvclByZmdCK0Mzc0d5cFk1REFBQUFBQkpSVTVFcmtKZ2dnPT1cIlxyXG4gICAgICAgICAgYWx0PVwiXCI+XHJcbiAgICAgIDwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnNUaW1lcGlja2VyVmlld0NvbXBvbmVudCB7XHJcbiAgYW1wbSA9ICdvayc7XHJcbiAgaG91cnMgPSAwO1xyXG4gIG1pbnV0ZXMgPSAwO1xyXG59XHJcbiJdfQ==