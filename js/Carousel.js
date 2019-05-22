class Carousel {
    constructor(carousel){
        this.carousel = carousel;

        this.imagePool = [...this.carousel.querySelectorAll('img')];
        this.index = 0;
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
    }

    scroll(){
        this.index = this.index === 0 ? this.index = this.imagePool.length-1 : this.index -1; 
        this.currentImage.style.display = 'none';
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
    }
}

let carousel = new Carousel (document.querySelector(`.carousel`));

setInterval(() => carousel.scroll(), 4500)