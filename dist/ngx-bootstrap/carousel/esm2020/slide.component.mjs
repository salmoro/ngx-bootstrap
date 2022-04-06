import { Component, HostBinding, Input } from '@angular/core';
import { CarouselComponent } from './carousel.component';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.component";
const _c0 = ["*"];
export class SlideComponent {
    constructor(carousel) {
        /** Is current slide active */
        this.active = false;
        this.itemWidth = '100%';
        this.order = 0;
        this.isAnimated = false;
        /** Wraps element by appropriate CSS classes */
        this.addClass = true;
        this.multilist = false;
        this.carousel = carousel;
    }
    /** Fires changes in container collection after adding a new slide instance */
    ngOnInit() {
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
        this.multilist = this.carousel?.itemsPerSlide > 1;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(i0.ɵɵdirectiveInject(i1.CarouselComponent)); };
SlideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideComponent, selectors: [["slide"]], hostVars: 15, hostBindings: function SlideComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-hidden", !ctx.active);
        i0.ɵɵstyleProp("width", ctx.itemWidth)("order", ctx.order);
        i0.ɵɵclassProp("multilist-margin", ctx.multilist)("active", ctx.active)("carousel-animation", ctx.isAnimated)("item", ctx.addClass)("carousel-item", ctx.addClass);
    } }, inputs: { active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵprojection(1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassProp("active", ctx.active);
    } }, styles: [".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideComponent, [{
        type: Component,
        args: [{
                selector: 'slide',
                template: `
    <div [class.active]="active" class="item">
      <ng-content></ng-content>
    </div>
  `,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[attr.aria-hidden]': '!active',
                    '[class.multilist-margin]': 'multilist'
                },
                styles: [`
    :host.carousel-animation {
       transition: opacity 0.6s ease, visibility 0.6s ease;
       float: left;
    }
    :host.carousel-animation.active {
      opacity: 1;
      visibility: visible;
    }
    :host.carousel-animation:not(.active) {
      display: block;
      position: absolute;
      opacity: 0;
      visibility: hidden;
    }
    :host.multilist-margin {
      margin-right: auto;
    }
    :host.carousel-item {
      perspective: 1000px;
    }
  `]
            }]
    }], function () { return [{ type: i1.CarouselComponent }]; }, { active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], itemWidth: [{
            type: HostBinding,
            args: ['style.width']
        }], order: [{
            type: HostBinding,
            args: ['style.order']
        }], isAnimated: [{
            type: HostBinding,
            args: ['class.carousel-animation']
        }], addClass: [{
            type: HostBinding,
            args: ['class.item']
        }, {
            type: HostBinding,
            args: ['class.carousel-item']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2xpZGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL3NsaWRlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFdBQVcsRUFFWCxLQUFLLEVBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7QUFxQ3pELE1BQU0sT0FBTyxjQUFjO0lBa0J6QixZQUFZLFFBQTJCO1FBakJ2Qyw4QkFBOEI7UUFHOUIsV0FBTSxHQUFHLEtBQUssQ0FBQztRQUVhLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFDbkIsVUFBSyxHQUFHLENBQUMsQ0FBQztRQUNHLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFNUQsK0NBQStDO1FBRy9DLGFBQVEsR0FBRyxJQUFJLENBQUM7UUFJaEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUVoQixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztJQUMzQixDQUFDO0lBRUQsOEVBQThFO0lBQzlFLFFBQVE7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxHQUFHLENBQUM7UUFDekQsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsR0FBRyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELGtGQUFrRjtJQUNsRixXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7NEVBaENVLGNBQWM7aUVBQWQsY0FBYzs7Ozs7O1FBaEN2Qiw4QkFBMEM7UUFDeEMsa0JBQXlCO1FBQzNCLGlCQUFNOztRQUZELG9DQUF1Qjs7dUZBZ0NuQixjQUFjO2NBbkMxQixTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLE9BQU87Z0JBQ2pCLFFBQVEsRUFBRTs7OztHQUlUO2dCQUNELHFFQUFxRTtnQkFDckUsSUFBSSxFQUFFO29CQUNKLG9CQUFvQixFQUFFLFNBQVM7b0JBQy9CLDBCQUEwQixFQUFFLFdBQVc7aUJBQ3hDO2dCQUNELE1BQU0sRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQlIsQ0FBQzthQUNIO29FQUtDLE1BQU07a0JBRkwsV0FBVzttQkFBQyxjQUFjOztrQkFDMUIsS0FBSztZQUdzQixTQUFTO2tCQUFwQyxXQUFXO21CQUFDLGFBQWE7WUFDRSxLQUFLO2tCQUFoQyxXQUFXO21CQUFDLGFBQWE7WUFDZSxVQUFVO2tCQUFsRCxXQUFXO21CQUFDLDBCQUEwQjtZQUt2QyxRQUFRO2tCQUZQLFdBQVc7bUJBQUMsWUFBWTs7a0JBQ3hCLFdBQVc7bUJBQUMscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgT25EZXN0cm95LFxyXG4gIElucHV0LFxyXG4gIE9uSW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NsaWRlJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGRpdiBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZVwiIGNsYXNzPVwiaXRlbVwiPlxyXG4gICAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgICA8L2Rpdj5cclxuICBgLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci5hcmlhLWhpZGRlbl0nOiAnIWFjdGl2ZScsXHJcbiAgICAnW2NsYXNzLm11bHRpbGlzdC1tYXJnaW5dJzogJ211bHRpbGlzdCdcclxuICB9LFxyXG4gIHN0eWxlczogW2BcclxuICAgIDpob3N0LmNhcm91c2VsLWFuaW1hdGlvbiB7XHJcbiAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNnMgZWFzZSwgdmlzaWJpbGl0eSAwLjZzIGVhc2U7XHJcbiAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxuICAgIDpob3N0LmNhcm91c2VsLWFuaW1hdGlvbi5hY3RpdmUge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgfVxyXG4gICAgOmhvc3QuY2Fyb3VzZWwtYW5pbWF0aW9uOm5vdCguYWN0aXZlKSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIDpob3N0Lm11bHRpbGlzdC1tYXJnaW4ge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB9XHJcbiAgICA6aG9zdC5jYXJvdXNlbC1pdGVtIHtcclxuICAgICAgcGVyc3BlY3RpdmU6IDEwMDBweDtcclxuICAgIH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2xpZGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIElzIGN1cnJlbnQgc2xpZGUgYWN0aXZlICovXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5hY3RpdmUnKVxyXG4gIEBJbnB1dCgpXHJcbiAgYWN0aXZlID0gZmFsc2U7XHJcblxyXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSBpdGVtV2lkdGggPSAnMTAwJSc7XHJcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vcmRlcicpIG9yZGVyID0gMDtcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmNhcm91c2VsLWFuaW1hdGlvbicpIGlzQW5pbWF0ZWQgPSBmYWxzZTtcclxuXHJcbiAgLyoqIFdyYXBzIGVsZW1lbnQgYnkgYXBwcm9wcmlhdGUgQ1NTIGNsYXNzZXMgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLml0ZW0nKVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY2Fyb3VzZWwtaXRlbScpXHJcbiAgYWRkQ2xhc3MgPSB0cnVlO1xyXG5cclxuICAvKiogTGluayB0byBQYXJlbnQoY29udGFpbmVyLWNvbGxlY3Rpb24pIGNvbXBvbmVudCAqL1xyXG4gIHByb3RlY3RlZCBjYXJvdXNlbDogQ2Fyb3VzZWxDb21wb25lbnQ7XHJcbiAgbXVsdGlsaXN0ID0gZmFsc2U7XHJcbiAgY29uc3RydWN0b3IoY2Fyb3VzZWw6IENhcm91c2VsQ29tcG9uZW50KSB7XHJcbiAgICB0aGlzLmNhcm91c2VsID0gY2Fyb3VzZWw7XHJcbiAgfVxyXG5cclxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciBhZGRpbmcgYSBuZXcgc2xpZGUgaW5zdGFuY2UgKi9cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2Fyb3VzZWwuYWRkU2xpZGUodGhpcyk7XHJcbiAgICB0aGlzLml0ZW1XaWR0aCA9IGAkezEwMCAvIHRoaXMuY2Fyb3VzZWwuaXRlbXNQZXJTbGlkZX0lYDtcclxuICAgIHRoaXMubXVsdGlsaXN0ID0gdGhpcy5jYXJvdXNlbD8uaXRlbXNQZXJTbGlkZSA+IDE7XHJcbiAgfVxyXG5cclxuICAvKiogRmlyZXMgY2hhbmdlcyBpbiBjb250YWluZXIgY29sbGVjdGlvbiBhZnRlciByZW1vdmluZyBvZiB0aGlzIHNsaWRlIGluc3RhbmNlICovXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhcm91c2VsLnJlbW92ZVNsaWRlKHRoaXMpO1xyXG4gIH1cclxufVxyXG4iXX0=