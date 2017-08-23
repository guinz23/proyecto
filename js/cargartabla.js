
window.onload = function () {
	
	document.querySelector("#btn-add").addEventListener('click', function () {

		loadFromLocalStorage();
	});

}


function loadFromLocalStorage() {
	var llave_localStorage = "users";
    var users = [],
		dataInLocalStorage = localStorage.getItem(llave_localStorage),
		gridBody = document.querySelector("#grid tbody");

	if (dataInLocalStorage !== null) {
		users = JSON.parse(dataInLocalStorage);
		alert("ingresando");
	}

	gridBody.innerHTML = '';

	users.forEach(function (x, i) {
		var tr = document.createElement("tr"),
			Nombre = document.createElement("td"),
			Apellidos = document.createElement("td"),
			Celular = document.createElement("td"),
			Correo = document.createElement("td"),
			Direccion = document.createElement("td"),
			Provincia = document.createElement("td"),
			Contraseña = document.createElement("td"),
            foto=document.createElement("td"),
			fotita=document.createElement("img");
		   
		
		Nombre.innerHTML = x.nombre;
		Apellidos.innerHTML = x.Apellido;
		Celular.innerHTML = x.celular;
		Correo.innerHTML = x.correo;
		Direccion.innerHTML = x.Direccion;
		Contraseña.innerHTML = x.contraseña;
		Provincia.innerHTML = x.Provincia;
		fotita.src=x.foto;
		
		 fotita.className="foto";
		foto.appendChild(fotita);

		tr.appendChild(Nombre);
		tr.appendChild(Apellidos);
		tr.appendChild(Celular);
		tr.appendChild(Correo);
		tr.appendChild(Direccion);
		tr.appendChild(Contraseña);
		tr.appendChild(Provincia);
        tr.appendChild(foto);
		gridBody.appendChild(tr);
	});
}
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
 	var foto = document.getElementById("fotoPerf");
	var nombre=document.getElementById("UserURL").innerHTML="Usuario :"+get.nombre;
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
 	var redireccionar = document.getElementById("Inicio");
 	redireccionar.addEventListener("click", informes, false);
 }

 function informes() {
 	
 	location.href = "index.html?nombre="+get.nombre+"&correo="+get.correo;
 }
//window.addEventListener("load", inicializar, false);
