// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasGuiasControllers', function($scope, todasLasGuiasModels){

	todasLasGuiasModels.todasLasGuias().success(function(data){
		$scope.todasLasGuias= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerGuiaControllers', function($scope, obtenerGuiaModels) {

	obtenerGuiaModels.obtenerGuia().success(function(data){
		$scope.obtenerGuia= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarGuiaControllers', function($scope, actualizarGuiaModels) {

	actualizarGuiaModels.actualizarGuia().success(function(data){
		$scope.actualizarGuia = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarGuiaControllers', function($scope, insertarGuiaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosGuia= function(guia){

			insertarGuiaModels.insertarGuia(guia);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosGuia = function(guia){

		$scope.guia = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarGuiaControllers', function($scope,  eliminarGuiaModels) {

	eliminarGuiaModels.eliminarGuia().success(function(data){
		$scope.obtenerGuia = data;
	});

});

