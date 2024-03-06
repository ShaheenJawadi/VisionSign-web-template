(function ($) {
    "use strict";
    var $window = $(window);
    $window.on('load', function (key, value) {

        $(".header").load('../components/header.html')
        $('.banner').load('../components/main_page/banner.html')
    });
})(jQuery);