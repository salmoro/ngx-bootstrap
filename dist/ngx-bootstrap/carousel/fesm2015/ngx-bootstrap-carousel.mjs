import * as i0 from '@angular/core';
import { Injectable, EventEmitter, Component, Input, Output, HostBinding, NgModule } from '@angular/core';
import { LinkedList, isBs3, getBsVer } from 'ngx-bootstrap/utils';
import * as i2 from '@angular/common';
import { CommonModule } from '@angular/common';

/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 */
function findLastIndex(array, predicate) {
    let l = array.length;
    while (l--) {
        if (predicate(array[l], l, array)) {
            return l;
        }
    }
    return -1;
}
function chunkByNumber(array, size) {
    const out = [];
    const n = Math.ceil((array.length) / size);
    let i = 0;
    while (i < n) {
        const chunk = array.splice(0, (i === n - 1) && size < array.length ? array.length : size);
        out.push(chunk);
        i++;
    }
    return out;
}
function isNumber(value) {
    return typeof value === 'number' || Object.prototype.toString.call(value) === '[object Number]';
}

class CarouselConfig {
    constructor() {
        /* Default interval of auto changing of slides */
        this.interval = 5000;
        /* Is loop of auto changing of slides can be paused */
        this.noPause = false;
        /* Is slides can wrap from the last to the first slide */
        this.noWrap = false;
        /* Show carousel-indicators */
        this.showIndicators = true;
        /* Slides can be paused on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
          of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
    }
}
CarouselConfig.ɵfac = function CarouselConfig_Factory(t) { return new (t || CarouselConfig)(); };
CarouselConfig.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CarouselConfig, factory: CarouselConfig.ɵfac, providedIn: 'root' });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselConfig, [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], null, null);
})();

/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
function CarouselComponent_ng_container_1_li_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r8 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "li", 7);
        i0.ɵɵlistener("click", function CarouselComponent_ng_container_1_li_2_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectSlide(i_r6); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const slide_r5 = ctx.$implicit;
        i0.ɵɵclassProp("active", slide_r5.active === true);
    }
}
function CarouselComponent_ng_container_1_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "ol", 5);
        i0.ɵɵtemplate(2, CarouselComponent_ng_container_1_li_2_Template, 1, 2, "li", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r0 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r0.indicatorsSlides());
    }
}
function CarouselComponent_ng_container_2_button_2_Template(rf, ctx) {
    if (rf & 1) {
        const _r13 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "button", 9);
        i0.ɵɵlistener("click", function CarouselComponent_ng_container_2_button_2_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const i_r11 = restoredCtx.index; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.selectSlide(i_r11); });
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const slide_r10 = ctx.$implicit;
        const i_r11 = ctx.index;
        const ctx_r9 = i0.ɵɵnextContext(2);
        i0.ɵɵclassProp("active", slide_r10.active === true);
        i0.ɵɵattribute("data-bs-target", "#" + ctx_r9.currentId)("data-bs-slide-to", i_r11);
    }
}
function CarouselComponent_ng_container_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementContainerStart(0);
        i0.ɵɵelementStart(1, "div", 5);
        i0.ɵɵtemplate(2, CarouselComponent_ng_container_2_button_2_Template, 1, 4, "button", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementContainerEnd();
    }
    if (rf & 2) {
        const ctx_r1 = i0.ɵɵnextContext();
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx_r1.indicatorsSlides());
    }
}
function CarouselComponent_a_5_span_2_Template(rf, ctx) {
    if (rf & 1) {
        i0.ɵɵelementStart(0, "span", 13);
        i0.ɵɵtext(1, "Previous");
        i0.ɵɵelementEnd();
    }
}
function CarouselComponent_a_5_Template(rf, ctx) {
    if (rf & 1) {
        const _r16 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 10);
        i0.ɵɵlistener("click", function CarouselComponent_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.previousSlide(); });
        i0.ɵɵelement(1, "span", 11);
        i0.ɵɵtemplate(2, CarouselComponent_a_5_span_2_Template, 2, 0, "span", 12);
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r2 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("disabled", ctx_r2.checkDisabledClass("prev"));
        i0.ɵɵattribute("data-bs-target", "#" + ctx_r2.currentId);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx_r2.isBs4);
    }
}
function CarouselComponent_a_6_Template(rf, ctx) {
    if (rf & 1) {
        const _r18 = i0.ɵɵgetCurrentView();
        i0.ɵɵelementStart(0, "a", 14);
        i0.ɵɵlistener("click", function CarouselComponent_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.nextSlide(); });
        i0.ɵɵelement(1, "span", 15);
        i0.ɵɵelementStart(2, "span", 13);
        i0.ɵɵtext(3, "Next");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    }
    if (rf & 2) {
        const ctx_r3 = i0.ɵɵnextContext();
        i0.ɵɵclassProp("disabled", ctx_r3.checkDisabledClass("next"));
        i0.ɵɵattribute("data-bs-target", "#" + ctx_r3.currentId);
    }
}
const _c0$1 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
let _currentId = 1;
/**
 * Base element to create carousel
 */
class CarouselComponent {
    constructor(config, ngZone) {
        this.ngZone = ngZone;
        /* If `true` — carousel will not cycle continuously and will have hard stops (prevent looping) */
        this.noWrap = false;
        /*  If `true` — will disable pausing on carousel mouse hover */
        this.noPause = false;
        /*  If `true` — carousel-indicators are visible  */
        this.showIndicators = true;
        /*  If `true` - autoplay will be stopped on focus */
        this.pauseOnFocus = false;
        /* If `true` - carousel indicators indicate slides chunks
           works ONLY if singleSlideOffset = FALSE */
        this.indicatorsByChunk = false;
        /* If value more then 1 — carousel works in multilist mode */
        this.itemsPerSlide = 1;
        /* If `true` — carousel shifts by one element. By default carousel shifts by number
           of visible elements (itemsPerSlide field) */
        this.singleSlideOffset = false;
        /** Turn on/off animation. Animation doesn't work for multilist carousel */
        this.isAnimated = false;
        /** Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property */
        this.activeSlideChange = new EventEmitter(false);
        /** Will be emitted when active slides has been changed in multilist mode */
        this.slideRangeChange = new EventEmitter();
        /* Index to start display slides from it */
        this.startFromIndex = 0;
        this._interval = 5000;
        this._slides = new LinkedList();
        this._currentVisibleSlidesIndex = 0;
        this.isPlaying = false;
        this.destroyed = false;
        this.currentId = 0;
        this.getActive = (slide) => slide.active;
        this.makeSlidesConsistent = (slides) => {
            slides.forEach((slide, index) => slide.item.order = index);
        };
        Object.assign(this, config);
        this.currentId = _currentId++;
    }
    /** Index of currently displayed slide(started for 0) */
    set activeSlide(index) {
        if (this.multilist) {
            return;
        }
        if (isNumber(index)) {
            this.customActiveSlide = index;
        }
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    get activeSlide() {
        return this._currentActiveSlide || 0;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle
     * automatically.
     */
    get interval() {
        return this._interval;
    }
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    get slides() {
        return this._slides.toArray();
    }
    get isFirstSlideVisible() {
        const indexes = this.getVisibleIndexes();
        if (!indexes || (indexes instanceof Array && !indexes.length)) {
            return false;
        }
        return indexes.includes(0);
    }
    get isLastSlideVisible() {
        const indexes = this.getVisibleIndexes();
        if (!indexes || (indexes instanceof Array && !indexes.length)) {
            return false;
        }
        return indexes.includes(this._slides.length - 1);
    }
    get isBs4() {
        return !isBs3();
    }
    get _bsVer() {
        return getBsVer();
    }
    ngAfterViewInit() {
        setTimeout(() => {
            if (this.singleSlideOffset) {
                this.indicatorsByChunk = false;
            }
            if (this.multilist) {
                this._chunkedSlides = chunkByNumber(this.mapSlidesAndIndexes(), this.itemsPerSlide);
                this.selectInitialSlides();
            }
            if (this.customActiveSlide && !this.multilist) {
                this._select(this.customActiveSlide);
            }
        }, 0);
    }
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active
     * and starts auto changing
     * @param slide
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this.multilist && this._slides.length <= this.itemsPerSlide) {
            slide.active = true;
        }
        if (!this.multilist && this.isAnimated) {
            slide.isAnimated = true;
        }
        if (!this.multilist && this._slides.length === 1) {
            this._currentActiveSlide = undefined;
            if (!this.customActiveSlide) {
                this.activeSlide = 0;
            }
            this.play();
        }
        if (this.multilist && this._slides.length > this.itemsPerSlide) {
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another
     * slide
     * @param slide
     */
    removeSlide(slide) {
        const remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            let nextSlideIndex;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is
                // FALSE or to previous, if noWrap is TRUE in case, if this slide in
                // middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex)
                    ? remIndex
                    : this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(() => {
                this._select(nextSlideIndex);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            const currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout(() => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }, 0);
        }
    }
    nextSlideFromInterval(force = false) {
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to next slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    nextSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.NEXT, force);
    }
    /**
     * Rolling to previous slide
     * @param force: {boolean} if true - will ignore noWrap flag
     */
    previousSlide(force = false) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        this.move(Direction.PREV, force);
    }
    getFirstVisibleIndex() {
        return this.slides.findIndex(this.getActive);
    }
    getLastVisibleIndex() {
        return findLastIndex(this.slides, this.getActive);
    }
    move(direction, force = false) {
        const firstVisibleIndex = this.getFirstVisibleIndex();
        const lastVisibleIndex = this.getLastVisibleIndex();
        if (this.noWrap) {
            if (direction === Direction.NEXT &&
                this.isLast(lastVisibleIndex) ||
                direction === Direction.PREV &&
                    firstVisibleIndex === 0) {
                return;
            }
        }
        if (!this.multilist) {
            this.activeSlide = this.findNextSlideIndex(direction, force) || 0;
        }
        else {
            this.moveMultilist(direction);
        }
    }
    /**
     * Swith slides by enter, space and arrows keys
     * @internal
     */
    keydownPress(event) {
        if (event.keyCode === 13 || event.key === 'Enter' || event.keyCode === 32 || event.key === 'Space') {
            this.nextSlide();
            event.preventDefault();
            return;
        }
        if (event.keyCode === 37 || event.key === 'LeftArrow') {
            this.previousSlide();
            return;
        }
        if (event.keyCode === 39 || event.key === 'RightArrow') {
            this.nextSlide();
            return;
        }
    }
    /**
     * Play on mouse leave
     * @internal
     */
    onMouseLeave() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * Play on mouse up
     * @internal
     */
    onMouseUp() {
        if (!this.pauseOnFocus) {
            this.play();
        }
    }
    /**
     * When slides on focus autoplay is stopped(optional)
     * @internal
     */
    pauseFocusIn() {
        if (this.pauseOnFocus) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * When slides out of focus autoplay is started
     * @internal
     */
    pauseFocusOut() {
        this.play();
    }
    /**
     * Rolling to specified slide
     * @param index: {number} index of slide, which must be shown
     */
    selectSlide(index) {
        if (this.isPlaying) {
            this.restartTimer();
        }
        if (!this.multilist) {
            this.activeSlide = this.indicatorsByChunk ? index * this.itemsPerSlide : index;
        }
        else {
            this.selectSlideRange(this.indicatorsByChunk ? index * this.itemsPerSlide : index);
        }
    }
    /**
     * Starts a auto changing of slides
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex(this.getActive);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param index
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines, whether the specified index is first in collection
     * @param index
     */
    isFirst(index) {
        return index === 0;
    }
    indicatorsSlides() {
        return this.slides.filter((slide, index) => !this.indicatorsByChunk || index % this.itemsPerSlide === 0);
    }
    selectInitialSlides() {
        const startIndex = this.startFromIndex <= this._slides.length
            ? this.startFromIndex
            : 0;
        this.hideSlides();
        if (this.singleSlideOffset) {
            this._slidesWithIndexes = this.mapSlidesAndIndexes();
            if (this._slides.length - startIndex < this.itemsPerSlide) {
                const slidesToAppend = this._slidesWithIndexes.slice(0, startIndex);
                this._slidesWithIndexes = [
                    ...this._slidesWithIndexes,
                    ...slidesToAppend
                ]
                    .slice(slidesToAppend.length)
                    .slice(0, this.itemsPerSlide);
            }
            else {
                this._slidesWithIndexes = this._slidesWithIndexes.slice(startIndex, startIndex + this.itemsPerSlide);
            }
            this._slidesWithIndexes.forEach((slide) => slide.item.active = true);
            this.makeSlidesConsistent(this._slidesWithIndexes);
        }
        else {
            this.selectRangeByNestedIndex(startIndex);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    /**
     * Defines next slide index, depending of direction
     * @param direction: Direction(UNKNOWN|PREV|NEXT)
     * @param force: {boolean} if TRUE - will ignore noWrap flag, else will
     *   return undefined if next slide require wrapping
     */
    findNextSlideIndex(direction, force) {
        let nextSlideIndex = 0;
        if (!force &&
            (this.isLast(this.activeSlide) &&
                direction !== Direction.PREV &&
                this.noWrap)) {
            return;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled
                // and need to going forward - select current slide, as a next
                if (typeof this._currentActiveSlide === 'undefined') {
                    nextSlideIndex = 0;
                    break;
                }
                if (!this.isLast(this._currentActiveSlide)) {
                    nextSlideIndex = this._currentActiveSlide + 1;
                    break;
                }
                nextSlideIndex = !force && this.noWrap ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled
                // and need to going backward - select current slide, as a next
                if (typeof this._currentActiveSlide === 'undefined') {
                    nextSlideIndex = 0;
                    break;
                }
                if (this._currentActiveSlide > 0) {
                    nextSlideIndex = this._currentActiveSlide - 1;
                    break;
                }
                if (!force && this.noWrap) {
                    nextSlideIndex = this._currentActiveSlide;
                    break;
                }
                nextSlideIndex = this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    mapSlidesAndIndexes() {
        return this.slides
            .slice()
            .map((slide, index) => {
            return {
                index,
                item: slide
            };
        });
    }
    selectSlideRange(index) {
        if (this.isIndexInRange(index)) {
            return;
        }
        this.hideSlides();
        if (!this.singleSlideOffset) {
            this.selectRangeByNestedIndex(index);
        }
        else {
            const startIndex = this.isIndexOnTheEdges(index)
                ? index
                : index - this.itemsPerSlide + 1;
            const endIndex = this.isIndexOnTheEdges(index)
                ? index + this.itemsPerSlide
                : index + 1;
            this._slidesWithIndexes = this.mapSlidesAndIndexes().slice(startIndex, endIndex);
            this.makeSlidesConsistent(this._slidesWithIndexes);
            this._slidesWithIndexes.forEach((slide) => slide.item.active = true);
        }
        this.slideRangeChange.emit(this.getVisibleIndexes());
    }
    selectRangeByNestedIndex(index) {
        if (!this._chunkedSlides) {
            return;
        }
        const selectedRange = this._chunkedSlides
            .map((slidesList, i) => {
            return {
                index: i,
                list: slidesList
            };
        })
            .find((slidesList) => {
            return slidesList.list.find(slide => slide.index === index) !== undefined;
        });
        if (!selectedRange) {
            return;
        }
        this._currentVisibleSlidesIndex = selectedRange.index;
        this._chunkedSlides[selectedRange.index].forEach((slide) => {
            slide.item.active = true;
        });
    }
    isIndexOnTheEdges(index) {
        return (index + 1 - this.itemsPerSlide <= 0 ||
            index + this.itemsPerSlide <= this._slides.length);
    }
    isIndexInRange(index) {
        if (this.singleSlideOffset && this._slidesWithIndexes) {
            const visibleIndexes = this._slidesWithIndexes.map((slide) => slide.index);
            return visibleIndexes.indexOf(index) >= 0;
        }
        return (index <= this.getLastVisibleIndex() &&
            index >= this.getFirstVisibleIndex());
    }
    hideSlides() {
        this.slides.forEach((slide) => slide.active = false);
    }
    isVisibleSlideListLast() {
        if (!this._chunkedSlides) {
            return false;
        }
        return this._currentVisibleSlidesIndex === this._chunkedSlides.length - 1;
    }
    isVisibleSlideListFirst() {
        return this._currentVisibleSlidesIndex === 0;
    }
    moveSliderByOneItem(direction) {
        let firstVisibleIndex;
        let lastVisibleIndex;
        let indexToHide;
        let indexToShow;
        if (this.noWrap) {
            firstVisibleIndex = this.getFirstVisibleIndex();
            lastVisibleIndex = this.getLastVisibleIndex();
            indexToHide = direction === Direction.NEXT
                ? firstVisibleIndex
                : lastVisibleIndex;
            indexToShow = direction !== Direction.NEXT
                ? firstVisibleIndex - 1
                : !this.isLast(lastVisibleIndex)
                    ? lastVisibleIndex + 1 : 0;
            const slideToHide = this._slides.get(indexToHide);
            if (slideToHide) {
                slideToHide.active = false;
            }
            const slideToShow = this._slides.get(indexToShow);
            if (slideToShow) {
                slideToShow.active = true;
            }
            const slidesToReorder = this.mapSlidesAndIndexes().filter((slide) => slide.item.active);
            this.makeSlidesConsistent(slidesToReorder);
            if (this.singleSlideOffset) {
                this._slidesWithIndexes = slidesToReorder;
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
            return;
        }
        if (!this._slidesWithIndexes || !this._slidesWithIndexes[0]) {
            return;
        }
        let index;
        firstVisibleIndex = this._slidesWithIndexes[0].index;
        lastVisibleIndex = this._slidesWithIndexes[this._slidesWithIndexes.length - 1].index;
        if (direction === Direction.NEXT) {
            this._slidesWithIndexes.shift();
            index = this.isLast(lastVisibleIndex)
                ? 0
                : lastVisibleIndex + 1;
            const item = this._slides.get(index);
            if (item) {
                this._slidesWithIndexes.push({ index, item });
            }
        }
        else {
            this._slidesWithIndexes.pop();
            index = this.isFirst(firstVisibleIndex)
                ? this._slides.length - 1
                : firstVisibleIndex - 1;
            const item = this._slides.get(index);
            if (item) {
                this._slidesWithIndexes = [{ index, item }, ...this._slidesWithIndexes];
            }
        }
        this.hideSlides();
        this._slidesWithIndexes.forEach(slide => slide.item.active = true);
        this.makeSlidesConsistent(this._slidesWithIndexes);
        this.slideRangeChange.emit(this._slidesWithIndexes.map((slide) => slide.index));
    }
    moveMultilist(direction) {
        if (this.singleSlideOffset) {
            this.moveSliderByOneItem(direction);
        }
        else {
            this.hideSlides();
            if (this.noWrap) {
                this._currentVisibleSlidesIndex = direction === Direction.NEXT
                    ? this._currentVisibleSlidesIndex + 1
                    : this._currentVisibleSlidesIndex - 1;
            }
            else if (direction === Direction.NEXT) {
                this._currentVisibleSlidesIndex = this.isVisibleSlideListLast()
                    ? 0
                    : this._currentVisibleSlidesIndex + 1;
            }
            else {
                if (this.isVisibleSlideListFirst()) {
                    this._currentVisibleSlidesIndex = this._chunkedSlides
                        ? this._chunkedSlides.length - 1
                        : 0;
                }
                else {
                    this._currentVisibleSlidesIndex = this._currentVisibleSlidesIndex - 1;
                }
            }
            if (this._chunkedSlides) {
                this._chunkedSlides[this._currentVisibleSlidesIndex].forEach((slide) => slide.item.active = true);
            }
            this.slideRangeChange.emit(this.getVisibleIndexes());
        }
    }
    getVisibleIndexes() {
        if (!this.singleSlideOffset && this._chunkedSlides) {
            return this._chunkedSlides[this._currentVisibleSlidesIndex]
                .map((slide) => slide.index);
        }
        if (this._slidesWithIndexes) {
            return this._slidesWithIndexes.map((slide) => slide.index);
        }
    }
    /**
     * Sets a slide, which specified through index, as active
     * @param index
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        if (!this.multilist && typeof this._currentActiveSlide !== 'undefined') {
            const currentSlide = this._slides.get(this._currentActiveSlide);
            if (typeof currentSlide !== 'undefined') {
                currentSlide.active = false;
            }
        }
        const nextSlide = this._slides.get(index);
        if (typeof nextSlide !== 'undefined') {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     */
    restartTimer() {
        this.resetTimer();
        const interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = this.ngZone.runOutsideAngular(() => {
                return window.setInterval(() => {
                    const nInterval = +this.interval;
                    this.ngZone.run(() => {
                        if (this.isPlaying &&
                            !isNaN(this.interval) &&
                            nInterval > 0 &&
                            this.slides.length) {
                            this.nextSlideFromInterval();
                        }
                        else {
                            this.pause();
                        }
                    });
                }, interval);
            });
        }
    }
    get multilist() {
        return this.itemsPerSlide > 1;
    }
    /**
     * Stops loop of auto changing of slides
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
    checkDisabledClass(buttonType) {
        if (buttonType === 'prev') {
            return (this.activeSlide === 0 && this.noWrap && !this.multilist) || (this.isFirstSlideVisible && this.noWrap && this.multilist);
        }
        return (this.isLast(this.activeSlide) && this.noWrap && !this.multilist) || (this.isLastSlideVisible && this.noWrap && this.multilist);
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(CarouselConfig), i0.ɵɵdirectiveInject(i0.NgZone)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["carousel"]], inputs: { noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus", indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", activeSlide: "activeSlide", startFromIndex: "startFromIndex", interval: "interval" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 7, vars: 8, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "id", "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], [4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", "aria-current", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-current", "true", 3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only visually-hidden", 4, "ngIf"], [1, "sr-only", "visually-hidden"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵlistener("mouseenter", function CarouselComponent_Template_div_mouseenter_0_listener() { return ctx.pause(); })("mouseleave", function CarouselComponent_Template_div_mouseleave_0_listener() { return ctx.onMouseLeave(); })("mouseup", function CarouselComponent_Template_div_mouseup_0_listener() { return ctx.onMouseUp(); })("keydown", function CarouselComponent_Template_div_keydown_0_listener($event) { return ctx.keydownPress($event); })("focusin", function CarouselComponent_Template_div_focusin_0_listener() { return ctx.pauseFocusIn(); })("focusout", function CarouselComponent_Template_div_focusout_0_listener() { return ctx.pauseFocusOut(); });
            i0.ɵɵtemplate(1, CarouselComponent_ng_container_1_Template, 3, 1, "ng-container", 1);
            i0.ɵɵtemplate(2, CarouselComponent_ng_container_2_Template, 3, 1, "ng-container", 1);
            i0.ɵɵelementStart(3, "div", 2);
            i0.ɵɵprojection(4);
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(5, CarouselComponent_a_5_Template, 3, 4, "a", 3);
            i0.ɵɵtemplate(6, CarouselComponent_a_6_Template, 4, 3, "a", 4);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵproperty("id", ctx.currentId);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", !ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c0$1, ctx.multilist ? "flex" : "block"));
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.slides.length > 1);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.slides.length > 1);
        }
    }, directives: [i2.NgIf, i2.NgStyle, i2.NgForOf], encapsulation: 2 });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
            type: Component,
            args: [{ selector: 'carousel', template: "<div (mouseenter)=\"pause()\"\r\n     (mouseleave)=\"onMouseLeave()\"\r\n     (mouseup)=\"onMouseUp()\"\r\n     (keydown)=\"keydownPress($event)\"\r\n     (focusin)=\"pauseFocusIn()\"\r\n     (focusout)=\"pauseFocusOut()\"\r\n     [id]=\"currentId\"\r\n     class=\"carousel slide\" tabindex=\"0\">\r\n  <ng-container *ngIf=\"!_bsVer.isBs5 && showIndicators && slides.length > 1\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\r\n          [class.active]=\"slide.active === true\"\r\n          (click)=\"selectSlide(i)\">\r\n      </li>\r\n    </ol>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"_bsVer.isBs5 && showIndicators && slides.length > 1\">\r\n    <div class=\"carousel-indicators\">\r\n      <button\r\n        *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\r\n        [class.active]=\"slide.active === true\"\r\n        (click)=\"selectSlide(i)\"\r\n        type=\"button\"\r\n        [attr.data-bs-target]=\"'#'+currentId\"\r\n        [attr.data-bs-slide-to]=\"i\" aria-current=\"true\"\r\n      >\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <a class=\"left carousel-control carousel-control-prev\"\r\n     *ngIf=\"slides.length > 1\"\r\n     [class.disabled]=\"checkDisabledClass('prev')\"\r\n     [attr.data-bs-target]=\"'#'+currentId\"\r\n     (click)=\"previousSlide()\"\r\n      tabindex=\"0\" role=\"button\">\r\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"isBs4\" class=\"sr-only visually-hidden\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control carousel-control-next\"\r\n     *ngIf=\"slides.length > 1\"\r\n     [class.disabled]=\"checkDisabledClass('next')\"\r\n     [attr.data-bs-target]=\"'#'+currentId\"\r\n     (click)=\"nextSlide()\"\r\n     tabindex=\"0\" role=\"button\">\r\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only visually-hidden\">Next</span>\r\n  </a>\r\n</div>\r\n" }]
        }], function () { return [{ type: CarouselConfig }, { type: i0.NgZone }]; }, { noWrap: [{
                type: Input
            }], noPause: [{
                type: Input
            }], showIndicators: [{
                type: Input
            }], pauseOnFocus: [{
                type: Input
            }], indicatorsByChunk: [{
                type: Input
            }], itemsPerSlide: [{
                type: Input
            }], singleSlideOffset: [{
                type: Input
            }], isAnimated: [{
                type: Input
            }], activeSlideChange: [{
                type: Output
            }], slideRangeChange: [{
                type: Output
            }], activeSlide: [{
                type: Input
            }], startFromIndex: [{
                type: Input
            }], interval: [{
                type: Input
            }] });
})();

const _c0 = ["*"];
class SlideComponent {
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
        var _a;
        this.carousel.addSlide(this);
        this.itemWidth = `${100 / this.carousel.itemsPerSlide}%`;
        this.multilist = ((_a = this.carousel) === null || _a === void 0 ? void 0 : _a.itemsPerSlide) > 1;
    }
    /** Fires changes in container collection after removing of this slide instance */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.ɵfac = function SlideComponent_Factory(t) { return new (t || SlideComponent)(i0.ɵɵdirectiveInject(CarouselComponent)); };
SlideComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SlideComponent, selectors: [["slide"]], hostVars: 15, hostBindings: function SlideComponent_HostBindings(rf, ctx) {
        if (rf & 2) {
            i0.ɵɵattribute("aria-hidden", !ctx.active);
            i0.ɵɵstyleProp("width", ctx.itemWidth)("order", ctx.order);
            i0.ɵɵclassProp("multilist-margin", ctx.multilist)("active", ctx.active)("carousel-animation", ctx.isAnimated)("item", ctx.addClass)("carousel-item", ctx.addClass);
        }
    }, inputs: { active: "active" }, ngContentSelectors: _c0, decls: 2, vars: 2, consts: [[1, "item"]], template: function SlideComponent_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵprojection(1);
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            i0.ɵɵclassProp("active", ctx.active);
        }
    }, styles: [".carousel-animation[_nghost-%COMP%]{transition:opacity .6s ease,visibility .6s ease;float:left}.carousel-animation.active[_nghost-%COMP%]{opacity:1;visibility:visible}.carousel-animation[_nghost-%COMP%]:not(.active){display:block;position:absolute;opacity:0;visibility:hidden}.multilist-margin[_nghost-%COMP%]{margin-right:auto}.carousel-item[_nghost-%COMP%]{perspective:1000px}"] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SlideComponent, [{
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
        }], function () { return [{ type: CarouselComponent }]; }, { active: [{
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
            }] });
})();

class CarouselModule {
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.ɵfac = function CarouselModule_Factory(t) { return new (t || CarouselModule)(); };
CarouselModule.ɵmod = /*@__PURE__*/ i0.ɵɵdefineNgModule({ type: CarouselModule });
CarouselModule.ɵinj = /*@__PURE__*/ i0.ɵɵdefineInjector({ imports: [[CommonModule]] });
(function () {
    (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselModule, [{
            type: NgModule,
            args: [{
                    imports: [CommonModule],
                    declarations: [SlideComponent, CarouselComponent],
                    exports: [SlideComponent, CarouselComponent]
                }]
        }], null, null);
})();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(CarouselModule, { declarations: [SlideComponent, CarouselComponent], imports: [CommonModule], exports: [SlideComponent, CarouselComponent] }); })();

/**
 * Generated bundle index. Do not edit.
 */

export { CarouselComponent, CarouselConfig, CarouselModule, SlideComponent };
//# sourceMappingURL=ngx-bootstrap-carousel.mjs.map
