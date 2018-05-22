$(document).ready(function () {
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
        
        var succes = getUrlParameter('succes');
        
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
      if (succes == "1") {
            $.notify({
                    // options
                    message: 'candidature envoyer' 
                },{
                    // settings
                    type: 'success'
                });
            
        } 
});