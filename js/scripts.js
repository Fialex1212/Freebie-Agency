const openMenu = (button) => {
    const ul = document.querySelector(".header__list");
    ul.classList.toggle('active');
    button.classList.toggle('active');
};

let slideIndex = 1;
showSlide(slideIndex);

function plusSlides(n){
    showSlide(slideIndex += n)
}

function currentSlide(n){
    showSlide(slideIndex = n)
}

function showSlide(){
    let i;
    let slides = document.getElementsByClassName("mySlide");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}
