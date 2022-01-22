"use strict";
const N = -8;
let set = [2, -5, 8, 13, 0, -10];
let subSet = [];
for (let i = 0; i < set.length; i++) {
    const val = set[i];
    const X = N - val;
    if (set.includes(X)) {
        subSet.push(val, X);
        break;
    }
}
console.log(subSet);
//# sourceMappingURL=game1.js.map