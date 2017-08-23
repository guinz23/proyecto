window.onload = function () {

	document.querySelector("#btn-add").addEventListener('click', function () {

		loadFromLocalStorage();
	});
	document.querySelector("#buscar").addEventListener('click', function () {

		buscar();

	});

}


function loadFromLocalStorage() {
	var llave_localStorage = "ride";
	var users = [],
		dataInLocalStorage = localStorage.getItem(llave_localStorage),
		gridBody = document.querySelector("#grid tbody");

	if (dataInLocalStorage !== null) {
		users = JSON.parse(dataInLocalStorage);
		alert("cargando");
	}

	gridBody.innerHTML = '';

	users.forEach(function (x, i) {
		var tr = document.createElement("tr"),
			NombreRIde = document.createElement("td"),
			Comienzo = document.createElement("td"),
			Llegada = document.createElement("td"),
			Comentario = document.createElement("td"),
			Salida = document.createElement("td"),
			Tiempo_de_arrivo = document.createElement("td"),
			Dias = document.createElement("td");


		NombreRIde.innerHTML = x.nombreRIde;
		Comienzo.innerHTML = x.comienzo;
		Llegada.innerHTML = x.llegada;
		Comentario.innerHTML = x.comentario;
		Salida.innerHTML = x.salida;
		Tiempo_de_arrivo.innerHTML = x.tiempo_de_arrivo;
		Dias.innerHTML = x.dias;
		tr.appendChild(NombreRIde);
		tr.appendChild(Comienzo);
		tr.appendChild(Llegada);
		tr.appendChild(Comentario);
		tr.appendChild(Salida);
		tr.appendChild(Tiempo_de_arrivo);
		tr.appendChild(Dias);

		gridBody.appendChild(tr);
	});
}

function buscar() {
	if (localStorage.getItem("ride")) {
		var campobusqueda = document.getElementById("campobusqueda").value;
		var Ride = JSON.parse(localStorage.getItem("ride"));
		var R = [],
			gridBody = document.querySelector("#grid tbody");
		gridBody.innerHTML = '';
		R = Ride;
		for (h = 0; h < R.length; h++) {
			if (campobusqueda == R[h].nombreRIde) {
					var tr = document.createElement("tr"),
						NombreRIde = document.createElement("td"),
						Comienzo = document.createElement("td"),
						Llegada = document.createElement("td"),
						Comentario = document.createElement("td"),
						Salida = document.createElement("td"),
						Tiempo_de_arrivo = document.createElement("td"),
						Dias = document.createElement("td");


					NombreRIde.innerHTML = R[h].nombreRIde;
					Comienzo.innerHTML = R[h].comienzo;
					Llegada.innerHTML = R[h].llegada;
					Comentario.innerHTML = R[h].comentario;
					Salida.innerHTML = R[h].salida;
					Tiempo_de_arrivo.innerHTML = R[h].tiempo_de_arrivo;
					Dias.innerHTML = R[h].dias;
					tr.appendChild(NombreRIde);
					tr.appendChild(Comienzo);
					tr.appendChild(Llegada);
					tr.appendChild(Comentario);
					tr.appendChild(Salida);
					tr.appendChild(Tiempo_de_arrivo);
					tr.appendChild(Dias);

					gridBody.appendChild(tr);
					break;
				
			}
		}
	}
}
