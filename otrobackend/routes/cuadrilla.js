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

exports.todasLasCuadrillas = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT cuadrilla.IdCuadrilla, cuadrilla.Nombre, tarjetatrabajador.IdTarjeta, huerto.Nombre as 'Huerto' FROM cuadrilla, tarjetatrabajador, huerto WHERE cuadrilla.IdTarjeta=tarjetatrabajador.IdTarjeta AND cuadrilla.IdHuerto=huerto.IdHuerto;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.obtenerNombreCuadrillas = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query('SELECT Nombre FROM cuadrilla;',function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};
 
 
exports.obtenerCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM cuadrilla WHERE IdCuadrilla="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO cuadrilla VALUES ('"+req.body.IdCuadrilla+"', '"+req.body.Nombre+"','"+req.body.IdTarjeta+"', (SELECT IdHuerto FROM huerto WHERE Nombre='"+req.body.IdHuerto+"'));", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE cuadrilla SET Nombre='"+req.body.nombre+"' WHERE IdCuadrilla="+req.body.IdCuadrilla+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarCuadrilla = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM cuadrilla WHERE IdCuadrilla="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};