// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosControlesControllers', function($scope, todosLosControlesModels){

	todosLosControlesModels.todosLosControles().success(function(data){
		$scope.todosLosControles = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerControlControllers', function($scope, obtenerControlModels) {

	obtenerControlModels.obtenerControl().success(function(data){
		$scope.obtenerControl = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarControlControllers', function($scope, actualizarControlModels) {

	actualizarControlModels.actualizarControl().success(function(data){
		$scope.actualizarControl = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarControlControllers', function($scope, insertarControlModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosControl = function(control){

			insertarControlModels.insertarControl(control);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosControl= function(control){

		$scope.control = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarControlControllers', function($scope,  eliminarControlModels) {

	eliminarControlModels.eliminarControl().success(function(data){
		$scope.obtenerControl = data;
	});

});

