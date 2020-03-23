//Function Declaration
function circle(r) {
    return parseFloat(r) * Math.PI * 2.0;
}

console.log(circle(5.138)); //32.28300610828872

//function Exprerssion
var circleArea = function (r) {
    return parseInt(r) * Math.PI * 2;
}

console.log(circleArea(5.138)); //31.41592653589793