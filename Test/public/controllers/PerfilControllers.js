// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosPerfilesControllers', function($scope, todosLosPerfilesModels){

	todosLosPerfilesModels.todosLosPerfiles().success(function(data){
		$scope.todosLosPerfiles= data;
	}); 

	

});

BioFrut.controller('obtenerNombrePerfilesControllers', function($scope, obtenerNombrePerfilesModels){

	obtenerNombrePerfilesModels.todosLosNombresPerfiles().success(function(data){
		$scope.nombrePerfiles= data;
	}); 

	

});


// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerPerfilControllers', function($scope, obtenerPerfilModels) {

	obtenerPerfilModels.obtenerPerfil().success(function(data){
		$scope.obtenerPerfil= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarPerfilControllers', function($scope, actualizarPerfilModels) {

	actualizarPerfilModels.actualizarPerfil().success(function(data){
		$scope.actualizarPerfil = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarPerfilControllers', function($scope, insertarPerfilModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosPerfil= function(perfil){

		var response = insertarPerfilModels.insertarPerfil(perfil);
		
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosPerfil = function(perfil){

		$scope.perfil = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarPerfilControllers', function($scope,  eliminarPerfilModels) {

	eliminarPerfilModels.eliminarPerfil().success(function(data){
		$scope.obtenerPerfil = data;
	});

});

