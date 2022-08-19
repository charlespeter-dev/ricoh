jQuery(document).ready(function($) {
	var btnAccordion = $(".jsAccordionContainerTrigger");
		btnAccordion.each(function () {
			$(this).on('click', function () {
				var icon = $(this).find('.jsAccordionContainerIconElement');
				var current = parentNode("jsAccordionContainer",$(this));
				var content = current.children()[1];
				if(current === undefined || content == undefined) return;
				if (current.hasClass("accordion-open")) {
					current.removeClass("accordion-open");
					$(content).slideUp(500);
					icon.css("transform","rotate(0deg)");
				} else {
					current.addClass("accordion-open");
					$(content).stop(true).slideDown(500);
					icon.css("transform","rotate(180deg)");
					$(content).css("display","block");
				}
			});
		});
	
		var parentNode = function(className,elem){
			var current = elem.parent();
			if(current[0].nodeName == "BODY") return undefined;
			if(current.hasClass(className)) {
				return current;
			}else{
				return parentNode(className,current);
			}
		};
});