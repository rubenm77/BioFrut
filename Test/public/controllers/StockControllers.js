// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('todosLosStocksControllers', function($scope, todosLosStocksModels){

	todosLosStocksModels.todosLosStocks().success(function(data){
		$scope.todosLosStocks = data;
	}); 

	

});

// // Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
// BioFrut.controller('obtenerDatosUsuariosControllers', function($scope, obtenerDatosUsuariosModels) {

// 	obtenerDatosUsuariosModels.obtenerDatosUsuarios().success(function(data){
// 		$scope.obtenerDatosUsuarios = data;
// 	});

// });


// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo un solo usuario del sistema
BioFrut.controller('obtenerStockControllers', function($scope, obtenerStockModels) {

	obtenerStockModels.obtenerStock().success(function(data){
		$scope.obtenerStock = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, actualizando un solo usuario del sistema
BioFrut.controller('actualizarStockControllers', function($scope, actualizarStockModels) {

	actualizarStockModels.actualizarStock().success(function(data){
		$scope.actualizarStock = data;
	});

});


// Gestiona la comunicacion entre el API RESTful y los Views, insertando un solo usuario del sistema
BioFrut.controller('insertarStockControllers', function($scope, insertarStockModels) {
	// integracion de patron observer
	$scope.$watch(function(){

		// boton almacenar nuevo usuario
		$scope.obtenerDatosStock = function(stock){

			insertarStockModels.insertarStock(stock);
					 // JSON.stringify(angular.copy(usuario));
				// console.log(JSON.stringify(angular.copy(usuario)));
		}

		// boton limpiar los campos del formulario nuevo usuario
		$scope.limpiarDatosStock= function(stock){

		$scope.stock = {};

		}

	});

	// insertarUsuarioModels.insertarUsuario().success(function(data){
	// 	$scope.insertarUsuario = data;
	// });

});


 // Gestiona la comunicacion entre el API RESTful y los Views, eliminando un solo usuario del sistema
BioFrut.controller('eliminarStockControllers', function($scope,  eliminarStockModels) {

	eliminarStockModels.eliminarStock().success(function(data){
		$scope.obtenerStock = data;
	});

});

