/* Items */ 

var burger = document.getElementById("burger");

var activeService = [].slice.call(document.querySelectorAll("a[href='#active-site']"));
var activeServiceBox = document.getElementById("service-item");

var serviceItem = [].slice.call(document.getElementsByClassName("services-box__arrow"));

var links = [].slice.call(document.querySelectorAll("a[href^='#section-']"));

var serviceItemBox = document.getElementById("active-site");
var projectDetailsBox = document.getElementById("project-details");
var projectSlidesBox = document.getElementById("project-slides");

var projectActiveBox = document.getElementById("project-active");
var projectDetails = [].slice.call(document.querySelectorAll("a[href='#project-details']"));
var projectSlides = [].slice.call(document.querySelectorAll("a[href='#project-slides']"));
var projectActive = [].slice.call(document.querySelectorAll("a[href='#project-active']"));

var header = document.getElementById('naviBeam');
var headerOffset = header.offsetTop;
/* Menu burger*/

burger.addEventListener('click', function () {
    this.parentElement.classList.toggle('active-menu');
}, false);

/* Active items in menu */
links.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        e.preventDefault();
        var item = this.getAttribute('href'),
            iditem = item.substring(1, item.length),
            section = document.querySelector('section[id="' + iditem + '"]');
        scrollPoint = section.offsetTop;

        skrollTop.scrollTo({
            to: scrollPoint,
            duration: 1200
        });

        return false;
    });
});


/* Fixed menu */
window.onscroll = function(){scroller()};

function scroller(){
    if(window.pageYOffset >= headerOffset){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }
}

/* Portfolio blocks animation */
activeService.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        serviceItemBox.style.display = 'block';
        serviceItemBox.style.animation = 'moveInLeft 1s ease-in';
        activeServiceBox.style.display = 'none';
        e.preventDefault();
    });
});

serviceItem.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        serviceItemBox.style.display = 'none';
        activeServiceBox.style.display = 'block';
        activeServiceBox.style.animation = 'moveInLeft 1s ease-in';
        e.preventDefault();
    });
});

projectDetails.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        projectDetailsBox.style.display = 'block';
        projectDetailsBox.style.animation = 'moveInLeft 1s ease-in';
        projectActiveBox.style.display = 'none';
        projectSlidesBox.style.display = 'none';
        e.preventDefault();
    });
});

projectSlides.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        projectSlidesBox.style.display = 'block';
        projectSlidesBox.style.animation = 'moveInLeft 1s ease-in';
        var carousel = $('.project-slides .owl-carousel').data('owl.carousel');
        carousel._width = $('.project-slides .owl-carousel').width();
        carousel.invalidate('width');
        carousel.refresh();
        projectDetailsBox.style.display = 'none';
        projectActiveBox.style.display = 'none';
        e.preventDefault();
    });
});

projectActive.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        projectActiveBox.style.display = 'block';
        projectActiveBox.style.animation = 'moveInLeft 1s ease-in';
        projectDetailsBox.style.display = 'none';
        projectSlidesBox.style.display = 'none';
        e.preventDefault();
    });
});