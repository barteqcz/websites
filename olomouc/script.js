document.addEventListener("DOMContentLoaded", function() {
    currentSlide(1);
    checkAndDisplayStatus("vmo", "status-info-vmo");
    checkAndDisplayStatus("zoo", "status-info-zoo");
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("imageGallerySlides");
    if (slides.length === 0) {
        return; // Exit the function if there are no slides
    }
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

function isOpen(place) {
    let now = new Date();
    let day = now.getDay();
    let hour = now.getHours();

    switch (place) {
        case "zoo":
            return (now.getDay() >= 1 && now.getDay() <= 6) && (now.getHours() >= 9 && now.getHours() < 18);
        case "vmo":
            return (now.getDay() >= 2 && now.getDay() <= 6 || now.getDay() == 0) && (now.getHours() >= 10 && now.getHours() < 18);
        default:
            return false;
    }
}

function displayStatus(place, elementId) {
    let isOpenNow = isOpen(place);
    let statusInfo = document.getElementById(elementId);

    console.log(statusInfo)

    if (isOpenNow) {
        statusInfo.textContent = 'Právě otevřeno';
        statusInfo.style.color = 'green';
    } else {
        statusInfo.textContent = "Právě uzavřeno";
        statusInfo.style.color = 'red';
    }
}

function checkAndDisplayStatus(place, elementId) {
    let statusInfo = document.getElementById(elementId);
    if (statusInfo) {
        // If element exists, call displayStatus immediately
        displayStatus(place, elementId);
    } else {
        // If element doesn't exist yet, try again after a short delay
        setTimeout(function() {
            checkAndDisplayStatus(place, elementId);
        }, 100);
    }
}

function hamburgerMenu(elementId) {
    let x = document.getElementById("myLinks");
    let y = document.getElementById(elementId)
    if (x.style.display === "flex") {
        x.style.display = "none";
        y.style.marginTop = "0";
    } else {
        x.style.display = "flex";
        y.style.marginTop = "35px";
    }
}

function hamburgerMenuHideOnly(elementId) {
    let x = document.getElementById("myLinks");
    let y = document.getElementById(elementId)
    x.style.display = "none";
    y.style.marginTop = "20px";
}
