var express 	= require('express');
var app 		= express();
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');			

app.use(bodyParser());
app.use(methodOverride());

var Home = {
    description: 'CITYAGRO es una empresa joven, que distribuye productos y provee servicios para el Profesional en el Manejo de Plagas, mediante la modalidad de servicio de entrega puerta a puerta. Los productos que ofrecemos al profesional, son de laboratorios de reconocida trayectoria, los cuales permiten obtener los mejores resultados de eficacia. Centramos nuestros servicios en la asistencia tecnica, hacia la mejor opcion para el profesional dentro del abanico de posibilidades existentes. Para ello, avalan nuestro conocimiento, mas 20 anos de experiencia en la industria agroquimica de control de plagas. Tambien efectuamos servicios de Direccion Tecnica para empresas en la Ciudad de Buenos Aires, Capacitaciones Tecnicas para los tecnicos aplicadores, y efectuamos las Direcciones y Asistencia Tecnica en registros de productos en el SENASA y el INAL-ANMAT, para empresas fabricantes MANEJO DE PLAGAS URBANAS Y USO SEGURO DE PLAGUICIDAS Nivel Introductorio modalidad presencialPic 2 CITYAGRO es auspiciante junto con Chemotecnica de este importante curso, dictado por el Ministerio de Asuntos Agrarios de la Provincia de Buenos Aires. El mismo se llevara a cabo los dias 12 y el 26 de septiembre de 2013 en la Facultad de Cs. Veterinarias de la Universidad de Buenos Aires. Mas informacion Pic 1Si Usted es PMP, socio de BayPremium de Bayer. Los puntos por su compra de productos Bayer ES, ingresaran automaticamente a su cuenta BayPremium. Si todavia no pertenece al programa o quiere revisar sus puntos, acceda a traves de este: Link a BayPremium Link a las Camaras de los Profesionales en el Manejo de Plagas CoaplaAPMPU CAECPLA'
};

var Products = [{
            title: '3M - Cartucho serie 6001',
            description: 'Cartucho de la serie 6000 para vapores organicos.',
            image: 'http://cityagro.com.ar/productImages/cartucho6001.JPG'
        },{
            title: '3M - Prefiltro para particulas 5N11',
            description: 'Prefiltro para particulas de filtros serie 6000, electroestatico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para particulas 5N11',
            description: 'Prefiltro para particulas de filtros serie 6000, electroestatico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para particulas 5N11',
            description: 'Prefiltro para particulas de filtros serie 6000, electroestatico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para particulas 5N11',
            description: 'Prefiltro para particulas de filtros serie 6000, electroestatico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para particulas 5N11',
            description: 'Prefiltro para particulas de filtros serie 6000, electroestatico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        }
    ];

var User = {
            id: '1',
            nombre: 'Tomas',
            mail: 'tnovas@gmail.com',
        };

app.get('/api/home', function(req, res) {
    res.json(Home);
});

app.get('/api/products', function(req, res) {               
    res.json(Products);
});

app.get('/api/login', function(req, res) { 
    if (req.query.email !== 'tnovas@gmail.com' || req.query.password !== '123456'){
        res.statusCode = 401;
    }

    res.json(User);
});

app.get('*', function(req, res) {	
    res.sendfile('.'+ req.originalUrl);				
});

var port = process.env.PORT || 8080;

app.listen(port, function() {
    console.log('App listening on port ' + port);
});