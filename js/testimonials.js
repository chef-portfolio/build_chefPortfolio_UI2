class TestimonialButton{
    constructor(button){
        this.button = button;
        this.tab = button.dataset.tab;
        this.content = new Testimonial(document.querySelector(`.testimonials .card-content[data-tab="${this.tab}"]`));
        this.button.addEventListener('click', () => this.select());

    }

    select(){
        let buttons = document.querySelectorAll('.testimonial-selector button');
        testimonialButtons.forEach(button => button.classList.remove('active-button'));
        this.button.classList.add('active-button');
        this.content.select();
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

let testimonialButtons = document.querySelectorAll('.testimonial-selector button');
testimonialButtons.forEach(button => new TestimonialButton(button));

let testimonials = document.querySelectorAll('.testimonials .card-content');
testimonials.forEach(testimonial => new Testimonial(testimonial));
