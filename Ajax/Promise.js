/** 用Promise Constructor建立 Promise*/
//Promise Constructor建構函式語法是傳入一個executor
//new Promise( /* executor */ function(resolve, reject) { ... } );

const promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){ resolve('Suceess');},300);
});

//用Arror Function改寫Executor Function
const promise1 = new Promise((resolve, reject)=>{
    setTimeout(function(){ resolve('Suceess');},300);
});

promise1.then(function(value){
    console.log(value);
}, function(ex){
    console.log("失敗原因：" + ex);
});

console.log(promise1);



var promise1 = new Promise(function (resolve, reject) {
    //非同步操作
    resolve('Success');
    //或
    //reject('Fail失敗!');
});

//上面程式可用Arrow Function來改寫
var promise1 = new Promise((resolve, reject) => {
    resolve('Success成功');
});

promise1.then(function (value) {
    console.log(value);
},function(ex){
    console.log('失敗' + ex);
});

/**Promise.resolve(value)
 * 表示此value即將被此Promise物件解決,
 * value有三種：1.基本型別 2.Promise物件 3.Thenable物件
 */
 
 /**一。傳入基本型別 */
//Ex1 - 傳入Number & String()
var promiseObj = Promise.resolve(35);   //回傳Promise { 35 }物件
promiseObj.then(function(value){
        console.log('Success');
    },function(value){
        console.log('Fail');
    });

//也能寫成Promise chaining
Promise.resolve(35).then(function(value){
        console.log('Success');
    },function(value){
        console.log('Fail');
    });


//value不止能傳數字，也能傳String
Promise.resolve('Success').then(function(value) {
    console.log(value); // //回傳Promise { 'Success' }物件
  }, function(value) {
    // not called
  });

//Ex2 - 傳入Array陣列
//Resolving an array解析陣列 
var p = Promise.resolve([1, 2, 3]); //Promise { [ 1, 2, 3 ] }
p.then(function (value) {
    value.forEach(function (item, index, array) {
        console.log(item);
    });
});

//Ex3 - 傳入Object物件
var person = { name:"Kevin", mail:"kevin@gmail.com" };

var pro = Promise.resolve(person);  //Promise { { name: 'Kevin', mail: 'kevin@gmail.com' } }

pro.then(function(value){
        console.log(typeof value);
        for(var prop in value){
            console.log(value[prop]);
        }
    },function(value){
        console.log('Fail');
    });

/**二。傳入Promise物件 - Resolving another Promise解決另一個Promise物件 */
var promise1 = Promise.resolve(35);
var promise2 = Promise.resolve(promise1);   //回傳Promise { 35 }

promise2.then(function (value) {
    console.log('p2解析P1 value為:' + value);
});

console.log('promise1===promise2 ? ' + (promise1 === promise2));

/**三。傳入Thenable物件，Resolving thenable and throwing Errors(解決thenable及擲出錯誤 )*/
//Ex1.resolving a thenable object
var p1=Promise.resolve({
    then : function(onFulfill, onReject){
        onFulfill('fulfilled');
        //onReject('rejected');
    }
});

console.log(p1 instanceof Promise);

p1.then(function(value){
    console.log(value);
},function(ex){
    //fail
    console.log('失敗原因 : ' + ex);
});

//Ex2.Thenable throws before callback, Promise rejects
//使用object literal(object initializer)
var thenable = {
    then : function(resolve){
        throw new TypeError('Throwing');    //在Resolve()之前發生例外
        resolve('Resolving');
    }
};

var p2=Promise.resolve(thenable);

p2.then(function(value){
    //not called
}, function(ex){
    console.log(ex);
});

//Ex3. Thenable throws after callback, Promise resolves
var thenable = {
    then : function(resolve){
        resolve('Resolving');
        throw new TypeError('Throwing錯誤');    //在Resolve()之後發生例外
    }
};

var p3 = Promise.resolve(thenable);
console.log(p3);
p3.then(function(value){
    console.log(value);
},function(ex){
    //not call
});


//===================== Chaining after a catch =========================
new Promise((resolve,reject)=>{
    console.log('Promise Initail');
    resolve();
})
.then(()=>{
    throw new Error('Fail');

    console.log('This is then segment');
})
.catch(()=>{
    console.log('This is catch segment.');
})
.then(()=>{
    console.log('This is second then.');
});

