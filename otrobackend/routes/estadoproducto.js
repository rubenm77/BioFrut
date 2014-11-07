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

exports.todosLosEstadosProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM estadoproducto ;", function(err, rows){
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
 
 
exports.obtenerEstadoProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM estadoproducto WHERE IdStock="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarEstadoProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO estadoproducto SET ? ;",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarEstadoProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE estadoproducto SET CantidadPales='"+req.body.cantidadPales+"', IdBodega='"+req.body.idBodega+"'' WHERE IdStock="+req.body.idStock+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarEstadoProducto = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM eliminarEstadoProducto WHERE IdStock="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};