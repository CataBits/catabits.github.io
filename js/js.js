$(document).ready(function(){
	function dReset(){
      $('.droplinks').hide('fast');
      $('.dropdown > a').removeClass('active');
      $('.dropdown > a i:last-child').removeClass('fa-caret-up');
      $('.dropdown > a i:last-child').addClass('fa-caret-down');
    }
    function dToggle(dId){
      	if($(dId+' > div').is(':visible')){
			dReset();
        } else {
        	dReset();
            $(dId+' > div').show('fast');
            $(dId+' > a').addClass('active');
            $(dId+' > a i:last-child').addClass('fa-caret-up');
        }
        return false;
    }

	$('#d-sobre > a').click(function(){
    	dToggle('#d-sobre');
    });
	$('#d-usuario > a').click(function(){
    	dToggle('#d-usuario');
    });
    
    /* Loading background-image only after document is ready */
    $('body').css('background-image', 'url("img/meupcbg2.jpg")');
});