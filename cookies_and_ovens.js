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

class Cookies{
    constructor(name, cookingTime){
        this._name = name;
        this._cookingTime = cookingTime;
    }
}

class Chocolate extends Cookies{
    constructor(name, cookingTime){
        super(name, cookingTime);
    }
}

class Peanut extends Cookies{
    constructor(name, cookingTime){
        super(name, cookingTime);
    }
}

class Cheese extends Cookies{
    constructor(name, cookingTime){
        super(name, cookingTime);
    }
}

class Oven{
    constructor(cookingTime){
        this._cookingTime = cookingTime;
    }
}