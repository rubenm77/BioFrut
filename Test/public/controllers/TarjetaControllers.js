// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasTarjetasControllers', function($scope, todasLasTarjetasModels){

	todasLasTarjetasModels.todasLasTarjetas().success(function(data){
		$scope.todasLasTarjetas = data;
	}); 

});

BioFrut.controller('obtenerNombreTarjetasControllers', function($scope, obtenerNombreTarjetasModels){

	obtenerNombreTarjetasModels.obtenerNombreTarjetas().success(function(data){
		$scope.nombreTarjetas = data;
	}); 

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerTarjetaControllers', function($scope, obtenerTarjetaModels) {

	obtenerTarjetaModels.obtenerTarjeta().success(function(data){
		$scope.obtenerTarjeta= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarTarjetaControllers', function($scope, actualizarTarjetaModels) {

	actualizarTarjetaModels.actualizarTarjeta().success(function(data){
		$scope.actualizarTarjeta = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarTarjetaControllers', function($scope, insertarTarjetaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosTarjeta= function(tarjeta){

			insertarTarjetaModels.insertarTarjeta(tarjeta);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosTarjeta = function(tarjeta){

		$scope.tarjeta = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarTarjetaControllers', function($scope,  eliminarTarjetaModels) {

	eliminarTarjetaModels.eliminarTarjeta().success(function(data){
		$scope.obtenerTarjeta = data;
	});

});

