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

exports.todasLasCalificaciones = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM calificacion;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.obtenerNombreCalificaciones = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query('SELECT Nota FROM calificacion;',function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};
 
 
exports.obtenerCalificacion = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM calificacion WHERE IdCalificacion="+req.params.IdCalificacion+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarCalificacion = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO calificacion SET ? ;",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarCalificacion = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE calificacion SET Nombre='"+req.body.nombre+"' WHERE IdCalificacion="+req.body.idCalificacion+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarCalificacion = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM calificacion WHERE IdCalificacion="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};