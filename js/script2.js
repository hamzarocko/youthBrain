(function(){
    'use strict';
    var isMenuOpen = false;
    $(document).ready(function(){
        $('.menu-toggle').on('click', function(){
            $('.menu-toggle').children('span').fadeToggle();
            $('nav').animate({width:'toggle'},350);
            isMenuOpen = !isMenuOpen;
        });
    });

    $(window).on('resize', function(){
        if ($(window).width() > 769) {
            $('nav').show();
        }else {
            if (isMenuOpen) {
                $('nav').show();
            }else {
                $('nav').hide();
            }
        }
    });
                /*text fit*/
        jQuery("h2").fitText(1.2, { minFontSize: '32px', maxFontSize: '40px' });

        /*image Animation scrolling*/

        $(window).scroll( function() { 
         var scrolled_val = $(document).scrollTop().valueOf();
         if (scrolled_val < 640 && scrolled_val > 500) {
            $('.historique-1,.historique-2,.historique-3,.historique-4').addClass('animated slideInLeft');
            $('.big-data-1').addClass('animated rotateIn');
         }else if (scrolled_val < 2550 && scrolled_val > 1760) {
            $('.mac-home .plant').addClass('animated bounceIn');
            $('.mac-home .macbook').addClass('animated fadeIn');
            $('.mac-home .glasses').addClass('animated slideInDown');
            $('.mac-home .mug').addClass('animated slideInRight');
         }
        });

        /*animation scrolling*/
            AOS.init();

        /*owlcarousel*/
        $('.carousel').carousel();

        /*Get File Name*/

        $(".InputFileclient").on("change", function(e) {
           var filename = e.target.value.split('\\').pop();
            $(".nom-fichier-client").text(filename);
        });
        $(".InputFilecandidat").on("change", function(e) {
           var filename = e.target.value.split('\\').pop();
            $(".nom-fichier-candidat").text(filename);
        });
        $(".InputFileLM").on("change", function(e) {
           var filename = e.target.value.split('\\').pop();
            $(".nom-fichier-LM").text(filename);
        });

        /*Changer la charte graphique selon la selection*/
        
        var getUrlParameter = function getUrlParameter(sParam) {
            var sPageURL = decodeURIComponent(window.location.search.substring(1)),
                sURLVariables = sPageURL.split('&'),
                sParameterName,
                i;

            for (i = 0; i < sURLVariables.length; i++) {
                sParameterName = sURLVariables[i].split('=');

                if (sParameterName[0] === sParam) {
                    return sParameterName[1] === undefined ? true : sParameterName[1];
                }
            }
        };
        
        var yellow = getUrlParameter('yellow');
        var blue = getUrlParameter('blue');
        var blueDark = getUrlParameter('blueDark');
        var pulse = getUrlParameter('pulse');
        if (yellow == "1") {
            $('.liste-competences li').addClass('yellow-select');
        }else if (blue=="1") {
            $('.liste-competences li').addClass('blue-select');
            $('.bkg-detail-img').addClass('bkg-detail-img-bleu');
            $('.bkg-banner').addClass('bkg-banner-blue');
            $('.blue-block').addClass('blue-go-block');
        }else if (blueDark == "1") {
            $('.liste-competences li').addClass('blue-dark-select');
            $('.bkg-detail-img').addClass('bkg-detail-img-dark-blue');
            $('.bkg-banner').addClass('bkg-banner-dark-blue');
            $('.dark-blue-block').addClass('dark-go-blue-block');
        }else if (pulse == "1") {
            $('.liste-competences li').addClass('pulse-select');
            $('.bkg-detail-img').addClass('bkg-detail-img-pulse');
            $('.bkg-banner').addClass('bkg-banner-pulse');
            $('.pulse-block').addClass('pulse-go-block');


        }

        /*Notif bootstrap*/
        
           $('form').validator().on('submit', function (e) {
              if (e.isDefaultPrevented()) {
                // handle the invalid form...
                $.notify({
                    // options
                    message: 'candidature non envoyer' 
                },{
                    // settings
                    type: 'danger'
                });
                
              }
                  
            });
}());



