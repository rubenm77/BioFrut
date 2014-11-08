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

exports.todasLasZonas = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT zona.IdZona, zona.Nombre, zona.TotalPale, bodega.Nombre as 'Bodega', tipoalmacenaje.Nombre as 'Almacenaje' FROM zona, bodega, tipoalmacenaje WHERE zona.IdBodega=bodega.IdBodega AND zona.IdTipoAlmacenaje=tipoalmacenaje.IdTipoAlmacenaje ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(JSON.stringify(rows));
	});
};

exports.obtenerNombreZonas = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query('SELECT Nombre FROM zona;',function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};
 
 
exports.obtenerZona = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("SELECT * FROM zona WHERE IdZona="+req.params.codigo+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.insertarZona = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("INSERT INTO zona VALUES ('"+req.body.IdZona+"', '"+req.body.Nombre+"','"+req.body.TotalPale+"', (SELECT IdBodega FROM bodega WHERE Nombre='"+req.body.IdBodega+"'), (SELECT IdTipoAlmacenaje FROM tipoalmacenaje WHERE Nombre='"+req.body.IdTipoAlmacenaje+"'));",req.body, function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.actualizarZona = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("UPDATE zona SET Nombre='"+req.body.nombre+"', Temperatura='"+req.body.temperatura+"'', IdBodega='"+req.body.idBodega+"'', IdTipoAlmacenaje='"+req.body.idTipoAlmacenaje+"'' WHERE IdZona="+req.body.idZona+" ;", function(err, rows){
		if(err) throw console.log(err);
		res.send(rows);
	});
};

exports.eliminarZona = function(req, res){
	res.header("Access-Control-Allow-Origin","http://localhost:5000");
	conexion.query("DELETE FROM zona WHERE IdZona="+req.body.codigo+";", function(err, rows){
		if(err) throw console.log(err);s
		res.send(rows);
	});
};