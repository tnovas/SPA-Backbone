var express 	= require('express');
var app 		= express();
var bodyParser  = require('body-parser');
var methodOverride = require('method-override');			

app.use(bodyParser());
app.use(methodOverride());

var Home = {
    description: 'CITYAGRO es una empresa joven, que distribuye productos y provee servicios para el Profesional en el Manejo de Plagas, mediante la modalidad de servicio de entrega �puerta a puerta�. Los productos que ofrecemos al profesional, son de laboratorios de reconocida trayectoria, los cuales permiten obtener los mejores resultados de eficacia. Centramos nuestros servicios en la asistencia t�cnica, hacia la mejor opci�n para el profesional dentro del abanico de posibilidades existentes. Para ello, avalan nuestro conocimiento, m�s 20 a�os de experiencia en la industria agroqu�mica de control de plagas. Tambi�n efectuamos servicios de Direcci�n T�cnica para empresas en la Ciudad de Buenos Aires, Capacitaciones T�cnicas para los t�cnicos aplicadores, y efectuamos las Direcciones y Asistencia T�cnica en registros de productos en el SENASA y el INAL-ANMAT, para empresas fabricantes MANEJO DE PLAGAS URBANAS Y USO SEGURO DE PLAGUICIDAS Nivel Introductorio modalidad presencialPic 2 CITYAGRO es auspiciante junto con Chemot�cnica de este importante curso, dictado por el Ministerio de Asuntos Agrarios de la Provincia de Buenos Aires. El mismo se llevar� a cabo los d�as 12 y el 26 de septiembre de 2013 en la Facultad de Cs. Veterinarias de la Universidad de Buenos Aires. M�s informaci�n Pic 1Si Usted es PMP, socio de BayPremium de Bayer. Los puntos por su compra de productos Bayer ES, ingresar�n autom�ticamente a su cuenta BayPremium. Si todav�a no pertenece al programa o quiere revisar sus puntos, acceda a trav�s de este: Link a BayPremium Link a las C�maras de los Profesionales en el Manejo de Plagas CoaplaAPMPU CAECPLA'
};

var Products = [{
            title: '3M - Cartucho serie 6001',
            description: 'Cartucho de la serie 6000 para vapores org�nicos.',
            image: 'http://cityagro.com.ar/productImages/cartucho6001.JPG'
        },{
            title: '3M - Prefiltro para part�culas 5N11',
            description: 'Prefiltro para part�culas de filtros serie 6000, electroest�tico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para part�culas 5N11',
            description: 'Prefiltro para part�culas de filtros serie 6000, electroest�tico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para part�culas 5N11',
            description: 'Prefiltro para part�culas de filtros serie 6000, electroest�tico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para part�culas 5N11',
            description: 'Prefiltro para part�culas de filtros serie 6000, electroest�tico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        },{
            title: '3M - Prefiltro para part�culas 5N11',
            description: 'Prefiltro para part�culas de filtros serie 6000, electroest�tico.',
            image: 'http://cityagro.com.ar/productImages/Prefiltro5N11.JPG'
        }
    ];

app.get('/api/home', function(req, res) {	
    res.json(Home);
});

app.get('/api/products', function(req, res) {               
    res.json(Products);
});

app.get('*', function(req, res) {	
    res.sendfile('.'+ req.originalUrl);				
});

app.listen(9002, function() {
    console.log('App listening on port 9002');
});