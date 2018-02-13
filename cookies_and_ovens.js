// Answer These Questions:
//
// - What are essential classes?class kue, kue coklat, kue kacang, kue keju
// - What attributes will each class have?nama,waktu panggang
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?kue coklat,kacang,keju
//
//


class Kue {
	constructor(name){
		this.name = name
		this.bakeTime = 5
	}
	bake(){
		for(let i =0;i<60;i+=5){
			if(i < this.bakeTime-5){
				console.log(`${this.name}. pada menit ke ${i} : mentah`)
			}
			else if(i === this.bakeTime-5){
				console.log(`${this.name}, pada menit ke ${i}: hampir matang`)
			}
			else if(i === this.bakeTime){
				console.log( `${this.name}, pada menit ke ${i}: matang`)
			}
			else if(i > this.bakeTime){
				console.log( `${this.name}, pada menit ke ${i}: hangus`)
			}

		}
	}

}

class Kue_coklat extends Kue{
	constructor(name){
		super(name)
		this.name = name|| 'kue coklat'
		this.bakeTime = 20
	}
}
class Kue_kacang extends Kue{
	constructor(){
		super()
		this.name = 'kue kacang'
		this.bakeTime = 30
	}
}
class Kue_keju extends Kue{
	constructor(name){
		super(name)
		this.name = name|| 'kue keju'
		this.bakeTime = 35
	}
}

let coklat = new Kue_coklat()
coklat.bake()
let kacang = new Kue_kacang()
console.log(kacang)
let keju = new Kue_coklat()
console.log(keju)
