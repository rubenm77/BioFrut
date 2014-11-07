// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosPalesModels', function($http){

  this.todosLosPales= function(){

		return $http({method:'GET',url:'http://localhost:3000/pale/todosLosPales'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerPaleModels', function($http){

  this.obtenerPale = function(){

  		return $http({method:'GET', url:'http://localhost:3000/pale/obtenerDatosPale'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarPaleModels', function($http){

  this.actualizarPale = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/pale/actualizarPale/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarPaleModels', function($http){

  this.insertarPale = function(pale){
    
  var pale = JSON.stringify(pale);
  console.log(pale);
  return $http({method:'POST', url:'http://localhost:3000/pale/insertarPale/pale', data: pale});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarPaleModels', function($http){

  this.obtenerPale = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/pale/eliminarPale/1'});
  }

});