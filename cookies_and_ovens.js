// Answer These Questions:
//
// - What are essential classes?
// Cookie , Oven 
// - What attributes will each class have?
// - What interface will each class provide?
// - How will the classes interact with each other?
// - Which classes will inherit from others, if any?
//
//
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
    
  }
}

class Kue {
  constructor(name,waktu_matang)  {
    this.name = name;
    this.waktu_matang = 0;
    this.status = 'mentah';
  }

}

