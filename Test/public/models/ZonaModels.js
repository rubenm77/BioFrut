// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasZonasModels', function($http){

  this.todasLasZonas = function(){

		return $http({method:'GET',url:'http://localhost:3000/zona/todasLasZonas'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerZonaModels', function($http){

  this.obtenerZona = function(){

  		return $http({method:'GET', url:'http://localhost:3000/zona/obtenerDatosZona'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarZonaModels', function($http){

  this.actualizarZona = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/zona/actualizarZona/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarZonaModels', function($http){

  this.insertarZona = function(zona){
    
  var zona = JSON.stringify(zona);
  console.log(zona);
  return $http({method:'POST', url:'http://localhost:3000/zona/insertarZona/zona', data: zona});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarZonaModels', function($http){

  this.obtenerZona = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/zona/eliminarZona/1'});
  }

});