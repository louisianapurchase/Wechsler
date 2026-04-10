jQuery(function($){

var BRUSHED = window.BRUSHED || {};

/* ==================================================
   Mobile Navigation
================================================== */
var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

BRUSHED.mobileNav = function(){
	var windowWidth = $(window).width();
	
	if( windowWidth <= 979 ) {
		if( $('#mobile-nav').length > 0 ) {
			mobileMenuClone.insertAfter('#menu');
			$('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
		}
	} else {
		$('#navigation-mobile').css('display', 'none');
		if ($('#mobile-nav').hasClass('open')) {
			$('#mobile-nav').removeClass('open');	
		}
	}
}

BRUSHED.listenerMenu = function(){
	$('#mobile-nav').on('click', function(e){
		$(this).toggleClass('open');
		
		if ($('#mobile-nav').hasClass('open')) {
			$('#navigation-mobile').slideDown(500, 'easeOutExpo');
		} else {
			$('#navigation-mobile').slideUp(500, 'easeOutExpo');
		}
		e.preventDefault();
	});
	
	$('#menu-nav-mobile a').on('click', function(){
		$('#mobile-nav').removeClass('open');
		$('#navigation-mobile').slideUp(350, 'easeOutExpo');
	});
}


/* ==================================================
   Slider Options
================================================== */

BRUSHED.slider = function(){
	$.supersized({
		// Functionality
		slideshow               :   1,			// Slideshow on/off
		autoplay				:	1,			// Slideshow starts playing automatically
		start_slide             :   1,			// Start slide (0 is random)
		stop_loop				:	0,			// Pauses slideshow on last slide
		random					: 	0,			// Randomize slide order (Ignores start slide)
		slide_interval          :   12000,		// Length between transitions
		transition              :   1, 			// 0-None, 1-Fade, 2-Slide Top, 3-Slide Right, 4-Slide Bottom, 5-Slide Left, 6-Carousel Right, 7-Carousel Left
		transition_speed		:	300,		// Speed of transition
		new_window				:	1,			// Image links open in new window/tab
		pause_hover             :   0,			// Pause slideshow on hover
		keyboard_nav            :   1,			// Keyboard navigation on/off
		performance				:	1,			// 0-Normal, 1-Hybrid speed/quality, 2-Optimizes image quality, 3-Optimizes transition speed // (Only works for Firefox/IE, not Webkit)
		image_protect			:	1,			// Disables image dragging and right click with Javascript
												   
		// Size & Position						   
		min_width		        :   0,			// Min width allowed (in pixels)
		min_height		        :   0,			// Min height allowed (in pixels)
		vertical_center         :   1,			// Vertically center background
		horizontal_center       :   1,			// Horizontally center background
		fit_always				:	0,			// Image will never exceed browser width or height (Ignores min. dimensions)
		fit_portrait         	:   1,			// Portrait images will not exceed browser height
		fit_landscape			:   0,			// Landscape images will not exceed browser width
												   
		// Components							
		slide_links				:	'blank',	// Individual links for each slide (Options: false, 'num', 'name', 'blank')
		thumb_links				:	0,			// Individual thumb links for each slide
		thumbnail_navigation    :   0,			// Thumbnail navigation
		slides 					:  	[			// Slideshow Images
			{ 
				image: 'img/slider-images/image01.jpg', 
			   title: '<div class="slide-content"><div class="title">Mountain Lion Tech</div><div class="subtitle">Data Science & Engineering Consulting | Full Stack Development</div></div>', 
				thumb: '', 
				url: '' 
			},
			{ 
				image: 'img/slider-images/image02.jpg', 
			   title: '<div class="slide-content"><div class="title">Mountain Lion Tech</div><div class="subtitle">Data Science & Engineering Consulting | Full Stack Development</div></div>',
				thumb: '', 
				url: '' 
			},
			{ 
				image: 'img/slider-images/image03.jpg', 
			   title: '<div class="slide-content"><div class="title">Mountain Lion Tech</div><div class="subtitle">Data Science & Engineering Consulting | Full Stack Development</div></div>',
				thumb: '', 
				url: '' 
			},
			{ 
				image: 'img/slider-images/image04.jpg', 
			   title: '<div class="slide-content"><div class="title">Mountain Lion Tech</div><div class="subtitle">Data Science & Engineering Consulting | Full Stack Development</div></div>',
				thumb: '', 
				url: '' 
			}
			
				],
			
									
		// Theme Options			   
		progress_bar			:	0,			// Timer for each slide							
		mouse_scrub				:	0
		
	});

}


/* ==================================================
   Navigation Fix
================================================== */

BRUSHED.nav = function(){
	$('.sticky-nav').waypoint('sticky');
}


/* ==================================================
   Filter Works
================================================== */

BRUSHED.filter = function () {
	if ($('#projects').length > 0) {
		var $container = $('#projects');

		$container.imagesLoaded(function() {
			$container.isotope({
				animationEngine: 'best-available',
				itemSelector: '.item-thumbs',
				layoutMode: 'fitRows'
			});
		});

		// filter items when filter link is clicked
		var $optionSets = $('#options .option-set'),
			$optionLinks = $optionSets.find('a');

		$optionLinks.click(function() {
			var $this = $(this);
			// don't proceed if already selected
			if ($this.hasClass('selected')) {
				return false;
			}
			var $optionSet = $this.parents('.option-set');
			$optionSet.find('.selected').removeClass('selected');
			$this.addClass('selected');

			// make option object dynamically, i.e. { filter: '.my-filter-class' }
			var options = {},
				key = $optionSet.attr('data-option-key'),
				value = $this.attr('data-option-value');
			// parse 'false' as false boolean
			value = value === 'false' ? false : value;
			options[key] = value;

			// Handle layoutMode changes
			if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
				// changes in layout modes need extra logic
				changeLayoutMode($this, options);
			} else {
				// otherwise, apply new options
				$container.isotope(options);
			}

			return false;
		});
	}
}



/* ==================================================
   FancyBox
================================================== */

BRUSHED.fancyBox = function() {
	if ($('.fancybox').length > 0 || $('.fancybox-media').length > 0 || $('.fancybox-various').length > 0) {
		$(".fancybox").fancybox({
			padding: 0,
			maxWidth: 800, // Set maximum width for the popup
			maxHeight: 600, // Set maximum height for the popup
			fitToView: true,
			width: '70%', // Adjust width to make it responsive
			height: '70%', // Adjust height as necessary
			autoSize: true, // Disable automatic sizing
			closeClick: false,
			openEffect: 'none',
			closeEffect: 'none',
			scrolling: 'yes', // Ensure scrolling inside the popup
			beforeShow: function () {
				const element = $(this.element);
				const title = element.attr('title');
				const alt = element.parent().find('img').attr('alt');
				this.title = `<h4>${title}</h4><p>${alt}</p>`;
			},
			helpers: {
				title: { type: 'inside' },
				overlay: { locked: false }
			}
		});

		// Media-specific Fancybox
		$('.fancybox-media').fancybox({
			openEffect: 'none',
			closeEffect: 'none',
			helpers: { media: {} }
		});
	}
};

// Initialize on document ready
$(document).ready(function () {
	BRUSHED.fancyBox();
});

/* ==================================================
   Firebase Configuration & Contact Form
================================================== */

const firebaseConfig = {
	apiKey: "AIzaSyCDLlSRBEqFPG-bWqnv6nfaJfu1XTLPc_4",
	authDomain: "mountainliontech-f4a19.firebaseapp.com",
	projectId: "mountainliontech-f4a19",
	storageBucket: "mountainliontech-f4a19.firebasestorage.app",
	messagingSenderId: "605785106462",
	appId: "1:605785106462:web:70299abcafea61cf74260f"
};

let db = null;

// Initialize Firebase when it's available
function initFirebase() {
	if (typeof firebase !== 'undefined' && typeof firebase.initializeApp !== 'undefined') {
		try {
			firebase.initializeApp(firebaseConfig);
			db = firebase.firestore();
		} catch(e) {
			console.error('Firebase initialization error:', e);
		}
	} else {
		setTimeout(initFirebase, 100);
	}
}

// Initialize Firebase immediately
initFirebase();

BRUSHED.contactForm = function(){
	var submitBtn = document.getElementById('contact-submit');
	
	if (!submitBtn) {
		console.error('Contact form button not found in DOM');
		return;
	}
	
	submitBtn.addEventListener('click', function(e) {
		e.preventDefault();
		
		if (!db) {
			document.getElementById('response').innerHTML = '<p style="color: #ff6b6b;">Firebase not ready. Please refresh the page.</p>';
			return false;
		}
		
		var name = document.getElementById('contact_name').value.trim();
		var email = document.getElementById('contact_email').value.trim();
		var phone = document.getElementById('contact_phone').value.trim();
		var message = document.getElementById('contact_message').value.trim();
		var responseDiv = document.getElementById('response');
		
		responseDiv.innerHTML = '';
		
		if(!name) {
			responseDiv.innerHTML = '<p style="color: #ff6b6b;">Please enter your name</p>';
			return false;
		}
		if(!email || !email.includes('@')) {
			responseDiv.innerHTML = '<p style="color: #ff6b6b;">Please enter a valid email</p>';
			return false;
		}
		if(!message || message.length < 5) {
			responseDiv.innerHTML = '<p style="color: #ff6b6b;">Please enter a message (at least 5 characters)</p>';
			return false;
		}
		
		responseDiv.innerHTML = '<p style="color: #3498db;">Sending...</p>';
		submitBtn.disabled = true;
		submitBtn.style.opacity = '0.6';
		
		db.collection("contacts").add({
			name: name,
			email: email,
			phone: phone,
			message: message,
			timestamp: firebase.firestore.FieldValue.serverTimestamp()
		})
		.then(function(docRef) {
			document.getElementById('contact-form').reset();
			responseDiv.innerHTML = '<p style="color: #2ecc71;"><strong>Thank You!</strong></p><p>Your message has been received. We\'ll get back to you soon.</p>';
			submitBtn.disabled = false;
			submitBtn.style.opacity = '1';
		})
		.catch(function(error) {
			console.error('Message submission error:', error);
			responseDiv.innerHTML = '<p style="color: #ff6b6b;"><strong>Error:</strong> ' + error.message + '</p>';
			submitBtn.disabled = false;
			submitBtn.style.opacity = '1';
		});
		
		return false;
	});
}




/* ==================================================
   Menu Highlight
================================================== */

BRUSHED.menu = function(){
	$('#menu-nav, #menu-nav-mobile').onePageNav({
		currentClass: 'current',
		changeHash: false,
		scrollSpeed: 750,
		scrollOffset: 30,
		scrollThreshold: 0.5,
		easing: 'easeOutExpo',
		filter: ':not(.external)'
	});
}

/* ==================================================
   Next Section
================================================== */

BRUSHED.goSection = function(){
	$('#nextsection').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}

/* ==================================================
   GoUp
================================================== */

BRUSHED.goUp = function(){
	$('#goUp').on('click', function(){
		$target = $($(this).attr('href')).offset().top-30;
		
		$('body, html').animate({scrollTop : $target}, 750, 'easeOutExpo');
		return false;
	});
}


/* ==================================================
	Scroll to Top
================================================== */

BRUSHED.scrollToTop = function(){
	var windowWidth = $(window).width(),
		didScroll = false;

	var $arrow = $('#back-to-top');

	$arrow.click(function(e) {
		$('body,html').animate({ scrollTop: "0" }, 750, 'easeOutExpo' );
		e.preventDefault();
	})

	$(window).scroll(function() {
		didScroll = true;
	});

	setInterval(function() {
		if( didScroll ) {
			didScroll = false;

			if( $(window).scrollTop() > 1000 ) {
				$arrow.css('display', 'block');
			} else {
				$arrow.css('display', 'none');
			}
		}
	}, 250);
}

/* ==================================================
   Thumbs / Social Effects
================================================== */

BRUSHED.utils = function(){
	
	$('.item-thumbs').bind('touchstart', function(){
		$(".active").removeClass("active");
		$(this).addClass('active');
	});
	
	$('.image-wrap').bind('touchstart', function(){
		$(".active").removeClass("active");
		$(this).addClass('active');
	});
	
	$('#social ul li').bind('touchstart', function(){
		$(".active").removeClass("active");
		$(this).addClass('active');
	});
	
}

/* ==================================================
   Accordion
================================================== */

BRUSHED.accordion = function(){
	var accordion_trigger = $('.accordion-heading.accordionize');
	
	accordion_trigger.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).addClass('inactive');
		}
		else{
			accordion_trigger.find('.active').addClass('inactive');          
			accordion_trigger.find('.active').removeClass('active');   
			$(this).removeClass('inactive');
			$(this).addClass('active');
		}
		event.preventDefault();
	});
}

