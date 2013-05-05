var Jsloth = (function ($) {
	function Jsloth(options) {
		var defaults = {
			fps: 60,
			position: 'top left',
			size: 64
		};
		this.settings = $.extend({}, defaults, options);
		this.create();
	}

	function create() {
		this.x = this.y = -this.settings.size;
		this.direction = 0;
		var position = this.settings.position.split(' ');

		for (var i = 0; i < position.length; i++) {
			switch (position[i]) {
				case 'left':
					this.x = -this.settings.size;
					break;
				case 'right':
					this.x = $(window).width();
					break;
				case 'top':
					this.y = -this.settings.size;
					break;
				case 'bottom':
					this.y = $(window).height();
					break;
			}
		}

		this.$sloth = $('<div class="sloth"></div>')
			.prependTo('body')
			.css({
				width: this.settings.size,
				height: this.settings.size,
				left: this.x,
				top: this.y
			});
		this.wayfinder();
	}

	function exec() {
		var that = this;
		setInterval(function () {
			that.update();
		}, 1000/this.settings.fps);
	}

	function logic() {
		if (this.random(1000) === 0) {
			this.direction = this.random(4);
			return;
		}

		this.wayfinder();
	}

	function move() {
		var rand = function () {
			return random.call(this, 5, 1);
		};

		this.x = this.direction % 2 === 0 ? this.x + rand() : this.x - rand();
		this.y = this.direction < 2 ? this.y + rand() : this.y - rand();
	}

	function random(max, start) {
		if (typeof start === 'undefined') start = 0;
		return Math.floor((Math.random()*max) + start);
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

	function wayfinder() {
		var width = $(window).width();
		var height = $(window).height();
		var x = this.direction % 2 === 0;
		var y = this.direction < 2;
		
		if (this.x >= width)
			x = false;
		else if (this.x + this.settings.size < 0)
			x = true;

		if (this.y >= height)
			y = false;
		else if (this.y + this.settings.size < 0)
			y = true;

		if (x && y)
			this.direction = 0;
		else if (!x && y)
			this.direction = 1;
		else if (x && !y)
			this.direction = 2;
		else
			this.direction = 3;
	}

	Jsloth.prototype.constructor = Jsloth;
	Jsloth.prototype.create = create;
	Jsloth.prototype.exec = exec;
	Jsloth.prototype.logic = logic;
	Jsloth.prototype.move = move;
	Jsloth.prototype.random = random;
	Jsloth.prototype.update = update;
	Jsloth.prototype.wayfinder = wayfinder;

	return Jsloth;
})(jQuery);

var sloth = new Jsloth();
sloth.exec();