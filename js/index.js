 cargarFoto();

 function getGET() {
 	var loc = document.location.href;
 	var getString = loc.split('?')[1];
 	var GET = getString.split('&');
 	var get = {};

 	for (var i = 0, l = GET.length; i < l; i++) {
 		var tmp = GET[i].split('=');
 		get[tmp[0]] = unescape(decodeURI(tmp[1]));
 	}
 	return get;
 }

 function cargarFoto() {
 	var get = getGET();
 	var correo = get.correo;
 	var foto = document.getElementById("fotoperfil");
 	var userslocalStorage = JSON.parse(localStorage.getItem("users"));
 	for (i = 0; i < userslocalStorage.length; i++) {
 		if (correo == userslocalStorage[i].correo) {
 			foto.src = userslocalStorage[i].foto;
 		}
 	}
 	console.log(userslocalStorage);
 }

 function inicializar() {
	get = getGET();
 	var redireccionar = document.getElementById("informes");
 	redireccionar.addEventListener("click", informes, false);
 }

 function informes() {
 	
 	location.href = "imfome.html?nombre="+get.nombre+"&correo="+get.correo;
 }

 window.addEventListener("load", inicializar, false);
