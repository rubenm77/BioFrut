// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosDespachosControllers', function($scope, todosLosDespachosModels){

	todosLosDespachosModels.todosLosDespachos().success(function(data){
		$scope.todosLosDespachos= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreDespachosControllers', function($scope, obtenerNombreDespachosModels) {

	obtenerNombreDespachosModels.obtenerNombreDespachos().success(function(data){
		$scope.nombreDespachos = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerDespachoControllers', function($scope, obtenerDespachoModels) {

	obtenerDespachoModels.obtenerDespacho().success(function(data){
		$scope.obtenerDespacho= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarDespachoControllers', function($scope, actualizarDespachoModels) {

	actualizarDespachoModels.actualizarDespacho().success(function(data){
		$scope.actualizarDespacho = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarDespachoControllers', function($scope, insertarDespachoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosDespacho= function(despacho){

			insertarDespachoModels.insertarDespacho(despacho);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosDespacho = function(despacho){

		$scope.despacho = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarDespachoControllers', function($scope,  eliminarDespachoModels) {

	eliminarDespachoModels.eliminarDespacho().success(function(data){
		$scope.obtenerDespacho = data;
	});

});

