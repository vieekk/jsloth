var Jsloth = (function ($) {
	var Jsloth = function () {
		$('body').prepend('<p>Jsloth is running.</p>');
	};

	Jsloth.prototype.constructor = Jsloth;
	
	return Jsloth;
})(jQuery);

new Jsloth();