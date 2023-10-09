class Transaction {
	constructor({
		transactionDate,
		paymentDate,
		type,
		amount,
		description,
		show,
	}) {
		this.transactionDate = transactionDate;
		this.paymentDate = paymentDate;
		this.type = type;
		this.amount = amount;
		this.description = description;
		this.createdAt = new Date();
		this.show = show;
	}

	getEntrie() {
		return {
			transactionDate: this.transactionDate,
			paymentDate: this.paymentDate,
			type: this.type,
			amount: this.amount,
			description: this.description,
			createdAt: this.createdAt,
			show: this.show,
		};
	}
}

export default Transaction;
