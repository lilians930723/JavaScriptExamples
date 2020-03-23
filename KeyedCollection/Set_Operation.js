var set1 = new Set([1, 3, 5, 7, 9, 11]);
var set2 = new Set([3, 6, 9]);


//Ex1 - intersection交集
let Intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(Intersection);

//Ex2 - difference差異
let Difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(Difference);

//Ex3 - 較複雜的作業運算
function isSuperset(set, subset) {
    for (let element of subset) {
        if (!set.has(element)) {
            return false
        }
    }
    return true
}

function union(setA, setB) {
    let _union = new Set(setA)
    for (let element of setB) {
        _union.add(element)
    }
    return _union
}

function intersection(setA, setB) {
    let _intersection = new Set()
    for (let element of setB) {
        if (setA.has(element)) {
            _intersection.add(element)
        }
    }
    return _intersection
}

function symmetricDifference(setA, setB) {
    let _difference = new Set(setA)
    for (let element of setB) {
        if (_difference.has(element)) {
            _difference.delete(element)
        } else {
            _difference.add(element)
        }
    }
    return _difference
}

function difference(setA, setB) {
    let _difference = new Set(setA)
    for (let element of setB) {
        _difference.delete(element)
    }
    return _difference
}

// Examples
let setA = new Set([1, 2, 3, 4])
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])

console.log(isSuperset(setA, setB));          // => true
console.log(union(setA, setC));               // => Set [1, 2, 3, 4, 5, 6]
console.log(intersection(setA, setC)) ;       // => Set [3, 4]
console.log(symmetricDifference(setA, setC)); // => Set [1, 2, 5, 6]
console.log(difference(setA, setC));          // => Set [1, 2]