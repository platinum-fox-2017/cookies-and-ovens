// Answer These Questions:
//
// - What are essential classes?
//   Kue , Oven 
// - What attributes will each class have?
//   Ove: kue , lama_panggang | Kue: name, waktu_matang, status
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//   Gak ada kelas yang inheritance
// Your code here
/*
Ketentuan 
Kue coklat 20 menit
Kue kacang 30 menit
Kue keju 35 menit
*/


class Oven {
  constructor(kue,lama_panggang) {
    this.kue = kue;
    this.lama_panggang = lama_panggang;
  }
  panggang(){
    if(this.lama_panggang % 5 != 0 ){
      console.log('Waktu Panggang Harus Kelipatan 5');
    } else if(this.lama_panggang < 5 ){
      console.log('Waktu Panggang Tidak Boleh Kurang dari 5')  ;
    } else {
      let kaliPanggang = this.lama_panggang / 5;
      let waktuSetengahMatang = Math.round(this.kue.waktu_matang / 2);
      let waktuMatang = this.kue.waktu_matang;
      let menitKe = 5;
      for(let i = 0; i < kaliPanggang; i++){
        if(menitKe < waktuSetengahMatang){
          var status_kue = 'mentah';
        } else if(menitKe === waktuMatang ){
          var status_kue = 'matang';
        } else if(menitKe > waktuSetengahMatang && menitKe < waktuMatang){
          var status_kue = 'hampir matang';
        } else if(menitKe > waktuMatang ){
          var status_kue = 'hangus';
        }
         console.log(`${this.kue.name}, menit ke ${menitKe} : ${status_kue} `) ;
         menitKe += 5;
      }
    }
  }
}

class Kue {
  constructor(name,waktu_matang)  {
    this.name = name;
    this.waktu_matang = waktu_matang;
    this.status = 'mentah';
  }
}
let kue = new Kue('Kue Cokelat',20);
let oven = new Oven(kue,30);
oven.panggang()

