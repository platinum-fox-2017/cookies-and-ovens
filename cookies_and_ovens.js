class Cookie{
    constructor(){
        this.name = 'Cookie'
        this.status = 'mentah'
        this.cookingTime = 0
    }
    baking(time){
        for(let i = 5; i<=time; i+=5){
            if(i < this.cookingTime-10){
                this.status = 'mentah'
            }else if(i === this.cookingTime-5){
                this.status = 'hampir matang'
            }else if(i === this.cookingTime){
                this.status = 'matang'
            }else if(i > this.cookingTime){
                this.status = 'hangus'
            }
            console.log(`${this.name}, menit ke ${i} : ${this.status}`)
        }
    }

}

class Chocolate extends Cookie{
    constructor(){
        super()
        this.name = 'Kue Coklat'
        this.cookingTime = 20
    }
}

class Cheese extends Cookie{
    constructor(){
        super()
        this.name = 'Kue Keju'
        this.cookingTime = 35
    }
}

class Peanut extends Cookie{
    constructor(){
        super()
        this.name = 'Kue Kacang'
        this.cookingTime = 30
    }
}

let chocolate = new Chocolate()
chocolate.baking(25)

let cheese = new Cheese()
cheese.baking(40)

let peanut = new Peanut()
peanut.baking(30)