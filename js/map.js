var bgs=[],
	id = 0;

var drawMap = function(){
	for(var i=0;i<tilesY;i++){
		for(var j=0;j<tilesX;j++, id++){
			bgs[id] = new BG();
			//bgs[id].draw();
			x += tileW;
		}
		y += tileH;
		x = 0;
	}
}

var renderMap = function(){
	ctx.beginPath();
	ctx.fillStyle = "#000";
	ctx.fillRect(0,0,ctxW, ctxH);
	ctx.closePath();
	for(var i=0;i<bgs.length;i++){
		bgs[i].draw();
	}
}

var BG = function(){
	this.id =id;
	this.width = tileW;
	this.height = tileH;
	this.x = x;
	this.y = y;
	this.full = this.y == ctxH - tileH ? true : false;
}

BG.prototype = {
	draw: function(){ 
		ctx.fillStyle = "#000";
		ctx.fillRect(x, y, this.width, this.height);
		ctx.strokeRect(x, y, this.width, this.height);
	}

}

