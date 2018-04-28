var burger = document.getElementById("burger");

var activeService = document.getElementsByClassName("image-box__arrow")[0];
var activeServiceBox = document.getElementById("service-item");

var teamMembers = [].slice.call(document.getElementsByClassName("team-member"));

var serviceItem = [].slice.call(document.getElementsByClassName("services-box__arrow"));
var serviceItemBox = document.getElementById("active-site");

var projectDetailsBox = document.getElementById("project-details");
var projectSlidesBox = document.getElementById("project-slides");
var projectActiveBox = document.getElementById("project-active");

var projectDetails = [].slice.call(document.querySelectorAll("a[href='#project-details']"));
var projectSlides = [].slice.call(document.querySelectorAll("a[href='#project-slides']"));
var projectActive = [].slice.call(document.querySelectorAll("a[href='#project-active']"));

burger.addEventListener('click', function () {
    this.parentElement.classList.toggle('active-menu');
}, false);

activeService.addEventListener('click', function (e) {
    serviceItemBox.style.display = 'block';
    serviceItemBox.style.animation = 'moveInLeft 1s ease-in';
    activeServiceBox.style.display = 'none';
    e.preventDefault();
}, false);

serviceItem.forEach(function (element, index) {
    element.addEventListener("click", function (e) {
        serviceItemBox.style.display = 'none';
        activeServiceBox.style.display = 'block';
        activeServiceBox.style.animation = 'moveInLeft 1s ease-in';
        e.preventDefault();
    });
});

var $members = $(".team-member").hover(function(e){
        $(this).addClass('team-member--active');
        $(this).css('animation', 'moveInLeft 1s ease-in');
    }, function(){
        $(this).removeClass('team-member--active');
        $(this).css('animation', '');
    });
    // element.hover(function(){
    //     this.classList.add('team-member--active');
    //     this.style.animation = 'moveInLeft 1s ease-in';
    // });
//     element.addEventListener("mouseover", function () {
//          this.classList.add('team-member--active');
//          this.style.animation = 'moveInLeft 1s ease-in';
//     });
//     element.addEventListener("mouseout", function () {
//         this.classList.remove('team-member--active');
//         this.style.animation = null;
//    });


    // element.hover(
    //     function() {this.classList.toggle('team-member--active') },
    //     function() {this.style.animation = 'moveInLeft 2s ease-in'}
    // );
// });

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