// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosFundosModels', function($http){

  this.todosLosFundos = function(){

		return $http({method:'GET',url:'http://localhost:3000/fundo/todosLosFundos'});
  			
    }  

});


BioFrut.service('obtenerNombreFundosModels', function($http){

  this.obtenerNombreFundos = function(){

    return $http({method:'GET',url:'http://localhost:3000/fundo/obtenerNombreFundos'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerFundoModels', function($http){

  this.obtenerFundo = function(){

  		return $http({method:'GET', url:'http://localhost:3000/fundo/obtenerDatosUsuario'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarFundoModels', function($http){

  this.actualizarFundo = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/fundo/actualizarFundo/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarFundoModels', function($http){

  this.insertarFundo = function(fundo){
    
  var fundo = JSON.stringify(fundo);
  
  return $http({method:'POST', url:'http://localhost:3000/fundo/insertarFundo/fundo', data: fundo});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarFundoModels', function($http){

  this.obtenerFundo = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/fundo/eliminarFundo/1'});
  }

});