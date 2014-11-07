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

exports.todosLosControlesBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM controlbodega ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(JSON.stringify(rows));
	});
};

// exports.obtenerDatosPerfiles = function(req, res){
// 	res.header("Access-Control-Allow-Origin","http://localhost:5000");
// 	conexion.query('SELECT usuario.IdUsuario, usuario.nombre, usuario.Apellido, cargo.Area, perfil.Login, cargo.Nombre FROM usuario, cargo, perfil WHERE usuario.IdCargo=cargo.IdCargo and usuario.IdPerfil=perfil.IdPerfil order by usuario.IdUsuario;',function(err, rows){
// 		if(err) throw console.log(err);
// 		res.send(rows);
// 	});
// };
 
 
exports.obtenerControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM controlbodega WHERE IdControlBodega="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO controlbodega SET ? ;",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE controlbodega SET CantidadPale='"+req.body.cantidadPale+"', Fecha='"+req.body.fecha+"'', Hora='"+req.body.hora+"'' WHERE IdGuia="+req.body.idGuia+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarControlBodega = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM controlbodega WHERE IdControlBodega="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};