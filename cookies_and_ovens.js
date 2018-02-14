class Cookie {
     constructor(name,waktu){
         this._name = name
         this._time = 0
         this._maximum = waktu || 25
         this._status = this.status()
     }
     addTime(){
         this._time += 5
     }
     status (){
       while(this._time<=this._maximum){
         if (this._time <= this._maximum-10){
             console.log(this._name+', menit ke-'+this._time+' : mentah')
         } else if (this._time <= this._maximum-5 ){
             console.log(this._name+', menit ke-'+this._time+' : hampir matang')
         } else if (this._time <= this._maximum){
             console.log(this._name+', menit ke-'+this._time+' : matang')
         } else if(this._time > this._maximum){
             console.log(this._name+', menit ke-'+this._time+' : hangus')
         }
         this.addTime()
       }
     }
 }

 class Kacang extends Cookie {
     constructor(){
        super('Kue Kacang',20)
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
