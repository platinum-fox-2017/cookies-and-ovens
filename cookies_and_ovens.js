// Answer These Questions:
//
// - What are essential classes?class kue, kue coklat, kue kacang, kue keju
// - What attributes will each class have?nama,waktu panggang
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?kue coklat,kacang,keju
//
//
// Your code here
// Sebagai tukang masak, saya ingin membuat kue yang memiliki berbagai jenis (kue kacang, coklat dan kue keju.)
// Waktu untuk memanggang setiap kue sebagai berikut:
//     Kue coklat: 20 menit
//     Kue kacang: 30 menit
//     Kue keju: 35 menit
// Sebagai tukang masak, saya bisa mengatur berapa lama kue dipanggang di dalam oven.
// Apa saja class yang perlu dibuat? class kue, kue coklat, kue kacang, kue keju
// Apa saja properti yang dipunyai setiap class? nama,waktu panggang
// Class mana yang merupakan inheritance, jika ada?kue coklat,kacang,keju

class Kue {
	constructor(name){
		this.name = name
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
console.log(coklat)
let kacang = new Kue_kacang()
console.log(kacang)
let keju = new Kue_coklat()
console.log(keju)
