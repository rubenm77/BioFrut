// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosUsuariosControllers', function($scope, todosLosUsuariosModels){

	todosLosUsuariosModels.todosLosUsuarios().success(function(data){
		$scope.todosLosUsuarios = data;
	}); 
	

});



// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerUsuarioControllers', function($scope, obtenerUsuarioModels) {

	obtenerUsuarioModels.obtenerUsuario().success(function(data){
		$scope.obtenerUsuario = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarUsuarioControllers', function($scope, actualizarUsuarioModels) {

	actualizarUsuarioModels.actualizarUsuario().success(function(data){
		$scope.actualizarUsuario = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarUsuarioControllers', function($scope, insertarUsuarioModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosUsuario = function(usuario){

			insertarUsuarioModels.insertarUsuario(usuario);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosUsuario = function(usuario){

		$scope.usuario = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarUsuarioControllers', function($scope,  eliminarUsuarioModels) {

	eliminarUsuarioModels.eliminarUsuario().success(function(data){
		$scope.obtenerUsuario = data;
	});

});

BioFrut.controller('validaUsuarioController', function ($scope) {
    $scope.actionForm=function(){
        alert('ng-show');
    };
});