const N = 10;
let set : Array<number> = [2,5,8,14,0];
//subset será la respuesta para así poder conservar el arreglo original
let subSet : Array<number> = [];
//se eliminan todos los valores que de por sí son mayores al valor N
set = set.filter((val) =>{
   return val <= N
});

for (let i = 0; i < set.length; i++) {
   const val = set[i];
   let j : number;
   //se obtiene la diferencia entre el valor buscado y el valor actual en el array
   const X = N - val;
   //se busca en el array si existe el valor X
   j = set.indexOf(X);
   //se verifica que el índice encontrado no sea igual al actual para evitar un caso en el que el número buscado sea
   //el doble de algúno de los valores en el array, como N = 10 y [..,5,..]
   if(i === j) continue;
   //si hay un índice válido se retorna la respuesta
   if(j >= 0){
      subSet.push(val,set[j]);   
      break;
   }
}

console.log(subSet);