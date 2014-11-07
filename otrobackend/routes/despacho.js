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

exports.todosLosDespachos = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM despacho ;", function(err, rows){
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
 
 
exports.obtenerDespacho= function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM despacho WHERE IdDespacho="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO despacho SET ? ;",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE despacho SET CantidadBandeja='"+req.body.cantidadBandeja+"', Fecha='"+req.body.fecha+"'', hora='"+req.body.hora+"'', IdGuia='"+req.body.idGuia+"'', IdStock='"+req.body.idStock+"'', IdControl='"+req.body.idControl+"'' WHERE IdPale="+req.body.idPale+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarDespacho = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM despacho WHERE IdPale="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};