$(document).ready(function(){

	var heightDoc = $(document).height()
	var heightWindow = $(window).height()
	var heightCont = $('.stage').height()

	$('.overlay').height(heightDoc)

	$('.exam-nav li a').on('click', function(e){
		e.preventDefault()

		var docTop = $(document).scrollTop()
		var htmlStage = $(this).parent().find('aside').html()
		var titled = $(this).text()

		$('.stage').css({"top":docTop, "marginTop":heightWindow/2 - 250})

		$('.overlay').fadeIn(300, function(){
			$('.stage').fadeIn(500)
		})

		$('.stage .stageHeader h3').text(titled)
		$('.stage .stageContent #scrollbox3').html(htmlStage)
	})

	$('.close, .overlay').on('click', function(e){
		e.preventDefault()

		$('.stage').fadeOut(500, function(){
			$('.overlay').fadeOut(300)
		})
	})

	$('#scrollbox3').enscroll({
	    showOnHover: true,
	    verticalTrackClass: 'track3',
	    verticalHandleClass: 'handle3'
	});

})