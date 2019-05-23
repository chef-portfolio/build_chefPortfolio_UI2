class TestimonialCarousel{
    constructor(section){
        this.testimonialCarousel = section;
        this.info = [
            {varName: 'testimonialPool', querySearch: '.card-content', shownItem: 'currentTest', kill: (el) => el.classList.remove('active'), show: (el) => el.classList.add('active') },
            {varName: 'buttonPool', querySearch: 'button', shownItem: 'currentButton', kill: (el) => el.classList.remove('active-button'), show: (el) => el.classList.add('active-button') },
            {varName: 'imagePool', querySearch: 'img', shownItem: 'currentImage', kill: (el) => el.style.display = 'none', show: (el) => el.style.display = 'flex' }
        ];

        // Creates three arrays: texts, buttons, images 
        this.info.forEach(infoObj => {
            this[infoObj.varName] = [...this.testimonialCarousel.querySelectorAll(infoObj.querySearch)];
        })
        this.index = 0;
        this.update();
    }
    scroll(){
        this.index = this.index === this.testimonialPool.length-1 ? 0 : this.index+1; 
        
        // Deactivate all currently shown items
        this.info.forEach(infoObj => this[infoObj.varName].forEach(infoObj.kill));
        this.update();
    }

    update(){
        this.info.forEach(infoObj => {
            //Resets the currently shown item to new index value
            this[infoObj.shownItem] = this[infoObj.varName][this.index];
            //Shows the currently selected item
            infoObj.show(this[infoObj.shownItem]);
        });
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
        clearInterval(scrollTimer);
        scrollTimer = setInterval(() => testScroll.scroll(),4500);
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
let scrollTimer = setInterval(() => testScroll.scroll(), 4500)