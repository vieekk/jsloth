var Jsloth = (function ($) {
	function Jsloth(options) {
		var defaults = {
			fps: 30,
			position: 'top left',
			size: 64
		};
		this.settings = $.extend({}, defaults, options);
		this.create();
	}

	function create() {
		this.$sloth = $('<div class="sloth"></div>').prependTo('body');
		var position = this.settings.position.split(' ');
		var px = '-' + this.settings.size + 'px';
		this.$sloth
			.addClass('sloth-' + this.settings.size)
			.css(position[0], px)
			.css(position[1], px);
	}

	function exec() {
		this.x = 0;
		this.y = 0;
		var that = this;
		setInterval(function () {
			that.update();
		}, 1000/this.settings.fps);
	}

	function logic(z) {
		if (typeof z === 'undefined') {
			this.logic('x');
			this.logic('y');
		} else {
			if (z === 'x') {
				length = $(window).width();
				i = 1;
			} else if (z === 'y') {
				length = $(window).height();
				i = 0;
			} else {
				return;
			}

			if (this[z] < length) return;
			var position = this.settings.position.split(' ');

			switch (position[i]) {
				case 'top':
					position[i] = 'bottom';
					break;
				case 'bottom':
					position[i] = 'top';
					break;
				case 'left':
					position[i] = 'left';
					break;
				case 'right':
					position[i] = 'right';
					break;
			}

			this.settings.position = position.join(' ');
			this[z] -= length;
		}
	}

	function move(z) {
		if (typeof z === 'undefined') {
			this.move('x');
			this.move('y');
		} else {
			var rand = Math.floor((Math.random()*5) + 1);
			this[z] += rand;
		}
	}

	function update() {
		this.move();
		this.logic();
		var position = this.settings.position.split(' ');
		this.$sloth
			.css(position[0], this.y)
			.css(position[1], this.x);
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