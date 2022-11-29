function SwipeCarousel() {
    Carousel.apply(this, arguments)
}

SwipeCarousel.prototype = Object.create(Carousel.prototype)
SwipeCarousel.prototype.constructor = SwipeCarousel


SwipeCarousel.prototype._swipeStart = function(e) {
    this.swipeStartX = e.changedTouches[0].pageX

}


SwipeCarousel.prototype._swipeEnd = function(e) {
    this.swipeEndX = e.changedTouches[0].pageX


    if (this.swipeStartX - this.swipeEndX < 100) this.prev()
    if (this.swipeStartX - this.swipeEndX > 100) this.next()


}

SwipeCarousel.prototype._initLiseners = function() {
    Carousel.prototype._initLiseners.apply(this)
    this.container.addEventListener('touchstart', this._swipeStart.bind(this))
    this.container.addEventListener('touchend', this._swipeEnd.bind(this))

}