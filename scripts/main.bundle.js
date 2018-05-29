'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PopOver = function () {
	function PopOver() {
		var _this = this;

		var reached = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
		var total = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

		_classCallCheck(this, PopOver);

		this._reached = reached;
		this._total = total;

		var progressLink = document.querySelector('.progress-link');
		progressLink.addEventListener('mouseover', function () {
			return _this.open();
		});
		progressLink.addEventListener('mouseout', function () {
			return _this.close();
		});
	}

	_createClass(PopOver, [{
		key: 'open',
		value: function open() {
			var _el = document.querySelector('.pop-over');
			var nReached = _el.querySelector('.number.reached');
			var nTotal = _el.querySelector('.number.total');
			var nToReach = _el.querySelector('.number.to-reach');

			nReached.innerText = this.reached;
			nTotal.innerText = this.total;
			nToReach.innerText = this.toReach;
			_el.style.setProperty("--progress", this.progress);

			_el.classList.add('open');
		}
	}, {
		key: 'close',
		value: function close() {
			var _el = document.querySelector('.pop-over');
			_el.classList.remove('open');
			_el.style.setProperty("--progress", 0);
		}
	}, {
		key: 'reached',
		get: function get() {
			return '$' + this._reached;
		}
	}, {
		key: 'total',
		get: function get() {
			return '$' + this._total;
		}
	}, {
		key: 'toReach',
		get: function get() {
			return '$' + (this._total - this._reached);
		}
	}, {
		key: 'progress',
		get: function get() {
			return Math.round(100 * this._reached / this._total) + '%';
		}
	}]);

	return PopOver;
}();

var popOver = new PopOver(56, 125);