/* ==================================================
   Toggle
================================================== */

BRUSHED.toggle = function(){
	var accordion_trigger_toggle = $('.accordion-heading.togglize');
	
	accordion_trigger_toggle.delegate('.accordion-toggle','click', function(event){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
			$(this).addClass('inactive');
		}
		else{
			$(this).removeClass('inactive');
			$(this).addClass('active');
		}
		event.preventDefault();
	});
}

/* ==================================================
   Tooltip
================================================== */

BRUSHED.toolTip = function(){ 
	$('a[data-toggle=tooltip]').tooltip();
}


/* ==================================================
	Init
================================================== */

BRUSHED.slider();

$(document).ready(function(){
	Modernizr.load([
	{
		test: Modernizr.placeholder,
		nope: 'js/placeholder.js', 
		complete : function() {
				if (!Modernizr.placeholder) {
					try {
						if (typeof Placeholders !== 'undefined' && typeof Placeholders.init === 'function') {
							Placeholders.init({
								live: true,
								hideOnFocus: false,
								className: "yourClass",
								textColor: "#999"
							});    
						}
					} catch(e) {
						console.error('Placeholder polyfill initialization error:', e);
					}
				}
		}
	}
	]);
	
	// Preload the page with jPreLoader
	try {
		if (typeof jQuery.fn.jpreLoader === 'function') {
			$('body').jpreLoader({
				splashID: "#jSplash",
				showSplash: true,
				showPercentage: true,
				autoClose: true,
				splashFunction: function() {
					$('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
				}
			});
		}
	} catch(e) {
		console.error('Page preloader initialization error:', e);
	}
	
	try { BRUSHED.nav(); } catch(e) { console.error('Navigation initialization error:', e); }
	try { BRUSHED.mobileNav(); } catch(e) { console.error('Mobile navigation initialization error:', e); }
	try { BRUSHED.listenerMenu(); } catch(e) { console.error('Menu listener initialization error:', e); }
	try { BRUSHED.menu(); } catch(e) { console.error('Menu highlighting initialization error:', e); }
	try { BRUSHED.goSection(); } catch(e) { console.error('Section navigation initialization error:', e); }
	try { BRUSHED.goUp(); } catch(e) { console.error('Scroll to top initialization error:', e); }
	try { BRUSHED.filter(); } catch(e) { console.error('Filter initialization error:', e); }
	try { BRUSHED.fancyBox(); } catch(e) { console.error('FancyBox initialization error:', e); }
	try { BRUSHED.contactForm(); } catch(e) { console.error('Contact form initialization error:', e); }
	try { BRUSHED.scrollToTop(); } catch(e) { console.error('Scroll to top button initialization error:', e); }
	try { BRUSHED.utils(); } catch(e) { console.error('Utils initialization error:', e); }
	try { BRUSHED.accordion(); } catch(e) { console.error('Accordion initialization error:', e); }
	try { BRUSHED.toggle(); } catch(e) { console.error('Toggle initialization error:', e); }
	try { BRUSHED.toolTip(); } catch(e) { console.error('Tooltip initialization error:', e); }
});

$(window).resize(function(){
	BRUSHED.mobileNav();
});

});
