// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasCiudadesModels', function($http){

  this.todasLasCiudades = function(){

		return $http({method:'GET',url:'http://localhost:3000/ciudad/todasLasCiudades'});
  			
    }  

});


BioFrut.service('obtenerNombreCiudadesModels', function($http){

  this.obtenerNombreCiudades = function(){

    return $http({method:'GET',url:'http://localhost:3000/ciudad/obtenerNombreCiudades'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerCiudadModels', function($http){

  this.obtenerCiudad = function(){

  		return $http({method:'GET', url:'http://localhost:3000/ciudad/obtenerDatosCiudad'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarCiudadModels', function($http){

  this.actualizarCiudad = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/ciudad/actualizarCiudad/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarCiudadModels', function($http){

  this.insertarCiudad = function(ciudad){
    
  var bodega = JSON.stringify(ciudad);
  console.log(ciudad);
  return $http({method:'POST', url:'http://localhost:3000/ciudad/insertarCiudad/ciudad', data: ciudad});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarCiudadModels', function($http){

  this.obtenerCiudad = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/ciudad/eliminarCiudad/1'});
  }

});