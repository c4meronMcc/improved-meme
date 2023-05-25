// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// When the user scrolls the page, execute myFunction
$(window).on('scroll', function () {

    var windowTop = $(window).scrollTop();
    var elementTop = $('.anchor').offset().top;

    if (windowTop > elementTop) {
        $(".sidebar").addClass("fixed");
        $(".header").addClass("fixed");
    } else {
        $(".sidebar").removeClass("fixed");
        $(".header").removeClass("fixed");
    }

});
