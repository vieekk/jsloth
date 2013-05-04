var Jsloth = (function () {
	var Jsloth = function () {
		var sloth = document.createElement('div');
		var attr = document.createAttribute('class');
		attr.value = 'sloth';
		sloth.setAttributeNode(attr);
		this.sloth = document.getElementsByTagName('body')[0].appendChild(sloth);
		this.x = 0;
		this.y = 0;
	};

	var exec = function () {
		// setInterval(update, 1000/10);
		update();
	};

	var update = function () {
		this.x++;
		this.y++;
		console.dir(this.x);
		// this.sloth.style.left = this.x + 'px';
		// this.sloth.style.bottom = this.y + 'px';
	};

	Jsloth.prototype.constructor = Jsloth;
	Jsloth.prototype.exec = exec;

	return Jsloth;
})();

var sloth = new Jsloth();
sloth.exec();