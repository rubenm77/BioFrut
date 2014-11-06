// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosPerfilesModels', function($http){

  this.todosLosPerfiles = function(){

		return $http({method:'GET',url:'http://localhost:3000/perfil/todosLosPerfiles'});
  			
    }  

});


BioFrut.service('obtenerNombrePerfilesModels', function($http){

  this.todosLosNombresPerfiles = function(){

    return $http({method:'GET',url:'http://localhost:3000/perfil/obtenerNombresPerfiles'});
        
    }  

});


// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerPerfilModels', function($http){

  this.obtenerPerfil = function(){

  		return $http({method:'GET', url:'http://localhost:3000/perfil/obtenerDatosPerfil'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarPerfilModels', function($http){

  this.actualizarPerfil = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/perfil/actualizarPerfil/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarPerfilModels', function($http){

  this.insertarPerfil = function(perfil){
    
  var perfil = JSON.stringify(perfil);
 
  return $http({method:'POST', url:'http://localhost:3000/perfil/insertarPerfil/perfil', data: perfil});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarPerfilModels', function($http){

  this.obtenerPerfil = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/perfil/eliminarPerfil/1'});
  }

});