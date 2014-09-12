var es = {
	"index.home": { "text": "Inicio" },
	"index.products": { "text": "Productos" },
    "index.contact": { "text": "Contacto" },
    "index.search": { "text": "Buscar" },
    "index.searchHolder": { "placeholder": "Buscar" },
    "index.language": { "text": "Lenguaje" },
    "index.spanish": { "text": "Español" },
    "index.english": { "text": "Ingles" },
    "index.admin": { "text": "Administrador" }
};

var en = {
	"index.home": { "text": "Home" },
	"index.products": { "text": "Products" },
    "index.contact": { "text": "Contact" },
    "index.search": { "text": "Search" },
    "index.searchHolder": { "placeholder": "Search" },
    "index.language": { "text": "Language" },
    "index.spanish": { "text": "Spanish" },
    "index.english": { "text": "English" },
    "index.admin": { "text": "Administrator" }
};

function loadAbjson(json){
	window.abjson.load({ 
		source : json
		}, function(){
			$('body').abjson();				
	});
}

$(window.document).ready(function(){
	loadAbjson(es);
});

module.exports = function(lang){
	if (lang === 'es') {
		loadAbjson(es);
	} else {
		loadAbjson(en);
	}
};