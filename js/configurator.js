/**
 *	Configurator
 *
 *	date 18.10.2017
 *	version 1.0
 */

 
$(function(){

	$("[data-toggle=popover]").popover({
		html : true,
		content: function() {
		  var content = $(this).attr("data-popover-content");
		  return $(content).children(".popover-body").html();
		},
		title: function() {
		  var title = $(this).attr("data-popover-content");
		  return $(title).children(".popover-heading").html();
		}
	}).parent().delegate('.select-attribute', 'click', function() {
		var $attribute = $(this).closest('.attribute'),
			hex = $(this).css('background-color'),
			attribute = '.' + $attribute.data('attribute'),
			value = '.' + $(this).data('value'),			
			$overlay = $('.preview').find(attribute);
		
		$overlay.find('.part').hide();
		$overlay.find(value).show();
		
		$attribute.find('.fa').css('text-shadow', '-2px 0 '+hex+', 0 2px '+hex+', 2px 0 '+hex+', 0 -2px '+hex);
	}).click(function(e) {
		e.preventDefault();
	});
	
	
	$('.add-to-cart').click(function(e) {		
		e.preventDefault;
		
		$('#basket .dropdown-menu').show();
		
		
		//$('#basket .dropdown-toggle').trigger('click');
		//$('#basket .dropdown-toggle').click();
		/*
		if ($('.mini-basket').find('.dropdown-menu').is(":hidden")) {
			// alert("yes")
			$(this).add();
			$('.dropdown-toggle').dropdown('toggle');
		}*/
	});

	
});
