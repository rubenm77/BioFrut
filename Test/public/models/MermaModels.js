// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasMermasModels', function($http){

  this.todasLasMermas = function(){

		return $http({method:'GET',url:'http://localhost:3000/merma/todasLasMermas'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerMermaModels', function($http){

  this.obtenerMerma = function(){

  		return $http({method:'GET', url:'http://localhost:3000/merma/obtenerDatosMerma'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarMermaModels', function($http){

  this.actualizarMerma = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/merma/actualizarMerma/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarMermaModels', function($http){

  this.insertarMerma = function(merma){
    
  var merma = JSON.stringify(merma);
  console.log(merma);
  return $http({method:'POST', url:'http://localhost:3000/merma/insertarMerma/merma', data: merma});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarMermaModels', function($http){

  this.obtenerMerma = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/merma/eliminarMerma/1'});
  }

});