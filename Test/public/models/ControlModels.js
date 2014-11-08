// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosControlesModels', function($http){

  this.todosLosControles = function(){

		return $http({method:'GET',url:'http://localhost:3000/control/todosLosControles'});
  			
    }  

});

// // rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
BioFrut.service('obtenerNombreControlesModels', function($http){

  this.obtenerNombreControles = function(){

    return $http({method:'GET',url:'http://localhost:3000/control/obtenerNombreControles'});
        
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerControlModels', function($http){

  this.obtenerControl = function(){

  		return $http({method:'GET', url:'http://localhost:3000/control/obtenerDatosControl'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarControlModels', function($http){

  this.actualizarControl = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/control/actualizarControl/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarControlModels', function($http){

  this.insertarControl = function(control){
    
  var control = JSON.stringify(control);
  console.log(control);
  return $http({method:'POST', url:'http://localhost:3000/control/insertarControl/control', data: control});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarControlModels', function($http){

  this.obtenerControl = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/control/eliminarControl/1'});
  }

});