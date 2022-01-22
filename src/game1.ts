const N = -8;
let set : Array<number> = [2,-5,8,13,0,-10];
//subset será la respuesta para así poder conservar el arreglo original
let subSet : Array<number> = [];

for (let i = 0; i < set.length; i++) {
   const val = set[i];
   //se obtiene la diferencia entre el valor buscado y el valor actual en el array
   const X = N - val;
   //se busca en el array si existe el valor X
   if (set.includes(X)) {
      subSet.push(val, X);
      break;
   }
}

console.log(subSet);