// rescata todos los usuarios del sistema desde el API RESTful
BioFrut.service('todasLasBandejasModels', function($http){

  this.todasLasBandejas = function(){

		return $http({method:'GET',url:'http://localhost:3000/bandeja/todasLasBandejas'});
  			
    }  

});


// obtiene un usuario en especifico del sistema desde el API RESTful
BioFrut.service('obtenerBandejaModels', function($http){

  this.obtenerBandeja = function(){

  		return $http({method:'GET', url:'http://localhost:3000/bandeja/obtenerDatosBandeja'}).success(function(data){
  		});
  }

});


// actualizar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('actualizarBandejaModels', function($http){

  this.actualizarBandeja = function(){

  		return $http({method:'PUT', url:'http://localhost:3000/bandeja/actualizarBandeja/1'}).success(function(data){
  		});
  }

});


// insertar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('insertarBandejaModels', function($http){

  this.insertarBandeja = function(bandeja){


  var numero=bandeja.NumeroBandeja;
  var fecha=bandeja.Fecha;
  var hora=bandeja.Hora;
  var tarjeta=bandeja.IdTarjeta;
  var tproducto=bandeja.IdTipoProducto;
  console.log(tarjeta);
  console.log(tproducto);
  var v1=validaNumero(numero);
  var v2=validaFecha(fecha);
  var v3=validaTarjeta(tarjeta);
  var v4=validaProducto(tproducto);

  var respueta=new Array();
  respueta.push(v1);
  respueta.push(v2);
  respueta.push(v3);
  respueta.push(v4);
console.log(respueta);
  
  var bandeja = JSON.stringify(bandeja);
  // return $http({method:'POST', url:'http://localhost:3000/bandeja/insertarBandeja/bandeja', data: bandeja});

  }
  		

});

// eliminar un usuario en especifico del sistema hacia el API RESTful
BioFrut.service('eliminarBandejaModels', function($http){

  this.obtenerBandeja = function(){

  		return $http({method:'DELETE', url:'http://localhost:3000/bandeja/eliminarBandeja/1'});
  }

});

function validaNumero(numero) {
  var exregu= new RegExp("^\d+$");
  if(numero.length===0){
  
  return("Ingrese Cantidad de bandeja");

  }else if(!exregu.test(numero)){

  return("Ingrese numeros positivos");
  }
}

function validaFecha(fecha) {

// var f = new Date(); 
// document.write(f.getDate() + "/" 
// + (f.getMonth() +1) + "/" 
// + f.getFullYear());

}

function validaHora(hora){


}

function validaTarjeta (tarjeta) {
 
 if(tarjeta===undefined){
 return("Seleccione un IdTarjeta");
 }else{}
}


function validaProducto(tproducto){
if(tproducto===undefined){
return("Seleccione un Tipo de Producto");
}else{}



}