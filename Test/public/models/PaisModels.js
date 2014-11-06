// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosPaisesModels', function($http){

  this.todosLosPaises = function(){

		return $http({method:'GET',url:'http://localhost:3000/pais/todosLosPaises'});
  			
    }  

});


BioFrut.service('obtenerNombrePaisesModels', function($http){

  this.obtenerNombrePaises = function(){

    return $http({method:'GET',url:'http://localhost:3000/pais/obtenerNombrePaises'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerPaisModels', function($http){

  this.obtenerPais = function(){

  		return $http({method:'GET', url:'http://localhost:3000/pais/obtenerDatosPais'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarPaisModels', function($http){

  this.actualizarPais = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/pais/actualizarPais/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarPaisModels', function($http){

  this.insertarPais = function(pais){
    
  var pais = JSON.stringify(pais);
  console.log(pais);
  return $http({method:'POST', url:'http://localhost:3000/pais/insertarPais/pais', data: pais});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarPaisModels', function($http){

  this.obtenerPais = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/pais/eliminarPais/1'});
  }

});