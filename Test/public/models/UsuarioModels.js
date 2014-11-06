// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosUsuariosModels', function($http){

  this.todosLosUsuarios = function(){
    
		return $http({method:'get',url:'http://localhost:3000/usuario/todosLosUsuarios'});
  			
    }  

});

// // rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerUsuarioModels', function($http){

  this.obtenerUsuario = function(){

  		return $http({method:'GET', url:'http://localhost:3000/usuario/obtenerUsuario'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarUsuarioModels', function($http){

  this.actualizarUsuario = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/usuario/actualizarUsuario/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarUsuarioModels', function($http){

  this.insertarUsuario = function(usuario){
    
  var usuario = JSON.stringify(usuario);
  console.log(usuario);
  return $http({method:'POST', url:'http://localhost:3000/usuario/insertarUsuario/usuario', data: usuario});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarUsuarioModels', function($http){

  this.obtenerUsuario = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/usuario/eliminarUsuario/1'});
  }

});