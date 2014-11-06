// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosPrediosControllers', function($scope, todosLosPrediosModels){

	todosLosPrediosModels.todosLosPredios().success(function(data){
		$scope.todosLosPredios = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerPredioControllers', function($scope, obtenerPredioModels) {

	obtenerPredioModels.obtenerPredio().success(function(data){
		$scope.obtenerPredio = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarPredioControllers', function($scope, actualizarPredioModels) {

	actualizarPredioModels.actualizarPredio().success(function(data){
		$scope.actualizarPredio = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarPredioControllers', function($scope, insertarPredioModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosPredio = function(predio){

			insertarPredioModels.insertarPredio(predio);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosPredio= function(predio){

		$scope.predio = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarPredioControllers', function($scope,  eliminarPredioModels) {

	eliminarPredioModels.eliminarPredio().success(function(data){
		$scope.obtenerPredio = data;
	});

});

