// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todasLasMermasControllers', function($scope, todasLasMermasModels){

	todasLasMermasModels.todasLasMermas().success(function(data){
		$scope.todasLasMermas= data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerMermaControllers', function($scope, obtenerMermaModels) {

	obtenerMermaModels.obtenerMerma().success(function(data){
		$scope.obtenerMerma= data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarMermaControllers', function($scope, actualizarMermaModels) {

	actualizarMermaModels.actualizarMerma().success(function(data){
		$scope.actualizarMerma = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarMermaControllers', function($scope, insertarMermaModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosMerma= function(merma){

			insertarMermaModels.insertarMerma(merma);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosMerma = function(merma){

		$scope.merma = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarMermaControllers', function($scope,  eliminarMermaModels) {

	eliminarMermaModels.eliminarMerma().success(function(data){
		$scope.obtenerMerma = data;
	});

});

