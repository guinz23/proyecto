
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

