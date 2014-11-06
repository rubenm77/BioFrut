// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasCalificacionesControllers', function($scope, todasLasCalificacionesModels){

	todasLasCalificacionesModels.todasLasCalificaciones().success(function(data){
		$scope.todasLasCalificaciones= data;
	}); 

	

});

// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerNombreCalificacionesModels) {

	obtenerNombreCalificacionesModels.obtenerNombreCalificaciones().success(function(data){
		$scope.nombreCalificaciones = data;
	});
 
});


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerCalificacionControllers', function($scope, obtenerCalificacionModels) {

	obtenerCalificacionModels.obtenerCalificacion().success(function(data){
		$scope.obtenerCalificacion= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarCalificacionControllers', function($scope, actualizarCalificacionModels) {

	actualizarCalificacionModels.actualizarCalificacion().success(function(data){
		$scope.actualizarCalificacion = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarCalificacionControllers', function($scope, insertarCalificacionModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosCalificacion= function(calificacion){

			insertarCalificacionModels.insertarCalificacion(calificacion);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosCalificacion = function(calificacion){

		$scope.calificacion = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarCalificacionControllers', function($scope,  eliminarCalificacionModels) {

	eliminarCalificacionModels.eliminarCalificacion().success(function(data){
		$scope.obtenerCalificacion = data;
	});

});

