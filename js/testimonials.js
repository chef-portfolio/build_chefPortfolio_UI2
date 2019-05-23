class TestimonialCarousel{
    constructor(section){
        this.testimonialCarousel = section;
        this.testimonialPool = [...this.testimonialCarousel.querySelectorAll('.card-content')];
        this.buttonPool = [...this.testimonialCarousel.querySelectorAll('button')];
        this.imagePool = [...this.testimonialCarousel.querySelectorAll('img')];
        this.index = 0;
        this.currentTest = this.testimonialPool[this.index];
        this.currentButton = this.buttonPool[this.index];
        this.currentImage = this.imagePool[this.index];
        this.currentImage.style.display = 'flex';
    }

    scroll(){
        this.index = this.index === this.testimonialPool.length-1 ? 0 : this.index+1; 
        this.testimonialPool.forEach(el => el.classList.remove('active'));
        this.buttonPool.forEach(el => el.classList.remove('active-button'));
        this.imagePool.forEach(el => el.style.display = 'none');
        this.currentTest = this.testimonialPool[this.index];
        this.currentButton = this.buttonPool[this.index];
        this.currentImage = this.imagePool[this.index];
        this.currentTest.classList.add('active');
        this.currentButton.classList.add('active-button');
        this.currentImage.style.display = 'flex';
    }
}

class TestimonialButton{
    constructor(button){
        this.button = button;
        this.tab = button.dataset.tab;
        this.content = new Testimonial(document.querySelector(`.testimonials .card-content[data-tab="${this.tab}"]`));
        this.image = new Photo(document.querySelector(`.carousel img[data-tab="${this.tab}"]`));
        this.button.addEventListener('click', () => this.select());

    }

    select(){
        let buttons = document.querySelectorAll('.testimonial-selector button');
        buttons.forEach(button => button.classList.remove('active-button'));
        this.button.classList.add('active-button');
        this.content.select();
        this.image.select();
        testScroll.index = this.tab-1;
    }

}

class Testimonial {
    constructor(testimonial){
        this.testimonial = testimonial;
    }

    select() {
        let testimonials = [...document.querySelectorAll('.testimonials .card-content')];
        testimonials.forEach(testimony => testimony.classList.remove('active'));
        this.testimonial.classList.add('active');
    }
}

class Photo {
    constructor(image){
        this.image = image;
    }

    select() {
        let images = [...document.querySelectorAll('.carousel img')];
        images.forEach(images => images.style.display='none');
        this.image.style.display='flex';
    }
}


let testimonialButtons = document.querySelectorAll('.testimonial-selector button');
testimonialButtons.forEach(button => new TestimonialButton(button));

let testimonialCarousel = document.querySelector('.testimonial-carousel');
let testScroll = new TestimonialCarousel(testimonialCarousel);
setInterval(() => testScroll.scroll(), 4500)