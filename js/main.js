var burger = document.getElementById("burger");

var activeService = document.getElementsByClassName("image-box__arrow")[0];
var activeServiceBox = document.getElementById("service-item");

var serviceItem = [].slice.call(document.getElementsByClassName("services-box__arrow"));
var serviceItemBox = document.getElementById("active-site");

var projectDetailsBox = document.getElementById("project-details");
var projectSlidesBox = document.getElementById("project-slides");
var projectActiveBox = document.getElementById("project-active");

var projectDetails = [].slice.call(document.getElementsByTagName("a[href='#project-details'"));
var projectSlides = [].slice.call(document.getElementsByTagName("a[href='#project-slides'"));
var projectActive = [].slice.call(document.getElementsByTagName("a[href='#project-active'"));

burger.addEventListener('click', function() {
    this.parentElement.classList.toggle('active-menu');
}, false);

activeService.addEventListener('click', function(e) {
    serviceItemBox.style.display = 'block';
    serviceItemBox.style.animation = 'moveInLeft 1s ease-in';
    activeServiceBox.style.display = 'none';
    e.preventDefault();
}, false);

serviceItem.forEach(function (element, index){
    element.addEventListener("click", function(e){
        serviceItemBox.style.display = 'none';
        activeServiceBox.style.display = 'block';
        activeServiceBox.style.animation = 'moveInLeft 1s ease-in';
        e.preventDefault();
    });
}); 

projectDetails.forEach(function (element, index){
    element.addEventListener("click", function(e){
        projectDetailsBox.style.display = 'block';
        projectDetailsBox.style.animation = 'moveInLeft 1s ease-in';
        projectActiveBox.style.display = 'block';
        projectSlidesBox.style.display = 'block';        
        e.preventDefault();
    });
}); 

projectSlides.forEach(function (element, index){
    element.addEventListener("click", function(e){
        projectSlidesBox.style.display = 'block';
        projectSlidesBox.style.animation = 'moveInLeft 1s ease-in';
        projectDetailsBox.style.display = 'block';
        projectActiveBox.style.display = 'block';        
        e.preventDefault();
    });
}); 

projectActive.forEach(function (element, index){
    element.addEventListener("click", function(e){
        projectActiveBox.style.display = 'block';
        projectActiveBox.style.animation = 'moveInLeft 1s ease-in';
        projectDetailsBox.style.display = 'block';
        projectSlidesBox.style.display = 'block';        
        e.preventDefault();
    });
}); 

