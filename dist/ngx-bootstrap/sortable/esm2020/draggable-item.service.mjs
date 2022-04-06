import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class DraggableItemService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLWl0ZW0uc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zb3J0YWJsZS9kcmFnZ2FibGUtaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7QUFJL0IsTUFBTSxPQUFPLG9CQUFvQjtJQURqQztRQUlVLGNBQVMsR0FBMkIsSUFBSSxPQUFPLEVBQWlCLENBQUM7S0EyQjFFO0lBekJDLFNBQVMsQ0FBQyxJQUFtQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsT0FBTztRQUNMLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLGFBQXFCLEVBQUUsUUFBZ0I7UUFDakQsSUFBSSxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxLQUFLLGFBQWEsRUFBRTtZQUM1RSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQztZQUNwRSxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ3hDLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDekQsYUFBYTtnQkFDYixDQUFDLEVBQUUsUUFBUTthQUNaLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7O3dGQTdCVSxvQkFBb0I7MEVBQXBCLG9CQUFvQixXQUFwQixvQkFBb0IsbUJBRFIsVUFBVTt1RkFDdEIsb0JBQW9CO2NBRGhDLFVBQVU7ZUFBQyxFQUFDLFVBQVUsRUFBRSxVQUFVLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRHJhZ2dhYmxlSXRlbSB9IGZyb20gJy4vZHJhZ2dhYmxlLWl0ZW0nO1xyXG5cclxuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdwbGF0Zm9ybSd9KVxyXG5leHBvcnQgY2xhc3MgRHJhZ2dhYmxlSXRlbVNlcnZpY2Uge1xyXG4gIHByaXZhdGUgZHJhZ2dhYmxlSXRlbT86IERyYWdnYWJsZUl0ZW07XHJcblxyXG4gIHByaXZhdGUgb25DYXB0dXJlOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+ID0gbmV3IFN1YmplY3Q8RHJhZ2dhYmxlSXRlbT4oKTtcclxuXHJcbiAgZHJhZ1N0YXJ0KGl0ZW06IERyYWdnYWJsZUl0ZW0pOiB2b2lkIHtcclxuICAgIHRoaXMuZHJhZ2dhYmxlSXRlbSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICBnZXRJdGVtKCk6IERyYWdnYWJsZUl0ZW0gfCB1bmRlZmluZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuZHJhZ2dhYmxlSXRlbTtcclxuICB9XHJcblxyXG4gIGNhcHR1cmVJdGVtKG92ZXJab25lSW5kZXg6IG51bWJlciwgbmV3SW5kZXg6IG51bWJlcik6IERyYWdnYWJsZUl0ZW0gfCB1bmRlZmluZWQge1xyXG4gICAgaWYgKHRoaXMuZHJhZ2dhYmxlSXRlbSAmJiB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCAhPT0gb3ZlclpvbmVJbmRleCkge1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ubGFzdFpvbmVJbmRleCA9IHRoaXMuZHJhZ2dhYmxlSXRlbS5vdmVyWm9uZUluZGV4O1xyXG4gICAgICB0aGlzLmRyYWdnYWJsZUl0ZW0ub3ZlclpvbmVJbmRleCA9IG92ZXJab25lSW5kZXg7XHJcbiAgICAgIHRoaXMub25DYXB0dXJlLm5leHQodGhpcy5kcmFnZ2FibGVJdGVtKTtcclxuICAgICAgdGhpcy5kcmFnZ2FibGVJdGVtID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5kcmFnZ2FibGVJdGVtLCB7XHJcbiAgICAgICAgb3ZlclpvbmVJbmRleCxcclxuICAgICAgICBpOiBuZXdJbmRleFxyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5kcmFnZ2FibGVJdGVtO1xyXG4gIH1cclxuXHJcbiAgb25DYXB0dXJlSXRlbSgpOiBTdWJqZWN0PERyYWdnYWJsZUl0ZW0+IHtcclxuICAgIHJldHVybiB0aGlzLm9uQ2FwdHVyZTtcclxuICB9XHJcbn1cclxuIl19