var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

var gender = false;
console.log(gender == true ? '男性' : '女性');

//false, 0, “”空字串, NaN, null, undefined
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(undefined));

//其他
console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean('')); //false
console.log(Boolean(9563)); //true