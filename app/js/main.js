(function(){
	var slideIndex = 1;
	showSlides( slideIndex );

	function showSlides(n){
		var i;
		var slides = document.getElementsByClassName("corousel_image");

		if(n > slides.length){
			slideIndex = 1;
		}
		if(n < 1){
			slideIndex = slides.length;
		}
		for(i=0; i<slides.length; i++){
			slides[i].style.display = "none";
		}

		slides[slideIndex-1].style.display = "block";
	}

	function slid (n) {
		var n = 1;
		showSlides(slideIndex += n);
	}
	var slidMove = setInterval(slid, 5*1000);
})();

(function(){
	var contact = document.getElementById('contact_us');
	var contactFooter = document.getElementById('contact_us_footer');
	var contactUs = document.getElementById('contact_us_form');
	var close = document.getElementById('close');

	contact.addEventListener('click', cntctUs, false);
	contactFooter.addEventListener('click', cntctUs, false);
	close.addEventListener('click', closeContactUsForm, false);

	function cntctUs (){
		contactUs.style.display = 'block'
	}
	
	function closeContactUsForm (){
		contactUs.style.display = 'none'
	}
})();

(function (){
	jQuery(function($) {
		$('#phoneInput').mask('+38(999) 999-99-99');
	});
})();

(function(){
	$(document).ready(function() {
		$('#emailInput').blur(function() {
			if($(this).val() != '') {
				var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
				if(pattern.test($(this).val())){
					$(this).css({'borderBottom' : '1px solid #569b44'});
					$(this).css({'color' : '#569b44'});
				} else {
					$(this).css({'borderBottom' : '1px solid #ff0000'});
					$(this).css({'color' : '#ff0000'});
				}
			} else {
				$(this).css({'borderBottom' : '1px solid #ff0000'});			
			}	
		});
		$('#phoneInput').blur(function() {
			if($(this).val() != '') {
				var pattern = /^\+38\(0(3|5|6|9)(0|[6-9])\) \d{3}\-\d{2}\-\d{2}$/i;
				if(pattern.test($(this).val())){
					$(this).css({'borderBottom' : '1px solid #569b44'});
					$(this).css({'color' : '#569b44'});
				} else {
					$(this).css({'borderBottom' : '1px solid #ff0000'});
					$(this).css({'color' : '#ff0000'});
				}
			} else {
				$(this).css({'borderBottom' : '1px solid #ff0000'});			
			}	
		});
		$('#nameInput').blur(function() {
			if($(this).val() != '') {
				var pattern = /^(((\w+ )|(\w+))|(([а-яё]+ )|([а-яё]+))){1,3}$/ig;
				if(pattern.test($(this).val())){
					$(this).css({'borderBottom' : '1px solid #569b44'});
					$(this).css({'color' : '#569b44'});
				} else {
					$(this).css({'borderBottom' : '1px solid #ff0000'});
					$(this).css({'color' : '#ff0000'});
				}
			} else {
				$(this).css({'borderBottom' : '1px solid #ff0000'});			
			}	
		});
		$('#textInput').blur(function() {
			if($(this).val() != '') {
				var pattern = /./igm;
				if(pattern.test($(this).val())){
					$(this).css({'borderBottom' : '1px solid #569b44'});
					$(this).css({'color' : '#569b44'});
				} 
			} else {
				$(this).css({'borderBottom' : '1px solid #ff0000'});			
			}	
		});
	});
})();





