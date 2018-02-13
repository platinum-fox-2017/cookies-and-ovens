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
"use strict"
class Cookies{
  constructor(_name,bakedTime){
    this._name=_name
    this._bakedTime=bakedTime
  }

bakedCookies(time){
  for(var i=0;i<=time;i+=5){
    if(i>=5){
      if(i===this._bakedTime-5){
        console.log(this._name+', menit ke '+i+' hampir matang')
      }
      else if(i===this._bakedTime){
        console.log(this._name+', menit ke '+i+' matang')
      }
      else if(i>=this._bakedTime){
        console.log(this._name+', menit ke '+i+' hangus')
      }
      else{
        console.log(this._name+', menit ke '+i+' mentah')
      }
    }
  }
  console.log('\n')
}

}

let newCoklat = new Cookies('kue coklat',20)
let newKacang = new Cookies('kue kacang',30)
let newKeju = new Cookies('kue keju',35)

newCoklat.bakedCookies(25)
newKacang.bakedCookies(35)
newKeju.bakedCookies(40)
