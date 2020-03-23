var title = function (title) {
  console.log('');
  console.log(`=============${title}=============`);
}

var logType=function(value){ 
  console.log(typeof value);
}

//Dynamic typing
title('動態型別');
let p = 'Mobile Phone';  //String
logType(p);

p = 1200;  //Number
logType(p);

p = true;  //Boolean
logType(p);









