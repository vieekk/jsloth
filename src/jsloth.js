var Jsloth = (function () {
	function Jsloth() {
		this.create();
	}

	function create() {
		var sloth = document.createElement('div');
		var attr = document.createAttribute('class');
		attr.value = 'sloth';
		sloth.setAttributeNode(attr);
		this.sloth = document.getElementsByTagName('body')[0].appendChild(sloth);
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
		this.sloth.style.left = this.x + 'px';
		this.sloth.style.bottom = this.y + 'px';
	}

	Jsloth.prototype.constructor = Jsloth;
	Jsloth.prototype.create = create;
	Jsloth.prototype.exec = exec;
	Jsloth.prototype.move = move;
	Jsloth.prototype.update = update;

	return Jsloth;
})();

var sloth = new Jsloth();
sloth.exec();