var caja = document.getElementById("result");
var cadena = "";
var cadena1 = "";
var operation = "";
var opc = true;

function myFunction(numero){
  cadena += numero;
  caja.value = parseInt(cadena).toString(2);
  
}

function operacion(op){
    cadena1 = cadena;
    caja.value = "";
    cadena = "";
    operation = op;
    opc = false;
}

function resultado(){
  caja.value = "";
  if(operation == 's'){
    caja.value = (parseInt(cadena1) + parseInt(cadena)).toString(2);
  }
  
  if(operation == 'r'){
    caja.value = (parseInt(cadena1) - parseInt(cadena)).toString(2);
  }
  
  if(operation == 'm'){
    caja.value = (parseInt(cadena1) * parseInt(cadena)).toString(2);
  }
  
  if(operation == 'd'){
    caja.value = (parseInt(cadena1) / parseInt(cadena)).toString(2);
  }
  
}

function borrar(){
  cadena = "";
  cadena1 = "";
  caja.value = "";
}
function ilumina(celda){
    if (celda.style.backgroundColor=="yellow")
        {
        celda.style.backgroundColor="green";
        }
    else
        {
        celda.style.backgroundColor="yellow";
        }
    }
