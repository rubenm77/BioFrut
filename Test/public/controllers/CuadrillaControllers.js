// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasCuadrillasControllers', function($scope, todasLasCuadrillasModels){

	todasLasCuadrillasModels.todasLasCuadrillas().success(function(data){
		$scope.todasLasCuadrillas= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerCuadrillaControllers', function($scope, obtenerCuadrillaModels) {

	obtenerCuadrillaModels.obtenerCuadrilla().success(function(data){
		$scope.obtenerCuadrilla= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarCuadrillaControllers', function($scope, actualizarCuadrillaModels) {

	actualizarCuadrillaModels.actualizarCuadrilla().success(function(data){
		$scope.actualizarCuadrilla = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarCuadrillaControllers', function($scope, insertarCuadrillaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosCuadrilla= function(cuadrilla){

			insertarCuadrillaModels.insertarCuadrilla(cuadrilla);
				
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosCuadrilla = function(ciudad){

		$scope.cuadrilla = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarCuadrillaControllers', function($scope,  eliminarCuadrillaModels) {

	eliminarCuadrillaModels.eliminarCuadrilla().success(function(data){
		$scope.obtenerCuadrilla = data;
	});

});


