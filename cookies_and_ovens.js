class Cake {
	constructor(name, time_cooked) {
		this._name = name;
		this._time = 0;
		this._time_cooked = time_cooked;
		this._status = 'mentah';
	}

	cook() {
		this._time += 5;
		if (this._time_cooked - 5 == this._time) this._status = 'hampir matang';
		else if (this._time_cooked == this._time) this._status = 'matang';
		else if (this._time_cooked < this._time) this._status = 'hangus';

		console.log(`${this._name}, menit ke ${this._time} : ${this._status}`);
	}
}

class Chocolate extends Cake {
	constructor(name, time_cooked) {
		super(name, time_cooked);
	}
}

class Peanut extends Cake {
	constructor(name, time_cooked) {
		super(name, time_cooked);
	}
}

class Cheese extends Cake {
	constructor(name, time_cooked) {
		super(name, time_cooked);
	}
}

let kue_coklat = new Chocolate('Kue coklat', 20);
let kue_kacang = new Chocolate('Kue kacang', 30);
let kue_keju = new Chocolate('Kue keju', 35);
let time_cooked = 25;

for (var i = 0; i < time_cooked; i+=5) {
	kue_coklat.cook();
	kue_kacang.cook();
	kue_keju.cook();
}