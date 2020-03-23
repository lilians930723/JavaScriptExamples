var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

//國家, 確診, 死亡, 治癒
//台灣, 41, 1 ,12
//中國, 80134, 2914, 44595
//美國, 9665, 146, 694

//一維陣列
var Taiwan = [41, 1 ,12];
var China = [80134, 2914, 44595];
var America = [9665, 146, 694];

//二維陣列
var Global = [Taiwan, China, America];

title('顯示陣列元素');
console.log(Taiwan);
console.log(China);
console.log(America);
console.log(Global);

//用索引取值
console.log(Taiwan[0]+ ', ' + Taiwan[1] + ', ' + Taiwan[2]);
console.log('American : ' + Global[2][0]);

title('用forEach()迭代陣列');
//foreach
China.forEach(function(item, index, array){
    console.log(index, item);
});

China.forEach(function(item, index){
    console.log(index, item);
});

China.forEach(function(item){
    console.log(item);
});


