// todo: split
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
/** Provides default values for Pagination and pager components */
export class PaginationConfig {
    constructor() {
        this.main = {
            itemsPerPage: 10,
            boundaryLinks: false,
            directionLinks: true,
            firstText: 'First',
            previousText: 'Previous',
            nextText: 'Next',
            lastText: 'Last',
            pageBtnClass: '',
            rotate: true
        };
        this.pager = {
            itemsPerPage: 15,
            previousText: '« Previous',
            nextText: 'Next »',
            pageBtnClass: '',
            align: true
        };
    }
}
PaginationConfig.ɵfac = function PaginationConfig_Factory(t) { return new (t || PaginationConfig)(); };
PaginationConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: PaginationConfig, factory: PaginationConfig.ɵfac, providedIn: 'root' });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(PaginationConfig, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnaW5hdGlvbi5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvcGFnaW5hdGlvbi9wYWdpbmF0aW9uLmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxjQUFjO0FBQ2QsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFJM0Msa0VBQWtFO0FBSWxFLE1BQU0sT0FBTyxnQkFBZ0I7SUFIN0I7UUFJRSxTQUFJLEdBQXlCO1lBQzNCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLGFBQWEsRUFBRSxLQUFLO1lBQ3BCLGNBQWMsRUFBRSxJQUFJO1lBQ3BCLFNBQVMsRUFBRSxPQUFPO1lBQ2xCLFlBQVksRUFBRSxVQUFVO1lBQ3hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFlBQVksRUFBRSxFQUFFO1lBQ2hCLE1BQU0sRUFBRSxJQUFJO1NBQ2IsQ0FBQztRQUNGLFVBQUssR0FBZTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixZQUFZLEVBQUUsWUFBWTtZQUMxQixRQUFRLEVBQUUsUUFBUTtZQUNsQixZQUFZLEVBQUUsRUFBRTtZQUNoQixLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUM7S0FDSDs7Z0ZBbkJZLGdCQUFnQjtzRUFBaEIsZ0JBQWdCLFdBQWhCLGdCQUFnQixtQkFGZixNQUFNO3VGQUVQLGdCQUFnQjtjQUg1QixVQUFVO2VBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0b2RvOiBzcGxpdFxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBDb25maWdNb2RlbCwgUGFnZXJNb2RlbCB9IGZyb20gJy4vbW9kZWxzJztcclxuXHJcbi8qKiBQcm92aWRlcyBkZWZhdWx0IHZhbHVlcyBmb3IgUGFnaW5hdGlvbiBhbmQgcGFnZXIgY29tcG9uZW50cyAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uQ29uZmlnIHtcclxuICBtYWluOiBQYXJ0aWFsPENvbmZpZ01vZGVsPiA9IHtcclxuICAgIGl0ZW1zUGVyUGFnZTogMTAsXHJcbiAgICBib3VuZGFyeUxpbmtzOiBmYWxzZSxcclxuICAgIGRpcmVjdGlvbkxpbmtzOiB0cnVlLFxyXG4gICAgZmlyc3RUZXh0OiAnRmlyc3QnLFxyXG4gICAgcHJldmlvdXNUZXh0OiAnUHJldmlvdXMnLFxyXG4gICAgbmV4dFRleHQ6ICdOZXh0JyxcclxuICAgIGxhc3RUZXh0OiAnTGFzdCcsXHJcbiAgICBwYWdlQnRuQ2xhc3M6ICcnLFxyXG4gICAgcm90YXRlOiB0cnVlXHJcbiAgfTtcclxuICBwYWdlcjogUGFnZXJNb2RlbCA9IHtcclxuICAgIGl0ZW1zUGVyUGFnZTogMTUsXHJcbiAgICBwcmV2aW91c1RleHQ6ICfCqyBQcmV2aW91cycsXHJcbiAgICBuZXh0VGV4dDogJ05leHQgwrsnLFxyXG4gICAgcGFnZUJ0bkNsYXNzOiAnJyxcclxuICAgIGFsaWduOiB0cnVlXHJcbiAgfTtcclxufVxyXG4iXX0=