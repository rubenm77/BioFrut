// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosAlmacenajesModels', function($http){

  this.todosLosAlmacenajes = function(){

		return $http({method:'GET',url:'http://localhost:3000/almacenaje/todosLosAlmacenajes'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerAlmacenajeModels', function($http){

  this.obteneralmacenaje = function(){

  		return $http({method:'GET', url:'http://localhost:3000/almacenaje/obtenerDatosAlmacenaje'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarAlmacenajeModels', function($http){

  this.actualizarAlmacenaje = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/almacenaje/actualizarAlmacenaje/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarAlmacenajeModels', function($http){

  this.insertarAlmacenaje = function(almacenaje){
    
  var almacenaje = JSON.stringify(almacenaje);
  console.log(almacenaje);
  return $http({method:'POST', url:'http://localhost:3000/almacenaje/insertarAlmacenaje/almacenaje', data: almacenaje});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarAlmacenajeModels', function($http){

  this.obtenerAlmacenaje = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/almacenaje/eliminarAlmacenaje/1'});
  }

});