class Carousel {
    constructor(container) {
        this.container = container;
        this.left = container.querySelector('.left-button');
        this.right = container.querySelector('.right-button');
        this.currentIndex = 0;
        window.addEventListener('load', () => this.defaultImg())
        this.left.addEventListener('click', () => this.nextImage());
        this.right.addEventListener('click', () => this.nextImage());
    }
    defaultImg() {
        let images = this.container.querySelectorAll('img');
        images[this.currentIndex].style.display = 'flex';
    }
    nextImage() {
        let images = this.container.querySelectorAll('img');
        return this.currentIndex = images[1].dataset.img;
    }
}

let carousel = document.querySelector('.carousel');

carousel = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the left and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/