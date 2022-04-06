import { Component, Input, Output, EventEmitter, forwardRef, TemplateRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DraggableItemService } from './draggable-item.service';
import * as i0 from "@angular/core";
import * as i1 from "./draggable-item.service";
import * as i2 from "@angular/common";
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
export class SortableComponent {
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
SortableComponent.ɵfac = function SortableComponent_Factory(t) { return new (t || SortableComponent)(i0.ɵɵdirectiveInject(i1.DraggableItemService)); };
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
    }], function () { return [{ type: i1.DraggableItemService }]; }, { fieldName: [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydGFibGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NvcnRhYmxlL3NvcnRhYmxlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDVixXQUFXLEVBQ1osTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUFhOUQsOEJBTUc7SUFGRyx1S0FBWSw4QkFBdUIsQ0FBQyxDQUFDLElBQUMsNEpBQ3pCLDBCQUFtQixJQURNO0lBRXpDLFlBQW1CO0lBQUEsaUJBQU07OztJQUp0QixpREFBNEIsb0NBQUE7SUFJL0IsZUFBbUI7SUFBbkIsNENBQW1COzs7Ozs7O0lBQ3BCLDhCQVdDO0lBTkcsc1FBQWEsOENBQWdDLElBQUMsMEpBQ25DLCtCQUF1QixJQURZLGdOQUVsQyxvQ0FBeUIsSUFGUyw4SkFHakMsMkJBQW1CLElBSGM7SUFNakQsd0ZBQzZEO0lBQUEsaUJBQU07Ozs7OztJQVZoRSxnSUFBa0UsNERBQUE7SUFRbEUsMERBQXNDO0lBQzVCLGVBQW9EO0lBQXBELDZEQUFvRCxzRUFBQTs7O0lBSXhCLFlBQWM7OztJQUFkLG9DQUFjOztBQVU1RCxNQUFNLE9BQU8saUJBQWlCO0lBK0Q1QixZQUFZLFFBQThCO1FBMUQxQyxtQ0FBbUM7UUFDMUIsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFFM0IscUNBQXFDO1FBQzVCLGlCQUFZLEdBQTJCLEVBQUUsQ0FBQztRQUVuRCwwQkFBMEI7UUFDakIsY0FBUyxHQUFHLEVBQUUsQ0FBQztRQUV4Qiw0QkFBNEI7UUFDbkIsY0FBUyxHQUEyQixFQUFFLENBQUM7UUFFaEQsaUNBQWlDO1FBQ3hC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Qjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsa0JBQWtCLENBQUM7d0JBQ2hELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO2FBQ0Y7dUVBSVUsU0FBUztrQkFBakIsS0FBSztZQUdHLFlBQVk7a0JBQXBCLEtBQUs7WUFHRyxZQUFZO2tCQUFwQixLQUFLO1lBR0csU0FBUztrQkFBakIsS0FBSztZQUdHLFNBQVM7a0JBQWpCLEtBQUs7WUFHRyxlQUFlO2tCQUF2QixLQUFLO1lBR0csZUFBZTtrQkFBdkIsS0FBSztZQUdHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUdHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUdHLGVBQWU7a0JBQXZCLEtBQUs7WUFHRyxZQUFZO2tCQUFwQixLQUFLO1lBS0ksUUFBUTtrQkFBakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZixcclxuICBUZW1wbGF0ZVJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOR19WQUxVRV9BQ0NFU1NPUiwgQ29udHJvbFZhbHVlQWNjZXNzb3IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IERyYWdnYWJsZUl0ZW0gfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtJztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbVNlcnZpY2UgfSBmcm9tICcuL2RyYWdnYWJsZS1pdGVtLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdicy1zb3J0YWJsZScsXHJcbiAgZXhwb3J0QXM6ICdicy1zb3J0YWJsZScsXHJcbiAgdGVtcGxhdGU6IGBcclxuPGRpdlxyXG4gICAgW25nQ2xhc3NdPVwid3JhcHBlckNsYXNzXCJcclxuICAgIFtuZ1N0eWxlXT1cIndyYXBwZXJTdHlsZVwiXHJcbiAgICAoZHJhZ292ZXIpPVwiY2FuY2VsRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxyXG4gICAgKGRyb3ApPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIlxyXG4gICAgKG1vdXNlbGVhdmUpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIj5cclxuICA8ZGl2XHJcbiAgICAgICAgKm5nSWY9XCJzaG93UGxhY2Vob2xkZXJcIlxyXG4gICAgICAgIFtuZ0NsYXNzXT1cInBsYWNlaG9sZGVyQ2xhc3NcIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cInBsYWNlaG9sZGVyU3R5bGVcIlxyXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIDApXCJcclxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxyXG4gICAgPnt7cGxhY2Vob2xkZXJJdGVtfX08L2Rpdj5cclxuICAgIDxkaXZcclxuICAgICAgICAqbmdGb3I9XCJsZXQgaXRlbSBvZiBpdGVtczsgbGV0IGk9aW5kZXg7XCJcclxuICAgICAgICBbbmdDbGFzc109XCJbIGl0ZW1DbGFzcywgaSA9PT0gYWN0aXZlSXRlbSA/IGl0ZW1BY3RpdmVDbGFzcyA6ICcnIF1cIlxyXG4gICAgICAgIFtuZ1N0eWxlXT1cImdldEl0ZW1TdHlsZShpID09PSBhY3RpdmVJdGVtKVwiXHJcbiAgICAgICAgZHJhZ2dhYmxlPVwidHJ1ZVwiXHJcbiAgICAgICAgKGRyYWdzdGFydCk9XCJvbkl0ZW1EcmFnc3RhcnQoJGV2ZW50LCBpdGVtLCBpKVwiXHJcbiAgICAgICAgKGRyYWdlbmQpPVwicmVzZXRBY3RpdmVJdGVtKCRldmVudClcIlxyXG4gICAgICAgIChkcmFnb3Zlcik9XCJvbkl0ZW1EcmFnb3ZlcigkZXZlbnQsIGkpXCJcclxuICAgICAgICAoZHJhZ2VudGVyKT1cImNhbmNlbEV2ZW50KCRldmVudClcIlxyXG4gICAgICAgIGFyaWEtZHJvcGVmZmVjdD1cIm1vdmVcIlxyXG4gICAgICAgIFthdHRyLmFyaWEtZ3JhYmJlZF09XCJpID09PSBhY3RpdmVJdGVtXCJcclxuICAgID48bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwiaXRlbVRlbXBsYXRlIHx8IGRlZkl0ZW1UZW1wbGF0ZVwiXHJcbiAgW25nVGVtcGxhdGVPdXRsZXRDb250ZXh0XT1cIntpdGVtOml0ZW0sIGluZGV4OiBpfVwiPjwvbmctdGVtcGxhdGU+PC9kaXY+XHJcbjwvZGl2PlxyXG5cclxuPG5nLXRlbXBsYXRlICNkZWZJdGVtVGVtcGxhdGUgbGV0LWl0ZW09XCJpdGVtXCI+e3tpdGVtLnZhbHVlfX08L25nLXRlbXBsYXRlPlxyXG5gLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gU29ydGFibGVDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNvcnRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xyXG4gIHByaXZhdGUgc3RhdGljIGdsb2JhbFpvbmVJbmRleCA9IDA7XHJcbiAgLyoqIGZpZWxkIG5hbWUgaWYgaW5wdXQgYXJyYXkgY29uc2lzdHMgb2Ygb2JqZWN0cyAqL1xyXG4gIEBJbnB1dCgpIGZpZWxkTmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqIGNsYXNzIG5hbWUgZm9yIGl0ZW1zIHdyYXBwZXIgKi9cclxuICBASW5wdXQoKSB3cmFwcGVyQ2xhc3MgPSAnJztcclxuXHJcbiAgLyoqIHN0eWxlIG9iamVjdCBmb3IgaXRlbXMgd3JhcHBlciAqL1xyXG4gIEBJbnB1dCgpIHdyYXBwZXJTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG5cclxuICAvKiogY2xhc3MgbmFtZSBmb3IgaXRlbSAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1DbGFzcyA9ICcnO1xyXG5cclxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBpdGVtICovXHJcbiAgQElucHV0KCkgaXRlbVN0eWxlOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XHJcblxyXG4gIC8qKiBjbGFzcyBuYW1lIGZvciBhY3RpdmUgaXRlbSAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVDbGFzcyA9ICcnO1xyXG5cclxuICAvKiogc3R5bGUgb2JqZWN0IGZvciBhY3RpdmUgaXRlbSAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1BY3RpdmVTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG5cclxuICAvKiogY2xhc3MgbmFtZSBmb3IgcGxhY2Vob2xkZXIgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlckNsYXNzID0gJyc7XHJcblxyXG4gIC8qKiBzdHlsZSBvYmplY3QgZm9yIHBsYWNlaG9sZGVyICovXHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXJTdHlsZTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xyXG5cclxuICAvKiogcGxhY2Vob2xkZXIgaXRlbSB3aGljaCB3aWxsIGJlIHNob3duIGlmIGNvbGxlY3Rpb24gaXMgZW1wdHkgKi9cclxuICBASW5wdXQoKSBwbGFjZWhvbGRlckl0ZW0gPSAnJztcclxuXHJcbiAgLyoqIHVzZWQgdG8gc3BlY2lmeSBhIGN1c3RvbSBpdGVtIHRlbXBsYXRlLiBUZW1wbGF0ZSB2YXJpYWJsZXM6IGl0ZW0gYW5kIGluZGV4OyAqL1xyXG4gIEBJbnB1dCgpIGl0ZW1UZW1wbGF0ZT86IFRlbXBsYXRlUmVmPHVua25vd24+O1xyXG5cclxuICAvKiogZmlyZWQgb24gYXJyYXkgY2hhbmdlIChyZW9yZGVyaW5nLCBpbnNlcnQsIHJlbW92ZSksIHNhbWUgYXMgPGNvZGU+bmdNb2RlbENoYW5nZTwvY29kZT4uXHJcbiAgICogIFJldHVybnMgbmV3IGl0ZW1zIGNvbGxlY3Rpb24gYXMgYSBwYXlsb2FkLlxyXG4gICAqL1xyXG4gIEBPdXRwdXQoKSBvbkNoYW5nZTogRXZlbnRFbWl0dGVyPHVua25vd25bXT4gPSBuZXcgRXZlbnRFbWl0dGVyPHVua25vd25bXT4oKTtcclxuXHJcbiAgc2hvd1BsYWNlaG9sZGVyID0gZmFsc2U7XHJcbiAgYWN0aXZlSXRlbSA9IC0xO1xyXG5cclxuICBnZXQgaXRlbXMoKTogU29ydGFibGVJdGVtW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xyXG4gIH1cclxuXHJcbiAgc2V0IGl0ZW1zKHZhbHVlOiBTb3J0YWJsZUl0ZW1bXSkge1xyXG4gICAgdGhpcy5faXRlbXMgPSB2YWx1ZTtcclxuICAgIGNvbnN0IG91dCA9IHRoaXMuaXRlbXMubWFwKCh4OiBTb3J0YWJsZUl0ZW0pID0+IHguaW5pdERhdGEpO1xyXG4gICAgdGhpcy5vbkNoYW5nZWQob3V0KTtcclxuICAgIHRoaXMub25DaGFuZ2UuZW1pdChvdXQpO1xyXG4gIH1cclxuXHJcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICBvblRvdWNoZWQ6IGFueSA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gIG9uQ2hhbmdlZDogYW55ID0gRnVuY3Rpb24ucHJvdG90eXBlO1xyXG5cclxuICBwcml2YXRlIHRyYW5zZmVyOiBEcmFnZ2FibGVJdGVtU2VydmljZTtcclxuICBwcml2YXRlIGN1cnJlbnRab25lSW5kZXg6IG51bWJlcjtcclxuICBwcml2YXRlIF9pdGVtczogU29ydGFibGVJdGVtW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IodHJhbnNmZXI6IERyYWdnYWJsZUl0ZW1TZXJ2aWNlKSB7XHJcbiAgICB0aGlzLnRyYW5zZmVyID0gdHJhbnNmZXI7XHJcbiAgICB0aGlzLmN1cnJlbnRab25lSW5kZXggPSBTb3J0YWJsZUNvbXBvbmVudC5nbG9iYWxab25lSW5kZXgrKztcclxuICAgIHRoaXMudHJhbnNmZXJcclxuICAgICAgLm9uQ2FwdHVyZUl0ZW0oKVxyXG4gICAgICAuc3Vic2NyaWJlKChpdGVtOiBEcmFnZ2FibGVJdGVtKSA9PiB0aGlzLm9uRHJvcChpdGVtKSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1EcmFnc3RhcnQoXHJcbiAgICBldmVudDogRHJhZ0V2ZW50LFxyXG4gICAgaXRlbTogU29ydGFibGVJdGVtLFxyXG4gICAgaTogbnVtYmVyXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLmluaXREcmFnc3RhcnRFdmVudChldmVudCk7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCgpO1xyXG4gICAgdGhpcy50cmFuc2Zlci5kcmFnU3RhcnQoe1xyXG4gICAgICBldmVudCxcclxuICAgICAgaXRlbSxcclxuICAgICAgaSxcclxuICAgICAgaW5pdGlhbEluZGV4OiBpLFxyXG4gICAgICBsYXN0Wm9uZUluZGV4OiB0aGlzLmN1cnJlbnRab25lSW5kZXgsXHJcbiAgICAgIG92ZXJab25lSW5kZXg6IHRoaXMuY3VycmVudFpvbmVJbmRleFxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBvbkl0ZW1EcmFnb3ZlcihldmVudDogRHJhZ0V2ZW50LCBpOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy50cmFuc2Zlci5nZXRJdGVtKCkpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGRyYWdJdGVtID0gdGhpcy50cmFuc2Zlci5jYXB0dXJlSXRlbShcclxuICAgICAgdGhpcy5jdXJyZW50Wm9uZUluZGV4LFxyXG4gICAgICB0aGlzLml0ZW1zLmxlbmd0aFxyXG4gICAgKTtcclxuXHJcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgbGV0IG5ld0FycmF5OiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIGlmICghZHJhZ0l0ZW0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5pdGVtcy5sZW5ndGgpIHtcclxuICAgICAgbmV3QXJyYXkgPSBbZHJhZ0l0ZW0uaXRlbV07XHJcbiAgICB9IGVsc2UgaWYgKGRyYWdJdGVtLmkgPiBpKSB7XHJcbiAgICAgIG5ld0FycmF5ID0gW1xyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgaSksXHJcbiAgICAgICAgZHJhZ0l0ZW0uaXRlbSxcclxuICAgICAgICAuLi50aGlzLml0ZW1zLnNsaWNlKGksIGRyYWdJdGVtLmkpLFxyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoZHJhZ0l0ZW0uaSArIDEpXHJcbiAgICAgIF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyB0aGlzLmRyYWdnZWRJdGVtLmkgPCBpXHJcbiAgICAgIG5ld0FycmF5ID0gW1xyXG4gICAgICAgIC4uLnRoaXMuaXRlbXMuc2xpY2UoMCwgZHJhZ0l0ZW0uaSksXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShkcmFnSXRlbS5pICsgMSwgaSArIDEpLFxyXG4gICAgICAgIGRyYWdJdGVtLml0ZW0sXHJcbiAgICAgICAgLi4udGhpcy5pdGVtcy5zbGljZShpICsgMSlcclxuICAgICAgXTtcclxuICAgIH1cclxuICAgIHRoaXMuaXRlbXMgPSBuZXdBcnJheTtcclxuICAgIGRyYWdJdGVtLmkgPSBpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gaTtcclxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgY2FuY2VsRXZlbnQoZXZlbnQ/OiBEcmFnRXZlbnR8TW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnRyYW5zZmVyLmdldEl0ZW0oKSB8fCAhZXZlbnQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIG9uRHJvcChpdGVtOiBEcmFnZ2FibGVJdGVtKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGl0ZW0gJiZcclxuICAgICAgaXRlbS5vdmVyWm9uZUluZGV4ICE9PSB0aGlzLmN1cnJlbnRab25lSW5kZXggJiZcclxuICAgICAgaXRlbS5sYXN0Wm9uZUluZGV4ID09PSB0aGlzLmN1cnJlbnRab25lSW5kZXhcclxuICAgICkge1xyXG4gICAgICB0aGlzLml0ZW1zID0gdGhpcy5pdGVtcy5maWx0ZXIoXHJcbiAgICAgICAgKHg6IFNvcnRhYmxlSXRlbSwgaTogbnVtYmVyKSA9PiBpICE9PSBpdGVtLmlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVQbGFjZWhvbGRlclN0YXRlKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnJlc2V0QWN0aXZlSXRlbSgpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXRBY3RpdmVJdGVtKGV2ZW50PzogRHJhZ0V2ZW50fE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FuY2VsRXZlbnQoZXZlbnQpO1xyXG4gICAgdGhpcy5hY3RpdmVJdGVtID0gLTE7XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlZCA9IGNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoY2FsbGJhY2s6ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gY2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueVtdKTogdm9pZCB7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgdGhpcy5pdGVtcyA9IHZhbHVlLm1hcCgoeDogYW55LCBpOiBudW1iZXIpID0+ICh7XHJcbiAgICAgICAgaWQ6IGksXHJcbiAgICAgICAgaW5pdERhdGE6IHgsXHJcbiAgICAgICAgdmFsdWU6IHRoaXMuZmllbGROYW1lID8geFt0aGlzLmZpZWxkTmFtZV0gOiB4XHJcbiAgICAgIH0pKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuaXRlbXMgPSBbXTtcclxuICAgIH1cclxuICAgIHRoaXMudXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGxhY2Vob2xkZXJTdGF0ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd1BsYWNlaG9sZGVyID0gIXRoaXMuX2l0ZW1zLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIGdldEl0ZW1TdHlsZShpc0FjdGl2ZTogYm9vbGVhbikge1xyXG4gICAgcmV0dXJuIGlzQWN0aXZlXHJcbiAgICAgID8gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5pdGVtU3R5bGUsIHRoaXMuaXRlbUFjdGl2ZVN0eWxlKVxyXG4gICAgICA6IHRoaXMuaXRlbVN0eWxlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpbml0RHJhZ3N0YXJ0RXZlbnQoZXZlbnQ6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gaXQgaXMgbmVjZXNzYXJ5IGZvciBtb3ppbGxhXHJcbiAgICAvLyBkYXRhIHR5cGUgc2hvdWxkIGJlICdUZXh0JyBpbnN0ZWFkIG9mICd0ZXh0L3BsYWluJyB0byBrZWVwIGNvbXBhdGliaWxpdHlcclxuICAgIC8vIHdpdGggSUVcclxuICAgIGV2ZW50LmRhdGFUcmFuc2Zlcj8uc2V0RGF0YSgnVGV4dCcsICdwbGFjZWhvbGRlcicpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIFNvcnRhYmxlSXRlbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICB2YWx1ZTogc3RyaW5nO1xyXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XHJcbiAgaW5pdERhdGE6IGFueTtcclxufVxyXG4iXX0=