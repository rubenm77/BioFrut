// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosDespachosModels', function($http){

  this.todosLosDespachos= function(){

		return $http({method:'GET',url:'http://localhost:3000/despacho/todosLosDespachos'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
BioFrut.service('obtenerNombreDespachosModels', function($http){

  this.obtenerNombreDespachos = function(){

    return $http({method:'GET',url:'http://localhost:3000/despacho/obtenerNombreDespachos'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerDespachoModels', function($http){

  this.obtenerDespacho = function(){

  		return $http({method:'GET', url:'http://localhost:3000/despacho/obtenerDatosDespacho'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarDespachoModels', function($http){

  this.actualizarDespacho = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/despacho/actualizarDespacho/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarDespachoModels', function($http){

  this.insertarDespacho = function(despacho){
    
  var despacho = JSON.stringify(despacho);
  console.log(despacho);
  return $http({method:'POST', url:'http://localhost:3000/despacho/insertarDespacho/despacho', data: despacho});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarDespachoModels', function($http){

  this.obtenerDespacho = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/despacho/eliminarDespacho/1'});
  }

});