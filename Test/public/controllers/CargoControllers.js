// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosCargosControllers', function($scope, todosLosCargosModels){

	todosLosCargosModels.todosLosCargos().success(function(data){
		$scope.todosLosCargos = data;
	}); 

	

});


BioFrut.controller('obtenerNombreCargosControllers', function($scope, obtenerNombreCargosModels){

	obtenerNombreCargosModels.obtenerNombreCargos().success(function(data){
		$scope.nombreCargos = data;
	}); 

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerCargoControllers', function($scope, obtenerCargoModels) {

	obtenerCargoModels.obtenerCargo().success(function(data){
		$scope.obtenerCargo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarCargoControllers', function($scope, actualizarCargoModels) {

	actualizarCargoModels.actualizarCargo().success(function(data){
		$scope.actualizarCargo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarCargoControllers', function($scope, insertarCargoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosCargo = function(cargo){

			insertarCargoModels.insertarCargo(cargo);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosCargo = function(cargo){

		$scope.cargo = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarCargoControllers', function($scope,  eliminarCargoModels) {

	eliminarCargoModels.eliminarCargo().success(function(data){
		$scope.obtenerCargo = data;
	});

});

