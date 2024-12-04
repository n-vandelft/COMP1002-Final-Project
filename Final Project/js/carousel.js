let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);
}
function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let x;
    let slides = document.getElementsByClassName("carousel-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1){slideIndex = slides.length}

    for(x = 0; x < slides.length; x++){
        slides[x].style.display = "none";
    }
    for(x = 0;x < dots.length; x++){
        dots[x].className = dots[x].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}