//Reference
//MDN -- encodeRUI()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/encodeURI


/** encodeURI()和decodeURL()方法 */

const uri = 'http://www.codemagic.com.tw/?name="王大明"';

console.log(uri);

var encoded = encodeURI(uri);
console.log(encoded);

var decoded='';
try{
    decoded = decodeURI(encoded);
}catch(ex){
    console.log(ex);
}

console.log(decoded);

