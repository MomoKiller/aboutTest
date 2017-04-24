function checkNavColor(){
    if($(this).scrollTop() > 100) {
        $('.navbar-fixed-top').addClass('opaque');
    } else {
        $('.navbar-fixed-top').removeClass('opaque');
    }
}

$(window).load(function(){

    "use strict";

    checkNavColor();
    /* ========================================================== */
    /*   LayerSlider                                              */
    /* ========================================================== */
    $(function(){

        // Calling LayerSlider on the target element with adding custom slider options
        $('#layerslider, #layerslider2').layerSlider({
            autoStart: true,
            pauseOnHover: true,
            navPrevNext: false,
            navButtons: true,
            navStartStop: true,
            thumbnailNavigation: false,
            autoPlayVideos: false,
            firstLayer: 1,
            skin: 'v5',
            skinsPath: 'layerslider/skins/'

            // Please make sure that you didn't forget to add a comma to the line endings
            // except the last line!
        });

    });


    /* ========================================================== */
    /*   Popup-Gallery                                            */
    /* ========================================================== */
    $('.popup-gallery').find('a.popup1').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true
        }
    });

    $('.popup-gallery').find('a.popup2').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true
        }
    });

    $('.popup-gallery').find('a.popup3').magnificPopup({
        type: 'image',
        gallery: {
            enabled:true
        }
    });

    $('.popup-gallery').find('a.popup4').magnificPopup({
        type: 'iframe',
        gallery: {
            enabled:false
        }
    });

    /* ========================================================== */
    /*   Navigation Background Color                              */
    /* ========================================================== */

    $(window).scroll(function() {
        checkNavColor();
    });


    /* ========================================================== */
    /*   Navigation Color                                         */
    /* ========================================================== */

    $('#navbar-collapse-02').onePageNav({
        filter: ':not(.external)'
    });


    /* ========================================================== */
    /*   SmoothScroll                                             */
    /* ========================================================== */

    $(".nav li a, a.scrool").click(function(e){
        console.log('location', window.location.pathname === '/');
        console.log('event', e);
        if(window.location.pathname === '/') {
            var full_url = this.href;
            var parts = full_url.split("#");
            var trgt = parts[1];
            var target_offset = $("#"+trgt).offset();
            var target_top = target_offset.top;

            $('html,body').animate({scrollTop:target_top -69}, 1000);
            return false;
        } else {
            window.location = e.target.href;
        }

    });


    /* ========================================================== */
    /*   Newsletter                                               */
    /* ========================================================== */

    $('#newsletter-form').each(function(){
        var $form = $(this);
        //form.validate();
        $form.submit(function(e) {
            if (!e.isDefaultPrevented()) {
                e.preventDefault();
                $.ajax({
                    type: 'GET',
                    url: $form.attr('action') + '&c=?',
                    data: $form.serialize(),
                    cache: false,
                    dataType: 'jsonp',
                    contentType: "application/json; charset=utf-8",
                    error: function(err) {
                        alert("Could not connect to the registration server. Please try again later.");
                    },
                    success: function(data) {
                        window.fbq('track', 'Lead');
                        $form.fadeOut('fast', function() {
                            $(this).siblings('p.newsletter_success_box').show();
                        });
                    }
                });
            }
        });
    });


    /* ========================================================== */
    /*   Contact                                                  */
    /* ========================================================== */
    $('#contact-form').each( function(){
        var form = $(this);
        //form.validate();
        form.submit(function(e) {
            if (!e.isDefaultPrevented()) {
                jQuery.post(this.action,{
                    'names':$('input[name="contact_names"]').val(),
                    'email':$('input[name="contact_email"]').val(),
                    'phone':$('input[name="contact_phone"]').val(),
                    'message':$('textarea[name="contact_message"]').val(),
                },function(data){
                    if(data === 'OK'){
                        window.fbq('track', 'Lead');
                        form.fadeOut('fast', function() {
                            $(this).siblings('p').show();
                        });
                    } else {
                        form.prepend('<p class="white">We appologize but something went wrong. Please try again or email use at <a href="info@givinggreat.com">info@givinggreat.com.</a></p>');
                    }
                });
                e.preventDefault();
            }
        });
    })


});


/* ========================================================== */
/*   Page Loader                                              */
/* ========================================================== */
//$('#loader').fadeOut(100);