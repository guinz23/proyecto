var users = JSON.parse(localStorage.getItem('users'));

if (!users) {
	users = [];
}
function handleFiles() {
  var preview =  document.getElementById("foto");
  var file    =  document.getElementById("cargarfoto").files[0];
  var reader  = new FileReader();
  
  reader.onloadend = function () {
    preview.src = reader.result;
      path = reader.result;
  }

  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = "";
  }
}
function guardar_Usuarios() {
	var contraseña = document.getElementById("Contraseña").value;
	var confirmar_contraseña = document.getElementById("confircontra").value;
	if (contraseña == confirmar_contraseña) {
		var nombre = document.getElementById("Nombre").value;
		var Apellido = document.getElementById("Apellido").value;
		var celular = document.getElementById("celular").value;
		var correo = document.getElementById("Correo").value;
		var Direccion = document.getElementById("Direccion").value;
		var provi = document.getElementById("Provincia");
		var provincia = provi.options[provi.selectedIndex].text;
		procesarUsuario(nombre, Apellido, celular, correo,Direccion, provincia, contraseña,path);
	} else {
		alert("las contraseñas no conciden");
	}

}

function procesarUsuario(nombre, Apellido, celular, correo,Direccion, provincia,contraseña,path) {

	alert("Registrando");
	var user = {
		"nombre": nombre,
		"Apellido": Apellido,
		"celular": celular,
		"correo": correo,
	    "Direccion":Direccion,
		"Provincia": provincia,
		"contraseña": contraseña,
		"foto":path
	};

	users.push(user);

	localStorage.setItem('users', JSON.stringify(users));
	 
	alert("usuario registrado");
	location.href="Login.html";
	var u = JSON.parse(localStorage.getItem("users"));
	console.log(u);
}


