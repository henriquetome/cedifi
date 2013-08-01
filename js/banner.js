$(function(){
			
	$('#slides').slides({
		play: 9000,
		pause: 2500,
		animationStart: function(current){
			$('.caption').animate({
				opacity: 0,
			},50);
			if (window.console && console.log) {
				console.log('animationStart on slide: ', current);
			};
		},
		animationComplete: function(current){
			$('.caption').animate({
				opacity: 1,
			}, "slow");
			if (window.console && console.log) {
				console.log('animationComplete on slide: ', current);
			};
		},
		slidesLoaded: function() {
			$('.caption').animate({
				opacity: 1,
			}, 200);
		}
	});
	
});