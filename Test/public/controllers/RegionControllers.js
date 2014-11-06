// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasRegionesControllers', function($scope, todasLasRegionesModels){

	todasLasRegionesModels.todasLasRegiones().success(function(data){
		$scope.todasLasRegiones= data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreRegionesControllers', function($scope, obtenerNombreRegionesModels) {

	obtenerNombreRegionesModels.obtenerNombreRegiones().success(function(data){
		$scope.nombreRegiones = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerRegionControllers', function($scope, obtenerRegionModels) {

	obtenerRegionModels.obtenerRegion().success(function(data){
		$scope.obtenerRegion= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarRegionControllers', function($scope, actualizarRegionModels) {

	actualizarRegionModels.actualizarRegion().success(function(data){
		$scope.actualizarRegion = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarRegionControllers', function($scope, insertarRegionModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosRegion= function(region){

			insertarRegionModels.insertarRegion(region);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosRegion = function(region){

		$scope.region = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarRegionControllers', function($scope,  eliminarRegionModels) {

	eliminarRegionModels.eliminarRegion().success(function(data){
		$scope.obtenerRegion = data;
	});

});

