var es, en;

function loadAbjson(json){
	window.abjson.load({ 
		source : json
		}, function(){
			$('body').abjson();				
	});
}

module.exports = function(lang){
	if (lang === 'es') {
		loadAbjson(es);
	} else {
		loadAbjson(en);
	}
};

$.getJSON( "locales/es/translation.json", function( data ) {
    es = data;
    loadAbjson(es);
 });

$.getJSON( "locales/en/translation.json", function( data ) {
    en = data;
 });
