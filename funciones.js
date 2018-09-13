//Declaraciones

function saludo(){
	//Tarea de la funcion
	console.log("hola");
}
//Ejecutamos la funcion
saludo();

//===========================
//Funciones con parametros
//===========================



//Declaramos la funcion
function operacion(digito1, digito2){
	var resultado = digito1 + digito2;
	console.log("resultado: ", resultado);
}
	operacion(5, 7);
	operacion(10, 5);
//=====================================
//Funciones con retorno sin parametros
//=====================================
function retorno1(){
	var numero = 5;
	
	}

	console.log(retorno1());


//=====================================
//Funciones con retorno con parametros
//=====================================

function retorno2(numero){
	return numero;

}
console.log(retorno2());