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

exports.todasLasGuias = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM guia ;", function(err, rows){
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
 
 
exports.obtenerGuia = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM guia WHERE IdGuia="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarGuia = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO guia SET ? ;",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarGuia = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE guia SET CantidadBandeja='"+req.body.cantidadBandeja+"', Fecha='"+req.body.fecha+"'', Hora='"+req.body.hora+"'' WHERE IdGuia="+req.body.idGuia+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarGuia = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM guia WHERE IdGuia="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};