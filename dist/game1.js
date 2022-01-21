"use strict";
const N = 10;
let set = [2, 5, 8, 14, 0];
let subSet = [];
set = set.filter((val) => {
    return val <= N;
});
for (let i = 0; i < set.length; i++) {
    const val = set[i];
    let j;
    const X = N - val;
    j = set.indexOf(X);
    if (i === j)
        continue;
    if (j >= 0) {
        subSet.push(val, set[j]);
        break;
    }
}
console.log(subSet);
//# sourceMappingURL=game1.js.map