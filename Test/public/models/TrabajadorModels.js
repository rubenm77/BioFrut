// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todosLosTrabajadoresModels', function($http){

  this.todosLosTrabajadores = function(){

		return $http({method:'GET',url:'http://localhost:3000/trabajador/todosLosTrabajadores'});
  			
    }  

});

// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerNombreTrabajadoresModels', function($http){

  this.obtenerTrabajadores = function(){

      return $http({method:'GET', url:'http://localhost:3000/trabajador/obtenerNombreTrabajadores'}).success(function(data){
      });
  }

});

// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerTrabajadorModels', function($http){

  this.obtenerTrabajador = function(){

  		return $http({method:'GET', url:'http://localhost:3000/trabajador/obtenerDatosTrabajador'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarTrabajadorModels', function($http){

  this.actualizarTrabajador = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/trabajador/actualizarTrabajador/'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarTrabajadorModels', function($http){

  this.insertarTrabajador = function(trabajador){

    var x=trabajador.Rut.split("-");
    var z=validarut(x[0],x[1]);
    console.log(z);
    if(z){
  // var trabajador = JSON.stringify(trabajador);
  // return $http({method:'POST', url:'http://localhost:3000/trabajador/insertarTrabajador/trabajador', data: trabajador});
  }else{
    return "Rut Ingresado es Incorrecto";
  }

   
  
}

});


// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarTrabajadorModels', function($http){

  this.obtenerTrabajador = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/trabajador/eliminarTrabajador/1'});
  }

});



function validarut(ruti,dvi){
 var rut = ruti+"-"+dvi;
 if (rut.length<9)
     return(false)
  i1=rut.indexOf("-");
  dv=rut.substr(i1+1);
  dv=dv.toUpperCase();
  nu=rut.substr(0,i1);
 
  cnt=0;
  suma=0;
  for (i=nu.length-1; i>=0; i--)
  {
    dig=nu.substr(i,1);
    fc=cnt+2;
    suma += parseInt(dig)*fc;
    cnt=(cnt+1) % 6;
   }
  dvok=11-(suma%11);
  if (dvok==11) dvokstr="0";
  if (dvok==10) dvokstr="K";
  if ((dvok!=11) && (dvok!=10)) dvokstr=""+dvok;
 
  if (dvokstr==dv)
     return(true);
  else
     return(false);
}


  
  
