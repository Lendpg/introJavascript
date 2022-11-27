let lista = [];

let x = 5;
let y = 10;

// Asignacion de adicion

x += y // Esto es igual que x = x + y
x += y

lista.push(x);
console.log(lista);

// Asignacion de resta
y -= x;

lista.push(y);
console.log(lista);

// Asignacion de multiplicacion

x *= y;

lista.push(x);
console.log(lista);


x = 5;
y = 11;

// Operador de bit a bit de dezplazamiento a la izquierda
x <<= y;

lista.push(x);
console.log(lista);


x = 5;
y = 11;


// Asignacion de modulo o residuo

console.log(y % x);

y %= x;
lista.push(y);
console.log(lista);

//ESTRUCTURA DE CONTROL IF

let var1 = 3;
let var2 = 4;

//Operador igual

if(var1 == '3'){
    console.log("Son iguales")
} else{
    console.log("NO Son iguales")
}

//Operador extricamente igual

if(var1 === '3'){
    console.log("Son iguales")
} else{
    console.log("NO Son iguales")
}

// Operador desigualdad

if(var1 != '4'){
    console.log("Son diferentes")
} else{
    console.log("NO Son diferentes")
}

//operador de desigualdar extricta

if(var1 !== '3'){
    console.log("Son diferentes")
} else{
    console.log("NO Son diferentes")
}

// > mayor que 
console.log(var1 > var2);

// < menor que 
console.log(var1 < var2);
console.log(23 > 23);

// menor o igual que 
console.log(23 >= 23);

// mayor o igual que 
console.log(23 <= 23);
