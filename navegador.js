window.onload = function(){
	
	var imagen = document.getElementById("imagen");
	var browser = navigator.userAgent;
	var n = browser.search("Firefox");
	var c = browser.search("Chrome");
	var s = browser.search("Safari");
	var e = browser.search("Edge");
	var o = browser.search("OPR");
	


		console.log("Expresion: ", n);
		console.log("Expresion: ", c);
		console.log("Expresion: ", s);
		console.log("Expresion: ", e);
		console.log("Expresion: ", o);
		
		console.log(n>1);
		console.log(c>1);
		console.log(s>1);
		console.log(e>1);
		console.log(e>1);
		

			if (n>1){
				document.getElementById("titulo").innerHTML = "Bienvenido usuario de Firefox";
				imagen.src = "img/Firefox.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}
			if (c>1){
				document.getElementById("titulo").innerHTML = "Bienvenido usuario de Chrome";
				imagen.src = "img/chrome.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}
			
			if (s>1){
				document.getElementById("titulo").innerHTML = "Bienvenido usuario de Safari";
				imagen.src = "img/Safari.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";

			}
			if (e>1){
				document.getElementById("titulo").innerHTML = "Bienvenido usuario de Microsoft Edge";
				imagen.src = "img/edge.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}
			if (o>1){
				document.getElementById("titulo").innerHTML = "Bienvenido usuario de Opera";
				imagen.src = "img/Opera.png";
				imagen.style.width = "100px";
				imagen.style.height = "100px";
			}




			console.log("imagen: ", imagen);
			console.log("titulo: ", browser);
	}