self.addEventListener('message',function(e){
	self.postMessage(buscarPrimos(parseInt(e.data)));
},false);
function buscarPrimos(n){
	if(n < 2) return [];
	var primos = [2];
	for(var i=3;i<=n;i++){
		var bandera = false;
		for(var j = 0;j<primos.length;j++){
			if(i % primos[j] == 0){			
				bandera = true;
				break;
			} 
		}
		if(!bandera) primos.push(i);
	}
	return primos;
}