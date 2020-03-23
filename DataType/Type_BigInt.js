const theBiggestInt = 9007199254740991n

const alsoHuge = BigInt(9007199254740991)
// ↪ 9007199254740991n

const hugeString = BigInt("9007199254740991")
// ↪ 9007199254740991n

const hugeHex = BigInt("0x1fffffffffffff")
// ↪ 9007199254740991n

const hugeBin = BigInt("0b11111111111111111111111111111111111111111111111111111")
// ↪ 9007199254740991n

var big = BigInt(Number.MAX_SAFE_INTEGER);
console.log(big);

var num1 = 2n ** 10n;
console.log(num1);

//將BigInt轉型成Number
var num1 = BigInt.asIntN(53, 98746385n);
console.log(num1);
console.log(typeof num1);