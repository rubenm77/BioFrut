// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('reporteProduccionBarHuertosControllers', function($scope,cityService2){     
      var i = null;
      $scope.service2 = cityService2;
      cityService2.initCities2();
  

  $scope.$watch('service2.getCity2()', function(newVal) {
 
      var prueba=[];
      var prueba2=0;

    $scope.ultimaActualizacion = ultimaActualizacion();
   
    var bandejas2 = obtenerBandejas(newVal); 
    var nombre2 = obtenerNombres(newVal);
    var kpi = KPI(newVal);

    for(b in kpi){
      if(kpi[b].Bandejas !== undefined){
        prueba2=prueba2+kpi[b].Bandejas;
      }
    
    };

    
   
    for(a in kpi){
     
      if(kpi[a].Nombre !== undefined){
      prueba.push(kpi[a]);
    }
    };

  

    if($scope.puntaje === undefined || $scope.puntaje === null ||  $scope.produccion === undefined || $scope.produccion === null){

     // total de bandejas generadas durante un dia
        $scope.puntaje2=prueba2;

          $scope.total = prueba2/newVal.length;
      
    // ranking de las cuadrillas mas productivas
        $scope.produccion2= prueba;
      
        
        
      
      // console.log($scope.produccion.length);
   }

    $scope.config={};
    $scope.chart2 = null;
    $scope.donut = null;
      // console.log(bandejas);
    // $scope.config.data2=
    $scope.config.data2 = bandejas2;
      // console.log($scope.config.data1);
    $scope.typeOptions = ["line","bar","spline","step","area","area-step","area-spline","pie","donut"];
 
    $scope.config.type1 = $scope.typeOptions[2];
    // $scope.config.type2=$scope.typeOptions[0];

    var barConfig = {};
        barConfig.bindto = '#chartHuerto';
        barConfig.data = {};
        barConfig.data.json = {};
        barConfig.data.json.Cuadrillas = $scope.config.data2; 
        barConfig.data.colors = {"Cuadrillas":"red"};
        // config.size = {"width":"1000"};
        barConfig.grid = {"x":{"show":true},"y":{"show":true}};
        barConfig.axis = {"y":{"label":{"text":"Cantidad de Bandejas Producidas","position":"outer-middle"}}};
        barConfig.data.types = {"Cuadrillas":$scope.config.type1};
        barConfig.axis = {"x":{"type":"category","categories": nombre2}}; 
        barConfig.legend = {"show":false};

        $scope.chart2 = c3.generate(barConfig); 


            });   



    });



BioFrut.service('cityService2', function($http) {


   var that =this;
  this.Nombre = [];
  
  this.initCities2 = function() {

       $http({method:'GET',url:'http://localhost:3000/reporte/reporteProduccionHuerto'}).success(function(data) {
          
            that.Nombre = data;

      });

  };
  
  this.getCity2 = function() {
      return this.Nombre;
  };



});


function obtenerDatosGrafico(datosGrafico){

    var datos=[];
    

    for(i=0; i < datosGrafico.length; i++){

      datos.push(datosGrafico[i].Cuadrilla);
      datos.push(datosGrafico[i].Bandejas);
      
      };

      return datos;
      
}



function obtenerBandejas(bandejas){

    var Bandejas=[];
    

    for(i=0; i < bandejas.length; i++){
       Bandejas.push(bandejas[i].Bandejas);
      
      };

      return Bandejas;
      
}

function obtenerNombres(nombres){

    var Nombres=[];

   for(i=0; i < nombres.length; i++){
       Nombres.push(nombres[i].Nombre);
      
      };

      return Nombres;
}

function obtenerTarjetas(tarjetas){

    var Tarjetas=[];

   for(i=0; i < tarjetas.length; i++){
       Tarjetas.push(tarjetas[i].Tarjeta);
      
      };

      return Tarjetas;
}


function obtenerHuertos(huertos){

    var Huertos=[];

   for(i=0; i < huertos.length; i++){
       Huertos.push(huertos[i].Huerto);
      
      };

      return Huertos;
}

function obtenerCuadrillas(cuadrillas){

    var Cuadrillas=[];

   for(i=0; i < cuadrillas.length; i++){
       Cuadrillas.push(cuadrillas[i].Cuadrilla);
      
      };

      return Cuadrillas;
}


function ultimaActualizacion(){
  var ahora = new Date();
  var meses = new Array("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");

  var now=ahora.getDate()+" de "+meses[ahora.getMonth()]+" de "+ahora.getFullYear()+" - "+ahora.getHours()+":"+ahora.getMinutes()+":"+ahora.getSeconds();
  return now;

}


function KPI(datos){

  Array.prototype.orderByNumber=function(p,so){
    //algoritmo de ordenamiento sort
  if(so!=-1&&so!=1)so=1;
  this.sort(function(a,b){
    return(a[p]-b[p])*so;
  })
}

datos.orderByNumber('Bandejas',-1);

return datos;

}