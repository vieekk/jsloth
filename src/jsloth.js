var Jsloth = (function ($) {
	function Jsloth() {
		this.create();
	}

	function create() {
		this.$sloth = $('<div class="sloth"></div>').prependTo('body');
	}

	function exec() {
		this.x = 0;
		this.y = 0;
		var that = this;
		setInterval(function () {
			that.update();
		}, 1000/10);
	}

	function move() {

	}

	function update() {
		this.x++;
		this.y++;
		this.$sloth.css({
			left: this.x + 'px',
			bottom: this.y + 'px'
		});
	}

	Jsloth.prototype.constructor = Jsloth;
	Jsloth.prototype.create = create;
	Jsloth.prototype.exec = exec;
	Jsloth.prototype.move = move;
	Jsloth.prototype.update = update;

	return Jsloth;
})(jQuery);

var sloth = new Jsloth();
sloth.exec();