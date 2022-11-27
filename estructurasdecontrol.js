//FOR

for (let i = 0; i < 19 ; i++){
    
    if((i %2) != 0){
        continue;
    }
    if(i == 10){
        break;
    }
    console.log(i);
}
console.log("Aqui ya me sali")

var1 = null;

var3 = "";
var4 = 0;
var5 = false;
var6 = undefined;

console.log(var1)

console.log(var3)
console.log(var4)
console.log(var5)
console.log(var6)

console.log("_____________________________________");
//IF ELSE

function validarEdad(edad){
    if (confirm('¿Estas de acuerdo con seguir con esto?')) {
        console.log("Sigue bajo tu propia responsabilidad..");
        if (edad >= 18 && edad <=150) {
            console.log("SI puedes ir por las cariñosas");
        } else if (edad > 150){
            console.log("saludame a JENNY RIVERA..");
        }else if(edad >=0){
            console.log("vuelve en unos años");
        } else{
            console.log("TU no deberias existir");
        }
    }else{
        console.log("Que miedoso..");
    }
}

// ---------------------------------------------
// SWITCH

function mandarMensajes(edad) {
    console.log(edad)
    switch(edad){
        case 13:
            console.log("DEBERIAS ESTUDIAR LA SECUNDARIA");
            break;
        case 17:
            console.log("ESPERA UN AÑO MAS");
            break;
        default:
            console.log("No se que decir");
    }

}

let edad = prompt("Introduce tu edad");
if (edad && !isNaN(edad)) {

    edad = Number(edad); // convierte a numero

    validarEdad(edad);
    mandarMensajes(edad);
} else {
    alert("Debes introducir tu edad");
    location.reload();
}

//-------- 
//WHILE

let boletosDisponibles = 1000000;

/*
while (boletosDisponibles > 0) {
    console.log("Boleto comprado para el CORONA CAPITAL");
    boletosDisponibles--;
    console.log("Quedan: "+ boletosDisponibles);
    console.log("_____________________________");
}

DO WHILE

do {
    console.log("Boleto comprado para el CORONA CAPITAL");
    boletosDisponibles--;
    console.log("Quedan: "+ boletosDisponibles);
} while (boletosDisponibles > 0);*/

//---------------------------------------
//TRY CATCH FINALLY

try {
    // codigo que puede fallar
    balidaredad(edad);
} catch (error) {
    console.info("Esto no existe");
} finally{
    console.warn("Tu crush ni te pela, mejor ctm :c");
}










