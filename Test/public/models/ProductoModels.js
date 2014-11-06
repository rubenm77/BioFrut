// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosProductosModels', function($http){

  this.todosLosProductos = function(){

		return $http({method:'GET',url:'http://localhost:3000/producto/todosLosProductos'});
  			
    }  

});

BioFrut.service('obtenerNombreProductosModels', function($http){

  this.obtenerNombreProductos = function(){

    return $http({method:'GET',url:'http://localhost:3000/producto/todosLosProductos'});
        
    }  

});



// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerProductoModels', function($http){

  this.obtenerProducto = function(){

  		return $http({method:'GET', url:'http://localhost:3000/producto/obtenerDatosProducto'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarProductoModels', function($http){

  this.actualizarProducto = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/producto/actualizarProducto/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarProductoModels', function($http){

  this.insertarProducto = function(producto){
    
  var producto = JSON.stringify(producto);
  return $http({method:'POST', url:'http://localhost:3000/producto/insertarProducto/producto', data: producto});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarProductoModels', function($http){

  this.obtenerProducto = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/producto/eliminarProducto/1'});
  }

});