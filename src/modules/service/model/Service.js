class Service {
		constructor({id, name, description, price, duration, historic}) {
				this.id = id;
				this.name = name;
				this.description = description;
				this.price = price;
				this.duration = duration;
				this.historic = historic || [];
		}

		setHistoric(historic) {
				this.historic = [...this.historic, historic];
		}
}

export default Service;
