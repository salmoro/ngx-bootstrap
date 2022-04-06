import { ChangeDetectorRef, Directive, ElementRef, forwardRef, HostBinding, HostListener, Inject, Input, Optional, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioGroupDirective } from './button-radio-group.directive';
import * as i0 from "@angular/core";
import * as i1 from "./button-radio-group.directive";
export const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export class ButtonRadioDirective {
    constructor(el, cdr, renderer, group) {
        this.el = el;
        this.cdr = cdr;
        this.renderer = renderer;
        this.group = group;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        /** If `true` — radio button can be unchecked */
        this.uncheckable = false;
        this.role = 'radio';
        this._disabled = false;
        this._hasFocus = false;
    }
    /** Current value of radio component or group */
    get value() {
        return this.group ? this.group.value : this._value;
    }
    set value(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this._value = value;
        this._onChange(value);
    }
    /** If `true` — radio button is disabled */
    get disabled() {
        return this._disabled;
    }
    set disabled(disabled) {
        this.setDisabledState(disabled);
    }
    get controlOrGroupDisabled() {
        return this.disabled || (this.group && this.group.disabled) ? true : undefined;
    }
    get hasDisabledClass() {
        // Although the radio is disabled the active radio should still stand out.
        // The disabled class will prevent this so don't add it on the active radio
        return this.controlOrGroupDisabled && !this.isActive;
    }
    get isActive() {
        return this.btnRadio === this.value;
    }
    get tabindex() {
        if (this.controlOrGroupDisabled) {
            // Disabled radio buttons should not receive focus
            return undefined;
        }
        else if (this.isActive || this.group == null) {
            return 0;
        }
        else {
            return -1;
        }
    }
    get hasFocus() {
        return this._hasFocus;
    }
    toggleIfAllowed() {
        if (!this.canToggle()) {
            return;
        }
        if (this.uncheckable && this.btnRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.btnRadio;
        }
    }
    onSpacePressed(event) {
        this.toggleIfAllowed();
        event.preventDefault();
    }
    focus() {
        this.el.nativeElement.focus();
    }
    onFocus() {
        this._hasFocus = true;
    }
    onBlur() {
        this._hasFocus = false;
        this.onTouched();
    }
    canToggle() {
        return !this.controlOrGroupDisabled && (this.uncheckable || this.btnRadio !== this.value);
    }
    ngOnChanges(changes) {
        if ('uncheckable' in changes) {
            this.uncheckable = this.uncheckable !== false && typeof this.uncheckable !== 'undefined';
        }
    }
    _onChange(value) {
        if (this.group) {
            this.group.value = value;
            return;
        }
        this.onTouched();
        this.onChange(value);
    }
    // ControlValueAccessor
    // model -> view
    writeValue(value) {
        this.value = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this._disabled = disabled;
        if (disabled) {
            this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'disabled');
            return;
        }
        this.renderer.removeAttribute(this.el.nativeElement, 'disabled');
    }
}
ButtonRadioDirective.ɵfac = function ButtonRadioDirective_Factory(t) { return new (t || ButtonRadioDirective)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(forwardRef(() => ButtonRadioGroupDirective), 8)); };
ButtonRadioDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonRadioDirective, selectors: [["", "btnRadio", ""]], hostVars: 8, hostBindings: function ButtonRadioDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function ButtonRadioDirective_click_HostBindingHandler() { return ctx.toggleIfAllowed(); })("keydown.space", function ButtonRadioDirective_keydown_space_HostBindingHandler($event) { return ctx.onSpacePressed($event); })("focus", function ButtonRadioDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ButtonRadioDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } if (rf & 2) {
        i0.ɵɵattribute("aria-disabled", ctx.controlOrGroupDisabled)("aria-checked", ctx.isActive)("role", ctx.role)("tabindex", ctx.tabindex);
        i0.ɵɵclassProp("disabled", ctx.hasDisabledClass)("active", ctx.isActive);
    } }, inputs: { btnRadio: "btnRadio", uncheckable: "uncheckable", value: "value", disabled: "disabled" }, features: [i0.ɵɵProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR]), i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonRadioDirective, [{
        type: Directive,
        args: [{
                selector: '[btnRadio]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.ButtonRadioGroupDirective, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [forwardRef(() => ButtonRadioGroupDirective)]
            }] }]; }, { btnRadio: [{
            type: Input
        }], uncheckable: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], controlOrGroupDisabled: [{
            type: HostBinding,
            args: ['attr.aria-disabled']
        }], hasDisabledClass: [{
            type: HostBinding,
            args: ['class.disabled']
        }], isActive: [{
            type: HostBinding,
            args: ['class.active']
        }, {
            type: HostBinding,
            args: ['attr.aria-checked']
        }], role: [{
            type: HostBinding,
            args: ['attr.role']
        }], tabindex: [{
            type: HostBinding,
            args: ['attr.tabindex']
        }], toggleIfAllowed: [{
            type: HostListener,
            args: ['click']
        }], onSpacePressed: [{
            type: HostListener,
            args: ['keydown.space', ['$event']]
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhZGlvLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idXR0b25zL2J1dHRvbi1yYWRpby5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUNaLE1BQU0sRUFDTixLQUFLLEVBRUwsUUFBUSxFQUVSLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7OztBQUUzRSxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBYTtJQUNwRCxPQUFPLEVBQUUsaUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7SUFDbkQsS0FBSyxFQUFFLElBQUk7Q0FDWixDQUFDO0FBRUY7OztHQUdHO0FBS0gsTUFBTSxPQUFPLG9CQUFvQjtJQXlFL0IsWUFDVSxFQUFjLEVBQ2QsR0FBc0IsRUFDdEIsUUFBbUIsRUFHbkIsS0FBZ0M7UUFMaEMsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUNkLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFHbkIsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUE5RTFDLGFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBSS9CLGdEQUFnRDtRQUN2QyxnQkFBVyxHQUFHLEtBQUssQ0FBQztRQTRDTSxTQUFJLEdBQVcsT0FBTyxDQUFDO1FBbUJsRCxjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLGNBQVMsR0FBRyxLQUFLLENBQUM7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Q25FLENBQUM7O3dGQS9KVSxvQkFBb0IsNElBOEVyQixVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMseUJBQXlCLENBQUM7dUVBOUUxQyxvQkFBb0I7aUdBQXBCLHFCQUFpQixzR0FBakIsMEJBQXNCLGdGQUF0QixhQUFTLDhFQUFULFlBQVE7Ozs7OElBRlIsQ0FBQyw0QkFBNEIsQ0FBQzt1RkFFOUIsb0JBQW9CO2NBSmhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7YUFDMUM7O3NCQThFSSxRQUFROztzQkFDUixNQUFNO3VCQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQzt3QkF6RTVDLFFBQVE7a0JBQWhCLEtBQUs7WUFFRyxXQUFXO2tCQUFuQixLQUFLO1lBR0YsS0FBSztrQkFEUixLQUFLO1lBZ0JGLFFBQVE7a0JBRFgsS0FBSztZQVVGLHNCQUFzQjtrQkFEekIsV0FBVzttQkFBQyxvQkFBb0I7WUFNN0IsZ0JBQWdCO2tCQURuQixXQUFXO21CQUFDLGdCQUFnQjtZQVN6QixRQUFRO2tCQUZYLFdBQVc7bUJBQUMsY0FBYzs7a0JBQzFCLFdBQVc7bUJBQUMsbUJBQW1CO1lBS0csSUFBSTtrQkFBdEMsV0FBVzttQkFBQyxXQUFXO1lBR3BCLFFBQVE7a0JBRFgsV0FBVzttQkFBQyxlQUFlO1lBOEI1QixlQUFlO2tCQURkLFlBQVk7bUJBQUMsT0FBTztZQWNyQixjQUFjO2tCQURiLFlBQVk7bUJBQUMsZUFBZSxFQUFFLENBQUMsUUFBUSxDQUFDO1lBV3pDLE9BQU87a0JBRE4sWUFBWTttQkFBQyxPQUFPO1lBTXJCLE1BQU07a0JBREwsWUFBWTttQkFBQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBmb3J3YXJkUmVmLFxyXG4gIEhvc3RCaW5kaW5nLFxyXG4gIEhvc3RMaXN0ZW5lcixcclxuICBJbmplY3QsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9wdGlvbmFsLFxyXG4gIFByb3ZpZGVyLFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSB9IGZyb20gJy4vYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZSc7XHJcblxyXG5leHBvcnQgY29uc3QgUkFESU9fQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUjogUHJvdmlkZXIgPSB7XHJcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpLFxyXG4gIG11bHRpOiB0cnVlXHJcbn07XHJcblxyXG4vKipcclxuICogQ3JlYXRlIHJhZGlvIGJ1dHRvbnMgb3IgZ3JvdXBzIG9mIGJ1dHRvbnMuXHJcbiAqIEEgdmFsdWUgb2YgYSBzZWxlY3RlZCBidXR0b24gaXMgYm91bmQgdG8gYSB2YXJpYWJsZSBzcGVjaWZpZWQgdmlhIG5nTW9kZWwuXHJcbiAqL1xyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tidG5SYWRpb10nLFxyXG4gIHByb3ZpZGVyczogW1JBRElPX0NPTlRST0xfVkFMVUVfQUNDRVNTT1JdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCdXR0b25SYWRpb0RpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkNoYW5nZXMge1xyXG4gIG9uQ2hhbmdlID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG4gIG9uVG91Y2hlZCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuXHJcbiAgLyoqIFJhZGlvIGJ1dHRvbiB2YWx1ZSwgd2lsbCBiZSBzZXQgdG8gYG5nTW9kZWxgICovXHJcbiAgQElucHV0KCkgYnRuUmFkaW8/OiBzdHJpbmc7XHJcbiAgLyoqIElmIGB0cnVlYCDigJQgcmFkaW8gYnV0dG9uIGNhbiBiZSB1bmNoZWNrZWQgKi9cclxuICBASW5wdXQoKSB1bmNoZWNrYWJsZSA9IGZhbHNlO1xyXG4gIC8qKiBDdXJyZW50IHZhbHVlIG9mIHJhZGlvIGNvbXBvbmVudCBvciBncm91cCAqL1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IHZhbHVlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZ3JvdXAgPyB0aGlzLmdyb3VwLnZhbHVlIDogdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBzZXQgdmFsdWUodmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCkge1xyXG4gICAgaWYgKHRoaXMuZ3JvdXApIHtcclxuICAgICAgdGhpcy5ncm91cC52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuX29uQ2hhbmdlKHZhbHVlKTtcclxuICB9XHJcbiAgLyoqIElmIGB0cnVlYCDigJQgcmFkaW8gYnV0dG9uIGlzIGRpc2FibGVkICovXHJcbiAgQElucHV0KClcclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXQgZGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZCk7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1kaXNhYmxlZCcpXHJcbiAgZ2V0IGNvbnRyb2xPckdyb3VwRGlzYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAodGhpcy5ncm91cCAmJiB0aGlzLmdyb3VwLmRpc2FibGVkKSA/IHRydWUgOiB1bmRlZmluZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmRpc2FibGVkJylcclxuICBnZXQgaGFzRGlzYWJsZWRDbGFzcygpIHtcclxuICAgIC8vIEFsdGhvdWdoIHRoZSByYWRpbyBpcyBkaXNhYmxlZCB0aGUgYWN0aXZlIHJhZGlvIHNob3VsZCBzdGlsbCBzdGFuZCBvdXQuXHJcbiAgICAvLyBUaGUgZGlzYWJsZWQgY2xhc3Mgd2lsbCBwcmV2ZW50IHRoaXMgc28gZG9uJ3QgYWRkIGl0IG9uIHRoZSBhY3RpdmUgcmFkaW9cclxuICAgIHJldHVybiB0aGlzLmNvbnRyb2xPckdyb3VwRGlzYWJsZWQgJiYgIXRoaXMuaXNBY3RpdmU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmFjdGl2ZScpXHJcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtY2hlY2tlZCcpXHJcbiAgZ2V0IGlzQWN0aXZlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuYnRuUmFkaW8gPT09IHRoaXMudmFsdWU7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpIHJlYWRvbmx5IHJvbGU6IHN0cmluZyA9ICdyYWRpbyc7XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXHJcbiAgZ2V0IHRhYmluZGV4KCk6IHVuZGVmaW5lZCB8IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jb250cm9sT3JHcm91cERpc2FibGVkKSB7XHJcbiAgICAgIC8vIERpc2FibGVkIHJhZGlvIGJ1dHRvbnMgc2hvdWxkIG5vdCByZWNlaXZlIGZvY3VzXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNBY3RpdmUgfHwgdGhpcy5ncm91cCA9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGhhc0ZvY3VzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2hhc0ZvY3VzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBfZGlzYWJsZWQgPSBmYWxzZTtcclxuICBwcml2YXRlIF9oYXNGb2N1cyA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBAT3B0aW9uYWwoKVxyXG4gICAgQEluamVjdChmb3J3YXJkUmVmKCgpID0+IEJ1dHRvblJhZGlvR3JvdXBEaXJlY3RpdmUpKVxyXG4gICAgcHJpdmF0ZSBncm91cDogQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZVxyXG4gICkge31cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKVxyXG4gIHRvZ2dsZUlmQWxsb3dlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5jYW5Ub2dnbGUoKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudW5jaGVja2FibGUgJiYgdGhpcy5idG5SYWRpbyA9PT0gdGhpcy52YWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMuYnRuUmFkaW87XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLnNwYWNlJywgWyckZXZlbnQnXSlcclxuICBvblNwYWNlUHJlc3NlZChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgdGhpcy50b2dnbGVJZkFsbG93ZWQoKTtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgfVxyXG5cclxuICBmb2N1cygpIHtcclxuICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZm9jdXMnKVxyXG4gIG9uRm9jdXMoKSB7XHJcbiAgICB0aGlzLl9oYXNGb2N1cyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICBvbkJsdXIoKSB7XHJcbiAgICB0aGlzLl9oYXNGb2N1cyA9IGZhbHNlO1xyXG4gICAgdGhpcy5vblRvdWNoZWQoKTtcclxuICB9XHJcblxyXG4gIGNhblRvZ2dsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAhdGhpcy5jb250cm9sT3JHcm91cERpc2FibGVkICYmICh0aGlzLnVuY2hlY2thYmxlIHx8IHRoaXMuYnRuUmFkaW8gIT09IHRoaXMudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKCd1bmNoZWNrYWJsZScgaW4gY2hhbmdlcykge1xyXG4gICAgICB0aGlzLnVuY2hlY2thYmxlID0gdGhpcy51bmNoZWNrYWJsZSAhPT0gZmFsc2UgJiYgdHlwZW9mIHRoaXMudW5jaGVja2FibGUgIT09ICd1bmRlZmluZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgX29uQ2hhbmdlKHZhbHVlPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5ncm91cCkge1xyXG4gICAgICB0aGlzLmdyb3VwLnZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvclxyXG4gIC8vIG1vZGVsIC0+IHZpZXdcclxuICB3cml0ZVZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLl9kaXNhYmxlZCA9IGRpc2FibGVkO1xyXG4gICAgaWYgKGRpc2FibGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdkaXNhYmxlZCcpO1xyXG4gIH1cclxufVxyXG4iXX0=