// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosPalesControllers', function($scope, todosLosPalesModels){

	todosLosPalesModels.todosLosPales().success(function(data){
		$scope.todosLosPales = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerPaleControllers', function($scope, obtenerPaleModels) {

	obtenerPaleModels.obtenerPale().success(function(data){
		$scope.obtenerPale = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarPaleControllers', function($scope, actualizarPaleModels) {

	actualizarPaleModels.actualizarPale().success(function(data){
		$scope.actualizarPale = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarPaleControllers', function($scope, insertarPaleModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosPale = function(pale){

			insertarPaleModels.insertarPale(pale);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosPale= function(pale){

		$scope.pale = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarPaleControllers', function($scope,  eliminarPaleModels) {

	eliminarPaleModels.eliminarPale().success(function(data){
		$scope.obtenerPale = data;
	});

});

