$(document).ready(()=>{
	switch($('.selected').text()){
		case 'english':
			$('.korean').hide()
			break
		case '한국어':
			$('.english').hide()
			break
	}

	$('#language').click(()=>{
		switch($('.selected').text()){
			case 'english':
				$('#language .en').addClass('unselected')
				$('#language .kr').addClass('selected')
				$('#language .en').removeClass('selected')
				$('#language .kr').removeClass('unselected')
				$('.korean').show()
				$('.english').hide()
				// $('nav').css('height', '80px')
				break
			case '한국어':
				$('#language .en').addClass('selected')
				$('#language .kr').addClass('unselected')
				$('#language .en').removeClass('unselected')
				$('#language .kr').removeClass('selected')
				$('.korean').hide()
				$('.english').show()
				// $('nav').css('height', '75px')
				break
		}
		showSlides(1)
	})
})

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";


  if($('#language .selected').text() == '한국어'){
	  switch(n){
	  	case 1:
	  		$('#image-title').text('본부')
	  		break
	  	case 2:
	  		$('#image-title').text('사탕과 셀로판')
	  		break
	  	case 3:
	  		$('#image-title').text('꽃병과 유리')
	  		break
	  	case 4:
	  		$('#image-title').text('트럭')
	  		break
	  }
  }
  else if($('#language .selected').text() == 'english'){
	  switch(n){
	  	case 1:
	  		$('#image-title').text('headquarters')
	  		break
	  	case 2:
	  		$('#image-title').text('candy and cellophane')
	  		break
	  	case 3:
	  		$('#image-title').text('vase and glass')
	  		break
	  	case 4:
	  		$('#image-title').text('truck')
	  		break
	  }
  }
}