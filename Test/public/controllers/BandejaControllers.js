// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasBandejasControllers', function($scope, todasLasBandejasModels){

	todasLasBandejasModels.todasLasBandejas().success(function(data){
		$scope.todasLasBandejas= data;
	}); 

	

});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerBandejaControllers', function($scope, obtenerBandejaModels) {

	obtenerBandejaModels.obtenerBandeja().success(function(data){
		$scope.obtenerBandeja = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarBandejaControllers', function($scope, actualizarBandejaModels) {

	actualizarBandejaModels.actualizarBandeja().success(function(data){
		$scope.actualizarBandeja = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarBandejaControllers', function($scope, insertarBandejaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosBandeja= function(bandeja){

			insertarBandejaModels.insertarBandeja(bandeja);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosBandeja = function(bandeja){

		$scope.bandeja = {};

		}

	});


});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarBandejaControllers', function($scope,  eliminarBandejaModels) {

	eliminarBandejaModels.eliminarBandeja().success(function(data){
		$scope.obtenerBandeja = data;
	});

});

