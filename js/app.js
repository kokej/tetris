	var $body = document.querySelector("body"),
		canvas = document.getElementById("canvas"),
	  	ctx = canvas.getContext("2d"),
		ctxW = canvas.width,
		ctxH = canvas.height,
		sw = 0,
		x = 0,
		y = 0,
		tilesX = 10,
		tilesY = 20,
		tileW = ctxW/tilesX,
		tileH = ctxH/tilesY
		game = new Game(13);


	game.setStart();
	var np = new Piece();
	$body.addEventListener("keydown", np.move.bind(np, game));
	setInterval(np.autoMove.bind(np, game), 1000);

	p.push(np);
	drawMap();
	
	var init = function(){
		
		if(game.getStart()){

			renderMap();
			
			for(i=0; i<p.length;i++){
				p[i].checkEndRows();
				p[i].draw();
			}

		} 	
		

		window.requestAnimationFrame(init);		
	
	}

	for(i=0; i<p.length;i++){
		if(p[i].moving){

		}		
	}	
	

	window.requestAnimationFrame(init);




