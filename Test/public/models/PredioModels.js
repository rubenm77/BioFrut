// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosPrediosModels', function($http){

  this.todosLosPredios= function(){

		return $http({method:'GET',url:'http://localhost:3000/predio/todosLosPredios'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerPredioModels', function($http){

  this.obtenerPredio = function(){

  		return $http({method:'GET', url:'http://localhost:3000/predio/obtenerDatosPredio'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarPredioModels', function($http){

  this.actualizarPredio = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/predio/actualizarPredio/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarPredioModels', function($http){

  this.insertarPredio = function(predio){
    
  var predio = JSON.stringify(predio);
  console.log(predio);
  return $http({method:'POST', url:'http://localhost:3000/predio/insertarPredio/predio', data: predio});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarPredioModels', function($http){

  this.obtenerPredio = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/predio/eliminarPredio/1'});
  }

});