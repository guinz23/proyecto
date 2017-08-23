var Usuariodisponible = document.getElementById("Usuariodisponible");
User = JSON.parse(localStorage.getItem("users").trim());

if (!User) {
	User = [];
}
var posicion = 0;

function main() {

	document.getElementById("Nombre").disabled = true;

	for (index = 0; index < User.length; index++) {
		Usuariodisponible.options[index] = new Option(User[index].nombre);
	}


}

function actualizar() {
	var contraseña = document.getElementById("Contraseña").value;
	var nombre = document.getElementById("Nombre").value;
	var Apellido = document.getElementById("Apellido").value;
	var celular = document.getElementById("Celular").value;
	var correo = document.getElementById("Correo").value;
	var Direccion = document.getElementById("Direccion").value;
	var provi = document.getElementById("Provincia").value;
	procesar_Usuario(nombre, Apellido, celular, correo, Direccion, provi, contraseña, foto);
	alert(rides.length);

}

function procesar_Usuario(nombre, Apellido, celular, correo, Direccion, provi, contraseña, foto) {

	var usersRide = {
		"nombre": nombre,
		"Apellido": Apellido,
		"celular": celular,
		"correo": correo,
		"Direccion": Direccion,
		"Provincia": provi,
		"contraseña": contraseña,
		"foto": foto
	};

	var array = User;
	var index = posicion;
	array.splice(index, 1);
	User.push(usersRide);

	localStorage.setItem("users", JSON.stringify(User));

	alert("ride registrado");
	var u = JSON.parse(localStorage.getItem("users"));
	console.log(u);
}


function cambiar() {
	var Ri = document.getElementById("Usuariodisponible");
	var ri = Ri.options[Ri.selectedIndex].text;
	alert(ri);
	document.getElementById("Nombre").value = ri;
	var nombreU = document.getElementById("Nombre").value;
	var Us = JSON.parse(localStorage.getItem("users"));
	for (i = 0; i < Us.length; i++) {
		if (nombreU == Us[i].nombre) {
			Nombre = document.getElementById("Nombre").value = Us[i].nombre;
			Apellido = document.getElementById("Apellido").value = Us[i].Apellido;
			Celular = document.getElementById("Celular").value = Us[i].celular;
			Correo = document.getElementById("Correo").value = Us[i].correo;
			Direccion = document.getElementById("Direccion").value = Us[i].Direccion;
			Provincia = document.getElementById("Provincia").value = Us[i].Provincia;
			contraseña = document.getElementById("Contraseña").value = Us[i].contraseña;
			foto = Us[i].foto;
			posicion = i;
			break;
		}

	}

}

function Eliminar() {
	var array = User;
	var index = posicion;
	array.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(User));
	alert("UsuarioEliminado");
    window.addEventListener("load", main, false);

}


window.addEventListener("load", main, false);
