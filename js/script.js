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
		if ($(window).width() > 768) {
			$('nav').show();
		}else {
			if (isMenuOpen) {
				$('nav').show();
			}else {
				$('nav').hide();
			}
		}
	});
		/*image Animation scrolling*/

		$(window).scroll( function() { 
		 var scrolled_val = $(document).scrollTop().valueOf();
		 if (scrolled_val < 640 && scrolled_val > 500) {
		 	$('.big-data-2').addClass('animated fadeIn');
		 }else if (scrolled_val < 2550 && scrolled_val > 1760) {
		 	$('.mac-home .plant').addClass('animated bounceIn');
		 	$('.mac-home .macbook').addClass('animated fadeIn');
		 	$('.mac-home .glasses').addClass('animated slideInDown');
		 	$('.mac-home .mug').addClass('animated slideInRight');
		 }
		});
				/*text fit*/
				jQuery(".index-titre-2 p").fitText(1.2, { minFontSize: '29px', maxFontSize: '35px' });
		jQuery(".header-fix h2").fitText(1.2, { minFontSize: '32px', maxFontSize: '40px' });
		jQuery("h2").fitText(1.2, { minFontSize: '29px', maxFontSize: '35px' });
		jQuery(".textarea h2").fitText(1.2, { minFontSize: '32px', maxFontSize: '40px' });
		jQuery(".titre-gras-emploi").fitText(1, { minFontSize: '32px', maxFontSize: '40px' });

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

		/*decouvrir la suite*/
		$('.la-suite').on('click', function() { // Au clic sur un élément
			var page = $(this).attr('href'); // Page cible
			var speed = 750; // Durée de l'animation (en ms)
			$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
			return false;
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

        var jobCateg = getUrlParameter('jobCateg');

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
        }else if (jobCateg == 1) {
        	$('html, body').animate({
                    scrollTop: $("#div1").offset().top
                }, 2000);
        }

     	    

}());




