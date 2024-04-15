//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 5000;

//Auto Scroll NavBar
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-list a');

    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default link behavior

            const targetClass = this.getAttribute('data-target'); // Get the data-target attribute value
            const targetSection = document.querySelector('.' + targetClass); // Find the target section by class

            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth' // Optional: adds smooth scrolling effect
                });
            }
        });
    });
});
//Auto Scroll Lets Dive In
document.addEventListener('DOMContentLoaded', function () {
    const autoScrollButton = document.querySelector('.auto-scroll');
    const targetSection = document.querySelector('.row');

    autoScrollButton.addEventListener('click', function () {
        targetSection.scrollIntoView({
            behavior: 'smooth' // Optional: adds smooth scrolling effect
        });
    });
});

// nextDom.onclick = function(){
//     showSlider('next');    
// }

// prevDom.onclick = function(){
//     showSlider('prev');    
// }
let runTimeOut;
// let runNextAuto = setTimeout(() => {
//     next.click();
// }, timeAutoNext)
// function showSlider(type){
//     let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
//     let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
//     if(type === 'next'){
//         SliderDom.appendChild(SliderItemsDom[0]);
//         thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
//         carouselDom.classList.add('next');
//     }else{
//         SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
//         thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
//         carouselDom.classList.add('prev');
//     }
//     clearTimeout(runTimeOut);
//     runTimeOut = setTimeout(() => {
//         carouselDom.classList.remove('next');
//         carouselDom.classList.remove('prev');
//     }, timeRunning);

//     clearTimeout(runNextAuto);
//     runNextAuto = setTimeout(() => {
//         next.click();
//     }, timeAutoNext)
// }

const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.campus');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let counter = 0;
let direction = 'forward'; // Keeps track of the sliding direction

function adjustSlider() {
    
    if (direction === 'forward') {
        sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    } else {
        sliderContainer.style.transition = 'transform 0.5s ease-in-out';
    }

    sliderContainer.style.transform = `translateX(-${counter * 100}%)`;




    // Update the direction for the next movement
    direction = 'forward';

    if (sliderContainer.style.overflow === 'visible'){
        setTimeout(() => {
            sliderContainer.style.overflow = 'hidden';
        }, 300);
    }else{
        setTimeout(() => {
            sliderContainer.style.overflow = 'visible';
        }, 100);
    }
}

nextBtn.addEventListener('click', () => {
    counter++;
    if (counter >= slides.length) {
        counter = 0;
    }
    adjustSlider();

        // Reset the interval when next button is clicked
        clearInterval(intervalId);
        intervalId = setInterval(autoSlide, 5000); // Start a new interval
});

prevBtn.addEventListener('click', () => {
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    // Set direction to backward for sliding from left to right
    direction = 'backward';
    adjustSlider();

        // Reset the interval when next button is clicked
        clearInterval(intervalId);
        intervalId = setInterval(autoSlide, 5000); // Start a new interval
});
// Function to automatically click next button after 7 seconds
function autoSlide() {
        nextBtn.click();
}

// Call the autoSlide function to start automatic sliding
intervalId = setInterval(autoSlide, 5000);