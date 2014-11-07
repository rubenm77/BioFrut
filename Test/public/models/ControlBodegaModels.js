// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasGuiasModels', function($http){

  this.todasLasGuias = function(){

		return $http({method:'GET',url:'http://localhost:3000/guia/todasLasGuias'});
  			
    }  

});

// rescata todos los usuarios del sistema con el nombre del perfil y el cargo desde el API RESTful
// BioFrut.service('obtenerDatosUsuariosModels', function($http){

//   this.obtenerDatosUsuarios = function(){

//     return $http({method:'GET',url:'http://localhost:3000/usuario/obtenerDatosUsuarios'});
        
//     }  

// });


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerGuiaModels', function($http){

  this.obtenerGuia = function(){

  		return $http({method:'GET', url:'http://localhost:3000/guia/obtenerDatosGuia'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarGuiaModels', function($http){

  this.actualizarGuia = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/guia/actualizarGuia/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarGuiaModels', function($http){

  this.insertarGuia = function(guia){
    
  var guia = JSON.stringify(guia);
  console.log(guia);
  return $http({method:'POST', url:'http://localhost:3000/guia/insertarGuia/guia', data: guia});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarGuiaModels', function($http){

  this.obtenerGuia = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/guia/eliminarGuia/1'});
  }

});