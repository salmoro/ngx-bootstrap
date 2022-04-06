import { ChangeDetectorRef, ContentChildren, Directive, forwardRef, HostBinding, HostListener, QueryList } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { ButtonRadioDirective } from './button-radio.directive';
import * as i0 from "@angular/core";
export const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioGroupDirective),
    multi: true
};
/**
 * A group of radio buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
export class ButtonRadioGroupDirective {
    constructor(cdr) {
        this.cdr = cdr;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.role = 'radiogroup';
        this._disabled = false;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.onChange(value);
    }
    get disabled() {
        return this._disabled;
    }
    get tabindex() {
        if (this._disabled) {
            return null;
        }
        else {
            return 0;
        }
    }
    writeValue(value) {
        this._value = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        if (this.radioButtons) {
            this._disabled = disabled;
            this.radioButtons.forEach(buttons => {
                buttons.setDisabledState(disabled);
            });
            this.cdr.markForCheck();
        }
    }
    onFocus() {
        if (this._disabled) {
            return;
        }
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio) {
            activeRadio.focus();
            return;
        }
        if (this.radioButtons) {
            const firstEnabled = this.radioButtons.find(r => !r.disabled);
            if (firstEnabled) {
                firstEnabled.focus();
            }
        }
    }
    onBlur() {
        if (this.onTouched) {
            this.onTouched();
        }
    }
    selectNext(event) {
        this.selectInDirection('next');
        event.preventDefault();
    }
    selectPrevious(event) {
        this.selectInDirection('previous');
        event.preventDefault();
    }
    selectInDirection(direction) {
        if (this._disabled) {
            return;
        }
        function nextIndex(currentIndex, buttonRadioDirectives) {
            const step = direction === 'next' ? 1 : -1;
            let calcIndex = (currentIndex + step) % buttonRadioDirectives.length;
            if (calcIndex < 0) {
                calcIndex = buttonRadioDirectives.length - 1;
            }
            return calcIndex;
        }
        const activeRadio = this.getActiveOrFocusedRadio();
        if (activeRadio && this.radioButtons) {
            const buttonRadioDirectives = this.radioButtons.toArray();
            const currentActiveIndex = buttonRadioDirectives.indexOf(activeRadio);
            for (let i = nextIndex(currentActiveIndex, buttonRadioDirectives); i !== currentActiveIndex; i = nextIndex(i, buttonRadioDirectives)) {
                if (buttonRadioDirectives[i].canToggle()) {
                    buttonRadioDirectives[i].toggleIfAllowed();
                    buttonRadioDirectives[i].focus();
                    break;
                }
            }
        }
    }
    getActiveOrFocusedRadio() {
        if (!this.radioButtons) {
            return void 0;
        }
        return this.radioButtons.find(button => button.isActive)
            || this.radioButtons.find(button => button.hasFocus);
    }
}
ButtonRadioGroupDirective.ɵfac = function ButtonRadioGroupDirective_Factory(t) { return new (t || ButtonRadioGroupDirective)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
ButtonRadioGroupDirective.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: ButtonRadioGroupDirective, selectors: [["", "btnRadioGroup", ""]], contentQueries: function ButtonRadioGroupDirective_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, ButtonRadioDirective, 4);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.radioButtons = _t);
    } }, hostVars: 2, hostBindings: function ButtonRadioGroupDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function ButtonRadioGroupDirective_focus_HostBindingHandler() { return ctx.onFocus(); })("blur", function ButtonRadioGroupDirective_blur_HostBindingHandler() { return ctx.onBlur(); })("keydown.ArrowRight", function ButtonRadioGroupDirective_keydown_ArrowRight_HostBindingHandler($event) { return ctx.selectNext($event); })("keydown.ArrowDown", function ButtonRadioGroupDirective_keydown_ArrowDown_HostBindingHandler($event) { return ctx.selectNext($event); })("keydown.ArrowLeft", function ButtonRadioGroupDirective_keydown_ArrowLeft_HostBindingHandler($event) { return ctx.selectPrevious($event); })("keydown.ArrowUp", function ButtonRadioGroupDirective_keydown_ArrowUp_HostBindingHandler($event) { return ctx.selectPrevious($event); });
    } if (rf & 2) {
        i0.ɵɵattribute("role", ctx.role)("tabindex", ctx.tabindex);
    } }, features: [i0.ɵɵProvidersFeature([RADIO_CONTROL_VALUE_ACCESSOR])] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ButtonRadioGroupDirective, [{
        type: Directive,
        args: [{
                selector: '[btnRadioGroup]',
                providers: [RADIO_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }]; }, { role: [{
            type: HostBinding,
            args: ['attr.role']
        }], radioButtons: [{
            type: ContentChildren,
            args: [forwardRef(() => ButtonRadioDirective)]
        }], tabindex: [{
            type: HostBinding,
            args: ['attr.tabindex']
        }], onFocus: [{
            type: HostListener,
            args: ['focus']
        }], onBlur: [{
            type: HostListener,
            args: ['blur']
        }], selectNext: [{
            type: HostListener,
            args: ['keydown.ArrowRight', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.ArrowDown', ['$event']]
        }], selectPrevious: [{
            type: HostListener,
            args: ['keydown.ArrowLeft', ['$event']]
        }, {
            type: HostListener,
            args: ['keydown.ArrowUp', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9uLXJhZGlvLWdyb3VwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9idXR0b25zL2J1dHRvbi1yYWRpby1ncm91cC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLGlCQUFpQixFQUNqQixlQUFlLEVBQ2YsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsWUFBWSxFQUVaLFNBQVMsRUFDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7O0FBRWhFLE1BQU0sQ0FBQyxNQUFNLDRCQUE0QixHQUFhO0lBQ3BELE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBeUIsQ0FBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFFRjs7O0dBR0c7QUFLSCxNQUFNLE9BQU8seUJBQXlCO0lBU3BDLFlBQW9CLEdBQXNCO1FBQXRCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBUjFDLGFBQVEsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBQzlCLGNBQVMsR0FBRyxRQUFRLENBQUMsU0FBUyxDQUFDO1FBRUksU0FBSSxHQUFXLFlBQVksQ0FBQztRQW1CdkQsY0FBUyxHQUFHLEtBQUssQ0FBQztJQWIxQixDQUFDO0lBSUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxJQUFJLEtBQUssQ0FBQyxLQUF5QjtRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZCLENBQUM7SUFJRCxJQUFJLFFBQVE7UUFD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O2dCQUMzQixTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQzthQUMxQztvRUFLb0MsSUFBSTtrQkFBdEMsV0FBVzttQkFBQyxXQUFXO1lBR3hCLFlBQVk7a0JBRFgsZUFBZTttQkFBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQW9CLENBQUM7WUF3Qm5ELFFBQVE7a0JBRFgsV0FBVzttQkFBQyxlQUFlO1lBaUM1QixPQUFPO2tCQUROLFlBQVk7bUJBQUMsT0FBTztZQW9CckIsTUFBTTtrQkFETCxZQUFZO21CQUFDLE1BQU07WUFTcEIsVUFBVTtrQkFGVCxZQUFZO21CQUFDLG9CQUFvQixFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDN0MsWUFBWTttQkFBQyxtQkFBbUIsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVE3QyxjQUFjO2tCQUZiLFlBQVk7bUJBQUMsbUJBQW1CLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tCQUM1QyxZQUFZO21CQUFDLGlCQUFpQixFQUFFLENBQUMsUUFBUSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRGlyZWN0aXZlLFxyXG4gIGZvcndhcmRSZWYsXHJcbiAgSG9zdEJpbmRpbmcsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIFByb3ZpZGVyLFxyXG4gIFF1ZXJ5TGlzdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEJ1dHRvblJhZGlvRGlyZWN0aXZlIH0gZnJvbSAnLi9idXR0b24tcmFkaW8uZGlyZWN0aXZlJztcclxuXHJcbmV4cG9ydCBjb25zdCBSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SOiBQcm92aWRlciA9IHtcclxuICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBCdXR0b25SYWRpb0dyb3VwRGlyZWN0aXZlKSxcclxuICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIEEgZ3JvdXAgb2YgcmFkaW8gYnV0dG9ucy5cclxuICogQSB2YWx1ZSBvZiBhIHNlbGVjdGVkIGJ1dHRvbiBpcyBib3VuZCB0byBhIHZhcmlhYmxlIHNwZWNpZmllZCB2aWEgbmdNb2RlbC5cclxuICovXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2J0blJhZGlvR3JvdXBdJyxcclxuICBwcm92aWRlcnM6IFtSQURJT19DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQnV0dG9uUmFkaW9Hcm91cERpcmVjdGl2ZSBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcclxuICBvbkNoYW5nZSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICBvblRvdWNoZWQgPSBGdW5jdGlvbi5wcm90b3R5cGU7XHJcblxyXG4gIEBIb3N0QmluZGluZygnYXR0ci5yb2xlJykgcmVhZG9ubHkgcm9sZTogc3RyaW5nID0gJ3JhZGlvZ3JvdXAnO1xyXG5cclxuICBAQ29udGVudENoaWxkcmVuKGZvcndhcmRSZWYoKCkgPT4gQnV0dG9uUmFkaW9EaXJlY3RpdmUpKVxyXG4gIHJhZGlvQnV0dG9ucz86IFF1ZXJ5TGlzdDxCdXR0b25SYWRpb0RpcmVjdGl2ZT47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikge1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdmFsdWU/OiBzdHJpbmc7XHJcblxyXG4gIGdldCB2YWx1ZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl92YWx1ZTtcclxuICB9XHJcblxyXG4gIHNldCB2YWx1ZSh2YWx1ZTogc3RyaW5nIHwgdW5kZWZpbmVkKSB7XHJcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5vbkNoYW5nZSh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBASG9zdEJpbmRpbmcoJ2F0dHIudGFiaW5kZXgnKVxyXG4gIGdldCB0YWJpbmRleCgpOiBudWxsIHwgbnVtYmVyIHtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5yYWRpb0J1dHRvbnMpIHtcclxuICAgICAgdGhpcy5fZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuICAgICAgdGhpcy5yYWRpb0J1dHRvbnMuZm9yRWFjaChidXR0b25zID0+IHtcclxuICAgICAgICBidXR0b25zLnNldERpc2FibGVkU3RhdGUoZGlzYWJsZWQpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdmb2N1cycpXHJcbiAgb25Gb2N1cygpIHtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBhY3RpdmVSYWRpbyA9IHRoaXMuZ2V0QWN0aXZlT3JGb2N1c2VkUmFkaW8oKTtcclxuICAgIGlmIChhY3RpdmVSYWRpbykge1xyXG4gICAgICBhY3RpdmVSYWRpby5mb2N1cygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMucmFkaW9CdXR0b25zKSB7XHJcbiAgICAgIGNvbnN0IGZpcnN0RW5hYmxlZCA9IHRoaXMucmFkaW9CdXR0b25zLmZpbmQociA9PiAhci5kaXNhYmxlZCk7XHJcbiAgICAgIGlmIChmaXJzdEVuYWJsZWQpIHtcclxuICAgICAgICBmaXJzdEVuYWJsZWQuZm9jdXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignYmx1cicpXHJcbiAgb25CbHVyKCkge1xyXG4gICAgaWYgKHRoaXMub25Ub3VjaGVkKSB7XHJcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdrZXlkb3duLkFycm93UmlnaHQnLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dEb3duJywgWyckZXZlbnQnXSlcclxuICBzZWxlY3ROZXh0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLnNlbGVjdEluRGlyZWN0aW9uKCduZXh0Jyk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bi5BcnJvd0xlZnQnLCBbJyRldmVudCddKVxyXG4gIEBIb3N0TGlzdGVuZXIoJ2tleWRvd24uQXJyb3dVcCcsIFsnJGV2ZW50J10pXHJcbiAgc2VsZWN0UHJldmlvdXMoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIHRoaXMuc2VsZWN0SW5EaXJlY3Rpb24oJ3ByZXZpb3VzJyk7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RJbkRpcmVjdGlvbihkaXJlY3Rpb246ICduZXh0JyB8ICdwcmV2aW91cycpIHtcclxuICAgIGlmICh0aGlzLl9kaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gbmV4dEluZGV4KGN1cnJlbnRJbmRleDogbnVtYmVyLCBidXR0b25SYWRpb0RpcmVjdGl2ZXM6IEJ1dHRvblJhZGlvRGlyZWN0aXZlW10pIHtcclxuICAgICAgY29uc3Qgc3RlcCA9IGRpcmVjdGlvbiA9PT0gJ25leHQnID8gMSA6IC0xO1xyXG4gICAgICBsZXQgY2FsY0luZGV4ID0gKGN1cnJlbnRJbmRleCArIHN0ZXApICUgYnV0dG9uUmFkaW9EaXJlY3RpdmVzLmxlbmd0aDtcclxuICAgICAgaWYgKGNhbGNJbmRleCA8IDApIHtcclxuICAgICAgICBjYWxjSW5kZXggPSBidXR0b25SYWRpb0RpcmVjdGl2ZXMubGVuZ3RoIC0gMTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGNhbGNJbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBhY3RpdmVSYWRpbyA9IHRoaXMuZ2V0QWN0aXZlT3JGb2N1c2VkUmFkaW8oKTtcclxuXHJcbiAgICBpZiAoYWN0aXZlUmFkaW8gJiYgdGhpcy5yYWRpb0J1dHRvbnMpIHtcclxuICAgICAgY29uc3QgYnV0dG9uUmFkaW9EaXJlY3RpdmVzID0gdGhpcy5yYWRpb0J1dHRvbnMudG9BcnJheSgpO1xyXG4gICAgICBjb25zdCBjdXJyZW50QWN0aXZlSW5kZXggPSBidXR0b25SYWRpb0RpcmVjdGl2ZXMuaW5kZXhPZihhY3RpdmVSYWRpbyk7XHJcbiAgICAgIGZvciAoXHJcbiAgICAgICAgbGV0IGkgPSBuZXh0SW5kZXgoY3VycmVudEFjdGl2ZUluZGV4LCBidXR0b25SYWRpb0RpcmVjdGl2ZXMpO1xyXG4gICAgICAgIGkgIT09IGN1cnJlbnRBY3RpdmVJbmRleDtcclxuICAgICAgICBpID0gbmV4dEluZGV4KGksIGJ1dHRvblJhZGlvRGlyZWN0aXZlcylcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvblJhZGlvRGlyZWN0aXZlc1tpXS5jYW5Ub2dnbGUoKSkge1xyXG4gICAgICAgICAgYnV0dG9uUmFkaW9EaXJlY3RpdmVzW2ldLnRvZ2dsZUlmQWxsb3dlZCgpO1xyXG4gICAgICAgICAgYnV0dG9uUmFkaW9EaXJlY3RpdmVzW2ldLmZvY3VzKCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QWN0aXZlT3JGb2N1c2VkUmFkaW8oKTogQnV0dG9uUmFkaW9EaXJlY3RpdmUgfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKCF0aGlzLnJhZGlvQnV0dG9ucykge1xyXG4gICAgICByZXR1cm4gdm9pZCAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJhZGlvQnV0dG9ucy5maW5kKGJ1dHRvbiA9PiBidXR0b24uaXNBY3RpdmUpXHJcbiAgICAgIHx8IHRoaXMucmFkaW9CdXR0b25zLmZpbmQoYnV0dG9uID0+IGJ1dHRvbi5oYXNGb2N1cyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==