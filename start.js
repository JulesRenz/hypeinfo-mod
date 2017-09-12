let _modPath;

let prodChangeFunc = () => {
	
	$("products-overlay.ng-isolate-scope div.product.ng-scope div.info.ng-scope div.product-hype").each(function(index) {
		console.log('prodChangeFunc: ' + index)
		var hype=GetRootScope().settings.products[index].hype;
		var color="";
		if(hype < 25) {
			color="red";
			//$( this ).html('<span class="monospaced color-red text-bold">'+Math.round(hype)+'%</span><span class="dimmed"> Hype</span>')
		}
		else if (hype >= 25 && hype < 50) {
			color="yellow";
			//$( this ).html('<span class="monospaced color-yellow text-bold">'+Math.round(hype)+'%</span><span class="dimmed"> Hype</span>')
		}
		else {
			color="green";
			//$( this ).html('<span class="monospaced color-green text-bold">'+Math.round(hype)+'%</span><span class="dimmed"> Hype</span>')
		}
		
		$( this ).html('<span class="monospaced color-'+color+' text-bold">'+Math.round(hype)+'%</span><span class="dimmed"> Hype</span>')
		
	});
}



exports.initialize = modPath => {};
exports.onLoadGame = settings => {

	let $rootScope = GetRootScope();

	$rootScope.$on(GameEvents.ProductChange, prodChangeFunc);

	$("products-overlay.ng-isolate-scope div.product.ng-scope div.info.ng-scope").append('<div class="product-hype"></div>')
};
exports.onNewHour = settings => {};
exports.onNewDay = settings => {}; 