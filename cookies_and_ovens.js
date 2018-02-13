// Answer These Questions:
//
// - What are essential classes?
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
// Your code here

class Kue {
  constructor(name){
    this.time = 0
    this.name = name
  }

  timer(){
    console.log(`waktu memasak ${this.name} selama ${this.time} menit`)
  }

  cooking_time(time){
    let status;
    for(let i = 5 ; i <= time ; i+= 5){
      if( i <= this.time-10 ){
        status = 'mentah'
      }else if (this.time - 5 === i ){
        status = 'hampir matang'
      }else if (this.time === i){
        status = 'matang'
      }else if (this.time < i){
        status = 'hangus'
      }
      console.log(`${this.name}, menit ke ${i} : ${status}`)
    }
  }

}

class KueCoklat extends Kue{
  constructor(name){
    super(name)
    this.time = 20
  }
}

class KueKacang extends Kue{
  constructor(name){
    super(name)
    this.time = 30
  }
}

class KueKeju extends Kue{
  constructor(name){
    super(name)
    this.time = 35
  }
}

let kueCoklat = new KueCoklat('kue coklat')
kueCoklat.timer()
kueCoklat.cooking_time(30)
