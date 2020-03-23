var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

const pi =3.1415962;

title('使用String()');
var piString = String(pi);

console.log(piString);
console.log(typeof piString);

title('使用toString()方法');
var ps = pi.toString();
console.log(ps);
console.log(typeof ps);





