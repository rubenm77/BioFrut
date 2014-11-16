// variable del proveedor de datos
var  mysql = require('mysql');

// creando conexion de Base de Datos
var conexion = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:''

});

// definiendo la base de datos que se utilizará
conexion.query('USE gestion');



// Variables que almacenan las operaciones de insertar, obtener, borrar y actualizar

exports.obtenerReporteCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT cuadrilla.Nombre, SUM(bandeja.NumeroBandeja) as 'Bandejas' FROM bandeja,cuadrilla,detalle_cuadrilla,tarjetatrabajador WHERE cuadrilla.IdCuadrilla=detalle_cuadrilla.IdCuadrilla AND detalle_cuadrilla.IdTarjeta=tarjetatrabajador.IdTarjeta AND bandeja.IdTarjeta=tarjetatrabajador.IdTarjeta group by cuadrilla.Nombre ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(JSON.stringify(rows));
		// console.log(rows);
	});
};

exports.obtenerReporteHuerto = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT SUM(Bandeja.NumeroBandeja) as 'Bandejas', huerto.Nombre FROM bandeja INNER JOIN tarjetatrabajador ON tarjetatrabajador.IdTarjeta = bandeja.IdTarjeta INNER JOIN detalle_cuadrilla ON detalle_cuadrilla.IdTarjeta = tarjetatrabajador.IdTarjeta INNER JOIN cuadrilla ON detalle_cuadrilla.IdCuadrilla = cuadrilla.IdCuadrilla INNER JOIN huerto ON huerto.IdHuerto = cuadrilla.IdHuerto group by  huerto.Nombre;", function(err, rows){
		if(err) throw console.log(err);
		res.send(JSON.stringify(rows));
		// console.log(rows);
	});
};