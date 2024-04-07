(function($) {
    "use strict";
    var $window = $(window);
    $window.on('load', function(key, value) {

        // $(".header").load('../components/header.html')
        // $('.banner').load('../components/main_page/banner.html')
        // $('.intro_section1').load('../components/main_page/intro_section.html')
        // $('.intro_section2').load('../components/main_page/intro_section2.html')
        // $('.why_us').load('../components/main_page/why_us.html')
        // $('.newsletter').load('../components/main_page/newsletter.html')
        // $('footer').load('../components/footer.html')
        // $('.our_categories_section').load('../components/main_page/nos_categories_section.html')
        // $('.explor_cours_section').load('../components/main_page/explor_cours_section.html')
        // $('.nos_aventages_section').load('../components/main_page/nos_aventages_section.html')     
    });

    $(document).ready(function() {



    })

    $(document).on('click', '.delete_lesson', function() {

        $(this).closest('.single').remove();
    });

    $(document).on('click', '.toggle_edit_comment', function() {

        $(this).closest('.single_comment').addClass('add');
    });




    $(document).on('mouseover', '.header .nav-item.dropdown .single_item', function() {

        $(this).find('.subcategories').addClass('show');
    });
    $(document).on('mouseout', '.header .nav-item.dropdown .single_item', function() {

        $(this).find('.subcategories').removeClass('show');
    });
})(jQuery);