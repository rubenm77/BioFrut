// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosEstadoProductosModels', function($http){

  this.todosLosEstadoProductos = function(){

		return $http({method:'GET',url:'http://localhost:3000/estadoproducto/todosLosEstadoProductos'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
BioFrut.service('obtenerNombreEstadosModels', function($http){

  this.obtenerNombreEstados = function(){

    return $http({method:'GET',url:'http://localhost:3000/estadoproducto/obtenerNombreEstadoProducto'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerEstadoProductoModels', function($http){

  this.obtenerEstadoProductos = function(){

  		return $http({method:'GET', url:'http://localhost:3000/estadoproducto/obtenerEstadoProducto'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarEstadoProductosModels', function($http){

  this.actualizarEstadoProductos = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/estadoproducto/actualizarEstadoProducto/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarEstadoProductosModels', function($http){

  this.insertarEstadoProductos = function(estadoproducto){
    
  var estadoproducto = JSON.stringify(estadoproducto);
  console.log(estadoproducto);
  return $http({method:'POST', url:'http://localhost:3000/estadoproducto/insertarEstadoProducto/estadoproducto', data: estadoproducto});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarEstadoProductosModels', function($http){

  this.obtenerEstadoProductos = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/estadoproducto/eliminarEstadoProducto/1'});
  }

});