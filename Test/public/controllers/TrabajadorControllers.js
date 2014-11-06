// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosTrabajadoresControllers', function($scope, todosLosTrabajadoresModels){

	todosLosTrabajadoresModels.todosLosTrabajadores().success(function(data){
		$scope.todosLosTrabajadores = data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreTrabajadoresControllers', function($scope, obtenerNombreTrabajadoresModels) {

	obtenerNombreTrabajadoresModels.obtenerTrabajadores().success(function(data){
		$scope.nombreTrabajadores = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerTrabajadorControllers', function($scope, obtenerTrabajadorModels) {

	obtenerTrabajadorModels.obtenerTrabjador().success(function(data){
		$scope.obtenerTrabjador = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarTrabajadorControllers', function($scope, actualizarTrabajadorModels) {

	actualizarTrabajadorModels.actualizarTrabajador().success(function(data){
		$scope.actualizarTrabajador = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarTrabajadorControllers', function($scope, insertarTrabajadorModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosTrabajador = function(trabajador){

			insertarTrabajadorModels.insertarTrabajador(trabajador);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosPale= function(trabajador){

		$scope.trabajador = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarTrabajadorControllers', function($scope,  eliminarTrabajadorModels) {

	eliminarTrabajadorModels.eliminarTrabajador().success(function(data){
		$scope.obtenerTrabjador = data;
	});

});

