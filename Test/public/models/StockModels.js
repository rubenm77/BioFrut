// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosStocksModels', function($http){

  this.todosLosStocks= function(){

		return $http({method:'GET',url:'http://localhost:3000/stock/todosLosStocks'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerStockModels', function($http){

  this.obtenerStock = function(){

  		return $http({method:'GET', url:'http://localhost:3000/stock/obtenerDatosStock'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarStockModels', function($http){

  this.actualizarStock = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/stock/actualizarStock/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarStockModels', function($http){

  this.insertarStock = function(stock){
    
  var stock = JSON.stringify(stock);
  console.log(stock);
  return $http({method:'POST', url:'http://localhost:3000/stock/insertarStock/stock', data: stock});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarStockModels', function($http){

  this.obtenerStock = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/stock/eliminarStock/1'});
  }

});