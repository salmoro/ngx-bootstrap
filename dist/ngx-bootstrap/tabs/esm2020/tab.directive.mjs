import { Directive, EventEmitter, HostBinding, Input, Output, ElementRef, Renderer2 } from '@angular/core';
import { TabsetComponent } from './tabset.component';
import * as i0 from "@angular/core";
import * as i1 from "./tabset.component";
export class TabDirective {
    constructor(tabset, elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** if true tab can not be activated */
        this.disabled = false;
        /** if true tab can be removable, additional button will appear */
        this.removable = false;
        /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
        this.selectTab = new EventEmitter();
        /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
        this.deselect = new EventEmitter();
        /** fired before tab will be removed, $event:Tab equals to instance of removed tab */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.role = 'tabpanel';
        this._active = false;
        this._customClass = '';
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /** if set, will be added to the tab's class attribute. Multiple classes are supported. */
    get customClass() {
        return this._customClass;
    }
    set customClass(customClass) {
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.removeClass(this.elementRef.nativeElement, cssClass);
            });
        }
        this._customClass = customClass ? customClass.trim() : '';
        if (this.customClass) {
            this.customClass.split(' ').forEach((cssClass) => {
                this.renderer.addClass(this.elementRef.nativeElement, cssClass);
            });
        }
    }
    /** tab active state toggle */
    get active() {
        return this._active;
    }
    set active(active) {
        if (this._active === active) {
            return;
        }
        if ((this.disabled && active) || !active) {
            if (this._active && !active) {
                this.deselect.emit(this);
                this._active = active;
            }
            return;
        }
        this._active = active;
        this.selectTab.emit(this);
        this.tabset.tabs.forEach((tab) => {
            if (tab !== this) {
                tab.active = false;
            }
        });
    }
    get ariaLabelledby() {
        return this.id ? `${this.id}-link` : '';
    }
    ngOnInit() {
        this.removable = !!this.removable;
    }
    ngOnDestroy() {
        this.tabset.removeTab(this, { reselect: false, emit: false });
    }
}
TabDirective.ɵfac = function TabDirective_Factory(t) { return new (t || TabDirective)(i0.ɵɵdirectiveInject(i1.TabsetComponent), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
TabDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: TabDirective, selectors: [["tab"], ["", "tab", ""]], hostVars: 7, hostBindings: function TabDirective_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("id", ctx.id)("role", ctx.role)("aria-labelledby", ctx.ariaLabelledby);
        i0.ɵɵclassProp("active", ctx.active)("tab-pane", ctx.addClass);
    } }, inputs: { heading: "heading", id: "id", disabled: "disabled", removable: "removable", customClass: "customClass", active: "active" }, outputs: { selectTab: "selectTab", deselect: "deselect", removed: "removed" }, exportAs: ["tab"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TabDirective, [{
        type: Directive,
        args: [{ selector: 'tab, [tab]', exportAs: 'tab' }]
    }], function () { return [{ type: i1.TabsetComponent }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { heading: [{
            type: Input
        }], id: [{
            type: HostBinding,
            args: ['attr.id']
        }, {
            type: Input
        }], disabled: [{
            type: Input
        }], removable: [{
            type: Input
        }], customClass: [{
            type: Input
        }], active: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: Input
        }], selectTab: [{
            type: Output
        }], deselect: [{
            type: Output
        }], removed: [{
            type: Output
        }], addClass: [{
            type: HostBinding,
            args: ['class.tab-pane']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], ariaLabelledby: [{
            type: HostBinding,
            args: ['attr.aria-labelledby']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy90YWJzL3RhYi5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFDTCxNQUFNLEVBSU4sVUFBVSxFQUNWLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7OztBQUdyRCxNQUFNLE9BQU8sWUFBWTtJQWdGdkIsWUFDRSxNQUF1QixFQUNoQixVQUFzQixFQUN0QixRQUFtQjtRQURuQixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUE3RTVCLHVDQUF1QztRQUM5QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGtFQUFrRTtRQUN6RCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBb0QzQiw0RkFBNEY7UUFDbEYsY0FBUyxHQUErQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3JFLGdHQUFnRztRQUN0RixhQUFRLEdBQStCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEUscUZBQXFGO1FBQzNFLFlBQU8sR0FBK0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVwQyxhQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLFNBQUksR0FBRyxVQUFVLENBQUM7UUFRbEMsWUFBTyxHQUFJLEtBQUssQ0FBQztRQUNqQixpQkFBWSxHQUFHLEVBQUUsQ0FBQztRQU8xQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBN0VELDBGQUEwRjtJQUMxRixJQUNJLFdBQVc7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELElB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bEIsTUFBTTtZQUVHLFFBQVE7a0JBQWpCLE1BQU07WUFFRyxPQUFPO2tCQUFoQixNQUFNO1lBRXdCLFFBQVE7a0JBQXRDLFdBQVc7bUJBQUMsZ0JBQWdCO1lBQ0gsSUFBSTtrQkFBN0IsV0FBVzttQkFBQyxXQUFXO1lBQ2lCLGNBQWM7a0JBQXRELFdBQVc7bUJBQUMsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBEaXJlY3RpdmUsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBUZW1wbGF0ZVJlZixcclxuICBPbkluaXQsXHJcbiAgT25EZXN0cm95LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhYnNldENvbXBvbmVudCB9IGZyb20gJy4vdGFic2V0LmNvbXBvbmVudCc7XHJcblxyXG5ARGlyZWN0aXZlKHsgc2VsZWN0b3I6ICd0YWIsIFt0YWJdJywgZXhwb3J0QXM6ICd0YWInIH0pXHJcbmV4cG9ydCBjbGFzcyBUYWJEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcbiAgLyoqIHRhYiBoZWFkZXIgdGV4dCAqL1xyXG4gIEBJbnB1dCgpIGhlYWRpbmc/OiBzdHJpbmc7XHJcbiAgLyoqIHRhYiBpZC4gVGhlIHNhbWUgaWQgd2l0aCBzdWZmaXggJy1saW5rJyB3aWxsIGJlIGFkZGVkIHRvIHRoZSBjb3JyZXNwb25kaW5nICZsdDtsaSZndDsgZWxlbWVudCAgKi9cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuaWQnKVxyXG4gIEBJbnB1dCgpIGlkPzogc3RyaW5nO1xyXG4gIC8qKiBpZiB0cnVlIHRhYiBjYW4gbm90IGJlIGFjdGl2YXRlZCAqL1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgLyoqIGlmIHRydWUgdGFiIGNhbiBiZSByZW1vdmFibGUsIGFkZGl0aW9uYWwgYnV0dG9uIHdpbGwgYXBwZWFyICovXHJcbiAgQElucHV0KCkgcmVtb3ZhYmxlID0gZmFsc2U7XHJcbiAgLyoqIGlmIHNldCwgd2lsbCBiZSBhZGRlZCB0byB0aGUgdGFiJ3MgY2xhc3MgYXR0cmlidXRlLiBNdWx0aXBsZSBjbGFzc2VzIGFyZSBzdXBwb3J0ZWQuICovXHJcbiAgQElucHV0KClcclxuICBnZXQgY3VzdG9tQ2xhc3MoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXN0b21DbGFzcztcclxuICB9XHJcblxyXG4gIHNldCBjdXN0b21DbGFzcyhjdXN0b21DbGFzczogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICAgIGlmICh0aGlzLmN1c3RvbUNsYXNzKSB7XHJcbiAgICAgICAgdGhpcy5jdXN0b21DbGFzcy5zcGxpdCgnICcpLmZvckVhY2goKGNzc0NsYXNzOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNzc0NsYXNzKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5fY3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzcyA/IGN1c3RvbUNsYXNzLnRyaW0oKSA6ICcnO1xyXG5cclxuICAgICAgaWYgKHRoaXMuY3VzdG9tQ2xhc3MpIHtcclxuICAgICAgICB0aGlzLmN1c3RvbUNsYXNzLnNwbGl0KCcgJykuZm9yRWFjaCgoY3NzQ2xhc3M6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogdGFiIGFjdGl2ZSBzdGF0ZSB0b2dnbGUgKi9cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQElucHV0KClcclxuICBnZXQgYWN0aXZlKCk6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuX2FjdGl2ZTtcclxuICB9XHJcblxyXG4gIHNldCBhY3RpdmUoYWN0aXZlOiBib29sZWFuIHwgdW5kZWZpbmVkKSB7XHJcbiAgICBpZiAodGhpcy5fYWN0aXZlID09PSBhY3RpdmUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKCh0aGlzLmRpc2FibGVkICYmIGFjdGl2ZSkgfHwgIWFjdGl2ZSkge1xyXG4gICAgICBpZiAodGhpcy5fYWN0aXZlICYmICFhY3RpdmUpIHtcclxuICAgICAgICB0aGlzLmRlc2VsZWN0LmVtaXQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fYWN0aXZlID0gYWN0aXZlO1xyXG4gICAgdGhpcy5zZWxlY3RUYWIuZW1pdCh0aGlzKTtcclxuICAgIHRoaXMudGFic2V0LnRhYnMuZm9yRWFjaCgodGFiOiBUYWJEaXJlY3RpdmUpID0+IHtcclxuICAgICAgaWYgKHRhYiAhPT0gdGhpcykge1xyXG4gICAgICAgIHRhYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogZmlyZWQgd2hlbiB0YWIgYmVjYW1lIGFjdGl2ZSwgJGV2ZW50OlRhYiBlcXVhbHMgdG8gc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBzZWxlY3RUYWI6IEV2ZW50RW1pdHRlcjxUYWJEaXJlY3RpdmU+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG4gIC8qKiBmaXJlZCB3aGVuIHRhYiBiZWNhbWUgaW5hY3RpdmUsICRldmVudDpUYWIgZXF1YWxzIHRvIGRlc2VsZWN0ZWQgaW5zdGFuY2Ugb2YgVGFiIGNvbXBvbmVudCAqL1xyXG4gIEBPdXRwdXQoKSBkZXNlbGVjdDogRXZlbnRFbWl0dGVyPFRhYkRpcmVjdGl2ZT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcbiAgLyoqIGZpcmVkIGJlZm9yZSB0YWIgd2lsbCBiZSByZW1vdmVkLCAkZXZlbnQ6VGFiIGVxdWFscyB0byBpbnN0YW5jZSBvZiByZW1vdmVkIHRhYiAqL1xyXG4gIEBPdXRwdXQoKSByZW1vdmVkOiBFdmVudEVtaXR0ZXI8VGFiRGlyZWN0aXZlPiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy50YWItcGFuZScpIGFkZENsYXNzID0gdHJ1ZTtcclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJvbGUgPSAndGFicGFuZWwnO1xyXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKSBnZXQgYXJpYUxhYmVsbGVkYnkoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlkID8gYCR7dGhpcy5pZH0tbGlua2AgOiAnJztcclxuICB9XHJcblxyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgaGVhZGluZ1JlZj86IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgdGFic2V0OiBUYWJzZXRDb21wb25lbnQ7XHJcbiAgcHJvdGVjdGVkIF9hY3RpdmU/ID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIF9jdXN0b21DbGFzcyA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHRhYnNldDogVGFic2V0Q29tcG9uZW50LFxyXG4gICAgcHVibGljIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMlxyXG4gICkge1xyXG4gICAgdGhpcy50YWJzZXQgPSB0YWJzZXQ7XHJcbiAgICB0aGlzLnRhYnNldC5hZGRUYWIodGhpcyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVtb3ZhYmxlID0gISF0aGlzLnJlbW92YWJsZTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy50YWJzZXQucmVtb3ZlVGFiKHRoaXMsIHsgcmVzZWxlY3Q6IGZhbHNlLCBlbWl0OiBmYWxzZSB9KTtcclxuICB9XHJcbn1cclxuIl19