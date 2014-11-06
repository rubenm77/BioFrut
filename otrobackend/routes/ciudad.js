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

exports.todasLasCiudades = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT ciudad.IdCiudad, ciudad.Nombre, region.Nombre as 'Region' FROM ciudad, region  WHERE ciudad.IdRegion=region.IdRegion;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.obtenerNombreCiudades = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query('SELECT Nombre FROM ciudad;',function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};
 
 
exports.obtenerCiudad = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM ciudad WHERE IdCiudad="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarCiudad = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO ciudad VALUES ('"+req.body.IdCiudad+"', '"+req.body.Nombre+"', (SELECT IdRegion FROM region WHERE Nombre='"+req.body.IdRegion+"'));",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarCiudad = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE ciudad SET Nombre='"+req.body.nombre+"' WHERE IdCiudad="+req.body.idCiudad+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarCiudad = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM ciudad WHERE IdCiudad="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};