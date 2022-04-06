/***
 * pause (not yet supported) (?string='hover') - event group name which pauses
 * the cycling of the carousel, if hover pauses on mouseenter and resumes on
 * mouseleave keyboard (not yet supported) (?boolean=true) - if false
 * carousel will not react to keyboard events
 * note: swiping not yet supported
 */
/****
 * Problems:
 * 1) if we set an active slide via model changes, .active class remains on a
 * current slide.
 * 2) if we have only one slide, we shouldn't show prev/next nav buttons
 * 3) if first or last slide is active and noWrap is true, there should be
 * "disabled" class on the nav buttons.
 * 4) default interval should be equal 5000
 */
import { Component, EventEmitter, Input, NgZone, Output } from '@angular/core';
import { isBs3, LinkedList, getBsVer } from 'ngx-bootstrap/utils';
import { CarouselConfig } from './carousel.config';
import { findLastIndex, chunkByNumber, isNumber } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "./carousel.config";
import * as i2 from "@angular/common";
function CarouselComponent_ng_container_1_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 7);
    i0.ɵɵlistener("click", function CarouselComponent_ng_container_1_li_2_Template_li_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r8); const i_r6 = restoredCtx.index; const ctx_r7 = i0.ɵɵnextContext(2); return ctx_r7.selectSlide(i_r6); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r5 = ctx.$implicit;
    i0.ɵɵclassProp("active", slide_r5.active === true);
} }
function CarouselComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ol", 5);
    i0.ɵɵtemplate(2, CarouselComponent_ng_container_1_li_2_Template, 1, 2, "li", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.indicatorsSlides());
} }
function CarouselComponent_ng_container_2_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 9);
    i0.ɵɵlistener("click", function CarouselComponent_ng_container_2_button_2_Template_button_click_0_listener() { const restoredCtx = i0.ɵɵrestoreView(_r13); const i_r11 = restoredCtx.index; const ctx_r12 = i0.ɵɵnextContext(2); return ctx_r12.selectSlide(i_r11); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const slide_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    const ctx_r9 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("active", slide_r10.active === true);
    i0.ɵɵattribute("data-bs-target", "#" + ctx_r9.currentId)("data-bs-slide-to", i_r11);
} }
function CarouselComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 5);
    i0.ɵɵtemplate(2, CarouselComponent_ng_container_2_button_2_Template, 1, 4, "button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.indicatorsSlides());
} }
function CarouselComponent_a_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1, "Previous");
    i0.ɵɵelementEnd();
} }
function CarouselComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 10);
    i0.ɵɵlistener("click", function CarouselComponent_a_5_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.previousSlide(); });
    i0.ɵɵelement(1, "span", 11);
    i0.ɵɵtemplate(2, CarouselComponent_a_5_span_2_Template, 2, 0, "span", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r2.checkDisabledClass("prev"));
    i0.ɵɵattribute("data-bs-target", "#" + ctx_r2.currentId);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.isBs4);
} }
function CarouselComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 14);
    i0.ɵɵlistener("click", function CarouselComponent_a_6_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.nextSlide(); });
    i0.ɵɵelement(1, "span", 15);
    i0.ɵɵelementStart(2, "span", 13);
    i0.ɵɵtext(3, "Next");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("disabled", ctx_r3.checkDisabledClass("next"));
    i0.ɵɵattribute("data-bs-target", "#" + ctx_r3.currentId);
} }
const _c0 = function (a0) { return { "display": a0 }; };
const _c1 = ["*"];
export var Direction;
(function (Direction) {
    Direction[Direction["UNKNOWN"] = 0] = "UNKNOWN";
    Direction[Direction["NEXT"] = 1] = "NEXT";
    Direction[Direction["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
let _currentId = 1;
/**
 * Base element to create carousel
 */
export class CarouselComponent {
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
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(i0.ɵɵdirectiveInject(i1.CarouselConfig), i0.ɵɵdirectiveInject(i0.NgZone)); };
CarouselComponent.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CarouselComponent, selectors: [["carousel"]], inputs: { noWrap: "noWrap", noPause: "noPause", showIndicators: "showIndicators", pauseOnFocus: "pauseOnFocus", indicatorsByChunk: "indicatorsByChunk", itemsPerSlide: "itemsPerSlide", singleSlideOffset: "singleSlideOffset", isAnimated: "isAnimated", activeSlide: "activeSlide", startFromIndex: "startFromIndex", interval: "interval" }, outputs: { activeSlideChange: "activeSlideChange", slideRangeChange: "slideRangeChange" }, ngContentSelectors: _c1, decls: 7, vars: 8, consts: [["tabindex", "0", 1, "carousel", "slide", 3, "id", "mouseenter", "mouseleave", "mouseup", "keydown", "focusin", "focusout"], [4, "ngIf"], [1, "carousel-inner", 3, "ngStyle"], ["class", "left carousel-control carousel-control-prev", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "right carousel-control carousel-control-next", "tabindex", "0", "role", "button", 3, "disabled", "click", 4, "ngIf"], [1, "carousel-indicators"], [3, "active", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "button", "aria-current", "true", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", "aria-current", "true", 3, "click"], ["tabindex", "0", "role", "button", 1, "left", "carousel-control", "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "icon-prev", "carousel-control-prev-icon"], ["class", "sr-only visually-hidden", 4, "ngIf"], [1, "sr-only", "visually-hidden"], ["tabindex", "0", "role", "button", 1, "right", "carousel-control", "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "icon-next", "carousel-control-next-icon"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        i0.ɵɵproperty("id", ctx.currentId);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", !ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx._bsVer.isBs5 && ctx.showIndicators && ctx.slides.length > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(6, _c0, ctx.multilist ? "flex" : "block"));
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.slides.length > 1);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.slides.length > 1);
    } }, directives: [i2.NgIf, i2.NgStyle, i2.NgForOf], encapsulation: 2 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CarouselComponent, [{
        type: Component,
        args: [{ selector: 'carousel', template: "<div (mouseenter)=\"pause()\"\r\n     (mouseleave)=\"onMouseLeave()\"\r\n     (mouseup)=\"onMouseUp()\"\r\n     (keydown)=\"keydownPress($event)\"\r\n     (focusin)=\"pauseFocusIn()\"\r\n     (focusout)=\"pauseFocusOut()\"\r\n     [id]=\"currentId\"\r\n     class=\"carousel slide\" tabindex=\"0\">\r\n  <ng-container *ngIf=\"!_bsVer.isBs5 && showIndicators && slides.length > 1\">\r\n    <ol class=\"carousel-indicators\">\r\n      <li *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\r\n          [class.active]=\"slide.active === true\"\r\n          (click)=\"selectSlide(i)\">\r\n      </li>\r\n    </ol>\r\n  </ng-container>\r\n  <ng-container *ngIf=\"_bsVer.isBs5 && showIndicators && slides.length > 1\">\r\n    <div class=\"carousel-indicators\">\r\n      <button\r\n        *ngFor=\"let slide of indicatorsSlides(); let i = index;\"\r\n        [class.active]=\"slide.active === true\"\r\n        (click)=\"selectSlide(i)\"\r\n        type=\"button\"\r\n        [attr.data-bs-target]=\"'#'+currentId\"\r\n        [attr.data-bs-slide-to]=\"i\" aria-current=\"true\"\r\n      >\r\n      </button>\r\n    </div>\r\n  </ng-container>\r\n  <div class=\"carousel-inner\" [ngStyle]=\"{'display': multilist ? 'flex' : 'block'}\">\r\n    <ng-content></ng-content>\r\n  </div>\r\n  <a class=\"left carousel-control carousel-control-prev\"\r\n     *ngIf=\"slides.length > 1\"\r\n     [class.disabled]=\"checkDisabledClass('prev')\"\r\n     [attr.data-bs-target]=\"'#'+currentId\"\r\n     (click)=\"previousSlide()\"\r\n      tabindex=\"0\" role=\"button\">\r\n    <span class=\"icon-prev carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span *ngIf=\"isBs4\" class=\"sr-only visually-hidden\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control carousel-control-next\"\r\n     *ngIf=\"slides.length > 1\"\r\n     [class.disabled]=\"checkDisabledClass('next')\"\r\n     [attr.data-bs-target]=\"'#'+currentId\"\r\n     (click)=\"nextSlide()\"\r\n     tabindex=\"0\" role=\"button\">\r\n    <span class=\"icon-next carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only visually-hidden\">Next</span>\r\n  </a>\r\n</div>\r\n" }]
    }], function () { return [{ type: i1.CarouselConfig }, { type: i0.NgZone }]; }, { noWrap: [{
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
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2Nhcm91c2VsL2Nhcm91c2VsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uL3NyYy9jYXJvdXNlbC9jYXJvdXNlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSDs7Ozs7Ozs7R0FRRztBQUVILE9BQU8sRUFDTCxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQWEsTUFBTSxFQUMxRCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQWMsTUFBTSxxQkFBcUIsQ0FBQztBQUU5RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLE1BQU0sU0FBUyxDQUFDOzs7Ozs7SUNkM0QsNkJBRTZCO0lBQXpCLDZOQUFTLHdCQUFjLElBQUM7SUFDNUIsaUJBQUs7OztJQUZELGtEQUFzQzs7O0lBSDlDLDZCQUEyRTtJQUN6RSw2QkFBZ0M7SUFDOUIsK0VBR0s7SUFDUCxpQkFBSztJQUNQLDBCQUFlOzs7SUFMVyxlQUF1QjtJQUF2QixtREFBdUI7Ozs7SUFRN0MsaUNBT0M7SUFKQyx3T0FBUywwQkFBYyxJQUFDO0lBSzFCLGlCQUFTOzs7OztJQU5QLG1EQUFzQztJQUd0Qyx3REFBcUMsMkJBQUE7OztJQVAzQyw2QkFBMEU7SUFDeEUsOEJBQWlDO0lBQy9CLHVGQVFTO0lBQ1gsaUJBQU07SUFDUiwwQkFBZTs7O0lBVFMsZUFBdUI7SUFBdkIsbURBQXVCOzs7SUFvQjdDLGdDQUFvRDtJQUFBLHdCQUFRO0lBQUEsaUJBQU87Ozs7SUFQckUsNkJBSytCO0lBRDVCLHlKQUFTLHVCQUFlLElBQUM7SUFFMUIsMkJBQTZFO0lBQzdFLHlF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c2UgKG5vdCB5ZXQgc3VwcG9ydGVkKSAoP3N0cmluZz0naG92ZXInKSAtIGV2ZW50IGdyb3VwIG5hbWUgd2hpY2ggcGF1c2VzXHJcbiAqIHRoZSBjeWNsaW5nIG9mIHRoZSBjYXJvdXNlbCwgaWYgaG92ZXIgcGF1c2VzIG9uIG1vdXNlZW50ZXIgYW5kIHJlc3VtZXMgb25cclxuICogbW91c2VsZWF2ZSBrZXlib2FyZCAobm90IHlldCBzdXBwb3J0ZWQpICg/Ym9vbGVhbj10cnVlKSAtIGlmIGZhbHNlXHJcbiAqIGNhcm91c2VsIHdpbGwgbm90IHJlYWN0IHRvIGtleWJvYXJkIGV2ZW50c1xyXG4gKiBub3RlOiBzd2lwaW5nIG5vdCB5ZXQgc3VwcG9ydGVkXHJcbiAqL1xyXG4vKioqKlxyXG4gKiBQcm9ibGVtczpcclxuICogMSkgaWYgd2Ugc2V0IGFuIGFjdGl2ZSBzbGlkZSB2aWEgbW9kZWwgY2hhbmdlcywgLmFjdGl2ZSBjbGFzcyByZW1haW5zIG9uIGFcclxuICogY3VycmVudCBzbGlkZS5cclxuICogMikgaWYgd2UgaGF2ZSBvbmx5IG9uZSBzbGlkZSwgd2Ugc2hvdWxkbid0IHNob3cgcHJldi9uZXh0IG5hdiBidXR0b25zXHJcbiAqIDMpIGlmIGZpcnN0IG9yIGxhc3Qgc2xpZGUgaXMgYWN0aXZlIGFuZCBub1dyYXAgaXMgdHJ1ZSwgdGhlcmUgc2hvdWxkIGJlXHJcbiAqIFwiZGlzYWJsZWRcIiBjbGFzcyBvbiB0aGUgbmF2IGJ1dHRvbnMuXHJcbiAqIDQpIGRlZmF1bHQgaW50ZXJ2YWwgc2hvdWxkIGJlIGVxdWFsIDUwMDBcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3ksIE91dHB1dCwgQWZ0ZXJWaWV3SW5pdFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNCczMsIExpbmtlZExpc3QsIGdldEJzVmVyLCBJQnNWZXJzaW9uIH0gZnJvbSAnbmd4LWJvb3RzdHJhcC91dGlscyc7XHJcbmltcG9ydCB7IFNsaWRlQ29tcG9uZW50IH0gZnJvbSAnLi9zbGlkZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYXJvdXNlbENvbmZpZyB9IGZyb20gJy4vY2Fyb3VzZWwuY29uZmlnJztcclxuaW1wb3J0IHsgZmluZExhc3RJbmRleCwgY2h1bmtCeU51bWJlciwgaXNOdW1iZXIgfSBmcm9tICcuL3V0aWxzJztcclxuaW1wb3J0IHsgU2xpZGVXaXRoSW5kZXgsIEluZGV4ZWRTbGlkZUxpc3QgfSBmcm9tICcuL21vZGVscyc7XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gIFVOS05PV04sXHJcbiAgTkVYVCxcclxuICBQUkVWXHJcbn1cclxuXHJcbmxldCBfY3VycmVudElkID0gMTtcclxuXHJcbi8qKlxyXG4gKiBCYXNlIGVsZW1lbnQgdG8gY3JlYXRlIGNhcm91c2VsXHJcbiAqL1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2Nhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgLyogSWYgYHRydWVgIOKAlCBjYXJvdXNlbCB3aWxsIG5vdCBjeWNsZSBjb250aW51b3VzbHkgYW5kIHdpbGwgaGF2ZSBoYXJkIHN0b3BzIChwcmV2ZW50IGxvb3BpbmcpICovXHJcbiAgQElucHV0KCkgbm9XcmFwID0gZmFsc2U7XHJcbiAgLyogIElmIGB0cnVlYCDigJQgd2lsbCBkaXNhYmxlIHBhdXNpbmcgb24gY2Fyb3VzZWwgbW91c2UgaG92ZXIgKi9cclxuICBASW5wdXQoKSBub1BhdXNlID0gZmFsc2U7XHJcbiAgLyogIElmIGB0cnVlYCDigJQgY2Fyb3VzZWwtaW5kaWNhdG9ycyBhcmUgdmlzaWJsZSAgKi9cclxuICBASW5wdXQoKSBzaG93SW5kaWNhdG9ycyA9IHRydWU7XHJcbiAgLyogIElmIGB0cnVlYCAtIGF1dG9wbGF5IHdpbGwgYmUgc3RvcHBlZCBvbiBmb2N1cyAqL1xyXG4gIEBJbnB1dCgpIHBhdXNlT25Gb2N1cyA9IGZhbHNlO1xyXG4gIC8qIElmIGB0cnVlYCAtIGNhcm91c2VsIGluZGljYXRvcnMgaW5kaWNhdGUgc2xpZGVzIGNodW5rc1xyXG4gICAgIHdvcmtzIE9OTFkgaWYgc2luZ2xlU2xpZGVPZmZzZXQgPSBGQUxTRSAqL1xyXG4gIEBJbnB1dCgpIGluZGljYXRvcnNCeUNodW5rID0gZmFsc2U7XHJcbiAgLyogSWYgdmFsdWUgbW9yZSB0aGVuIDEg4oCUIGNhcm91c2VsIHdvcmtzIGluIG11bHRpbGlzdCBtb2RlICovXHJcbiAgQElucHV0KCkgaXRlbXNQZXJTbGlkZSA9IDE7XHJcbiAgLyogSWYgYHRydWVgIOKAlCBjYXJvdXNlbCBzaGlmdHMgYnkgb25lIGVsZW1lbnQuIEJ5IGRlZmF1bHQgY2Fyb3VzZWwgc2hpZnRzIGJ5IG51bWJlclxyXG4gICAgIG9mIHZpc2libGUgZWxlbWVudHMgKGl0ZW1zUGVyU2xpZGUgZmllbGQpICovXHJcbiAgQElucHV0KCkgc2luZ2xlU2xpZGVPZmZzZXQgPSBmYWxzZTtcclxuICAvKiogVHVybiBvbi9vZmYgYW5pbWF0aW9uLiBBbmltYXRpb24gZG9lc24ndCB3b3JrIGZvciBtdWx0aWxpc3QgY2Fyb3VzZWwgKi9cclxuICBASW5wdXQoKSBpc0FuaW1hdGVkID0gZmFsc2U7XHJcblxyXG4gIC8qKiBXaWxsIGJlIGVtaXR0ZWQgd2hlbiBhY3RpdmUgc2xpZGUgaGFzIGJlZW4gY2hhbmdlZC4gUGFydCBvZiB0d28td2F5LWJpbmRhYmxlIFsoYWN0aXZlU2xpZGUpXSBwcm9wZXJ0eSAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIGFjdGl2ZVNsaWRlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KGZhbHNlKTtcclxuXHJcbiAgLyoqIFdpbGwgYmUgZW1pdHRlZCB3aGVuIGFjdGl2ZSBzbGlkZXMgaGFzIGJlZW4gY2hhbmdlZCBpbiBtdWx0aWxpc3QgbW9kZSAqL1xyXG4gIEBPdXRwdXQoKVxyXG4gIHNsaWRlUmFuZ2VDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcltdfHZvaWQ+KCk7XHJcblxyXG4gIC8qKiBJbmRleCBvZiBjdXJyZW50bHkgZGlzcGxheWVkIHNsaWRlKHN0YXJ0ZWQgZm9yIDApICovXHJcbiAgQElucHV0KClcclxuICBzZXQgYWN0aXZlU2xpZGUoaW5kZXg6IG51bWJlcikge1xyXG4gICAgaWYgKHRoaXMubXVsdGlsaXN0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaXNOdW1iZXIoaW5kZXgpKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2xpZGVzLmxlbmd0aCAmJiBpbmRleCAhPT0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlKSB7XHJcbiAgICAgIHRoaXMuX3NlbGVjdChpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgYWN0aXZlU2xpZGUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgfHwgMDtcclxuICB9XHJcblxyXG4gIC8qIEluZGV4IHRvIHN0YXJ0IGRpc3BsYXkgc2xpZGVzIGZyb20gaXQgKi9cclxuICBASW5wdXQoKVxyXG4gIHN0YXJ0RnJvbUluZGV4ID0gMDtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVsYXkgb2YgaXRlbSBjeWNsaW5nIGluIG1pbGxpc2Vjb25kcy4gSWYgZmFsc2UsIGNhcm91c2VsIHdvbid0IGN5Y2xlXHJcbiAgICogYXV0b21hdGljYWxseS5cclxuICAgKi9cclxuICBASW5wdXQoKVxyXG4gIGdldCBpbnRlcnZhbCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgc2V0IGludGVydmFsKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2ludGVydmFsID0gdmFsdWU7XHJcbiAgICB0aGlzLnJlc3RhcnRUaW1lcigpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHNsaWRlcygpOiBTbGlkZUNvbXBvbmVudFtdIHtcclxuICAgIHJldHVybiB0aGlzLl9zbGlkZXMudG9BcnJheSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRmlyc3RTbGlkZVZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICBjb25zdCBpbmRleGVzID0gdGhpcy5nZXRWaXNpYmxlSW5kZXhlcygpO1xyXG4gICAgaWYgKCFpbmRleGVzIHx8IChpbmRleGVzIGluc3RhbmNlb2YgQXJyYXkgJiYgIWluZGV4ZXMubGVuZ3RoKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGluZGV4ZXMuaW5jbHVkZXMoMCk7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNMYXN0U2xpZGVWaXNpYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaW5kZXhlcyA9IHRoaXMuZ2V0VmlzaWJsZUluZGV4ZXMoKTtcclxuICAgIGlmICghaW5kZXhlcyB8fCAoaW5kZXhlcyBpbnN0YW5jZW9mIEFycmF5ICYmICFpbmRleGVzLmxlbmd0aCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBpbmRleGVzLmluY2x1ZGVzKHRoaXMuX3NsaWRlcy5sZW5ndGggLTEpO1xyXG4gIH1cclxuXHJcbiAgcHJvdGVjdGVkIGN1cnJlbnRJbnRlcnZhbD86IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2N1cnJlbnRBY3RpdmVTbGlkZT86IG51bWJlcjtcclxuICBwcm90ZWN0ZWQgX2ludGVydmFsID0gNTAwMDtcclxuICBwcm90ZWN0ZWQgX3NsaWRlczogTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4gPSBuZXcgTGlua2VkTGlzdDxTbGlkZUNvbXBvbmVudD4oKTtcclxuICBwcm90ZWN0ZWQgX2NodW5rZWRTbGlkZXM/OiBTbGlkZVdpdGhJbmRleFtdW107XHJcbiAgcHJvdGVjdGVkIF9zbGlkZXNXaXRoSW5kZXhlcz86IFNsaWRlV2l0aEluZGV4W107XHJcbiAgcHJvdGVjdGVkIF9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID0gMDtcclxuICBwcm90ZWN0ZWQgaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgcHJvdGVjdGVkIGRlc3Ryb3llZCA9IGZhbHNlO1xyXG4gIHByaXZhdGUgY3VzdG9tQWN0aXZlU2xpZGU/OiBudW1iZXI7XHJcbiAgY3VycmVudElkID0gMDtcclxuXHJcbiAgZ2V0IGlzQnM0KCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuICFpc0JzMygpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IF9ic1ZlcigpOiBJQnNWZXJzaW9uIHtcclxuICAgIHJldHVybiBnZXRCc1ZlcigpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDYXJvdXNlbENvbmZpZywgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSkge1xyXG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG4gICAgdGhpcy5jdXJyZW50SWQgPSBfY3VycmVudElkKys7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgaWYgKHRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcclxuICAgICAgICB0aGlzLmluZGljYXRvcnNCeUNodW5rID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubXVsdGlsaXN0KSB7XHJcbiAgICAgICAgdGhpcy5fY2h1bmtlZFNsaWRlcyA9IGNodW5rQnlOdW1iZXIoXHJcbiAgICAgICAgICB0aGlzLm1hcFNsaWRlc0FuZEluZGV4ZXMoKSxcclxuICAgICAgICAgIHRoaXMuaXRlbXNQZXJTbGlkZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RJbml0aWFsU2xpZGVzKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmN1c3RvbUFjdGl2ZVNsaWRlICYmICF0aGlzLm11bHRpbGlzdCkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdCh0aGlzLmN1c3RvbUFjdGl2ZVNsaWRlKTtcclxuICAgICAgfVxyXG4gICAgfSwgMCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgbmV3IHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGZpcnN0IGluIGNvbGxlY3Rpb24gLSBzZXQgaXQgYXMgYWN0aXZlXHJcbiAgICogYW5kIHN0YXJ0cyBhdXRvIGNoYW5naW5nXHJcbiAgICogQHBhcmFtIHNsaWRlXHJcbiAgICovXHJcbiAgYWRkU2xpZGUoc2xpZGU6IFNsaWRlQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLl9zbGlkZXMuYWRkKHNsaWRlKTtcclxuXHJcbiAgICBpZiAodGhpcy5tdWx0aWxpc3QgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA8PSB0aGlzLml0ZW1zUGVyU2xpZGUpIHtcclxuICAgICAgc2xpZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubXVsdGlsaXN0ICYmIHRoaXMuaXNBbmltYXRlZCkge1xyXG4gICAgICBzbGlkZS5pc0FuaW1hdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubXVsdGlsaXN0ICYmIHRoaXMuX3NsaWRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlID0gdW5kZWZpbmVkO1xyXG4gICAgICBpZiAoIXRoaXMuY3VzdG9tQWN0aXZlU2xpZGUpIHtcclxuICAgICAgICB0aGlzLmFjdGl2ZVNsaWRlID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5tdWx0aWxpc3QgJiYgdGhpcy5fc2xpZGVzLmxlbmd0aCA+IHRoaXMuaXRlbXNQZXJTbGlkZSkge1xyXG4gICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgc3BlY2lmaWVkIHNsaWRlLiBJZiB0aGlzIHNsaWRlIGlzIGFjdGl2ZSAtIHdpbGwgcm9sbCB0byBhbm90aGVyXHJcbiAgICogc2xpZGVcclxuICAgKiBAcGFyYW0gc2xpZGVcclxuICAgKi9cclxuICByZW1vdmVTbGlkZShzbGlkZTogU2xpZGVDb21wb25lbnQpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJlbUluZGV4ID0gdGhpcy5fc2xpZGVzLmluZGV4T2Yoc2xpZGUpO1xyXG5cclxuICAgIGlmICh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPT09IHJlbUluZGV4KSB7XHJcbiAgICAgIC8vIHJlbW92aW5nIG9mIGFjdGl2ZSBzbGlkZVxyXG4gICAgICBsZXQgbmV4dFNsaWRlSW5kZXg6IG51bWJlcjtcclxuICAgICAgaWYgKHRoaXMuX3NsaWRlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgLy8gaWYgdGhpcyBzbGlkZSBsYXN0IC0gd2lsbCByb2xsIHRvIGZpcnN0IHNsaWRlLCBpZiBub1dyYXAgZmxhZyBpc1xyXG4gICAgICAgIC8vIEZBTFNFIG9yIHRvIHByZXZpb3VzLCBpZiBub1dyYXAgaXMgVFJVRSBpbiBjYXNlLCBpZiB0aGlzIHNsaWRlIGluXHJcbiAgICAgICAgLy8gbWlkZGxlIG9mIGNvbGxlY3Rpb24sIGluZGV4IG9mIG5leHQgc2xpZGUgaXMgc2FtZSB0byByZW1vdmVkXHJcbiAgICAgICAgbmV4dFNsaWRlSW5kZXggPSAhdGhpcy5pc0xhc3QocmVtSW5kZXgpXHJcbiAgICAgICAgICA/IHJlbUluZGV4XHJcbiAgICAgICAgICA6IHRoaXMubm9XcmFwID8gcmVtSW5kZXggLSAxIDogMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcclxuXHJcbiAgICAgIC8vIHByZXZlbnRzIGV4Y2VwdGlvbiB3aXRoIGNoYW5naW5nIHNvbWUgdmFsdWUgYWZ0ZXIgY2hlY2tpbmdcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5fc2VsZWN0KG5leHRTbGlkZUluZGV4KTtcclxuICAgICAgfSwgMCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9zbGlkZXMucmVtb3ZlKHJlbUluZGV4KTtcclxuICAgICAgY29uc3QgY3VycmVudFNsaWRlSW5kZXggPSB0aGlzLmdldEN1cnJlbnRTbGlkZUluZGV4KCk7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIC8vIGFmdGVyIHJlbW92aW5nLCBuZWVkIHRvIGFjdHVhbGl6ZSBpbmRleCBvZiBjdXJyZW50IGFjdGl2ZSBzbGlkZVxyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9IGN1cnJlbnRTbGlkZUluZGV4O1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU2xpZGVDaGFuZ2UuZW1pdCh0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5leHRTbGlkZUZyb21JbnRlcnZhbChmb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vdmUoRGlyZWN0aW9uLk5FWFQsIGZvcmNlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJvbGxpbmcgdG8gbmV4dCBzbGlkZVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xyXG4gICAqL1xyXG4gIG5leHRTbGlkZShmb3JjZSA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuICAgIHRoaXMubW92ZShEaXJlY3Rpb24uTkVYVCwgZm9yY2UpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUm9sbGluZyB0byBwcmV2aW91cyBzbGlkZVxyXG4gICAqIEBwYXJhbSBmb3JjZToge2Jvb2xlYW59IGlmIHRydWUgLSB3aWxsIGlnbm9yZSBub1dyYXAgZmxhZ1xyXG4gICAqL1xyXG4gIHByZXZpb3VzU2xpZGUoZm9yY2UgPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgIHRoaXMucmVzdGFydFRpbWVyKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1vdmUoRGlyZWN0aW9uLlBSRVYsIGZvcmNlKTtcclxuICB9XHJcblxyXG4gIGdldEZpcnN0VmlzaWJsZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMuZmluZEluZGV4KHRoaXMuZ2V0QWN0aXZlKTtcclxuICB9XHJcblxyXG4gIGdldExhc3RWaXNpYmxlSW5kZXgoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiBmaW5kTGFzdEluZGV4KHRoaXMuc2xpZGVzLCB0aGlzLmdldEFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBnZXRBY3RpdmUgPSAoc2xpZGU6IFNsaWRlQ29tcG9uZW50KSA9PiBzbGlkZS5hY3RpdmU7XHJcblxyXG4gIG1vdmUoZGlyZWN0aW9uOiBEaXJlY3Rpb24sIGZvcmNlID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIGNvbnN0IGZpcnN0VmlzaWJsZUluZGV4ID0gdGhpcy5nZXRGaXJzdFZpc2libGVJbmRleCgpO1xyXG4gICAgY29uc3QgbGFzdFZpc2libGVJbmRleCA9IHRoaXMuZ2V0TGFzdFZpc2libGVJbmRleCgpO1xyXG5cclxuICAgIGlmICh0aGlzLm5vV3JhcCkge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uTkVYVCAmJlxyXG4gICAgICAgIHRoaXMuaXNMYXN0KGxhc3RWaXNpYmxlSW5kZXgpIHx8XHJcbiAgICAgICAgZGlyZWN0aW9uID09PSBEaXJlY3Rpb24uUFJFViAmJlxyXG4gICAgICAgIGZpcnN0VmlzaWJsZUluZGV4ID09PSAwXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmICghdGhpcy5tdWx0aWxpc3QpIHtcclxuICAgICAgdGhpcy5hY3RpdmVTbGlkZSA9IHRoaXMuZmluZE5leHRTbGlkZUluZGV4KGRpcmVjdGlvbiwgZm9yY2UpIHx8IDA7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vdmVNdWx0aWxpc3QoZGlyZWN0aW9uKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN3aXRoIHNsaWRlcyBieSBlbnRlciwgc3BhY2UgYW5kIGFycm93cyBrZXlzXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAga2V5ZG93blByZXNzKGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMgfHwgZXZlbnQua2V5ID09PSAnRW50ZXInIHx8IGV2ZW50LmtleUNvZGUgPT09IDMyIHx8IGV2ZW50LmtleSA9PT0gJ1NwYWNlJykge1xyXG4gICAgICB0aGlzLm5leHRTbGlkZSgpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzNyB8fCBldmVudC5rZXkgPT09ICdMZWZ0QXJyb3cnKSB7XHJcbiAgICAgIHRoaXMucHJldmlvdXNTbGlkZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChldmVudC5rZXlDb2RlID09PSAzOSB8fCBldmVudC5rZXkgPT09ICdSaWdodEFycm93Jykge1xyXG4gICAgICB0aGlzLm5leHRTbGlkZSgpO1xyXG5cclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxheSBvbiBtb3VzZSBsZWF2ZVxyXG4gICAqIEBpbnRlcm5hbFxyXG4gICAqL1xyXG4gIG9uTW91c2VMZWF2ZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5wYXVzZU9uRm9jdXMpIHtcclxuICAgICAgdGhpcy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQbGF5IG9uIG1vdXNlIHVwXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgb25Nb3VzZVVwKCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnBhdXNlT25Gb2N1cykge1xyXG4gICAgICB0aGlzLnBsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZW4gc2xpZGVzIG9uIGZvY3VzIGF1dG9wbGF5IGlzIHN0b3BwZWQob3B0aW9uYWwpXHJcbiAgICogQGludGVybmFsXHJcbiAgICovXHJcbiAgcGF1c2VGb2N1c0luKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMucGF1c2VPbkZvY3VzKSB7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiBzbGlkZXMgb3V0IG9mIGZvY3VzIGF1dG9wbGF5IGlzIHN0YXJ0ZWRcclxuICAgKiBAaW50ZXJuYWxcclxuICAgKi9cclxuICBwYXVzZUZvY3VzT3V0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSb2xsaW5nIHRvIHNwZWNpZmllZCBzbGlkZVxyXG4gICAqIEBwYXJhbSBpbmRleDoge251bWJlcn0gaW5kZXggb2Ygc2xpZGUsIHdoaWNoIG11c3QgYmUgc2hvd25cclxuICAgKi9cclxuICBzZWxlY3RTbGlkZShpbmRleDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1BsYXlpbmcpIHtcclxuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMubXVsdGlsaXN0KSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSB0aGlzLmluZGljYXRvcnNCeUNodW5rID8gaW5kZXggKiB0aGlzLml0ZW1zUGVyU2xpZGUgOiBpbmRleDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0U2xpZGVSYW5nZSh0aGlzLmluZGljYXRvcnNCeUNodW5rID8gaW5kZXggKiB0aGlzLml0ZW1zUGVyU2xpZGUgOiBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgYSBhdXRvIGNoYW5naW5nIG9mIHNsaWRlc1xyXG4gICAqL1xyXG4gIHBsYXkoKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuaXNQbGF5aW5nKSB7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5yZXN0YXJ0VGltZXIoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIGEgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwYXVzZSgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy5ub1BhdXNlKSB7XHJcbiAgICAgIHRoaXMuaXNQbGF5aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzZXRUaW1lcigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZHMgYW5kIHJldHVybnMgaW5kZXggb2YgY3VycmVudGx5IGRpc3BsYXllZCBzbGlkZVxyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRTbGlkZUluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2xpZGVzLmZpbmRJbmRleCh0aGlzLmdldEFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmVzLCB3aGV0aGVyIHRoZSBzcGVjaWZpZWQgaW5kZXggaXMgbGFzdCBpbiBjb2xsZWN0aW9uXHJcbiAgICogQHBhcmFtIGluZGV4XHJcbiAgICovXHJcbiAgaXNMYXN0KGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBpbmRleCArIDEgPj0gdGhpcy5fc2xpZGVzLmxlbmd0aDtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMsIHdoZXRoZXIgdGhlIHNwZWNpZmllZCBpbmRleCBpcyBmaXJzdCBpbiBjb2xsZWN0aW9uXHJcbiAgICogQHBhcmFtIGluZGV4XHJcbiAgICovXHJcbiAgaXNGaXJzdChpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IDA7XHJcbiAgfVxyXG5cclxuICBpbmRpY2F0b3JzU2xpZGVzKCk6IFNsaWRlQ29tcG9uZW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmZpbHRlcihcclxuICAgICAgKHNsaWRlOiBTbGlkZUNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4gIXRoaXMuaW5kaWNhdG9yc0J5Q2h1bmsgfHwgaW5kZXggJSB0aGlzLml0ZW1zUGVyU2xpZGUgPT09IDBcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNlbGVjdEluaXRpYWxTbGlkZXMoKTogdm9pZCB7XHJcbiAgICBjb25zdCBzdGFydEluZGV4ID0gdGhpcy5zdGFydEZyb21JbmRleCA8PSB0aGlzLl9zbGlkZXMubGVuZ3RoXHJcbiAgICAgID8gdGhpcy5zdGFydEZyb21JbmRleFxyXG4gICAgICA6IDA7XHJcblxyXG4gICAgdGhpcy5oaWRlU2xpZGVzKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcclxuICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMgPSB0aGlzLm1hcFNsaWRlc0FuZEluZGV4ZXMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9zbGlkZXMubGVuZ3RoIC0gc3RhcnRJbmRleCA8IHRoaXMuaXRlbXNQZXJTbGlkZSkge1xyXG4gICAgICAgIGNvbnN0IHNsaWRlc1RvQXBwZW5kID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuc2xpY2UoMCwgc3RhcnRJbmRleCk7XHJcblxyXG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gW1xyXG4gICAgICAgICAgLi4udGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMsXHJcbiAgICAgICAgICAuLi5zbGlkZXNUb0FwcGVuZFxyXG4gICAgICAgIF1cclxuICAgICAgICAgIC5zbGljZShzbGlkZXNUb0FwcGVuZC5sZW5ndGgpXHJcbiAgICAgICAgICAuc2xpY2UoMCwgdGhpcy5pdGVtc1BlclNsaWRlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcyA9IHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLnNsaWNlKFxyXG4gICAgICAgICAgc3RhcnRJbmRleCxcclxuICAgICAgICAgIHN0YXJ0SW5kZXggKyB0aGlzLml0ZW1zUGVyU2xpZGVcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5mb3JFYWNoKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLml0ZW0uYWN0aXZlID0gdHJ1ZSk7XHJcbiAgICAgIHRoaXMubWFrZVNsaWRlc0NvbnNpc3RlbnQodGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZWxlY3RSYW5nZUJ5TmVzdGVkSW5kZXgoc3RhcnRJbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zbGlkZVJhbmdlQ2hhbmdlLmVtaXQodGhpcy5nZXRWaXNpYmxlSW5kZXhlcygpKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlZmluZXMgbmV4dCBzbGlkZSBpbmRleCwgZGVwZW5kaW5nIG9mIGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSBkaXJlY3Rpb246IERpcmVjdGlvbihVTktOT1dOfFBSRVZ8TkVYVClcclxuICAgKiBAcGFyYW0gZm9yY2U6IHtib29sZWFufSBpZiBUUlVFIC0gd2lsbCBpZ25vcmUgbm9XcmFwIGZsYWcsIGVsc2Ugd2lsbFxyXG4gICAqICAgcmV0dXJuIHVuZGVmaW5lZCBpZiBuZXh0IHNsaWRlIHJlcXVpcmUgd3JhcHBpbmdcclxuICAgKi9cclxuICBwcml2YXRlIGZpbmROZXh0U2xpZGVJbmRleChkaXJlY3Rpb246IERpcmVjdGlvbiwgZm9yY2U6IGJvb2xlYW4pOiBudW1iZXIgfCB2b2lkIHtcclxuICAgIGxldCBuZXh0U2xpZGVJbmRleCA9IDA7XHJcblxyXG4gICAgaWYgKFxyXG4gICAgICAhZm9yY2UgJiZcclxuICAgICAgKHRoaXMuaXNMYXN0KHRoaXMuYWN0aXZlU2xpZGUpICYmXHJcbiAgICAgICAgZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uUFJFViAmJlxyXG4gICAgICAgIHRoaXMubm9XcmFwKVxyXG4gICAgKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xyXG4gICAgICBjYXNlIERpcmVjdGlvbi5ORVhUOlxyXG4gICAgICAgIC8vIGlmIHRoaXMgaXMgbGFzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXHJcbiAgICAgICAgLy8gYW5kIG5lZWQgdG8gZ29pbmcgZm9yd2FyZCAtIHNlbGVjdCBjdXJyZW50IHNsaWRlLCBhcyBhIG5leHRcclxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIG5leHRTbGlkZUluZGV4ID0gMDtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuaXNMYXN0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSkpIHtcclxuICAgICAgICAgIG5leHRTbGlkZUluZGV4ID0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlICsgMTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9ICFmb3JjZSAmJiB0aGlzLm5vV3JhcCA/IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA6IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRGlyZWN0aW9uLlBSRVY6XHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBmaXJzdCBzbGlkZSwgbm90IGZvcmNlLCBsb29waW5nIGlzIGRpc2FibGVkXHJcbiAgICAgICAgLy8gYW5kIG5lZWQgdG8gZ29pbmcgYmFja3dhcmQgLSBzZWxlY3QgY3VycmVudCBzbGlkZSwgYXMgYSBuZXh0XHJcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICBuZXh0U2xpZGVJbmRleCA9IDA7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSA+IDApIHtcclxuICAgICAgICAgIG5leHRTbGlkZUluZGV4ID0gdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlIC0gMTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWZvcmNlICYmIHRoaXMubm9XcmFwKSB7XHJcbiAgICAgICAgICBuZXh0U2xpZGVJbmRleCA9IHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBuZXh0U2xpZGVJbmRleCA9IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5rbm93biBkaXJlY3Rpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV4dFNsaWRlSW5kZXg7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG1hcFNsaWRlc0FuZEluZGV4ZXMoKTogU2xpZGVXaXRoSW5kZXhbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5zbGlkZXNcclxuICAgICAgLnNsaWNlKClcclxuICAgICAgLm1hcCgoc2xpZGU6IFNsaWRlQ29tcG9uZW50LCBpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgaXRlbTogc2xpZGVcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIHNlbGVjdFNsaWRlUmFuZ2UoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaXNJbmRleEluUmFuZ2UoaW5kZXgpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhpZGVTbGlkZXMoKTtcclxuXHJcbiAgICBpZiAoIXRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcclxuICAgICAgdGhpcy5zZWxlY3RSYW5nZUJ5TmVzdGVkSW5kZXgoaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuaXNJbmRleE9uVGhlRWRnZXMoaW5kZXgpXHJcbiAgICAgICAgPyBpbmRleFxyXG4gICAgICAgIDogaW5kZXggLSB0aGlzLml0ZW1zUGVyU2xpZGUgKyAxO1xyXG5cclxuICAgICAgY29uc3QgZW5kSW5kZXggPSB0aGlzLmlzSW5kZXhPblRoZUVkZ2VzKGluZGV4KVxyXG4gICAgICAgID8gaW5kZXggKyB0aGlzLml0ZW1zUGVyU2xpZGVcclxuICAgICAgICA6IGluZGV4ICsgMTtcclxuXHJcbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gdGhpcy5tYXBTbGlkZXNBbmRJbmRleGVzKCkuc2xpY2Uoc3RhcnRJbmRleCwgZW5kSW5kZXgpO1xyXG4gICAgICB0aGlzLm1ha2VTbGlkZXNDb25zaXN0ZW50KHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzKTtcclxuXHJcbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaXRlbS5hY3RpdmUgPSB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZWxlY3RSYW5nZUJ5TmVzdGVkSW5kZXgoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLl9jaHVua2VkU2xpZGVzKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RlZFJhbmdlID0gdGhpcy5fY2h1bmtlZFNsaWRlc1xyXG4gICAgICAubWFwKChzbGlkZXNMaXN0LCBpOiBudW1iZXIpID0+IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICBsaXN0OiBzbGlkZXNMaXN0XHJcbiAgICAgICAgfTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmQoXHJcbiAgICAgICAgKHNsaWRlc0xpc3Q6IEluZGV4ZWRTbGlkZUxpc3QpID0+IHtcclxuICAgICAgICAgIHJldHVybiBzbGlkZXNMaXN0Lmxpc3QuZmluZChzbGlkZSA9PiBzbGlkZS5pbmRleCA9PT0gaW5kZXgpICE9PSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG5cclxuICAgIGlmICghc2VsZWN0ZWRSYW5nZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCA9IHNlbGVjdGVkUmFuZ2UuaW5kZXg7XHJcblxyXG4gICAgdGhpcy5fY2h1bmtlZFNsaWRlc1tzZWxlY3RlZFJhbmdlLmluZGV4XS5mb3JFYWNoKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHtcclxuICAgICAgc2xpZGUuaXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSW5kZXhPblRoZUVkZ2VzKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIGluZGV4ICsgMSAtIHRoaXMuaXRlbXNQZXJTbGlkZSA8PSAwIHx8XHJcbiAgICAgIGluZGV4ICsgdGhpcy5pdGVtc1BlclNsaWRlIDw9IHRoaXMuX3NsaWRlcy5sZW5ndGhcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGlzSW5kZXhJblJhbmdlKGluZGV4OiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIGlmICh0aGlzLnNpbmdsZVNsaWRlT2Zmc2V0ICYmIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzKSB7XHJcbiAgICAgIGNvbnN0IHZpc2libGVJbmRleGVzID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMubWFwKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLmluZGV4KTtcclxuXHJcbiAgICAgIHJldHVybiB2aXNpYmxlSW5kZXhlcy5pbmRleE9mKGluZGV4KSA+PSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIGluZGV4IDw9IHRoaXMuZ2V0TGFzdFZpc2libGVJbmRleCgpICYmXHJcbiAgICAgIGluZGV4ID49IHRoaXMuZ2V0Rmlyc3RWaXNpYmxlSW5kZXgoKVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGlkZVNsaWRlcygpOiB2b2lkIHtcclxuICAgIHRoaXMuc2xpZGVzLmZvckVhY2goKHNsaWRlOiBTbGlkZUNvbXBvbmVudCkgPT4gc2xpZGUuYWN0aXZlID0gZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Zpc2libGVTbGlkZUxpc3RMYXN0KCk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLl9jaHVua2VkU2xpZGVzKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleCA9PT0gdGhpcy5fY2h1bmtlZFNsaWRlcy5sZW5ndGggLSAxO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1Zpc2libGVTbGlkZUxpc3RGaXJzdCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID09PSAwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtb3ZlU2xpZGVyQnlPbmVJdGVtKGRpcmVjdGlvbjogRGlyZWN0aW9uKTogdm9pZCB7XHJcbiAgICBsZXQgZmlyc3RWaXNpYmxlSW5kZXg6IG51bWJlcjtcclxuICAgIGxldCBsYXN0VmlzaWJsZUluZGV4OiBudW1iZXI7XHJcbiAgICBsZXQgaW5kZXhUb0hpZGU6IG51bWJlcjtcclxuICAgIGxldCBpbmRleFRvU2hvdzogbnVtYmVyO1xyXG5cclxuICAgIGlmICh0aGlzLm5vV3JhcCkge1xyXG4gICAgICBmaXJzdFZpc2libGVJbmRleCA9IHRoaXMuZ2V0Rmlyc3RWaXNpYmxlSW5kZXgoKTtcclxuICAgICAgbGFzdFZpc2libGVJbmRleCA9IHRoaXMuZ2V0TGFzdFZpc2libGVJbmRleCgpO1xyXG5cclxuICAgICAgaW5kZXhUb0hpZGUgPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXHJcbiAgICAgICAgPyBmaXJzdFZpc2libGVJbmRleFxyXG4gICAgICAgIDogbGFzdFZpc2libGVJbmRleDtcclxuXHJcbiAgICAgIGluZGV4VG9TaG93ID0gZGlyZWN0aW9uICE9PSBEaXJlY3Rpb24uTkVYVFxyXG4gICAgICAgID8gZmlyc3RWaXNpYmxlSW5kZXggLSAxXHJcbiAgICAgICAgOiAhdGhpcy5pc0xhc3QobGFzdFZpc2libGVJbmRleClcclxuICAgICAgICAgID8gbGFzdFZpc2libGVJbmRleCArIDEgOiAwO1xyXG5cclxuICAgICAgY29uc3Qgc2xpZGVUb0hpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KGluZGV4VG9IaWRlKTtcclxuICAgICAgaWYgKHNsaWRlVG9IaWRlKSB7XHJcbiAgICAgICAgc2xpZGVUb0hpZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNsaWRlVG9TaG93ID0gdGhpcy5fc2xpZGVzLmdldChpbmRleFRvU2hvdyk7XHJcbiAgICAgIGlmIChzbGlkZVRvU2hvdykge1xyXG4gICAgICAgIHNsaWRlVG9TaG93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHNsaWRlc1RvUmVvcmRlciA9IHRoaXMubWFwU2xpZGVzQW5kSW5kZXhlcygpLmZpbHRlcihcclxuICAgICAgICAoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pdGVtLmFjdGl2ZVxyXG4gICAgICApO1xyXG5cclxuICAgICAgdGhpcy5tYWtlU2xpZGVzQ29uc2lzdGVudChzbGlkZXNUb1Jlb3JkZXIpO1xyXG4gICAgICBpZiAodGhpcy5zaW5nbGVTbGlkZU9mZnNldCkge1xyXG4gICAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzID0gc2xpZGVzVG9SZW9yZGVyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcyB8fCAhdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXNbMF0pIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgIGZpcnN0VmlzaWJsZUluZGV4ID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXNbMF0uaW5kZXg7XHJcbiAgICBsYXN0VmlzaWJsZUluZGV4ID0gdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXNbdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMubGVuZ3RoIC0gMV0uaW5kZXg7XHJcblxyXG4gICAgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcclxuICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMuc2hpZnQoKTtcclxuXHJcbiAgICAgIGluZGV4ID0gdGhpcy5pc0xhc3QobGFzdFZpc2libGVJbmRleClcclxuICAgICAgICA/IDBcclxuICAgICAgICA6IGxhc3RWaXNpYmxlSW5kZXggKyAxO1xyXG5cclxuICAgICAgY29uc3QgaXRlbSA9IHRoaXMuX3NsaWRlcy5nZXQoaW5kZXgpO1xyXG5cclxuICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5wdXNoKHsgaW5kZXgsIGl0ZW0gfSk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLnBvcCgpO1xyXG4gICAgICBpbmRleCA9IHRoaXMuaXNGaXJzdChmaXJzdFZpc2libGVJbmRleClcclxuICAgICAgICA/IHRoaXMuX3NsaWRlcy5sZW5ndGggLSAxXHJcbiAgICAgICAgOiBmaXJzdFZpc2libGVJbmRleCAtIDE7XHJcblxyXG4gICAgICBjb25zdCBpdGVtID0gdGhpcy5fc2xpZGVzLmdldChpbmRleCk7XHJcbiAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMgPSBbeyBpbmRleCwgaXRlbSB9LCAuLi50aGlzLl9zbGlkZXNXaXRoSW5kZXhlc107XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmhpZGVTbGlkZXMoKTtcclxuXHJcbiAgICB0aGlzLl9zbGlkZXNXaXRoSW5kZXhlcy5mb3JFYWNoKHNsaWRlID0+IHNsaWRlLml0ZW0uYWN0aXZlID0gdHJ1ZSk7XHJcbiAgICB0aGlzLm1ha2VTbGlkZXNDb25zaXN0ZW50KHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzKTtcclxuXHJcbiAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdChcclxuICAgICAgdGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMubWFwKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLmluZGV4KVxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWFrZVNsaWRlc0NvbnNpc3RlbnQgPSAoc2xpZGVzOiBTbGlkZVdpdGhJbmRleFtdKTogdm9pZCA9PiB7XHJcbiAgICBzbGlkZXMuZm9yRWFjaCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4LCBpbmRleDogbnVtYmVyKSA9PiBzbGlkZS5pdGVtLm9yZGVyID0gaW5kZXgpO1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgbW92ZU11bHRpbGlzdChkaXJlY3Rpb246IERpcmVjdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2luZ2xlU2xpZGVPZmZzZXQpIHtcclxuICAgICAgdGhpcy5tb3ZlU2xpZGVyQnlPbmVJdGVtKGRpcmVjdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhpZGVTbGlkZXMoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm5vV3JhcCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSBkaXJlY3Rpb24gPT09IERpcmVjdGlvbi5ORVhUXHJcbiAgICAgICAgICA/IHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggKyAxXHJcbiAgICAgICAgICA6IHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggLSAxO1xyXG4gICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gRGlyZWN0aW9uLk5FWFQpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID0gdGhpcy5pc1Zpc2libGVTbGlkZUxpc3RMYXN0KClcclxuICAgICAgICAgID8gMFxyXG4gICAgICAgICAgOiB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ICsgMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGVTbGlkZUxpc3RGaXJzdCgpKSB7XHJcbiAgICAgICAgICB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4ID0gdGhpcy5fY2h1bmtlZFNsaWRlc1xyXG4gICAgICAgICAgICA/IHRoaXMuX2NodW5rZWRTbGlkZXMubGVuZ3RoIC0gMVxyXG4gICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2N1cnJlbnRWaXNpYmxlU2xpZGVzSW5kZXggPSB0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4IC0gMTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9jaHVua2VkU2xpZGVzKSB7XHJcbiAgICAgICAgdGhpcy5fY2h1bmtlZFNsaWRlc1t0aGlzLl9jdXJyZW50VmlzaWJsZVNsaWRlc0luZGV4XS5mb3JFYWNoKFxyXG4gICAgICAgICAgKHNsaWRlOiBTbGlkZVdpdGhJbmRleCkgPT4gc2xpZGUuaXRlbS5hY3RpdmUgPSB0cnVlXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnNsaWRlUmFuZ2VDaGFuZ2UuZW1pdCh0aGlzLmdldFZpc2libGVJbmRleGVzKCkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWaXNpYmxlSW5kZXhlcygpOiBudW1iZXJbXSB8IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnNpbmdsZVNsaWRlT2Zmc2V0ICYmIHRoaXMuX2NodW5rZWRTbGlkZXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX2NodW5rZWRTbGlkZXNbdGhpcy5fY3VycmVudFZpc2libGVTbGlkZXNJbmRleF1cclxuICAgICAgICAubWFwKChzbGlkZTogU2xpZGVXaXRoSW5kZXgpID0+IHNsaWRlLmluZGV4KTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fc2xpZGVzV2l0aEluZGV4ZXMpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuX3NsaWRlc1dpdGhJbmRleGVzLm1hcCgoc2xpZGU6IFNsaWRlV2l0aEluZGV4KSA9PiBzbGlkZS5pbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGEgc2xpZGUsIHdoaWNoIHNwZWNpZmllZCB0aHJvdWdoIGluZGV4LCBhcyBhY3RpdmVcclxuICAgKiBAcGFyYW0gaW5kZXhcclxuICAgKi9cclxuICBwcml2YXRlIF9zZWxlY3QoaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgaWYgKGlzTmFOKGluZGV4KSkge1xyXG4gICAgICB0aGlzLnBhdXNlKCk7XHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLm11bHRpbGlzdCAmJiB0eXBlb2YgdGhpcy5fY3VycmVudEFjdGl2ZVNsaWRlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICBjb25zdCBjdXJyZW50U2xpZGUgPSB0aGlzLl9zbGlkZXMuZ2V0KHRoaXMuX2N1cnJlbnRBY3RpdmVTbGlkZSk7XHJcbiAgICAgIGlmICh0eXBlb2YgY3VycmVudFNsaWRlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGN1cnJlbnRTbGlkZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5leHRTbGlkZSA9IHRoaXMuX3NsaWRlcy5nZXQoaW5kZXgpO1xyXG5cclxuICAgIGlmICh0eXBlb2YgbmV4dFNsaWRlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICB0aGlzLl9jdXJyZW50QWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICAgICAgbmV4dFNsaWRlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2xpZGUgPSBpbmRleDtcclxuICAgICAgdGhpcy5hY3RpdmVTbGlkZUNoYW5nZS5lbWl0KGluZGV4KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBsb29wIG9mIGF1dG8gY2hhbmdpbmcgb2Ygc2xpZGVzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZXN0YXJ0VGltZXIoKSB7XHJcbiAgICB0aGlzLnJlc2V0VGltZXIoKTtcclxuICAgIGNvbnN0IGludGVydmFsID0gK3RoaXMuaW50ZXJ2YWw7XHJcbiAgICBpZiAoIWlzTmFOKGludGVydmFsKSAmJiBpbnRlcnZhbCA+IDApIHtcclxuICAgICAgdGhpcy5jdXJyZW50SW50ZXJ2YWwgPSB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcjxudW1iZXI+KCgpID0+IHtcclxuICAgICAgICByZXR1cm4gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGNvbnN0IG5JbnRlcnZhbCA9ICt0aGlzLmludGVydmFsO1xyXG4gICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRoaXMuaXNQbGF5aW5nICYmXHJcbiAgICAgICAgICAgICAgIWlzTmFOKHRoaXMuaW50ZXJ2YWwpICYmXHJcbiAgICAgICAgICAgICAgbkludGVydmFsID4gMCAmJlxyXG4gICAgICAgICAgICAgIHRoaXMuc2xpZGVzLmxlbmd0aFxyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICB0aGlzLm5leHRTbGlkZUZyb21JbnRlcnZhbCgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBtdWx0aWxpc3QoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5pdGVtc1BlclNsaWRlID4gMTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIGxvb3Agb2YgYXV0byBjaGFuZ2luZyBvZiBzbGlkZXNcclxuICAgKi9cclxuICBwcml2YXRlIHJlc2V0VGltZXIoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jdXJyZW50SW50ZXJ2YWwpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmN1cnJlbnRJbnRlcnZhbCk7XHJcbiAgICAgIHRoaXMuY3VycmVudEludGVydmFsID0gdm9pZCAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tEaXNhYmxlZENsYXNzKGJ1dHRvblR5cGU6ICdwcmV2JyB8ICduZXh0Jyk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKGJ1dHRvblR5cGUgPT09ICdwcmV2Jykge1xyXG4gICAgICByZXR1cm4gKHRoaXMuYWN0aXZlU2xpZGUgPT09IDAgJiYgdGhpcy5ub1dyYXAgJiYgIXRoaXMubXVsdGlsaXN0KSB8fCAodGhpcy5pc0ZpcnN0U2xpZGVWaXNpYmxlICYmIHRoaXMubm9XcmFwICYmIHRoaXMubXVsdGlsaXN0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKHRoaXMuaXNMYXN0KHRoaXMuYWN0aXZlU2xpZGUpICYmIHRoaXMubm9XcmFwICYmICF0aGlzLm11bHRpbGlzdCkgfHwgKHRoaXMuaXNMYXN0U2xpZGVWaXNpYmxlICYmIHRoaXMubm9XcmFwICYmIHRoaXMubXVsdGlsaXN0KTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiAobW91c2VlbnRlcik9XCJwYXVzZSgpXCJcclxuICAgICAobW91c2VsZWF2ZSk9XCJvbk1vdXNlTGVhdmUoKVwiXHJcbiAgICAgKG1vdXNldXApPVwib25Nb3VzZVVwKClcIlxyXG4gICAgIChrZXlkb3duKT1cImtleWRvd25QcmVzcygkZXZlbnQpXCJcclxuICAgICAoZm9jdXNpbik9XCJwYXVzZUZvY3VzSW4oKVwiXHJcbiAgICAgKGZvY3Vzb3V0KT1cInBhdXNlRm9jdXNPdXQoKVwiXHJcbiAgICAgW2lkXT1cImN1cnJlbnRJZFwiXHJcbiAgICAgY2xhc3M9XCJjYXJvdXNlbCBzbGlkZVwiIHRhYmluZGV4PVwiMFwiPlxyXG4gIDxuZy1jb250YWluZXIgKm5nSWY9XCIhX2JzVmVyLmlzQnM1ICYmIHNob3dJbmRpY2F0b3JzICYmIHNsaWRlcy5sZW5ndGggPiAxXCI+XHJcbiAgICA8b2wgY2xhc3M9XCJjYXJvdXNlbC1pbmRpY2F0b3JzXCI+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCJsZXQgc2xpZGUgb2YgaW5kaWNhdG9yc1NsaWRlcygpOyBsZXQgaSA9IGluZGV4O1wiXHJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNsaWRlLmFjdGl2ZSA9PT0gdHJ1ZVwiXHJcbiAgICAgICAgICAoY2xpY2spPVwic2VsZWN0U2xpZGUoaSlcIj5cclxuICAgICAgPC9saT5cclxuICAgIDwvb2w+XHJcbiAgPC9uZy1jb250YWluZXI+XHJcbiAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIl9ic1Zlci5pc0JzNSAmJiBzaG93SW5kaWNhdG9ycyAmJiBzbGlkZXMubGVuZ3RoID4gMVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcm91c2VsLWluZGljYXRvcnNcIj5cclxuICAgICAgPGJ1dHRvblxyXG4gICAgICAgICpuZ0Zvcj1cImxldCBzbGlkZSBvZiBpbmRpY2F0b3JzU2xpZGVzKCk7IGxldCBpID0gaW5kZXg7XCJcclxuICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInNsaWRlLmFjdGl2ZSA9PT0gdHJ1ZVwiXHJcbiAgICAgICAgKGNsaWNrKT1cInNlbGVjdFNsaWRlKGkpXCJcclxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICBbYXR0ci5kYXRhLWJzLXRhcmdldF09XCInIycrY3VycmVudElkXCJcclxuICAgICAgICBbYXR0ci5kYXRhLWJzLXNsaWRlLXRvXT1cImlcIiBhcmlhLWN1cnJlbnQ9XCJ0cnVlXCJcclxuICAgICAgPlxyXG4gICAgICA8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvbmctY29udGFpbmVyPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJvdXNlbC1pbm5lclwiIFtuZ1N0eWxlXT1cInsnZGlzcGxheSc6IG11bHRpbGlzdCA/ICdmbGV4JyA6ICdibG9jayd9XCI+XHJcbiAgICA8bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiAgPC9kaXY+XHJcbiAgPGEgY2xhc3M9XCJsZWZ0IGNhcm91c2VsLWNvbnRyb2wgY2Fyb3VzZWwtY29udHJvbC1wcmV2XCJcclxuICAgICAqbmdJZj1cInNsaWRlcy5sZW5ndGggPiAxXCJcclxuICAgICBbY2xhc3MuZGlzYWJsZWRdPVwiY2hlY2tEaXNhYmxlZENsYXNzKCdwcmV2JylcIlxyXG4gICAgIFthdHRyLmRhdGEtYnMtdGFyZ2V0XT1cIicjJytjdXJyZW50SWRcIlxyXG4gICAgIChjbGljayk9XCJwcmV2aW91c1NsaWRlKClcIlxyXG4gICAgICB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImljb24tcHJldiBjYXJvdXNlbC1jb250cm9sLXByZXYtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuICpuZ0lmPVwiaXNCczRcIiBjbGFzcz1cInNyLW9ubHkgdmlzdWFsbHktaGlkZGVuXCI+UHJldmlvdXM8L3NwYW4+XHJcbiAgPC9hPlxyXG4gIDxhIGNsYXNzPVwicmlnaHQgY2Fyb3VzZWwtY29udHJvbCBjYXJvdXNlbC1jb250cm9sLW5leHRcIlxyXG4gICAgICpuZ0lmPVwic2xpZGVzLmxlbmd0aCA+IDFcIlxyXG4gICAgIFtjbGFzcy5kaXNhYmxlZF09XCJjaGVja0Rpc2FibGVkQ2xhc3MoJ25leHQnKVwiXHJcbiAgICAgW2F0dHIuZGF0YS1icy10YXJnZXRdPVwiJyMnK2N1cnJlbnRJZFwiXHJcbiAgICAgKGNsaWNrKT1cIm5leHRTbGlkZSgpXCJcclxuICAgICB0YWJpbmRleD1cIjBcIiByb2xlPVwiYnV0dG9uXCI+XHJcbiAgICA8c3BhbiBjbGFzcz1cImljb24tbmV4dCBjYXJvdXNlbC1jb250cm9sLW5leHQtaWNvblwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvc3Bhbj5cclxuICAgIDxzcGFuIGNsYXNzPVwic3Itb25seSB2aXN1YWxseS1oaWRkZW5cIj5OZXh0PC9zcGFuPlxyXG4gIDwvYT5cclxuPC9kaXY+XHJcbiJdfQ==