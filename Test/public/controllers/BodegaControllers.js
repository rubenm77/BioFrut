// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasBodegasControllers', function($scope, todasLasBodegasModels){

	todasLasBodegasModels.todasLasBodegas().success(function(data){
		$scope.todasLasBodegas= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerBodegaControllers', function($scope, obtenerBodegaModels) {

	obtenerBodegaModels.obtenerBodega().success(function(data){
		$scope.obtenerBodega= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarBodegaControllers', function($scope, actualizarBodegaModels) {

	actualizarBodegaModels.actualizarBodega().success(function(data){
		$scope.actualizarBodega = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarBodegaControllers', function($scope, insertarBodegaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosBodega= function(bodega){

			insertarBodegaModels.insertarBodega(bodega);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosBodega = function(bodega){

		$scope.bodega = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarBodegaControllers', function($scope,  eliminarBodegaModels) {

	eliminarBodegaModels.eliminarBodega().success(function(data){
		$scope.obtenerBodega = data;
	});

});

