var title = function (title) {
    console.log('');
    var len = Math.floor((60 - title.length) / 2);
    title = (title.length > 0) ? `${"=".repeat(len)}${title}${"=".repeat(len)}` : "=".repeat(60);
    console.log(title);

    /*     if (title.length > 0) {
            console.log(`=============${title}=============`);
        } else {
            var title = "=".repeat(60);
            console.log(title);
        } */
}

var print = function (value) {
    console.log(value);
}


/**
"cat"=="cat"
"cat"==="cat"
1==true
1===true
0==false
0===false
*/

//======== 數字與+號 =========
title('數字與+號');
/**Number與string以+號運算子，數字會轉換成字串 */
var x = "Your weight is " + 70;
var y = 75 + " is you weight";
'15' + 3 //152

/**若為其他運算子，JavaScript不會將數字轉換成字串*/
'15' - 3 //13
'15' * 3 //45
'15' / 3 //5






