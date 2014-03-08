// Obetener una variable para acceder a las funcionalidades express
var express = require("express");
// Configurar Servidor
var app = express();


// hacemos que la pagina sea dinamica
var consolidate = require("consolidate");
//libreria  que nos permite configurar motores
var dust = require("dustjs-linkedin");
// motor para crear vistas dinamicas


app.listen(8081);

// Para imprimir en consola del servidor
console.log("Servidor levantado :)");

//Despachar archivos estaticos
//app.use("/", express.static(__dirname + "/vistas"));
app.use("/css", express.static(__dirname + "/css"));
app.use("/imagenes", express.static(__dirname + "/imagenes"));
app.use("/videos", express.static(__dirname + "/videos"));


//configurar nuestro motor de vistas
app.set("view engine", "dust");//nuestras vistas tendran extencion .dust
app.engine("dust", consolidate.dust);//indicando el engine que voy a usar
app.set("views",__dirname +"/vistas");//indicando la carpeta que tiene las vistas                                                   


//Hacemos que el sevidor pueda leer datos  que recibe el cliente
app.use(express.urlencoded());


//hacemos que el servidor responda a las peticiones  get
app.get("/index", function(request,response){
	// logica de como respondere a la peticion /index
	response.render("index");
});


app.get("/contacto", function(request,response){
	// logica de como respondere a la peticion /index
	response.render("contacto");
});


//respondemos  una peticion POST
app.post("/suscribirse",function(request,response){
	//Imprimir en consola
	console.log("Email:"+request.body.email);
	response.render("respuesta_suscribirse",{
		asunto:"Yo soy el servidor",
		email: request.body.email
	});
});



app.post("/contactar",function(request,response){
	//Imprimir en consola
	console.log("Nombre:"+request.body.email);
	console.log("Email:"+request.body.email);
	console.log("Website:"+request.body.web);
	console.log("Edad:"+request.body.edad);
	//console.log("Comentario:"+request.body.coment);
	
	//response.render("contactar");
	
	//response.send("datos enviados”");
	
	response.render("contactar",{
		nombre: request.body.nombre,
		email: request.body.email,
		web: request.body.web,
		edad: request.body.edad
	});
		
});
