class Cookie {
     constructor(name){
         this._name = name
         this._time = 0
         this._maximum = 25
         this._status = this.status()
     }
     addTime(){
         this._time += 5
     }
     status (){
         if (this._time < this._maximum-10 && this._time !=0){
             console.log(this._name+', menit ke-'+this._time+' : mentah')
         } else if (this._time < this._maximum-5 && this._time !=0){
             console.log(this._name+', menit ke-'+this._time+' : hampir matang')
         } else if (this._time < this._maximum && this._time !=0){
             console.log(this._name+', menit ke-'+this._time+' : matang')
         } else if(this._time >= this._maximum){
             console.log(this._name+', menit ke-'+this._time+' : hangus')
         }
     }
 }

 class Kacang extends Cookie {
     constructor(){
         super('Kue Kacang')
         this._maximum=30
     }
 }

 class Coklat extends Cookie {
     constructor(){
         super('Kue Coklat')
     }
 }

 class Keju extends Cookie {
     constructor(){
         super('Kue Keju')
     }
 }

 let kacang = new Kacang()
 let coklat = new Coklat()
 let keju = new Keju()


 for (let i = 0; i < 5; i++){
     kacang.addTime()
     kacang.status()
 }
