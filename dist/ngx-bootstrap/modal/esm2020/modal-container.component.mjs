import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { CLASS_NAME, DISMISS_REASONS, ModalOptions, TRANSITION_DURATIONS } from './modal-options.class';
import { isBs3 } from 'ngx-bootstrap/utils';
import * as i0 from "@angular/core";
import * as i1 from "./modal-options.class";
import * as i2 from "ngx-bootstrap/focus-trap";
const _c0 = ["*"];
export class ModalContainerComponent {
    constructor(options, _element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this.isShown = false;
        this.isAnimated = false;
        this.isModalHiding = false;
        this.clickStartedInContent = false;
        this.config = Object.assign({}, options);
    }
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.addClass(this._element.nativeElement, CLASS_NAME.FADE);
        }
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.isShown = true;
            this._renderer.addClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        }, this.isAnimated ? TRANSITION_DURATIONS.BACKDROP : 0);
        if (document && document.body) {
            if (this.bsModalService && this.bsModalService.getModalsCount() === 1) {
                this.bsModalService.checkScrollbar();
                this.bsModalService.setScrollbar();
            }
            this._renderer.addClass(document.body, CLASS_NAME.OPEN);
            this._renderer.setStyle(document.body, 'overflow-y', 'hidden');
        }
        if (this._element.nativeElement) {
            this._element.nativeElement.focus();
        }
    }
    onClickStarted(event) {
        this.clickStartedInContent = event.target !== this._element.nativeElement;
    }
    onClickStop(event) {
        const clickedInBackdrop = event.target === this._element.nativeElement && !this.clickStartedInContent;
        if (this.config.ignoreBackdropClick ||
            this.config.backdrop === 'static' ||
            !clickedInBackdrop) {
            this.clickStartedInContent = false;
            return;
        }
        this.bsModalService?.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    onPopState() {
        this.bsModalService?.setDismissReason(DISMISS_REASONS.BACK);
        this.hide();
    }
    onEsc(event) {
        if (!this.isShown) {
            return;
        }
        if (event.keyCode === 27 || event.key === 'Escape') {
            event.preventDefault();
        }
        if (this.config.keyboard &&
            this.level === this.bsModalService?.getModalsCount()) {
            this.bsModalService?.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    ngOnDestroy() {
        if (this.isShown) {
            this._hide();
        }
    }
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        if (this.config.closeInterceptor) {
            this.config.closeInterceptor().then(() => this._hide(), () => undefined);
            return;
        }
        this._hide();
    }
    _hide() {
        this.isModalHiding = true;
        this._renderer.removeClass(this._element.nativeElement, isBs3() ? CLASS_NAME.IN : CLASS_NAME.SHOW);
        setTimeout(() => {
            this.isShown = false;
            if (document &&
                document.body &&
                this.bsModalService?.getModalsCount() === 1) {
                this._renderer.removeClass(document.body, CLASS_NAME.OPEN);
                this._renderer.setStyle(document.body, 'overflow-y', '');
            }
            this.bsModalService?.hide(this.config.id);
            this.isModalHiding = false;
        }, this.isAnimated ? TRANSITION_DURATIONS.MODAL : 0);
    }
}
ModalContainerComponent.ɵfac = function ModalContainerComponent_Factory(t) { return new (t || ModalContainerComponent)(i0.ɵɵdirectiveInject(i1.ModalOptions), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2)); };
ModalContainerComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalContainerComponent, selectors: [["modal-container"]], hostAttrs: ["role", "dialog", "tabindex", "-1", 1, "modal"], hostVars: 3, hostBindings: function ModalContainerComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function ModalContainerComponent_mousedown_HostBindingHandler($event) { return ctx.onClickStarted($event); })("click", function ModalContainerComponent_click_HostBindingHandler($event) { return ctx.onClickStop($event); })("popstate", function ModalContainerComponent_popstate_HostBindingHandler() { return ctx.onPopState(); }, false, i0.ɵɵresolveWindow)("keydown.esc", function ModalContainerComponent_keydown_esc_HostBindingHandler($event) { return ctx.onEsc($event); }, false, i0.ɵɵresolveWindow);
    } if (rf & 2) {
        i0.ɵɵattribute("aria-modal", true)("aria-labelledby", ctx.config.ariaLabelledBy)("aria-describedby", ctx.config.ariaDescribedby);
    } }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [["role", "document", "focusTrap", ""], [1, "modal-content"]], template: function ModalContainerComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵclassMap("modal-dialog" + (ctx.config.class ? " " + ctx.config.class : ""));
    } }, directives: [i2.FocusTrapDirective], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalContainerComponent, [{
        type: Component,
        args: [{
                selector: 'modal-container',
                template: `
    <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')"
         role="document"
         focusTrap>
      <div class="modal-content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
                // eslint-disable-next-line @angular-eslint/no-host-metadata-property
                host: {
                    class: 'modal',
                    role: 'dialog',
                    tabindex: '-1',
                    '[attr.aria-modal]': 'true',
                    '[attr.aria-labelledby]': 'config.ariaLabelledBy',
                    '[attr.aria-describedby]': 'config.ariaDescribedby'
                }
            }]
    }], function () { return [{ type: i1.ModalOptions }, { type: i0.ElementRef }, { type: i0.Renderer2 }]; }, { onClickStarted: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onClickStop: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onPopState: [{
            type: HostListener,
            args: ['window:popstate']
        }], onEsc: [{
            type: HostListener,
            args: ['window:keydown.esc', ['$event']]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9tb2RhbC9tb2RhbC1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFHWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUNMLFVBQVUsRUFDVixlQUFlLEVBQ2YsWUFBWSxFQUNaLG9CQUFvQixFQUNyQixNQUFNLHVCQUF1QixDQUFDO0FBRS9CLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7Ozs7QUF1QjVDLE1BQU0sT0FBTyx1QkFBdUI7SUFTbEMsWUFBWSxPQUFxQixFQUNYLFFBQW9CLEVBQ3RCLFNBQW9CO1FBRGxCLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDdEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQVR4QyxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBRWhCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFFWCxrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QiwwQkFBcUIsR0FBRyxLQUFLLENBQUM7UUFLcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQzNCLFVBQVUsQ0FBQyxJQUFJLENBQ2hCLENBQUM7U0FDSDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUNyQixJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFDM0IsU0FBUyxFQUNULE9BQU8sQ0FDUixDQUFDO1FBQ0YsVUFBVSxDQUFDLEdB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TUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzdCLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OzhGQXRJVSx1QkFBdUI7MEVBQXZCLHVCQUF1QjtrSEFBdkIsMEJBQXNCLHlGQUF0Qix1QkFBbUIseUZBQW5CLGdCQUFZLGdJQUFaLGlCQUFhOzs7OztRQWxCdEIsOEJBRWU7UUFDYiw4QkFBMkI7UUFDekIsa0JBQXlCO1FBQzNCLGlCQUFNO1FBQ1IsaUJBQU07O1FBTkQsZ0ZBQW1FOzt1RkFrQi9ELHVCQUF1QjtjQXJCbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFDRCxxRUFBcUU7Z0JBQ3JFLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsT0FBTztvQkFDZCxJQUFJLEVBQUUsUUFBUTtvQkFDZCxRQUFRLEVBQUUsSUFBSTtvQkFDZCxtQkFBbUIsRUFBRSxNQUFNO29CQUMzQix3QkFBd0IsRUFBRSx1QkFBdUI7b0JBQ2pELHlCQUF5QixFQUFFLHdCQUF3QjtpQkFDcEQ7YUFDRjtnSEFpREMsY0FBYztrQkFEYixZQUFZO21CQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQU1yQyxXQUFXO2tCQURWLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBaUJqQyxVQUFVO2tCQURULFlBQVk7bUJBQUMsaUJBQWlCO1lBTy9CLEtBQUs7a0JBREosWUFBWTttQkFBQyxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSG9zdExpc3RlbmVyLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ0xBU1NfTkFNRSxcclxuICBESVNNSVNTX1JFQVNPTlMsXHJcbiAgTW9kYWxPcHRpb25zLFxyXG4gIFRSQU5TSVRJT05fRFVSQVRJT05TXHJcbn0gZnJvbSAnLi9tb2RhbC1vcHRpb25zLmNsYXNzJztcclxuaW1wb3J0IHsgQnNNb2RhbFNlcnZpY2UgfSBmcm9tICcuL2JzLW1vZGFsLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc0JzMyB9IGZyb20gJ25neC1ib290c3RyYXAvdXRpbHMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtb2RhbC1jb250YWluZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtjbGFzc109XCInbW9kYWwtZGlhbG9nJyArIChjb25maWcuY2xhc3MgPyAnICcgKyBjb25maWcuY2xhc3MgOiAnJylcIlxyXG4gICAgICAgICByb2xlPVwiZG9jdW1lbnRcIlxyXG4gICAgICAgICBmb2N1c1RyYXA+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XHJcbiAgICAgICAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIGAsXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEBhbmd1bGFyLWVzbGludC9uby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdtb2RhbCcsXHJcbiAgICByb2xlOiAnZGlhbG9nJyxcclxuICAgIHRhYmluZGV4OiAnLTEnLFxyXG4gICAgJ1thdHRyLmFyaWEtbW9kYWxdJzogJ3RydWUnLFxyXG4gICAgJ1thdHRyLmFyaWEtbGFiZWxsZWRieV0nOiAnY29uZmlnLmFyaWFMYWJlbGxlZEJ5JyxcclxuICAgICdbYXR0ci5hcmlhLWRlc2NyaWJlZGJ5XSc6ICdjb25maWcuYXJpYURlc2NyaWJlZGJ5J1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsQ29udGFpbmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gIGNvbmZpZzogTW9kYWxPcHRpb25zO1xyXG4gIGlzU2hvd24gPSBmYWxzZTtcclxuICBsZXZlbD86IG51bWJlcjtcclxuICBpc0FuaW1hdGVkID0gZmFsc2U7XHJcbiAgYnNNb2RhbFNlcnZpY2U/OiBCc01vZGFsU2VydmljZTtcclxuICBwcml2YXRlIGlzTW9kYWxIaWRpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIGNsaWNrU3RhcnRlZEluQ29udGVudCA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBNb2RhbE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgcHJvdGVjdGVkIF9lbGVtZW50OiBFbGVtZW50UmVmLFxyXG4gICAgICAgICAgICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQW5pbWF0ZWQpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuYWRkQ2xhc3MoXHJcbiAgICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICAgIENMQVNTX05BTUUuRkFERVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUoXHJcbiAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgJ2Rpc3BsYXknLFxyXG4gICAgICAnYmxvY2snXHJcbiAgICApO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuaXNTaG93biA9IHRydWU7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKFxyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCxcclxuICAgICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xyXG4gICAgICApO1xyXG4gICAgfSwgdGhpcy5pc0FuaW1hdGVkID8gVFJBTlNJVElPTl9EVVJBVElPTlMuQkFDS0RST1AgOiAwKTtcclxuICAgIGlmIChkb2N1bWVudCAmJiBkb2N1bWVudC5ib2R5KSB7XHJcbiAgICAgIGlmICh0aGlzLmJzTW9kYWxTZXJ2aWNlICYmIHRoaXMuYnNNb2RhbFNlcnZpY2UuZ2V0TW9kYWxzQ291bnQoKSA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2UuY2hlY2tTY3JvbGxiYXIoKTtcclxuICAgICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlLnNldFNjcm9sbGJhcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksIENMQVNTX05BTUUuT1BFTik7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKGRvY3VtZW50LmJvZHksICdvdmVyZmxvdy15JywgJ2hpZGRlbicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCkge1xyXG4gICAgICB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ21vdXNlZG93bicsIFsnJGV2ZW50J10pXHJcbiAgb25DbGlja1N0YXJ0ZWQoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tTdGFydGVkSW5Db250ZW50ID0gZXZlbnQudGFyZ2V0ICE9PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgb25DbGlja1N0b3AoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNsaWNrZWRJbkJhY2tkcm9wID0gZXZlbnQudGFyZ2V0ID09PSB0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQgJiYgIXRoaXMuY2xpY2tTdGFydGVkSW5Db250ZW50O1xyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNvbmZpZy5pZ25vcmVCYWNrZHJvcENsaWNrIHx8XHJcbiAgICAgIHRoaXMuY29uZmlnLmJhY2tkcm9wID09PSAnc3RhdGljJyB8fFxyXG4gICAgICAhY2xpY2tlZEluQmFja2Ryb3BcclxuICAgICkge1xyXG4gICAgICB0aGlzLmNsaWNrU3RhcnRlZEluQ29udGVudCA9IGZhbHNlO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5ic01vZGFsU2VydmljZT8uc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuQkFDS1JET1ApO1xyXG4gICAgdGhpcy5oaWRlKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCd3aW5kb3c6cG9wc3RhdGUnKVxyXG4gIG9uUG9wU3RhdGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlPy5zZXREaXNtaXNzUmVhc29uKERJU01JU1NfUkVBU09OUy5CQUNLKTtcclxuICAgIHRoaXMuaGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OmtleWRvd24uZXNjJywgWyckZXZlbnQnXSlcclxuICBvbkVzYyhldmVudDogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmlzU2hvd24pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAyNyB8fCBldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICB0aGlzLmNvbmZpZy5rZXlib2FyZCAmJlxyXG4gICAgICB0aGlzLmxldmVsID09PSB0aGlzLmJzTW9kYWxTZXJ2aWNlPy5nZXRNb2RhbHNDb3VudCgpXHJcbiAgICApIHtcclxuICAgICAgdGhpcy5ic01vZGFsU2VydmljZT8uc2V0RGlzbWlzc1JlYXNvbihESVNNSVNTX1JFQVNPTlMuRVNDKTtcclxuICAgICAgdGhpcy5oaWRlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcclxuICAgICAgdGhpcy5faGlkZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaGlkZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzTW9kYWxIaWRpbmcgfHwgIXRoaXMuaXNTaG93bikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmNsb3NlSW50ZXJjZXB0b3IpIHtcclxuICAgICAgdGhpcy5jb25maWcuY2xvc2VJbnRlcmNlcHRvcigpLnRoZW4oXHJcbiAgICAgICAgKCkgPT4gdGhpcy5faGlkZSgpLFxyXG4gICAgICAgICgpID0+IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5faGlkZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfaGlkZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuaXNNb2RhbEhpZGluZyA9IHRydWU7XHJcbiAgICB0aGlzLl9yZW5kZXJlci5yZW1vdmVDbGFzcyhcclxuICAgICAgdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LFxyXG4gICAgICBpc0JzMygpID8gQ0xBU1NfTkFNRS5JTiA6IENMQVNTX05BTUUuU0hPV1xyXG4gICAgKTtcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmlzU2hvd24gPSBmYWxzZTtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIGRvY3VtZW50ICYmXHJcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxyXG4gICAgICAgIHRoaXMuYnNNb2RhbFNlcnZpY2U/LmdldE1vZGFsc0NvdW50KCkgPT09IDFcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgQ0xBU1NfTkFNRS5PUEVOKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZShkb2N1bWVudC5ib2R5LCAnb3ZlcmZsb3cteScsICcnKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJzTW9kYWxTZXJ2aWNlPy5oaWRlKHRoaXMuY29uZmlnLmlkKTtcclxuICAgICAgdGhpcy5pc01vZGFsSGlkaW5nID0gZmFsc2U7XHJcbiAgICB9LCB0aGlzLmlzQW5pbWF0ZWQgPyBUUkFOU0lUSU9OX0RVUkFUSU9OUy5NT0RBTCA6IDApO1xyXG4gIH1cclxufVxyXG4iXX0=