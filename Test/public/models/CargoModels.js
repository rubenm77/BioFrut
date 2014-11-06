// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosCargosModels', function($http){

  this.todosLosCargos = function(){

		return $http({method:'GET',url:'http://localhost:3000/cargo/todosLosCargos'});
  			
    }  

});

BioFrut.service('obtenerNombreCargosModels', function($http){

  this.obtenerNombreCargos = function(){

    return $http({method:'GET',url:'http://localhost:3000/cargo/obtenerNombreCargos'});
        
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerCargoModels', function($http){

  this.obtenerCargo = function(){

  		return $http({method:'GET', url:'http://localhost:3000/cargo/obtenerDatosCargo'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarCargoModels', function($http){

  this.actualizarCargo = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/cargo/actualizarCargo/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarCargoModels', function($http){

  this.insertarCargo = function(cargo){
    
  var cargo = JSON.stringify(cargo);
  console.log(cargo);
  return $http({method:'POST', url:'http://localhost:3000/cargo/insertarCargo/cargo', data: cargo});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarCargoModels', function($http){

  this.obtenerCargo = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/cargo/eliminarCargo/1'});
  }

});