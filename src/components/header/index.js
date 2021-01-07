// (function() {
//     var navbar = document.querySelector(".navbar"),
//         y_pos = navbar.offset().top,
//         height = navbar.height();

//     document.querySelector(document).scroll(function() {
//         var scrollTop = document.querySelector(this).scrollTop;

//         if (scrollTop > y_pos + height) {
//             navbar.classList.add(".navbar-fixed").animate({
//                 top: 0
//             });
//         } else if (scrollTop <= y_pos) {
//             navbar.removeClass(".navbar-fixed").clearQueue().animate({
//                 top: "-48px"
//             }, 0);
//         }
//     });

// })();