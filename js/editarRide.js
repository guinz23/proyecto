
var ridedisponible = document.getElementById("ridedisponible");
rides = JSON.parse(localStorage.getItem("ride"));

if (!rides) {
	rides = [];
}
var posicion = 0;

function main() {

document.getElementById("nombreride").disabled = true;

	for (index = 0; index < rides.length+1; index++) {
		ridedisponible.options[index] = new Option(rides[index].nombreRIde);
	}


}

function actualizar() {

	var nombreRide = document.getElementById("nombreride").value;
	var comienzo = document.getElementById("comienzo").value;
	var llegada = document.getElementById("llegada").value;
	var comentario = document.getElementById("comentario").value;
	var salida = document.getElementById("salida").value;
	var tiempo_de_arrivo = document.getElementById("tiempodeArrivo").value;
	var day1 = document.getElementById("day1").checked;
	var day2 = document.getElementById("day2").checked;
	var day3 = document.getElementById("day3").checked;
	var day4 = document.getElementById("day4").checked;
	var day5 = document.getElementById("day5").checked;
	var day6 = document.getElementById("day6").checked;
	var day7 = document.getElementById("day7").checked;
	var dias = "";
	if (day1 == true) {
		dias += "lunes";
	}
	if (day2 == true) {
		dias += "Martes";
	}
	if (day3 == true) {
		dias += "Miercoles";
	}
	if (day4 == true) {
		dias += "jueves";
	}
	if (day5 == true) {
		dias += "Viernes";
	}
	if (day6 == true) {
		dias += "Sabado";
	}
	if (day7 == true) {
		dias += "Domingo";
	}
	procesar_ride(nombreRide, comienzo, llegada, comentario, salida, tiempo_de_arrivo, dias);

	alert(rides.length);

}

function procesar_ride(nombreRide, comienzo, llegada, comentario, salida, tiempo_de_arrivo, dias) {

	var usersRide = {
		"nombreRIde": nombreRide,
		"comienzo": comienzo,
		"llegada": llegada,
		"comentario": comentario,
		"salida": salida,
		"tiempo_de_arrivo": tiempo_de_arrivo,
		"dias": dias
	};
	
	var array = rides;
	var index = posicion;
	array.splice(index,1);
	rides.push(usersRide);

	localStorage.setItem("ride", JSON.stringify(rides));

	alert("ride registrado");
	var u = JSON.parse(localStorage.getItem("ride"));
	console.log(u);
}


function cambiar() {
	var Ri = document.getElementById("ridedisponible");
	var ri = Ri.options[Ri.selectedIndex].text;
	alert(ri);
	document.getElementById("nombreride").value = ri;
	var nombreRIde = document.getElementById("nombreride").value;
	var rides = JSON.parse(localStorage.getItem("ride"));
	for (i = 0; i < rides.length; i++) {
		if (nombreRIde == rides[i].nombreRIde) {
			comienzo = document.getElementById("comienzo").value = rides[i].comienzo;
			llegada = document.getElementById("llegada").value = rides[i].llegada;
			comentario = document.getElementById("comentario").value = rides[i].comentario;
			salida = document.getElementById("salida").value = rides[i].salida;
			tiempodeArrivo = document.getElementById("tiempodeArrivo").value = rides[i].tiempo_de_arrivo;

			posicion = i;
			break;
		}

	}

}
function Eliminar() {
var array = rides;
	var index = posicion;
	array.splice(index,1);
   localStorage.setItem("ride",JSON.stringify(rides));
 alert("ride eliminado")

window.addEventListener("load", main, false);

}

window.addEventListener("load", main, false);
