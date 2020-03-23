function makeAdder(a){ 
    return function(b){
        return a+b;
    }
}

var add5 = makeAdder(5);
console.log(add5);
console.log(add5(6));

var add20 = makeAdder(20);
console.log(add20);
console.log(add20(7));