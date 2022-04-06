import * as i0 from '@angular/core';
import { Injectable, EventEmitter, forwardRef, Component, Input, Output, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

class DraggableItemService {
    constructor() {
        this.onCapture = new Subject();
    }
    dragStart(item) {
        this.draggableItem = item;
    }
    getItem() {
        return this.draggableItem;
    }
    captureItem(overZoneIndex, newIndex) {
        if (this.draggableItem && this.draggableItem.overZoneIndex !== overZoneIndex) {
            this.draggableItem.lastZoneIndex = this.draggableItem.overZoneIndex;
            this.draggableItem.overZoneIndex = overZoneIndex;
            this.onCapture.next(this.draggableItem);
            this.draggableItem = Object.assign({}, this.draggableItem, {
                overZoneIndex,
                i: newIndex
            });
        }
        return this.draggableItem;
    }
    onCaptureItem() {
        return this.onCapture;
    }
}
DraggableItemService.ɵfac = function DraggableItemService_Factory(t) { return new (t || DraggableItemService)(); };
DraggableItemService.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DraggableItemService, factory: DraggableItemService.ɵfac, providedIn: 'platform' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DraggableItemService, [{
        type: Injectable,
        args: [{ providedIn: 'platform' }]
    }], null, null); })();

function SortableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵlistener("dragover", function SortableComponent_div_1_Template_div_dragover_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r4 = i0.ɵɵnextContext(); return ctx_r4.onItemDragover($event, 0); })("dragenter", function SortableComponent_div_1_Template_div_dragenter_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.cancelEvent($event); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r0.placeholderClass)("ngStyle", ctx_r0.placeholderStyle);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.placeholderItem);
} }
function SortableComponent_div_2_ng_template_1_Template(rf, ctx) { }
const _c0 = function (a0, a1) { return [a0, a1]; };
const _c1 = function (a0, a1) { return { item: a0, index: a1 }; };
function SortableComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵlistener("dragstart", function SortableComponent_div_2_Template_div_dragstart_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r11); const item_r7 = restoredCtx.$implicit; const i_r8 = restoredCtx.index; const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.onItemDragstart($event, item_r7, i_r8); })("dragend", function SortableComponent_div_2_Template_div_dragend_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.resetActiveItem($event); })("dragover", function SortableComponent_div_2_Template_div_dragover_0_listener($event) { const restoredCtx = i0.ɵɵrestoreView(_r11); const i_r8 = restoredCtx.index; const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onItemDragover($event, i_r8); })("dragenter", function SortableComponent_div_2_Template_div_dragenter_0_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.cancelEvent($event); });
    i0.ɵɵtemplate(1, SortableComponent_div_2_ng_template_1_Template, 0, 0, "ng-template", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    const _r2 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(5, _c0, ctx_r1.itemClass, i_r8 === ctx_r1.activeItem ? ctx_r1.itemActiveClass : ""))("ngStyle", ctx_r1.getItemStyle(i_r8 === ctx_r1.activeItem));
    i0.ɵɵattribute("aria-grabbed", i_r8 === ctx_r1.activeItem);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || _r2)("ngTemplateOutletContext", i0.ɵɵpureFunction2(8, _c1, item_r7, i_r8));
} }
function SortableComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const item_r15 = ctx.item;
    i0.ɵɵtextInterpolate(item_r15.value);
} }
class SortableComponent {
    constructor(transfer) {
        /** class name for items wrapper */
        this.wrapperClass = '';
        /** style object for items wrapper */
        this.wrapperStyle = {};
        /** class name for item */
        this.itemClass = '';
        /** style object for item */
        this.itemStyle = {};
        /** class name for active item */
        this.itemActiveClass = '';
        /** style object for active item */
        this.itemActiveStyle = {};
        /** class name for placeholder */
        this.placeholderClass = '';
        /** style object for placeholder */
        this.placeholderStyle = {};
        /** placeholder item which will be shown if collection is empty */
        this.placeholderItem = '';
        /** fired on array change (reordering, insert, remove), same as <code>ngModelChange</code>.
         *  Returns new items collection as a payload.
         */
        this.onChange = new EventEmitter();
        this.showPlaceholder = false;
        this.activeItem = -1;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onTouched = Function.prototype;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.onChanged = Function.prototype;
        this._items = [];
        this.transfer = transfer;
        this.currentZoneIndex = SortableComponent.globalZoneIndex++;
        this.transfer
            .onCaptureItem()
            .subscribe((item) => this.onDrop(item));
    }
    get items() {
        return this._items;
    }
    set items(value) {
        this._items = value;
        const out = this.items.map((x) => x.initData);
        this.onChanged(out);
        this.onChange.emit(out);
    }
    onItemDragstart(event, item, i) {
        this.initDragstartEvent(event);
        this.onTouched();
        this.transfer.dragStart({
            event,
            item,
            i,
            initialIndex: i,
            lastZoneIndex: this.currentZoneIndex,
            overZoneIndex: this.currentZoneIndex
        });
    }
    onItemDragover(event, i) {
        if (!this.transfer.getItem()) {
            return;
        }
        event.preventDefault();
        const dragItem = this.transfer.captureItem(this.currentZoneIndex, this.items.length);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let newArray = [];
        if (!dragItem) {
            return;
        }
        if (!this.items.length) {
            newArray = [dragItem.item];
        }
        else if (dragItem.i > i) {
            newArray = [
                ...this.items.slice(0, i),
                dragItem.item,
                ...this.items.slice(i, dragItem.i),
                ...this.items.slice(dragItem.i + 1)
            ];
        }
        else {
            // this.draggedItem.i < i
            newArray = [
                ...this.items.slice(0, dragItem.i),
                ...this.items.slice(dragItem.i + 1, i + 1),
                dragItem.item,
                ...this.items.slice(i + 1)
            ];
        }
        this.items = newArray;
        dragItem.i = i;
        this.activeItem = i;
        this.updatePlaceholderState();
    }
    cancelEvent(event) {
        if (!this.transfer.getItem() || !event) {
            return;
        }
        event.preventDefault();
    }
    onDrop(item) {
        if (item &&
            item.overZoneIndex !== this.currentZoneIndex &&
            item.lastZoneIndex === this.currentZoneIndex) {
            this.items = this.items.filter((x, i) => i !== item.i);
            this.updatePlaceholderState();
        }
        this.resetActiveItem();
    }
    resetActiveItem(event) {
        this.cancelEvent(event);
        this.activeItem = -1;
    }
    registerOnChange(callback) {
        this.onChanged = callback;
    }
    registerOnTouched(callback) {
        this.onTouched = callback;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    writeValue(value) {
        if (value) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.items = value.map((x, i) => ({
                id: i,
                initData: x,
                value: this.fieldName ? x[this.fieldName] : x
            }));
        }
        else {
            this.items = [];
        }
        this.updatePlaceholderState();
    }
    updatePlaceholderState() {
        this.showPlaceholder = !this._items.length;
    }
    getItemStyle(isActive) {
        return isActive
            ? Object.assign({}, this.itemStyle, this.itemActiveStyle)
            : this.itemStyle;
    }
    initDragstartEvent(event) {
        // it is necessary for mozilla
        // data type should be 'Text' instead of 'text/plain' to keep compatibility
        // with IE
        event.dataTransfer?.setData('Text', 'placeholder');
    }
}
SortableComponent.globalZoneIndex = 0;
SortableComponent.ɵfac = function SortableComponent_Factory(t) { return new (t || SortableComponent)(i0.ɵɵdirectiveInject(DraggableItemService)); };
SortableComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SortableComponent, selectors: [["bs-sortable"]], inputs: { fieldName: "fieldName", wrapperClass: "wrapperClass", wrapperStyle: "wrapperStyle", itemClass: "itemClass", itemStyle: "itemStyle", itemActiveClass: "itemActiveClass", itemActiveStyle: "itemActiveStyle", placeholderClass: "placeholderClass", placeholderStyle: "placeholderStyle", placeholderItem: "placeholderItem", itemTemplate: "itemTemplate" }, outputs: { onChange: "onChange" }, exportAs: ["bs-sortable"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => SortableComponent),
                multi: true
            }
        ])], decls: 5, vars: 4, consts: [[3, "ngClass", "ngStyle", "dragover", "dragenter", "drop", "mouseleave"], [3, "ngClass", "ngStyle", "dragover", "dragenter", 4, "ngIf"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter", 4, "ngFor", "ngForOf"], ["defItemTemplate", ""], [3, "ngClass", "ngStyle", "dragover", "dragenter"], ["draggable", "true", "aria-dropeffect", "move", 3, "ngClass", "ngStyle", "dragstart", "dragend", "dragover", "dragenter"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function SortableComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("dragover", function SortableComponent_Template_div_dragover_0_listener($event) { return ctx.cancelEvent($event); })("dragenter", function SortableComponent_Template_div_dragenter_0_listener($event) { return ctx.cancelEvent($event); })("drop", function SortableComponent_Template_div_drop_0_listener($event) { return ctx.resetActiveItem($event); })("mouseleave", function SortableComponent_Template_div_mouseleave_0_listener($event) { return ctx.resetActiveItem($event); });
        i0.ɵɵtemplate(1, SortableComponent_div_1_Template, 2, 3, "div", 1);
        i0.ɵɵtemplate(2, SortableComponent_div_2_Template, 2, 11, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, SortableComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    } if (rf & 2) {
        i0.ɵɵproperty("ngClass", ctx.wrapperClass)("ngStyle", ctx.wrapperStyle);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.showPlaceholder);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.items);
    } }, directives: [i2.NgClass, i2.NgStyle, i2.NgIf, i2.NgForOf, i2.NgTemplateOutlet], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortableComponent, [{
        type: Component,
        args: [{
                selector: 'bs-sortable',
                exportAs: 'bs-sortable',
                template: `
<div
    [ngClass]="wrapperClass"
    [ngStyle]="wrapperStyle"
    (dragover)="cancelEvent($event)"
    (dragenter)="cancelEvent($event)"
    (drop)="resetActiveItem($event)"
    (mouseleave)="resetActiveItem($event)">
  <div
        *ngIf="showPlaceholder"
        [ngClass]="placeholderClass"
        [ngStyle]="placeholderStyle"
        (dragover)="onItemDragover($event, 0)"
        (dragenter)="cancelEvent($event)"
    >{{placeholderItem}}</div>
    <div
        *ngFor="let item of items; let i=index;"
        [ngClass]="[ itemClass, i === activeItem ? itemActiveClass : '' ]"
        [ngStyle]="getItemStyle(i === activeItem)"
        draggable="true"
        (dragstart)="onItemDragstart($event, item, i)"
        (dragend)="resetActiveItem($event)"
        (dragover)="onItemDragover($event, i)"
        (dragenter)="cancelEvent($event)"
        aria-dropeffect="move"
        [attr.aria-grabbed]="i === activeItem"
    ><ng-template [ngTemplateOutlet]="itemTemplate || defItemTemplate"
  [ngTemplateOutletContext]="{item:item, index: i}"></ng-template></div>
</div>

<ng-template #defItemTemplate let-item="item">{{item.value}}</ng-template>
`,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => SortableComponent),
                        multi: true
                    }
                ]
            }]
    }], function () { return [{ type: DraggableItemService }]; }, { fieldName: [{
            type: Input
        }], wrapperClass: [{
            type: Input
        }], wrapperStyle: [{
            type: Input
        }], itemClass: [{
            type: Input
        }], itemStyle: [{
            type: Input
        }], itemActiveClass: [{
            type: Input
        }], itemActiveStyle: [{
            type: Input
        }], placeholderClass: [{
            type: Input
        }], placeholderStyle: [{
            type: Input
        }], placeholderItem: [{
            type: Input
        }], itemTemplate: [{
            type: Input
        }], onChange: [{
            type: Output
        }] }); })();

class SortableModule {
    static forRoot() {
        return { ngModule: SortableModule, providers: [DraggableItemService] };
    }
}
SortableModule.ɵfac = function SortableModule_Factory(t) { return new (t || SortableModule)(); };
SortableModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: SortableModule });
SortableModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SortableModule, [{
        type: NgModule,
        args: [{
                declarations: [SortableComponent],
                imports: [CommonModule],
                exports: [SortableComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(SortableModule, { declarations: [SortableComponent], imports: [CommonModule], exports: [SortableComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { DraggableItemService, SortableComponent, SortableModule };
//# sourceMappingURL=ngx-bootstrap-sortable.mjs.map
