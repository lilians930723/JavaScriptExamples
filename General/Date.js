var $title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);
}

var $ex = function (title) {
    console.log('');
    var len = Math.floor((50 - title.length) / 2);
    title = (title.length > 0) ? `${".".repeat(len)}${title}${".".repeat(len)}` : "=".repeat(60);
    console.log(title);
}

$ex('new Date()');
var today = new Date();
console.log(today);

$ex('new Date(year, month, day)');
var date1 = new Date(2020, 3, 23);
var dt = new Date(2020, 3, 23, 10, 59, 10);

console.log(date1);
console.log(dt);

$ex('getYear(), getMonth(), getDate()');
console.log(`${dt.getYear()}/${dt.getMonth()}/${dt.getDate()}`);
console.log(`${dt.getFullYear()}/${dt.getMonth()}/${dt.getDate()}`);

$ex('getHours(), getMinutes(), getSeconds()');
console.log(`${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()}`);
console.log(dt.getTime());

//Ex - 解析字串中日期時間，但不建議
const dt2 = new Date('July 20, 69 00:20:18');
console.log(dt2);


var today = new Date();
var date1 = new Date(2020, 3, 23);
var dt = new Date(2020, 3, 23, 10, 59, 10);
//解析字串中日期時間，但不建議
const dt2 = new Date('July 20, 69 00:20:18');