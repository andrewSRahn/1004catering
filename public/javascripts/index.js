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
				break
			case '한국어':
				$('#language .en').addClass('selected')
				$('#language .kr').addClass('unselected')
				$('#language .en').removeClass('unselected')
				$('#language .kr').removeClass('selected')
				$('.korean').hide()
				$('.english').show()
				break

		}
	})
})