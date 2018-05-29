class PopOver {
	constructor(reached = 0, total = 0) {
		this._reached = reached;
		this._total = total;

		const progressLink = document.querySelector('.progress-link');
		progressLink.addEventListener('mouseover', () => this.open());
		progressLink.addEventListener('mouseout', () => this.close());
	}

	get reached() {
		return `$${this._reached}`;
	}

	get total() {
		return `$${this._total}`;
	}

	get toReach() {
		return `$${this._total - this._reached}`;
	}

	get progress() {
		return `${Math.round(100 * this._reached / this._total)}%`;
	}

	open() {
		const _el = document.querySelector('.pop-over');
		const nReached = _el.querySelector('.number.reached');
		const nTotal = _el.querySelector('.number.total');
		const nToReach = _el.querySelector('.number.to-reach');

		nReached.innerText = this.reached;
		nTotal.innerText = this.total;
		nToReach.innerText = this.toReach;
		_el.style.setProperty("--progress", this.progress);

		_el.classList.add('open');
	}

	close() {
		const _el = document.querySelector('.pop-over');
		_el.classList.remove('open');
		_el.style.setProperty("--progress", 0);
	}
}

let popOver = new PopOver(56, 125);
