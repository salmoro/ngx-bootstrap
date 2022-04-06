import { AnimationBuilder } from '@angular/animations';
import { Directive, ElementRef, EventEmitter, HostBinding, Input, Output, Renderer2 } from '@angular/core';
import { collapseAnimation, expandAnimation } from './collapse-animations';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations";
export class CollapseDirective {
    constructor(_el, _renderer, _builder) {
        this._el = _el;
        this._renderer = _renderer;
        /** This event fires as soon as content collapses */
        this.collapsed = new EventEmitter();
        /** This event fires when collapsing is started */
        this.collapses = new EventEmitter();
        /** This event fires as soon as content becomes visible */
        this.expanded = new EventEmitter();
        /** This event fires when expansion is started */
        this.expands = new EventEmitter();
        // shown
        this.isExpanded = true;
        this.collapseNewValue = true;
        // hidden
        this.isCollapsed = false;
        // stale state
        this.isCollapse = true;
        // animation state
        this.isCollapsing = false;
        /** turn on/off animation */
        this.isAnimated = false;
        this._display = 'block';
        this._stylesLoaded = false;
        this._COLLAPSE_ACTION_NAME = 'collapse';
        this._EXPAND_ACTION_NAME = 'expand';
        this._factoryCollapseAnimation = _builder.build(collapseAnimation);
        this._factoryExpandAnimation = _builder.build(expandAnimation);
    }
    set display(value) {
        this._display = value;
        if (value === 'none') {
            this.hide();
            return;
        }
        this.isAnimated ? this.toggle() : this.show();
    }
    /** A flag indicating visibility of content (shown or hidden) */
    set collapse(value) {
        this.collapseNewValue = value;
        if (!this._player || this._isAnimationDone) {
            this.isExpanded = value;
            this.toggle();
        }
    }
    get collapse() {
        return this.isExpanded;
    }
    ngAfterViewChecked() {
        this._stylesLoaded = true;
        if (!this._player || !this._isAnimationDone) {
            return;
        }
        this._player.reset();
        this._renderer.setStyle(this._el.nativeElement, 'height', '*');
    }
    /** allows to manually toggle content visibility */
    toggle() {
        if (this.isExpanded) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /** allows to manually hide content */
    hide() {
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        this.isCollapsing = false;
        this.collapses.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._COLLAPSE_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.show();
                return;
            }
            this.collapsed.emit(this);
            this._renderer.setStyle(this._el.nativeElement, 'display', 'none');
        });
    }
    /** allows to manually show collapsed content */
    show() {
        this._renderer.setStyle(this._el.nativeElement, 'display', this._display);
        this.isCollapsing = true;
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapsing = false;
        this.expands.emit(this);
        this._isAnimationDone = false;
        this.animationRun(this.isAnimated, this._EXPAND_ACTION_NAME)(() => {
            this._isAnimationDone = true;
            if (this.collapseNewValue !== this.isCollapsed && this.isAnimated) {
                this.hide();
                return;
            }
            this.expanded.emit(this);
            this._renderer.removeStyle(this._el.nativeElement, 'overflow');
        });
    }
    animationRun(isAnimated, action) {
        if (!isAnimated || !this._stylesLoaded) {
            return (callback) => callback();
        }
        this._renderer.setStyle(this._el.nativeElement, 'overflow', 'hidden');
        this._renderer.addClass(this._el.nativeElement, 'collapse');
        const factoryAnimation = (action === this._EXPAND_ACTION_NAME)
            ? this._factoryExpandAnimation
            : this._factoryCollapseAnimation;
        if (this._player) {
            this._player.destroy();
        }
        this._player = factoryAnimation.create(this._el.nativeElement);
        this._player.play();
        return (callback) => this._player?.onDone(callback);
    }
}
CollapseDirective.ɵfac = function CollapseDirective_Factory(t) { return new (t || CollapseDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.AnimationBuilder)); };
CollapseDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CollapseDirective, selectors: [["", "collapse", ""]], hostVars: 9, hostBindings: function CollapseDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("aria-hidden", ctx.isCollapsed);
        i0.ɵɵclassProp("collapse", ctx.isCollapse)("in", ctx.isExpanded)("show", ctx.isExpanded)("collapsing", ctx.isCollapsing);
    } }, inputs: { display: "display", isAnimated: "isAnimated", collapse: "collapse" }, outputs: { collapsed: "collapsed", collapses: "collapses", expanded: "expanded", expands: "expands" }, exportAs: ["bs-collapse"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CollapseDirective, [{
        type: Directive,
        args: [{
                selector: '[collapse]',
                exportAs: 'bs-collapse',
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    '[class.collapse]': 'true'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.AnimationBuilder }]; }, { collapsed: [{
            type: Output
        }], collapses: [{
            type: Output
        }], expanded: [{
            type: Output
        }], expands: [{
            type: Output
        }], isExpanded: [{
            type: HostBinding,
            args: ['class.in']
        }, {
            type: HostBinding,
            args: ['class.show']
        }], isCollapsed: [{
            type: HostBinding,
            args: ['attr.aria-hidden']
        }], isCollapse: [{
            type: HostBinding,
            args: ['class.collapse']
        }], isCollapsing: [{
            type: HostBinding,
            args: ['class.collapsing']
        }], display: [{
            type: Input
        }], isAnimated: [{
            type: Input
        }], collapse: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGFwc2UuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbGxhcHNlL2NvbGxhcHNlLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsZ0JBQWdCLEVBR2pCLE1BQU0scUJBQXFCLENBQUM7QUFFN0IsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLFdBQVcsRUFDWCxLQUFLLEVBQ0wsTUFBTSxFQUNOLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQ0wsaUJBQWlCLEVBQ2pCLGVBQWUsRUFDaEIsTUFBTSx1QkFBdUIsQ0FBQzs7O0FBVS9CLE1BQU0sT0FBTyxpQkFBaUI7SUE0RDVCLFlBQ1UsR0FBZSxFQUNmLFNBQW9CLEVBQzVCLFFBQTBCO1FBRmxCLFFBQUcsR0FBSCxHQUFHLENBQVk7UUFDZixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBN0Q5QixvREFBb0Q7UUFDMUMsY0FBUyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQzFFLGtEQUFrRDtRQUN4QyxjQUFTLEdBQW9DLElBQUksWUFBWSxFQUFFLENBQUM7UUFDMUUsMERBQTBEO1FBQ2hELGFBQVEsR0FBb0MsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RSxpREFBaUQ7UUFDdkMsWUFBTyxHQUFvQyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hFLFFBQVE7UUFJUixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLHFCQUFnQixHQUFHLElBQUksQ0FBQztRQUN4QixTQUFTO1FBQ3dCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBQ3JELGNBQWM7UUFDaUIsZUFBVSxHQUFHLElBQUksQ0FBQztRQUNqRCxrQkFBa0I7UUFDZSxpQkFBWSxHQUFHLEtBQUssQ0FBQztRQWF0RCw0QkFBNEI7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQWVwQixhQUFRLEdBQUcsT0FB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O21CQUFDLFVBQVU7O2tCQUN0QixXQUFXO21CQUFDLFlBQVk7WUFLUSxXQUFXO2tCQUEzQyxXQUFXO21CQUFDLGtCQUFrQjtZQUVBLFVBQVU7a0JBQXhDLFdBQVc7bUJBQUMsZ0JBQWdCO1lBRUksWUFBWTtrQkFBNUMsV0FBVzttQkFBQyxrQkFBa0I7WUFHM0IsT0FBTztrQkFEVixLQUFLO1lBWUcsVUFBVTtrQkFBbEIsS0FBSztZQUdGLFFBQVE7a0JBRFgsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQW5pbWF0aW9uQnVpbGRlcixcclxuICBBbmltYXRpb25GYWN0b3J5LFxyXG4gIEFuaW1hdGlvblBsYXllclxyXG59IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdDaGVja2VkLFxyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBIb3N0QmluZGluZyxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGNvbGxhcHNlQW5pbWF0aW9uLFxyXG4gIGV4cGFuZEFuaW1hdGlvblxyXG59IGZyb20gJy4vY29sbGFwc2UtYW5pbWF0aW9ucyc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjb2xsYXBzZV0nLFxyXG4gIGV4cG9ydEFzOiAnYnMtY29sbGFwc2UnLFxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taG9zdC1tZXRhZGF0YS1wcm9wZXJ0eVxyXG4gIGhvc3Q6IHtcclxuICAgICdbY2xhc3MuY29sbGFwc2VdJzogJ3RydWUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ29sbGFwc2VEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdDaGVja2VkIHtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyBhcyBzb29uIGFzIGNvbnRlbnQgY29sbGFwc2VzICovXHJcbiAgQE91dHB1dCgpIGNvbGxhcHNlZDogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGNvbGxhcHNpbmcgaXMgc3RhcnRlZCAqL1xyXG4gIEBPdXRwdXQoKSBjb2xsYXBzZXM6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIFRoaXMgZXZlbnQgZmlyZXMgYXMgc29vbiBhcyBjb250ZW50IGJlY29tZXMgdmlzaWJsZSAqL1xyXG4gIEBPdXRwdXQoKSBleHBhbmRlZDogRXZlbnRFbWl0dGVyPENvbGxhcHNlRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICAvKiogVGhpcyBldmVudCBmaXJlcyB3aGVuIGV4cGFuc2lvbiBpcyBzdGFydGVkICovXHJcbiAgQE91dHB1dCgpIGV4cGFuZHM6IEV2ZW50RW1pdHRlcjxDb2xsYXBzZURpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLy8gc2hvd25cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmluJylcclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNob3cnKVxyXG5cclxuICBpc0V4cGFuZGVkID0gdHJ1ZTtcclxuICBjb2xsYXBzZU5ld1ZhbHVlID0gdHJ1ZTtcclxuICAvLyBoaWRkZW5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1oaWRkZW4nKSBpc0NvbGxhcHNlZCA9IGZhbHNlO1xyXG4gIC8vIHN0YWxlIHN0YXRlXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5jb2xsYXBzZScpIGlzQ29sbGFwc2UgPSB0cnVlO1xyXG4gIC8vIGFuaW1hdGlvbiBzdGF0ZVxyXG4gIEBIb3N0QmluZGluZygnY2xhc3MuY29sbGFwc2luZycpIGlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHNldCBkaXNwbGF5KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX2Rpc3BsYXkgPSB2YWx1ZTtcclxuICAgIGlmICh2YWx1ZSA9PT0gJ25vbmUnKSB7XHJcbiAgICAgIHRoaXMuaGlkZSgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pc0FuaW1hdGVkID8gdGhpcy50b2dnbGUoKSA6IHRoaXMuc2hvdygpO1xyXG4gIH1cclxuXHJcbiAgLyoqIHR1cm4gb24vb2ZmIGFuaW1hdGlvbiAqL1xyXG4gIEBJbnB1dCgpIGlzQW5pbWF0ZWQgPSBmYWxzZTtcclxuICAvKiogQSBmbGFnIGluZGljYXRpbmcgdmlzaWJpbGl0eSBvZiBjb250ZW50IChzaG93biBvciBoaWRkZW4pICovXHJcbiAgQElucHV0KClcclxuICBzZXQgY29sbGFwc2UodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY29sbGFwc2VOZXdWYWx1ZSA9IHZhbHVlO1xyXG4gICAgaWYgKCF0aGlzLl9wbGF5ZXIgfHwgdGhpcy5faXNBbmltYXRpb25Eb25lKSB7XHJcbiAgICAgIHRoaXMuaXNFeHBhbmRlZCA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGNvbGxhcHNlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuaXNFeHBhbmRlZDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Rpc3BsYXkgPSAnYmxvY2snO1xyXG4gIHByaXZhdGUgX2lzQW5pbWF0aW9uRG9uZT86IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBfcGxheWVyPzogQW5pbWF0aW9uUGxheWVyO1xyXG4gIHByaXZhdGUgX3N0eWxlc0xvYWRlZCA9IGZhbHNlO1xyXG5cclxuICBwcml2YXRlIF9DT0xMQVBTRV9BQ1RJT05fTkFNRSA9ICdjb2xsYXBzZSc7XHJcbiAgcHJpdmF0ZSBfRVhQQU5EX0FDVElPTl9OQU1FID0gJ2V4cGFuZCc7XHJcblxyXG4gIHByaXZhdGUgcmVhZG9ubHkgX2ZhY3RvcnlDb2xsYXBzZUFuaW1hdGlvbjogQW5pbWF0aW9uRmFjdG9yeTtcclxuICBwcml2YXRlIHJlYWRvbmx5IF9mYWN0b3J5RXhwYW5kQW5pbWF0aW9uOiBBbmltYXRpb25GYWN0b3J5O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX2VsOiBFbGVtZW50UmVmLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIF9idWlsZGVyOiBBbmltYXRpb25CdWlsZGVyXHJcbiAgKSB7XHJcbiAgICB0aGlzLl9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb24gPSBfYnVpbGRlci5idWlsZChjb2xsYXBzZUFuaW1hdGlvbik7XHJcbiAgICB0aGlzLl9mYWN0b3J5RXhwYW5kQW5pbWF0aW9uID0gX2J1aWxkZXIuYnVpbGQoZXhwYW5kQW5pbWF0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMuX3N0eWxlc0xvYWRlZCA9IHRydWU7XHJcblxyXG4gICAgaWYgKCF0aGlzLl9wbGF5ZXIgfHwgIXRoaXMuX2lzQW5pbWF0aW9uRG9uZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcGxheWVyLnJlc2V0KCk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgJyonKTtcclxuICB9XHJcblxyXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgdG9nZ2xlIGNvbnRlbnQgdmlzaWJpbGl0eSAqL1xyXG4gIHRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzRXhwYW5kZWQpIHtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgaGlkZSBjb250ZW50ICovXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5pc0NvbGxhcHNlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuY29sbGFwc2VzLmVtaXQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5faXNBbmltYXRpb25Eb25lID0gZmFsc2U7XHJcblxyXG4gICAgdGhpcy5hbmltYXRpb25SdW4odGhpcy5pc0FuaW1hdGVkLCB0aGlzLl9DT0xMQVBTRV9BQ1RJT05fTkFNRSkoKCkgPT4ge1xyXG4gICAgICB0aGlzLl9pc0FuaW1hdGlvbkRvbmUgPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5jb2xsYXBzZU5ld1ZhbHVlICE9PSB0aGlzLmlzQ29sbGFwc2VkICYmIHRoaXMuaXNBbmltYXRlZCkge1xyXG4gICAgICAgIHRoaXMuc2hvdygpO1xyXG5cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jb2xsYXBzZWQuZW1pdCh0aGlzKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8qKiBhbGxvd3MgdG8gbWFudWFsbHkgc2hvdyBjb2xsYXBzZWQgY29udGVudCAqL1xyXG4gIHNob3coKTogdm9pZCB7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnZGlzcGxheScsIHRoaXMuX2Rpc3BsYXkpO1xyXG5cclxuICAgIHRoaXMuaXNDb2xsYXBzaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuaXNFeHBhbmRlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmlzQ29sbGFwc2luZyA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMuZXhwYW5kcy5lbWl0KHRoaXMpO1xyXG5cclxuICAgIHRoaXMuX2lzQW5pbWF0aW9uRG9uZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5hbmltYXRpb25SdW4odGhpcy5pc0FuaW1hdGVkLCB0aGlzLl9FWFBBTkRfQUNUSU9OX05BTUUpKCgpID0+IHtcclxuICAgICAgdGhpcy5faXNBbmltYXRpb25Eb25lID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuY29sbGFwc2VOZXdWYWx1ZSAhPT0gdGhpcy5pc0NvbGxhcHNlZCAmJiB0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgICB0aGlzLmhpZGUoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZXhwYW5kZWQuZW1pdCh0aGlzKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlU3R5bGUodGhpcy5fZWwubmF0aXZlRWxlbWVudCwgJ292ZXJmbG93Jyk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGFuaW1hdGlvblJ1bihpc0FuaW1hdGVkOiBib29sZWFuLCBhY3Rpb246IHN0cmluZykge1xyXG4gICAgaWYgKCFpc0FuaW1hdGVkIHx8ICF0aGlzLl9zdHlsZXNMb2FkZWQpIHtcclxuICAgICAgcmV0dXJuIChjYWxsYmFjazogKCkgPT4gdm9pZCkgPT4gY2FsbGJhY2soKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnb3ZlcmZsb3cnLCAnaGlkZGVuJyk7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5hZGRDbGFzcyh0aGlzLl9lbC5uYXRpdmVFbGVtZW50LCAnY29sbGFwc2UnKTtcclxuXHJcbiAgICBjb25zdCBmYWN0b3J5QW5pbWF0aW9uID0gKGFjdGlvbiA9PT0gdGhpcy5fRVhQQU5EX0FDVElPTl9OQU1FKVxyXG4gICAgICA/IHRoaXMuX2ZhY3RvcnlFeHBhbmRBbmltYXRpb25cclxuICAgICAgOiB0aGlzLl9mYWN0b3J5Q29sbGFwc2VBbmltYXRpb247XHJcblxyXG4gICAgaWYgKHRoaXMuX3BsYXllcikge1xyXG4gICAgICB0aGlzLl9wbGF5ZXIuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BsYXllciA9IGZhY3RvcnlBbmltYXRpb24uY3JlYXRlKHRoaXMuX2VsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgdGhpcy5fcGxheWVyLnBsYXkoKTtcclxuXHJcbiAgICByZXR1cm4gKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB0aGlzLl9wbGF5ZXI/Lm9uRG9uZShjYWxsYmFjayk7XHJcbiAgfVxyXG59XHJcbiJdfQ==