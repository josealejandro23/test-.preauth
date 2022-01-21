"use strict";
const N = 10;
let set = [2, 5, 8, 14, 0];
let subSet = [];
set = set.filter((val) => {
    return val <= N;
});
for (var i = 0; i < set.length; i++) {
    for (let j = i + 1; j < set.length; j++) {
        if (set[i] + set[j] === N) {
            subSet.push(set[i], set[j]);
            break;
        }
    }
    if (subSet[0])
        break;
}
console.log(subSet);
