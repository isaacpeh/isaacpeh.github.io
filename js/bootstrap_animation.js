
// CA2
// Author: Isaac Peh
// Date: 6 August 2021

// Filename: bootstrap_animation.js

// Navigation bar animation on scroll

$(function () {
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 50) {
            $(".navbar").addClass("active");
        } else {
            $(".navbar").removeClass("active");
        }
    })
});

// Smooth transition between pages

window.transitionToPage = function (href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function () {
        window.location.href = href
    }, 600)
}

document.addEventListener('DOMContentLoaded', function (event) {
    document.querySelector('body').style.opacity = 1
})

// Index - Change image

function changeImage(img) {

    var imgarr = ["../img/mcycle.jpg","../img/travel.jpg","../img/photography.jpg"];

    if (img == 1) {
        document.getElementById("interest-photo").src = imgarr[img-1];
    }
    else if (img == 2) {
        document.getElementById("interest-photo").src = imgarr[img-1];
    }
    else {
        document.getElementById("interest-photo").src = imgarr[img-1];
    }
}

// Refresh scroll to top

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

// Index - Fade in on scroll

$(function () {  // $(document).ready shorthand
    $('.start').fadeIn('fast');
});

$(document).ready(function () {

    $(window).scroll(function () {

        $('.hideme').each(function (i) {

            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > bottom_of_object - 350) {

                $(this).animate({ 'opacity': '1' }, 400);
            }
        });
    });
});