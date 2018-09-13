var recuadro = document.querySelector("#recuadro");


//=========================
//EVENTOS DESDE EL DOM
//========================

function cambiarColor(){

	recuadro.style.background = "blue";

}
function estadoOriginal(){
	recuadro.style.width = "200px";
	recuadro.style.background = "red";
}

//=========================
//EVENTOS DESDE JAVASCRIPT
//=========================

var boton = document.querySelector("#boton");

boton.addEventListener("mouseover",moverCaja)

function moverCaja(){

	recuadro.style.width = "1350px";
	recuadro.style.transition = "1s width ease";
}


var boton1 = document.querySelector("#boton1");

boton1.addEventListener("mouseover",original)

function original(){

	recuadro.style.width = "200px";
	recuadro.style.transition = "1s width ease";
}