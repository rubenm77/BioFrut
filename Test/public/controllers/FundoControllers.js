// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosFundosControllers', function($scope, todosLosFundosModels){

	todosLosFundosModels.todosLosFundos().success(function(data){
		$scope.todosLosFundos = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerFundoControllers', function($scope, obtenerFundoModels) {

	obtenerFundoModels.obtenerFundo().success(function(data){
		$scope.obtenerFundo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarFundoControllers', function($scope, actualizarFundoModels) {

	actualizarFundoModels.actualizarFundo().success(function(data){
		$scope.actualizarFundo = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarFundoControllers', function($scope, insertarFundoModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosFundo = function(fundo){

			insertarFundoModels.insertarFundo(fundo);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosFundo= function(fundo){

		$scope.fundo = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarFundoControllers', function($scope,  eliminarFundoModels) {

	eliminarFundoModels.eliminarFundo().success(function(data){
		$scope.obtenerFundo = data;
	});

});

