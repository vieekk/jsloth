var Jsloth = (function ($) {
	function Jsloth(options) {
		var defaults = {
			fps: 30,
			size: 64
		};
		this.settings = $.extend({}, defaults, options);
		this.create();
		this.direction = 0;
		this.x = this.y = -this.settings.size;
	}

	function create() {
		this.$sloth = $('<div class="sloth"></div>').prependTo('body');
		var px = '-' + this.settings.size + 'px';
		this.$sloth
			.addClass('sloth-' + this.settings.size)
			.css({
				left: px,
				top: px
			});
	}

	function exec() {
		var that = this;
		setInterval(function () {
			that.update();
		}, 1000/this.settings.fps);
	}

	function logic() {
		var width = $(window).width();
		var height = $(window).height();
		// logic...
	}

	function move() {
		var rand = function () {
			return Math.floor((Math.random()*5) + 1)
		};
		
		this.x += rand();
		this.y += rand();
	}

	function update() {
		this.move();
		this.logic();
		this.$sloth
			.css({
				left: this.x,
				top: this.y
			});
	}

	Jsloth.prototype.constructor = Jsloth;
	Jsloth.prototype.create = create;
	Jsloth.prototype.exec = exec;
	Jsloth.prototype.logic = logic;
	Jsloth.prototype.move = move;
	Jsloth.prototype.update = update;

	return Jsloth;
})(jQuery);

var sloth = new Jsloth();
sloth.exec();