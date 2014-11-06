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

exports.todosLosPales = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM pale ;", function(err, rows){
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
 
 
exports.obtenerPale = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM pale WHERE IdPale="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarPale = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO pale SET ? ;",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarPale = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE pale SET CantidadBandeja='"+req.body.cantidadBandeja+"', Fecha='"+req.body.fecha+"'', hora='"+req.body.hora+"'', IdGuia='"+req.body.idGuia+"'', IdStock='"+req.body.idStock+"'', IdControl='"+req.body.idControl+"'' WHERE IdPale="+req.body.idPale+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarPale = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM pale WHERE IdPale="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};