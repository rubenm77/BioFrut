// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosHuertosControllers', function($scope, todosLosHuertosModels){

	todosLosHuertosModels.todosLosHuertos().success(function(data){
		$scope.todosLosHuertos = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerHuertoControllers', function($scope, obtenerHuertoModels) {

	obtenerHuertoModels.obtenerHuerto().success(function(data){
		$scope.obtenerHuerto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarHuertoControllers', function($scope, actualizarHuertoModels) {

	actualizarHuertoModels.actualizarHuerto().success(function(data){
		$scope.actualizarHuerto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarHuertoControllers', function($scope, insertarHuertoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosHuerto = function(huerto){

			insertarHuertoModels.insertarHuerto(huerto);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosHuerto= function(huerto){

		$scope.huerto = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarHuertoControllers', function($scope,  eliminarHuertoModels) {

	eliminarHuertoModels.eliminarHuerto().success(function(data){
		$scope.obtenerHuerto = data;
	});

});

