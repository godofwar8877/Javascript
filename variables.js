console.log("Hola Mundo")

//Variables numericas
var numero = 8;
console.log("numero: ", numero);

var x = document.getElementById("variable");
x.innerHTML = "Uso de una variable numerica: " + numero + ".";

//Variables de texto
var palabra = "palabras";
console.log("palabras: ", palabra);

var x = document.getElementById("variable2");
x.innerHTML = "Uso de una variable de texto: " + palabra + "."

//variables boleanas
var boleana = true;
console.log("boleana: ", boleana);

var x = document.getElementById("variable3");
x.innerHTML = "Uso de una variable boleana: " + boleana + ".";

//Variables de tipo arreglo(Array)
var colores = ["rojo", "amarillo", "azul"];
console.log("colores:", colores[1]);

var x = document.getElementById("variable4");
x.innerHTML = "Uso de una variable de tipo arreglo: " + colores[1] + ".";

//Variablesde tipo objeto (object: propiedad y el valor)
var jugo = {"ingrediente1":"fresa", "ingrediente2":"mandarina", "ingrediente3":"platano"};
console.log("jugo: ","ingrediente1");
var x = document.getElementById("variable5");
x.innerHTML = "Uso de una variable de tipo objeto: " + jugo + ".";

//Variables DOM (´Modelo de objetos del documento´)
// El DOM es la estrctura de ibjetos que genera el navegador cuando se carga un documento y se puede alterar mediante
// javascript para cambiar 

var caja =document.querySelector("#caja");
console.log("caja: ", caja);

caja.style.width = "200px";
caja.style.height = "200px";
caja.style.background = "red";

var cajita =document.querySelector("#cajita");
console.log("caja: ", cajita);

cajita.style.width = "50px";
cajita.style.height = "50px";
cajita.style.background = "blue";

var cajita2 =document.querySelector("#cajita2");
console.log("caja: ", cajita2);

cajita2.style.width = "70px";
cajita2.style.height = "70px";
cajita2.style.background = "black";






