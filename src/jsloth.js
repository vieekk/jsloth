var Jsloth = (function () {
	var Jsloth = function () {
		var sloth = document.createElement('div');
		var attr = document.createAttribute('class');
		attr.value = 'sloth';
		sloth.setAttributeNode(attr);
		this.sloth = document.getElementsByTagName('body')[0].appendChild(sloth);
	};

	var exec = function () {

	};

	Jsloth.prototype.constructor = Jsloth;
	Jsloth.prototype.exec = exec;
	
	return Jsloth;
})();

var sloth = new Jsloth();
sloth.exec();