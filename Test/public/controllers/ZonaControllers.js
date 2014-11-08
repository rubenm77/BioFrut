// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasZonasControllers', function($scope, todasLasZonasModels){

	todasLasZonasModels.todasLasZonas().success(function(data){
		$scope.todasLasZonas = data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreZonasControllers', function($scope, obtenerNombreZonasModels) {

	obtenerNombreZonasModels.obtenerNombreZonas().success(function(data){
		$scope.nombreZonas = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerZonaControllers', function($scope, obtenerZonaModels) {

	obtenerZonaModels.obtenerZona().success(function(data){
		$scope.obtenerZona = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarZonaControllers', function($scope, actualizarZonaModels) {

	actualizarZonaModels.actualizarZona().success(function(data){
		$scope.actualizarZona = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarZonaControllers', function($scope, insertarZonaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosZona= function(zona){

			insertarZonaModels.insertarZona(zona);
					
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosZona = function(zona){

		$scope.zona = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarZonaControllers', function($scope,  eliminarZonaModels) {

	eliminarZonaModels.eliminarZona().success(function(data){
		$scope.obtenerZona = data;
	});

});

