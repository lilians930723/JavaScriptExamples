//object literal
var person = {
    name: "Kevin",
    age: 32,
    height: 175,
    weight: 64,
    bmi: function () {
        //object literal語法需要用this才能存取到本身屬性
        return this.weight / ((this.height / 100) ** 2);    
    }
};

console.log(person.name + ", " + person.height + ', ' + person.weight + ', ' + person.bmi());

//new constructor
var p = new Object();
p.name = 'David';
p.age = 35;
p.height = 170;
p.weight = 55;
p.bmi=function(){ 
    //需要用this才能存取到本身屬性
    return this.weight / ((this.height / 100) ** 2);
}

console.log(p['name'] + ', ' + p['height'] + ', ' + p['weight'] + ', ' + p.bmi());
