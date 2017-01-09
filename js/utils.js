function Random(min, max) {
    return Math.floor(Math.random() * max) + min;
}

var Game = function(key){
	var $body = document.querySelector("body");
	var start = false;
	var key = key;
	this.setStart = function(){

		if(key != 37 && key != 39 && key != 40){
			//debugger;
			$body.addEventListener("keydown", function(e){
				if(e.keyCode === key){
					start = !start;
				}
			})
		} else {
			console.warn("unvalid key/s set");
		}
	};
	this.getStart = function(){
		return start; 
	};
}
