// FUNCION IVA
function calcularIva(precio){
    return precio * 0.21;
}
// FUNCION CUOTAS
function pagoCuotas(canCuota , canCuota2){
    return canCuota / canCuota2;
}




//SELECCION DE PRODUCTO
/*let nintendo = 390
let playStation = 490
let xBox = 350*/
let producto = 0
let costo = 0
//let CantidadCuotas = 0
producto = prompt("Por favor ingrese la consola que desea comprar( xbox , nintendo switch , play station)(salir para finalizar))");
while (producto != "salir"){
//producto = prompt("Por favor ingrese la consola que desea comprar(salir para finalizar))");

if (producto == "nintendo switch"){
   costo = 700
   alert("NINTENDO SWITCH $ " + costo)
   
}else if(producto == "play station"){
    costo = 800
    alert("play station $ " + costo)

}else if(producto == "xbox"){
    costo = 800

    alert("XBOX $ " + costo)
}

else{
    alert ("producto sin stock") 
    break
}


// CALCULA IVA *******************************************************************************************************
let consulta = prompt ("Desea calcular el iva del producto(si/no)")


let precioFinal = 0;
//let consulta = prompt ("Desea calcular el iva del producto")
if(consulta== "si"){
    let iva = calcularIva(costo)
    precioFinal = (costo + iva)
    alert("El producto con IVA icluido es " + precioFinal);
}else if(consulta == "no"){
    alert("El costo del producto sin iva es " + costo );
    break
    
} 


//  CALCULO CUOTAS*****************************************************************************************************

let cuotas = parseInt ( prompt ("en cuantas cuotas desea realizar el pago: 1 ; 3 ; 6 ; 12"));
if (cuotas == 1){
    alert("el costo final es " + precioFinal)
}
else if (cuotas ==3){
CantidadCuotas = 3
}else if(cuotas ==6){
    CantidadCuotas = 6
}else if (cuotas ==12){
    CantidadCuotas = 12
}else{
    alert("la cantidad de cuotas que eligio no son perminitas");
}
let cut1 = pagoCuotas (precioFinal , CantidadCuotas);
alert("el costo seria de las cuotas seria " + cut1);
break
}

alert("Gracias por visitarnos!!")





/*while(producto !="salir"){
    switch(producto){
        case "nintendo switch":
            alert(390);
            break;
        case "play staion":
            alert(playStation);
            break;
        case "xbox":
            alert(xBox); 
            break;
            
        default:
            alert("consola sin stock");           
    }
    alert(producto);
}
    /*let usuario = prompt("desea calcular el iva del producto seleccionado")
    if (usuario = "si"){
        calcularIva (producto);
        console.log("valor del producto con iva " + producto)}
        else{
        console.log("el valor del producto selecionado SIN IVA es "+ producto)};
    }*/
