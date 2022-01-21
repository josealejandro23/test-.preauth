const N = 10;
let set : Array<number> = [2,5,8,14,0];
//subset será la respuesta para así poder conservar el arreglo original
let subSet : Array<number> = [];
//se eliminan todos los valores que de por sí son mayores al valor N
set = set.filter((val) =>{
   return val <= N
});

//se recorre el arreglo con doble ciclo, el externo para recorrer cada posición
//y el interno para recorrer las posición mayores al del arreglo externo.
for (var i = 0; i < set.length; i++) {
   //el arreglo interno va una posición por delante del externo
   for (let j = i+1; j < set.length; j++) {
      if (set[i] + set[j] === N) {
         subSet.push(set[i], set[j]);
         break;
      }
   }
   //Si ya hay elementos en el subset fue porque se encontró una respuesta y se termina el ciclo.
   if(subSet[0]) break;
}

console.log(subSet);