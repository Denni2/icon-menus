let slideIndex = 1;
let messages = ['Image one showing', 'Image two showing', 'Image three showing', 'Image four showing'];


showSlides = (n) => {
    var i;
    let inners = document.getElementsByClassName('inners');
    let dots = document.getElementsByClassName('dots');
    let imgs = document.getElementsByTagName('span');
    if (n > inners.length) {slideIndex = 1};
    if (n < 1) {slideIndex = inners.length};

    for (x = 0; x < inners.length; x++){
        inners[x].style.display = 'none';
    }

    for (x = 0; x < dots.length; x++){
        dots[x].className = dots[x].className.replace(" active", "");
    }

    inners[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className +=" active";
}


toggleSlides = (n) => {
    showSlides(slideIndex += n);
}

currentSlide = (n) => {
    showSlides(slideIndex = n);
}

showSlides(slideIndex);



