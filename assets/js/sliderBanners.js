let currentSlide = 0;


let totalSliders = document.querySelectorAll('.slider--item').length;

document.querySelector('.slider--width').style.width = `calc(100vw * ${totalSliders} )`;
document.querySelector('.slider--controls').style.height = `${document.querySelector('.slider').clientHeight}px`;


function goBack() {
    currentSlide--;

    if (currentSlide < 0) {
        currentSlide = totalSliders - 1;
    }

    upDateMargin();
};



function goNext() {
    currentSlide++;

    if (currentSlide > totalSliders - 1) {
        currentSlide = 0;
    }

    upDateMargin();
}


function upDateMargin() {
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider--width').style.marginLeft = `-${newMargin}px`;
}

setInterval(goNext, 5000);