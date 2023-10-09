class Stock {
	constructor({ id, title, description, unit, amount, show }) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.unit = unit;
		this.amount = amount;
		this.show = show;
		this.createdAt = new Date();
	}

	getEntitie() {
		return {
			id: this.id,
			title: this.title,
			description: this.description,
			unit: this.unit,
			amount: this.amount,
			show: this.show || false,
			createdAt: this.createdAt || null,
		};
	}

	getShow() {
		return this.show;
	}
}

export default Stock;
