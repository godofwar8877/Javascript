//======================================================================
//BROWSER OBJECT MODEL (BOM) ALLOWS JAVASCRIPT TO "TALK TO" THE BROWSER
//======================================================================

var w = window.innerWidth
|| document.documentElement.clientWidth
|| document.body.clientWidth;

var h = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

var x = document.getElementById("prueba");
x.innerHTML = "Ancho de la ventana interior del navegador: " + w + ", altura: " + h + ".";

//======================================================================
//WINDOW SCREEN WIDTH
//LA PROPIEDAD SCREEN. WIDTH DEVUELVE EL ANCHO DE LA PANTALLA DEL VISITANTE EN PIXELES
//======================================================================
var str = "JS Screen";
    var result = str.bold();
    document.getElementById("JS1").innerHTML = result;

document.getElementById("prueba2").innerHTML = "El ancho de la pantalla es: " + screen.width;

//======================================================================
//WINDOW SCREEN HEIGHT
//LA PROPIEDAD SCREEN. HEIGHT DEVUELVE LA ALTURA DE LA PANTALLA DEL VISITANTE EN PIXELES
//======================================================================

document.getElementById("prueba3").innerHTML = "El alto de la pantalla es: " + screen.height;

//======================================================================
//WINDOW SCREEN AVAILABLE WIDTH
//LA PROPIEDAD SCREEN. AVAL WIDTH DEVUELVE LA ANCHURA DE LA PANTALLA DEL VISITANTE EN PIXELES
//======================================================================

document.getElementById("prueba4").innerHTML = "Ancho de pantalla disponible: " + screen.availWidth;

//======================================================================
//WINDOW SCREEN AVAILABLE HEIGHT
//LA PROPIEDAD SCREEN. AVAL HEIGHT DEVUELVE LA ALTURA DE LA PANTALLA DEL VISITANTE EN PIXELES
//======================================================================

document.getElementById("prueba5").innerHTML = "Alto de pantalla disponible: " + screen.availHeight;


//======================================================================
//Window Screen Color Depth
//The screen.colorDepth property returns the number of bits used to display one color.
//======================================================================

document.getElementById("prueba6").innerHTML = "Profundidad de color de la pantalla: " + screen.colorDepth;

//======================================================================
//Window Screen Pixel Depth
//The screen.pixelDepth property returns the pixel depth of the screen.
//======================================================================

document.getElementById("prueba7").innerHTML = "Profundidad de pixeles en pantalla: " + screen.pixelDepth;


//======================================================================
//Window Location Href
//The window.location.href property returns the URL of the current page.
//======================================================================
var str = "JS Location";
    var result = str.bold();
    document.getElementById("JS2").innerHTML = result;

document.getElementById("prueba8").innerHTML = "Ubicacion de la pagina es: " + window.location.href;

//======================================================================
//Window Location Hostname
//The window.location.hostname property returns the name of the internet host (of the current page).
//======================================================================

document.getElementById("prueba9").innerHTML = "Nombre de dominio de pagina es: " + window.location.hostname;

//======================================================================
//Window Location Pathname
//The window.location.pathname property returns the pathname of the current page.
//======================================================================

document.getElementById("prueba10").innerHTML = "La ruta de la pagina es: " + window.location.pathname;

//======================================================================
//Window Location Protocol
//The window.location.protocol property returns the web protocol of the page.
//======================================================================

document.getElementById("prueba11").innerHTML = "El protocolo de la pagina es: " + window.location.protocol;

/*======================================================================
Window Location Port
The window.location.port property returns the number of the internet host port (of the current page).
======================================================================*/

document.getElementById("prueba12").innerHTML = "Numero de puerto es: " + window.location.port;

/*======================================================================
Browser Cookies
The cookieEnabled property returns true if cookies are enabled, otherwise false:
======================================================================*/
var str = "JS Navigator";
    var result = str.bold();
    document.getElementById("JS3").innerHTML = result;

document.getElementById("prueba13").innerHTML = "habilitacion de cookies es: " + navigator.cookieEnabled;

/*======================================================================
Browser Application Name
The appName property returns the application name of the browser:
======================================================================*/

document.getElementById("prueba14").innerHTML = "navegador.appName es: " + navigator.appName;

/*======================================================================
Browser Application Code Name
The appCodeName property returns the application code name of the browser:
======================================================================*/

document.getElementById("prueba15").innerHTML = "navegador.appCodeName es: " + navigator.appCodeName;

/*======================================================================
The Browser Engine
The product property returns the product name of the browser engine:
======================================================================*/

document.getElementById("prueba16").innerHTML = "producto .navegador es: " + navigator.product;

/*======================================================================
The Browser Version
The appVersion property returns version information about the browser:
======================================================================*/

document.getElementById("prueba17").innerHTML = "La informacion de version del navegador es: " + navigator.appVersion;

/*======================================================================
The Browser Agent
The userAgent property returns the user-agent header sent by the browser to the server:
======================================================================*/

document.getElementById("prueba18").innerHTML = "Agente de usuario del navegador: " + navigator.userAgent;

/*======================================================================
The Browser Platform
The platform property returns the browser platform (operating system):
======================================================================*/

document.getElementById("prueba19").innerHTML = "La plataforma del navegador es: " + navigator.platform;

/*======================================================================
The Browser Language
The language property returns the browser's language:
======================================================================*/

document.getElementById("prueba20").innerHTML = "El lenguaje del navegador es: " + navigator.language;

/*======================================================================
Is The Browser Online?
The onLine property returns true if the browser is online:
======================================================================*/

document.getElementById("prueba21").innerHTML = "el navegador .onLine es: " + navigator.onLine;

/*======================================================================
Is Java Enabled?
The javaEnabled() method returns true if Java is enabled:
======================================================================*/

document.getElementById("prueba22").innerHTML = "Java esta habilitado: " + navigator.javaEnabled();


/*======================================================================
Confirm Box
A confirm box is often used if you want the user to verify or accept something.
When a confirm box pops up, the user will have to click either "OK" or "Cancel" to proceed.
If the user clicks "OK", the box returns true. If the user clicks "Cancel", the box returns false.
======================================================================*/
document.getElementById("pruebada").innerHTML = "Bienvenido al explorador: " + navigator.;















