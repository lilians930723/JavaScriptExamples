
/** async function永遠回傳一個Promise物件，
 * 無論是否有用await, 或遇到throw exception 
 * 成功就執行resolve function,失敗則執行reject function
 * */
function wait(ms){ 
    return new Promise(r => setTimeout(r, ms));
}

async function Hello(){
    await wait(500);
    return 'Hello async function!';
}

var p = Hello();    
console.log(p); //Promise { <pending> }

p.then(function (value) {
    console.log(value)  // world
});