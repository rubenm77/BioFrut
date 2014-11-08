// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosEstadoProductosControllers', function($scope, todosLosEstadoProductosModels){

	todosLosEstadoProductosModels.todosLosEstadoProductos().success(function(data){
		$scope.todosLosEstadoProductos= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreEstadosControllers', function($scope, obtenerNombreEstadosModels) {

	obtenerNombreEstadosModels.obtenerNombreEstados().success(function(data){
		$scope.nombreEstadoProductos = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerEstadoProductosControllers', function($scope, obtenerEstadoProductosModels) {

	obtenerEstadoProductosModels.obtenerEstadoProductos().success(function(data){
		$scope.obtenerEstadoProductos = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarEstadoProductosControllers', function($scope, actualizarEstadoProductosModels) {

	actualizarEstadoProductosModels.actualizarEstadoProductos().success(function(data){
		$scope.actualizarEstadoProductos = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarEstadoProductosControllers', function($scope, insertarEstadoProductosModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosEstadoProductos = function(estadoproducto){

			insertarEstadoProductosModels.insertarEstadoProductos(estadoproducto);
			
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosEstadoProductos = function(estadoproducto){

		$scope.estadoproductos = {};

		}

	});

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarEstadoProductosControllers', function($scope,  eliminarEstadoProductosModels) {

	eliminarEstadoProductosModels.eliminarEstadoProductos().success(function(data){
		$scope.obtenerEstadoProductos = data;
	});

});

