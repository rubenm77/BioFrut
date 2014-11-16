// Gestiona la comunicacion entre el API RESTful y los Views, obteniendo todos los usuarios del sistema
BioFrut.controller('reporteProduccionBarCuadrillasControllers', function($scope,cityService){     
      var i=null;
      $scope.service = cityService;
      cityService.initCities();
  

  $scope.$watch('service.getCity()', function(newVal) {

      var prueba=[];
      var prueba2=null;

    $scope.ultimaActualizacion = ultimaActualizacion();
   
    var bandejas=obtenerBandejas(newVal); 
    var nombres=obtenerNombres(newVal);
    var kpi=KPI(newVal);

    for(b in kpi){
      if(kpi[b].Bandejas !== undefined){
        prueba2=prueba2+kpi[b].Bandejas;
      }
      
    };

      

      // if($scope.puntaje){}
      
    
   
    for(a in kpi){
     
      if(kpi[a].Nombre !== undefined){
      prueba.push(kpi[a]);
    }
  
    };

  

    if($scope.puntaje === undefined || $scope.puntaje === null ||  $scope.produccion === undefined || $scope.produccion === null){

     // total de bandejas generadas durante un dia
        $scope.puntaje=prueba2;

      
    // ranking de las cuadrillas mas productivas
        $scope.produccion= prueba;
      
        
        
      
      // console.log($scope.produccion.length);
   }


    $scope.config={};
    $scope.chart = null;
    $scope.donut = null;
      // console.log(bandejas);
    $scope.config.data2=
    $scope.config.data1 = bandejas;
      // console.log($scope.config.data1);
    $scope.typeOptions = ["line","bar","spline","step","area","area-step","area-spline","pie","donut"];
 
    $scope.config.type1 = $scope.typeOptions[6];
    // $scope.config.type2=$scope.typeOptions[0];

    var barConfig = {};
        barConfig.bindto = '#chart';
        barConfig.data = {};
        barConfig.data.json = {};
        barConfig.data.json.Cuadrillas = $scope.config.data1; 
        barConfig.data.colors = {"Cuadrillas":"#20CD4C"};
        // config.size = {"width":"1000"};
        barConfig.grid = {"x":{"show":true},"y":{"show":true}};
        barConfig.axis = {"y":{"label":{"text":"Cantidad de Bandejas Producidas","position":"outer-middle"}}};
        barConfig.data.types = {"Cuadrillas":$scope.config.type1};
        barConfig.axis = {"x":{"type":"category","categories": nombres}}; 
        barConfig.legend = {"show":false};

        $scope.chart = c3.generate(barConfig); 


            });   



    });



BioFrut.service('cityService', function($http) {


   var that =this;
  this.Nombre = [];
  
  this.initCities = function() {

       $http({method:'GET',url:'http://localhost:3000/reporte/reporteProduccionCuadrilla'}).success(function(data) {
          
            that.Nombre = data;

      });

  };
  
  this.getCity = function() {
      return this.Nombre;
  };



});





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