// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosHuertosModels', function($http){

  this.todosLosHuertos = function(){

		return $http({method:'GET',url:'http://localhost:3000/huerto/todosLosHuertos'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerHuertoModels', function($http){

  this.obtenerHuerto = function(){

  		return $http({method:'GET', url:'http://localhost:3000/huerto/obtenerDatosHuerto'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarHuertoModels', function($http){

  this.actualizarHuerto = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/huerto/actualizarHuerto/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarHuertoModels', function($http){

  this.insertarHuerto = function(huerto){
    
  var huerto = JSON.stringify(huerto);
  console.log(huerto);
  return $http({method:'POST', url:'http://localhost:3000/huerto/insertarHuerto/fundo', data: huerto});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarHuertoModels', function($http){

  this.obtenerHuerto = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/huerto/eliminarHuerto/1'});
  }

});