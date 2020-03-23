var title = function (title) {
    console.log('');
    console.log(`=============${title}=============`);
}

const set1 = new Set();
set1.add('JavaScript');
set1.add('HTML');
set1.add('CSS');
set1.add('jQuery');
set1.add('AJAX');

//Ex1 - get an iterator(單筆)
const iterator1 = set1[Symbol.iterator]();
console.log(iterator1);
console.log(iterator1.next().value);
console.log(iterator1.next().value);

//Ex2 - Iteration with for...of
title('for...of');
for (let value of set1.values()) {
    console.log(value);
}

//Ex3 - forEach()
title('forEach()');
//由於Set沒有key, 故其實key也是value，假名為key
set1.forEach(function (value, key, set1) {
    console.log(value);
});
