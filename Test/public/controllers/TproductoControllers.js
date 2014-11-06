// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosTproductosControllers', function($scope, todosLosTproductosModels){

	todosLosTproductosModels.todosLosTproductos().success(function(data){
		$scope.todosLosTproductos = data;
	}); 

	

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerNombreTproductoControllers', function($scope, obtenerNombreTproductosModels) {

	obtenerNombreTproductosModels.obtenerNombreTproductos().success(function(data){
		$scope.nombreTproducto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarTproductoControllers', function($scope, actualizarTproductoModels) {

	actualizarTproductoModels.actualizarTproducto().success(function(data){
		$scope.actualizarTproducto = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarTproductoControllers', function($scope, insertarTproductoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosTproducto = function(tproducto){

			insertarTproductoModels.insertarTproducto(tproducto);
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosTproducto= function(tproducto){

		$scope.tproducto = {};

		}

	});

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarTproductoControllers', function($scope,  eliminarTproductoModels) {

	eliminarTproductoModels.eliminarTproducto().success(function(data){
		$scope.obtenerTproducto = data;
	});

});

