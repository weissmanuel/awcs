/**
 *	Bootstrap Carousel
 *
 *	https://codepen.io/bsngr/pen/rbyas
 *
 *	date 18.10.2017
 *	version 1.0
 */

$(document).ready(function(){
	
	
	/**
	 *	Carousel Progress Bar
	 *	
	 *	This class insert a progress $bar to the $carousel
	 *	Define the sliding speed by setting speed 
	 */
	var CarouselProgressBar = {
		
		/**
		 *	set parameters
		 */
		percent: 0,
		intervaltime: 30, // in milliseconds
		speed: 15, // in seconds
		
		/**
		 *	set objects
		 */
		$bar: $('.carousel-progress-bar'),
		$carousel: $('#main-slider'),		
		
		/**
		 *	init progress bar
		 */
		init: function() {
			// define carousel
			this.$carousel.carousel({interval: false, pause: true}).on('slid.bs.carousel', function () {
				CarouselProgressBar.percent = 0;
				CarouselProgressBar.$bar.css({width:0});
			});			
			// set interval
			this.barInterval = setInterval(this.progressBarCarousel, this.intervaltime);				
			// hover effect
			this.$carousel.hover(this.carouselHoverIn, this.carouselHoverOut);			
		},		
		
		/**
		 *	clear iterval when hover
		 */
		carouselHoverIn: function() {
			clearInterval(CarouselProgressBar.barInterval);
		},
		
		/**
		 *	reset interval after hover
		 */
		carouselHoverOut: function() {
			CarouselProgressBar.barInterval = setInterval(CarouselProgressBar.progressBarCarousel, CarouselProgressBar.intervaltime);
		},
		
		/**
		 *	progress bar
		 *	the width of the progress bar depends on the percent
		 */
		progressBarCarousel: function() {			
			percent = CarouselProgressBar.percent;
			speed = 100 / CarouselProgressBar.speed / CarouselProgressBar.intervaltime;
			
			CarouselProgressBar.$bar.css({width:percent+'%'});
			percent = percent + speed;
			if (percent>100) {
				percent=0;
				CarouselProgressBar.$carousel.carousel('next');
			}
			CarouselProgressBar.percent = percent;
		}		
	};
	CarouselProgressBar.init();
	
	/**
	 *
	 *
	 */
	var CarouselMovingContent = {
		/**
		 *	parameters
		 */
		
		/**
		 *	objects
		 */
		$carousel: $('#main-slider'),
		$move: $('.move'),
		
		/**
		 *	init
		 */
		init: function() {
			this.$carousel.on('mousemove', this.slider_hover);
		},
		
		slider_hover: function(e) {
			
			var width = $(this).width(),
				height = $(this).height(),
				offset = $(this).offset(),		
				left = event.pageX - offset.left,
				top = event.pageY - offset.top;
				
				if(width / 2 > left) {
					var vertical = 'right';
				} else {width / 2 <= left} {
					var vertical = 'left';
				}
				
				if(height / 2 > top) {
					var horizontal = 'top';
				} else {height / 2 <= top} {
					var horizontal = 'bot';
				}
				
				
			$(this).find(CarouselMovingContent.$move).each(function(i) {
								
				var position = $(this).position(),	
					moveLeft = position.left + vertical,
					moveTop = position.top + horizontal;
				
				$(this).css({'left': moveLeft, 'top': moveTop})
			});			
		
		},
		
		leave_slider: function(e) {
			
		}
	};
	
	CarouselMovingContent.init();
	
});
