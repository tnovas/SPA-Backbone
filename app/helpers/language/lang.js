$.i18n.init(function() {
	$('[data-i18n]').i18n();
});

module.exports = function(lang){
	$.i18n.setLng(lang, function() { $('[data-i18n]').i18n(); });
};