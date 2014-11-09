// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosControlesBodegaControllers', function($scope, todosLosControlesBodegaModels){

	todosLosControlesBodegaModels.todosLosControlesBodegas().success(function(data){
		$scope.todosLosControlesBodegas = data;
	}); 

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreControlBodegasControllers', function($scope, obtenerNombreControlBodegasModels) {

	obtenerNombreControlBodegasModels.obtenerNombreControlBodegas().success(function(data){
		$scope.nombreControlBodegas = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerControlBodegaControllers', function($scope, obtenerControlBodegaModels) {

	obtenerControlBodegaModels.obtenerControlBodega().success(function(data){
		$scope.obtenerControlBodega = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarControlBodegaControllers', function($scope, actualizarControlBodegaModels) {

	actualizarControlBodegaModels.actualizarControlBodega().success(function(data){
		$scope.actualizarControlBodega = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarControlBodegaControllers', function($scope, insertarControlBodegaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosControlBodega = function(controlbodega){

			insertarControlBodegaModels.insertarControlBodega(controlbodega);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosControlBodega = function(controlbodega){

		$scope.pale = {};

		}

	});


});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarControlBodegaControllers', function($scope,  eliminarControlBodegaModels) {

	eliminarControlBodegaModels.eliminarControlBodega().success(function(data){
		$scope.eliminarControlBodega = data;
	});

});

